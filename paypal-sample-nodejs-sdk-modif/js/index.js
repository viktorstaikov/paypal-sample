/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        navigator.splashscreen.hide();
        
        mobileApp = new kendo.mobile.Application();
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
        
        pp = new paypal_sdk();
        pp.configure({
            'mode': 'sandbox',
            'client_id': 'Aa9oAxDYwdmzU3_X3gV_GiDjwrvi9Q66NG-ilyTdHerrJxTwBU6O7pcEwylm',
            'client_secret': 'ED6B1BCCnjK2KYxC1gcY55Q5GeEqppcj4YLxQY2iwq2o9o0hgZI2GV6fxBVR'
        })
        
        document.getElementById('pay-btn').addEventListener('click', createPayment);
        
        
        
        var dataModel = {
            amount:'amount',
            description:'description'
        };
        paymentsDataSource = new kendo.data.DataSource({
            schema: {
                model: dataModel
            },
            data: payments
        });
        app.paymentsModel = (function () {
            var onPaymentSelected = function (e) {
                var item = e.dataItem.get();
                createPayment(item);
            };

            var handlePayAll = function () {
                alert('pay all');
                //Only single payment transaction currently supported
                paymentsDataSource.data().forEach(function (payment){
                    createPayment(payment);
                })
            };

            return {
                paymentsDataSource: paymentsDataSource,
                onPaymentSelected: onPaymentSelected,
                handlePayAll: handlePayAll
            };
        }());
    }
};

var mobileApp;
var pp;
var payments = [
	{
    	"amount": {
    		"total": "80",
    		"currency": "USD"
    	},
    	"description": "Electricity"
    }, 
	{
    	"amount": {
    		"total": "10",
    		"currency": "USD"
    	},
    	"description": "Internet provider"
    },
	{
    	"amount": {
    		"total": "18",
    		"currency": "USD"
    	},
    	"description": "Cable TV"
    },
	{
    	"amount": {
    		"total": "10000",
    		"currency": "USD"
    	},
    	"description": "Wife"
    }
]
var paymentsDataSource;

function createPayment(transactions) {
    mobileApp.pane.loader.show();
    
    console.log('CREATE PAYMENT HANDLER');
    
    if(!transactions.hasOwnProperty(length)){
        transactions = [transactions];
    }
    
    var create_payment_json = {
        "intent": "sale",
        "payer": {
            "payment_method": "credit_card",
            "funding_instruments": [
                {
                	"credit_card": {
                		"number": "5500005555555559",
                		"type": "mastercard",
                		"expire_month": 12,
                		"expire_year": 2018,
                		"cvv2": 111,
                		"first_name": "Betsy",
                		"last_name": "Buyer"
                	}
                }
            ]
        },
        "transactions": transactions
    };
	
    alert('About to make transaction containing ' + transactions.length + ' items');
    
    pp.payment.create(JSON.stringify(create_payment_json), function (err, res) {
        
    	mobileApp.pane.loader.hide();
        
        if (err) {
            console.log('ERROR')
            console.log(err.responseText);
            
            try{
                var response = JSON.parse(err.responseText);
                response.details.forEach(function(detail){
                    alert('Field ' + detail.field + ': ' + detail.issue);
                });
            }
            catch(ex){
                
            }
        }

        if (res) {
            console.log("Create Payment Response");
            console.log(res);
            
            alert(res.state);
            
            if(res.state === 'approved') {
                transactions.forEach(function (trans){
                    paymentsDataSource.remove(trans);
                });
            }
        }
    });
}
