"use strict";

var util = {
    isNull: function(arg) {
		return arg === null;
	},
    isObject: function(arg) {
        return typeof arg === 'object' && arg !== null;
    },
    isArray: function(arg) {
        return Array.isArray(arg);
    }
}
var querystring = {
    stringify: function(obj, sep, eq, options) {
        sep = sep || '&';
        eq = eq || '=';
        if (util.isNull(obj)) {
        	obj = undefined;
        }

    	var encode = encodeURIComponent;
    	if (options && typeof options.encodeURIComponent === 'function') {
    		encode = options.encodeURIComponent;
    	}
        
	    if (util.isObject(obj)) {
    		return Object.keys(obj).map(function(k) {
    			var ks = encode(stringifyPrimitive(k)) + eq;
    			
            	if (util.isArray(obj[k])) {
    				return obj[k].map(function(v) {
    					return ks + encode(stringifyPrimitive(v));
		    		}).join(sep);
    			} else {
    				return ks + encode(stringifyPrimitive(obj[k]));
    			}
    		}).join(sep);
    	}
    	return '';
    }
}

var paypal_sdk = function () {

    var sdk_version = '0.9.3';
    var default_options = {
        'mode': 'sandbox',
        'schema': 'https',
        'host': 'api.sandbox.paypal.com',
        'port': '',
        'openid_connect_schema': 'https',
        'openid_connect_host': 'api.sandbox.paypal.com',
        'openid_connect_port': '',
        'authorize_url': 'https://www.sandbox.paypal.com/webapps/auth/protocol/openidconnect/v1/authorize',
        'logout_url': 'https://www.sandbox.paypal.com/webapps/auth/protocol/openidconnect/v1/endsession',
        'headers': {}
    };

    function get_default_endpoint(mode) {
        return (typeof mode === "string" && mode === "live") ? "paypal.com" : "sandbox.paypal.com";
    }

    function get_default_api_endpoint(mode) {
        return 'api.' + get_default_endpoint(mode);
    }

    /* Merge Two Objects */

    function merge(obj1, obj2) {
        for (var p in obj2) {
            try {
                // Property in destination object set; update its value.
                if (obj2[p].constructor === Object) {
                    obj1[p] = merge(obj1[p], obj2[p]);

                } else {
                    obj1[p] = obj2[p];
                }
            } catch (e) {
                // Property in destination object not set; create it and set its value.
                obj1[p] = obj2[p];
            }
        }
        return obj1;
    }

    function copy_missing(obj1, obj2) {
        for (var p in obj2) {
            try {
                // Property in destination object set; update its value.
                if (obj2[p].constructor === Object) {
                    if (!obj1[p]) {
                        obj1[p] = {};
                    }

                } else if (!obj1[p]) {
                    obj1[p] = obj2[p];

                }
            } catch (e) {
                // Property in destination object not set; create it and set its value.
                obj1[p] = obj2[p];
            }
        }
        return obj1;
    }

    function configure(options) {
        default_options = merge(default_options, options);
    }

    function generate_token(config, cb) {

        if (typeof config === "function") {
            cb = config;
            config = default_options;
        } else if (!config) {
            config = default_options;
        } else {
            config = copy_missing(config, default_options);
        }

        var payload = 'grant_type=client_credentials';
        if (config.authorization_code) {
            payload = 'grant_type=authorization_code&response_type=token&redirect_uri=urn:ietf:wg:oauth:2.0:oob&code=' + config.authorization_code;
        } else if (config.refresh_token) {
            payload = 'grant_type=refresh_token&refresh_token=' + config.refresh_token;
        }

        var basicAuthString = 'Basic ' + window.btoa(config.client_id + ':' + config.client_secret);

        var http_options = {
            schema: config.schema || default_options.schema,
            host: get_default_api_endpoint(config.mode) || config.host || default_options.host,
            port: config.port || default_options.port,
            headers: {
                'Authorization': basicAuthString,
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };

        invoke('POST', '/v1/oauth2/token', payload, http_options, function (err, res) {
            var token = null;
            if (res) {
                if (!config.authorization_code) {
                    token = res.token_type + ' ' + res.access_token;
                }
                else {
                    token = res.refresh_token;
                }
            }
            cb(err, token);
        });

    }

    function update_token(http_options, error_callback, callback) {
        generate_token(http_options, function (error, token) {
            if (error) {
                error_callback(error, token);
            } else {
                http_options.headers.Authorization = token;
                callback();
            }
        });
    }


    function executeHttp(http_method, path, data, http_options, cb) {
        if (typeof http_options === "function") {
            cb = http_options;
            http_options = null;
        }
        if (!http_options) {
            http_options = default_options;
        } else {
            http_options = copy_missing(http_options, default_options);
        }

        //Get host endpoint using mode
        http_options.host = get_default_api_endpoint(http_options.mode) || http_options.host;

        function retry_invoke() {
            invoke(http_method, path, data, http_options, cb);
        }

        if (http_options.correlation_id) {
            http_options.headers['Paypal-Application-Correlation-Id'] = http_options.correlation_id;
        }
        
        if (http_options.headers.Authorization) {
            invoke(http_method, path, data, http_options, function (error, response) {
                if (error && error.httpStatusCode === 401 && http_options.client_id && http_options.headers.Authorization) {
                    http_options.headers.Authorization = null;
                    update_token(http_options, cb, retry_invoke);
                } else {
                    cb(error, response);
                }
            });
        } else {
            update_token(http_options, cb, retry_invoke);
        }
    }

    function invoke(http_method, path, data, http_options_param, cb) {
        //var client = (http_options_param.schema === 'http') ? http : https;
		
        var request_data = data;

        if (http_method === 'GET') {
            if (typeof request_data !== 'string') {
                request_data = querystring.stringify(request_data);
            }
            if (request_data) {
                path = path + "?" + request_data;
                request_data = "";
            }
        } else if (typeof request_data !== 'string') {
            request_data = JSON.stringify(request_data);
        }

        var http_options = {};

        if (http_options_param) {

            http_options = JSON.parse(JSON.stringify(http_options_param));

            if (!http_options.headers) {
                http_options.headers = {};
            }
            http_options.path = path;
            http_options.method = http_method;
            //if (request_data) {
            //    http_options.headers['Content-Length'] = Buffer.byteLength(request_data, 'utf-8');
            //}
			
            if (!http_options.headers.Accept) {
                http_options.headers.Accept = 'application/json';
            }

            if (!http_options.headers['Content-Type']) {
                http_options.headers['Content-Type'] = 'application/json';
            }

            if (http_method === 'POST' && !http_options.headers['PayPal-Request-Id']) {
                http_options.headers['PayPal-Request-Id'] = uuid.v4();
            }

            //http_options.headers['User-Agent'] = user_agent;
            if (http_method === 'POST' && path === '/v1/oauth2/token'){
            	http_options.headers['Accept-Language'] ='en_US';
            }	
        } 
        
        var ajaxSettings = {
            url: http_options.schema + '://' + http_options_param.host + path,
            type: http_method,
            headers: http_options.headers,
            data: data,
            error: function(e){
                console.log('problem with request: ' + e.statusText);
            	cb(e, null);
            },
            success: function(data, status){
                console.log('success');
                cb(null, data);
            }
        };
        console.dir(ajaxSettings);
        $.ajax(ajaxSettings);
    }

    function openid_connect_request(path, data, config, cb) {

        var basicAuthString = 'Basic ' + window.btoa(data.client_id + ':' + data.client_secret);

        var http_options = {
            schema: config.openid_connect_schema || default_options.openid_connect_schema,
            host: get_default_api_endpoint(config.mode) || config.openid_connect_host,
            port: config.openid_connect_port || default_options.openid_connect_port,
            headers: {
                'Authorization': basicAuthString,
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };

        invoke('POST', path, querystring.stringify(data), http_options, cb);
    }

    function get_openid_client_id(config) {
        return config.openid_client_id || config.client_id ||
            default_options.openid_client_id || default_options.client_id;
    }
    function get_openid_client_secret(config) {
        return config.openid_client_secret || config.client_secret ||
            default_options.openid_client_secret || default_options.client_secret;
    }
    function get_openid_redirect_uri(config) {
        return config.openid_redirect_uri || default_options.openid_redirect_uri;
    }

    function authorize_url(data, config) {
        config = config || default_options;
        data   = data || {};

        //Use mode provided, live or sandbox to construct authorize_url, sandbox is default
        var url = 'https://www.' + get_default_endpoint(config.mode) + '/webapps/auth/protocol/openidconnect/v1/authorize' || config.authorize_url;

        data = merge({
            'client_id': get_openid_client_id(config),
            'scope': 'openid',
            'response_type': 'code',
            'redirect_uri': get_openid_redirect_uri(config)
        }, data);

        return url + '?' + querystring.stringify(data);
    }

    function logout_url(data, config) {
        config = config || default_options;
        data   = data || {};

        var url = 'https://www.' + get_default_endpoint(config.mode) + '/webapps/auth/protocol/openidconnect/v1/endsession' || config.logout_url;

        if (typeof data === 'string') {
            data = { 'id_token': data };
        }

        data = merge({
            'logout': 'true',
            'redirect_uri': get_openid_redirect_uri(config)
        }, data);

        return url + '?' + querystring.stringify(data);
    }

    function tokeninfo_request(data, config, cb) {

        if (typeof config === 'function') {
            cb = config;
            config = default_options;
        } else if (!config) {
            config = default_options;
        }

        data = merge({
            'client_id': get_openid_client_id(config),
            'client_secret': get_openid_client_secret(config)
        }, data);

        openid_connect_request('/v1/identity/openidconnect/tokenservice', data, config, cb);
    }

    function userinfo_request(data, config, cb) {
        if (typeof config === 'function') {
            cb = config;
            config = default_options;
        } else if (!config) {
            config = default_options;
        }

        if (typeof data === 'string') {
            data = { 'access_token': data };
        }

        data = merge({
            'schema': 'openid',
            'client_id': get_openid_client_id(config)
        }, data);

        openid_connect_request('/v1/identity/openidconnect/userinfo', data, config, cb);
    }

    return {
        version: sdk_version,
        configure: function (options) {
            configure(options);
        },
        generate_token: function (config, cb) {
            generate_token(config, cb);
        },
        payment: {
            create: function (data, config, cb) {
                executeHttp('POST', '/v1/payments/payment/', data, config, cb);
            },
            get: function (payment_id, config, cb) {
                executeHttp('GET', '/v1/payments/payment/' + payment_id, {}, config, cb);
            },
            list: function (data, config, cb) {
                executeHttp('GET', '/v1/payments/payment', data, config, cb);
            },
            execute: function (payment_id, data, config, cb) {
                executeHttp('POST', '/v1/payments/payment/' + payment_id + '/execute', data, config, cb);
            }
        },
        sale: {
            refund: function (sale_id, data, config, cb) {
                executeHttp('POST', '/v1/payments/sale/' + sale_id + '/refund', data, config, cb);
            },
            get: function (sale_id, config, cb) {
                executeHttp('GET', '/v1/payments/sale/' + sale_id, {}, config, cb);
            }
        },
        refund: {
            get: function (refund_id, config, cb) {
                executeHttp('GET', '/v1/payments/refund/' + refund_id, {}, config, cb);
            }
        },
        authorization: {
            get: function (authorization_id, config, cb) {
                executeHttp('GET', '/v1/payments/authorization/' + authorization_id, {}, config, cb);
            },
            capture: function (authorization_id, data, config, cb) {
                executeHttp('POST', '/v1/payments/authorization/' + authorization_id + '/capture', data, config, cb);
            },
            void: function (authorization_id, config, cb) {
                executeHttp('POST', '/v1/payments/authorization/' + authorization_id + '/void', {}, config, cb);
            },
            reauthorize: function (authorization_id, data, config, cb) {
                executeHttp('POST', '/v1/payments/authorization/' + authorization_id + '/reauthorize', data, config, cb);
            }
        },
        capture: {
            refund: function (capture_id, data, config, cb) {
                executeHttp('POST', '/v1/payments/capture/' + capture_id + '/refund', data, config, cb);
            },
            get: function (capture_id, config, cb) {
                executeHttp('GET', '/v1/payments/capture/' + capture_id, {}, config, cb);
            }
        },
        credit_card: {
            create: function (data, config, cb) {
                executeHttp('POST', '/v1/vault/credit-card/', data, config, cb);
            },
            get: function (credit_card_id, config, cb) {
                executeHttp('GET', '/v1/vault/credit-card/' + credit_card_id, {}, config, cb);
            },
            delete: function (credit_card_id, config, cb) {
                executeHttp('DELETE', '/v1/vault/credit-card/' + credit_card_id, {}, config, cb);
            }
        },
        invoice: {
            create: function (data, config, cb) {
                executeHttp('POST', '/v1/invoicing/invoices', data, config, cb);
            },
            get: function (invoice_id, config, cb) {
                executeHttp('GET', '/v1/invoicing/invoices/' + invoice_id, {}, config, cb);
            },
            list: function (config, cb) {
                executeHttp('GET', '/v1/invoicing/invoices', {}, config, cb);
            },
            search: function (data, config, cb) {
                executeHttp('POST', '/v1/invoicing/search', data, config, cb);
            },
            update: function (invoice_id, data, config, cb) {
                executeHttp('PUT', '/v1/invoicing/invoices/' + invoice_id, data, config, cb);
            },
            send: function (invoice_id, config, cb) {
                executeHttp('POST', '/v1/invoicing/invoices/' + invoice_id + '/send', {}, config, cb);
            },
            cancel: function (invoice_id, data, config, cb) {
                executeHttp('POST', '/v1/invoicing/invoices/' + invoice_id + '/cancel', data, config, cb);
            },
            delete: function (invoice_id, config, cb) {
                executeHttp('DELETE', '/v1/invoicing/invoices/' + invoice_id, {}, config, cb);
            },
            remind: function (invoice_id, data, config, cb) {
                executeHttp('POST', '/v1/invoicing/invoices/' + invoice_id + '/remind', data, config, cb);
            }
        },
        openid_connect: {
            tokeninfo: {
                create: function (data, config, cb) {
                    if (typeof data === 'string') {
                        data = { 'code': data };
                    }
                    data.grant_type = 'authorization_code';
                    tokeninfo_request(data, config, cb);
                },
                refresh: function (data, config, cb) {
                    if (typeof data === 'string') {
                        data = { 'refresh_token': data };
                    }
                    data.grant_type = 'refresh_token';
                    tokeninfo_request(data, config, cb);
                }
            },
            authorize_url: authorize_url,
            logout_url: logout_url,
            userinfo: {
                get: userinfo_request
            }
        }
    };

};