// Type definitions for Kendo UI

declare module kendo {
    function bind(selector: string, viewModel: any, namespace?: any): void;
    function bind(element: JQuery, viewModel: any, namespace?: any): void;
    function bind(element: Element, viewModel: any, namespace?: any): void;
    function culture(value: string): void;
    function culture(): {
        name: string;
        calendar: {
            AM: string[];
            PM: string[];
            days: {
                names: string[];
                namesAbbr: string[];
                namesShort: string[];
                firstDay: number;
            };
            months: {
                names: string[];
                namesAbbr: string[];
            };
            patterns: {
                D: string;
                F: string;
                G: string;
                M: string;
                T: string;
                Y: string;
                d: string;
                g: string;
                m: string;
                s: string;
                t: string;
                u: string;
                y: string;
            };
            twoDigitYearMax: number;
        };
        calendars: {
            standard: {
                AM: string[];
                PM: string[];
                days: {
                    names: string[];
                    namesAbbr: string[];
                    namesShort: string[];
                    firstDay: number;
                };
                months: {
                    names: string[];
                    namesAbbr: string[];
                };
                patterns: {
                    D: string;
                    F: string;
                    G: string;
                    M: string;
                    T: string;
                    Y: string;
                    d: string;
                    g: string;
                    m: string;
                    s: string;
                    t: string;
                    u: string;
                    y: string;
                };
                twoDigitYearMax: number;
            };
        };
        numberFormat: {
            currency: {
                decimals: number;
                groupSize: number[];
                pattern: string[];
                symbol: string;
            };
            decimals: number;
            groupSize: number[];
            pattern: string[];
            percent: {
                decimals: number;
                groupSize: number[];
                pattern: string[];
                symbol: string;
            };
        };
    };

    var cultures: {[culture:string] : {
        name?: string;
        calendar?: {
            AM: string[];
            PM: string[];
            days: {
                names: string[];
                namesAbbr: string[];
                namesShort: string[];
                firstDay: number;
            };
            months: {
                names: string[];
                namesAbbr: string[];
            };
            patterns: {
                D: string;
                F: string;
                G: string;
                M: string;
                T: string;
                Y: string;
                d: string;
                g: string;
                m: string;
                s: string;
                t: string;
                u: string;
                y: string;
            };
            twoDigitYearMax: number;
        };
        calendars?: {
            standard: {
                AM: string[];
                PM: string[];
                days: {
                    names: string[];
                    namesAbbr: string[];
                    namesShort: string[];
                    firstDay: number;
                };
                months: {
                    names: string[];
                    namesAbbr: string[];
                };
                patterns: {
                    D: string;
                    F: string;
                    G: string;
                    M: string;
                    T: string;
                    Y: string;
                    d: string;
                    g: string;
                    m: string;
                    s: string;
                    t: string;
                    u: string;
                    y: string;
                };
                twoDigitYearMax: number;
            };
        };
        numberFormat?: {
            currency: {
                decimals: number;
                groupSize: number[];
                pattern: string[];
                symbol: string;
            };
            decimals: number;
            groupSize: number[];
            pattern: string[];
            percent: {
                decimals: number;
                groupSize: number[];
                pattern: string[];
                symbol: string;
            };
        };
    }};

    function destroy(selector: string): void;
    function destroy(element: Element): void;
    function destroy(element: JQuery): void;
    function format(format: string, ...values: any[]): string;

    function fx(selector: string): effects.Element;
    function fx(element: Element): effects.Element;
    function fx(element: JQuery): effects.Element;

    function htmlEncode(value: string): string;
    function init(selector: string, ...namespaces: any[]): void;
    function init(element: JQuery, ...namespaces: any[]): void;
    function init(element: Element, ...namespaces: any[]): void;
    function observable(data: any): kendo.data.ObservableObject;
    function observableHierarchy(array: any[]): kendo.data.ObservableArray;
    function parseDate(value: any, format?: string, culture?: string): Date;
    function parseFloat(value: any, culture?: string): number;
    function parseInt(value: any, culture?: string): number;
    function render(template:(data: any) => string, data: any[]): string;
    function resize(selector: string): void;
    function resize(element: JQuery): void;
    function resize(element: Element): void;
    function stringify(value: Object): string;
    function template(template: string, options?: TemplateOptions): (data: any) => string;
    function touchScroller(selector: string): void;
    function touchScroller(element: Element): void;
    function touchScroller(element: JQuery): void;
    function toString(value: number, format: string): string;
    function toString(value: Date, format: string): string;
    function unbind(selector: string): void;
    function unbind(element: JQuery): void;
    function unbind(element: Element): void;
    function guid(): string;
    function widgetInstance(element: JQuery, suite: typeof kendo.ui): kendo.ui.Widget;
    function widgetInstance(element: JQuery, suite: typeof kendo.mobile.ui): kendo.ui.Widget;
    function widgetInstance(element: JQuery, suite: typeof kendo.dataviz.ui): kendo.ui.Widget;


    var ns: string;

    var keys: {
        INSERT: number;
        DELETE: number;
        BACKSPACE: number;
        TAB: number;
        ENTER: number;
        ESC: number;
        LEFT: number;
        UP: number;
        RIGHT: number;
        DOWN: number;
        END: number;
        HOME: number;
        SPACEBAR: number;
        PAGEUP: number;
        PAGEDOWN: number;
        F2: number;
        F10: number;
        F12: number;
    }

    var support: {
        touch: boolean;
        pointers: boolean;
        scrollbar(): number;
        hasHW3D: boolean;
        hasNativeScrolling: boolean;
        devicePixelRatio: number;
        placeHolder: boolean;
        zoomLevel: number;
        mobileOS: {
            device: string;
            tablet: any;
            browser: string;
            name: string;
            majorVersion: string;
            minorVersion: string;
            flatVersion: number;
            appMode: boolean;
        };
        browser: {
            msie: boolean;
            webkit: boolean;
            safari: boolean;
            opera: boolean;
            version: string;
        };
    }

    interface TemplateOptions {
        paramName?: string;
        useWithBlock?: boolean;
    }

    class Class {
        static fn: Class;
        static extend(prototype: Object): Class;
    }

    class Observable extends Class {
        static fn: Observable;
        static extend(prototype: Object): Observable;

        bind(eventName: string, handler: Function): Observable;
        one(eventName: string, handler: Function): Observable;
        trigger(eventName: string, e?: any): boolean;
        unbind(eventName: string, handler?: any): Observable;
    }

    interface ViewOptions {
        tagName?: string;
        wrap?: boolean;
        model?: Object;
        init?: (e: ViewEvent) => void;
        show?: (e: ViewEvent) => void;
        hide?: (e: ViewEvent) => void;
    }

    interface ViewEvent {
        sender: View;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }

    class View extends Observable {
        constructor(element: Element, options?: ViewOptions);
        constructor(element: string, options?: ViewOptions);
        init(element: Element, options?: ViewOptions): void;
        init(element: string, options?: ViewOptions): void;
        render(container?: any): JQuery;
        destroy(): void;
        element: JQuery;
        content: any;
        tagName: string;
        model: Object;
    }

    class Layout extends View {
        showIn(selector: string, view: View): void;
        regions: { [selector: string]: View; };
    }

    class History extends Observable {
        start(options: Object): void;
        stop(): void;
        current: string;
        root: string;
        change(callback: Function): void;
        navigate(location: string, silent?: boolean): void;
    }

    var history: History;

    interface RouterOptions {
        init?: (e: RouterEvent) => void;
        routeMissing?: (e: RouterEvent) => void;
        change?: (e: RouterEvent) => void;
    }

    interface RouterEvent {
        sender: Router;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
        url: string;
    }

    class Route extends Class {
        route: RegExp;
        callback(url: string): void;
        worksWith(url: string): void;
    }

    class Router extends Observable {
        constructor(options?: RouterOptions);
        init(options?: RouterOptions): void;
        start(): void;
        destroy(): void;
        route(route: string, callback: Function): void;
        navigate(location: string, silent?: boolean): void;
        routes: Route[];
    }

}

declare module kendo.effects {
    interface Element {
        expand(direction: string): effects.Expand;
        expandHorizontal(): effects.Expand;
        expandVertical(): effects.Expand;
        fade(direction: string): effects.Fade;
        fadeIn(): effects.Fade;
        fadeOut(): effects.Fade;
        flip(axis: string, face: JQuery, back: JQuery): effects.Flip;
        flipHorizontal(face: JQuery, back: JQuery): effects.Flip;
        flipVertical(face: JQuery, back: JQuery): effects.Flip;
        pageturn(axis: string, face: JQuery, back: JQuery): effects.PageTurn;
        pageturnHorizontal(face: JQuery, back: JQuery): effects.PageTurn;
        pageturnVertical(face: JQuery, back: JQuery): effects.PageTurn;
        slideIn(direction: string): effects.SlideIn;
        slideInDown(): effects.SlideIn;
        slideInLeft(): effects.SlideIn;
        slideInRight(): effects.SlideIn;
        slideInUp(): effects.SlideIn;
        tile(direction: string, previous: JQuery): effects.Tile;
        tileDown(previous: JQuery): effects.Tile;
        tileLeft(previous: JQuery): effects.Tile;
        tileRight(previous: JQuery): effects.Tile;
        tileUp(previous: JQuery): effects.Tile;
        transfer(target: JQuery): effects.Transfer;
        zoom(direction: string): effects.Zoom;
        zoomIn(): effects.Zoom;
        zoomOut(): effects.Zoom;
    }

    interface Effect {
        play(): JQueryPromise<any>;
        reverse(): JQueryPromise<any>;
        duration(value: number): Effect;
        add(effect: Effect): Effect;
        stop(): Effect;
    }

    interface Expand extends Effect {
        duration(value: number): Expand;
        direction(value: string): Expand;
        stop(): Expand;
        add(effect: Effect): Expand;
    }

    interface Fade extends Effect {
        duration(value: number): Fade;
        direction(value: string): Fade;
        stop(): Fade;
        add(effect: Effect): Fade;
        startValue(value: number): Fade;
        endValue(value: number): Fade;
    }

    interface Flip extends Effect {
        duration(value: number): Flip;
        direction(value: string): Flip;
        stop(): Flip;
        add(effect: Effect): Flip;
    }

    interface PageTurn extends Effect {
        duration(value: number): PageTurn;
        direction(value: string): PageTurn;
        stop(): PageTurn;
        add(effect: Effect): PageTurn;
    }

    interface SlideIn extends Effect {
        duration(value: number): SlideIn;
        direction(value: string): SlideIn;
        stop(): SlideIn;
        add(effect: Effect): SlideIn;
    }

    interface Tile extends Effect {
        duration(value: number): Tile;
        direction(value: string): Tile;
        stop(): Tile;
        add(effect: Effect): Tile;
    }

    interface Transfer extends Effect {
        duration(value: number): Transfer;
        stop(): Transfer;
        add(effect: Effect): Transfer;
    }

    interface Zoom extends Effect {
        duration(value: number): Zoom;
        direction(value: string): Zoom;
        stop(): Zoom;
        add(effect: Effect): Zoom;
        startValue(value: number): Zoom;
        endValue(value: number): Zoom;
    }
}

declare module kendo.data {
    interface ObservableObjectEvent {
        sender?: ObservableObject;
        field?: string;
    }

    interface ObservableObjectSetEvent extends ObservableObjectEvent {
        value?: any;
        preventDefault?: Function;
    }


    class Binding extends Observable {
        source: any;
        parents: any[];
        path: string;
        dependencies: { [path: string]: boolean; };
        observable: boolean;
        constructor(parents: any[], path: string);
        change(e: Object): void;
        start(source: kendo.Observable): void;
        stop(source: kendo.Observable): void;
        get (): any;
        set (value: any): void;
        destroy(): void;
    }

    class EventBinding extends Binding {
        get (): void;
    }

    class TemplateBinding extends Binding {
        constructor(source: kendo.Observable, path: string, template: Function);
        render(value: Object): string;
    }

    module binders { }

    interface Bindings {
        [key: string]: Binding;
    }

    class Binder extends Class {
        static fn: Binder;
        static extend(prototype: Object): Binder;

        element: any;
        bindings: Bindings;
        constructor(element: any, bindings: Bindings, options?: BinderOptions);
        init(element: any, bindings: Bindings, options?: BinderOptions): void;
        bind(binding: Binding, attribute: string): void;
        destroy(): void;
        refresh(): void;
        refresh(attribute: string): void;
        options: BinderOptions;
    }

    interface BinderOptions {
    }

    class ObservableObject extends Observable{
        constructor(value?: any);
        init(value?: any): void;
        get(name: string): any;
        parent(): ObservableObject;
        set(name: string, value: any): void;
        toJSON(): Object;
        uid: string;
    }

    class Model extends ObservableObject {
        idField: string;
        _defaultId: any;
        fields: DataSourceSchemaModelFields;
        defaults: {
            [field: string]: any;
        };
        constructor(data?: any);
        init(data?: any):void;
        dirty: boolean;
        id: any;
        editable(field: string): boolean;
        isNew(): boolean;
        static idField: string;
        static fields: DataSourceSchemaModelFields;
        static define(options: DataSourceSchemaModelWithFieldsObject): typeof Model;
        static define(options: DataSourceSchemaModelWithFieldsArray): typeof Model;
    }

    class SchedulerEvent extends Model {
        constructor(data?: any);
        init(data?: any): void;

        description: string;
        end: Date;
        endTimezone: string;
        isAllDay: boolean;
        id: any;
        start: Date;
        startTimezone: string;
        recurrenceId: any;
        recurrenceRule: string;
        recurrenceException: string;
        static idField: string;
        static fields: DataSourceSchemaModelFields;
        static define(options: DataSourceSchemaModelWithFieldsObject): typeof SchedulerEvent;
        static define(options: DataSourceSchemaModelWithFieldsArray): typeof SchedulerEvent;
    }

    class Node extends Model {
        children: HierarchicalDataSource;

        append(model: any): void;
        level(): number;
        load(id: any): void;
        loaded(value: boolean): void;
        loaded(): boolean;
        parentNode(): Node;
    }

    class SchedulerDataSource extends DataSource {
        add(model: Object): kendo.data.SchedulerEvent;
        add(model: kendo.data.SchedulerEvent): kendo.data.SchedulerEvent;
        at(index: number): kendo.data.SchedulerEvent;
        cancelChanges(model?: kendo.data.SchedulerEvent): void;
        get(id: any): kendo.data.SchedulerEvent;
        getByUid(uid: string): kendo.data.SchedulerEvent;
        indexOf(value: kendo.data.SchedulerEvent): number;
        insert(index: number, model: kendo.data.SchedulerEvent): kendo.data.SchedulerEvent;
        insert(index: number, model: Object): kendo.data.SchedulerEvent;
        remove(model: kendo.data.SchedulerEvent): void;
    }

    class HierarchicalDataSource extends DataSource {
        constructor(options?: HierarchicalDataSourceOptions);
        init(options?: HierarchicalDataSourceOptions): void;
    }

    interface HierarchicalDataSourceOptions extends DataSourceOptions {
        schema?: HierarchicalDataSourceSchema;
    }


    interface HierarchicalDataSourceSchema extends DataSourceSchemaWithOptionsModel {
        model?: HierarchicalDataSourceSchemaModel;
    }

    interface HierarchicalDataSourceSchemaModel extends DataSourceSchemaModel {
        hasChildren?: any;
        children?: any;
    }

    interface DataSourceTransport {
        parameterMap?(data: DataSourceTransportParameterMapData, type: string): any;
    }

    interface DataSourceParameterMapDataAggregate {
        field?: string;
        aggregate?: string;
    }

    interface DataSourceParameterMapDataGroup {
        aggregate?: DataSourceParameterMapDataAggregate[];
        field?: string;
        dir?: string;
    }

    interface DataSourceParameterMapDataFilter {
        field?: string;
        filters?: DataSourceParameterMapDataFilter[];
        logic?: string;
        operator?: string;
        value?: any;
    }

    interface DataSourceParameterMapDataSort {
        field?: string;
        dir?: string;
    }

    interface DataSourceTransportParameterMapData {
        aggregate?: DataSourceParameterMapDataAggregate[];
        group?: DataSourceParameterMapDataGroup[];
        filter?: DataSourceParameterMapDataFilter;
        models?: Model[];
        page?: number;
        pageSize?: number;
        skip?: number;
        sort?: DataSourceParameterMapDataSort[];
        take?: number;
    }

    interface DataSourceSchema {
        model?: any;
    }

    interface DataSourceSchemaWithOptionsModel extends DataSourceSchema {
        model?: DataSourceSchemaModel;
    }

    interface DataSourceSchemaWithConstructorModel extends DataSourceSchema {
        model?:  typeof Model;
    }

    interface DataSourceSchemaModel {
        id?: string;
        fields?: any;
    }

    interface DataSourceSchemaModelWithFieldsArray extends DataSourceSchemaModel {
        fields?: DataSourceSchemaModelField[];
    }

    interface DataSourceSchemaModelWithFieldsObject extends DataSourceSchemaModel {
        fields?: DataSourceSchemaModelFields;
    }

    interface DataSourceSchemaModelFields {
        [index: string]: DataSourceSchemaModelField;
    }

    interface DataSourceSchemaModelField {
        field?: string;
        from?: string;
        defaultValue?: any;
        editable?: boolean;
        nullable?: boolean;
        parse?: Function;
        type?: string;
        validation?: DataSourceSchemaModelFieldValidation;
    }

    interface DataSourceSchemaModelFieldValidation {
        required?: boolean;
        min?: any;
        max?: any;
    }

    class ObservableArray extends Observable {
        constructor(array?: any[]);
        init(array?: any[]): void;
        length: number;
        join(separator: string): string;
        parent(): ObservableObject;
        pop(): ObservableObject;
        push(...items: any[]): number;
        slice(begin: number, end?: number): any[];
        splice(start: number): any[];
        splice(start: number, deleteCount: number, ...items: any[]): any[];
        shift(): any;
        toJSON(): any[];
        unshift(...items: any[]): number;
        wrapAll(source: Object, target: Object): any;
        wrap(object: Object, parent: Object): any;
        indexOf(item: any): number;
        forEach(callback: (item: Object, index: number, source: ObservableArray) => void ): void;
        map(callback: (item: Object, index: number, source: ObservableArray) => any): any[];
        filter(callback: (item: Object, index: number, source: ObservableArray) => boolean): any[];
        find(callback: (item: Object, index: number, source: ObservableArray) => boolean): any;
        every(callback: (item: Object, index: number, source: ObservableArray) => boolean): boolean;
        some(callback: (item: Object, index: number, source: ObservableArray) => boolean): boolean;
        remove(item: Object): void;
    }

    interface ObservableArrayEvent {
        field?: string;
        action?: string;
        index?: number;
        items?: kendo.data.Model[];
    }

    class DataSource extends Observable{
        constructor(options?: DataSourceOptions);
        init(options?: DataSourceOptions): void;
        static create(options?: DataSourceOptions): DataSource;
        options: DataSourceOptions;
        add(model: Object): kendo.data.Model;
        add(model: kendo.data.Model): kendo.data.Model;
        aggregate(val?: any): any;
        aggregates(): any;
        at(index: number): kendo.data.ObservableObject;
        cancelChanges(model?: kendo.data.Model): void;
        data(): kendo.data.ObservableArray;
        data(value: any): void;
        fetch(callback?: Function): void;
        filter(filters: DataSourceFilterItem): void;
        filter(filters: DataSourceFilterItem[]): void;
        filter(filters: DataSourceFilters): void;
        filter(): DataSourceFilters;
        get(id: any): kendo.data.Model;
        getByUid(uid: string): kendo.data.Model;
        group(groups: any): void;
        group(): any;
        hasChanges(): boolean;
        indexOf(value: kendo.data.ObservableObject): number;
        insert(index: number, model: kendo.data.Model): kendo.data.Model;
        insert(index: number, model: Object): kendo.data.Model;
        page(): number;
        page(page: number): void;
        pageSize(): number;
        pageSize(size: number): void;
        query(options?: any): void;
        read(data?: any): void;
        remove(model: kendo.data.Model): void;
        sort(sort: DataSourceSortItem): void;
        sort(sort: DataSourceSortItem[]): void;
        sort(): DataSourceSortItem[];
        sync(): void;
        total(): number;
        totalPages(): number;
        view(): kendo.data.ObservableArray;
    }

    interface DataSourceAggregateItem {
        field?: string;
        aggregate?: string;
    }

    interface DataSourceFilter {
    }

    interface DataSourceFilterItem extends DataSourceFilter {
        operator?: string;
        field?: string;
        value?: any;
    }

    interface DataSourceFilters extends DataSourceFilter {
        logic?: string;
        filters?: DataSourceFilter[];
    }

    interface DataSourceGroupItemAggregate {
        field?: string;
        aggregate?: string;
    }

    interface DataSourceGroupItem {
        field?: string;
        dir?: string;
        aggregates?: DataSourceGroupItemAggregate[];
    }

    interface DataSourceSchema {
        aggregates?: any;
        data?: any;
        errors?: any;
        groups?: any;
        parse?: Function;
        total?: any;
        type?: string;
    }

    interface DataSourceSortItem {
        field?: string;
        dir?: string;
    }

    interface DataSourceTransportCreate {
        cache?: boolean;
        contentType?: string;
        data?: any;
        dataType?: string;
        type?: string;
        url?: any;
    }

    interface DataSourceTransportDestroy {
        cache?: boolean;
        contentType?: string;
        data?: any;
        dataType?: string;
        type?: string;
        url?: any;
    }

    interface DataSourceTransportRead {
        cache?: boolean;
        contentType?: string;
        data?: any;
        dataType?: string;
        type?: string;
        url?: any;
    }

    interface DataSourceTransportUpdate {
        cache?: boolean;
        contentType?: string;
        data?: any;
        dataType?: string;
        type?: string;
        url?: any;
    }

    interface DataSourceTransport {
        create?: any;
        destroy?: any;
        read?: any;
        update?: any;
    }

    interface DataSourceTransportWithObjectOperations extends DataSourceTransport {
        create?: DataSourceTransportCreate;
        destroy?: DataSourceTransportDestroy;
        read?: DataSourceTransportRead;
        update?: DataSourceTransportUpdate;
    }

    interface DataSourceTransportWithFunctionOperations extends DataSourceTransport {
        create?: (options: DataSourceTransportOptions) => void;
        destroy?: (options: DataSourceTransportOptions) => void;
        read?: (options: DataSourceTransportReadOptions) => void;
        update?: (options: DataSourceTransportOptions) => void;
    }

    interface DataSourceTransportOptions {
        success: (data?: any) => void;
        error: (error?: any) => void;
        data: any;
    }

    interface DataSourceTransportReadOptionsData {
        sort?: DataSourceSortItem[];
        filter?: DataSourceFilters;
        take?: number;
        skip?: number;
    }

    interface DataSourceTransportReadOptions extends DataSourceTransportOptions {
        data: DataSourceTransportReadOptionsData;
    }

    interface DataSourceTransportBatchOptionsData {
        models: any[];
    }

    interface DataSourceTransportBatchOptions extends DataSourceTransportOptions {
        data: DataSourceTransportBatchOptionsData;
    }

    interface DataSourceOptions {
        aggregate?: DataSourceAggregateItem[];
        autoSync?: boolean;
        batch?: boolean;
        data?: any;
        filter?: any;
        group?: DataSourceGroupItem[];
        page?: number;
        pageSize?: number;
        schema?: DataSourceSchema;
        serverAggregates?: boolean;
        serverFiltering?: boolean;
        serverGrouping?: boolean;
        serverPaging?: boolean;
        serverSorting?: boolean;
        sort?: any;
        transport?: DataSourceTransport;
        type?: string;
        change? (e: DataSourceChangeEvent): void;
        error?(e: DataSourceErrorEvent): void;
        sync?(e: DataSourceEvent): void;
        requestStart?(e: DataSourceRequestStartEvent): void;
        requestEnd?(e: DataSourceRequestEndEvent): void;
    }

    interface DataSourceEvent {
        sender?: DataSource;
    }

    interface DataSourceItemOrGroup {
    }

    interface DataSourceGroup extends DataSourceItemOrGroup {
        aggregates: any[];
        field: string;
        hasSubgroups: boolean;
        items: DataSourceItemOrGroup[];
        value: any;
    }

    interface DataSourceChangeEvent extends DataSourceEvent {
        field?: string;
        value?: Model;
        action?: string;
        index?: number;
        items?: DataSourceItemOrGroup[];
        node?: any;
    }

    interface DataSourceErrorEvent extends DataSourceEvent {
        xhr: JQueryXHR;
        status: string;
        errorThrown: any;
        errors?: any;
    }

    interface DataSourceRequestStartEvent extends DataSourceEvent {
    }

    interface DataSourceRequestEndEvent extends DataSourceEvent {
        response?: any;
        type?: string;
    }
}

declare module kendo.data.transports {
    var odata : DataSourceTransport;
}

declare module kendo.ui {
    function progress(container: JQuery, toggle: boolean): void;

    class Widget extends Observable {
        static fn: Widget;
        static extend(prototype: Object): Widget;

        constructor(element: Element, options?: Object);
        constructor(element: JQuery, options?: Object);
        constructor(selector: String, options?: Object);
        init(element: Element, options?: Object): void;
        init(element: JQuery, options?: Object): void;
        init(selector: String, options?: Object): void;
        destroy(): void;
        element: JQuery;
        setOptions(options: Object): void;
        resize(force?: boolean): void;
    }

    function plugin(widget: typeof kendo.ui.Widget, register?: typeof kendo.ui, prefix?: String): void;
    function plugin(widget: any, register?: typeof kendo.ui, prefix?: String): void;
    function plugin(widget: typeof kendo.ui.Widget, register?: typeof kendo.mobile.ui, prefix?: String): void;
    function plugin(widget: any, register?: typeof kendo.mobile.ui, prefix?: String): void;
    function plugin(widget: typeof kendo.ui.Widget, register?: typeof kendo.dataviz.ui, prefix?: String): void;
    function plugin(widget: any, register?: typeof kendo.dataviz.ui, prefix?: String): void;

    class Draggable extends kendo.ui.Widget{
        element: JQuery;
        currentTarget: JQuery;
        constructor(element: Element, options?: DraggableOptions);
        options: DraggableOptions;
    }

    interface DraggableEvent extends JQueryEventObject {
        sender?: Draggable;
    }

    class DropTarget extends kendo.ui.Widget{
        element: JQuery;
        constructor(element: Element, options?: DropTargetOptions);
        options: DropTargetOptions;
        static destroyGroup(groupName: string): void;
    }

    interface DropTargetOptions {
        group?: string;
        dragenter?(e: DropTargetDragenterEvent): void;
        dragleave?(e: DropTargetDragleaveEvent): void;
        drop?(e: DropTargetDropEvent): void;
    }

    interface DropTargetEvent extends JQueryEventObject {
        sender?: DropTarget;
    }

    interface DropTargetDragenterEvent extends DropTargetEvent {
        draggable?: kendo.ui.Draggable;
    }

    interface DropTargetDragleaveEvent extends DropTargetEvent {
        draggable?: kendo.ui.Draggable;
    }

    interface DropTargetDropEvent extends DropTargetEvent {
        draggable?: kendo.ui.Draggable;
    }

    class DropTargetArea extends kendo.ui.Widget{
        element: JQuery;
        constructor(element: Element, options?: DropTargetAreaOptions);
        options: DropTargetAreaOptions;
    }

    interface DropTargetAreaOptions {
        group?: string;
        filter?: string;
        dragenter?(e: DropTargetAreaDragenterEvent): void;
        dragleave?(e: DropTargetAreaDragleaveEvent): void;
        drop?(e: DropTargetAreaDropEvent): void;
    }

    interface DropTargetAreaEvent extends JQueryEventObject {
        sender: DropTargetArea;
    }

    interface DropTargetAreaDragenterEvent extends DropTargetAreaEvent {
        draggable?: JQuery;
    }

    interface DropTargetAreaDragleaveEvent extends DropTargetAreaEvent {
        draggable?: JQuery;
    }

    interface DropTargetAreaDropEvent extends DropTargetAreaEvent {
        draggable?: kendo.ui.Draggable;
        dropTarget?: JQuery;
    }

    interface DraggableOptions {
        axis?: string;
        cursorOffset?: any;
        distance?: number;
        group?: string;
        hint?: Function;
        drag?(e: DraggableEvent): void;
        dragcancel?(e: DraggableEvent): void;
        dragend?(e: DraggableEvent): void;
        dragstart?(e: DraggableEvent): void;
    }

    interface GridColumnEditorOptions {
        field?: string;
        format?: string;
        model?: kendo.data.Model;
        values?: any[];
    }

    interface GridColumn {
        editor?(container: JQuery, options: GridColumnEditorOptions): void;
    }
}

declare module kendo.mobile {
    function init(selector: string): void;
    function init(element: JQuery): void;
    function init(element: Element): void;

    class Application extends Observable {
        constructor(element?: any, options?: ApplicationOptions);
        init(element?: any, options?: ApplicationOptions): void;
        options: ApplicationOptions;
        hideLoading(): void;
        navigate(url: string, transition?: string): void;
        scroller(): kendo.mobile.ui.Scroller;
        showLoading(): void;
        view(): kendo.mobile.ui.View;
    }

    interface ApplicationOptions {
        hideAddressBar?: boolean;
        updateDocumentTitle?: boolean;
        initial?: string;
        layout?: string;
        loading?: string;
        platform?: string;
        serverNavigation?: boolean;
        transition?: string;
    }

    interface ApplicationEvent {
        sender: Application;
    }
}

declare module kendo.mobile.ui {

    class Widget extends kendo.ui.Widget {
    }

    interface TouchAxis {
        location?: number;
        startLocation?: number;
        client?: number;
        delta?: number;
        velocity?: number;
    }

    interface TouchEventOptions {
        target?: JQuery;
        x?: TouchAxis;
        y?: TouchAxis;
    }

    interface Point {
        x?: number;
        y?: number;
    }
}
declare module kendo.dataviz.ui {
    function registerTheme(name: string, options: any): void;

    function plugin(widget: typeof kendo.ui.Widget): void;
    function plugin(widget: any): void;
}

declare module kendo.dataviz.map {
    class Location {
    }

    class Marker {
    }

    class Extent {
    }
}

declare module kendo.dataviz.map.layer {
    class Shape {
    }
}

declare module kendo.dataviz.drawing {
    class Shape {
    }
}

declare module kendo.dataviz.geometry {
    class Point {
    }
}

declare module kendo.dataviz.ui {
    class Barcode extends kendo.ui.Widget {
        static fn: Barcode;
        static extend(proto: Object): Barcode;

        element: JQuery;
        wrapper: JQuery;
        constructor(element: Element, options?: BarcodeOptions);
        options: BarcodeOptions;
        /**
        Returns a PNG image of the barcode encoded as a Data URL.
        @method
        @returns A data URL with image/png MIME type. Will be null if the browser does not support the canvas element.
        */
        imageDataURL(): string;
        /**
        Redraws the barcode.
        @method
        */
        redraw(): void;
        /**
        Adjusts the widget layout to match the size of the container.
        @method
        @param force - Defines whether the widget should proceed with resizing even if the element dimensions have not changed.
        */
        resize(force: boolean): void;
        /**
        Returns the SVG representation of the barcode. The returned string is a self-contained SVG document that can be used as is or converted to other formats using tools like Inkscape and
ImageMagick. Both programs provide command-line interface suitable for server-side processing.
        @method
        @returns the SVG representation of the barcode.
        */
        svg(): string;
        /**
        Gets/Sets the value of the barcode.
        @method
        @returns The value of the barcode.
        */
        value(): string;
        /**
        Gets/Sets the value of the barcode.
        @method
        @param value - The value to set.
        */
        value(value: number): void;
        /**
        Gets/Sets the value of the barcode.
        @method
        @param value - The value to set.
        */
        value(value: string): void;
    }

    interface BarcodeBorder {
        /**
        The color of the border. Any valid CSS color string will work here, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the border.
        @member {string}
        */
        dashType?: string;
        /**
        The width of the border.
        @member {number}
        */
        width?: number;
    }

    interface BarcodePadding {
        /**
        The bottom padding of the barcode.
        @member {number}
        */
        bottom?: number;
        /**
        The left padding of the barcode.
        @member {number}
        */
        left?: number;
        /**
        The right padding of the barcode.
        @member {number}
        */
        right?: number;
        /**
        The top padding of the barcode.
        @member {number}
        */
        top?: number;
    }

    interface BarcodeTextMargin {
        /**
        The bottom margin of the text.
        @member {number}
        */
        bottom?: number;
        /**
        The left margin of the text.
        @member {number}
        */
        left?: number;
        /**
        The right margin of the text.
        @member {number}
        */
        right?: number;
        /**
        The top margin of the text.
        @member {number}
        */
        top?: number;
    }

    interface BarcodeText {
        /**
        The color of the text. Any valid CSS color string will work here, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The font of the text.
        @member {string}
        */
        font?: string;
        /**
        The margin of the text
        @member {BarcodeTextMargin}
        */
        margin?: BarcodeTextMargin;
        /**
        If set to false the barcode will not display the value as a text below the barcode lines.
        @member {boolean}
        */
        visible?: boolean;
    }

    interface BarcodeOptions {
        name?: string;
        /**
        Sets the preferred rendering engine.
If it is not supported by the browser, the Barcode will switch to the first available mode.The supported values are:
        @member {string}
        */
        renderAs?: string;
        /**
        The background of the barcode area.
Any valid CSS color string will work here, including hex and rgb.
        @member {string}
        */
        background?: string;
        /**
        The border of the barcode area.
        @member {BarcodeBorder}
        */
        border?: BarcodeBorder;
        /**
        If set to true the barcode will not display the checksum digit next to the value in the text area.
        @member {boolean}
        */
        checksum?: boolean;
        /**
        The color of the bar elements.
Any valid CSS color string will work here, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The height of the barcode in pixels.  By default the height is 100.
        @member {number}
        */
        height?: number;
        /**
        The padding of the barcode.
        @member {BarcodePadding}
        */
        padding?: BarcodePadding;
        /**
        Can be set to a JavaScript object which represents the text configuration.
        @member {BarcodeText}
        */
        text?: BarcodeText;
        /**
        The symbology (encoding) the barcode will use.The supported values are:
        @member {string}
        */
        type?: string;
        /**
        The initial value of the Barcode
        @member {string}
        */
        value?: string;
        /**
        The width of the barcode in pixels.  By default the width is 300.
        @member {number}
        */
        width?: number;
    }

    interface BarcodeEvent {
        sender: Barcode;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }


    class Chart extends kendo.ui.Widget {
        static fn: Chart;
        static extend(proto: Object): Chart;

        element: JQuery;
        wrapper: JQuery;
        constructor(element: Element, options?: ChartOptions);
        options: ChartOptions;
        dataSource: kendo.data.DataSource;
        /**
        Prepares the widget for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        @method
        */
        destroy(): void;
        /**
        Repaints the chart using the currently loaded data.
        @method
        */
        redraw(): void;
        /**
        Reloads the data and renders the chart.
        @method
        */
        refresh(): void;
        /**
        Adjusts the chart layout to match the size of the container.
        @method
        @param force - Defines whether the widget should proceed with resizing even if the element dimensions have not changed.
        */
        resize(force: boolean): void;
        /**
        Sets the data source of the widget.
        @method
        @param dataSource - The data source to which the widget should be bound.
        */
        setDataSource(dataSource: kendo.data.DataSource): void;
        /**
        Sets the widget options. Changes are cumulative.
        @method
        @param options - The chart settings to update.
        */
        setOptions(options: any): void;
        /**
        Returns the SVG representation of the chart.
The returned string is a self-contained SVG document that can be used as is or
converted to other formats using tools like Inkscape and
ImageMagick.
Both programs provide command-line interface suitable for server-side processing.
        @method
        @returns the SVG representation of the chart.
        */
        svg(): string;
        /**
        Returns a PNG image of the chart encoded as a Data URL.
        @method
        @returns A data URL with image/png MIME type. Will be null if the browser does not support the canvas element.
        */
        imageDataURL(): string;
    }

    interface ChartCategoryAxisItemAutoBaseUnitSteps {
        /**
        The seconds unit steps.
        @member {any}
        */
        seconds?: any;
        /**
        The minutes unit steps.
        @member {any}
        */
        minutes?: any;
        /**
        The hours unit steps.
        @member {any}
        */
        hours?: any;
        /**
        The days unit steps.
        @member {any}
        */
        days?: any;
        /**
        The weeks unit steps.
        @member {any}
        */
        weeks?: any;
        /**
        The months unit steps.
        @member {any}
        */
        months?: any;
        /**
        The years unit steps.
        @member {any}
        */
        years?: any;
    }

    interface ChartCategoryAxisItemCrosshairTooltipBorder {
        /**
        The color of the border. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the border.The following dash types are supported:
        @member {string}
        */
        dashType?: string;
        /**
        The width of the border in pixels. By default the border width is set to zero which means that the border will not appear.
        @member {number}
        */
        width?: number;
    }

    interface ChartCategoryAxisItemCrosshairTooltipPadding {
        /**
        The bottom padding of the crosshair tooltip.
        @member {number}
        */
        bottom?: number;
        /**
        The left padding of the crosshair tooltip.
        @member {number}
        */
        left?: number;
        /**
        The right padding of the crosshair tooltip.
        @member {number}
        */
        right?: number;
        /**
        The top padding of the crosshair tooltip.
        @member {number}
        */
        top?: number;
    }

    interface ChartCategoryAxisItemCrosshairTooltip {
        /**
        The background color of the tooltip. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        background?: string;
        /**
        The border options.
        @member {ChartCategoryAxisItemCrosshairTooltipBorder}
        */
        border?: ChartCategoryAxisItemCrosshairTooltipBorder;
        /**
        The text color of the tooltip. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The tooltip font.
        @member {string}
        */
        font?: string;
        /**
        The format used to display the tooltip. Uses kendo.format. Contains one placeholder ("{0}") which represents the category value.
        @member {string}
        */
        format?: string;
        /**
        The padding of the crosshair tooltip. A numeric value will set all paddings.
        @member {ChartCategoryAxisItemCrosshairTooltipPadding}
        */
        padding?: ChartCategoryAxisItemCrosshairTooltipPadding;
        /**
        The template which renders the tooltip.The fields which can be used in the template are:
        @member {any}
        */
        template?: any;
        /**
        If set to true the chart will display the category axis crosshair tooltip. By default the category axis crosshair tooltip is not visible.
        @member {boolean}
        */
        visible?: boolean;
    }

    interface ChartCategoryAxisItemCrosshair {
        /**
        The color of the crosshair. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The opacity of the crosshair. By default the crosshair is opaque.
        @member {number}
        */
        opacity?: number;
        /**
        The crosshar tooltip options.
        @member {ChartCategoryAxisItemCrosshairTooltip}
        */
        tooltip?: ChartCategoryAxisItemCrosshairTooltip;
        /**
        If set to true the chart will display the category axis crosshair. By default the category axis crosshair is not visible.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The width of the crosshair in pixels.
        @member {number}
        */
        width?: number;
    }

    interface ChartCategoryAxisItemLabelsBorder {
        /**
        The color of the border. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the border.The following dash types are supported:
        @member {string}
        */
        dashType?: string;
        /**
        The width of the border in pixels. By default the border width is set to zero which means that the border will not appear.
        @member {number}
        */
        width?: number;
    }

    interface ChartCategoryAxisItemLabelsDateFormats {
        /**
        The format used when categoryAxis.baseUnit is set to "days".
        @member {string}
        */
        days?: string;
        /**
        The format used when categoryAxis.baseUnit is set to "hours".
        @member {string}
        */
        hours?: string;
        /**
        The format used when categoryAxis.baseUnit is set to "months".
        @member {string}
        */
        months?: string;
        /**
        The format used when categoryAxis.baseUnit is set to "weeks".
        @member {string}
        */
        weeks?: string;
        /**
        The format used when categoryAxis.baseUnit is set to "years".
        @member {string}
        */
        years?: string;
    }

    interface ChartCategoryAxisItemLabelsMargin {
        /**
        The bottom margin of the labels.
        @member {number}
        */
        bottom?: number;
        /**
        The left margin of the labels.
        @member {number}
        */
        left?: number;
        /**
        The right margin of the labels.
        @member {number}
        */
        right?: number;
        /**
        The top margin of the labels.
        @member {number}
        */
        top?: number;
    }

    interface ChartCategoryAxisItemLabelsPadding {
        /**
        The bottom padding of the labels.
        @member {number}
        */
        bottom?: number;
        /**
        The left padding of the labels.
        @member {number}
        */
        left?: number;
        /**
        The right padding of the labels.
        @member {number}
        */
        right?: number;
        /**
        The top padding of the labels.
        @member {number}
        */
        top?: number;
    }

    interface ChartCategoryAxisItemLabels {
        /**
        The background color of the labels. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        background?: string;
        /**
        The border of the labels.
        @member {ChartCategoryAxisItemLabelsBorder}
        */
        border?: ChartCategoryAxisItemLabelsBorder;
        /**
        The text color of the labels. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The culture to use when formatting date values. See the globalization overview for more information.
        @member {string}
        */
        culture?: string;
        /**
        The format used to display the labels when the categories are dates. Uses kendo.format. Contains one placeholder ("{0}") which represents the category value.
        @member {ChartCategoryAxisItemLabelsDateFormats}
        */
        dateFormats?: ChartCategoryAxisItemLabelsDateFormats;
        /**
        The font style of the labels.
        @member {string}
        */
        font?: string;
        /**
        The format used to display the labels. Uses kendo.format. Contains one placeholder ("{0}") which represents the category value.
        @member {string}
        */
        format?: string;
        /**
        The margin of the labels. A numeric value will set all margins.
        @member {ChartCategoryAxisItemLabelsMargin}
        */
        margin?: ChartCategoryAxisItemLabelsMargin;
        /**
        If set to true the chart will mirror the axis labels and ticks. If the labels are normally on the left side of the axis, mirroring the axis will render them to the right.
        @member {boolean}
        */
        mirror?: boolean;
        /**
        The padding of the labels. A numeric value will set all paddings.
        @member {ChartCategoryAxisItemLabelsPadding}
        */
        padding?: ChartCategoryAxisItemLabelsPadding;
        /**
        The rotation angle of the labels. By default the labels are not rotated.
        @member {number}
        */
        rotation?: number;
        /**
        The number of labels to skip. By default no labels are skipped.
        @member {number}
        */
        skip?: number;
        /**
        The label rendering step - render every n-th label. By default every label is rendered.
        @member {number}
        */
        step?: number;
        /**
        The template which renders the labels.The fields which can be used in the template are:
        @member {any}
        */
        template?: any;
        /**
        If set to true the chart will display the category axis labels. By default the category axis labels are visible.
        @member {boolean}
        */
        visible?: boolean;
    }

    interface ChartCategoryAxisItemLine {
        /**
        The color of the lines. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the line.The following dash types are supported:
        @member {string}
        */
        dashType?: string;
        /**
        If set to true the chart will display the category axis lines. By default the category axis lines are visible.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The width of the line in pixels. Also affects the major and minor ticks, but not the grid lines.
        @member {number}
        */
        width?: number;
    }

    interface ChartCategoryAxisItemMajorGridLines {
        /**
        The color of the major grid lines. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the major grid lines.The following dash types are supported:
        @member {string}
        */
        dashType?: string;
        /**
        If set to true the chart will display the major grid lines. By default the major grid lines are visible.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The width of the category axis major grid lines in pixels.
        @member {number}
        */
        width?: number;
        /**
        The step of the category axis major grid lines.
        @member {number}
        */
        step?: number;
        /**
        The skip of the category axis major grid lines.
        @member {number}
        */
        skip?: number;
    }

    interface ChartCategoryAxisItemMajorTicks {
        /**
        The color of the category axis major ticks lines. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The length of the tick line in pixels.
        @member {number}
        */
        size?: number;
        /**
        If set to true the chart will display the category axis major ticks. By default the category axis major ticks are visible.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The width of the major ticks in pixels.
        @member {number}
        */
        width?: number;
        /**
        The step of the category axis major ticks.
        @member {number}
        */
        step?: number;
        /**
        The skip of the category axis major ticks.
        @member {number}
        */
        skip?: number;
    }

    interface ChartCategoryAxisItemMinorGridLines {
        /**
        The color of the minor grid lines. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the minor grid lines.The following dash types are supported:
        @member {string}
        */
        dashType?: string;
        /**
        If set to true the chart will display the minor grid lines. By default the minor grid lines are visible.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The width of the category axis minor grid lines in pixels.
        @member {number}
        */
        width?: number;
        /**
        The step of the category axis minor grid lines.
        @member {number}
        */
        step?: number;
        /**
        The skip of the category axis minor grid lines.
        @member {number}
        */
        skip?: number;
    }

    interface ChartCategoryAxisItemMinorTicks {
        /**
        The color of the category axis minor ticks lines. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The length of the tick line in pixels.
        @member {number}
        */
        size?: number;
        /**
        If set to true the chart will display the category axis minor ticks. By default the category axis minor ticks are visible.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The width of the minor ticks in pixels.
        @member {number}
        */
        width?: number;
        /**
        The step of the category axis minor ticks.
        @member {number}
        */
        step?: number;
        /**
        The skip of the category axis minor ticks.
        @member {number}
        */
        skip?: number;
    }

    interface ChartCategoryAxisItemNotesDataItemIconBorder {
        /**
        The border color of the icon.
        @member {string}
        */
        color?: string;
        /**
        The border width of the icon.
        @member {number}
        */
        width?: number;
    }

    interface ChartCategoryAxisItemNotesDataItemIcon {
        /**
        The background color of the note icon.
        @member {string}
        */
        background?: string;
        /**
        The border of the icon.
        @member {ChartCategoryAxisItemNotesDataItemIconBorder}
        */
        border?: ChartCategoryAxisItemNotesDataItemIconBorder;
        /**
        The size of the icon.
        @member {number}
        */
        size?: number;
        /**
        The icon shape.The supported values are:
* "circle" - the marker shape is circle.
* "square" - the marker shape is square.
* "triangle" - the marker shape is triangle.
* "cross" - the marker shape is cross.
        @member {string}
        */
        type?: string;
        /**
        The icon visibility.
        @member {boolean}
        */
        visible?: boolean;
    }

    interface ChartCategoryAxisItemNotesDataItemLabelBorder {
        /**
        The color of the border. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the border.The following dash types are supported:
        @member {string}
        */
        dashType?: string;
        /**
        The width of the border in pixels. By default the border width is set to zero which means that the border will not appear.
        @member {number}
        */
        width?: number;
    }

    interface ChartCategoryAxisItemNotesDataItemLabel {
        /**
        The background color of the label. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        background?: string;
        /**
        The border of the label.
        @member {ChartCategoryAxisItemNotesDataItemLabelBorder}
        */
        border?: ChartCategoryAxisItemNotesDataItemLabelBorder;
        /**
        The text color of the note label. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The font style of the note label.
        @member {string}
        */
        font?: string;
        /**
        The template which renders the labels.The fields which can be used in the template are:
        @member {any}
        */
        template?: any;
        /**
        If set to true the chart will display the category notes label. By default the category notes label are visible.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The rotation angle of the label. By default the label are not rotated.
        @member {number}
        */
        rotation?: number;
        /**
        The format used to display the note label. Uses kendo.format. Contains one placeholder ("{0}") which represents the category value.
        @member {string}
        */
        format?: string;
        /**
        The label note text.
        @member {string}
        */
        text?: string;
        /**
        The position of the category axis note label.
        @member {string}
        */
        position?: string;
    }

    interface ChartCategoryAxisItemNotesDataItemLine {
        /**
        The line width of the note.
        @member {number}
        */
        width?: number;
        /**
        The line color of the note.
        @member {string}
        */
        color?: string;
        /**
        The length of the connecting lines in pixels.
        @member {number}
        */
        length?: number;
    }

    interface ChartCategoryAxisItemNotesDataItem {
        /**
        The value of the note.
        @member {any}
        */
        value?: any;
        /**
        The position of the category axis note.
        @member {string}
        */
        position?: string;
        /**
        The icon of the note.
        @member {ChartCategoryAxisItemNotesDataItemIcon}
        */
        icon?: ChartCategoryAxisItemNotesDataItemIcon;
        /**
        The label of the note.
        @member {ChartCategoryAxisItemNotesDataItemLabel}
        */
        label?: ChartCategoryAxisItemNotesDataItemLabel;
        /**
        The line of the note.
        @member {ChartCategoryAxisItemNotesDataItemLine}
        */
        line?: ChartCategoryAxisItemNotesDataItemLine;
    }

    interface ChartCategoryAxisItemNotesIconBorder {
        /**
        The border color of the icon.
        @member {string}
        */
        color?: string;
        /**
        The border width of the icon.
        @member {number}
        */
        width?: number;
    }

    interface ChartCategoryAxisItemNotesIcon {
        /**
        The background color of the notes icon.
        @member {string}
        */
        background?: string;
        /**
        The border of the icon.
        @member {ChartCategoryAxisItemNotesIconBorder}
        */
        border?: ChartCategoryAxisItemNotesIconBorder;
        /**
        The size of the icon.
        @member {number}
        */
        size?: number;
        /**
        The icon shape.The supported values are:
* "circle" - the marker shape is circle.
* "square" - the marker shape is square.
* "triangle" - the marker shape is triangle.
* "cross" - the marker shape is cross.
        @member {string}
        */
        type?: string;
        /**
        The icon visibility.
        @member {boolean}
        */
        visible?: boolean;
    }

    interface ChartCategoryAxisItemNotesLabelBorder {
        /**
        The color of the border. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the border.The following dash types are supported:
        @member {string}
        */
        dashType?: string;
        /**
        The width of the border in pixels. By default the border width is set to zero which means that the border will not appear.
        @member {number}
        */
        width?: number;
    }

    interface ChartCategoryAxisItemNotesLabel {
        /**
        The background color of the label. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        background?: string;
        /**
        The border of the label.
        @member {ChartCategoryAxisItemNotesLabelBorder}
        */
        border?: ChartCategoryAxisItemNotesLabelBorder;
        /**
        The text color of the label. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The font style of the label.
        @member {string}
        */
        font?: string;
        /**
        The template which renders the labels.The fields which can be used in the template are:
        @member {any}
        */
        template?: any;
        /**
        If set to true the chart will display the category notes label. By default the category notes label are visible.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The rotation angle of the label. By default the label are not rotated.
        @member {number}
        */
        rotation?: number;
        /**
        The format used to display the notes label. Uses kendo.format. Contains one placeholder ("{0}") which represents the category value.
        @member {string}
        */
        format?: string;
        /**
        The position of the labels.
        @member {string}
        */
        position?: string;
    }

    interface ChartCategoryAxisItemNotesLine {
        /**
        The line width of the notes.
        @member {number}
        */
        width?: number;
        /**
        The line color of the notes.
        @member {string}
        */
        color?: string;
        /**
        The length of the connecting lines in pixels.
        @member {number}
        */
        length?: number;
    }

    interface ChartCategoryAxisItemNotes {
        /**
        The position of the category axis note.
        @member {string}
        */
        position?: string;
        /**
        The icon of the notes.
        @member {ChartCategoryAxisItemNotesIcon}
        */
        icon?: ChartCategoryAxisItemNotesIcon;
        /**
        The label of the notes.
        @member {ChartCategoryAxisItemNotesLabel}
        */
        label?: ChartCategoryAxisItemNotesLabel;
        /**
        The line of the notes.
        @member {ChartCategoryAxisItemNotesLine}
        */
        line?: ChartCategoryAxisItemNotesLine;
        data?: ChartCategoryAxisItemNotesDataItem[];
    }

    interface ChartCategoryAxisItemPlotBand {
        /**
        The color of the plot band.
        @member {string}
        */
        color?: string;
        /**
        The start position of the plot band in axis units.
        @member {number}
        */
        from?: number;
        /**
        The opacity of the plot band.
        @member {number}
        */
        opacity?: number;
        /**
        The end position of the plot band in axis units.
        @member {number}
        */
        to?: number;
    }

    interface ChartCategoryAxisItemSelectMousewheel {
        /**
        If set to true will reverse the mouse wheel direction. The normal direction is down for "zoom out", up for "zoom in".
        @member {boolean}
        */
        reverse?: boolean;
        /**
        The zoom direction.The supported values are:
        @member {string}
        */
        zoom?: string;
    }

    interface ChartCategoryAxisItemSelect {
        /**
        The lower boundary of the selected range.
        @member {any}
        */
        from?: any;
        /**
        The maximum value which the user can select.
        @member {any}
        */
        max?: any;
        /**
        The minimum value which the user can select.
        @member {any}
        */
        min?: any;
        /**
        The mouse wheel configuration of the selection.
        @member {ChartCategoryAxisItemSelectMousewheel}
        */
        mousewheel?: ChartCategoryAxisItemSelectMousewheel;
        /**
        The upper boundary of the selected range.
        @member {any}
        */
        to?: any;
    }

    interface ChartCategoryAxisItemTitleBorder {
        /**
        The color of the border. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the border.The following dash types are supported:
        @member {string}
        */
        dashType?: string;
        /**
        The width of the border in pixels. By default the border width is set to zero which means that the border will not appear.
        @member {number}
        */
        width?: number;
    }

    interface ChartCategoryAxisItemTitleMargin {
        /**
        The bottom margin of the title.
        @member {number}
        */
        bottom?: number;
        /**
        The left margin of the title.
        @member {number}
        */
        left?: number;
        /**
        The right margin of the title.
        @member {number}
        */
        right?: number;
        /**
        The top margin of the title.
        @member {number}
        */
        top?: number;
    }

    interface ChartCategoryAxisItemTitlePadding {
        /**
        The bottom padding of the title.
        @member {number}
        */
        bottom?: number;
        /**
        The left padding of the title.
        @member {number}
        */
        left?: number;
        /**
        The right padding of the title.
        @member {number}
        */
        right?: number;
        /**
        The top padding of the title.
        @member {number}
        */
        top?: number;
    }

    interface ChartCategoryAxisItemTitle {
        /**
        The background color of the title. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        background?: string;
        /**
        The border of the title.
        @member {ChartCategoryAxisItemTitleBorder}
        */
        border?: ChartCategoryAxisItemTitleBorder;
        /**
        The text color of the title. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The font style of the title.
        @member {string}
        */
        font?: string;
        /**
        The margin of the title. A numeric value will set all margins.
        @member {ChartCategoryAxisItemTitleMargin}
        */
        margin?: ChartCategoryAxisItemTitleMargin;
        /**
        The padding of the title. A numeric value will set all paddings.
        @member {ChartCategoryAxisItemTitlePadding}
        */
        padding?: ChartCategoryAxisItemTitlePadding;
        /**
        The position of the title.The supported values are:
        @member {string}
        */
        position?: string;
        /**
        The rotation angle of the title. By default the title is not rotated.
        @member {number}
        */
        rotation?: number;
        /**
        The text of the title.
        @member {string}
        */
        text?: string;
        /**
        If set to true the chart will display the category axis title. By default the category axis title is visible.
        @member {boolean}
        */
        visible?: boolean;
    }

    interface ChartCategoryAxisItem {
        /**
        The discrete categoryAxis.baseUnitStep values when
either categoryAxis.baseUnit is set to "fit" or
categoryAxis.baseUnitStep is set to "auto".
        @member {ChartCategoryAxisItemAutoBaseUnitSteps}
        */
        autoBaseUnitSteps?: ChartCategoryAxisItemAutoBaseUnitSteps;
        /**
        Category index at which the first value axis crosses this axis (when set as an object).Category indices at which the value axes cross the category axis (when set as an array).
        @member {any}
        */
        axisCrossingValue?: any;
        /**
        The background color of the axis.
        @member {string}
        */
        background?: string;
        /**
        The base time interval for the date axis. The default base unit is determined automatically from the minimum difference
between subsequent categories.The supported values are:Setting baseUnit to "fit" will set such base unit and categoryAxis.baseUnitStep
that the total number of categories does not exceed categoryAxis.maxDateGroups.Series data is aggregated for the specified base unit using the series.aggregate function.
        @member {string}
        */
        baseUnit?: string;
        /**
        The step (interval) between categories in base units. Setting it to "auto" will set the step to such value
that the total number of categories does not exceed categoryAxis.maxDateGroups.This option is ignored if categoryAxis.baseUnit is set to "fit".
        @member {any}
        */
        baseUnitStep?: any;
        /**
        The category names. The chart will create a category for every item of the array.
        @member {any}
        */
        categories?: any;
        /**
        The color to apply to all axis elements. Accepts a valid CSS color string, including hex and rgb. Can be overridden by categoryAxis.labels.color and
categoryAxis.line.color.
        @member {string}
        */
        color?: string;
        /**
        The crosshair configuration options.
        @member {ChartCategoryAxisItemCrosshair}
        */
        crosshair?: ChartCategoryAxisItemCrosshair;
        /**
        The data item field which contains the category name. Requires the dataSource option to be set.
        @member {string}
        */
        field?: string;
        /**
        If set to true the chart will position categories and series points on major ticks. This removes the empty space before and after the series.The default value is false except for "area" and "verticalArea".
        @member {boolean}
        */
        justified?: boolean;
        /**
        The axis labels configuration.
        @member {ChartCategoryAxisItemLabels}
        */
        labels?: ChartCategoryAxisItemLabels;
        /**
        The configuration of the axis lines. Also affects the major and minor ticks, but not the grid lines.
        @member {ChartCategoryAxisItemLine}
        */
        line?: ChartCategoryAxisItemLine;
        /**
        The configuration of the major grid lines. These are the lines that are an extension of the major ticks through the
body of the chart.
        @member {ChartCategoryAxisItemMajorGridLines}
        */
        majorGridLines?: ChartCategoryAxisItemMajorGridLines;
        /**
        The configuration of the category axis major ticks.
        @member {ChartCategoryAxisItemMajorTicks}
        */
        majorTicks?: ChartCategoryAxisItemMajorTicks;
        /**
        The last date displayed on the category date axis. By default, the minimum date is the same as the last category.
This is often used in combination with the categoryAxis.min and categoryAxis.roundToBaseUnit options to
set up a fixed date range.
        @member {any}
        */
        max?: any;
        /**
        The maximum number of groups (categories) to display when
categoryAxis.baseUnit is set to "fit" or
categoryAxis.baseUnitStep is set to "auto".
        @member {number}
        */
        maxDateGroups?: number;
        /**
        The first date displayed on the category date axis. By default, the minimum date is the same as the first category.
This is often used in combination with the categoryAxis.min and categoryAxis.roundToBaseUnit options to
set up a fixed date range.
        @member {any}
        */
        min?: any;
        /**
        The configuration of the minor grid lines. These are the lines that are an extension of the minor ticks through the
body of the chart.
        @member {ChartCategoryAxisItemMinorGridLines}
        */
        minorGridLines?: ChartCategoryAxisItemMinorGridLines;
        /**
        The configuration of the category axis minor ticks.
        @member {ChartCategoryAxisItemMinorTicks}
        */
        minorTicks?: ChartCategoryAxisItemMinorTicks;
        /**
        The unique axis name. Used to associate a series with a category axis using the series.categoryAxis option.
        @member {string}
        */
        name?: string;
        /**
        The name of the pane that the category axis should be rendered in.
The axis will be rendered in the first (default) pane if not set.
        @member {string}
        */
        pane?: string;
        plotBands?: ChartCategoryAxisItemPlotBand[];
        /**
        If set to true the category axis direction will be reversed. By default categories are listed from left to right and from bottom to top.
        @member {boolean}
        */
        reverse?: boolean;
        /**
        If set to true the chart will round the first and last date to the nearest base unit.The roundToBaseUnit option will be ignored if series.type is set to "bar", "column", "boxPlot", "ohlc" or "candlestick".
        @member {boolean}
        */
        roundToBaseUnit?: boolean;
        /**
        The selected axis range. If set, axis selection will be enabled.The range units are:
        @member {ChartCategoryAxisItemSelect}
        */
        select?: ChartCategoryAxisItemSelect;
        /**
        The angle (degrees) of the first category on the axis.Angles increase clockwise and zero is to the left. Negative values are acceptable.
        @member {number}
        */
        startAngle?: number;
        /**
        The title configuration of the category axis.
        @member {ChartCategoryAxisItemTitle}
        */
        title?: ChartCategoryAxisItemTitle;
        /**
        The category axis type.The supported values are:
        @member {string}
        */
        type?: string;
        /**
        If set to true the chart will display the category axis. By default the category axis is visible.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The week start day when categoryAxis.baseUnit is set to "weeks".The supported values are:
        @member {number}
        */
        weekStartDay?: number;
        /**
        The category axis notes configuration.
        @member {ChartCategoryAxisItemNotes}
        */
        notes?: ChartCategoryAxisItemNotes;
    }

    interface ChartChartAreaBorder {
        /**
        The color of the border. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the border.The following dash types are supported:
        @member {string}
        */
        dashType?: string;
        /**
        The width of the border in pixels. By default the border width is set to zero which means that the border will not appear.
        @member {number}
        */
        width?: number;
    }

    interface ChartChartAreaMargin {
        /**
        The bottom margin of the chart area.
        @member {number}
        */
        bottom?: number;
        /**
        The left margin of the chart area.
        @member {number}
        */
        left?: number;
        /**
        The right margin of the chart area.
        @member {number}
        */
        right?: number;
        /**
        The top margin of the chart area.
        @member {number}
        */
        top?: number;
    }

    interface ChartChartArea {
        /**
        The background color of the chart area. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        background?: string;
        /**
        The border of the chart area.
        @member {ChartChartAreaBorder}
        */
        border?: ChartChartAreaBorder;
        /**
        The height of the chart area.
        @member {number}
        */
        height?: number;
        /**
        The margin of the chart area. A numeric value will set all margins.
        @member {ChartChartAreaMargin}
        */
        margin?: ChartChartAreaMargin;
        /**
        The background opacity of the chart area. By default the background is opaque.
        @member {number}
        */
        opacity?: number;
        /**
        The width of the chart area.
        @member {number}
        */
        width?: number;
    }

    interface ChartLegendBorder {
        /**
        The color of the border. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the border.The following dash types are supported:
        @member {string}
        */
        dashType?: string;
        /**
        The width of the border in pixels. By default the border width is set to zero which means that the border will not appear.
        @member {number}
        */
        width?: number;
    }

    interface ChartLegendInactiveItemsLabels {
        /**
        The text color of the labels. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The font style of the labels.
        @member {string}
        */
        font?: string;
        /**
        The template which renders the labels.The fields which can be used in the template are:
        @member {any}
        */
        template?: any;
    }

    interface ChartLegendInactiveItems {
        /**
        The chart legend label configuration.
        @member {ChartLegendInactiveItemsLabels}
        */
        labels?: ChartLegendInactiveItemsLabels;
    }

    interface ChartLegendLabelsMargin {
        /**
        The bottom margin of the labels.
        @member {number}
        */
        bottom?: number;
        /**
        The left margin of the labels.
        @member {number}
        */
        left?: number;
        /**
        The right margin of the labels.
        @member {number}
        */
        right?: number;
        /**
        The top margin of the labels.
        @member {number}
        */
        top?: number;
    }

    interface ChartLegendLabels {
        /**
        The text color of the labels. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The font style of the labels.
        @member {string}
        */
        font?: string;
        /**
        The margin of the labels. A numeric value will set all margins.
        @member {ChartLegendLabelsMargin}
        */
        margin?: ChartLegendLabelsMargin;
        /**
        The template which renders the labels.The fields which can be used in the template are:
        @member {any}
        */
        template?: any;
    }

    interface ChartLegendMargin {
        /**
        The bottom margin of the chart legend.
        @member {number}
        */
        bottom?: number;
        /**
        The left margin of the chart legend.
        @member {number}
        */
        left?: number;
        /**
        The right margin of the chart legend.
        @member {number}
        */
        right?: number;
        /**
        The top margin of the chart legend.
        @member {number}
        */
        top?: number;
    }

    interface ChartLegend {
        /**
        The background color of the legend. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        background?: string;
        /**
        The border of the legend.
        @member {ChartLegendBorder}
        */
        border?: ChartLegendBorder;
        /**
        The chart inactive legend items configuration.
        @member {ChartLegendInactiveItems}
        */
        inactiveItems?: ChartLegendInactiveItems;
        /**
        The chart legend label configuration.
        @member {ChartLegendLabels}
        */
        labels?: ChartLegendLabels;
        /**
        The margin of the chart legend. A numeric value will set all paddings.
        @member {ChartLegendMargin}
        */
        margin?: ChartLegendMargin;
        /**
        The X offset of the chart legend. The offset is relative to the default position of the legend.
For instance, a value of 20 will move the legend 20 pixels to the right of its initial position.
A negative value will move the legend to the left of its current position.
        @member {number}
        */
        offsetX?: number;
        /**
        The Y offset of the chart legend.  The offset is relative to the current position of the legend.
For instance, a value of 20 will move the legend 20 pixels down from its initial position.
A negative value will move the legend upwards from its current position.
        @member {number}
        */
        offsetY?: number;
        /**
        The positions of the chart legend.The supported values are:
        @member {string}
        */
        position?: string;
        /**
        If set to true the chart will display the legend. By default the chart legend is visible.
        @member {boolean}
        */
        visible?: boolean;
    }

    interface ChartPaneBorder {
        /**
        The color of the border. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the border.The following dash types are supported:
        @member {string}
        */
        dashType?: string;
        /**
        The width of the border in pixels. By default the border width is set to zero which means that the border will not appear.
        @member {number}
        */
        width?: number;
    }

    interface ChartPaneMargin {
        /**
        The bottom margin of the chart panes.
        @member {number}
        */
        bottom?: number;
        /**
        The left margin of the chart panes.
        @member {number}
        */
        left?: number;
        /**
        The right margin of the chart panes.
        @member {number}
        */
        right?: number;
        /**
        The top margin of the chart panes.
        @member {number}
        */
        top?: number;
    }

    interface ChartPanePadding {
        /**
        The bottom padding of the chart panes.
        @member {number}
        */
        bottom?: number;
        /**
        The left padding of the chart panes.
        @member {number}
        */
        left?: number;
        /**
        The right padding of the chart panes.
        @member {number}
        */
        right?: number;
        /**
        The top padding of the chart panes.
        @member {number}
        */
        top?: number;
    }

    interface ChartPaneTitleBorder {
        /**
        The color of the border. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the border.The following dash types are supported:
        @member {string}
        */
        dashType?: string;
        /**
        The width of the border in pixels. By default the border width is set to zero which means that the border will not appear.
        @member {number}
        */
        width?: number;
    }

    interface ChartPaneTitleMargin {
        /**
        The bottom margin of the title.
        @member {number}
        */
        bottom?: number;
        /**
        The left margin of the title.
        @member {number}
        */
        left?: number;
        /**
        The right margin of the title.
        @member {number}
        */
        right?: number;
        /**
        The top margin of the title.
        @member {number}
        */
        top?: number;
    }

    interface ChartPaneTitle {
        /**
        The background color of the title. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        background?: string;
        /**
        The border of the title.
        @member {ChartPaneTitleBorder}
        */
        border?: ChartPaneTitleBorder;
        /**
        The text color of the title. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The font style of the title.
        @member {string}
        */
        font?: string;
        /**
        The margin of the title. A numeric value will set all margins.
        @member {ChartPaneTitleMargin}
        */
        margin?: ChartPaneTitleMargin;
        /**
        The position of the title.The supported values are:
        @member {string}
        */
        position?: string;
        /**
        The text of the title.
        @member {string}
        */
        text?: string;
        /**
        If set to true the chart will display the pane title. By default the pane title is visible.
        @member {boolean}
        */
        visible?: boolean;
    }

    interface ChartPane {
        /**
        The background color of the chart pane. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        background?: string;
        /**
        The border of the chart pane.
        @member {ChartPaneBorder}
        */
        border?: ChartPaneBorder;
        /**
        Specifies whether the charts in the pane should be clipped. By default all charts except radar, polar and 100% stacked charts are clipped.
        @member {boolean}
        */
        clip?: boolean;
        /**
        The chart pane height in pixels.
        @member {number}
        */
        height?: number;
        /**
        The margin of the pane. A numeric value will set all margins.
        @member {ChartPaneMargin}
        */
        margin?: ChartPaneMargin;
        /**
        The unique name of the chart pane.
        @member {string}
        */
        name?: string;
        /**
        The padding of the pane. A numeric value will set all paddings.
        @member {ChartPanePadding}
        */
        padding?: ChartPanePadding;
        /**
        The title configuration of the chart pane.
        @member {ChartPaneTitle}
        */
        title?: ChartPaneTitle;
    }

    interface ChartPlotAreaBorder {
        /**
        The color of the border. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the border.The following dash types are supported:
        @member {string}
        */
        dashType?: string;
        /**
        The width of the border in pixels. By default the border width is set to zero which means that the border will not appear.
        @member {number}
        */
        width?: number;
    }

    interface ChartPlotAreaMargin {
        /**
        The bottom margin of the chart plot area.
        @member {number}
        */
        bottom?: number;
        /**
        The left margin of the chart plot area.
        @member {number}
        */
        left?: number;
        /**
        The right margin of the chart plot area.
        @member {number}
        */
        right?: number;
        /**
        The top margin of the chart plot area.
        @member {number}
        */
        top?: number;
    }

    interface ChartPlotAreaPadding {
        /**
        The bottom padding of the chart plot area.
        @member {number}
        */
        bottom?: number;
        /**
        The left padding of the chart plot area.
        @member {number}
        */
        left?: number;
        /**
        The right padding of the chart plot area.
        @member {number}
        */
        right?: number;
        /**
        The top padding of the chart plot area.
        @member {number}
        */
        top?: number;
    }

    interface ChartPlotArea {
        /**
        The background color of the chart plot area. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        background?: string;
        /**
        The border of the chart plot area.
        @member {ChartPlotAreaBorder}
        */
        border?: ChartPlotAreaBorder;
        /**
        The margin of the chart plot area. A numeric value will set all margins.
        @member {ChartPlotAreaMargin}
        */
        margin?: ChartPlotAreaMargin;
        /**
        The background opacity of the chart plot area. By default the background is opaque.
        @member {number}
        */
        opacity?: number;
        /**
        The padding of the chart plot area. A numeric value will set all paddings.The default padding for pie, donut, radar and polar charts is proportional of the chart size.
        @member {ChartPlotAreaPadding}
        */
        padding?: ChartPlotAreaPadding;
    }

    interface ChartSeriesItemBorder {
        /**
        The color of the border. Accepts a valid CSS color string, including hex and rgb. By default it is set to color of the current series.
        @member {any}
        */
        color?: any;
        /**
        The dash type of the border.The following dash types are supported:
        @member {any}
        */
        dashType?: any;
        /**
        The opacity of the border. By default the border is opaque.
        @member {any}
        */
        opacity?: any;
        /**
        The width of the border in pixels.
        @member {any}
        */
        width?: any;
    }

    interface ChartSeriesItemConnectors {
        /**
        The color of the connector. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The padding between the connector line and the label, and connector line and donut chart.
        @member {number}
        */
        padding?: number;
        /**
        The width of the connector line.
        @member {number}
        */
        width?: number;
    }

    interface ChartSeriesItemErrorBarsLine {
        /**
        The width of the line.
        @member {number}
        */
        width?: number;
        /**
        The dash type of the error bars line.The following dash types are supported:
        @member {string}
        */
        dashType?: string;
    }

    interface ChartSeriesItemErrorBars {
        /**
        The error bars value.The following value types are supported:
        @member {any}
        */
        value?: any;
        /**
        The xAxis error bars value. See the series.errorBars.value option for a list of the supported value types.
        @member {any}
        */
        xValue?: any;
        /**
        The yAxis error bars value. See the series.errorBars.value option for a list of the supported value types.
        @member {any}
        */
        yValue?: any;
        /**
        If set to false, the error bars caps will not be displayed. By default the caps are visible.
        @member {boolean}
        */
        endCaps?: boolean;
        /**
        The color of the error bars. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The error bars line options.
        @member {ChartSeriesItemErrorBarsLine}
        */
        line?: ChartSeriesItemErrorBarsLine;
    }

    interface ChartSeriesItemExtremesBorder {
        /**
        The color of the border. Accepts a valid CSS color string, including hex and rgb.
        @member {any}
        */
        color?: any;
        /**
        The width of the border in pixels. By default the border width is set to zero which means that the border will not appear.
        @member {any}
        */
        width?: any;
    }

    interface ChartSeriesItemExtremes {
        /**
        The background color of the series outliers.
        @member {any}
        */
        background?: any;
        /**
        The border of the extremes.
        @member {ChartSeriesItemExtremesBorder}
        */
        border?: ChartSeriesItemExtremesBorder;
        /**
        The extremes size in pixels.
        @member {any}
        */
        size?: any;
        /**
        The extremes shape.The supported values are:
* "circle" - the marker shape is circle.
* "square" - the marker shape is square.
* "triangle" - the marker shape is triangle.
* "cross" - the marker shape is cross.
        @member {any}
        */
        type?: any;
        /**
        The rotation angle of the extremes.
        @member {any}
        */
        rotation?: any;
    }

    interface ChartSeriesItemHighlightBorder {
        /**
        The color of the border. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The opacity of the border. By default the border is opaque.
        @member {number}
        */
        opacity?: number;
        /**
        The width of the border in pixels. By default the border width is set to zero which means that the border will not appear.
        @member {number}
        */
        width?: number;
    }

    interface ChartSeriesItemHighlightLine {
        /**
        The line color. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The opacity of the line. By default the border is opaque.
        @member {number}
        */
        opacity?: number;
        /**
        The width of the line.
        @member {number}
        */
        width?: number;
    }

    interface ChartSeriesItemHighlight {
        /**
        The border of the highlighted chart series. The color is computed automatically from the base point color.
        @member {ChartSeriesItemHighlightBorder}
        */
        border?: ChartSeriesItemHighlightBorder;
        /**
        The highlight color. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The line of the highlighted chart series. The color is computed automatically from the base point color.
        @member {ChartSeriesItemHighlightLine}
        */
        line?: ChartSeriesItemHighlightLine;
        /**
        The opacity of the highlighted points.
        @member {number}
        */
        opacity?: number;
        /**
        If set to true the chart will highlight the series when the user hovers it with the mouse.
By default chart series highlighting is enabled.
        @member {boolean}
        */
        visible?: boolean;
    }

    interface ChartSeriesItemLabelsBorder {
        /**
        The color of the border. Accepts a valid CSS color string, including hex and rgb.
        @member {any}
        */
        color?: any;
        /**
        The dash type of the border.The following dash types are supported:
        @member {any}
        */
        dashType?: any;
        /**
        The width of the border in pixels. By default the border width is set to zero which means that the border will not appear.
        @member {any}
        */
        width?: any;
    }

    interface ChartSeriesItemLabelsMargin {
        /**
        The bottom margin of the labels.
        @member {number}
        */
        bottom?: number;
        /**
        The left margin of the labels.
        @member {number}
        */
        left?: number;
        /**
        The right margin of the labels.
        @member {number}
        */
        right?: number;
        /**
        The top margin of the labels.
        @member {number}
        */
        top?: number;
    }

    interface ChartSeriesItemLabelsPadding {
        /**
        The bottom padding of the labels.
        @member {number}
        */
        bottom?: number;
        /**
        The left padding of the labels.
        @member {number}
        */
        left?: number;
        /**
        The right padding of the labels.
        @member {number}
        */
        right?: number;
        /**
        The top padding of the labels.
        @member {number}
        */
        top?: number;
    }

    interface ChartSeriesItemLabels {
        /**
        The label alignment when series.type is set to "donut", "funnel" or "pie".The supported values  for "donut" and "pie" are:The supported values for "funnel" are:
        @member {string}
        */
        align?: string;
        /**
        The background color of the labels. Accepts a valid CSS color string, including hex and rgb.
        @member {any}
        */
        background?: any;
        /**
        The border of the labels.
        @member {ChartSeriesItemLabelsBorder}
        */
        border?: ChartSeriesItemLabelsBorder;
        /**
        The text color of the labels. Accepts a valid CSS color string, including hex and rgb.
        @member {any}
        */
        color?: any;
        /**
        The distance of the labels when series.type is set to "donut" or "pie".
        @member {number}
        */
        distance?: number;
        /**
        The font style of the labels.
        @member {any}
        */
        font?: any;
        /**
        The format of the labels. Uses kendo.format.
        @member {any}
        */
        format?: any;
        /**
        The margin of the labels. A numeric value will set all margins.
        @member {ChartSeriesItemLabelsMargin}
        */
        margin?: ChartSeriesItemLabelsMargin;
        /**
        The padding of the labels. A numeric value will set all paddings.
        @member {ChartSeriesItemLabelsPadding}
        */
        padding?: ChartSeriesItemLabelsPadding;
        /**
        The position of the labels.
        @member {any}
        */
        position?: any;
        /**
        The template which renders the chart series label.The fields which can be used in the template are:
        @member {any}
        */
        template?: any;
        /**
        If set to true the chart will display the series labels. By default chart series labels are not displayed.
        @member {any}
        */
        visible?: any;
    }

    interface ChartSeriesItemLine {
        /**
        The line color. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The line opacity. By default the line is opaque.
        @member {number}
        */
        opacity?: number;
        /**
        The line width in pixels.
        @member {string}
        */
        width?: string;
        /**
        The supported values are:
        @member {string}
        */
        style?: string;
    }

    interface ChartSeriesItemMargin {
        /**
        The bottom margin of the labels.
        @member {number}
        */
        bottom?: number;
        /**
        The left margin of the labels.
        @member {number}
        */
        left?: number;
        /**
        The right margin of the labels.
        @member {number}
        */
        right?: number;
        /**
        The top margin of the labels.
        @member {number}
        */
        top?: number;
    }

    interface ChartSeriesItemMarkersBorder {
        /**
        The color of the border. Accepts a valid CSS color string, including hex and rgb.
        @member {any}
        */
        color?: any;
        /**
        The width of the border in pixels. By default the border width is set to zero which means that the border will not appear.
        @member {any}
        */
        width?: any;
    }

    interface ChartSeriesItemMarkers {
        /**
        The background color of the series markers.
        @member {any}
        */
        background?: any;
        /**
        The border of the markers.
        @member {ChartSeriesItemMarkersBorder}
        */
        border?: ChartSeriesItemMarkersBorder;
        /**
        The marker size in pixels.
        @member {any}
        */
        size?: any;
        /**
        The markers shape.The supported values are:
* "circle" - the marker shape is circle.
* "square" - the marker shape is square.
* "triangle" - the marker shape is triangle.
* "cross" - the marker shape is cross.
        @member {any}
        */
        type?: any;
        /**
        If set to true the chart will display the series markers. By default chart series markers are not displayed.
        @member {any}
        */
        visible?: any;
        /**
        The rotation angle of the markers.
        @member {any}
        */
        rotation?: any;
    }

    interface ChartSeriesItemNegativeValues {
        /**
        The color of the chart negative bubble values.
        @member {string}
        */
        color?: string;
        /**
        If set to true the chart will display the negative bubbles. By default the negative bubbles are not displayed.
        @member {boolean}
        */
        visible?: boolean;
    }

    interface ChartSeriesItemNotesIconBorder {
        /**
        The border color of the icon.
        @member {string}
        */
        color?: string;
        /**
        The border width of the icon.
        @member {number}
        */
        width?: number;
    }

    interface ChartSeriesItemNotesIcon {
        /**
        The background color of the notes icon.
        @member {string}
        */
        background?: string;
        /**
        The border of the icon.
        @member {ChartSeriesItemNotesIconBorder}
        */
        border?: ChartSeriesItemNotesIconBorder;
        /**
        The size of the icon.
        @member {number}
        */
        size?: number;
        /**
        The icon shape.The supported values are:
* "circle" - the marker shape is circle.
* "square" - the marker shape is square.
* "triangle" - the marker shape is triangle.
* "cross" - the marker shape is cross.
        @member {string}
        */
        type?: string;
        /**
        The icon visibility.
        @member {boolean}
        */
        visible?: boolean;
    }

    interface ChartSeriesItemNotesLabelBorder {
        /**
        The color of the border. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the border.The following dash types are supported:
        @member {string}
        */
        dashType?: string;
        /**
        The width of the border in pixels. By default the border width is set to zero which means that the border will not appear.
        @member {number}
        */
        width?: number;
    }

    interface ChartSeriesItemNotesLabel {
        /**
        The background color of the label. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        background?: string;
        /**
        The border of the label.
        @member {ChartSeriesItemNotesLabelBorder}
        */
        border?: ChartSeriesItemNotesLabelBorder;
        /**
        The text color of the label. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The font style of the label.
        @member {string}
        */
        font?: string;
        /**
        The template which renders the labels.The fields which can be used in the template are:
        @member {any}
        */
        template?: any;
        /**
        If set to true the chart will display the series notes label. By default the series notes label are visible.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The rotation angle of the label. By default the label are not rotated.
        @member {number}
        */
        rotation?: number;
        /**
        The format used to display the notes label. Uses kendo.format. Contains one placeholder ("{0}") which represents the axis value.
        @member {string}
        */
        format?: string;
        /**
        The position of the labels.
        @member {string}
        */
        position?: string;
    }

    interface ChartSeriesItemNotesLine {
        /**
        The line width of the notes.
        @member {number}
        */
        width?: number;
        /**
        The line color of the notes.
        @member {string}
        */
        color?: string;
        /**
        The length of the connecting lines in pixels.
        @member {number}
        */
        length?: number;
    }

    interface ChartSeriesItemNotes {
        /**
        The position of the series note.
        @member {string}
        */
        position?: string;
        /**
        The icon of the notes.
        @member {ChartSeriesItemNotesIcon}
        */
        icon?: ChartSeriesItemNotesIcon;
        /**
        The label of the notes.
        @member {ChartSeriesItemNotesLabel}
        */
        label?: ChartSeriesItemNotesLabel;
        /**
        The line of the notes.
        @member {ChartSeriesItemNotesLine}
        */
        line?: ChartSeriesItemNotesLine;
    }

    interface ChartSeriesItemOutliersBorder {
        /**
        The color of the border. Accepts a valid CSS color string, including hex and rgb.
        @member {any}
        */
        color?: any;
        /**
        The width of the border in pixels. By default the border width is set to zero which means that the border will not appear.
        @member {any}
        */
        width?: any;
    }

    interface ChartSeriesItemOutliers {
        /**
        The background color of the series outliers.
        @member {any}
        */
        background?: any;
        /**
        The border of the outliers.
        @member {ChartSeriesItemOutliersBorder}
        */
        border?: ChartSeriesItemOutliersBorder;
        /**
        The marker size in pixels.
        @member {any}
        */
        size?: any;
        /**
        The outliers shape.The supported values are:
* "circle" - the marker shape is circle.
* "square" - the marker shape is square.
* "triangle" - the marker shape is triangle.
* "cross" - the marker shape is cross.
        @member {any}
        */
        type?: any;
        /**
        The rotation angle of the outliers.
        @member {any}
        */
        rotation?: any;
    }

    interface ChartSeriesItemOverlay {
        /**
        The chart series gradient.The supported values are:
        @member {string}
        */
        gradient?: string;
    }

    interface ChartSeriesItemStack {
        /**
        The type of stack to plot. The following types are supported:
        @member {string}
        */
        type?: string;
        /**
        Indicates that the series should be stacked in a group with the specified name.
        @member {string}
        */
        group?: string;
    }

    interface ChartSeriesItemTargetBorder {
        /**
        The color of the border.
        @member {any}
        */
        color?: any;
        /**
        The following dash types are supported:
        @member {any}
        */
        dashType?: any;
        /**
        The width of the border in pixels. By default the border width is set to zero which means that the border will not appear.
        @member {any}
        */
        width?: any;
    }

    interface ChartSeriesItemTargetLine {
        /**
        The width of the line.
        @member {any}
        */
        width?: any;
    }

    interface ChartSeriesItemTarget {
        /**
        The border of the target.
        @member {ChartSeriesItemTargetBorder}
        */
        border?: ChartSeriesItemTargetBorder;
        /**
        The target color.
        @member {any}
        */
        color?: any;
        /**
        The target line options.
        @member {ChartSeriesItemTargetLine}
        */
        line?: ChartSeriesItemTargetLine;
    }

    interface ChartSeriesItemTooltipBorder {
        /**
        The color of the border.
        @member {string}
        */
        color?: string;
        /**
        The width of the border in pixels. By default the border width is set to zero which means that the border will not appear.
        @member {number}
        */
        width?: number;
    }

    interface ChartSeriesItemTooltipPadding {
        /**
        The bottom padding of the tooltip.
        @member {number}
        */
        bottom?: number;
        /**
        The left padding of the tooltip.
        @member {number}
        */
        left?: number;
        /**
        The right padding of the tooltip.
        @member {number}
        */
        right?: number;
        /**
        The top padding of the tooltip.
        @member {number}
        */
        top?: number;
    }

    interface ChartSeriesItemTooltip {
        /**
        The background color of the tooltip. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        background?: string;
        /**
        The border configuration options.
        @member {ChartSeriesItemTooltipBorder}
        */
        border?: ChartSeriesItemTooltipBorder;
        /**
        The text color of the tooltip. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The tooltip font.
        @member {string}
        */
        font?: string;
        /**
        The format of the labels. Uses kendo.format.Format placeholders:
        @member {string}
        */
        format?: string;
        /**
        The padding of the tooltip. A numeric value will set all paddings.
        @member {ChartSeriesItemTooltipPadding}
        */
        padding?: ChartSeriesItemTooltipPadding;
        /**
        The template which renders the tooltip.The fields which can be used in the template are:
        @member {any}
        */
        template?: any;
        /**
        If set to true the chart will display the series tooltip. By default the series tooltip is not displayed.
        @member {boolean}
        */
        visible?: boolean;
    }

    interface ChartSeriesItem {
        /**
        The aggregate function to apply for date series.This function is used when a category (an year, month, etc.) contains two or more points.
The function return value is displayed instead of the individual points.The supported values are:
        @member {string}
        */
        aggregate?: string;
        /**
        The name of the value axis to use.
        @member {string}
        */
        axis?: string;
        /**
        The border of the chart series.
        @member {ChartSeriesItemBorder}
        */
        border?: ChartSeriesItemBorder;
        /**
        The data item field which contains the category name or date.
        @member {string}
        */
        categoryField?: string;
        /**
        The data field containing the close value.
        @member {string}
        */
        closeField?: string;
        /**
        The series base color. The supported values are:
        @member {any}
        */
        color?: any;
        /**
        The data item field which contains the series color.
        @member {string}
        */
        colorField?: string;
        /**
        The label connectors options.
        @member {ChartSeriesItemConnectors}
        */
        connectors?: ChartSeriesItemConnectors;
        /**
        The data item field containing the current value.
        @member {string}
        */
        currentField?: string;
        /**
        The dash type of line chart.The following dash types are supported:
        @member {string}
        */
        dashType?: string;
        /**
        The array of data items which represent the series data.Can be set to :
        @member {any}
        */
        data?: any;
        /**
        The series color when the open value is greater than the close value.
        @member {any}
        */
        downColor?: any;
        /**
        The data field containing the color applied when the open value is greater than the close value.
        @member {string}
        */
        downColorField?: string;
        /**
        The space in pixels between the different segments of the funnel chart.
        @member {number}
        */
        segmentSpacing?: number;
        /**
        specifies the ratio top-base/bottom-base of the whole chart. neckRatio set to three means the top base is three times smaller than the bottom base.
        @member {number}
        */
        neckRatio?: number;
        /**
        When set to true the ratio of the bases of each segment is calculated based on the ratio of currentDataItem.value/nextDataItem.value
The last element is always created like a rectangle since there is no following element.
        @member {boolean}
        */
        dynamicSlope?: boolean;
        /**
        When set to false all segments become with the same height, otherwise the height of each segment is based on its value.
        @member {boolean}
        */
        dynamicHeight?: boolean;
        /**
        The error bars of the chart series.
        @member {ChartSeriesItemErrorBars}
        */
        errorBars?: ChartSeriesItemErrorBars;
        /**
        The data item field which contains the series.errorBars low value.
        @member {string}
        */
        errorLowField?: string;
        /**
        The data item field which contains the series.errorBars high value.
        @member {string}
        */
        errorHighField?: string;
        /**
        The data item field which contains the series.errorBars xAxis low value.
        @member {string}
        */
        xErrorLowField?: string;
        /**
        The data item field which contains the series.errorBars xAxis high value.
        @member {string}
        */
        xErrorHighField?: string;
        /**
        The data item field which contains the series.errorBars yAxis low value.
        @member {string}
        */
        yErrorLowField?: string;
        /**
        The data item field which contains the series.errorBars yAxis high value.
        @member {string}
        */
        yErrorHighField?: string;
        /**
        The data item field which contains a boolean value indicating whether the sector is exploded.
        @member {string}
        */
        explodeField?: string;
        /**
        The data item field which contains the series value.
        @member {string}
        */
        field?: string;
        /**
        The data item field which contains the series note text.
        @member {string}
        */
        noteTextField?: string;
        /**
        The data item field which contains the series lower value.
        @member {string}
        */
        lowerField?: string;
        /**
        The data item field which contains the series q1 value.
        @member {string}
        */
        q1Field?: string;
        /**
        The data item field which contains the series median value.
        @member {string}
        */
        medianField?: string;
        /**
        The data item field which contains the series q3 value.
        @member {string}
        */
        q3Field?: string;
        /**
        The data item field which contains the series upper value.
        @member {string}
        */
        upperField?: string;
        /**
        The data item field which contains the series mean value.
        @member {string}
        */
        meanField?: string;
        /**
        The data item field which contains the series outliers value.
        @member {string}
        */
        outliersField?: string;
        /**
        The distance between the category clusters.
        @member {number}
        */
        gap?: number;
        /**
        The data field containing the high value.
        @member {string}
        */
        highField?: string;
        /**
        The chart series highlighting configuration options.
        @member {ChartSeriesItemHighlight}
        */
        highlight?: ChartSeriesItemHighlight;
        /**
        The diameter of the donut hole in pixels.
        @member {number}
        */
        holeSize?: number;
        /**
        The chart series label configuration.
        @member {ChartSeriesItemLabels}
        */
        labels?: ChartSeriesItemLabels;
        /**
        The chart line configuration options.
        @member {ChartSeriesItemLine}
        */
        line?: ChartSeriesItemLine;
        /**
        The data field containing the low value.
        @member {string}
        */
        lowField?: string;
        /**
        The margin around each donut series (ring). A numeric value will set all margins.
        @member {ChartSeriesItemMargin}
        */
        margin?: ChartSeriesItemMargin;
        /**
        The chart series marker configuration.
        @member {ChartSeriesItemMarkers}
        */
        markers?: ChartSeriesItemMarkers;
        /**
        The chart series outliers configuration.
        @member {ChartSeriesItemOutliers}
        */
        outliers?: ChartSeriesItemOutliers;
        /**
        The chart series extremes configuration.
        @member {ChartSeriesItemExtremes}
        */
        extremes?: ChartSeriesItemExtremes;
        /**
        The maximum size of the chart bubble series marker.
        @member {number}
        */
        maxSize?: number;
        /**
        The minimum size of the chart bubble series marker.
        @member {number}
        */
        minSize?: number;
        /**
        The behavior for handling missing values. The supported values are:
        @member {string}
        */
        missingValues?: string;
        /**
        The supported values are:
        @member {string}
        */
        style?: string;
        /**
        The name of the chart series which is visible in the legend.
        @member {string}
        */
        name?: string;
        /**
        The color to use for bar or column series with negative values. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        negativeColor?: string;
        /**
        The options for displaying the chart negative bubble values.
        @member {ChartSeriesItemNegativeValues}
        */
        negativeValues?: ChartSeriesItemNegativeValues;
        /**
        The series opacity. By default the series are opaque.
        @member {number}
        */
        opacity?: number;
        /**
        The data field containing the open value.
        @member {string}
        */
        openField?: string;
        /**
        The chart series overlay options.
        @member {ChartSeriesItemOverlay}
        */
        overlay?: ChartSeriesItemOverlay;
        /**
        The padding around the chart (equal on all sides).
        @member {number}
        */
        padding?: number;
        /**
        The or radius of the chart donut series in pixels. If not set, the available space is split evenly between the series.
        @member {number}
        */
        size?: number;
        /**
        The data field containing the bubble size value.
        @member {string}
        */
        sizeField?: string;
        /**
        The space between the chart series as proportion of the series width.
        @member {number}
        */
        spacing?: number;
        /**
        A boolean value indicating if the series should be stacked.
A string value is interpreted as series.stack.group.
        @member {ChartSeriesItemStack}
        */
        stack?: ChartSeriesItemStack;
        /**
        The start angle (degrees) of the first donut or pie segment.Angles increase clockwise and zero is to the left. Negative values are acceptable.
        @member {number}
        */
        startAngle?: number;
        /**
        The configuration options of the target
        @member {ChartSeriesItemTarget}
        */
        target?: ChartSeriesItemTarget;
        /**
        The data item field containing the target value.
        @member {string}
        */
        targetField?: string;
        /**
        The chart series tooltip configuration options.
        @member {ChartSeriesItemTooltip}
        */
        tooltip?: ChartSeriesItemTooltip;
        /**
        The type of the series.The supported values are:
        @member {string}
        */
        type?: string;
        /**
        A value indicating whether to show the point category name (for bubble, donut and pie series)
or series name (for other available series types) in the legend.
        @member {boolean}
        */
        visibleInLegend?: boolean;
        /**
        The data item field which indicates whether to show the point category name in the legend.
        @member {string}
        */
        visibleInLegendField?: string;
        /**
        The line width.
        @member {number}
        */
        width?: number;
        /**
        The name of the X axis to use.For polar series the xAxis range is expressed in degrees.
        @member {string}
        */
        xAxis?: string;
        /**
        The data item field containing the X value.
        @member {string}
        */
        xField?: string;
        /**
        The name of the Y axis to use.** Available for bubble, scatter, scatterLine and polar series. **
        @member {string}
        */
        yAxis?: string;
        /**
        The data item field containing the Y value.
        @member {string}
        */
        yField?: string;
        /**
        The series notes configuration.
        @member {ChartSeriesItemNotes}
        */
        notes?: ChartSeriesItemNotes;
    }

    interface ChartSeriesDefaultsBorder {
        /**
        The color of the border. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the chart series border.The following dash types are supported:
        @member {string}
        */
        dashType?: string;
        /**
        The width of the border in pixels. By default the border width is set to zero which means that the border will not appear.
        @member {number}
        */
        width?: number;
    }

    interface ChartSeriesDefaultsLabelsBorder {
        /**
        The color of the border. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the border.The following dash types are supported:
        @member {string}
        */
        dashType?: string;
        /**
        The width of the border in pixels. By default the border width is set to zero which means that the border will not appear.
        @member {number}
        */
        width?: number;
    }

    interface ChartSeriesDefaultsLabelsMargin {
        /**
        The bottom margin of the labels.
        @member {number}
        */
        bottom?: number;
        /**
        The left margin of the labels.
        @member {number}
        */
        left?: number;
        /**
        The right margin of the labels.
        @member {number}
        */
        right?: number;
        /**
        The top margin of the labels.
        @member {number}
        */
        top?: number;
    }

    interface ChartSeriesDefaultsLabelsPadding {
        /**
        The bottom padding of the labels.
        @member {number}
        */
        bottom?: number;
        /**
        The left padding of the labels.
        @member {number}
        */
        left?: number;
        /**
        The right padding of the labels.
        @member {number}
        */
        right?: number;
        /**
        The top padding of the labels.
        @member {number}
        */
        top?: number;
    }

    interface ChartSeriesDefaultsLabels {
        /**
        The background color of the labels. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        background?: string;
        /**
        The border of the labels.
        @member {ChartSeriesDefaultsLabelsBorder}
        */
        border?: ChartSeriesDefaultsLabelsBorder;
        /**
        The text color of the labels. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The font style of the labels.
        @member {string}
        */
        font?: string;
        /**
        The format of the labels. Uses kendo.format.
        @member {string}
        */
        format?: string;
        /**
        The margin of the labels. A numeric value will set all margins.
        @member {ChartSeriesDefaultsLabelsMargin}
        */
        margin?: ChartSeriesDefaultsLabelsMargin;
        /**
        The padding of the labels. A numeric value will set all margins.
        @member {ChartSeriesDefaultsLabelsPadding}
        */
        padding?: ChartSeriesDefaultsLabelsPadding;
        /**
        The template which renders the chart series label.The fields which can be used in the template are:
        @member {any}
        */
        template?: any;
        /**
        If set to true the chart will display the series labels. By default chart series labels are not displayed.
        @member {boolean}
        */
        visible?: boolean;
    }

    interface ChartSeriesDefaultsNotesIconBorder {
        /**
        The border color of the icon.
        @member {string}
        */
        color?: string;
        /**
        The border width of the icon.
        @member {number}
        */
        width?: number;
    }

    interface ChartSeriesDefaultsNotesIcon {
        /**
        The background color of the notes icon.
        @member {string}
        */
        background?: string;
        /**
        The border of the icon.
        @member {ChartSeriesDefaultsNotesIconBorder}
        */
        border?: ChartSeriesDefaultsNotesIconBorder;
        /**
        The size of the icon.
        @member {number}
        */
        size?: number;
        /**
        The icon shape.The supported values are:
* "circle" - the marker shape is circle.
* "square" - the marker shape is square.
* "triangle" - the marker shape is triangle.
* "cross" - the marker shape is cross.
        @member {string}
        */
        type?: string;
        /**
        The icon visibility.
        @member {boolean}
        */
        visible?: boolean;
    }

    interface ChartSeriesDefaultsNotesLabelBorder {
        /**
        The color of the border. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the border.The following dash types are supported:
        @member {string}
        */
        dashType?: string;
        /**
        The width of the border in pixels. By default the border width is set to zero which means that the border will not appear.
        @member {number}
        */
        width?: number;
    }

    interface ChartSeriesDefaultsNotesLabel {
        /**
        The background color of the label. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        background?: string;
        /**
        The border of the label.
        @member {ChartSeriesDefaultsNotesLabelBorder}
        */
        border?: ChartSeriesDefaultsNotesLabelBorder;
        /**
        The text color of the label. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The font style of the label.
        @member {string}
        */
        font?: string;
        /**
        The template which renders the labels.The fields which can be used in the template are:
        @member {any}
        */
        template?: any;
        /**
        If set to true the chart will display the seriesDefaults notes label. By default the seriesDefaults notes label are visible.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The rotation angle of the label. By default the label are not rotated.
        @member {number}
        */
        rotation?: number;
        /**
        The format used to display the notes label. Uses kendo.format. Contains one placeholder ("{0}") which represents the axis value.
        @member {string}
        */
        format?: string;
        /**
        The position of the labels.
        @member {string}
        */
        position?: string;
    }

    interface ChartSeriesDefaultsNotesLine {
        /**
        The line width of the notes.
        @member {number}
        */
        width?: number;
        /**
        The line color of the notes.
        @member {string}
        */
        color?: string;
        /**
        The length of the connecting lines in pixels.
        @member {number}
        */
        length?: number;
    }

    interface ChartSeriesDefaultsNotes {
        /**
        The icon of the notes.
        @member {ChartSeriesDefaultsNotesIcon}
        */
        icon?: ChartSeriesDefaultsNotesIcon;
        /**
        The label of the notes.
        @member {ChartSeriesDefaultsNotesLabel}
        */
        label?: ChartSeriesDefaultsNotesLabel;
        /**
        The line of the notes.
        @member {ChartSeriesDefaultsNotesLine}
        */
        line?: ChartSeriesDefaultsNotesLine;
    }

    interface ChartSeriesDefaultsOverlay {
        /**
        The chart series gradient.The supported values are:
        @member {string}
        */
        gradient?: string;
    }

    interface ChartSeriesDefaultsStack {
        /**
        The type of stack to plot. The following types are supported:
        @member {string}
        */
        type?: string;
    }

    interface ChartSeriesDefaultsTooltipBorder {
        /**
        The color of the border.
        @member {string}
        */
        color?: string;
        /**
        The width of the border in pixels. By default the border width is set to zero which means that the border will not appear.
        @member {number}
        */
        width?: number;
    }

    interface ChartSeriesDefaultsTooltipPadding {
        /**
        The bottom padding of the tooltip.
        @member {number}
        */
        bottom?: number;
        /**
        The left padding of the tooltip.
        @member {number}
        */
        left?: number;
        /**
        The right padding of the tooltip.
        @member {number}
        */
        right?: number;
        /**
        The top padding of the tooltip.
        @member {number}
        */
        top?: number;
    }

    interface ChartSeriesDefaultsTooltip {
        /**
        The background color of the tooltip. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        background?: string;
        /**
        The border configuration options.
        @member {ChartSeriesDefaultsTooltipBorder}
        */
        border?: ChartSeriesDefaultsTooltipBorder;
        /**
        The text color of the tooltip. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The tooltip font.
        @member {string}
        */
        font?: string;
        /**
        The format of the labels. Uses kendo.format.Format placeholders:
        @member {string}
        */
        format?: string;
        /**
        The padding of the tooltip. A numeric value will set all paddings.
        @member {ChartSeriesDefaultsTooltipPadding}
        */
        padding?: ChartSeriesDefaultsTooltipPadding;
        /**
        The template which renders the tooltip.The fields which can be used in the template are:
        @member {any}
        */
        template?: any;
        /**
        If set to true the chart will display the series tooltip. By default the series tooltip is not displayed.
        @member {boolean}
        */
        visible?: boolean;
    }

    interface ChartSeriesDefaults {
        /**
        The area chart series options. Accepts all values supported by the series option.
        @member {any}
        */
        area?: any;
        /**
        The bar chart series options. Accepts all values supported by the series option.
        @member {any}
        */
        bar?: any;
        /**
        The border of the series.
        @member {ChartSeriesDefaultsBorder}
        */
        border?: ChartSeriesDefaultsBorder;
        /**
        The bubble chart series options. Accepts all values supported by the series option.
        @member {any}
        */
        bubble?: any;
        /**
        The candlestick chart series options. Accepts all values supported by the series option.
        @member {any}
        */
        candlestick?: any;
        /**
        The column chart series options. Accepts all values supported by the series option.
        @member {any}
        */
        column?: any;
        /**
        The donut chart series options. Accepts all values supported by the series option.
        @member {any}
        */
        donut?: any;
        /**
        The distance between category clusters.
        @member {number}
        */
        gap?: number;
        /**
        The chart series label configuration.
        @member {ChartSeriesDefaultsLabels}
        */
        labels?: ChartSeriesDefaultsLabels;
        /**
        The line chart series options. Accepts all values supported by the series option.
        @member {any}
        */
        line?: any;
        /**
        The ohlc chart series options. Accepts all values supported by the series option.
        @member {any}
        */
        ohlc?: any;
        /**
        The chart series overlay options.
        @member {ChartSeriesDefaultsOverlay}
        */
        overlay?: ChartSeriesDefaultsOverlay;
        /**
        The pie chart series options. Accepts all values supported by the series option.
        @member {any}
        */
        pie?: any;
        /**
        The scatter chart series options. Accepts all values supported by the series option.
        @member {any}
        */
        scatter?: any;
        /**
        The scatterLine chart series options. Accepts all values supported by the series option.
        @member {any}
        */
        scatterLine?: any;
        /**
        The space between the chart series as proportion of the series width.
        @member {number}
        */
        spacing?: number;
        /**
        A boolean value indicating if the series should be stacked.
        @member {ChartSeriesDefaultsStack}
        */
        stack?: ChartSeriesDefaultsStack;
        /**
        The default type of the series.The supported values are:
        @member {string}
        */
        type?: string;
        /**
        The chart series tooltip configuration options.
        @member {ChartSeriesDefaultsTooltip}
        */
        tooltip?: ChartSeriesDefaultsTooltip;
        /**
        The verticalArea chart series options. Accepts all values supported by the series option.
        @member {any}
        */
        verticalArea?: any;
        /**
        The verticalLine chart series options. Accepts all values supported by the series option.
        @member {any}
        */
        verticalLine?: any;
        /**
        The seriesDefaults notes configuration.
        @member {ChartSeriesDefaultsNotes}
        */
        notes?: ChartSeriesDefaultsNotes;
    }

    interface ChartTitleBorder {
        /**
        The color of the border. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the chart title border.The following dash types are supported:
        @member {string}
        */
        dashType?: string;
        /**
        The width of the border in pixels. By default the border width is set to zero which means that the border will not appear.
        @member {number}
        */
        width?: number;
    }

    interface ChartTitleMargin {
        /**
        The bottom margin of the title.
        @member {number}
        */
        bottom?: number;
        /**
        The left margin of the title.
        @member {number}
        */
        left?: number;
        /**
        The right margin of the title.
        @member {number}
        */
        right?: number;
        /**
        The top margin of the title.
        @member {number}
        */
        top?: number;
    }

    interface ChartTitlePadding {
        /**
        The bottom padding of the title.
        @member {number}
        */
        bottom?: number;
        /**
        The left padding of the title.
        @member {number}
        */
        left?: number;
        /**
        The right padding of the title.
        @member {number}
        */
        right?: number;
        /**
        The top padding of the title.
        @member {number}
        */
        top?: number;
    }

    interface ChartTitle {
        /**
        The alignment of the title.
        @member {string}
        */
        align?: string;
        /**
        The background color of the title. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        background?: string;
        /**
        The border of the series.
        @member {ChartTitleBorder}
        */
        border?: ChartTitleBorder;
        /**
        The font of the title.
        @member {string}
        */
        font?: string;
        /**
        The margin of the title. A numeric value will set all margins.
        @member {ChartTitleMargin}
        */
        margin?: ChartTitleMargin;
        /**
        The padding of the title. A numeric value will set all margins.
        @member {ChartTitlePadding}
        */
        padding?: ChartTitlePadding;
        /**
        The position of the title.
        @member {string}
        */
        position?: string;
        /**
        The text of the chart title. You can also set the text directly for a title with default options.
        @member {string}
        */
        text?: string;
        /**
        If set to true the chart will display the title. By default the title is not displayed.
        @member {boolean}
        */
        visible?: boolean;
    }

    interface ChartTooltipBorder {
        /**
        The color of the border.
        @member {string}
        */
        color?: string;
        /**
        The width of the border in pixels. By default the border width is set to zero which means that the border will not appear.
        @member {number}
        */
        width?: number;
    }

    interface ChartTooltipPadding {
        /**
        The bottom padding of the tooltip.
        @member {number}
        */
        bottom?: number;
        /**
        The left padding of the tooltip.
        @member {number}
        */
        left?: number;
        /**
        The right padding of the tooltip.
        @member {number}
        */
        right?: number;
        /**
        The top padding of the tooltip.
        @member {number}
        */
        top?: number;
    }

    interface ChartTooltip {
        /**
        The background color of the tooltip. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        background?: string;
        /**
        The border configuration options.
        @member {ChartTooltipBorder}
        */
        border?: ChartTooltipBorder;
        /**
        The text color of the tooltip. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The tooltip font.
        @member {string}
        */
        font?: string;
        /**
        The format of the labels. Uses kendo.format.Format placeholders:
        @member {string}
        */
        format?: string;
        /**
        The padding of the tooltip. A numeric value will set all paddings.
        @member {ChartTooltipPadding}
        */
        padding?: ChartTooltipPadding;
        /**
        If set to true the chart will display a single tooltip for every category.
        @member {boolean}
        */
        shared?: boolean;
        /**
        The template which renders the shared tooltip.The fields which can be used in the template are:
        @member {any}
        */
        sharedTemplate?: any;
        /**
        The template which renders the tooltip.The fields which can be used in the template are:
        @member {any}
        */
        template?: any;
        /**
        If set to true the chart will display the series tooltip. By default the series tooltip is not displayed.
        @member {boolean}
        */
        visible?: boolean;
    }

    interface ChartValueAxisItemCrosshairTooltipBorder {
        /**
        The color of the border. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the border.The following dash types are supported:
        @member {string}
        */
        dashType?: string;
        /**
        The width of the border in pixels. By default the border width is set to zero which means that the border will not appear.
        @member {number}
        */
        width?: number;
    }

    interface ChartValueAxisItemCrosshairTooltipPadding {
        /**
        The bottom padding of the crosshair tooltip.
        @member {number}
        */
        bottom?: number;
        /**
        The left padding of the crosshair tooltip.
        @member {number}
        */
        left?: number;
        /**
        The right padding of the crosshair tooltip.
        @member {number}
        */
        right?: number;
        /**
        The top padding of the crosshair tooltip.
        @member {number}
        */
        top?: number;
    }

    interface ChartValueAxisItemCrosshairTooltip {
        /**
        The background color of the tooltip. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        background?: string;
        /**
        The border options.
        @member {ChartValueAxisItemCrosshairTooltipBorder}
        */
        border?: ChartValueAxisItemCrosshairTooltipBorder;
        /**
        The text color of the tooltip. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The tooltip font.
        @member {string}
        */
        font?: string;
        /**
        The format used to display the tooltip. Uses kendo.format. Contains one placeholder ("{0}") which represents the value value.
        @member {string}
        */
        format?: string;
        /**
        The padding of the crosshair tooltip. A numeric value will set all paddings.
        @member {ChartValueAxisItemCrosshairTooltipPadding}
        */
        padding?: ChartValueAxisItemCrosshairTooltipPadding;
        /**
        The template which renders the tooltip.The fields which can be used in the template are:
        @member {any}
        */
        template?: any;
        /**
        If set to true the chart will display the value axis crosshair tooltip. By default the value axis crosshair tooltip is not visible.
        @member {boolean}
        */
        visible?: boolean;
    }

    interface ChartValueAxisItemCrosshair {
        /**
        The color of the crosshair. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The opacity of the crosshair. By default the crosshair is opaque.
        @member {number}
        */
        opacity?: number;
        /**
        The crosshar tooltip options.
        @member {ChartValueAxisItemCrosshairTooltip}
        */
        tooltip?: ChartValueAxisItemCrosshairTooltip;
        /**
        If set to true the chart will display the value axis crosshair. By default the value axis crosshair is not visible.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The width of the crosshair in pixels.
        @member {number}
        */
        width?: number;
    }

    interface ChartValueAxisItemLabelsBorder {
        /**
        The color of the border. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the border.The following dash types are supported:
        @member {string}
        */
        dashType?: string;
        /**
        The width of the border in pixels. By default the border width is set to zero which means that the border will not appear.
        @member {number}
        */
        width?: number;
    }

    interface ChartValueAxisItemLabelsMargin {
        /**
        The bottom margin of the labels.
        @member {number}
        */
        bottom?: number;
        /**
        The left margin of the labels.
        @member {number}
        */
        left?: number;
        /**
        The right margin of the labels.
        @member {number}
        */
        right?: number;
        /**
        The top margin of the labels.
        @member {number}
        */
        top?: number;
    }

    interface ChartValueAxisItemLabelsPadding {
        /**
        The bottom padding of the labels.
        @member {number}
        */
        bottom?: number;
        /**
        The left padding of the labels.
        @member {number}
        */
        left?: number;
        /**
        The right padding of the labels.
        @member {number}
        */
        right?: number;
        /**
        The top padding of the labels.
        @member {number}
        */
        top?: number;
    }

    interface ChartValueAxisItemLabels {
        /**
        The background color of the labels. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        background?: string;
        /**
        The border of the labels.
        @member {ChartValueAxisItemLabelsBorder}
        */
        border?: ChartValueAxisItemLabelsBorder;
        /**
        The text color of the labels. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The font style of the labels.
        @member {string}
        */
        font?: string;
        /**
        The format used to display the labels. Uses kendo.format. Contains one placeholder ("{0}") which represents the category value.
        @member {string}
        */
        format?: string;
        /**
        The margin of the labels. A numeric value will set all margins.
        @member {ChartValueAxisItemLabelsMargin}
        */
        margin?: ChartValueAxisItemLabelsMargin;
        /**
        If set to true the chart will mirror the axis labels and ticks. If the labels are normally on the left side of the axis, mirroring the axis will render them to the right.
        @member {boolean}
        */
        mirror?: boolean;
        /**
        The padding of the labels. A numeric value will set all margins.
        @member {ChartValueAxisItemLabelsPadding}
        */
        padding?: ChartValueAxisItemLabelsPadding;
        /**
        The rotation angle (in degrees) of the labels. By default the labels are not rotated.Angles increase clockwise and zero is to the left. Negative values are acceptable.
        @member {number}
        */
        rotation?: number;
        /**
        The number of labels to skip. By default no labels are skipped.
        @member {number}
        */
        skip?: number;
        /**
        Label rendering step.
Every n-th label is rendered where n is the step
        @member {number}
        */
        step?: number;
        /**
        The template which renders the labels.The fields which can be used in the template are:
        @member {any}
        */
        template?: any;
        /**
        If set to true the chart will display the value axis labels. By default the category axis labels are visible.
        @member {boolean}
        */
        visible?: boolean;
    }

    interface ChartValueAxisItemLine {
        /**
        The color of the lines. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the line.The following dash types are supported:
        @member {string}
        */
        dashType?: string;
        /**
        If set to true the chart will display the value axis lines. By default the value axis lines are visible.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The width of the line in pixels. Also affects the major and minor ticks, but not the grid lines.
        @member {number}
        */
        width?: number;
    }

    interface ChartValueAxisItemMajorGridLines {
        /**
        The color of the major grid lines. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the major grid lines.The following dash types are supported:
        @member {string}
        */
        dashType?: string;
        /**
        The type of grid lines to draw for radar charts:The default type is "line" except for "radarColumn" charts.
        @member {string}
        */
        type?: string;
        /**
        If set to true the chart will display the major grid lines. By default the major grid lines are visible.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The width of the value axis major grid lines in pixels.
        @member {number}
        */
        width?: number;
        /**
        The step of the value axis major grid lines.
        @member {number}
        */
        step?: number;
        /**
        The skip of the value axis major grid lines.
        @member {number}
        */
        skip?: number;
    }

    interface ChartValueAxisItemMajorTicks {
        /**
        The color of the value axis major ticks lines. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The length of the tick line in pixels.
        @member {number}
        */
        size?: number;
        /**
        If set to true the chart will display the value axis major ticks. By default the value axis major ticks are visible.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The step of the value axis major ticks.
        @member {number}
        */
        step?: number;
        /**
        The skip of the value axis major ticks.
        @member {number}
        */
        skip?: number;
    }

    interface ChartValueAxisItemMinorGridLines {
        /**
        The color of the minor grid lines. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the minor grid lines.The following dash types are supported:
        @member {string}
        */
        dashType?: string;
        /**
        The type of grid lines to draw for radar charts:The default type is "line" except for "radarColumn" charts.
        @member {string}
        */
        type?: string;
        /**
        If set to true the chart will display the minor grid lines. By default the minor grid lines are visible.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The width of the value axis minor grid lines in pixels.
        @member {number}
        */
        width?: number;
        /**
        The step of the value axis minor grid lines.
        @member {number}
        */
        step?: number;
        /**
        The skip of the value axis minor grid lines.
        @member {number}
        */
        skip?: number;
    }

    interface ChartValueAxisItemMinorTicks {
        /**
        The color of the value axis minor ticks lines. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The length of the tick line in pixels.
        @member {number}
        */
        size?: number;
        /**
        If set to true the chart will display the value axis minor ticks. By default the value axis minor ticks are not visible.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The width of the minor ticks in pixels.
        @member {number}
        */
        width?: number;
        /**
        The step of the value axis minor ticks.
        @member {number}
        */
        step?: number;
        /**
        The skip of the value axis minor ticks.
        @member {number}
        */
        skip?: number;
    }

    interface ChartValueAxisItemNotesDataItemIconBorder {
        /**
        The border color of the icon.
        @member {string}
        */
        color?: string;
        /**
        The border width of the icon.
        @member {number}
        */
        width?: number;
    }

    interface ChartValueAxisItemNotesDataItemIcon {
        /**
        The background color of the note icon.
        @member {string}
        */
        background?: string;
        /**
        The border of the icon.
        @member {ChartValueAxisItemNotesDataItemIconBorder}
        */
        border?: ChartValueAxisItemNotesDataItemIconBorder;
        /**
        The size of the icon.
        @member {number}
        */
        size?: number;
        /**
        The icon shape.The supported values are:
* "circle" - the marker shape is circle.
* "square" - the marker shape is square.
* "triangle" - the marker shape is triangle.
* "cross" - the marker shape is cross.
        @member {string}
        */
        type?: string;
        /**
        The icon visibility.
        @member {boolean}
        */
        visible?: boolean;
    }

    interface ChartValueAxisItemNotesDataItemLabelBorder {
        /**
        The color of the border. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the border.The following dash types are supported:
        @member {string}
        */
        dashType?: string;
        /**
        The width of the border in pixels. By default the border width is set to zero which means that the border will not appear.
        @member {number}
        */
        width?: number;
    }

    interface ChartValueAxisItemNotesDataItemLabel {
        /**
        The background color of the label. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        background?: string;
        /**
        The border of the label.
        @member {ChartValueAxisItemNotesDataItemLabelBorder}
        */
        border?: ChartValueAxisItemNotesDataItemLabelBorder;
        /**
        The text color of the note label. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The font style of the note label.
        @member {string}
        */
        font?: string;
        /**
        The template which renders the labels.The fields which can be used in the template are:
        @member {any}
        */
        template?: any;
        /**
        If set to true the chart will display the value axis notes label. By default the value axis notes label are visible.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The rotation angle of the label. By default the label are not rotated.
        @member {number}
        */
        rotation?: number;
        /**
        The format used to display the note label. Uses kendo.format. Contains one placeholder ("{0}") which represents the axis value.
        @member {string}
        */
        format?: string;
        /**
        The label note text.
        @member {string}
        */
        text?: string;
        /**
        The position of the value axis note label.
        @member {string}
        */
        position?: string;
    }

    interface ChartValueAxisItemNotesDataItemLine {
        /**
        The line width of the note.
        @member {number}
        */
        width?: number;
        /**
        The line color of the note.
        @member {string}
        */
        color?: string;
        /**
        The length of the connecting lines in pixels.
        @member {number}
        */
        length?: number;
    }

    interface ChartValueAxisItemNotesDataItem {
        /**
        The value of the note.
        @member {any}
        */
        value?: any;
        /**
        The position of the value axis note.
        @member {string}
        */
        position?: string;
        /**
        The icon of the note.
        @member {ChartValueAxisItemNotesDataItemIcon}
        */
        icon?: ChartValueAxisItemNotesDataItemIcon;
        /**
        The label of the note.
        @member {ChartValueAxisItemNotesDataItemLabel}
        */
        label?: ChartValueAxisItemNotesDataItemLabel;
        /**
        The line of the note.
        @member {ChartValueAxisItemNotesDataItemLine}
        */
        line?: ChartValueAxisItemNotesDataItemLine;
    }

    interface ChartValueAxisItemNotesIconBorder {
        /**
        The border color of the icon.
        @member {string}
        */
        color?: string;
        /**
        The border width of the icon.
        @member {number}
        */
        width?: number;
    }

    interface ChartValueAxisItemNotesIcon {
        /**
        The background color of the notes icon.
        @member {string}
        */
        background?: string;
        /**
        The border of the icon.
        @member {ChartValueAxisItemNotesIconBorder}
        */
        border?: ChartValueAxisItemNotesIconBorder;
        /**
        The size of the icon.
        @member {number}
        */
        size?: number;
        /**
        The icon shape.The supported values are:
* "circle" - the marker shape is circle.
* "square" - the marker shape is square.
* "triangle" - the marker shape is triangle.
* "cross" - the marker shape is cross.
        @member {string}
        */
        type?: string;
        /**
        The icon visibility.
        @member {boolean}
        */
        visible?: boolean;
    }

    interface ChartValueAxisItemNotesLabelBorder {
        /**
        The color of the border. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the border.The following dash types are supported:
        @member {string}
        */
        dashType?: string;
        /**
        The width of the border in pixels. By default the border width is set to zero which means that the border will not appear.
        @member {number}
        */
        width?: number;
    }

    interface ChartValueAxisItemNotesLabel {
        /**
        The background color of the label. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        background?: string;
        /**
        The border of the label.
        @member {ChartValueAxisItemNotesLabelBorder}
        */
        border?: ChartValueAxisItemNotesLabelBorder;
        /**
        The text color of the label. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The font style of the label.
        @member {string}
        */
        font?: string;
        /**
        The template which renders the labels.The fields which can be used in the template are:
        @member {any}
        */
        template?: any;
        /**
        If set to true the chart will display the value axis notes label. By default the value axis notes label are visible.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The rotation angle of the label. By default the label are not rotated.
        @member {number}
        */
        rotation?: number;
        /**
        The format used to display the notes label. Uses kendo.format. Contains one placeholder ("{0}") which represents the axis value.
        @member {string}
        */
        format?: string;
        /**
        The position of the labels.
        @member {string}
        */
        position?: string;
    }

    interface ChartValueAxisItemNotesLine {
        /**
        The line width of the notes.
        @member {number}
        */
        width?: number;
        /**
        The line color of the notes.
        @member {string}
        */
        color?: string;
        /**
        The length of the connecting lines in pixels.
        @member {number}
        */
        length?: number;
    }

    interface ChartValueAxisItemNotes {
        /**
        The position of the value axis note.
        @member {string}
        */
        position?: string;
        /**
        The icon of the notes.
        @member {ChartValueAxisItemNotesIcon}
        */
        icon?: ChartValueAxisItemNotesIcon;
        /**
        The label of the notes.
        @member {ChartValueAxisItemNotesLabel}
        */
        label?: ChartValueAxisItemNotesLabel;
        /**
        The line of the notes.
        @member {ChartValueAxisItemNotesLine}
        */
        line?: ChartValueAxisItemNotesLine;
        data?: ChartValueAxisItemNotesDataItem[];
    }

    interface ChartValueAxisItemPlotBand {
        /**
        The color of the plot band.
        @member {string}
        */
        color?: string;
        /**
        The start position of the plot band in axis units.
        @member {number}
        */
        from?: number;
        /**
        The opacity of the plot band.
        @member {number}
        */
        opacity?: number;
        /**
        The end position of the plot band in axis units.
        @member {number}
        */
        to?: number;
    }

    interface ChartValueAxisItemTitleBorder {
        /**
        The color of the border. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the border.The following dash types are supported:
        @member {string}
        */
        dashType?: string;
        /**
        The width of the border in pixels. By default the border width is set to zero which means that the border will not appear.
        @member {number}
        */
        width?: number;
    }

    interface ChartValueAxisItemTitleMargin {
        /**
        The bottom margin of the title.
        @member {number}
        */
        bottom?: number;
        /**
        The left margin of the title.
        @member {number}
        */
        left?: number;
        /**
        The right margin of the title.
        @member {number}
        */
        right?: number;
        /**
        The top margin of the title.
        @member {number}
        */
        top?: number;
    }

    interface ChartValueAxisItemTitlePadding {
        /**
        The bottom padding of the title.
        @member {number}
        */
        bottom?: number;
        /**
        The left padding of the title.
        @member {number}
        */
        left?: number;
        /**
        The right padding of the title.
        @member {number}
        */
        right?: number;
        /**
        The top padding of the title.
        @member {number}
        */
        top?: number;
    }

    interface ChartValueAxisItemTitle {
        /**
        The background color of the title. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        background?: string;
        /**
        The border of the title.
        @member {ChartValueAxisItemTitleBorder}
        */
        border?: ChartValueAxisItemTitleBorder;
        /**
        The text color of the title. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The font style of the title.
        @member {string}
        */
        font?: string;
        /**
        The margin of the title. A numeric value will set all margins.
        @member {ChartValueAxisItemTitleMargin}
        */
        margin?: ChartValueAxisItemTitleMargin;
        /**
        The padding of the title. A numeric value will set all paddings.
        @member {ChartValueAxisItemTitlePadding}
        */
        padding?: ChartValueAxisItemTitlePadding;
        /**
        The position of the title.The supported values are:
        @member {string}
        */
        position?: string;
        /**
        The rotation angle of the title. By default the title is not rotated.
        @member {number}
        */
        rotation?: number;
        /**
        The text of the title.
        @member {string}
        */
        text?: string;
        /**
        If set to true the chart will display the value axis title. By default the value axis title is visible.
        @member {boolean}
        */
        visible?: boolean;
    }

    interface ChartValueAxisItem {
        /**
        Value at which the category axis crosses this axis. (Only for object)Value indices at which the category axes cross the value axis. (Only for array)Date at which the category axis crosses this axis. (Only for date)
        @member {any}
        */
        axisCrossingValue?: any;
        /**
        The background color of the axis.
        @member {string}
        */
        background?: string;
        /**
        The color of the value axis. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The crosshair configuration options.
        @member {ChartValueAxisItemCrosshair}
        */
        crosshair?: ChartValueAxisItemCrosshair;
        /**
        The axis labels configuration.
        @member {ChartValueAxisItemLabels}
        */
        labels?: ChartValueAxisItemLabels;
        /**
        The configuration of the axis lines. Also affects the major and minor ticks, but not the grid lines.
        @member {ChartValueAxisItemLine}
        */
        line?: ChartValueAxisItemLine;
        /**
        The configuration of the major grid lines. These are the lines that are an extension of the major ticks through the
body of the chart.
        @member {ChartValueAxisItemMajorGridLines}
        */
        majorGridLines?: ChartValueAxisItemMajorGridLines;
        /**
        The interval between major divisions.
If the valueAxis.type is set to "log", the majorUnit value will be used for the base of the logarithm.
        @member {number}
        */
        majorUnit?: number;
        /**
        The maximum value of the axis.
        @member {number}
        */
        max?: number;
        /**
        The minimum value of the axis.
        @member {number}
        */
        min?: number;
        /**
        The configuration of the minor grid lines. These are the lines that are an extension of the minor ticks through the
body of the chart.
        @member {ChartValueAxisItemMinorGridLines}
        */
        minorGridLines?: ChartValueAxisItemMinorGridLines;
        /**
        The configuration of the value axis major ticks.
        @member {ChartValueAxisItemMajorTicks}
        */
        majorTicks?: ChartValueAxisItemMajorTicks;
        /**
        The configuration of the value axis minor ticks.
        @member {ChartValueAxisItemMinorTicks}
        */
        minorTicks?: ChartValueAxisItemMinorTicks;
        /**
        The interval between minor divisions. It defaults to 1/5th of the valueAxis.majorUnit.
If the valueAxis.type is set to "log", the minorUnit value represents the number of divisions between two major units and defaults to the major unit minus one.
        @member {number}
        */
        minorUnit?: number;
        /**
        The unique axis name. Used to associate a series with a value axis using the series.axis option.
        @member {any}
        */
        name?: any;
        /**
        If set to true the chart will prevent the automatic axis range from snapping to 0.
        @member {boolean}
        */
        narrowRange?: boolean;
        /**
        The name of the pane that the value axis should be rendered in.
The axis will be rendered in the first (default) pane if not set.
        @member {string}
        */
        pane?: string;
        plotBands?: ChartValueAxisItemPlotBand[];
        /**
        If set to true the value axis direction will be reversed. By default categories are listed from left to right and from bottom to top.
        @member {boolean}
        */
        reverse?: boolean;
        /**
        The title configuration of the value axis.
        @member {ChartValueAxisItemTitle}
        */
        title?: ChartValueAxisItemTitle;
        /**
        The axis type.The supported values are:
        @member {string}
        */
        type?: string;
        /**
        If set to true the chart will display the value axis. By default the value axis is visible.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The value axis notes configuration.
        @member {ChartValueAxisItemNotes}
        */
        notes?: ChartValueAxisItemNotes;
    }

    interface ChartXAxisItemCrosshairTooltipBorder {
        /**
        The color of the border. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the border.The following dash types are supported:
        @member {string}
        */
        dashType?: string;
        /**
        The width of the border in pixels. By default the border width is set to zero which means that the border will not appear.
        @member {number}
        */
        width?: number;
    }

    interface ChartXAxisItemCrosshairTooltipPadding {
        /**
        The bottom padding of the crosshair tooltip.
        @member {number}
        */
        bottom?: number;
        /**
        The left padding of the crosshair tooltip.
        @member {number}
        */
        left?: number;
        /**
        The right padding of the crosshair tooltip.
        @member {number}
        */
        right?: number;
        /**
        The top padding of the crosshair tooltip.
        @member {number}
        */
        top?: number;
    }

    interface ChartXAxisItemCrosshairTooltip {
        /**
        The background color of the tooltip. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        background?: string;
        /**
        The border options.
        @member {ChartXAxisItemCrosshairTooltipBorder}
        */
        border?: ChartXAxisItemCrosshairTooltipBorder;
        /**
        The text color of the tooltip. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The tooltip font.
        @member {string}
        */
        font?: string;
        /**
        The format used to display the tooltip. Uses kendo.format. Contains one placeholder ("{0}") which represents the value value.
        @member {string}
        */
        format?: string;
        /**
        The padding of the crosshair tooltip. A numeric value will set all paddings.
        @member {ChartXAxisItemCrosshairTooltipPadding}
        */
        padding?: ChartXAxisItemCrosshairTooltipPadding;
        /**
        The template which renders the tooltip.The fields which can be used in the template are:
        @member {any}
        */
        template?: any;
        /**
        If set to true the chart will display the scatter chart x axis crosshair tooltip. By default the scatter chart x axis crosshair tooltip is not visible.
        @member {boolean}
        */
        visible?: boolean;
    }

    interface ChartXAxisItemCrosshair {
        /**
        The color of the crosshair. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The opacity of the crosshair. By default the crosshair is opaque.
        @member {number}
        */
        opacity?: number;
        /**
        The crosshar tooltip options.
        @member {ChartXAxisItemCrosshairTooltip}
        */
        tooltip?: ChartXAxisItemCrosshairTooltip;
        /**
        If set to true the chart will display the scatter chart x axis crosshair. By default the scatter chart x axis crosshair is not visible.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The width of the crosshair in pixels.
        @member {number}
        */
        width?: number;
    }

    interface ChartXAxisItemLabelsBorder {
        /**
        The color of the border. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the border.The following dash types are supported:
        @member {string}
        */
        dashType?: string;
        /**
        The width of the border in pixels. By default the border width is set to zero which means that the border will not appear.
        @member {number}
        */
        width?: number;
    }

    interface ChartXAxisItemLabelsDateFormats {
        /**
        The format used when xAxis.baseUnit is set to "days".
        @member {string}
        */
        days?: string;
        /**
        The format used when xAxis.baseUnit is set to "hours".
        @member {string}
        */
        hours?: string;
        /**
        The format used when xAxis.baseUnit is set to "months".
        @member {string}
        */
        months?: string;
        /**
        The format used when xAxis.baseUnit is set to "weeks".
        @member {string}
        */
        weeks?: string;
        /**
        The format used when xAxis.baseUnit is set to "years".
        @member {string}
        */
        years?: string;
    }

    interface ChartXAxisItemLabelsMargin {
        /**
        The bottom margin of the labels.
        @member {number}
        */
        bottom?: number;
        /**
        The left margin of the labels.
        @member {number}
        */
        left?: number;
        /**
        The right margin of the labels.
        @member {number}
        */
        right?: number;
        /**
        The top margin of the labels.
        @member {number}
        */
        top?: number;
    }

    interface ChartXAxisItemLabelsPadding {
        /**
        The bottom padding of the labels.
        @member {number}
        */
        bottom?: number;
        /**
        The left padding of the labels.
        @member {number}
        */
        left?: number;
        /**
        The right padding of the labels.
        @member {number}
        */
        right?: number;
        /**
        The top padding of the labels.
        @member {number}
        */
        top?: number;
    }

    interface ChartXAxisItemLabels {
        /**
        The background color of the labels. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        background?: string;
        /**
        The border of the labels.
        @member {ChartXAxisItemLabelsBorder}
        */
        border?: ChartXAxisItemLabelsBorder;
        /**
        The text color of the labels. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The culture to use when formatting date values. See the globalization overview for more information.
        @member {string}
        */
        culture?: string;
        /**
        The format used to display the labels when the x values are dates. Uses kendo.format. Contains one placeholder ("{0}") which represents the category value.
        @member {ChartXAxisItemLabelsDateFormats}
        */
        dateFormats?: ChartXAxisItemLabelsDateFormats;
        /**
        The font style of the labels.
        @member {string}
        */
        font?: string;
        /**
        The format used to display the labels. Uses kendo.format. Contains one placeholder ("{0}") which represents the category value.
        @member {string}
        */
        format?: string;
        /**
        The margin of the labels. A numeric value will set all margins.
        @member {ChartXAxisItemLabelsMargin}
        */
        margin?: ChartXAxisItemLabelsMargin;
        /**
        If set to true the chart will mirror the axis labels and ticks. If the labels are normally on the left side of the axis, mirroring the axis will render them to the right.
        @member {boolean}
        */
        mirror?: boolean;
        /**
        The padding of the labels. A numeric value will set all paddings.
        @member {ChartXAxisItemLabelsPadding}
        */
        padding?: ChartXAxisItemLabelsPadding;
        /**
        The rotation angle of the labels. By default the labels are not rotated.
        @member {number}
        */
        rotation?: number;
        /**
        The number of labels to skip.
        @member {number}
        */
        skip?: number;
        /**
        The label rendering step - render every n-th label. By default every label is rendered.
        @member {number}
        */
        step?: number;
        /**
        The template which renders the labels.The fields which can be used in the template are:
        @member {any}
        */
        template?: any;
        /**
        If set to true the chart will display the x axis labels. By default the x axis labels are visible.
        @member {boolean}
        */
        visible?: boolean;
    }

    interface ChartXAxisItemLine {
        /**
        The color of the lines. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the line.The following dash types are supported:
        @member {string}
        */
        dashType?: string;
        /**
        If set to true the chart will display the x axis lines. By default the x axis lines are visible.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The width of the line in pixels. Also affects the major and minor ticks, but not the grid lines.
#### Example - set the scatter chart x axis line width
        @member {number}
        */
        width?: number;
    }

    interface ChartXAxisItemMajorGridLines {
        /**
        The color of the lines. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the line.The following dash types are supported:
        @member {string}
        */
        dashType?: string;
        /**
        If set to true the chart will display the x major grid liness. By default the x major grid liness are visible.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The width of the line in pixels. Also affects the major and minor ticks, but not the grid lines.
#### Example - set the scatter chart x major grid lines width
        @member {number}
        */
        width?: number;
        /**
        The step of the x axis major grid lines.
        @member {number}
        */
        step?: number;
        /**
        The skip of the x axis major grid lines.
        @member {number}
        */
        skip?: number;
    }

    interface ChartXAxisItemMajorTicks {
        /**
        The color of the scatter chart x axis major ticks lines. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The length of the tick line in pixels.
        @member {number}
        */
        size?: number;
        /**
        If set to true the chart will display the scatter chart x axis major ticks. By default the category axis major ticks are visible.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The width of the major ticks in pixels.
        @member {number}
        */
        width?: number;
        /**
        The step of the x axis major ticks.
        @member {number}
        */
        step?: number;
        /**
        The skip of the x axis major ticks.
        @member {number}
        */
        skip?: number;
    }

    interface ChartXAxisItemMinorGridLines {
        /**
        The color of the minor grid lines. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the minor grid lines.The following dash types are supported:
        @member {string}
        */
        dashType?: string;
        /**
        If set to true the chart will display the minor grid lines. By default the minor grid lines are visible.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The width of the category axis minor grid lines in pixels.
        @member {number}
        */
        width?: number;
        /**
        The step of the x axis minor grid lines.
        @member {number}
        */
        step?: number;
        /**
        The skip of the x axis minor grid lines.
        @member {number}
        */
        skip?: number;
    }

    interface ChartXAxisItemMinorTicks {
        /**
        The color of the x axis minor ticks lines. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The length of the tick line in pixels.
        @member {number}
        */
        size?: number;
        /**
        If set to true the chart will display the x axis minor ticks. By default the x axis minor ticks are not visible.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The width of the minor ticks in pixels.
        @member {number}
        */
        width?: number;
        /**
        The step of the x axis minor ticks.
        @member {number}
        */
        step?: number;
        /**
        The skip of the x axis minor ticks.
        @member {number}
        */
        skip?: number;
    }

    interface ChartXAxisItemNotesDataItemIconBorder {
        /**
        The border color of the icon.
        @member {string}
        */
        color?: string;
        /**
        The border width of the icon.
        @member {number}
        */
        width?: number;
    }

    interface ChartXAxisItemNotesDataItemIcon {
        /**
        The background color of the note icon.
        @member {string}
        */
        background?: string;
        /**
        The border of the icon.
        @member {ChartXAxisItemNotesDataItemIconBorder}
        */
        border?: ChartXAxisItemNotesDataItemIconBorder;
        /**
        The size of the icon.
        @member {number}
        */
        size?: number;
        /**
        The icon shape.The supported values are:
* "circle" - the marker shape is circle.
* "square" - the marker shape is square.
* "triangle" - the marker shape is triangle.
* "cross" - the marker shape is cross.
        @member {string}
        */
        type?: string;
        /**
        The icon visibility.
        @member {boolean}
        */
        visible?: boolean;
    }

    interface ChartXAxisItemNotesDataItemLabelBorder {
        /**
        The color of the border. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the border.The following dash types are supported:
        @member {string}
        */
        dashType?: string;
        /**
        The width of the border in pixels. By default the border width is set to zero which means that the border will not appear.
        @member {number}
        */
        width?: number;
    }

    interface ChartXAxisItemNotesDataItemLabel {
        /**
        The background color of the label. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        background?: string;
        /**
        The border of the label.
        @member {ChartXAxisItemNotesDataItemLabelBorder}
        */
        border?: ChartXAxisItemNotesDataItemLabelBorder;
        /**
        The text color of the note label. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The font style of the note label.
        @member {string}
        */
        font?: string;
        /**
        The template which renders the labels.The fields which can be used in the template are:
        @member {any}
        */
        template?: any;
        /**
        If set to true the chart will display the x axis notes label. By default the x axis notes label are visible.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The rotation angle of the label. By default the label are not rotated.
        @member {number}
        */
        rotation?: number;
        /**
        The format used to display the note label. Uses kendo.format. Contains one placeholder ("{0}") which represents the axis value.
        @member {string}
        */
        format?: string;
        /**
        The label note text.
        @member {string}
        */
        text?: string;
        /**
        The position of the x axis note label.
        @member {string}
        */
        position?: string;
    }

    interface ChartXAxisItemNotesDataItemLine {
        /**
        The line width of the note.
        @member {number}
        */
        width?: number;
        /**
        The line color of the note.
        @member {string}
        */
        color?: string;
        /**
        The length of the connecting lines in pixels.
        @member {number}
        */
        length?: number;
    }

    interface ChartXAxisItemNotesDataItem {
        /**
        The value of the note.
        @member {any}
        */
        value?: any;
        /**
        The position of the x axis note.
        @member {string}
        */
        position?: string;
        /**
        The icon of the note.
        @member {ChartXAxisItemNotesDataItemIcon}
        */
        icon?: ChartXAxisItemNotesDataItemIcon;
        /**
        The label of the note.
        @member {ChartXAxisItemNotesDataItemLabel}
        */
        label?: ChartXAxisItemNotesDataItemLabel;
        /**
        The line of the note.
        @member {ChartXAxisItemNotesDataItemLine}
        */
        line?: ChartXAxisItemNotesDataItemLine;
    }

    interface ChartXAxisItemNotesIconBorder {
        /**
        The border color of the icon.
        @member {string}
        */
        color?: string;
        /**
        The border width of the icon.
        @member {number}
        */
        width?: number;
    }

    interface ChartXAxisItemNotesIcon {
        /**
        The background color of the notes icon.
        @member {string}
        */
        background?: string;
        /**
        The border of the icon.
        @member {ChartXAxisItemNotesIconBorder}
        */
        border?: ChartXAxisItemNotesIconBorder;
        /**
        The size of the icon.
        @member {number}
        */
        size?: number;
        /**
        The icon shape.The supported values are:
* "circle" - the marker shape is circle.
* "square" - the marker shape is square.
* "triangle" - the marker shape is triangle.
* "cross" - the marker shape is cross.
        @member {string}
        */
        type?: string;
        /**
        The icon visibility.
        @member {boolean}
        */
        visible?: boolean;
    }

    interface ChartXAxisItemNotesLabelBorder {
        /**
        The color of the border. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the border.The following dash types are supported:
        @member {string}
        */
        dashType?: string;
        /**
        The width of the border in pixels. By default the border width is set to zero which means that the border will not appear.
        @member {number}
        */
        width?: number;
    }

    interface ChartXAxisItemNotesLabel {
        /**
        The background color of the label. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        background?: string;
        /**
        The border of the label.
        @member {ChartXAxisItemNotesLabelBorder}
        */
        border?: ChartXAxisItemNotesLabelBorder;
        /**
        The text color of the label. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The font style of the label.
        @member {string}
        */
        font?: string;
        /**
        The template which renders the labels.The fields which can be used in the template are:
        @member {any}
        */
        template?: any;
        /**
        If set to true the chart will display the x axis notes label. By default the x axis notes label are visible.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The rotation angle of the label. By default the label are not rotated.
        @member {number}
        */
        rotation?: number;
        /**
        The format used to display the notes label. Uses kendo.format. Contains one placeholder ("{0}") which represents the axis value.
        @member {string}
        */
        format?: string;
        /**
        The position of the labels.
        @member {string}
        */
        position?: string;
    }

    interface ChartXAxisItemNotesLine {
        /**
        The line width of the notes.
        @member {number}
        */
        width?: number;
        /**
        The line color of the notes.
        @member {string}
        */
        color?: string;
        /**
        The length of the connecting lines in pixels.
        @member {number}
        */
        length?: number;
    }

    interface ChartXAxisItemNotes {
        /**
        The position of the x axis note.
        @member {string}
        */
        position?: string;
        /**
        The icon of the notes.
        @member {ChartXAxisItemNotesIcon}
        */
        icon?: ChartXAxisItemNotesIcon;
        /**
        The label of the notes.
        @member {ChartXAxisItemNotesLabel}
        */
        label?: ChartXAxisItemNotesLabel;
        /**
        The line of the notes.
        @member {ChartXAxisItemNotesLine}
        */
        line?: ChartXAxisItemNotesLine;
        data?: ChartXAxisItemNotesDataItem[];
    }

    interface ChartXAxisItemPlotBand {
        /**
        The color of the plot band.
        @member {string}
        */
        color?: string;
        /**
        The start position of the plot band in axis units.
        @member {number}
        */
        from?: number;
        /**
        The opacity of the plot band.
        @member {number}
        */
        opacity?: number;
        /**
        The end position of the plot band in axis units.
        @member {number}
        */
        to?: number;
    }

    interface ChartXAxisItemTitleBorder {
        /**
        The color of the border. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the border.The following dash types are supported:
        @member {string}
        */
        dashType?: string;
        /**
        The width of the border in pixels. By default the border width is set to zero which means that the border will not appear.
        @member {number}
        */
        width?: number;
    }

    interface ChartXAxisItemTitleMargin {
        /**
        The bottom margin of the title.
        @member {number}
        */
        bottom?: number;
        /**
        The left margin of the title.
        @member {number}
        */
        left?: number;
        /**
        The right margin of the title.
        @member {number}
        */
        right?: number;
        /**
        The top margin of the title.
        @member {number}
        */
        top?: number;
    }

    interface ChartXAxisItemTitlePadding {
        /**
        The bottom padding of the title.
        @member {number}
        */
        bottom?: number;
        /**
        The left padding of the title.
        @member {number}
        */
        left?: number;
        /**
        The right padding of the title.
        @member {number}
        */
        right?: number;
        /**
        The top padding of the title.
        @member {number}
        */
        top?: number;
    }

    interface ChartXAxisItemTitle {
        /**
        The background color of the title. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        background?: string;
        /**
        The border of the title.
        @member {ChartXAxisItemTitleBorder}
        */
        border?: ChartXAxisItemTitleBorder;
        /**
        The text color of the title. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The font style of the title.
        @member {string}
        */
        font?: string;
        /**
        The margin of the title. A numeric value will set all margins.
        @member {ChartXAxisItemTitleMargin}
        */
        margin?: ChartXAxisItemTitleMargin;
        /**
        The padding of the title. A numeric value will set all paddings.
        @member {ChartXAxisItemTitlePadding}
        */
        padding?: ChartXAxisItemTitlePadding;
        /**
        The position of the title.The supported values are:
        @member {string}
        */
        position?: string;
        /**
        The rotation angle of the title. By default the title is not rotated.
        @member {number}
        */
        rotation?: number;
        /**
        The text of the title.
        @member {string}
        */
        text?: string;
        /**
        If set to true the chart will display the scatter chart x axis title. By default the scatter chart x axis title is visible.
        @member {boolean}
        */
        visible?: boolean;
    }

    interface ChartXAxisItem {
        /**
        Value at which the Y axis crosses this axis. (Only for object)Value indices at which the Y axes cross the value axis. (Only for array)Date at which the Y axis crosses this axis. (Only for date)
        @member {any}
        */
        axisCrossingValue?: any;
        /**
        The background color of the axis.
        @member {string}
        */
        background?: string;
        /**
        The base time interval for the axis labels. The default baseUnit is determined automatically from the value range. Available options:
        @member {string}
        */
        baseUnit?: string;
        /**
        The color of the axis. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The crosshair configuration options.
        @member {ChartXAxisItemCrosshair}
        */
        crosshair?: ChartXAxisItemCrosshair;
        /**
        The axis labels configuration.
        @member {ChartXAxisItemLabels}
        */
        labels?: ChartXAxisItemLabels;
        /**
        The configuration of the axis lines. Also affects the major and minor ticks, but not the grid lines.
        @member {ChartXAxisItemLine}
        */
        line?: ChartXAxisItemLine;
        /**
        The configuration of the major grid lines. These are the lines that are an extension of the major ticks through the
body of the chart.
        @member {ChartXAxisItemMajorGridLines}
        */
        majorGridLines?: ChartXAxisItemMajorGridLines;
        /**
        The configuration of the minor grid lines. These are the lines that are an extension of the minor ticks through the
body of the chart.
        @member {ChartXAxisItemMinorGridLines}
        */
        minorGridLines?: ChartXAxisItemMinorGridLines;
        /**
        The configuration of the x axis minor ticks.
        @member {ChartXAxisItemMinorTicks}
        */
        minorTicks?: ChartXAxisItemMinorTicks;
        /**
        The configuration of the scatter chart x axis major ticks.
        @member {ChartXAxisItemMajorTicks}
        */
        majorTicks?: ChartXAxisItemMajorTicks;
        /**
        The interval between major divisions.
If this is a date axis the value represents the number of xAxis.baseUnits between major divisions.
If the xAxis.type is set to "log", the majorUnit value will be used for the base of the logarithm.
        @member {number}
        */
        majorUnit?: number;
        /**
        The maximum value of the axis.
        @member {any}
        */
        max?: any;
        /**
        The minimum value of the axis.
        @member {any}
        */
        min?: any;
        /**
        The interval between minor divisions. It defaults to 1/5th of the xAxis.majorUnit.
If the xAxis.type is set to "log", the minorUnit value represents the number of divisions between two major units and defaults to the major unit minus one.
        @member {number}
        */
        minorUnit?: number;
        /**
        The unique axis name. Used to associate a series with a x axis using the series.xAxis option.
        @member {any}
        */
        name?: any;
        /**
        If set to true the chart will prevent the automatic axis range from snapping to 0.
        @member {boolean}
        */
        narrowRange?: boolean;
        /**
        The name of the pane that the axis should be rendered in.
The axis will be rendered in the first (default) pane if not set.
        @member {string}
        */
        pane?: string;
        plotBands?: ChartXAxisItemPlotBand[];
        /**
        If set to true the value axis direction will be reversed. By default values increase from left to right and from bottom to top.
        @member {boolean}
        */
        reverse?: boolean;
        /**
        The angle (degrees) where the 0 value is placed.Angles increase counterclockwise and zero is to the right. Negative values are acceptable.
        @member {number}
        */
        startAngle?: number;
        /**
        The title configuration of the scatter chart x axis.
        @member {ChartXAxisItemTitle}
        */
        title?: ChartXAxisItemTitle;
        /**
        The axis type.The supported values are:
        @member {string}
        */
        type?: string;
        /**
        If set to true the chart will display the x axis. By default the x axis is visible.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The x axis notes configuration.
        @member {ChartXAxisItemNotes}
        */
        notes?: ChartXAxisItemNotes;
    }

    interface ChartYAxisItemCrosshairTooltipBorder {
        /**
        The color of the border. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the border.The following dash types are supported:
        @member {string}
        */
        dashType?: string;
        /**
        The width of the border in pixels. By default the border width is set to zero which means that the border will not appear.
        @member {number}
        */
        width?: number;
    }

    interface ChartYAxisItemCrosshairTooltipPadding {
        /**
        The bottom padding of the crosshair tooltip.
        @member {number}
        */
        bottom?: number;
        /**
        The left padding of the crosshair tooltip.
        @member {number}
        */
        left?: number;
        /**
        The right padding of the crosshair tooltip.
        @member {number}
        */
        right?: number;
        /**
        The top padding of the crosshair tooltip.
        @member {number}
        */
        top?: number;
    }

    interface ChartYAxisItemCrosshairTooltip {
        /**
        The background color of the tooltip. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        background?: string;
        /**
        The border options.
        @member {ChartYAxisItemCrosshairTooltipBorder}
        */
        border?: ChartYAxisItemCrosshairTooltipBorder;
        /**
        The text color of the tooltip. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The tooltip font.
        @member {string}
        */
        font?: string;
        /**
        The format used to display the tooltip. Uses kendo.format. Contains one placeholder ("{0}") which represents the value value.
        @member {string}
        */
        format?: string;
        /**
        The padding of the crosshair tooltip. A numeric value will set all paddings.
        @member {ChartYAxisItemCrosshairTooltipPadding}
        */
        padding?: ChartYAxisItemCrosshairTooltipPadding;
        /**
        The template which renders the tooltip.The fields which can be used in the template are:
        @member {any}
        */
        template?: any;
        /**
        If set to true the chart will display the scatter chart y axis crosshair tooltip. By default the scatter chart y axis crosshair tooltip is not visible.
        @member {boolean}
        */
        visible?: boolean;
    }

    interface ChartYAxisItemCrosshair {
        /**
        The color of the crosshair. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The opacity of the crosshair. By default the crosshair is opaque.
        @member {number}
        */
        opacity?: number;
        /**
        The crosshar tooltip options.
        @member {ChartYAxisItemCrosshairTooltip}
        */
        tooltip?: ChartYAxisItemCrosshairTooltip;
        /**
        If set to true the chart will display the scatter chart y axis crosshair. By default the scatter chart y axis crosshair is not visible.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The width of the crosshair in pixels.
        @member {number}
        */
        width?: number;
    }

    interface ChartYAxisItemLabelsBorder {
        /**
        The color of the border. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the border.The following dash types are supported:
        @member {string}
        */
        dashType?: string;
        /**
        The width of the border in pixels. By default the border width is set to zero which means that the border will not appear.
        @member {number}
        */
        width?: number;
    }

    interface ChartYAxisItemLabelsDateFormats {
        /**
        The format used when yAxis.baseUnit is set to "days".
        @member {string}
        */
        days?: string;
        /**
        The format used when yAxis.baseUnit is set to "hours".
        @member {string}
        */
        hours?: string;
        /**
        The format used when yAxis.baseUnit is set to "months".
        @member {string}
        */
        months?: string;
        /**
        The format used when yAxis.baseUnit is set to "weeks".
        @member {string}
        */
        weeks?: string;
        /**
        The format used when yAxis.baseUnit is set to "years".
        @member {string}
        */
        years?: string;
    }

    interface ChartYAxisItemLabelsMargin {
        /**
        The bottom margin of the labels.
        @member {number}
        */
        bottom?: number;
        /**
        The left margin of the labels.
        @member {number}
        */
        left?: number;
        /**
        The right margin of the labels.
        @member {number}
        */
        right?: number;
        /**
        The top margin of the labels.
        @member {number}
        */
        top?: number;
    }

    interface ChartYAxisItemLabelsPadding {
        /**
        The bottom padding of the labels.
        @member {number}
        */
        bottom?: number;
        /**
        The left padding of the labels.
        @member {number}
        */
        left?: number;
        /**
        The right padding of the labels.
        @member {number}
        */
        right?: number;
        /**
        The top padding of the labels.
        @member {number}
        */
        top?: number;
    }

    interface ChartYAxisItemLabels {
        /**
        The background color of the labels. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        background?: string;
        /**
        The border of the labels.
        @member {ChartYAxisItemLabelsBorder}
        */
        border?: ChartYAxisItemLabelsBorder;
        /**
        The text color of the labels. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The culture to use when formatting date values. See the globalization overview for more information.
        @member {string}
        */
        culture?: string;
        /**
        The format used to display the labels when the x values are dates. Uses kendo.format. Contains one placeholder ("{0}") which represents the category value.
        @member {ChartYAxisItemLabelsDateFormats}
        */
        dateFormats?: ChartYAxisItemLabelsDateFormats;
        /**
        The font style of the labels.
        @member {string}
        */
        font?: string;
        /**
        The format used to display the labels. Uses kendo.format. Contains one placeholder ("{0}") which represents the category value.
        @member {string}
        */
        format?: string;
        /**
        The margin of the labels. A numeric value will set all margins.
        @member {ChartYAxisItemLabelsMargin}
        */
        margin?: ChartYAxisItemLabelsMargin;
        /**
        If set to true the chart will mirror the axis labels and ticks. If the labels are normally on the left side of the axis, mirroring the axis will render them to the right.
        @member {boolean}
        */
        mirror?: boolean;
        /**
        The padding of the labels. A numeric value will set all paddings.
        @member {ChartYAxisItemLabelsPadding}
        */
        padding?: ChartYAxisItemLabelsPadding;
        /**
        The rotation angle of the labels. By default the labels are not rotated.
        @member {number}
        */
        rotation?: number;
        /**
        The number of labels to skip.
        @member {number}
        */
        skip?: number;
        /**
        The label rendering step - render every n-th label. By default every label is rendered.
        @member {number}
        */
        step?: number;
        /**
        The template which renders the labels.The fields which can be used in the template are:
        @member {any}
        */
        template?: any;
        /**
        If set to true the chart will display the y axis labels. By default the y axis labels are visible.
        @member {boolean}
        */
        visible?: boolean;
    }

    interface ChartYAxisItemLine {
        /**
        The color of the lines. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the line.The following dash types are supported:
        @member {string}
        */
        dashType?: string;
        /**
        If set to true the chart will display the y axis lines. By default the y axis lines are visible.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The width of the line in pixels. Also affects the major and minor ticks, but not the grid lines.
#### Example - set the scatter chart y axis line width
        @member {number}
        */
        width?: number;
    }

    interface ChartYAxisItemMajorGridLines {
        /**
        The color of the lines. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the line.The following dash types are supported:
        @member {string}
        */
        dashType?: string;
        /**
        If set to true the chart will display the x major grid liness. By default the x major grid liness are visible.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The width of the line in pixels. Also affects the major and minor ticks, but not the grid lines.
#### Example - set the scatter chart x major grid lines width
        @member {number}
        */
        width?: number;
        /**
        The step of the y axis major grid lines.
        @member {number}
        */
        step?: number;
        /**
        The skip of the y axis major grid lines.
        @member {number}
        */
        skip?: number;
    }

    interface ChartYAxisItemMajorTicks {
        /**
        The color of the scatter chart y axis major ticks lines. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The length of the tick line in pixels.
        @member {number}
        */
        size?: number;
        /**
        If set to true the chart will display the scatter chart y axis major ticks. By default the category axis major ticks are visible.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The width of the major ticks in pixels.
        @member {number}
        */
        width?: number;
        /**
        The step of the y axis major ticks.
        @member {number}
        */
        step?: number;
        /**
        The skip of the y axis major ticks.
        @member {number}
        */
        skip?: number;
    }

    interface ChartYAxisItemMinorGridLines {
        /**
        The color of the minor grid lines. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the minor grid lines.The following dash types are supported:
        @member {string}
        */
        dashType?: string;
        /**
        If set to true the chart will display the minor grid lines. By default the minor grid lines are visible.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The width of the category axis minor grid lines in pixels.
        @member {number}
        */
        width?: number;
        /**
        The step of the y axis minor grid lines.
        @member {number}
        */
        step?: number;
        /**
        The skip of the y axis minor grid lines.
        @member {number}
        */
        skip?: number;
    }

    interface ChartYAxisItemMinorTicks {
        /**
        The color of the y axis minor ticks lines. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The length of the tick line in pixels.
        @member {number}
        */
        size?: number;
        /**
        If set to true the chart will display the y axis minor ticks. By default the y axis minor ticks are not visible.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The width of the minor ticks in pixels.
        @member {number}
        */
        width?: number;
        /**
        The step of the y axis minor ticks.
        @member {number}
        */
        step?: number;
        /**
        The skip of the y axis minor ticks.
        @member {number}
        */
        skip?: number;
    }

    interface ChartYAxisItemNotesDataItemIconBorder {
        /**
        The border color of the icon.
        @member {string}
        */
        color?: string;
        /**
        The border width of the icon.
        @member {number}
        */
        width?: number;
    }

    interface ChartYAxisItemNotesDataItemIcon {
        /**
        The background color of the note icon.
        @member {string}
        */
        background?: string;
        /**
        The border of the icon.
        @member {ChartYAxisItemNotesDataItemIconBorder}
        */
        border?: ChartYAxisItemNotesDataItemIconBorder;
        /**
        The size of the icon.
        @member {number}
        */
        size?: number;
        /**
        The icon shape.The supported values are:
* "circle" - the marker shape is circle.
* "square" - the marker shape is square.
* "triangle" - the marker shape is triangle.
* "cross" - the marker shape is cross.
        @member {string}
        */
        type?: string;
        /**
        The icon visibility.
        @member {boolean}
        */
        visible?: boolean;
    }

    interface ChartYAxisItemNotesDataItemLabelBorder {
        /**
        The color of the border. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the border.The following dash types are supported:
        @member {string}
        */
        dashType?: string;
        /**
        The width of the border in pixels. By default the border width is set to zero which means that the border will not appear.
        @member {number}
        */
        width?: number;
    }

    interface ChartYAxisItemNotesDataItemLabel {
        /**
        The background color of the label. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        background?: string;
        /**
        The border of the label.
        @member {ChartYAxisItemNotesDataItemLabelBorder}
        */
        border?: ChartYAxisItemNotesDataItemLabelBorder;
        /**
        The text color of the note label. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The font style of the note label.
        @member {string}
        */
        font?: string;
        /**
        The template which renders the labels.The fields which can be used in the template are:
        @member {any}
        */
        template?: any;
        /**
        If set to true the chart will display the y axis notes label. By default the y axis notes label are visible.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The rotation angle of the label. By default the label are not rotated.
        @member {number}
        */
        rotation?: number;
        /**
        The format used to display the note label. Uses kendo.format. Contains one placeholder ("{0}") which represents the axis value.
        @member {string}
        */
        format?: string;
        /**
        The label note text.
        @member {string}
        */
        text?: string;
        /**
        The position of the y axis note label.
        @member {string}
        */
        position?: string;
    }

    interface ChartYAxisItemNotesDataItemLine {
        /**
        The line width of the note.
        @member {number}
        */
        width?: number;
        /**
        The line color of the note.
        @member {string}
        */
        color?: string;
        /**
        The length of the connecting lines in pixels.
        @member {number}
        */
        length?: number;
    }

    interface ChartYAxisItemNotesDataItem {
        /**
        The value of the note.
        @member {any}
        */
        value?: any;
        /**
        The position of the y axis notes.
        @member {string}
        */
        position?: string;
        /**
        The icon of the note.
        @member {ChartYAxisItemNotesDataItemIcon}
        */
        icon?: ChartYAxisItemNotesDataItemIcon;
        /**
        The label of the note.
        @member {ChartYAxisItemNotesDataItemLabel}
        */
        label?: ChartYAxisItemNotesDataItemLabel;
        /**
        The line of the note.
        @member {ChartYAxisItemNotesDataItemLine}
        */
        line?: ChartYAxisItemNotesDataItemLine;
    }

    interface ChartYAxisItemNotesIconBorder {
        /**
        The border color of the icon.
        @member {string}
        */
        color?: string;
        /**
        The border width of the icon.
        @member {number}
        */
        width?: number;
    }

    interface ChartYAxisItemNotesIcon {
        /**
        The background color of the notes icon.
        @member {string}
        */
        background?: string;
        /**
        The border of the icon.
        @member {ChartYAxisItemNotesIconBorder}
        */
        border?: ChartYAxisItemNotesIconBorder;
        /**
        The size of the icon.
        @member {number}
        */
        size?: number;
        /**
        The icon shape.The supported values are:
* "circle" - the marker shape is circle.
* "square" - the marker shape is square.
* "triangle" - the marker shape is triangle.
* "cross" - the marker shape is cross.
        @member {string}
        */
        type?: string;
        /**
        The icon visibility.
        @member {boolean}
        */
        visible?: boolean;
    }

    interface ChartYAxisItemNotesLabelBorder {
        /**
        The color of the border. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the border.The following dash types are supported:
        @member {string}
        */
        dashType?: string;
        /**
        The width of the border in pixels. By default the border width is set to zero which means that the border will not appear.
        @member {number}
        */
        width?: number;
    }

    interface ChartYAxisItemNotesLabel {
        /**
        The background color of the label. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        background?: string;
        /**
        The border of the label.
        @member {ChartYAxisItemNotesLabelBorder}
        */
        border?: ChartYAxisItemNotesLabelBorder;
        /**
        The text color of the label. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The font style of the label.
        @member {string}
        */
        font?: string;
        /**
        The template which renders the labels.The fields which can be used in the template are:
        @member {any}
        */
        template?: any;
        /**
        If set to true the chart will display the y axis notes label. By default the y axis notes label are visible.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The rotation angle of the label. By default the label are not rotated.
        @member {number}
        */
        rotation?: number;
        /**
        The format used to display the notes label. Uses kendo.format. Contains one placeholder ("{0}") which represents the axis value.
        @member {string}
        */
        format?: string;
        /**
        The position of the labels.
        @member {string}
        */
        position?: string;
    }

    interface ChartYAxisItemNotesLine {
        /**
        The line width of the notes.
        @member {number}
        */
        width?: number;
        /**
        The line color of the notes.
        @member {string}
        */
        color?: string;
        /**
        The length of the connecting lines in pixels.
        @member {number}
        */
        length?: number;
    }

    interface ChartYAxisItemNotes {
        /**
        The position of the y axis notes.
        @member {string}
        */
        position?: string;
        /**
        The icon of the notes.
        @member {ChartYAxisItemNotesIcon}
        */
        icon?: ChartYAxisItemNotesIcon;
        /**
        The label of the notes.
        @member {ChartYAxisItemNotesLabel}
        */
        label?: ChartYAxisItemNotesLabel;
        /**
        The line of the notes.
        @member {ChartYAxisItemNotesLine}
        */
        line?: ChartYAxisItemNotesLine;
        data?: ChartYAxisItemNotesDataItem[];
    }

    interface ChartYAxisItemPlotBand {
        /**
        The color of the plot band.
        @member {string}
        */
        color?: string;
        /**
        The start position of the plot band in axis units.
        @member {number}
        */
        from?: number;
        /**
        The opacity of the plot band.
        @member {number}
        */
        opacity?: number;
        /**
        The end position of the plot band in axis units.
        @member {number}
        */
        to?: number;
    }

    interface ChartYAxisItemTitleBorder {
        /**
        The color of the border. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the border.The following dash types are supported:
        @member {string}
        */
        dashType?: string;
        /**
        The width of the border in pixels. By default the border width is set to zero which means that the border will not appear.
        @member {number}
        */
        width?: number;
    }

    interface ChartYAxisItemTitleMargin {
        /**
        The bottom margin of the title.
        @member {number}
        */
        bottom?: number;
        /**
        The left margin of the title.
        @member {number}
        */
        left?: number;
        /**
        The right margin of the title.
        @member {number}
        */
        right?: number;
        /**
        The top margin of the title.
        @member {number}
        */
        top?: number;
    }

    interface ChartYAxisItemTitlePadding {
        /**
        The bottom padding of the title.
        @member {number}
        */
        bottom?: number;
        /**
        The left padding of the title.
        @member {number}
        */
        left?: number;
        /**
        The right padding of the title.
        @member {number}
        */
        right?: number;
        /**
        The top padding of the title.
        @member {number}
        */
        top?: number;
    }

    interface ChartYAxisItemTitle {
        /**
        The background color of the title. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        background?: string;
        /**
        The border of the title.
        @member {ChartYAxisItemTitleBorder}
        */
        border?: ChartYAxisItemTitleBorder;
        /**
        The text color of the title. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The font style of the title.
        @member {string}
        */
        font?: string;
        /**
        The margin of the title. A numeric value will set all margins.
        @member {ChartYAxisItemTitleMargin}
        */
        margin?: ChartYAxisItemTitleMargin;
        /**
        The padding of the title. A numeric value will set all paddings.
        @member {ChartYAxisItemTitlePadding}
        */
        padding?: ChartYAxisItemTitlePadding;
        /**
        The position of the title.The supported values are:
        @member {string}
        */
        position?: string;
        /**
        The rotation angle of the title. By default the title is not rotated.
        @member {number}
        */
        rotation?: number;
        /**
        The text of the title.
        @member {string}
        */
        text?: string;
        /**
        If set to true the chart will display the scatter chart y axis title. By default the scatter chart y axis title is visible.
        @member {boolean}
        */
        visible?: boolean;
    }

    interface ChartYAxisItem {
        /**
        Value at which the Y axis crosses this axis. (Only for object)Value indices at which the Y axes cross the value axis. (Only for array)Date at which the Y axis crosses this axis. (Only for date)
        @member {any}
        */
        axisCrossingValue?: any;
        /**
        The background color of the axis.
        @member {string}
        */
        background?: string;
        /**
        The base time interval for the axis labels. The default baseUnit is determined automatically from the value range. Available options:
        @member {string}
        */
        baseUnit?: string;
        /**
        The color of the axis. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The crosshair configuration options.
        @member {ChartYAxisItemCrosshair}
        */
        crosshair?: ChartYAxisItemCrosshair;
        /**
        The axis labels configuration.
        @member {ChartYAxisItemLabels}
        */
        labels?: ChartYAxisItemLabels;
        /**
        The configuration of the axis lines. Also affects the major and minor ticks, but not the grid lines.
        @member {ChartYAxisItemLine}
        */
        line?: ChartYAxisItemLine;
        /**
        The configuration of the major grid lines. These are the lines that are an extension of the major ticks through the
body of the chart.
        @member {ChartYAxisItemMajorGridLines}
        */
        majorGridLines?: ChartYAxisItemMajorGridLines;
        /**
        The configuration of the minor grid lines. These are the lines that are an extension of the minor ticks through the
body of the chart.
        @member {ChartYAxisItemMinorGridLines}
        */
        minorGridLines?: ChartYAxisItemMinorGridLines;
        /**
        The configuration of the y axis minor ticks.
        @member {ChartYAxisItemMinorTicks}
        */
        minorTicks?: ChartYAxisItemMinorTicks;
        /**
        The configuration of the scatter chart y axis major ticks.
        @member {ChartYAxisItemMajorTicks}
        */
        majorTicks?: ChartYAxisItemMajorTicks;
        /**
        The interval between major divisions.
If this is a date axis the value represents the number of xAxis.baseUnits between major divisions.
If the yAxis.type is set to "log", the majorUnit value will be used for the base of the logarithm.
        @member {number}
        */
        majorUnit?: number;
        /**
        The maximum value of the axis.
        @member {any}
        */
        max?: any;
        /**
        The minimum value of the axis.
        @member {any}
        */
        min?: any;
        /**
        The interval between minor divisions. It defaults to 1/5th of the yAxis.majorUnit.
If the yAxis.type is set to "log", the minorUnit value represents the number of divisions between two major units and defaults to the major unit minus one.
        @member {number}
        */
        minorUnit?: number;
        /**
        The unique axis name. Used to associate a series with a y axis using the series.yAxis option.
        @member {any}
        */
        name?: any;
        /**
        If set to true the chart will prevent the automatic axis range from snapping to 0.
        @member {boolean}
        */
        narrowRange?: boolean;
        /**
        The name of the pane that the axis should be rendered in.
The axis will be rendered in the first (default) pane if not set.
        @member {string}
        */
        pane?: string;
        plotBands?: ChartYAxisItemPlotBand[];
        /**
        If set to true the value axis direction will be reversed. By default values increase from left to right and from bottom to top.
        @member {boolean}
        */
        reverse?: boolean;
        /**
        The title configuration of the scatter chart y axis.
        @member {ChartYAxisItemTitle}
        */
        title?: ChartYAxisItemTitle;
        /**
        The axis type.The supported values are:
        @member {string}
        */
        type?: string;
        /**
        If set to true the chart will display the y axis. By default the y axis is visible.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The y axis notes configuration.
        @member {ChartYAxisItemNotes}
        */
        notes?: ChartYAxisItemNotes;
    }

    interface ChartSeriesClickEventSeries {
        /**
        The series type
        @member {any}
        */
        type?: any;
        /**
        The series name
        @member {any}
        */
        name?: any;
        /**
        The series data points
        @member {any}
        */
        data?: any;
    }

    interface ChartSeriesHoverEventSeries {
        /**
        The series type
        @member {any}
        */
        type?: any;
        /**
        The series name
        @member {any}
        */
        name?: any;
        /**
        The series data points
        @member {any}
        */
        data?: any;
    }

    interface ChartOptions {
        name?: string;
        /**
        If set to false the widget will not bind to the data source during initialization. In this case data binding will occur when the change event of the
data source is fired. By default the widget will bind to the data source specified in the configuration.
        @member {boolean}
        */
        autoBind?: boolean;
        /**
        The default options for all chart axes. Accepts the options supported by categoryAxis, valueAxis, xAxis and yAxis.
        @member {any}
        */
        axisDefaults?: any;
        categoryAxis?: ChartCategoryAxisItem[];
        /**
        The chart area configuration options. Represents the entire visible area of the chart.
        @member {ChartChartArea}
        */
        chartArea?: ChartChartArea;
        /**
        The data source of the chart which is used to display the series. Can be a JavaScript object which represents a valid data source configuration, a JavaScript array or an existing kendo.data.DataSource
instance.If the dataSource option is set to a JavaScript object or array the widget will initialize a new kendo.data.DataSource instance using that value as data source configuration.If the dataSource option is an existing kendo.data.DataSource instance the widget will use that instance and will not initialize a new one.
        @member {any}
        */
        dataSource?: any;
        /**
        The chart legend configuration options.
        @member {ChartLegend}
        */
        legend?: ChartLegend;
        panes?: ChartPane[];
        /**
        The plot area configuration options. The plot area is the area which displays the series.
        @member {ChartPlotArea}
        */
        plotArea?: ChartPlotArea;
        /**
        Sets the preferred rendering engine.
If it is not supported by the browser, the Chart will switch to the first available mode.The supported values are:
        @member {string}
        */
        renderAs?: string;
        series?: ChartSeriesItem[];
        /**
        The default colors for the chart's series. When all colors are used, new colors are pulled from the start again.
        @member {any}
        */
        seriesColors?: any;
        /**
        The default options for all series.
        @member {ChartSeriesDefaults}
        */
        seriesDefaults?: ChartSeriesDefaults;
        /**
        The chart theme.The supported values are:
        @member {string}
        */
        theme?: string;
        /**
        The chart title configuration options or text.
        @member {ChartTitle}
        */
        title?: ChartTitle;
        /**
        The chart series tooltip configuration options.
        @member {ChartTooltip}
        */
        tooltip?: ChartTooltip;
        /**
        If set to true the chart will play animations when displaying the series. By default animations are enabled.
        @member {boolean}
        */
        transitions?: boolean;
        valueAxis?: ChartValueAxisItem[];
        xAxis?: ChartXAxisItem[];
        yAxis?: ChartYAxisItem[];
        /**
        Fired when the user clicks an axis label.The event handler function context (available via the this keyword) will be set to the widget instance.
        */
        axisLabelClick?(e: ChartAxisLabelClickEvent): void;
        /**
        Fires when an legend item is clicked.
        */
        legendItemClick?(e: ChartLegendItemClickEvent): void;
        /**
        Fires when an legend item is hovered.
        */
        legendItemHover?(e: ChartLegendItemHoverEvent): void;
        /**
        Fired when the widget is bound to data from its data source.The event handler function context (available via the this keyword) will be set to the widget instance.
        */
        dataBound?(e: ChartDataBoundEvent): void;
        /**
        Fired as long as the user is dragging the chart using the mouse or swipe gestures.The event handler function context (available via the this keyword) will be set to the widget instance.
        */
        drag?(e: ChartDragEvent): void;
        /**
        Fired when the user stops dragging the chart.The event handler function context (available via the this keyword) will be set to the widget instance.
        */
        dragEnd?(e: ChartDragEndEvent): void;
        /**
        Fired when the user starts dragging the chart.The event handler function context (available via the this keyword) will be set to the widget instance.
        */
        dragStart?(e: ChartDragStartEvent): void;
        /**
        Fired when the user clicks one of the notes.The event handler function context (available via the this keyword) will be set to the widget instance.
        */
        noteClick?(e: ChartNoteClickEvent): void;
        /**
        Fired when the user hovers one of the notes.The event handler function context (available via the this keyword) will be set to the widget instance.
        */
        noteHover?(e: ChartNoteHoverEvent): void;
        /**
        Fired when the user clicks the plot area.The event handler function context (available via the this keyword) will be set to the widget instance.
        */
        plotAreaClick?(e: ChartPlotAreaClickEvent): void;
        /**
        Fired when the user modifies the selection.The range units are:The event handler function context (available via the this keyword) will be set to the widget instance.
        */
        select?(e: ChartSelectEvent): void;
        /**
        Fired when the user completes modifying the selection.The range units are:The event handler function context (available via the this keyword) will be set to the widget instance.
        */
        selectEnd?(e: ChartSelectEndEvent): void;
        /**
        Fired when the user starts modifying the axis selection.The range units are:The event handler function context (available via the this keyword) will be set to the widget instance.
        */
        selectStart?(e: ChartSelectStartEvent): void;
        /**
        Fired when the user clicks the chart series.The event handler function context (available via the this keyword) will be set to the widget instance.
        */
        seriesClick?(e: ChartSeriesClickEvent): void;
        /**
        Fired when the user hovers the chart series.The event handler function context (available via the this keyword) will be set to the widget instance.
        */
        seriesHover?(e: ChartSeriesHoverEvent): void;
        /**
        Fired as long as the user is zooming the chart using the mousewheel.The event handler function context (available via the this keyword) will be set to the widget instance.
        */
        zoom?(e: ChartZoomEvent): void;
        /**
        Fired when the user stops zooming the chart.The event handler function context (available via the this keyword) will be set to the widget instance.
        */
        zoomEnd?(e: ChartZoomEndEvent): void;
        /**
        Fired when the user uses the mousewheel to zoom the chart.The event handler function context (available via the this keyword) will be set to the widget instance.
        */
        zoomStart?(e: ChartZoomStartEvent): void;
    }

    interface ChartEvent {
        sender: Chart;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }

    interface ChartAxisLabelClickEvent extends ChartEvent {
        /**
        The axis that the label belongs to.
        @member {any}
        */
        axis?: any;
        /**
        The original data item used to generate the label. Available only for data bound category axis.
        @member {any}
        */
        dataItem?: any;
        /**
        The DOM element of the label.
        @member {any}
        */
        element?: any;
        /**
        The label sequential index or category index.
        @member {any}
        */
        index?: any;
        /**
        The label text.
        @member {string}
        */
        text?: string;
        /**
        The label value or category name.
        @member {any}
        */
        value?: any;
    }

    interface ChartLegendItemClickEvent extends ChartEvent {
        /**
        The name of the series.
        @member {string}
        */
        text?: string;
        /**
        The series options.
        @member {any}
        */
        series?: any;
        /**
        The series index.
        @member {number}
        */
        seriesIndex?: number;
        /**
        The point index.
        @member {number}
        */
        pointIndex?: number;
        /**
        The DOM element of the plot area.
        @member {any}
        */
        element?: any;
    }

    interface ChartLegendItemHoverEvent extends ChartEvent {
        /**
        The name of the series.
        @member {string}
        */
        text?: string;
        /**
        The series options.
        @member {any}
        */
        series?: any;
        /**
        The series index.
        @member {number}
        */
        seriesIndex?: number;
        /**
        The point index.
        @member {number}
        */
        pointIndex?: number;
        /**
        The DOM element of the plot area.
        @member {any}
        */
        element?: any;
    }

    interface ChartDataBoundEvent extends ChartEvent {
    }

    interface ChartDragEvent extends ChartEvent {
        /**
        A hastable containing the initial range (min and max values) of named axes. The axis name is used as a key.
        @member {any}
        */
        axisRanges?: any;
        /**
        The original user event that triggered the drag action.
        @member {any}
        */
        originalEvent?: any;
    }

    interface ChartDragEndEvent extends ChartEvent {
        /**
        A hastable containing the initial range (min and max values) of named axes. The axis name is used as a key.
        @member {any}
        */
        axisRanges?: any;
        /**
        The original user event that triggered the dragEnd action.
        @member {any}
        */
        originalEvent?: any;
    }

    interface ChartDragStartEvent extends ChartEvent {
        /**
        A hastable containing the initial range (min and max values) of named axes. The axis name is used as a key.
        @member {any}
        */
        axisRanges?: any;
        /**
        The original user event that triggered the drag action.
        @member {any}
        */
        originalEvent?: any;
    }

    interface ChartNoteClickEvent extends ChartEvent {
        /**
        The data point category. Available only for categorical charts (bar, line, area and similar).
        @member {any}
        */
        category?: any;
        /**
        The DOM element of the plot area.
        @member {any}
        */
        element?: any;
        /**
        The data point value.
        @member {any}
        */
        value?: any;
        /**
        The series of the note.
        @member {any}
        */
        series?: any;
        /**
        The data item of the point's note.
        @member {any}
        */
        dataItem?: any;
    }

    interface ChartNoteHoverEvent extends ChartEvent {
        /**
        The data point category. Available only for categorical charts (bar, line, area and similar).
        @member {any}
        */
        category?: any;
        /**
        The DOM element of the plot area.
        @member {any}
        */
        element?: any;
        /**
        The data point value.
        @member {any}
        */
        value?: any;
        /**
        The series of the note.
        @member {any}
        */
        series?: any;
        /**
        The data item of the point's note.
        @member {any}
        */
        dataItem?: any;
    }

    interface ChartPlotAreaClickEvent extends ChartEvent {
        /**
        The data point category. Available only for categorical charts (bar, line, area and similar).
        @member {any}
        */
        category?: any;
        /**
        The DOM element of the plot area.
        @member {any}
        */
        element?: any;
        /**
        The data point value. Available only for categorical charts (bar, line, area and similar).
        @member {any}
        */
        value?: any;
        /**
        The X axis value or array of values for multi-axis charts.
        @member {any}
        */
        x?: any;
        /**
        The X axis value or array of values for multi-axis charts.
        @member {any}
        */
        y?: any;
    }

    interface ChartSelectEvent extends ChartEvent {
        /**
        The target axis configuration.
        @member {any}
        */
        axis?: any;
        /**
        The lower boundary of the selected range.
        @member {any}
        */
        from?: any;
        /**
        The upper boundary of the selected range.The last selected category is at index [to - 1] unless the axis is justified. In this case it is at index [to].
        @member {any}
        */
        to?: any;
    }

    interface ChartSelectEndEvent extends ChartEvent {
        /**
        The target axis configuration.
        @member {any}
        */
        axis?: any;
        /**
        The lower boundary of the selected range.
        @member {any}
        */
        from?: any;
        /**
        The upper boundary of the selected range.The last selected category is at index [to - 1] unless the axis is justified. In this case it is at index [to].
        @member {any}
        */
        to?: any;
    }

    interface ChartSelectStartEvent extends ChartEvent {
        /**
        The target axis configuration.
        @member {any}
        */
        axis?: any;
        /**
        The lower boundary of the selected range.
        @member {any}
        */
        from?: any;
        /**
        The upper boundary of the selected range.The last selected category is at index [to - 1] unless the axis is justified. In this case it is at index [to].
        @member {any}
        */
        to?: any;
    }

    interface ChartSeriesClickEvent extends ChartEvent {
        /**
        The data point category
        @member {any}
        */
        category?: any;
        /**
        The DOM element of the data point.
        @member {any}
        */
        element?: any;
        /**
        The clicked series.
        @member {ChartSeriesClickEventSeries}
        */
        series?: ChartSeriesClickEventSeries;
        /**
        The original data item (when binding to dataSource).
        @member {any}
        */
        dataItem?: any;
        /**
        The data point value.
        @member {any}
        */
        value?: any;
        /**
        The point value represented as a percentage value. Available only for donut, pie and 100% stacked charts.
        @member {any}
        */
        percentage?: any;
    }

    interface ChartSeriesHoverEvent extends ChartEvent {
        /**
        The data point category
        @member {any}
        */
        category?: any;
        /**
        The DOM element of the data point.
        @member {any}
        */
        element?: any;
        /**
        The clicked series.
        @member {ChartSeriesHoverEventSeries}
        */
        series?: ChartSeriesHoverEventSeries;
        /**
        The original data item (when binding to dataSource).
        @member {any}
        */
        dataItem?: any;
        /**
        The data point value.
        @member {any}
        */
        value?: any;
        /**
        The point value represented as a percentage value. Available only for donut, pie and 100% stacked charts.
        @member {any}
        */
        percentage?: any;
    }

    interface ChartZoomEvent extends ChartEvent {
        /**
        A hastable containing the initial range (min and max values) of named axes. The axis name is used as a key.
        @member {any}
        */
        axisRanges?: any;
        /**
        A number that indicates the zoom amount and direction. A negative value indicates "zoom in", while a positive "zoom out".
##### e.originalEvent ObjectThe original user event that triggered the drag action.
        @member {number}
        */
        delta?: number;
    }

    interface ChartZoomEndEvent extends ChartEvent {
        /**
        A hastable containing the initial range (min and max values) of named axes. The axis name is used as a key.
        @member {any}
        */
        axisRanges?: any;
        /**
        The original user event that triggered the zoomEnd action.
        @member {any}
        */
        originalEvent?: any;
    }

    interface ChartZoomStartEvent extends ChartEvent {
        /**
        A hastable containing the initial range (min and max values) of named axes. The axis name is used as a key.
        @member {any}
        */
        axisRanges?: any;
        /**
        The original user event that triggered the drag action.
        @member {any}
        */
        originalEvent?: any;
    }


    class Diagram extends kendo.ui.Widget {
        static fn: Diagram;
        static extend(proto: Object): Diagram;

        element: JQuery;
        wrapper: JQuery;
        constructor(element: Element, options?: DiagramOptions);
        options: DiagramOptions;
        dataSource: kendo.data.DataSource;
        /**
        Prepares the widget for safe removal from the DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        @method
        */
        destroy(): void;
        /**
        Zooms in or out of the diagram.
        @method
        @param zoom - The zoom factor.
        @param staticPoint - The point to zoom into or out of.
        */
        zoom(zoom: number, staticPoint: any): void;
        /**
        Sets the data source of the diagram.
        @method
        @param dataSource - The data source to which the widget should be bound.
        */
        setDataSource(dataSource: kendo.data.DataSource): void;
        /**
        Saves the diagram.
        @method
        */
        save(): void;
        /**
        Loads a saved diagram.
        @method
        @param json - The serialized diagram in JSON format.
        */
        load(json: string): void;
        /**
        Pans the diagram with a specified delta (represented as a Point).
        @method
        @param pan - The translation delta to apply to the diagram.
        */
        pan(pan: any): void;
        /**
        The bounds of the diagramming canvas.
        @method
        */
        viewport(): void;
        /**
        Transforms a point from View coordinates to Page document coordinates. View origin is the diagram container.
        @method
        @param point - The point in Page document coordinates.
        @returns the transformed point
        */
        viewToDocument(point: any): any;
        /**
        Transforms a point from Page document coordinates to View coordinates. View origin is the diagram container.
        @method
        @param point - The point in View coordinates.
        @returns the transformed point
        */
        documentToView(point: any): any;
        /**
        Transforms a point from View coordinates to Model coordinates. Model coordinates are independent coordinates to define Shape bounds.
        @method
        @param point - The point in View coordinates.
        @returns the transformed point
        */
        viewToModel(point: any): any;
        /**
        Transforms a point from Model coordinates to View coordinates. Model coordinates are independent coordinates to define Shape bounds.
        @method
        @param point - The point in Model coordinates.
        @returns the transformed point
        */
        modelToView(point: any): any;
        /**
        Transforms a point from Model coordinates to Layer coordinates. Layer coordinates are relative to the drawing surface.
        @method
        @param point - The point in Model coordinates.
        @returns the transformed point
        */
        modelToLayer(point: any): any;
        /**
        Transforms a point from Layer coordinates to Model coordinates. Layer coordinates are relative to the drawable surface.
        @method
        @param point - The point in layer coordinates.
        @returns the transformed point
        */
        layerToModel(point: any): any;
        /**
        Transforms a point from Page document coordinates to Model coordinates. Shortcut for viewToModel(documentToView(point))
        @method
        @param point - The point in Page document coordinates.
        @returns the transformed point
        */
        documentToModel(point: any): any;
        /**
        Transforms a point from Model coordinates to Page document coordinates. Shortcut for viewToDocument(modelToView(point))
        @method
        @param point - The point in Model coordinates.
        @returns the transformed point
        */
        modelToDocument(point: any): any;
        /**
        Transforms a point from the main canvas coordinates to the non-transformed origin.
        @method
        @param p - An arbitrary point to transform to the diagram coordinate system.
        */
        transformPoint(p: any): void;
        /**
        Transforms a given rectangle to the diagram coordinate system.
        @method
        @param r - The rectangle to be transformed.
        */
        transformRect(r: any): void;
        /**
        Sets the focus on the diagram.
        @method
        */
        focus(): void;
        /**
        Clears the content of the diagram.
        @method
        */
        clear(): void;
        /**
        Creates a connection which can be either attached on both ends to a shape, half attached or floating (not attached to any shape). When a connection is (half) attached to a shape it happens through the intermediate Connector object. Connectors are part of a Shape's definition and you can specify the binding of a connection to a shape directly via the shape or via one of its connectors. If you specify a Shape as a connection's endpoint the Auto-connector will be used. This means that the endpoint of the connection will switch to the most convenient (in the sense of shortest path) connector automatically. If you specify a shape's connector as an endpoint for a connection the endpoint will remain attached to that given Connector instance.
Finally, if you wish to have a (half) floating connection endpoint you should specify a Point as parameter for the floating end.
        @method
        @param source - The source definition of the connection. This can be a Shape, a Connector or a Point.
        @param target - The target definition of the connection. This can be a Shape, a Connector or a Point.
        @param options - The options of the new connection. See connections options.
        */
        connect(source: any, target: any, options: any): void;
        /**
        Returns whether the two given shapes are connected through a connection.
        @method
        @param source - A Shape in the diagram.
        @param target - A Shape in the diagram.
        */
        connected(source: any, target: any): void;
        /**
        Adds the given Connection to the diagram.
        @method
        @param connection - The Connection instance to be added to the diagram.
        @param undoable - Whether the addition should be recorded in the undo-redo stack.
        */
        addConnection(connection: any, undoable: boolean): void;
        /**
        Adds a new shape to the diagram.
        @method
        @param obj - A Shape instance or a Point where the default shape type will be added.
        @param undoable - Whether the addition should be recorded in the undo-redo stack.
        */
        addShape(obj: any, undoable: boolean): void;
        /**
        Undoes the previous action.
        @method
        */
        undo(): void;
        /**
        Executes again the previously undone action.
        @method
        */
        redo(): void;
        /**
        Removes one or more items from the diagram
        @method
        @param items - A diagram item or an array of diagram items to remove.
        @param undoable - Whether the removal should be recorded in the undo-redo stack.
        */
        remove(items: any, undoable: boolean): void;
        /**
        Gets the currently selected items is no parameter is specified. If a parameter is specified this selects items in the diagram on the basis of the given input.
        @method
        @param obj - 
        @param options - Only one Boolean option is currently defined; addToSelection. If set to true the newly selected items will be added to the existing selection. Otherwise a new selection set is created. The default is false.
        */
        select(obj: any, options: any): void;
        /**
        Brings the specified items in front, i.e. it's reordering items to ensure they are on top of the complementary items.
        @method
        @param items - An array of diagram items.
        @param undoable - Whether the change should be recorded in the undo-redo stack.
        */
        toFront(items: any, undoable: boolean): void;
        /**
        Sends the specified items to the back, i.e. it's reordering items to ensure they are underneath the complementary items.
        @method
        @param items - An array of diagram items.
        @param undoable - Whether the change should be recorded in the undo-redo stack.
        */
        toBack(items: any, undoable: boolean): void;
        /**
        Brings one or more items into the view in function of various criteria.
        @method
        @param obj - 
        @param options - 
        */
        bringIntoView(obj: any, options: any): void;
        /**
        
        @method
        @param items - The items (shapes and connections) to include in the bounding box.
Defaults to all items if not specified.
        @returns The bounding rectangle of the specified items. If nothing is specified the bounding box of the all diagram will be returned.
        */
        boundingBox(items: any): kendo.dataviz.diagram.Rect;
        /**
        Puts a copy of the currently selected diagram to an internal clipboard.
        @method
        */
        copy(): void;
        /**
        Cuts the currently selected diagram items to an internal clipboard.
        @method
        */
        cut(): void;
        /**
        Pastes the content of the internal diagram clipboard.
        @method
        */
        paste(): void;
        /**
        Applies a layout algorithm on the current diagram.A more detailed overview of layout and graph analysis can be found below.
        @method
        @param options - The layout options. See options.layout for a full reference.
        */
        layout(options: any): void;
        /**
        Aligns the edges (as defined by the bounding box) of the selected shapes.
        @method
        @param direction - This can be one of the four supported directions:
        */
        alignShapes(direction: string): void;
        /**
        Returns the shape or connection with the specified identifier.
        @method
        @param id - The unique identifier of the Shape or Connection
        @returns the item that has the provided ID.
        */
        getShapeById(id: string): any;
    }

    interface DiagramConnectionDefaultsHoverStroke {
        /**
        Defines the highlight color when the pointer is hovering over the connection.
        @member {string}
        */
        color?: string;
    }

    interface DiagramConnectionDefaultsHover {
        /**
        Defines the hover stroke configuration.
        @member {DiagramConnectionDefaultsHoverStroke}
        */
        stroke?: DiagramConnectionDefaultsHoverStroke;
    }

    interface DiagramConnectionDefaultsStroke {
        /**
        Defines the stroke or line color of the connection.
        @member {string}
        */
        color?: string;
        /**
        Defines the stroke width of the connection.
        @member {number}
        */
        width?: number;
    }

    interface DiagramConnectionDefaults {
        /**
        Defines the stroke configuration.
        @member {DiagramConnectionDefaultsStroke}
        */
        stroke?: DiagramConnectionDefaultsStroke;
        /**
        Defines the hover configuration.
        @member {DiagramConnectionDefaultsHover}
        */
        hover?: DiagramConnectionDefaultsHover;
        /**
        The start cap (arrow, head or decoration) of the connection:
        @member {string}
        */
        startCap?: string;
        /**
        The start cap (arrow, head or decoration) of the connection:Note that you can also use the "ArrowStart" for the endCap but its direction will be inversed.
        @member {string}
        */
        endCap?: string;
    }

    interface DiagramConnectionHoverStroke {
        /**
        Defines the highlight color when the pointer is hovering over the connection.
        @member {string}
        */
        color?: string;
    }

    interface DiagramConnectionHover {
        /**
        Defines the hover stroke configuration.
        @member {DiagramConnectionHoverStroke}
        */
        stroke?: DiagramConnectionHoverStroke;
    }

    interface DiagramConnectionPoint {
        /**
        Sets the X coordinate of the point.
        @member {number}
        */
        x?: number;
        /**
        Sets the Y coordinate of the point.
        @member {number}
        */
        y?: number;
    }

    interface DiagramConnectionStroke {
        /**
        Defines the stroke or line color of the connection.
        @member {string}
        */
        color?: string;
        /**
        Defines the stroke width of the connection.
        @member {number}
        */
        width?: number;
    }

    interface DiagramConnection {
        /**
        Defines the stroke configuration.
        @member {DiagramConnectionStroke}
        */
        stroke?: DiagramConnectionStroke;
        /**
        Defines the hover configuration.
        @member {DiagramConnectionHover}
        */
        hover?: DiagramConnectionHover;
        /**
        The start cap (arrow, head or decoration) of the connection:
        @member {string}
        */
        startCap?: string;
        /**
        The start cap (arrow, head or decoration) of the connection:Note that you can also use the "ArrowStart" for the endCap but its direction will be inversed.
        @member {string}
        */
        endCap?: string;
        points?: DiagramConnectionPoint[];
    }

    interface DiagramLayoutGrid {
        /**
        Defines the width of the grid. The bigger this parameter the more components will be organized in an horizontal row. How many components really depends on your diagram and they type of layout applied to each component. The default is set to 800.
        @member {number}
        */
        width?: number;
        /**
        Defines the left offset of the grid layout. The default is 50.
        @member {number}
        */
        offsetX?: number;
        /**
        Defines the top offset of the grid layout. The default is 50.
        @member {number}
        */
        offsetY?: number;
        /**
        Defines the horizontal spacing between each component. The default is 50.
        @member {number}
        */
        componentSpacingX?: number;
        /**
        Defines the vertical spacing between each component. The default is 50.
        @member {number}
        */
        componentSpacingY?: number;
    }

    interface DiagramLayout {
        /**
        The type of the layout algorythm to use. Predefined values are:There are several criteria on which this algorithm is based and which are respected in as far as the incidence structure allows it:
* links have a preferred direction (the complementary direction of the subtype) and attempt to flow as much as possible in this way
* linked nodes try to stay closed to one another (clustering of nodes)
* links crossings should be minimized
* links should be as short as possible (cross a few layers as possible)The construction of a layered graph drawing proceeds in a series of steps (assuming an horizontal layer from here on):
 + If the input graph is not already a directed acyclic graph, a set of edges is identified the reversal of which will make it acyclic.
 + The nodes of the directed acyclic graph resulting from the first step are assigned to layers, such that each link goes from a higher layer to a lower layer.
 + Edges that span multiple layers are replaced by paths of dummy vertices so that, after this step, each edge in the expanded graph connects two vertices on adjacent layers of the drawing.
 + The nodes within each layer are permuted in an attempt to reduce the number of crossings among the edges connecting it to the previous layer.
 + Each node is assigned a coordinate within its layer, consistent with the permutation calculated in the previous step.
 + The edges reversed in the first step of the algorithm are returned to their original orientations, the dummy vertices are removed from the graph and the vertices and edges are drawn.
        @member {string}
        */
        type?: string;
        /**
        The subtype further defines the layout type by specifying in greater detail the behaviour expected by the layout algorithm. Possible predefined values are:
        @member {string}
        */
        subtype?: string;
        /**
        Either the distance between the siblings if the tree is up/down or between levels if the tree is left/right. In tipOver tree layout this setting is used only for the direct children of the root
        @member {number}
        */
        horizontalSeparation?: number;
        /**
        Either the distance between levels if the tree is up/down or between siblings if the tree is left/right. This property is not used in tipOver tree layout but rather replaced with three additional ones - underneathVerticalTopOffset, underneathVerticalSeparation and underneathHorizontalOffset
        @member {number}
        */
        verticalSeparation?: number;
        /**
        Controls the distance between the root and the immediate children of the root. This setting is specific to the radial tree layout.
        @member {number}
        */
        radialFirstLevelSeparation?: number;
        /**
        Defines the radial separation between the levels (except the first one which is defined by the aforementioned radialFirstLevelSeparation). This setting is specific to the radial tree layout.
        @member {number}
        */
        radialSeparation?: number;
        /**
        Defines where the circle/arc starts. The positive direction is clockwise and the angle is in degrees. This setting is specific to the radial tree layout.
        @member {number}
        */
        startRadialAngle?: number;
        /**
        Defines where the circle/arc ends. The positive direction is clockwise and the angle is in degrees. This setting is specific to the radial tree layout.
        @member {number}
        */
        endRadialAngle?: number;
        /**
        Defines the vertical separation between a parent and its first child. This offsets the whole set of children with respect to its parent. This setting is specific to the tipOver tree layout.
        @member {number}
        */
        underneathVerticalTopOffset?: number;
        /**
        Defines the vertical separation between siblings and sub-branches. This setting is specific to the tipOver tree layout.
        @member {number}
        */
        underneathVerticalSeparation?: number;
        /**
        Defines the horizontal offset from a child with respect to its parent. This setting is specific to the tipOver tree layout.
        @member {number}
        */
        underneathHorizontalOffset?: number;
        /**
        The number of times that all the forces in the diagram are being calculated and balanced. The default is set at 300, which should be enough for diagrams up to a hundred nodes. By increasing this parameter you increase the correctness of the simulation but it does not always lead to a more stable topology. In some situations a diagram simply does not have a stable minimum energy state and oscillates (globally or locally) between the minima. In such a situation increasing the iterations will not result in a better topology.In situations where there is enough symmetry in the diagram the increased number of iterations does lead to a better layout. In the example below the 100 iterations was not enough to bring the grid to a stable state while 300 iterations did bring all the nodes in such a position that the (virtual) energy of the diagram is a minimum.This setting is specific to the force-directed layout
        @member {number}
        */
        iterations?: number;
        /**
        In the force-directed layout this setting defines the optimal length between 2 nodes, which directly correlates to the state of the link between them. If a link is longer than there will be a force pulling the nodes together, if the link is shorter the force will push the nodes apart. The optimal length is more and indication in the algorithm than a guarantee that all nodes will be at this distance. The result of the layout is really a combination of the incidence structure of the diagram, the initial topology (positions of the nodes) and the number of iterations.In the layered layout it defines the minimum distance between nodes on the same level. Due to the nature of the algorithm this distance will only be respected if the the whole crossing of links and optimimzation does not induce a shift of the siblings.This setting is specific to the force-directed layout and layered layout
        @member {number}
        */
        nodeDistance?: number;
        /**
        Each layout algorithm has a different set of parameters customizing the layout but they also all have a common collection of parameters which relate to the way 'pieces' of a diagram are organized.
A diagram can have in general disconnected pieces, known as components, which can be organized in a way independent of the way a component on its own is arranged. In the picture above, this is one diagram consisting of four components.When you apply a certain layout an analysis will first split the diagram in components, arrange each component individually and thereafter organize the components in a grid. The common parameters referred above deal with this grid layout, they define the width, margin and padding of the (invisible) grid used to organize the components.
        @member {DiagramLayoutGrid}
        */
        grid?: DiagramLayoutGrid;
        /**
        The height (in a vertical layout) or width (in a horizontal layout) between the layers.
        @member {number}
        */
        layerSeparation?: number;
    }

    interface DiagramShapeDefaultsConnector {
        /**
        
        @member {string}
        */
        name?: string;
        /**
        
        @member {string}
        */
        description?: string;
        /**
        
        @member {any}
        */
        position?: any;
    }

    interface DiagramShapeDefaultsContent {
        /**
        The text displayed in the shape.
        @member {string}
        */
        text?: string;
        /**
        The alignment of the text inside the shape.
        @member {string}
        */
        align?: string;
    }

    interface DiagramShapeDefaultsHover {
        /**
        Hover's background color.
        @member {string}
        */
        background?: string;
    }

    interface DiagramShapeDefaultsRotation {
        /**
        
        @member {number}
        */
        angle?: number;
    }

    interface DiagramShapeDefaultsStroke {
        /**
        Defines the color of the shape's stroke.
        @member {string}
        */
        color?: string;
        /**
        Defines the thickness or width of the shape's stroke.
        @member {number}
        */
        width?: number;
        /**
        The dash type of the shape.The following dash types are supported:
        @member {string}
        */
        dashType?: string;
    }

    interface DiagramShapeDefaults {
        /**
        Specifies if the shape is editable by the user.
        @member {boolean}
        */
        editable?: boolean;
        /**
        Specifies if the user is allowed to rotate the shape.
        @member {boolean}
        */
        rotatable?: boolean;
        /**
        Specifies if the shape is resizable.
        @member {boolean}
        */
        resizable?: boolean;
        /**
        The path option of a Shape is a description of a custom geometry. The format follows the standard SVG format (http://www.w3.org/TR/SVG/paths.html#PathData "SVG Path data.").
        @member {string}
        */
        path?: string;
        /**
        Defines the stroke configuration.
        @member {DiagramShapeDefaultsStroke}
        */
        stroke?: DiagramShapeDefaultsStroke;
        /**
        Specifies the type of the Shape using any of the built-in shape type.
        @member {string}
        */
        type?: string;
        /**
        Defines the x-coordinate of the shape when added to the diagram.
        @member {number}
        */
        x?: number;
        /**
        Defines the y-coordinate of the shape when added to the diagram.
        @member {number}
        */
        y?: number;
        /**
        Defines the minimum width the shape should have, i.e. it cannot be resized to a value smaller than the given one.
        @member {number}
        */
        minWidth?: number;
        /**
        Defines the minimum height the shape should have, i.e. it cannot be resized to a value smaller than the given one.
        @member {number}
        */
        minHeight?: number;
        /**
        Defines the width of the shape when added to the diagram.
        @member {number}
        */
        width?: number;
        /**
        Defines the height of the shape when added to the diagram.
        @member {number}
        */
        height?: number;
        /**
        Defines the fill-color of the shape.
        @member {string}
        */
        background?: string;
        /**
        Defines the hover configuration.
        @member {DiagramShapeDefaultsHover}
        */
        hover?: DiagramShapeDefaultsHover;
        connectors?: DiagramShapeDefaultsConnector[];
        /**
        
        @member {DiagramShapeDefaultsRotation}
        */
        rotation?: DiagramShapeDefaultsRotation;
        /**
        Defines the shapes content settings.
        @member {DiagramShapeDefaultsContent}
        */
        content?: DiagramShapeDefaultsContent;
        /**
        A function returning a visual element to render for a given shape. The following primitives can be used to construct a composite visual:
        @member {Function}
        */
        visual?: Function;
    }

    interface DiagramShapeConnector {
        /**
        The connector name. Predefined names include:
        @member {string}
        */
        name?: string;
        /**
        The connector description.
        @member {string}
        */
        description?: string;
        /**
        The function that positions the connector.
        @member {any}
        */
        position?: any;
    }

    interface DiagramShapeContent {
        /**
        The text displayed in the shape.
        @member {string}
        */
        text?: string;
        /**
        The alignment of the text inside the shape.
        @member {string}
        */
        align?: string;
    }

    interface DiagramShapeHover {
        /**
        Hover's background color.
        @member {string}
        */
        background?: string;
    }

    interface DiagramShapeRotation {
        /**
        The rotation angle.
        @member {number}
        */
        angle?: number;
    }

    interface DiagramShapeStroke {
        /**
        Defines the color of the shape's stroke.
        @member {string}
        */
        color?: string;
        /**
        Defines the thickness or width of the shape's stroke.
        @member {number}
        */
        width?: number;
        /**
        The dash type of the shape.The following dash types are supported:
        @member {string}
        */
        dashType?: string;
    }

    interface DiagramShape {
        /**
        Specifies if the shape is editable by the user.
        @member {boolean}
        */
        editable?: boolean;
        /**
        The unique identifier for a Shape.
        @member {string}
        */
        id?: string;
        /**
        Specifies if the user is allowed to rotate the shape.
        @member {boolean}
        */
        rotatable?: boolean;
        /**
        Specifies if the shape is resizable.
        @member {boolean}
        */
        resizable?: boolean;
        /**
        The path option of a Shape is a description of a custom geometry. The format follows the standard SVG format (http://www.w3.org/TR/SVG/paths.html#PathData "SVG Path data.").
        @member {string}
        */
        path?: string;
        /**
        Defines the stroke configuration.
        @member {DiagramShapeStroke}
        */
        stroke?: DiagramShapeStroke;
        /**
        Specifies the type of the Shape using any of the built-in shape type.
        @member {string}
        */
        type?: string;
        /**
        Defines the x-coordinate of the shape when added to the diagram.
        @member {number}
        */
        x?: number;
        /**
        Defines the y-coordinate of the shape when added to the diagram.
        @member {number}
        */
        y?: number;
        /**
        Defines the minimum width the shape should have, i.e. it cannot be resized to a value smaller than the given one.
        @member {number}
        */
        minWidth?: number;
        /**
        Defines the minimum height the shape should have, i.e. it cannot be resized to a value smaller than the given one.
        @member {number}
        */
        minHeight?: number;
        /**
        Defines the width of the shape when added to the diagram.
        @member {number}
        */
        width?: number;
        /**
        Defines the height of the shape when added to the diagram.
        @member {number}
        */
        height?: number;
        /**
        Defines the fill-color of the shape.
        @member {string}
        */
        background?: string;
        /**
        Defines the hover configuration.
        @member {DiagramShapeHover}
        */
        hover?: DiagramShapeHover;
        connectors?: DiagramShapeConnector[];
        /**
        The function that positions the connector.
        @member {DiagramShapeRotation}
        */
        rotation?: DiagramShapeRotation;
        /**
        Defines the shapes content settings.
        @member {DiagramShapeContent}
        */
        content?: DiagramShapeContent;
        /**
        A function returning a visual element to render for this shape.
See visual.
        @member {Function}
        */
        visual?: Function;
    }

    interface DiagramOptions {
        name?: string;
        /**
        If set to false the widget will not bind to the data source during initialization. In this case data binding will occur when the change event of the
data source is fired. By default the widget will bind to the data source specified in the configuration.
        @member {boolean}
        */
        autoBind?: boolean;
        /**
        The scaling factor or the zoom when using the mouse-wheel to zoom in or out.
If zoomRate is less than 1, zooming will be reversed.
        @member {number}
        */
        zoomRate?: number;
        /**
        See the dataSource field.
        @member {any}
        */
        dataSource?: any;
        /**
        Defines whether items can be dropped on the diagram.
        @member {boolean}
        */
        draggable?: boolean;
        /**
        The layout of a diagram consists in arranging the shapes (sometimes also the connections) in some fashion in order to achieve an aesthetically pleasing experience to the user. It aims at giving a more direct insight in the information contained within the diagram and its relational structure.On a technical level, layout consists of a multitude of algorithms and optimizations:and various ad-hoc calculations which depend on the type of layout. The criteria on which an algorithm is based vary but the common denominator is:Kendo diagram includes three of the most used layout algorithms which should cover most of your layout needs - tree layout, force-directed layout and layered layout. Please, check the type property for more details regarding each type.The generic way to apply a layout is by calling the layout() method on the diagram. The method has a single parameter options. It is an object, which can contain parameters which are specific to the layout as well as parameters customizing the global grid layout. Parameters which apply to other layout algorithms can be included but are overlooked if not applicable to the chose layout type. This means that you can define a set of parameters which cover all possible layout types and simply pass it in the method whatever the layout define in the first parameter.
        @member {DiagramLayout}
        */
        layout?: DiagramLayout;
        /**
        The template which renders the content of the shape when bound to a dataSource. The names you can use in the template correspond to the properties used in the dataSource. See the dataSource topic below for a concrete example.
        @member {any}
        */
        template?: any;
        /**
        This defines whether the shapes can be resized. If set to false the adorner will not show the resizing thumbs, as can be seen below;
        @member {boolean}
        */
        resizable?: boolean;
        /**
        This defines whether the shapes can be rotated. If set to false the adorner will not show the rotating thumb, as can be seen below;
        @member {boolean}
        */
        rotatable?: boolean;
        /**
        Defines the connections configuration.
        @member {DiagramConnectionDefaults}
        */
        connectionDefaults?: DiagramConnectionDefaults;
        connections?: DiagramConnection[];
        /**
        Defines the shape options.
        @member {DiagramShapeDefaults}
        */
        shapeDefaults?: DiagramShapeDefaults;
        shapes?: DiagramShape[];
        /**
        Fired when an item is added or removed to/from the diagram.
        */
        change?(e: DiagramChangeEvent): void;
        /**
        Fired when the location or size of an item are changed.
        */
        itemBoundsChange?(e: DiagramItemBoundsChangeEvent): void;
        /**
        Fired when an item is rotated.
        */
        itemRotate?(e: DiagramItemRotateEvent): void;
        /**
        Fired when the user pans the diagram.
        */
        pan?(e: DiagramPanEvent): void;
        /**
        Fired when the user selects one or more items.
        */
        select?(e: DiagramSelectEvent): void;
        /**
        Fired when the user starts changing the diagram zoom level.
        */
        zoomStart?(e: DiagramZoomStartEvent): void;
        /**
        Fired when the user changes the diagram zoom level.
        */
        zoomEnd?(e: DiagramZoomEndEvent): void;
        /**
        Fired when the user clicks on a shape or a connection.
        */
        click?(e: DiagramClickEvent): void;
    }

    interface DiagramEvent {
        sender: Diagram;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }

    interface DiagramChangeEvent extends DiagramEvent {
        /**
        The removed items (shapes or connections).
        @member {any}
        */
        added?: any;
        /**
        The removed items (shapes or connections).
        @member {any}
        */
        removed?: any;
    }

    interface DiagramItemBoundsChangeEvent extends DiagramEvent {
        /**
        The new item bounds.
        @member {kendo.dataviz.diagram.Rect}
        */
        bounds?: kendo.dataviz.diagram.Rect;
        /**
        The affected item (shape or connection).
        @member {any}
        */
        item?: any;
    }

    interface DiagramItemRotateEvent extends DiagramEvent {
        /**
        The rotated item (shape or connection).
        @member {any}
        */
        item?: any;
    }

    interface DiagramPanEvent extends DiagramEvent {
    }

    interface DiagramSelectEvent extends DiagramEvent {
        /**
        The selected items (shapes and connections).
        @member {any}
        */
        selected?: any;
        /**
        The rest of the items (shapes and connections).
        @member {any}
        */
        deselected?: any;
    }

    interface DiagramZoomStartEvent extends DiagramEvent {
        /**
        The zoom center.
        @member {kendo.dataviz.diagram.Point}
        */
        point?: kendo.dataviz.diagram.Point;
        /**
        The current zoom level.
        @member {number}
        */
        zoom?: number;
    }

    interface DiagramZoomEndEvent extends DiagramEvent {
        /**
        The zoom center.
        @member {kendo.dataviz.diagram.Point}
        */
        point?: kendo.dataviz.diagram.Point;
        /**
        The current zoom level.
        @member {number}
        */
        zoom?: number;
    }

    interface DiagramClickEvent extends DiagramEvent {
        /**
        The clicked shape or connection.
        @member {any}
        */
        item?: any;
        /**
        The clicked location.
        @member {kendo.dataviz.diagram.Point}
        */
        point?: kendo.dataviz.diagram.Point;
    }


    class LinearGauge extends kendo.ui.Widget {
        static fn: LinearGauge;
        static extend(proto: Object): LinearGauge;

        element: JQuery;
        wrapper: JQuery;
        constructor(element: Element, options?: LinearGaugeOptions);
        options: LinearGaugeOptions;
        /**
        Prepares the Gauge for safe removal from the DOM.Detaches event handlers and removes data entries in order to avoid memory leaks.
        @method
        */
        destroy(): void;
        /**
        Redraws the gauge.
        @method
        */
        redraw(): void;
        /**
        Adjusts the widget layout to match the size of the container.
        @method
        @param force - Defines whether the widget should proceed with resizing even if the element dimensions have not changed.
        */
        resize(force: boolean): void;
        /**
        Returns the SVG representation of the gauge.
The returned string is a self-contained SVG document that can be used as is or
converted to other formats using tools like Inkscape and
ImageMagick.
Both programs provide command-line interface suitable for server-side processing.
        @method
        */
        svg(): void;
        /**
        Returns a PNG image of the gauge encoded as a Data URL.
        @method
        @returns A data URL with image/png MIME type. Will be null if the browser does not support the canvas element.
        */
        imageDataURL(): string;
        /**
        Change the value of the gauge.
        @method
        */
        value(): void;
    }

    interface LinearGaugeGaugeAreaBorder {
        /**
        The color of the border. Any valid CSS color string will work here, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the border.
        @member {string}
        */
        dashType?: string;
        /**
        The width of the border.
        @member {number}
        */
        width?: number;
    }

    interface LinearGaugeGaugeArea {
        /**
        The background of the gauge area.
Any valid CSS color string will work here, including hex and rgb.
        @member {any}
        */
        background?: any;
        /**
        The border of the gauge area.
        @member {LinearGaugeGaugeAreaBorder}
        */
        border?: LinearGaugeGaugeAreaBorder;
        /**
        The height of the gauge area.  By default, the vertical gauge is 200px and
the horizontal one is 60px.
        @member {number}
        */
        height?: number;
        /**
        The margin of the gauge area.
        @member {any}
        */
        margin?: any;
        /**
        The width of the gauge area.  By default the vertical gauge is 60px and
horizontal gauge is 200px.
        @member {number}
        */
        width?: number;
    }

    interface LinearGaugePointerBorder {
        /**
        The color of the border.
Any valid CSS color string will work here, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the border.
        @member {string}
        */
        dashType?: string;
        /**
        The width of the border.
        @member {number}
        */
        width?: number;
    }

    interface LinearGaugePointerTrackBorder {
        /**
        The color of the border. Any valid CSS color string will work here, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the border.
        @member {string}
        */
        dashType?: string;
        /**
        The width of the border.
        @member {number}
        */
        width?: number;
    }

    interface LinearGaugePointerTrack {
        /**
        The border of the track.
        @member {LinearGaugePointerTrackBorder}
        */
        border?: LinearGaugePointerTrackBorder;
        /**
        The color of the track.
        @member {string}
        */
        color?: string;
        /**
        The opacity of the track.
        @member {number}
        */
        opacity?: number;
        /**
        The size of the track.
        @member {number}
        */
        size?: number;
        /**
        The visibility of the track.
        @member {boolean}
        */
        visible?: boolean;
    }

    interface LinearGaugePointer {
        /**
        The border of the pointer.
        @member {LinearGaugePointerBorder}
        */
        border?: LinearGaugePointerBorder;
        /**
        The color of the pointer.
        @member {string}
        */
        color?: string;
        /**
        The margin of the pointer.
        @member {any}
        */
        margin?: any;
        /**
        The opacity of the pointer.
Any valid CSS color string will work here, including hex and rgb.
        @member {number}
        */
        opacity?: number;
        /**
        The shape of the pointer.
        @member {string}
        */
        shape?: string;
        /**
        The size of the pointer.
        @member {number}
        */
        size?: number;
        /**
        The element arround/under the pointer.
(available only for 'barIndicator' shape)
        @member {LinearGaugePointerTrack}
        */
        track?: LinearGaugePointerTrack;
        /**
        The value of the gauge.
        @member {number}
        */
        value?: number;
    }

    interface LinearGaugeScaleLabelsBorder {
        /**
        The color of the border. Any valid CSS color string will work here, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the border.
        @member {string}
        */
        dashType?: string;
        /**
        The width of the border.
        @member {number}
        */
        width?: number;
    }

    interface LinearGaugeScaleLabels {
        /**
        The background color of the labels.
Any valid CSS color string will work here, including hex and rgb
        @member {string}
        */
        background?: string;
        /**
        The border of the labels.
        @member {LinearGaugeScaleLabelsBorder}
        */
        border?: LinearGaugeScaleLabelsBorder;
        /**
        The text color of the labels.
Any valid CSS color string will work here, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The font style of the labels.
        @member {string}
        */
        font?: string;
        /**
        The format of the labels.
        @member {string}
        */
        format?: string;
        /**
        The margin of the labels.
        @member {any}
        */
        margin?: any;
        /**
        The padding of the labels.
        @member {any}
        */
        padding?: any;
        /**
        The label template.
Template variables:
        @member {any}
        */
        template?: any;
        /**
        The visibility of the labels.
        @member {boolean}
        */
        visible?: boolean;
    }

    interface LinearGaugeScaleLine {
        /**
        The color of the lines. Any valid CSS color string will work here, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the line.
        @member {string}
        */
        dashType?: string;
        /**
        The visibility of the lines.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The width of the line..
        @member {number}
        */
        width?: number;
    }

    interface LinearGaugeScaleMajorTicks {
        /**
        The color of the major ticks.
Any valid CSS color string will work here, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The major tick size.
This is the length of the line in pixels that is drawn to indicate the tick on the scale.
        @member {number}
        */
        size?: number;
        /**
        The visibility of the major ticks.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The width of the major ticks.
        @member {number}
        */
        width?: number;
    }

    interface LinearGaugeScaleMinorTicks {
        /**
        The color of the minor ticks.
Any valid CSS color string will work here, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The minor tick size.
This is the length of the line in pixels that is drawn to indicate the tick on the scale.
        @member {number}
        */
        size?: number;
        /**
        The visibility of the minor ticks.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The width of the minor ticks.
        @member {number}
        */
        width?: number;
    }

    interface LinearGaugeScaleRange {
        /**
        The start position of the range in scale units.
        @member {number}
        */
        from?: number;
        /**
        The end position of the range in scale units.
        @member {number}
        */
        to?: number;
        /**
        The opacity of the range.
        @member {number}
        */
        opacity?: number;
        /**
        The color of the range.
Any valid CSS color string will work here, including hex and rgb.
        @member {string}
        */
        color?: string;
    }

    interface LinearGaugeScale {
        /**
        Configures the axis line.
        @member {LinearGaugeScaleLine}
        */
        line?: LinearGaugeScaleLine;
        /**
        Configures the scale labels.
        @member {LinearGaugeScaleLabels}
        */
        labels?: LinearGaugeScaleLabels;
        /**
        Configures the scale major ticks.
        @member {LinearGaugeScaleMajorTicks}
        */
        majorTicks?: LinearGaugeScaleMajorTicks;
        /**
        The interval between major divisions.
        @member {number}
        */
        majorUnit?: number;
        /**
        The maximum value of the scale.
        @member {number}
        */
        max?: number;
        /**
        The minimum value of the scale.
        @member {number}
        */
        min?: number;
        /**
        Configures the scale minor ticks.
        @member {LinearGaugeScaleMinorTicks}
        */
        minorTicks?: LinearGaugeScaleMinorTicks;
        /**
        The interval between minor divisions.
        @member {number}
        */
        minorUnit?: number;
        /**
        Mirrors the scale labels and ticks.
If the labels are normally on the left side of the scale, mirroring the scale will render them to the right.
        @member {boolean}
        */
        mirror?: boolean;
        ranges?: LinearGaugeScaleRange[];
        /**
        The default color for the ranges.
        @member {string}
        */
        rangePlaceholderColor?: string;
        /**
        The width of the range indicators.
        @member {number}
        */
        rangeSize?: number;
        /**
        Reverses the axis direction - values increase from right to left and from top to bottom.
        @member {boolean}
        */
        reverse?: boolean;
        /**
        The position of the gauge.
        @member {boolean}
        */
        vertical?: boolean;
    }

    interface LinearGaugeOptions {
        name?: string;
        /**
        The gauge area configuration options.
This is the entire visible area of the gauge.
        @member {LinearGaugeGaugeArea}
        */
        gaugeArea?: LinearGaugeGaugeArea;
        /**
        The pointer configuration options.
        @member {LinearGaugePointer}
        */
        pointer?: LinearGaugePointer;
        /**
        Sets the preferred rendering engine.
If it is not supported by the browser, the Gauge will switch to the first available mode.The supported values are:
        @member {string}
        */
        renderAs?: string;
        /**
        Configures the scale.
        @member {LinearGaugeScale}
        */
        scale?: LinearGaugeScale;
        /**
        A value indicating if transition animations should be played.
        @member {boolean}
        */
        transitions?: boolean;
    }

    interface LinearGaugeEvent {
        sender: LinearGauge;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }


    class Map extends kendo.ui.Widget {
        static fn: Map;
        static extend(proto: Object): Map;

        element: JQuery;
        wrapper: JQuery;
        constructor(element: Element, options?: MapOptions);
        options: MapOptions;
        /**
        Gets or sets the map center.
The setter is chainable, i.e. returns the map instance.
        @method
        @returns The current map center.
        */
        center(): kendo.dataviz.map.Location;
        /**
        Gets or sets the map center.
The setter is chainable, i.e. returns the map instance.
        @method
        @param center - The location of the new map center.
An array argument is assumed to be in [Latitude, Lonigude] order.
        */
        center(center: any): void;
        /**
        Gets or sets the map center.
The setter is chainable, i.e. returns the map instance.
        @method
        @param center - The location of the new map center.
An array argument is assumed to be in [Latitude, Lonigude] order.
        */
        center(center: kendo.dataviz.map.Location): void;
        /**
        Prepares the widget for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        @method
        */
        destroy(): void;
        /**
        Returns the event coordinates relative to the map element.
Offset coordinates are not synchronized to a particular location on the map.
        @method
        @param e - The DOM or jQuery mouse event.
        @returns The event coordinates relative to the map element.
        */
        eventOffset(e: any): kendo.dataviz.geometry.Point;
        /**
        Returns the event coordinates relative to the map element.
Offset coordinates are not synchronized to a particular location on the map.
        @method
        @param e - The DOM or jQuery mouse event.
        @returns The event coordinates relative to the map element.
        */
        eventOffset(e: JQueryEventObject): kendo.dataviz.geometry.Point;
        /**
        Retrieves projected (layer) coordinates that correspond to this mouse event.
Layer coordinates are absolute and change only when the zoom level is changed.
        @method
        @param e - The DOM or jQuery mouse event.
        @returns The projected (layer) coordinates that correspond to this mouse event.
        */
        eventToLayer(e: any): kendo.dataviz.geometry.Point;
        /**
        Retrieves projected (layer) coordinates that correspond to this mouse event.
Layer coordinates are absolute and change only when the zoom level is changed.
        @method
        @param e - The DOM or jQuery mouse event.
        @returns The projected (layer) coordinates that correspond to this mouse event.
        */
        eventToLayer(e: JQueryEventObject): kendo.dataviz.geometry.Point;
        /**
        Retrieves the geographic location that correspond to this mouse event.
        @method
        @param e - The DOM or jQuery mouse event.
        @returns The geographic location that correspond to this mouse event.
        */
        eventToLocation(e: any): kendo.dataviz.geometry.Point;
        /**
        Retrieves the geographic location that correspond to this mouse event.
        @method
        @param e - The DOM or jQuery mouse event.
        @returns The geographic location that correspond to this mouse event.
        */
        eventToLocation(e: JQueryEventObject): kendo.dataviz.geometry.Point;
        /**
        Retrieves relative (view) coordinates that correspond to this mouse event.
Layer elements positioned on these coordinates will appear under the mouse cursor.View coordinates are no longer valid after a map reset.
        @method
        @param e - The DOM or jQuery mouse event.
        @returns The relative (view) coordinates that correspond to this mouse event.
        */
        eventToView(e: any): kendo.dataviz.geometry.Point;
        /**
        Retrieves relative (view) coordinates that correspond to this mouse event.
Layer elements positioned on these coordinates will appear under the mouse cursor.View coordinates are no longer valid after a map reset.
        @method
        @param e - The DOM or jQuery mouse event.
        @returns The relative (view) coordinates that correspond to this mouse event.
        */
        eventToView(e: JQueryEventObject): kendo.dataviz.geometry.Point;
        /**
        Gets the map current map extent.
        @method
        @returns The current map extent.
        */
        extent(): kendo.dataviz.map.Extent;
        /**
        Transforms layer (projected) coordinates to geographical location.
        @method
        @param point - The layer (projected) coordinates.
An array argument is assumed to be in x, y order.
        @param zoom - Optional. Assumed zoom level. Defaults to the current zoom level.
        @returns The geographic location that corresponds to the layer coordinates.
        */
        layerToLocation(point: any, zoom: number): kendo.dataviz.map.Location;
        /**
        Transforms layer (projected) coordinates to geographical location.
        @method
        @param point - The layer (projected) coordinates.
An array argument is assumed to be in x, y order.
        @param zoom - Optional. Assumed zoom level. Defaults to the current zoom level.
        @returns The geographic location that corresponds to the layer coordinates.
        */
        layerToLocation(point: kendo.dataviz.geometry.Point, zoom: number): kendo.dataviz.map.Location;
        /**
        Returns the layer (projected) coordinates that correspond to a geographical location.
        @method
        @param location - The geographic location.
An array argument is assumed to be in [Latitude, Lonigude] order.
        @param zoom - Optional. Assumed zoom level. Defaults to the current zoom level.
        @returns The layer (projected) coordinates.
        */
        locationToLayer(location: any, zoom: number): kendo.dataviz.geometry.Point;
        /**
        Returns the layer (projected) coordinates that correspond to a geographical location.
        @method
        @param location - The geographic location.
An array argument is assumed to be in [Latitude, Lonigude] order.
        @param zoom - Optional. Assumed zoom level. Defaults to the current zoom level.
        @returns The layer (projected) coordinates.
        */
        locationToLayer(location: kendo.dataviz.map.Location, zoom: number): kendo.dataviz.geometry.Point;
        /**
        Returns the view (relative) coordinates that correspond to a geographical location.
        @method
        @param location - The geographic location.
An array argument is assumed to be in [Latitude, Lonigude] order.
        @returns The view coordinates that correspond to a geographical location.
        */
        locationToView(location: any): kendo.dataviz.geometry.Point;
        /**
        Returns the view (relative) coordinates that correspond to a geographical location.
        @method
        @param location - The geographic location.
An array argument is assumed to be in [Latitude, Lonigude] order.
        @returns The view coordinates that correspond to a geographical location.
        */
        locationToView(location: kendo.dataviz.map.Location): kendo.dataviz.geometry.Point;
        /**
        Adjusts the widget layout to match the size of the container.
        @method
        @param force - Defines whether the widget should proceed with resizing even if the element dimensions have not changed.
        */
        resize(force: boolean): void;
        /**
        Resets the map and applies new options over the current state.
        @method
        @param options - The new options to be applied.
        */
        setOptions(options: any): void;
        /**
        Retrieves the size of the visible portion of the map.
        @method
        @returns The size (width and height) of the visible portion of the map.
        */
        viewSize(): any;
        /**
        Returns the geographical location that correspond to the view (relative) coordinates.
        @method
        @param point - The view coordinates.
An array argument is assumed to be in x, y order.
        @param zoom - Optional. Assumed zoom level. Defaults to the current zoom level.
        @returns The geographic location that corresponds to the view coordinates.
        */
        viewToLocation(point: any, zoom: number): kendo.dataviz.map.Location;
        /**
        Returns the geographical location that correspond to the view (relative) coordinates.
        @method
        @param point - The view coordinates.
An array argument is assumed to be in x, y order.
        @param zoom - Optional. Assumed zoom level. Defaults to the current zoom level.
        @returns The geographic location that corresponds to the view coordinates.
        */
        viewToLocation(point: kendo.dataviz.geometry.Point, zoom: number): kendo.dataviz.map.Location;
        /**
        Gets or sets the map zoom level.
The setter is chainable, i.e. returns the map instance.
        @method
        @returns The current zoom level.
        */
        zoom(): number;
        /**
        Gets or sets the map zoom level.
The setter is chainable, i.e. returns the map instance.
        @method
        @param level - The new zoom level. The value is clamped to the
 [minZoom, maxZoom] interval.
        */
        zoom(level: number): void;
    }

    interface MapControlsAttribution {
        /**
        The position of the attribution control. Possible values include:
        @member {string}
        */
        position?: string;
    }

    interface MapControlsNavigator {
        /**
        The position of the navigator control. Possible values include:
        @member {string}
        */
        position?: string;
    }

    interface MapControlsZoom {
        /**
        The position of the zoom control. Possible values include:
        @member {string}
        */
        position?: string;
    }

    interface MapControls {
        /**
        Configures or disables the built-in attribution control.
        @member {MapControlsAttribution}
        */
        attribution?: MapControlsAttribution;
        /**
        Configures or disables the built-in navigator control (directional pad).
        @member {MapControlsNavigator}
        */
        navigator?: MapControlsNavigator;
        /**
        Configures or disables the built-in zoom control (+/- button).
        @member {MapControlsZoom}
        */
        zoom?: MapControlsZoom;
    }

    interface MapLayerDefaultsBing {
        /**
        The attribution of all Bing (tm) layers.
        @member {string}
        */
        attribution?: string;
        /**
        The the opacity of all Bing (tm) tile layers.
        @member {number}
        */
        opacity?: number;
        /**
        The key of all Bing (tm) tile layers.
        @member {string}
        */
        key?: string;
    }

    interface MapLayerDefaultsMarkerTooltipAnimationClose {
        /**
        Effect to be used for closing of the tooltip.
        @member {string}
        */
        effects?: string;
        /**
        Defines the animation duration.
        @member {number}
        */
        duration?: number;
    }

    interface MapLayerDefaultsMarkerTooltipAnimationOpen {
        /**
        Effect to be used for opening of the Tooltip.
        @member {string}
        */
        effects?: string;
        /**
        Defines the animation duration.
        @member {number}
        */
        duration?: number;
    }

    interface MapLayerDefaultsMarkerTooltipAnimation {
        /**
        The animation that will be used when a Tooltip closes.
        @member {MapLayerDefaultsMarkerTooltipAnimationClose}
        */
        close?: MapLayerDefaultsMarkerTooltipAnimationClose;
        /**
        The animation that will be used when a Tooltip opens.
        @member {MapLayerDefaultsMarkerTooltipAnimationOpen}
        */
        open?: MapLayerDefaultsMarkerTooltipAnimationOpen;
    }

    interface MapLayerDefaultsMarkerTooltipContent {
        /**
        Specifies a URL or request options that the tooltip should load its content from.
        @member {string}
        */
        url?: string;
    }

    interface MapLayerDefaultsMarkerTooltip {
        /**
        Specifies if the tooltip will be hidden when mouse leaves the target element. If set to false a close button will be shown within tooltip. If set to false, showAfter is specified and the showOn is set to "mouseenter" the Tooltip will be displayed after the given timeout even if the element is no longer hovered.
        @member {boolean}
        */
        autoHide?: boolean;
        /**
        A collection of {Animation} objects, used to change default animations. A value of false
will disable all animations in the widget.
        @member {MapLayerDefaultsMarkerTooltipAnimation}
        */
        animation?: MapLayerDefaultsMarkerTooltipAnimation;
        /**
        The text or a function which result will be shown within the tooltip.
By default the tooltip will display the target element title attribute content.
        @member {MapLayerDefaultsMarkerTooltipContent}
        */
        content?: MapLayerDefaultsMarkerTooltipContent;
        /**
        The template which renders the tooltip content.The fields which can be used in the template are:
        @member {string}
        */
        template?: string;
        /**
        Specifies if the tooltip callout will be displayed.
        @member {boolean}
        */
        callout?: boolean;
        /**
        Explicitly states whether content iframe should be created.
        @member {boolean}
        */
        iframe?: boolean;
        /**
        The height (in pixels) of the tooltip.
        @member {number}
        */
        height?: number;
        /**
        The width (in pixels) of the tooltip.
        @member {number}
        */
        width?: number;
        /**
        The position relative to the target element, at which the tooltip will be shown. Predefined values are "bottom", "top", "left", "right", "center".
        @member {string}
        */
        position?: string;
        /**
        Specify the delay in milliseconds before the tooltip is shown. This option is ignored if showOn is set to "click" or "focus".
        @member {number}
        */
        showAfter?: number;
        /**
        The event on which the tooltip will be shown. Predefined values are "mouseenter", "click" and "focus".
        @member {string}
        */
        showOn?: string;
    }

    interface MapLayerDefaultsMarker {
        /**
        The default marker shape for all marker layers. The following pre-defined marker shapes are available:Marker shapes are implemented as CSS classes on the marker element (span.k-marker).
For example "pinTarget" is rendered as "k-marker-pin-target".
        @member {string}
        */
        shape?: string;
        /**
        The default Kendo UI Tooltip options for all marker layers.
        @member {MapLayerDefaultsMarkerTooltip}
        */
        tooltip?: MapLayerDefaultsMarkerTooltip;
        /**
        The the opacity of all marker layers.
        @member {number}
        */
        opacity?: number;
    }

    interface MapLayerDefaultsShapeStyleFill {
        /**
        The default fill color for layer shapes.
Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The default fill opacity (0 to 1) for layer shapes.
        @member {number}
        */
        opacity?: number;
    }

    interface MapLayerDefaultsShapeStyleStroke {
        /**
        The default stroke color for layer shapes.
Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The default dash type for layer shapes.
The following dash types are supported:
        @member {string}
        */
        dashType?: string;
        /**
        The default stroke opacity (0 to 1) for layer shapes.
        @member {number}
        */
        opacity?: number;
        /**
        The default stroke width for layer shapes.
        @member {number}
        */
        width?: number;
    }

    interface MapLayerDefaultsShapeStyle {
        /**
        The default fill for layer shapes.
Accepts a valid CSS color string or object with detailed configuration.
        @member {MapLayerDefaultsShapeStyleFill}
        */
        fill?: MapLayerDefaultsShapeStyleFill;
        /**
        The default stroke for layer shapes.
Accepts a valid CSS color string or object with detailed configuration.
        @member {MapLayerDefaultsShapeStyleStroke}
        */
        stroke?: MapLayerDefaultsShapeStyleStroke;
    }

    interface MapLayerDefaultsShape {
        /**
        The attribution for all shape layers.
        @member {string}
        */
        attribution?: string;
        /**
        The the opacity of all shape layers.
        @member {number}
        */
        opacity?: number;
        /**
        The default style for shapes.
        @member {MapLayerDefaultsShapeStyle}
        */
        style?: MapLayerDefaultsShapeStyle;
    }

    interface MapLayerDefaultsTile {
        /**
        The URL template for tile layers. Template variables:
        @member {string}
        */
        urlTemplate?: string;
        /**
        The attribution of all tile layers.
        @member {string}
        */
        attribution?: string;
        /**
        The subdomain of all tile layers.
        @member {any}
        */
        subdomains?: any;
        /**
        The the opacity of all tile layers.
        @member {number}
        */
        opacity?: number;
    }

    interface MapLayerDefaults {
        /**
        The default configuration for marker layers.
        @member {MapLayerDefaultsMarker}
        */
        marker?: MapLayerDefaultsMarker;
        /**
        The default configuration for shape layers.
        @member {MapLayerDefaultsShape}
        */
        shape?: MapLayerDefaultsShape;
        /**
        The default configuration for tile layers.
        @member {MapLayerDefaultsTile}
        */
        tile?: MapLayerDefaultsTile;
        /**
        The default configuration for Bing (tm) tile layers.
        @member {MapLayerDefaultsBing}
        */
        bing?: MapLayerDefaultsBing;
    }

    interface MapLayerStyleFill {
        /**
        The default fill color for layer shapes.
Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The default fill opacity (0 to 1) for layer shapes.
        @member {number}
        */
        opacity?: number;
    }

    interface MapLayerStyleStroke {
        /**
        The default stroke color for layer shapes.
Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The default dash type for layer shapes.
The following dash types are supported:
        @member {number}
        */
        dashType?: number;
        /**
        The default stroke opacity (0 to 1) for layer shapes.
        @member {number}
        */
        opacity?: number;
        /**
        The default stroke width for layer shapes.
        @member {number}
        */
        width?: number;
    }

    interface MapLayerStyle {
        /**
        The default fill for layer shapes.
Accepts a valid CSS color string or object with detailed configuration.
        @member {MapLayerStyleFill}
        */
        fill?: MapLayerStyleFill;
        /**
        The default stroke for layer shapes.
Accepts a valid CSS color string or object with detailed configuration.
        @member {MapLayerStyleStroke}
        */
        stroke?: MapLayerStyleStroke;
    }

    interface MapLayerTooltipAnimationClose {
        /**
        Effect to be used for closing of the tooltip.
        @member {string}
        */
        effects?: string;
        /**
        Defines the animation duration.
        @member {number}
        */
        duration?: number;
    }

    interface MapLayerTooltipAnimationOpen {
        /**
        Effect to be used for opening of the Tooltip.
        @member {string}
        */
        effects?: string;
        /**
        Defines the animation duration.
        @member {number}
        */
        duration?: number;
    }

    interface MapLayerTooltipAnimation {
        /**
        The animation that will be used when a Tooltip closes.
        @member {MapLayerTooltipAnimationClose}
        */
        close?: MapLayerTooltipAnimationClose;
        /**
        The animation that will be used when a Tooltip opens.
        @member {MapLayerTooltipAnimationOpen}
        */
        open?: MapLayerTooltipAnimationOpen;
    }

    interface MapLayerTooltipContent {
        /**
        Specifies a URL or request options that the tooltip should load its content from.
        @member {string}
        */
        url?: string;
    }

    interface MapLayerTooltip {
        /**
        Specifies if the tooltip will be hidden when mouse leaves the target element. If set to false a close button will be shown within tooltip. If set to false, showAfter is specified and the showOn is set to "mouseenter" the Tooltip will be displayed after the given timeout even if the element is no longer hovered.
        @member {boolean}
        */
        autoHide?: boolean;
        /**
        A collection of {Animation} objects, used to change default animations. A value of false
will disable all animations in the widget.
        @member {MapLayerTooltipAnimation}
        */
        animation?: MapLayerTooltipAnimation;
        /**
        The text or a function which result will be shown within the tooltip.
By default the tooltip will display the target element title attribute content.
        @member {MapLayerTooltipContent}
        */
        content?: MapLayerTooltipContent;
        /**
        The template which renders the tooltip content.The fields which can be used in the template are:
        @member {string}
        */
        template?: string;
        /**
        Specifies if the tooltip callout will be displayed.
        @member {boolean}
        */
        callout?: boolean;
        /**
        Explicitly states whether content iframe should be created.
        @member {boolean}
        */
        iframe?: boolean;
        /**
        The height (in pixels) of the tooltip.
        @member {number}
        */
        height?: number;
        /**
        The width (in pixels) of the tooltip.
        @member {number}
        */
        width?: number;
        /**
        The position relative to the target element, at which the tooltip will be shown. Predefined values are "bottom", "top", "left", "right", "center".
        @member {string}
        */
        position?: string;
        /**
        Specify the delay in milliseconds before the tooltip is shown. This option is ignored if showOn is set to "click" or "focus".
        @member {number}
        */
        showAfter?: number;
        /**
        The event on which the tooltip will be shown. Predefined values are "mouseenter", "click" and "focus".
        @member {string}
        */
        showOn?: string;
    }

    interface MapLayer {
        /**
        The attribution for the layer. Accepts valid HTML.
        @member {string}
        */
        attribution?: string;
        /**
        If set to false the layer will not bind to the data source during initialization. In this case data binding will occur when the change event of the
data source is fired. By default the widget will bind to the data source specified in the configuration.
        @member {boolean}
        */
        autoBind?: boolean;
        /**
        The data source of the layer. Can be a JavaScript object which represents a valid data source configuration, a JavaScript array or an existing kendo.data.DataSource
instance.
        @member {any}
        */
        dataSource?: any;
        /**
        Specifies the extent of the region covered by this layer.
The layer will be hidden when the specified area is out of view.Accepts a four-element array that specifies the extent covered by this layer:
North-West lat, longitude, South-East latitude, longitude.If not specified, the layer is always visible.
        @member {any}
        */
        extent?: any;
        /**
        The API key for the layer. Currently supported only for Bing (tm) tile layers.
        @member {string}
        */
        key?: string;
        /**
        The data item field which contains the marker location.
The field should be an array with two numbers - latitude and longitude.Requires the dataSource option to be set.
        @member {string}
        */
        locationField?: string;
        /**
        The default marker shape for data-bound markers. The following pre-defined marker shapes are available:Marker shapes are implemented as CSS classes on the marker element (span.k-marker).
For example "pinTarget" is rendered as "k-marker-pin-target".
        @member {string}
        */
        shape?: string;
        /**
        The data item field which contains the marker title.
Requires the dataSource option to be set.
        @member {string}
        */
        titleField?: string;
        /**
        The default Kendo UI Tooltip options for data-bound markers.
        @member {MapLayerTooltip}
        */
        tooltip?: MapLayerTooltip;
        /**
        The the opacity for the layer.
        @member {number}
        */
        opacity?: number;
        /**
        A list of subdomains to use for loading tiles.
Alternating between different subdomains allows more requests to be executed in parallel.
        @member {any}
        */
        subdomains?: any;
        /**
        The layer type. Supported types are:
        @member {string}
        */
        type?: string;
        /**
        The default style for shapes.
        @member {MapLayerStyle}
        */
        style?: MapLayerStyle;
        /**
        The URL template for tile layers. Template variables:
        @member {string}
        */
        urlTemplate?: string;
    }

    interface MapMarkerDefaultsTooltipAnimationClose {
        /**
        Effect to be used for closing of the tooltip.
        @member {string}
        */
        effects?: string;
        /**
        Defines the animation duration.
        @member {number}
        */
        duration?: number;
    }

    interface MapMarkerDefaultsTooltipAnimationOpen {
        /**
        Effect to be used for opening of the Tooltip.
        @member {string}
        */
        effects?: string;
        /**
        Defines the animation duration.
        @member {number}
        */
        duration?: number;
    }

    interface MapMarkerDefaultsTooltipAnimation {
        /**
        The animation that will be used when a Tooltip closes.
        @member {MapMarkerDefaultsTooltipAnimationClose}
        */
        close?: MapMarkerDefaultsTooltipAnimationClose;
        /**
        The animation that will be used when a Tooltip opens.
        @member {MapMarkerDefaultsTooltipAnimationOpen}
        */
        open?: MapMarkerDefaultsTooltipAnimationOpen;
    }

    interface MapMarkerDefaultsTooltipContent {
        /**
        Specifies a URL or request options that the tooltip should load its content from.
        @member {string}
        */
        url?: string;
    }

    interface MapMarkerDefaultsTooltip {
        /**
        Specifies if the tooltip will be hidden when mouse leaves the target element. If set to false a close button will be shown within tooltip. If set to false, showAfter is specified and the showOn is set to "mouseenter" the Tooltip will be displayed after the given timeout even if the element is no longer hovered.
        @member {boolean}
        */
        autoHide?: boolean;
        /**
        A collection of {Animation} objects, used to change default animations. A value of false
will disable all animations in the widget.
        @member {MapMarkerDefaultsTooltipAnimation}
        */
        animation?: MapMarkerDefaultsTooltipAnimation;
        /**
        The text or a function which result will be shown within the tooltip.
By default the tooltip will display the target element title attribute content.
        @member {MapMarkerDefaultsTooltipContent}
        */
        content?: MapMarkerDefaultsTooltipContent;
        /**
        The template which renders the tooltip content.The fields which can be used in the template are:
        @member {string}
        */
        template?: string;
        /**
        Specifies if the tooltip callout will be displayed.
        @member {boolean}
        */
        callout?: boolean;
        /**
        Explicitly states whether content iframe should be created.
        @member {boolean}
        */
        iframe?: boolean;
        /**
        The height (in pixels) of the tooltip.
        @member {number}
        */
        height?: number;
        /**
        The width (in pixels) of the tooltip.
        @member {number}
        */
        width?: number;
        /**
        The position relative to the target element, at which the tooltip will be shown. Predefined values are "bottom", "top", "left", "right", "center".
        @member {string}
        */
        position?: string;
        /**
        Specify the delay in milliseconds before the tooltip is shown. This option is ignored if showOn is set to "click" or "focus".
        @member {number}
        */
        showAfter?: number;
        /**
        The event on which the tooltip will be shown. Predefined values are "mouseenter", "click" and "focus".
        @member {string}
        */
        showOn?: string;
    }

    interface MapMarkerDefaults {
        /**
        The default marker shape. The following pre-defined marker shapes are available:Marker shapes are implemented as CSS classes on the marker element (span.k-marker).
For example "pinTarget" is rendered as "k-marker-pin-target".
        @member {string}
        */
        shape?: string;
        /**
        Default Kendo UI Tooltip options for this marker.
        @member {MapMarkerDefaultsTooltip}
        */
        tooltip?: MapMarkerDefaultsTooltip;
    }

    interface MapMarkerTooltipAnimationClose {
        /**
        Effect to be used for closing of the tooltip.
        @member {string}
        */
        effects?: string;
        /**
        Defines the animation duration.
        @member {number}
        */
        duration?: number;
    }

    interface MapMarkerTooltipAnimationOpen {
        /**
        Effect to be used for opening of the Tooltip.
        @member {string}
        */
        effects?: string;
        /**
        Defines the animation duration.
        @member {number}
        */
        duration?: number;
    }

    interface MapMarkerTooltipAnimation {
        /**
        The animation that will be used when a Tooltip closes.
        @member {MapMarkerTooltipAnimationClose}
        */
        close?: MapMarkerTooltipAnimationClose;
        /**
        The animation that will be used when a Tooltip opens.
        @member {MapMarkerTooltipAnimationOpen}
        */
        open?: MapMarkerTooltipAnimationOpen;
    }

    interface MapMarkerTooltipContent {
        /**
        Specifies a URL or request options that the tooltip should load its content from.
        @member {string}
        */
        url?: string;
    }

    interface MapMarkerTooltip {
        /**
        Specifies if the tooltip will be hidden when mouse leaves the target element. If set to false a close button will be shown within tooltip. If set to false, showAfter is specified and the showOn is set to "mouseenter" the Tooltip will be displayed after the given timeout even if the element is no longer hovered.
        @member {boolean}
        */
        autoHide?: boolean;
        /**
        A collection of {Animation} objects, used to change default animations. A value of false
will disable all animations in the widget.
        @member {MapMarkerTooltipAnimation}
        */
        animation?: MapMarkerTooltipAnimation;
        /**
        The text or a function which result will be shown within the tooltip.
By default the tooltip will display the target element title attribute content.
        @member {MapMarkerTooltipContent}
        */
        content?: MapMarkerTooltipContent;
        /**
        The template which renders the tooltip content.The fields which can be used in the template are:
        @member {string}
        */
        template?: string;
        /**
        Specifies if the tooltip callout will be displayed.
        @member {boolean}
        */
        callout?: boolean;
        /**
        Explicitly states whether content iframe should be created.
        @member {boolean}
        */
        iframe?: boolean;
        /**
        The height (in pixels) of the tooltip.
        @member {number}
        */
        height?: number;
        /**
        The width (in pixels) of the tooltip.
        @member {number}
        */
        width?: number;
        /**
        The position relative to the target element, at which the tooltip will be shown. Predefined values are "bottom", "top", "left", "right", "center".
        @member {string}
        */
        position?: string;
        /**
        Specify the delay in milliseconds before the tooltip is shown. This option is ignored if showOn is set to "click" or "focus".
        @member {number}
        */
        showAfter?: number;
        /**
        The event on which the tooltip will be shown. Predefined values are "mouseenter", "click" and "focus".
        @member {string}
        */
        showOn?: string;
    }

    interface MapMarker {
        /**
        The marker location on the map. Coordinates are listed as [Latitude, Longitude].
        @member {any}
        */
        location?: any;
        /**
        The marker shape. The following pre-defined marker shapes are available:Marker shapes are implemented as CSS classes on the marker element (span.k-marker).
For example "pinTarget" is rendered as "k-marker-pin-target".
        @member {string}
        */
        shape?: string;
        /**
        The marker title. Displayed as browser tooltip.
        @member {string}
        */
        title?: string;
        /**
        Kendo UI Tooltip options for this marker.
        @member {MapMarkerTooltip}
        */
        tooltip?: MapMarkerTooltip;
    }

    interface MapOptions {
        name?: string;
        /**
        The map center. Coordinates are listed as [Latitude, Longitude].
        @member {any}
        */
        center?: any;
        /**
        The configuration of built-in map controls.
        @member {MapControls}
        */
        controls?: MapControls;
        /**
        The default configuration for map layers by type.
        @member {MapLayerDefaults}
        */
        layerDefaults?: MapLayerDefaults;
        layers?: MapLayer[];
        /**
        The default options for all markers.
        @member {MapMarkerDefaults}
        */
        markerDefaults?: MapMarkerDefaults;
        markers?: MapMarker[];
        /**
        The minimum zoom level.
Typical web maps use zoom levels from 0 (whole world) to 19 (sub-meter features).
        @member {number}
        */
        minZoom?: number;
        /**
        The maximum zoom level.
Typical web maps use zoom levels from 0 (whole world) to 19 (sub-meter features).
        @member {number}
        */
        maxZoom?: number;
        /**
        The size of the map in pixels at zoom level 0.
        @member {number}
        */
        minSize?: number;
        /**
        Controls whether the user can pan the map.
        @member {boolean}
        */
        pannable?: boolean;
        /**
        Specifies whether the map should wrap around the east-west edges.
        @member {boolean}
        */
        wraparound?: boolean;
        /**
        The initial zoom level.Typical web maps use zoom levels from 0 (whole world) to 19 (sub-meter features).The map size is derived from the zoom level and minScale options: size = (2 ^ zoom) * minSize
        @member {number}
        */
        zoom?: number;
        /**
        Controls whether the map zoom level can be changed by the user.
        @member {boolean}
        */
        zoomable?: boolean;
        /**
        Fired when the user clicks on the map.
        */
        click?(e: MapClickEvent): void;
        /**
        Fired when a marker has been created and is about to be displayed.
Cancelling the event will prevent the marker from being shown.
        */
        markerCreated?(e: MapMarkerCreatedEvent): void;
        /**
        Fired while the map viewport is being moved.
        */
        pan?(e: MapPanEvent): void;
        /**
        Fires after the map viewport has been moved.
        */
        panEnd?(e: MapPanEndEvent): void;
        /**
        Fired when the map is reset.
This typically occurs on initial load and after a zoom/center change.
        */
        reset?(e: MapResetEvent): void;
        /**
        Fired when a shape is clicked or tapped.
        */
        shapeClick?(e: MapShapeClickEvent): void;
        /**
        Fired when a shape is created, but is not rendered yet.
        */
        shapeCreated?(e: MapShapeCreatedEvent): void;
        /**
        Fired when the mouse enters a shape.
        */
        shapeMouseEnter?(e: MapShapeMouseEnterEvent): void;
        /**
        Fired when the mouse leaves a shape.
        */
        shapeMouseLeave?(e: MapShapeMouseLeaveEvent): void;
        /**
        Fired when the map zoom level is about to change.
Cancelling the event will prevent the user action.
        */
        zoomStart?(e: MapZoomStartEvent): void;
        /**
        Fired when the map zoom level has changed.
        */
        zoomEnd?(e: MapZoomEndEvent): void;
    }

    interface MapEvent {
        sender: Map;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }

    interface MapClickEvent extends MapEvent {
        /**
        The location of the clicked point.
        @member {kendo.dataviz.map.Location}
        */
        location?: kendo.dataviz.map.Location;
        /**
        The source jQuery event instance
        @member {any}
        */
        originalEvent?: any;
    }

    interface MapMarkerCreatedEvent extends MapEvent {
        /**
        The marker instance.
        @member {kendo.dataviz.map.Marker}
        */
        marker?: kendo.dataviz.map.Marker;
    }

    interface MapPanEvent extends MapEvent {
        /**
        The map origin (top left or NW corner).
        @member {kendo.dataviz.map.Location}
        */
        origin?: kendo.dataviz.map.Location;
        /**
        The current map center.
        @member {kendo.dataviz.map.Location}
        */
        center?: kendo.dataviz.map.Location;
        /**
        The source jQuery event instance
        @member {any}
        */
        originalEvent?: any;
    }

    interface MapPanEndEvent extends MapEvent {
        /**
        The map origin (top left or NW corner).
        @member {kendo.dataviz.map.Location}
        */
        origin?: kendo.dataviz.map.Location;
        /**
        The map center.
        @member {kendo.dataviz.map.Location}
        */
        center?: kendo.dataviz.map.Location;
        /**
        The source jQuery event instance
        @member {any}
        */
        originalEvent?: any;
    }

    interface MapResetEvent extends MapEvent {
    }

    interface MapShapeClickEvent extends MapEvent {
        /**
        The parent layer instance.
        @member {kendo.dataviz.map.layer.Shape}
        */
        layer?: kendo.dataviz.map.layer.Shape;
        /**
        The the shape instance.
        @member {kendo.dataviz.drawing.Shape}
        */
        shape?: kendo.dataviz.drawing.Shape;
        /**
        The source jQuery event instance
        @member {any}
        */
        originalEvent?: any;
    }

    interface MapShapeCreatedEvent extends MapEvent {
        /**
        The parent layer instance.
        @member {kendo.dataviz.map.layer.Shape}
        */
        layer?: kendo.dataviz.map.layer.Shape;
        /**
        The the shape instance.
        @member {kendo.dataviz.drawing.Shape}
        */
        shape?: kendo.dataviz.drawing.Shape;
        /**
        The source jQuery event instance
        @member {any}
        */
        originalEvent?: any;
    }

    interface MapShapeMouseEnterEvent extends MapEvent {
        /**
        The parent layer instance.
        @member {kendo.dataviz.map.layer.Shape}
        */
        layer?: kendo.dataviz.map.layer.Shape;
        /**
        The the shape instance.
        @member {kendo.dataviz.drawing.Shape}
        */
        shape?: kendo.dataviz.drawing.Shape;
        /**
        The source jQuery event instance
        @member {any}
        */
        originalEvent?: any;
    }

    interface MapShapeMouseLeaveEvent extends MapEvent {
        /**
        The parent layer instance.
        @member {kendo.dataviz.map.layer.Shape}
        */
        layer?: kendo.dataviz.map.layer.Shape;
        /**
        The the shape instance.
        @member {kendo.dataviz.drawing.Shape}
        */
        shape?: kendo.dataviz.drawing.Shape;
        /**
        The source jQuery event instance
        @member {any}
        */
        originalEvent?: any;
    }

    interface MapZoomStartEvent extends MapEvent {
        /**
        The source jQuery event instance
        @member {any}
        */
        originalEvent?: any;
    }

    interface MapZoomEndEvent extends MapEvent {
        /**
        The source jQuery event instance
        @member {any}
        */
        originalEvent?: any;
    }


    class QRCode extends kendo.ui.Widget {
        static fn: QRCode;
        static extend(proto: Object): QRCode;

        element: JQuery;
        wrapper: JQuery;
        constructor(element: Element, options?: QRCodeOptions);
        options: QRCodeOptions;
        /**
        Prepares the QRCode for safe removal from the DOM.Removes data entries in order to avoid memory leaks.
        @method
        */
        destroy(): void;
        /**
        Returns a PNG image of the qrcode encoded as a Data URL.
        @method
        @returns A data URL with image/png MIME type. Will be null if the browser does not support the canvas element.
        */
        imageDataURL(): string;
        /**
        Redraws the QR code using the current value and options.
        @method
        */
        redraw(): void;
        /**
        Adjusts the widget layout to match the size of the container.
        @method
        @param force - Defines whether the widget should proceed with resizing even if the element dimensions have not changed.
        */
        resize(force: boolean): void;
        /**
        Sets new options to the QRCode and redraws it.
        @method
        @param options - An object with the new options. All configuration options can be set.
        */
        setOptions(options: any): void;
        /**
        Returns the SVG representation of the qrcode. The returned string is a self-contained SVG document that can be used as is or converted to other formats using tools like Inkscape and
ImageMagick. Both programs provide command-line interface suitable for server-side processing.
        @method
        @returns the SVG representation of the qrcode.
        */
        svg(): string;
        /**
        Change the value of the QR code.
        @method
        @param options - The new value to be set.
        */
        value(options: string): void;
        /**
        Change the value of the QR code.
        @method
        @param options - The new value to be set.
        */
        value(options: number): void;
    }

    interface QRCodeBorder {
        /**
        The color of the border. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The width of the border in pixels. By default the border width is set to zero which means that the border will not appear.
        @member {number}
        */
        width?: number;
    }

    interface QRCodeOptions {
        name?: string;
        /**
        The background color of the QR code. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        background?: string;
        /**
        The border of the QR code.
        @member {QRCodeBorder}
        */
        border?: QRCodeBorder;
        /**
        The color of the QR code. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The encoding mode used to encode the value.The possible values are:
        @member {string}
        */
        encoding?: string;
        /**
        The error correction level used to encode the value.The possible values are:
        @member {string}
        */
        errorCorrection?: string;
        /**
        Sets the minimum distance in pixels that should be left between the border and the QR modules.
        @member {number}
        */
        padding?: number;
        /**
        Sets the preferred rendering engine.
If it is not supported by the browser, the QRCode will switch to the first available mode.The supported values are:
        @member {string}
        */
        renderAs?: string;
        /**
        Specifies the size of a QR code in pixels (i.e. "200px"). Numeric values are treated as pixels. If no size is specified, it will be determined from the element width and height. In case the element does not have width or height bigger than zero, a default value of 200 pixels will be used.
        @member {any}
        */
        size?: any;
        /**
        The value of the QRCode.
        @member {any}
        */
        value?: any;
    }

    interface QRCodeEvent {
        sender: QRCode;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }


    class RadialGauge extends kendo.ui.Widget {
        static fn: RadialGauge;
        static extend(proto: Object): RadialGauge;

        element: JQuery;
        wrapper: JQuery;
        constructor(element: Element, options?: RadialGaugeOptions);
        options: RadialGaugeOptions;
        /**
        Prepares the Gauge for safe removal from the DOM.Detaches event handlers and removes data entries in order to avoid memory leaks.
        @method
        */
        destroy(): void;
        /**
        Redraws the gauge.
        @method
        */
        redraw(): void;
        /**
        Adjusts the widget layout to match the size of the container.
        @method
        @param force - Defines whether the widget should proceed with resizing even if the element dimensions have not changed.
        */
        resize(force: boolean): void;
        /**
        Returns the SVG representation of the gauge.
The returned string is a self-contained SVG document that can be used as is or
converted to other formats using tools like Inkscape and
ImageMagick.
Both programs provide command-line interface suitable for server-side processing.
        @method
        */
        svg(): void;
        /**
        Returns a PNG image of the gauge encoded as a Data URL.
        @method
        @returns A data URL with image/png MIME type. Will be null if the browser does not support the canvas element.
        */
        imageDataURL(): string;
        /**
        Change the value of the gauge.
        @method
        */
        value(): void;
    }

    interface RadialGaugeGaugeAreaBorder {
        /**
        The color of the border. Any valid CSS color string will work here, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the border.
        @member {string}
        */
        dashType?: string;
        /**
        The width of the border.
        @member {number}
        */
        width?: number;
    }

    interface RadialGaugeGaugeArea {
        /**
        The background of the gauge area.
Any valid CSS color string will work here, including hex and rgb.
        @member {any}
        */
        background?: any;
        /**
        The border of the gauge area.
        @member {RadialGaugeGaugeAreaBorder}
        */
        border?: RadialGaugeGaugeAreaBorder;
        /**
        The height of the gauge area.  By default, the vertical gauge is 200px and
the horizontal one is 60px.
        @member {number}
        */
        height?: number;
        /**
        The margin of the gauge area.
        @member {any}
        */
        margin?: any;
        /**
        The width of the gauge area.  By default the vertical gauge is 60px
and horizontal gauge is 200px.
        @member {number}
        */
        width?: number;
    }

    interface RadialGaugePointerCap {
        /**
        The color of the cap.
Any valid CSS color string will work here, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The size of the cap in percents. (from 0 to 1)
        @member {number}
        */
        size?: number;
    }

    interface RadialGaugePointer {
        /**
        The cap configuration options.
        @member {RadialGaugePointerCap}
        */
        cap?: RadialGaugePointerCap;
        /**
        The color of the pointer.
Any valid CSS color string will work here, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The value of the gauge.
        @member {number}
        */
        value?: number;
    }

    interface RadialGaugeScaleLabelsBorder {
        /**
        The color of the border. Any valid CSS color string will work here, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the border.
        @member {string}
        */
        dashType?: string;
        /**
        The width of the border.
        @member {number}
        */
        width?: number;
    }

    interface RadialGaugeScaleLabels {
        /**
        The background color of the labels.
Any valid CSS color string will work here, including hex and rgb
        @member {string}
        */
        background?: string;
        /**
        The border of the labels.
        @member {RadialGaugeScaleLabelsBorder}
        */
        border?: RadialGaugeScaleLabelsBorder;
        /**
        The text color of the labels.
Any valid CSS color string will work here, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The font style of the labels.
        @member {string}
        */
        font?: string;
        /**
        The format of the labels.
        @member {string}
        */
        format?: string;
        /**
        The margin of the labels.
        @member {any}
        */
        margin?: any;
        /**
        The padding of the labels.
        @member {any}
        */
        padding?: any;
        /**
        The labels positions.
        @member {string}
        */
        position?: string;
        /**
        The label template.
Template variables:
        @member {any}
        */
        template?: any;
        /**
        The visibility of the labels.
        @member {boolean}
        */
        visible?: boolean;
    }

    interface RadialGaugeScaleMajorTicks {
        /**
        The color of the major ticks.
        @member {string}
        */
        color?: string;
        /**
        The major tick size.
This is the length of the line in pixels that is drawn to indicate the tick on the scale.
        @member {number}
        */
        size?: number;
        /**
        The visibility of the major ticks.
Any valid CSS color string will work here, including hex and rgb.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The width of the major ticks.
        @member {number}
        */
        width?: number;
    }

    interface RadialGaugeScaleMinorTicks {
        /**
        The color of the minor ticks.
Any valid CSS color string will work here, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The minor tick size.
This is the length of the line in pixels that is drawn to indicate the tick on the scale.
        @member {number}
        */
        size?: number;
        /**
        The visibility of the minor ticks.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The width of the minor ticks.
        @member {number}
        */
        width?: number;
    }

    interface RadialGaugeScaleRange {
        /**
        The start position of the range in scale units.
        @member {number}
        */
        from?: number;
        /**
        The end position of the range in scale units.
        @member {number}
        */
        to?: number;
        /**
        The opacity of the range.
        @member {number}
        */
        opacity?: number;
        /**
        The color of the range.
Any valid CSS color string will work here, including hex and rgb.
        @member {string}
        */
        color?: string;
    }

    interface RadialGaugeScale {
        /**
        The end angle of the gauge.
The gauge is rendered clockwise(0 degrees are the 180 degrees in the polar coordinat system)
        @member {number}
        */
        endAngle?: number;
        /**
        Configures the scale labels.
        @member {RadialGaugeScaleLabels}
        */
        labels?: RadialGaugeScaleLabels;
        /**
        Configures the scale major ticks.
        @member {RadialGaugeScaleMajorTicks}
        */
        majorTicks?: RadialGaugeScaleMajorTicks;
        /**
        The interval between major divisions.
        @member {number}
        */
        majorUnit?: number;
        /**
        The maximum value of the scale.
        @member {number}
        */
        max?: number;
        /**
        The minimum value of the scale.
        @member {number}
        */
        min?: number;
        /**
        Configures the scale minor ticks.
        @member {RadialGaugeScaleMinorTicks}
        */
        minorTicks?: RadialGaugeScaleMinorTicks;
        /**
        The interval between minor divisions.
        @member {number}
        */
        minorUnit?: number;
        ranges?: RadialGaugeScaleRange[];
        /**
        The default color for the ranges.
        @member {string}
        */
        rangePlaceholderColor?: string;
        /**
        The width of the range indicators.
        @member {number}
        */
        rangeSize?: number;
        /**
        The distance from the range indicators to the ticks.
        @member {number}
        */
        rangeDistance?: number;
        /**
        Reverses the scale direction - values are increase anticlockwise.
        @member {boolean}
        */
        reverse?: boolean;
        /**
        The start angle of the gauge.
The gauge is rendered clockwise(0 degrees are the 180 degrees in the polar coordinat system)
        @member {number}
        */
        startAngle?: number;
    }

    interface RadialGaugeOptions {
        name?: string;
        /**
        The gauge area configuration options.
This is the entire visible area of the gauge.
        @member {RadialGaugeGaugeArea}
        */
        gaugeArea?: RadialGaugeGaugeArea;
        /**
        The pointer configuration options.
        @member {RadialGaugePointer}
        */
        pointer?: RadialGaugePointer;
        /**
        Sets the preferred rendering engine.
If it is not supported by the browser, the Gauge will switch to the first available mode.The supported values are:
        @member {string}
        */
        renderAs?: string;
        /**
        Configures the scale.
        @member {RadialGaugeScale}
        */
        scale?: RadialGaugeScale;
        /**
        A value indicating if transition animations should be played.
        @member {boolean}
        */
        transitions?: boolean;
    }

    interface RadialGaugeEvent {
        sender: RadialGauge;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }


    class Sparkline extends kendo.ui.Widget {
        static fn: Sparkline;
        static extend(proto: Object): Sparkline;

        element: JQuery;
        wrapper: JQuery;
        constructor(element: Element, options?: SparklineOptions);
        options: SparklineOptions;
        dataSource: kendo.data.DataSource;
        /**
        Prepares the Sparkline for safe removal from the DOM.Detaches event handlers and removes data entries in order to avoid memory leaks.
        @method
        */
        destroy(): void;
        /**
        Reloads the data and repaints the chart.
        @method
        */
        refresh(): void;
        /**
        Sets the dataSource of an existing Chart and rebinds it.
        @method
        @param dataSource - 
        */
        setDataSource(dataSource: kendo.data.DataSource): void;
        /**
        Sets the widget options. Changes are cumulative.
        @method
        @param options - The chart settings to update.
        */
        setOptions(options: any): void;
        /**
        Returns the SVG representation of the chart.
The returned string is a self-contained SVG document that can be used as is or
converted to other formats using tools like Inkscape and
ImageMagick.
Both programs provide command-line interface suitable for server-side processing.
        @method
        @returns the SVG representation of the sparkline.
        */
        svg(): string;
        /**
        Returns a PNG image of the sparkline encoded as a Data URL.
        @method
        @returns A data URL with image/png MIME type. Will be null if the browser does not support the canvas element.
        */
        imageDataURL(): string;
    }

    interface SparklineCategoryAxisItemCrosshairTooltipBorder {
        /**
        The color of the border.
        @member {string}
        */
        color?: string;
        /**
        The width of the border.
        @member {number}
        */
        width?: number;
    }

    interface SparklineCategoryAxisItemCrosshairTooltip {
        /**
        The background color of the tooltip.
        @member {string}
        */
        background?: string;
        /**
        The border configuration options.
        @member {SparklineCategoryAxisItemCrosshairTooltipBorder}
        */
        border?: SparklineCategoryAxisItemCrosshairTooltipBorder;
        /**
        The text color of the tooltip.
        @member {string}
        */
        color?: string;
        /**
        The tooltip font.
        @member {string}
        */
        font?: string;
        /**
        The tooltip format.
        @member {string}
        */
        format?: string;
        /**
        The padding of the tooltip.
        @member {any}
        */
        padding?: any;
        /**
        The tooltip template.
Template variables:
        @member {any}
        */
        template?: any;
        /**
        A value indicating if the tooltip should be displayed.
        @member {boolean}
        */
        visible?: boolean;
    }

    interface SparklineCategoryAxisItemCrosshair {
        /**
        The color of the crosshair.
        @member {string}
        */
        color?: string;
        /**
        The width of the crosshair.
        @member {number}
        */
        width?: number;
        /**
        The opacity of the crosshair.
        @member {number}
        */
        opacity?: number;
        /**
        The dash type of the crosshair.
        @member {number}
        */
        dashType?: number;
        /**
        The dash type of the crosshair.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The crosshar tooltip configuration options.
        @member {SparklineCategoryAxisItemCrosshairTooltip}
        */
        tooltip?: SparklineCategoryAxisItemCrosshairTooltip;
    }

    interface SparklineCategoryAxisItemLabelsBorder {
        /**
        The color of the border. Any valid CSS color string will work here, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the border.
        @member {string}
        */
        dashType?: string;
        /**
        The width of the border.
        @member {number}
        */
        width?: number;
    }

    interface SparklineCategoryAxisItemLabels {
        /**
        The background color of the labels. Any valid CSS color string will work here, including hex and rgb.
        @member {string}
        */
        background?: string;
        /**
        The border of the labels.
        @member {SparklineCategoryAxisItemLabelsBorder}
        */
        border?: SparklineCategoryAxisItemLabelsBorder;
        /**
        The text color of the labels. Any valid CSS color string will work here, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The font style of the labels.
        @member {string}
        */
        font?: string;
        /**
        The format of the labels.
        @member {string}
        */
        format?: string;
        /**
        The margin of the labels.
        @member {any}
        */
        margin?: any;
        /**
        Mirrors the axis labels and ticks.
If the labels are normally on the left side of the axis,
mirroring the axis will render them to the right.
        @member {boolean}
        */
        mirror?: boolean;
        /**
        The padding of the labels.
        @member {any}
        */
        padding?: any;
        /**
        The rotation angle of the labels.
        @member {number}
        */
        rotation?: number;
        /**
        Number of labels to skip.
Skips rendering the first n labels.
        @member {number}
        */
        skip?: number;
        /**
        Label rendering step.
Every n-th label is rendered where n is the step
        @member {number}
        */
        step?: number;
        /**
        The template which renders the labels.The fields which can be used in the template are:
        @member {any}
        */
        template?: any;
        /**
        The visibility of the labels.
        @member {boolean}
        */
        visible?: boolean;
        /**
        Culture to use for formatting the dates. See Globalization for more information.
It uses the global culture by default.
        @member {string}
        */
        culture?: string;
        /**
        Date format strings
        @member {any}
        */
        dateFormats?: any;
    }

    interface SparklineCategoryAxisItemLine {
        /**
        The color of the lines. Any valid CSS color string will work here, including hex and rgb.Note: This will also effect the major and minor ticks, but not the grid lines.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the line.
        @member {string}
        */
        dashType?: string;
        /**
        The visibility of the lines.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The width of the line. This will also effect the major and minor ticks, but
not the grid lines.
        @member {number}
        */
        width?: number;
    }

    interface SparklineCategoryAxisItemMajorGridLines {
        /**
        The color of the lines. Any valid CSS color string will work here, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the grid lines.
        @member {string}
        */
        dashType?: string;
        /**
        The visibility of the lines.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The width of the lines.
        @member {number}
        */
        width?: number;
        /**
        The step of the category axis major grid lines.
        @member {number}
        */
        step?: number;
        /**
        The skip of the category axis major grid lines.
        @member {number}
        */
        skip?: number;
    }

    interface SparklineCategoryAxisItemMajorTicks {
        /**
        The axis major tick size. This is the length of the line in pixels that is drawn to indicate the tick
on the chart.
        @member {number}
        */
        size?: number;
        /**
        The visibility of the major ticks.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The color of the category axis major ticks lines. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The width of the major ticks in pixels.
        @member {number}
        */
        width?: number;
        /**
        The step of the category axis major ticks.
        @member {number}
        */
        step?: number;
        /**
        The skip of the category axis major ticks.
        @member {number}
        */
        skip?: number;
    }

    interface SparklineCategoryAxisItemMinorGridLines {
        /**
        The color of the lines. Any valid CSS color string will work here, including hex and
rgb.Note that this setting has no effect if the visibility of the minor
grid lines is not set to true.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the grid lines.
        @member {string}
        */
        dashType?: string;
        /**
        The visibility of the lines.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The width of the lines.Note that this setting has no effect if the visibility of the minor
grid lines is not set to true.
        @member {number}
        */
        width?: number;
        /**
        The step of the category axis minor grid lines.
        @member {number}
        */
        step?: number;
        /**
        The skip of the category axis minor grid lines.
        @member {number}
        */
        skip?: number;
    }

    interface SparklineCategoryAxisItemMinorTicks {
        /**
        The axis minor tick size. This is the length of the line in pixels that is drawn to indicate the tick
on the chart.
        @member {number}
        */
        size?: number;
        /**
        The visibility of the minor ticks.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The color of the category axis minor ticks lines. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The width of the minor ticks in pixels.
        @member {number}
        */
        width?: number;
        /**
        The step of the category axis minor ticks.
        @member {number}
        */
        step?: number;
        /**
        The skip of the category axis minor ticks.
        @member {number}
        */
        skip?: number;
    }

    interface SparklineCategoryAxisItemNotesDataItemIconBorder {
        /**
        The border color of the icon.
        @member {string}
        */
        color?: string;
        /**
        The border width of the icon.
        @member {number}
        */
        width?: number;
    }

    interface SparklineCategoryAxisItemNotesDataItemIcon {
        /**
        The background color of the note icon.
        @member {string}
        */
        background?: string;
        /**
        The border of the icon.
        @member {SparklineCategoryAxisItemNotesDataItemIconBorder}
        */
        border?: SparklineCategoryAxisItemNotesDataItemIconBorder;
        /**
        The size of the icon.
        @member {number}
        */
        size?: number;
        /**
        The icon shape.The supported values are:
* "circle" - the marker shape is circle.
* "square" - the marker shape is square.
* "triangle" - the marker shape is triangle.
        @member {string}
        */
        type?: string;
        /**
        The icon visibility.
        @member {boolean}
        */
        visible?: boolean;
    }

    interface SparklineCategoryAxisItemNotesDataItemLabelBorder {
        /**
        The color of the border. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the border.The following dash types are supported:
        @member {string}
        */
        dashType?: string;
        /**
        The width of the border in pixels. By default the border width is set to zero which means that the border will not appear.
        @member {number}
        */
        width?: number;
    }

    interface SparklineCategoryAxisItemNotesDataItemLabel {
        /**
        The background color of the label. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        background?: string;
        /**
        The border of the label.
        @member {SparklineCategoryAxisItemNotesDataItemLabelBorder}
        */
        border?: SparklineCategoryAxisItemNotesDataItemLabelBorder;
        /**
        The text color of the note label. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The font style of the note label.
        @member {string}
        */
        font?: string;
        /**
        The template which renders the labels.The fields which can be used in the template are:
        @member {any}
        */
        template?: any;
        /**
        If set to true the chart will display the category notes label. By default the category notes label are visible.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The rotation angle of the label. By default the label are not rotated.
        @member {number}
        */
        rotation?: number;
        /**
        The format used to display the note label. Uses kendo.format. Contains one placeholder ("{0}") which represents the category value.
        @member {string}
        */
        format?: string;
        /**
        The label note text.
        @member {string}
        */
        text?: string;
        /**
        The position of the category axis note label.
        @member {string}
        */
        position?: string;
    }

    interface SparklineCategoryAxisItemNotesDataItemLine {
        /**
        The line width of the note.
        @member {number}
        */
        width?: number;
        /**
        The line color of the note.
        @member {string}
        */
        color?: string;
        /**
        The line length of the note.
        @member {number}
        */
        length?: number;
    }

    interface SparklineCategoryAxisItemNotesDataItem {
        /**
        The value of the note.
        @member {any}
        */
        value?: any;
        /**
        The position of the category axis note.
        @member {string}
        */
        position?: string;
        /**
        The icon of the note.
        @member {SparklineCategoryAxisItemNotesDataItemIcon}
        */
        icon?: SparklineCategoryAxisItemNotesDataItemIcon;
        /**
        The label of the note.
        @member {SparklineCategoryAxisItemNotesDataItemLabel}
        */
        label?: SparklineCategoryAxisItemNotesDataItemLabel;
        /**
        The line of the note.
        @member {SparklineCategoryAxisItemNotesDataItemLine}
        */
        line?: SparklineCategoryAxisItemNotesDataItemLine;
    }

    interface SparklineCategoryAxisItemNotesIconBorder {
        /**
        The border color of the icon.
        @member {string}
        */
        color?: string;
        /**
        The border width of the icon.
        @member {number}
        */
        width?: number;
    }

    interface SparklineCategoryAxisItemNotesIcon {
        /**
        The background color of the notes icon.
        @member {string}
        */
        background?: string;
        /**
        The border of the icon.
        @member {SparklineCategoryAxisItemNotesIconBorder}
        */
        border?: SparklineCategoryAxisItemNotesIconBorder;
        /**
        The size of the icon.
        @member {number}
        */
        size?: number;
        /**
        The icon shape.The supported values are:
* "circle" - the marker shape is circle.
* "square" - the marker shape is square.
* "triangle" - the marker shape is triangle.
        @member {string}
        */
        type?: string;
        /**
        The icon visibility.
        @member {boolean}
        */
        visible?: boolean;
    }

    interface SparklineCategoryAxisItemNotesLabelBorder {
        /**
        The color of the border. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the border.The following dash types are supported:
        @member {string}
        */
        dashType?: string;
        /**
        The width of the border in pixels. By default the border width is set to zero which means that the border will not appear.
        @member {number}
        */
        width?: number;
    }

    interface SparklineCategoryAxisItemNotesLabel {
        /**
        The background color of the label. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        background?: string;
        /**
        The border of the label.
        @member {SparklineCategoryAxisItemNotesLabelBorder}
        */
        border?: SparklineCategoryAxisItemNotesLabelBorder;
        /**
        The text color of the label. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The font style of the label.
        @member {string}
        */
        font?: string;
        /**
        The template which renders the labels.The fields which can be used in the template are:
        @member {any}
        */
        template?: any;
        /**
        If set to true the chart will display the category notes label. By default the category notes label are visible.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The rotation angle of the label. By default the label are not rotated.
        @member {number}
        */
        rotation?: number;
        /**
        The format used to display the notes label. Uses kendo.format. Contains one placeholder ("{0}") which represents the category value.
        @member {string}
        */
        format?: string;
        /**
        The position of the labels.
        @member {string}
        */
        position?: string;
    }

    interface SparklineCategoryAxisItemNotesLine {
        /**
        The line width of the notes.
        @member {number}
        */
        width?: number;
        /**
        The line color of the notes.
        @member {string}
        */
        color?: string;
        /**
        The line length of the notes.
        @member {number}
        */
        length?: number;
    }

    interface SparklineCategoryAxisItemNotes {
        /**
        The position of the category axis note.
        @member {string}
        */
        position?: string;
        /**
        The icon of the notes.
        @member {SparklineCategoryAxisItemNotesIcon}
        */
        icon?: SparklineCategoryAxisItemNotesIcon;
        /**
        The label of the notes.
        @member {SparklineCategoryAxisItemNotesLabel}
        */
        label?: SparklineCategoryAxisItemNotesLabel;
        /**
        The line of the notes.
        @member {SparklineCategoryAxisItemNotesLine}
        */
        line?: SparklineCategoryAxisItemNotesLine;
        data?: SparklineCategoryAxisItemNotesDataItem[];
    }

    interface SparklineCategoryAxisItemPlotBand {
        /**
        The start position of the plot band in axis units.
        @member {number}
        */
        from?: number;
        /**
        The end position of the plot band in axis units.
        @member {number}
        */
        to?: number;
        /**
        The color of the plot band.
        @member {string}
        */
        color?: string;
        /**
        The opacity of the plot band.
        @member {number}
        */
        opacity?: number;
    }

    interface SparklineCategoryAxisItemTitleBorder {
        /**
        The color of the border. Any valid CSS color string will work here, including
hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the border.
        @member {string}
        */
        dashType?: string;
        /**
        The width of the border.
        @member {number}
        */
        width?: number;
    }

    interface SparklineCategoryAxisItemTitle {
        /**
        The background color of the title. Any valid CSS color string will work here, including
hex and rgb.
        @member {string}
        */
        background?: string;
        /**
        The border of the title.
        @member {SparklineCategoryAxisItemTitleBorder}
        */
        border?: SparklineCategoryAxisItemTitleBorder;
        /**
        The text color of the title. Any valid CSS color string will work here, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The font style of the title.
        @member {string}
        */
        font?: string;
        /**
        The margin of the title.
        @member {any}
        */
        margin?: any;
        /**
        The position of the title.
        @member {string}
        */
        position?: string;
        /**
        The rotation angle of the title.
        @member {number}
        */
        rotation?: number;
        /**
        The text of the title.
        @member {string}
        */
        text?: string;
        /**
        The visibility of the title.
        @member {boolean}
        */
        visible?: boolean;
    }

    interface SparklineCategoryAxisItem {
        /**
        Category index at which the first value axis crosses this axis. (Only for object)Category indicies at which the value axes cross the category axis. (Only for array)Note: Specify an index greater than or equal to the number
of categories to denote the far end of the axis.
        @member {any}
        */
        axisCrossingValue?: any;
        /**
        Array of category names.
        @member {any}
        */
        categories?: any;
        /**
        Color to apply to all axis elements. Any valid CSS color string will work here, including hex and rgb.
Individual color settings for line and labels take priority.
        @member {string}
        */
        color?: string;
        /**
        The data field containing the category name.
        @member {string}
        */
        field?: string;
        /**
        Positions categories and series points on major ticks. This removes the empty space before and after the series.This option is ignored if either bar or column series are plotted on the axis.
        @member {boolean}
        */
        justified?: boolean;
        /**
        Configures the axis labels.
        @member {SparklineCategoryAxisItemLabels}
        */
        labels?: SparklineCategoryAxisItemLabels;
        /**
        Configures the axis line. This will also effect major and minor ticks, but not gridlines.
        @member {SparklineCategoryAxisItemLine}
        */
        line?: SparklineCategoryAxisItemLine;
        /**
        Configures the major grid lines.
These are the lines that are an extension of the major ticks through the body of the chart.
        @member {SparklineCategoryAxisItemMajorGridLines}
        */
        majorGridLines?: SparklineCategoryAxisItemMajorGridLines;
        /**
        The major ticks of the axis.
        @member {SparklineCategoryAxisItemMajorTicks}
        */
        majorTicks?: SparklineCategoryAxisItemMajorTicks;
        /**
        Configures the minor grid lines.  These are the lines that are an extension of the minor ticks through
the body of the chart.Note that minor grid lines are not visible by default, therefore none of these settings will take effect with the minor grid lines visibility being set to true.
        @member {SparklineCategoryAxisItemMinorGridLines}
        */
        minorGridLines?: SparklineCategoryAxisItemMinorGridLines;
        /**
        The minor ticks of the axis.
        @member {SparklineCategoryAxisItemMinorTicks}
        */
        minorTicks?: SparklineCategoryAxisItemMinorTicks;
        /**
        The unique axis name.
        @member {string}
        */
        name?: string;
        plotBands?: SparklineCategoryAxisItemPlotBand[];
        /**
        Reverses the axis direction -
categories are listed from right to left and from top to bottom.
        @member {boolean}
        */
        reverse?: boolean;
        /**
        The title of the category axis.
        @member {SparklineCategoryAxisItemTitle}
        */
        title?: SparklineCategoryAxisItemTitle;
        /**
        The axis type.
        @member {string}
        */
        type?: string;
        /**
        Specifies the discrete baseUnitStep values when
either baseUnit is set to "fit" or baseUnitStep is set to "auto".The default configuration is as follows:Each setting can be overriden individually.
        @member {any}
        */
        autoBaseUnitSteps?: any;
        /**
        The base time interval for the axis.
The default baseUnit is determined automatically from the minimum difference
between subsequent categories. Available options:Setting baseUnit to "fit" will set such base unit and baseUnitStep
that the total number of categories does not exceed maxDateGroups.Series data is aggregated for the specified base unit by using the
series.aggregate function.
        @member {string}
        */
        baseUnit?: string;
        /**
        Sets the step (interval) between categories in base units.
Specifiying "auto" will set the step to such value that the total number of categories does not exceed maxDateGroups.This option is ignored if baseUnit is set to "fit".
        @member {any}
        */
        baseUnitStep?: any;
        /**
        The last date displayed on the axis.
By default, the minimum date is the same as the last category.
This is often used in combination with the min and roundToBaseUnit configuration options to
set up a fixed date range.
        @member {any}
        */
        max?: any;
        /**
        The first date displayed on the axis.
By default, the minimum date is the same as the first category.
This is often used in combination with the max and roundToBaseUnit configuration options to
set up a fixed date range.
        @member {any}
        */
        min?: any;
        /**
        By default, the first and last dates will be rounded off to the nearest base unit.
Specifying false for this option will disable this behavior.This option is most useful in combination with explicit min and max dates.It will be ignored if either bar or column series are plotted on the axis.
        @member {boolean}
        */
        roundToBaseUnit?: boolean;
        /**
        Specifies the week start day when baseUnit is set to "weeks".
Use the kendo.days constants to specify the day by name.
        @member {number}
        */
        weekStartDay?: number;
        /**
        Specifies the maximum number of groups (categories) to produce when
either baseUnit is set to "fit" or baseUnitStep is set to "auto".This option is ignored in all other cases.
        @member {number}
        */
        maxDateGroups?: number;
        /**
        The visibility of the axis.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The crosshair configuration options.
        @member {SparklineCategoryAxisItemCrosshair}
        */
        crosshair?: SparklineCategoryAxisItemCrosshair;
        /**
        The category axis notes configuration.
        @member {SparklineCategoryAxisItemNotes}
        */
        notes?: SparklineCategoryAxisItemNotes;
    }

    interface SparklineChartAreaBorder {
        /**
        The color of the border.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the border.
        @member {string}
        */
        dashType?: string;
        /**
        The width of the border.
        @member {number}
        */
        width?: number;
    }

    interface SparklineChartArea {
        /**
        The background color of the chart area.
        @member {string}
        */
        background?: string;
        /**
        The background opacity of the chart area.
        @member {number}
        */
        opacity?: number;
        /**
        The border of the chart area.
        @member {SparklineChartAreaBorder}
        */
        border?: SparklineChartAreaBorder;
        /**
        The height of the chart area.
        @member {number}
        */
        height?: number;
        /**
        The margin of the chart area.
        @member {any}
        */
        margin?: any;
        /**
        The width of the chart area.
        @member {number}
        */
        width?: number;
    }

    interface SparklinePlotAreaBorder {
        /**
        The color of the border.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the border.
        @member {string}
        */
        dashType?: string;
        /**
        The width of the border.
        @member {number}
        */
        width?: number;
    }

    interface SparklinePlotArea {
        /**
        The background color of the plot area.
        @member {string}
        */
        background?: string;
        /**
        The background opacity of the plot area.
        @member {number}
        */
        opacity?: number;
        /**
        The border of the plot area.
        @member {SparklinePlotAreaBorder}
        */
        border?: SparklinePlotAreaBorder;
        /**
        The margin of the plot area.
        @member {any}
        */
        margin?: any;
    }

    interface SparklineSeriesItemBorder {
        /**
        The color of the border.  It defaults to the color of the current series.
        @member {any}
        */
        color?: any;
        /**
        The dash type of the border.
        @member {any}
        */
        dashType?: any;
        /**
        The border opacity.
        @member {any}
        */
        opacity?: any;
        /**
        The width of the border.
        @member {any}
        */
        width?: any;
    }

    interface SparklineSeriesItemConnectors {
        /**
        The color of the connector line.
        @member {string}
        */
        color?: string;
        /**
        The padding between the connector line and the label, and connector line and pie chart.
        @member {number}
        */
        padding?: number;
        /**
        The width of the connector line.
        @member {number}
        */
        width?: number;
    }

    interface SparklineSeriesItemHighlightBorder {
        /**
        The width of the border.
        @member {number}
        */
        width?: number;
        /**
        The border color.
        @member {string}
        */
        color?: string;
        /**
        The border opacity.
        @member {number}
        */
        opacity?: number;
    }

    interface SparklineSeriesItemHighlight {
        /**
        The border of highlighted points. The color is computed automatically from the base point color.** Applicable to pie series. **
        @member {SparklineSeriesItemHighlightBorder}
        */
        border?: SparklineSeriesItemHighlightBorder;
        /**
        The highlight color.** Available only for pie series **
        @member {string}
        */
        color?: string;
        /**
        The opacity of the highlighted points.** Applicable to pie series. **
        @member {number}
        */
        opacity?: number;
        /**
        A value indicating if the series points should be highlighted.
        @member {boolean}
        */
        visible?: boolean;
    }

    interface SparklineSeriesItemLabelsBorder {
        /**
        The color of the border.
        @member {any}
        */
        color?: any;
        /**
        The dash type of the border.
        @member {any}
        */
        dashType?: any;
        /**
        The width of the border.
        @member {any}
        */
        width?: any;
    }

    interface SparklineSeriesItemLabels {
        /**
        Defines the alignment of the labels.** Available for pie series. **
        @member {string}
        */
        align?: string;
        /**
        The background color of the labels.
        @member {any}
        */
        background?: any;
        /**
        The border of the labels.
        @member {SparklineSeriesItemLabelsBorder}
        */
        border?: SparklineSeriesItemLabelsBorder;
        /**
        The text color of the labels.
        @member {any}
        */
        color?: any;
        /**
        The distance of the labels.** Available for pie series. **
        @member {number}
        */
        distance?: number;
        /**
        The font style of the labels.
        @member {any}
        */
        font?: any;
        /**
        The format of the labels.
        @member {any}
        */
        format?: any;
        /**
        The margin of the labels.
        @member {any}
        */
        margin?: any;
        /**
        The padding of the labels.
        @member {any}
        */
        padding?: any;
        /**
        Defines the position of the labels.
        @member {any}
        */
        position?: any;
        /**
        The template which renders the chart series label.The fields which can be used in the template are:
        @member {any}
        */
        template?: any;
        /**
        The visibility of the labels.
        @member {any}
        */
        visible?: any;
    }

    interface SparklineSeriesItemLine {
        /**
        The line color.
        @member {string}
        */
        color?: string;
        /**
        The line opacity.
        @member {number}
        */
        opacity?: number;
        /**
        The line width.
        @member {string}
        */
        width?: string;
        /**
        The supported values are:
        @member {string}
        */
        style?: string;
    }

    interface SparklineSeriesItemMarkersBorder {
        /**
        The color of the border.
        @member {any}
        */
        color?: any;
        /**
        The width of the border.
        @member {any}
        */
        width?: any;
    }

    interface SparklineSeriesItemMarkers {
        /**
        The background color of the current series markers.
        @member {any}
        */
        background?: any;
        /**
        The border of the markers.
        @member {SparklineSeriesItemMarkersBorder}
        */
        border?: SparklineSeriesItemMarkersBorder;
        /**
        The marker size.
        @member {any}
        */
        size?: any;
        /**
        Configures the markers shape type.
        @member {any}
        */
        type?: any;
        /**
        The markers visibility.
        @member {any}
        */
        visible?: any;
        /**
        The rotation angle of the markers.
        @member {any}
        */
        rotation?: any;
    }

    interface SparklineSeriesItemNotesIconBorder {
        /**
        The border color of the icon.
        @member {string}
        */
        color?: string;
        /**
        The border width of the icon.
        @member {number}
        */
        width?: number;
    }

    interface SparklineSeriesItemNotesIcon {
        /**
        The background color of the notes icon.
        @member {string}
        */
        background?: string;
        /**
        The border of the icon.
        @member {SparklineSeriesItemNotesIconBorder}
        */
        border?: SparklineSeriesItemNotesIconBorder;
        /**
        The size of the icon.
        @member {number}
        */
        size?: number;
        /**
        The icon shape.The supported values are:
* "circle" - the marker shape is circle.
* "square" - the marker shape is square.
* "triangle" - the marker shape is triangle.
        @member {string}
        */
        type?: string;
        /**
        The icon visibility.
        @member {boolean}
        */
        visible?: boolean;
    }

    interface SparklineSeriesItemNotesLabelBorder {
        /**
        The color of the border. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the border.The following dash types are supported:
        @member {string}
        */
        dashType?: string;
        /**
        The width of the border in pixels. By default the border width is set to zero which means that the border will not appear.
        @member {number}
        */
        width?: number;
    }

    interface SparklineSeriesItemNotesLabel {
        /**
        The background color of the label. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        background?: string;
        /**
        The border of the label.
        @member {SparklineSeriesItemNotesLabelBorder}
        */
        border?: SparklineSeriesItemNotesLabelBorder;
        /**
        The text color of the label. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The font style of the label.
        @member {string}
        */
        font?: string;
        /**
        The template which renders the labels.The fields which can be used in the template are:
        @member {any}
        */
        template?: any;
        /**
        If set to true the chart will display the series notes label. By default the series notes label are visible.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The rotation angle of the label. By default the label are not rotated.
        @member {number}
        */
        rotation?: number;
        /**
        The format used to display the notes label. Uses kendo.format. Contains one placeholder ("{0}") which represents the axis value.
        @member {string}
        */
        format?: string;
        /**
        The position of the labels.
        @member {string}
        */
        position?: string;
    }

    interface SparklineSeriesItemNotesLine {
        /**
        The line width of the notes.
        @member {number}
        */
        width?: number;
        /**
        The line color of the notes.
        @member {string}
        */
        color?: string;
        /**
        The line length of the notes.
        @member {number}
        */
        length?: number;
    }

    interface SparklineSeriesItemNotes {
        /**
        The position of the series note.
        @member {string}
        */
        position?: string;
        /**
        The icon of the notes.
        @member {SparklineSeriesItemNotesIcon}
        */
        icon?: SparklineSeriesItemNotesIcon;
        /**
        The label of the notes.
        @member {SparklineSeriesItemNotesLabel}
        */
        label?: SparklineSeriesItemNotesLabel;
        /**
        The line of the notes.
        @member {SparklineSeriesItemNotesLine}
        */
        line?: SparklineSeriesItemNotesLine;
    }

    interface SparklineSeriesItemOverlay {
        /**
        The gradient name.Available options:
        @member {string}
        */
        gradient?: string;
    }

    interface SparklineSeriesItemStack {
        /**
        The type of stack to plot. The following types are supported:
        @member {string}
        */
        type?: string;
        /**
        Indicates that the series should be stacked in a group with the specified name.
        @member {string}
        */
        group?: string;
    }

    interface SparklineSeriesItemTargetBorder {
        /**
        The color of the border.
        @member {any}
        */
        color?: any;
        /**
        The dash type of the border.
        @member {any}
        */
        dashType?: any;
        /**
        The width of the border.
        @member {number}
        */
        width?: number;
    }

    interface SparklineSeriesItemTargetLine {
        /**
        The width of the line.
        @member {any}
        */
        width?: any;
    }

    interface SparklineSeriesItemTarget {
        /**
        The target line.
        @member {SparklineSeriesItemTargetLine}
        */
        line?: SparklineSeriesItemTargetLine;
        /**
        The target color.
        @member {any}
        */
        color?: any;
        /**
        The border of the target.
        @member {SparklineSeriesItemTargetBorder}
        */
        border?: SparklineSeriesItemTargetBorder;
    }

    interface SparklineSeriesItemTooltipBorder {
        /**
        The color of the border.
        @member {string}
        */
        color?: string;
        /**
        The width of the border.
        @member {number}
        */
        width?: number;
    }

    interface SparklineSeriesItemTooltip {
        /**
        The background color of the tooltip. The default is determined from the series color.
        @member {string}
        */
        background?: string;
        /**
        The border configuration options.
        @member {SparklineSeriesItemTooltipBorder}
        */
        border?: SparklineSeriesItemTooltipBorder;
        /**
        The text color of the tooltip. The default is the same as the series labels color.
        @member {string}
        */
        color?: string;
        /**
        The tooltip font.
        @member {string}
        */
        font?: string;
        /**
        The tooltip format. Format variables depend on the series type:
        @member {string}
        */
        format?: string;
        /**
        The padding of the tooltip.
        @member {any}
        */
        padding?: any;
        /**
        The tooltip template.
Template variables:
        @member {any}
        */
        template?: any;
        /**
        A value indicating if the tooltip should be displayed.
        @member {boolean}
        */
        visible?: boolean;
    }

    interface SparklineSeriesItem {
        /**
        The type of the series. Available types:
        @member {string}
        */
        type?: string;
        /**
        The series line dash type.** Applicable only to line series **
        @member {string}
        */
        dashType?: string;
        /**
        Array of data items. The data item type can be either a:
        @member {any}
        */
        data?: any;
        /**
        The data field containing a boolean value that indicates if the sector is exploded.** Available for pie series **
        @member {string}
        */
        explodeField?: string;
        /**
        The data field containing the current value.** Available for bullet and verticalBullet series. **
        @member {string}
        */
        currentField?: string;
        /**
        The data field containing the target value.** Available for bullet and verticalBullet series. **** Available for pie series **
        @member {string}
        */
        targetField?: string;
        /**
        The data field containing the series value.
        @member {string}
        */
        field?: string;
        /**
        The series name.The name can also be a template which sets the name of the series when bound to grouped data source.The fields which can be used in the template are:
        @member {string}
        */
        name?: string;
        /**
        Configures the appearance of highlighted points.
        @member {SparklineSeriesItemHighlight}
        */
        highlight?: SparklineSeriesItemHighlight;
        /**
        The aggregate function to apply for date series.This function is used when a category (an year, month, etc.) contains two or more points.
The function return value is displayed instead of the individual points.The supported values are:
        @member {string}
        */
        aggregate?: string;
        /**
        The name of the value axis to use.** Applicable to area, bar, column and line series **
        @member {string}
        */
        axis?: string;
        /**
        The border of the points.** Applicable to bar, column and pie series **
        @member {SparklineSeriesItemBorder}
        */
        border?: SparklineSeriesItemBorder;
        /**
        The data field containing the point category name.** Applicable to pie series. **
        @member {string}
        */
        categoryField?: string;
        /**
        The series base color. The supported values are:
        @member {any}
        */
        color?: any;
        /**
        The data field containing the point color.** Applicable for bar, column and pie series. **
        @member {string}
        */
        colorField?: string;
        /**
        The label connectors options.** Applicable to pie series. **
        @member {SparklineSeriesItemConnectors}
        */
        connectors?: SparklineSeriesItemConnectors;
        /**
        The distance between category clusters.** Applicable for bar and column series. **
        @member {number}
        */
        gap?: number;
        /**
        Configures the series data labels.
        @member {SparklineSeriesItemLabels}
        */
        labels?: SparklineSeriesItemLabels;
        /**
        Line options.** Applicable to area series. **
        @member {SparklineSeriesItemLine}
        */
        line?: SparklineSeriesItemLine;
        /**
        Marker options.** Applicable to area and line series **
        @member {SparklineSeriesItemMarkers}
        */
        markers?: SparklineSeriesItemMarkers;
        /**
        The behavior for handling missing values. The supported values are:
        @member {string}
        */
        missingValues?: string;
        /**
        The supported values are:
        @member {string}
        */
        style?: string;
        /**
        Color to use for bars with negative values.** Applicable only to bar and column series. **
        @member {string}
        */
        negativeColor?: string;
        /**
        The series opacity.
        @member {number}
        */
        opacity?: number;
        /**
        The effects overlay.
        @member {SparklineSeriesItemOverlay}
        */
        overlay?: SparklineSeriesItemOverlay;
        /**
        The padding around the chart (equal on all sides).** Available for pie series. **
        @member {number}
        */
        padding?: number;
        /**
        The size (or radius) of the series in pixels.
If not specified, the available space is split evenly between the series.Available for only.
        @member {number}
        */
        size?: number;
        /**
        The start angle of the first segment.Available for pie series.
        @member {number}
        */
        startAngle?: number;
        /**
        Space between points as proportion of the point width.** Available for bar and column series. **
        @member {number}
        */
        spacing?: number;
        /**
        A boolean value indicating if the series should be stacked.
A string value is interpreted as series.stack.group.
        @member {SparklineSeriesItemStack}
        */
        stack?: SparklineSeriesItemStack;
        /**
        The data point tooltip configuration options.
        @member {SparklineSeriesItemTooltip}
        */
        tooltip?: SparklineSeriesItemTooltip;
        /**
        The line width.** Available for line series **
        @member {number}
        */
        width?: number;
        /**
        The target of the bullet chart.
        @member {SparklineSeriesItemTarget}
        */
        target?: SparklineSeriesItemTarget;
        /**
        The series notes configuration.
        @member {SparklineSeriesItemNotes}
        */
        notes?: SparklineSeriesItemNotes;
    }

    interface SparklineSeriesDefaultsBorder {
        /**
        The color of the border.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the border.
        @member {string}
        */
        dashType?: string;
        /**
        The width of the border.
        @member {number}
        */
        width?: number;
    }

    interface SparklineSeriesDefaultsLabelsBorder {
        /**
        The color of the border.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the border.
        @member {string}
        */
        dashType?: string;
        /**
        The width of the border.
        @member {number}
        */
        width?: number;
    }

    interface SparklineSeriesDefaultsLabels {
        /**
        The background color of the labels. Any valid CSS color string will work here,
including hex and rgb.
        @member {string}
        */
        background?: string;
        /**
        The border of the labels.
        @member {SparklineSeriesDefaultsLabelsBorder}
        */
        border?: SparklineSeriesDefaultsLabelsBorder;
        /**
        The text color of the labels. Any valid CSS color string will work here, including hex
and rgb.
        @member {string}
        */
        color?: string;
        /**
        The font style of the labels.
labels
        @member {string}
        */
        font?: string;
        /**
        The format of the labels.
        @member {string}
        */
        format?: string;
        /**
        The margin of the labels.
        @member {any}
        */
        margin?: any;
        /**
        The padding of the labels.
        @member {any}
        */
        padding?: any;
        /**
        The label template.
Template variables:
        @member {any}
        */
        template?: any;
        /**
        The visibility of the labels.
        @member {boolean}
        */
        visible?: boolean;
    }

    interface SparklineSeriesDefaultsStack {
        /**
        The type of stack to plot. The following types are supported:
        @member {string}
        */
        type?: string;
    }

    interface SparklineSeriesDefaultsTooltipBorder {
        /**
        The color of the border.
        @member {string}
        */
        color?: string;
        /**
        The width of the border.
        @member {number}
        */
        width?: number;
    }

    interface SparklineSeriesDefaultsTooltip {
        /**
        The background color of the tooltip. The default is determined from the series color.
        @member {string}
        */
        background?: string;
        /**
        The border configuration options.
        @member {SparklineSeriesDefaultsTooltipBorder}
        */
        border?: SparklineSeriesDefaultsTooltipBorder;
        /**
        The text color of the tooltip. The default is the same as the series labels color.
        @member {string}
        */
        color?: string;
        /**
        The tooltip font.
        @member {string}
        */
        font?: string;
        /**
        The tooltip format.
        @member {string}
        */
        format?: string;
        /**
        The padding of the tooltip.
        @member {any}
        */
        padding?: any;
        /**
        The tooltip template.
Template variables:
        @member {any}
        */
        template?: any;
        /**
        A value indicating if the tooltip should be displayed.
        @member {boolean}
        */
        visible?: boolean;
    }

    interface SparklineSeriesDefaults {
        /**
        The area configuration options.
The default options for all area series. For more details see the series options.
        @member {any}
        */
        area?: any;
        /**
        The default options for all bar series. For more details see the series options.
        @member {any}
        */
        bar?: any;
        /**
        The border of the series.
        @member {SparklineSeriesDefaultsBorder}
        */
        border?: SparklineSeriesDefaultsBorder;
        /**
        The column configuration options.
The default options for all column series. For more details see the series options.
        @member {any}
        */
        column?: any;
        /**
        The distance between category clusters.
        @member {number}
        */
        gap?: number;
        /**
        Configures the series data labels.
        @member {SparklineSeriesDefaultsLabels}
        */
        labels?: SparklineSeriesDefaultsLabels;
        /**
        The line configuration options.
The default options for all line series. For more details see the series options.
        @member {any}
        */
        line?: any;
        /**
        The effects overlay.
        @member {any}
        */
        overlay?: any;
        /**
        The pie configuration options.
The default options for all pie series. For more details see the series options.
        @member {any}
        */
        pie?: any;
        /**
        Space between bars.
        @member {number}
        */
        spacing?: number;
        /**
        A boolean value indicating if the series should be stacked.
        @member {SparklineSeriesDefaultsStack}
        */
        stack?: SparklineSeriesDefaultsStack;
        /**
        The type of the series. Available types:
        @member {string}
        */
        type?: string;
        /**
        The data point tooltip configuration options.
        @member {SparklineSeriesDefaultsTooltip}
        */
        tooltip?: SparklineSeriesDefaultsTooltip;
    }

    interface SparklineTooltipBorder {
        /**
        The color of the border.
        @member {string}
        */
        color?: string;
        /**
        The width of the border.
        @member {number}
        */
        width?: number;
    }

    interface SparklineTooltip {
        /**
        The background color of the tooltip. The default is determined from the series color.
        @member {string}
        */
        background?: string;
        /**
        The border configuration options.
        @member {SparklineTooltipBorder}
        */
        border?: SparklineTooltipBorder;
        /**
        The text color of the tooltip. The default is the same as the series labels color.
        @member {string}
        */
        color?: string;
        /**
        The tooltip font.
        @member {string}
        */
        font?: string;
        /**
        The tooltip format.
        @member {string}
        */
        format?: string;
        /**
        The padding of the tooltip.
        @member {any}
        */
        padding?: any;
        /**
        The tooltip template.
Template variables:
        @member {any}
        */
        template?: any;
        /**
        A value indicating if the tooltip should be displayed.
        @member {boolean}
        */
        visible?: boolean;
        /**
        A value indicating if the tooltip should be shared.
        @member {boolean}
        */
        shared?: boolean;
        /**
        The shared tooltip template.
Template variables:
        @member {string}
        */
        sharedTemplate?: string;
    }

    interface SparklineValueAxisItemCrosshairTooltipBorder {
        /**
        The color of the border.
        @member {string}
        */
        color?: string;
        /**
        The width of the border.
        @member {number}
        */
        width?: number;
    }

    interface SparklineValueAxisItemCrosshairTooltip {
        /**
        The background color of the tooltip.
        @member {string}
        */
        background?: string;
        /**
        The border configuration options.
        @member {SparklineValueAxisItemCrosshairTooltipBorder}
        */
        border?: SparklineValueAxisItemCrosshairTooltipBorder;
        /**
        The text color of the tooltip.
        @member {string}
        */
        color?: string;
        /**
        The tooltip font.
        @member {string}
        */
        font?: string;
        /**
        The tooltip format.
        @member {string}
        */
        format?: string;
        /**
        The padding of the tooltip.
        @member {any}
        */
        padding?: any;
        /**
        The tooltip template.
Template variables:
        @member {any}
        */
        template?: any;
        /**
        A value indicating if the tooltip should be displayed.
        @member {boolean}
        */
        visible?: boolean;
    }

    interface SparklineValueAxisItemCrosshair {
        /**
        The color of the crosshair.
        @member {string}
        */
        color?: string;
        /**
        The width of the crosshair.
        @member {number}
        */
        width?: number;
        /**
        The opacity of the crosshair.
        @member {number}
        */
        opacity?: number;
        /**
        The dash type of the crosshair.
        @member {number}
        */
        dashType?: number;
        /**
        The dash type of the crosshair.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The crosshar tooltip configuration options.
        @member {SparklineValueAxisItemCrosshairTooltip}
        */
        tooltip?: SparklineValueAxisItemCrosshairTooltip;
    }

    interface SparklineValueAxisItemLabelsBorder {
        /**
        The color of the border. Any valid CSS color string will work here, including
hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the border.
        @member {string}
        */
        dashType?: string;
        /**
        The width of the border.
        @member {number}
        */
        width?: number;
    }

    interface SparklineValueAxisItemLabels {
        /**
        The background color of the labels. Any valid CSS color string will work here, including
hex and rgb
        @member {string}
        */
        background?: string;
        /**
        The border of the labels.
        @member {SparklineValueAxisItemLabelsBorder}
        */
        border?: SparklineValueAxisItemLabelsBorder;
        /**
        The text color of the labels. Any valid CSS color string will work here, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The font style of the labels.
        @member {string}
        */
        font?: string;
        /**
        The format of the labels.
        @member {string}
        */
        format?: string;
        /**
        The margin of the labels.
        @member {any}
        */
        margin?: any;
        /**
        Mirrors the axis labels and ticks.
If the labels are normally on the left side of the axis,
mirroring the axis will render them to the right.
        @member {boolean}
        */
        mirror?: boolean;
        /**
        The padding of the labels.
        @member {any}
        */
        padding?: any;
        /**
        The rotation angle of the labels.
        @member {number}
        */
        rotation?: number;
        /**
        Number of labels to skip.
Skips rendering the first n labels.
        @member {number}
        */
        skip?: number;
        /**
        Label rendering step.
Every n-th label is rendered where n is the step
        @member {number}
        */
        step?: number;
        /**
        The label template.
Template variables:
        @member {any}
        */
        template?: any;
        /**
        The visibility of the labels.
        @member {boolean}
        */
        visible?: boolean;
    }

    interface SparklineValueAxisItemLine {
        /**
        The color of the line. This will also effect the major and minor ticks, but
not the grid lines.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the line.
        @member {string}
        */
        dashType?: string;
        /**
        The visibility of the line.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The width of the line. This will also effect the major and minor ticks, but
not the grid lines.
        @member {number}
        */
        width?: number;
    }

    interface SparklineValueAxisItemMajorGridLines {
        /**
        The color of the lines.
        @member {string}
        */
        color?: string;
        /**
        The visibility of the lines.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The width of the lines.
        @member {number}
        */
        width?: number;
        /**
        The step of the value axis major grid lines.
        @member {number}
        */
        step?: number;
        /**
        The skip of the value axis major grid lines.
        @member {number}
        */
        skip?: number;
    }

    interface SparklineValueAxisItemMajorTicks {
        /**
        The axis major tick size. This is the length of the line in pixels that is drawn to indicate the tick on the chart.
        @member {number}
        */
        size?: number;
        /**
        The visibility of the major ticks.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The color of the value axis major ticks lines. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The width of the major ticks in pixels.
        @member {number}
        */
        width?: number;
        /**
        The step of the value axis major ticks.
        @member {number}
        */
        step?: number;
        /**
        The skip of the value axis major ticks.
        @member {number}
        */
        skip?: number;
    }

    interface SparklineValueAxisItemMinorGridLines {
        /**
        The color of the lines.Note that this has no effect if the visibility of the minor grid lines is not set to true.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the minor grid lines.
        @member {string}
        */
        dashType?: string;
        /**
        The visibility of the lines.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The width of the lines.Note that this settings has no effect if the visibility of the minor grid lines is not set to true.
        @member {number}
        */
        width?: number;
        /**
        The step of the value axis minor grid lines.
        @member {number}
        */
        step?: number;
        /**
        The skip of the value axis minor grid lines.
        @member {number}
        */
        skip?: number;
    }

    interface SparklineValueAxisItemMinorTicks {
        /**
        The axis minor tick size. This is the length of the line in pixels that is drawn to indicate the tick on the chart.
        @member {number}
        */
        size?: number;
        /**
        The color of the value axis minor ticks lines. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The width of the minor ticks in pixels.
        @member {number}
        */
        width?: number;
        /**
        The visibility of the minor ticks.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The step of the value axis minor ticks.
        @member {number}
        */
        step?: number;
        /**
        The skip of the value axis minor ticks.
        @member {number}
        */
        skip?: number;
    }

    interface SparklineValueAxisItemNotesDataItemIconBorder {
        /**
        The border color of the icon.
        @member {string}
        */
        color?: string;
        /**
        The border width of the icon.
        @member {number}
        */
        width?: number;
    }

    interface SparklineValueAxisItemNotesDataItemIcon {
        /**
        The background color of the note icon.
        @member {string}
        */
        background?: string;
        /**
        The border of the icon.
        @member {SparklineValueAxisItemNotesDataItemIconBorder}
        */
        border?: SparklineValueAxisItemNotesDataItemIconBorder;
        /**
        The size of the icon.
        @member {number}
        */
        size?: number;
        /**
        The icon shape.The supported values are:
* "circle" - the marker shape is circle.
* "square" - the marker shape is square.
* "triangle" - the marker shape is triangle.
        @member {string}
        */
        type?: string;
        /**
        The icon visibility.
        @member {boolean}
        */
        visible?: boolean;
    }

    interface SparklineValueAxisItemNotesDataItemLabelBorder {
        /**
        The color of the border. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the border.The following dash types are supported:
        @member {string}
        */
        dashType?: string;
        /**
        The width of the border in pixels. By default the border width is set to zero which means that the border will not appear.
        @member {number}
        */
        width?: number;
    }

    interface SparklineValueAxisItemNotesDataItemLabel {
        /**
        The background color of the label. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        background?: string;
        /**
        The border of the label.
        @member {SparklineValueAxisItemNotesDataItemLabelBorder}
        */
        border?: SparklineValueAxisItemNotesDataItemLabelBorder;
        /**
        The text color of the note label. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The font style of the note label.
        @member {string}
        */
        font?: string;
        /**
        The template which renders the labels.The fields which can be used in the template are:
        @member {any}
        */
        template?: any;
        /**
        If set to true the chart will display the value axis notes label. By default the value axis notes label are visible.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The rotation angle of the label. By default the label are not rotated.
        @member {number}
        */
        rotation?: number;
        /**
        The format used to display the note label. Uses kendo.format. Contains one placeholder ("{0}") which represents the axis value.
        @member {string}
        */
        format?: string;
        /**
        The label note text.
        @member {string}
        */
        text?: string;
        /**
        The position of the value axis note label.
        @member {string}
        */
        position?: string;
    }

    interface SparklineValueAxisItemNotesDataItemLine {
        /**
        The line width of the note.
        @member {number}
        */
        width?: number;
        /**
        The line color of the note.
        @member {string}
        */
        color?: string;
        /**
        The line length of the note.
        @member {number}
        */
        length?: number;
    }

    interface SparklineValueAxisItemNotesDataItem {
        /**
        The value of the note.
        @member {any}
        */
        value?: any;
        /**
        The position of the value axis note.
        @member {string}
        */
        position?: string;
        /**
        The icon of the note.
        @member {SparklineValueAxisItemNotesDataItemIcon}
        */
        icon?: SparklineValueAxisItemNotesDataItemIcon;
        /**
        The label of the note.
        @member {SparklineValueAxisItemNotesDataItemLabel}
        */
        label?: SparklineValueAxisItemNotesDataItemLabel;
        /**
        The line of the note.
        @member {SparklineValueAxisItemNotesDataItemLine}
        */
        line?: SparklineValueAxisItemNotesDataItemLine;
    }

    interface SparklineValueAxisItemNotesIconBorder {
        /**
        The border color of the icon.
        @member {string}
        */
        color?: string;
        /**
        The border width of the icon.
        @member {number}
        */
        width?: number;
    }

    interface SparklineValueAxisItemNotesIcon {
        /**
        The background color of the notes icon.
        @member {string}
        */
        background?: string;
        /**
        The border of the icon.
        @member {SparklineValueAxisItemNotesIconBorder}
        */
        border?: SparklineValueAxisItemNotesIconBorder;
        /**
        The size of the icon.
        @member {number}
        */
        size?: number;
        /**
        The icon shape.The supported values are:
* "circle" - the marker shape is circle.
* "square" - the marker shape is square.
* "triangle" - the marker shape is triangle.
        @member {string}
        */
        type?: string;
        /**
        The icon visibility.
        @member {boolean}
        */
        visible?: boolean;
    }

    interface SparklineValueAxisItemNotesLabelBorder {
        /**
        The color of the border. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the border.The following dash types are supported:
        @member {string}
        */
        dashType?: string;
        /**
        The width of the border in pixels. By default the border width is set to zero which means that the border will not appear.
        @member {number}
        */
        width?: number;
    }

    interface SparklineValueAxisItemNotesLabel {
        /**
        The background color of the label. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        background?: string;
        /**
        The border of the label.
        @member {SparklineValueAxisItemNotesLabelBorder}
        */
        border?: SparklineValueAxisItemNotesLabelBorder;
        /**
        The text color of the label. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The font style of the label.
        @member {string}
        */
        font?: string;
        /**
        The template which renders the labels.The fields which can be used in the template are:
        @member {any}
        */
        template?: any;
        /**
        If set to true the chart will display the value axis notes label. By default the value axis notes label are visible.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The rotation angle of the label. By default the label are not rotated.
        @member {number}
        */
        rotation?: number;
        /**
        The format used to display the notes label. Uses kendo.format. Contains one placeholder ("{0}") which represents the axis value.
        @member {string}
        */
        format?: string;
        /**
        The position of the labels.
        @member {string}
        */
        position?: string;
    }

    interface SparklineValueAxisItemNotesLine {
        /**
        The line width of the notes.
        @member {number}
        */
        width?: number;
        /**
        The line color of the notes.
        @member {string}
        */
        color?: string;
        /**
        The line length of the notes.
        @member {number}
        */
        length?: number;
    }

    interface SparklineValueAxisItemNotes {
        /**
        The position of the value axis note.
        @member {string}
        */
        position?: string;
        /**
        The icon of the notes.
        @member {SparklineValueAxisItemNotesIcon}
        */
        icon?: SparklineValueAxisItemNotesIcon;
        /**
        The label of the notes.
        @member {SparklineValueAxisItemNotesLabel}
        */
        label?: SparklineValueAxisItemNotesLabel;
        /**
        The line of the notes.
        @member {SparklineValueAxisItemNotesLine}
        */
        line?: SparklineValueAxisItemNotesLine;
        data?: SparklineValueAxisItemNotesDataItem[];
    }

    interface SparklineValueAxisItemPlotBand {
        /**
        The start position of the plot band in axis units.
        @member {number}
        */
        from?: number;
        /**
        The end position of the plot band in axis units.
        @member {number}
        */
        to?: number;
        /**
        The color of the plot band.
        @member {string}
        */
        color?: string;
        /**
        The opacity of the plot band.
        @member {number}
        */
        opacity?: number;
    }

    interface SparklineValueAxisItemTitleBorder {
        /**
        The color of the border.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the border.
        @member {string}
        */
        dashType?: string;
        /**
        The width of the border.
        @member {number}
        */
        width?: number;
    }

    interface SparklineValueAxisItemTitle {
        /**
        The background color of the title. Any valid CSS color string will work here, including
hex and rgb.
        @member {string}
        */
        background?: string;
        /**
        The border of the title.
        @member {SparklineValueAxisItemTitleBorder}
        */
        border?: SparklineValueAxisItemTitleBorder;
        /**
        The text color of the title. Any valid CSS color string will work here, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The font style of the title.
        @member {string}
        */
        font?: string;
        /**
        The margin of the title.
        @member {any}
        */
        margin?: any;
        /**
        The padding of the title.
        @member {any}
        */
        padding?: any;
        /**
        The position of the title.
        @member {string}
        */
        position?: string;
        /**
        The rotation angle of the title.
        @member {number}
        */
        rotation?: number;
        /**
        The text of the title.
        @member {string}
        */
        text?: string;
        /**
        The visibility of the title.
        @member {boolean}
        */
        visible?: boolean;
    }

    interface SparklineValueAxisItem {
        /**
        Value at which the category axis crosses this axis. (Only for object)Value indicies at which the category axes cross the value axis. (Only for array)Date at which the category axis crosses this axis. (Only for date)
        @member {any}
        */
        axisCrossingValue?: any;
        /**
        Color to apply to all axis elements.
Individual color settings for line and labels take priority. Any valid CSS color string will work here, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        Configures the axis labels.
        @member {SparklineValueAxisItemLabels}
        */
        labels?: SparklineValueAxisItemLabels;
        /**
        Configures the axis line. This will also affect the major and minor ticks, but not the grid lines.
        @member {SparklineValueAxisItemLine}
        */
        line?: SparklineValueAxisItemLine;
        /**
        Configures the major grid lines. These are the lines that are an extension of the major ticks through the
body of the chart.
        @member {SparklineValueAxisItemMajorGridLines}
        */
        majorGridLines?: SparklineValueAxisItemMajorGridLines;
        /**
        The major ticks of the axis.
        @member {SparklineValueAxisItemMajorTicks}
        */
        majorTicks?: SparklineValueAxisItemMajorTicks;
        /**
        The interval between major divisions.
        @member {number}
        */
        majorUnit?: number;
        /**
        The maximum value of the axis.
This is often used in combination with the min configuration option.
        @member {number}
        */
        max?: number;
        /**
        The minimum value of the axis.
This is often used in combination with the max configuration option.
        @member {number}
        */
        min?: number;
        /**
        Configures the minor grid lines.  These are the lines that are an extension of the minor ticks through the
        @member {SparklineValueAxisItemMinorGridLines}
        */
        minorGridLines?: SparklineValueAxisItemMinorGridLines;
        /**
        The minor ticks of the axis.
        @member {SparklineValueAxisItemMinorTicks}
        */
        minorTicks?: SparklineValueAxisItemMinorTicks;
        /**
        The interval between minor divisions.
It defaults to 1/5th of the majorUnit.
        @member {number}
        */
        minorUnit?: number;
        /**
        The unique axis name.
        @member {any}
        */
        name?: any;
        /**
        Prevents the automatic axis range from snapping to 0.
        @member {boolean}
        */
        narrowRange?: boolean;
        plotBands?: SparklineValueAxisItemPlotBand[];
        /**
        Reverses the axis direction -
values increase from right to left and from top to bottom.
        @member {boolean}
        */
        reverse?: boolean;
        /**
        The title of the value axis.
        @member {SparklineValueAxisItemTitle}
        */
        title?: SparklineValueAxisItemTitle;
        /**
        The visibility of the axis.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The crosshair configuration options.
        @member {SparklineValueAxisItemCrosshair}
        */
        crosshair?: SparklineValueAxisItemCrosshair;
        /**
        The value axis notes configuration.
        @member {SparklineValueAxisItemNotes}
        */
        notes?: SparklineValueAxisItemNotes;
    }

    interface SparklineSeriesClickEventSeries {
        /**
        The series type
        @member {any}
        */
        type?: any;
        /**
        The series name
        @member {any}
        */
        name?: any;
        /**
        The series data points
        @member {any}
        */
        data?: any;
    }

    interface SparklineSeriesHoverEventSeries {
        /**
        The series type
        @member {any}
        */
        type?: any;
        /**
        The series name
        @member {any}
        */
        name?: any;
        /**
        The series data points
        @member {any}
        */
        data?: any;
    }

    interface SparklineOptions {
        name?: string;
        /**
        Default options for all chart axes.
        @member {any}
        */
        axisDefaults?: any;
        categoryAxis?: SparklineCategoryAxisItem[];
        /**
        The chart area configuration options.
This is the entire visible area of the chart.
        @member {SparklineChartArea}
        */
        chartArea?: SparklineChartArea;
        /**
        The data for the default sparkline series.Will be discareded if series are supplied.
        @member {any}
        */
        data?: any;
        /**
        DataSource configuration or instance.
        @member {any}
        */
        dataSource?: any;
        /**
        Indicates whether the chart will call read on the data source initially.
        @member {boolean}
        */
        autoBind?: boolean;
        /**
        The plot area configuration options. This is the area containing the plotted series.
        @member {SparklinePlotArea}
        */
        plotArea?: SparklinePlotArea;
        /**
        The width to allocate for each data point.
        @member {number}
        */
        pointWidth?: number;
        /**
        Sets the preferred rendering engine.
If it is not supported by the browser, the Sparkline will switch to the first available mode.The supported values are:
        @member {string}
        */
        renderAs?: string;
        series?: SparklineSeriesItem[];
        /**
        The default colors for the chart's series. When all colors are used, new colors are pulled from the start again.
        @member {any}
        */
        seriesColors?: any;
        /**
        Default values for each series.
        @member {SparklineSeriesDefaults}
        */
        seriesDefaults?: SparklineSeriesDefaults;
        /**
        Sets Chart theme. Available themes: default, blueOpal, black.
        @member {string}
        */
        theme?: string;
        /**
        The data point tooltip configuration options.
        @member {SparklineTooltip}
        */
        tooltip?: SparklineTooltip;
        /**
        A value indicating if transition animations should be played.
        @member {boolean}
        */
        transitions?: boolean;
        /**
        The default series type.
        @member {string}
        */
        type?: string;
        valueAxis?: SparklineValueAxisItem[];
        /**
        Fires when an axis label is clicked.
        */
        axisLabelClick?(e: SparklineAxisLabelClickEvent): void;
        /**
        Fires when the sparkline has received data from the data source
and is about to render it.
        */
        dataBound?(e: SparklineEvent): void;
        /**
        Fires when the user has used the mouse or a swipe gesture to drag the sparkline.The drag operation can be aborted by calling e.preventDefault().
        */
        dragStart?(e: SparklineDragStartEvent): void;
        /**
        Fires as long as the user is dragging the sparkline using the mouse or swipe gestures.
        */
        drag?(e: SparklineDragEvent): void;
        /**
        Fires when the user stops dragging the sparkline.
        */
        dragEnd?(e: SparklineDragEndEvent): void;
        /**
        Fires when plot area is clicked.
        */
        plotAreaClick?(e: SparklinePlotAreaClickEvent): void;
        /**
        Fires when chart series are clicked.
        */
        seriesClick?(e: SparklineSeriesClickEvent): void;
        /**
        Fires when chart series are hovered.
        */
        seriesHover?(e: SparklineSeriesHoverEvent): void;
        /**
        Fires when the user has used the mousewheel to zoom the chart.The zoom operation can be aborted by calling e.preventDefault().
        */
        zoomStart?(e: SparklineZoomStartEvent): void;
        /**
        Fires as long as the user is zooming the chart using the mousewheel.
        */
        zoom?(e: SparklineZoomEvent): void;
        /**
        Fires when the user stops zooming the chart.
        */
        zoomEnd?(e: SparklineZoomEndEvent): void;
    }

    interface SparklineEvent {
        sender: Sparkline;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }

    interface SparklineAxisLabelClickEvent extends SparklineEvent {
        /**
        The axis that the label belongs to.
        @member {any}
        */
        axis?: any;
        /**
        The label value or category name.
        @member {any}
        */
        value?: any;
        /**
        The label text.
        @member {any}
        */
        text?: any;
        /**
        The label sequential index or category index.
        @member {any}
        */
        index?: any;
        /**
        The original data item used to generate the label.
** Applicable only for data bound category axis. **
        @member {any}
        */
        dataItem?: any;
        /**
        The DOM element of the label.
        @member {any}
        */
        element?: any;
    }

    interface SparklineDragStartEvent extends SparklineEvent {
        /**
        A hastable containing the initial range (min and max values) of named axes.
The axis name is used as a key.
        @member {any}
        */
        axisRanges?: any;
        /**
        The original user event that triggered the drag action.
        @member {any}
        */
        originalEvent?: any;
    }

    interface SparklineDragEvent extends SparklineEvent {
        /**
        A hastable containing the suggested current range (min and max values) of named axes.
The axis name is used as a key.Note that the axis ranges are not updated automatically. You need to call
set_options with either the suggested or custom min/max values for them to take effect.
        @member {any}
        */
        axisRanges?: any;
        /**
        The original user event that triggered the drag action.
        @member {any}
        */
        originalEvent?: any;
    }

    interface SparklineDragEndEvent extends SparklineEvent {
        /**
        A hastable containing the final range (min and max values) of named axes.
The axis name is used as a key.
        @member {any}
        */
        axisRanges?: any;
        /**
        The original user event that triggered the drag action.
        @member {any}
        */
        originalEvent?: any;
    }

    interface SparklinePlotAreaClickEvent extends SparklineEvent {
        /**
        The data point value.
Available only for categorical charts (bar, line, area and similar).
        @member {any}
        */
        value?: any;
        /**
        The data point category.
Available only for categorical charts (bar, line, area and similar).
        @member {any}
        */
        category?: any;
        /**
        The DOM element of the plot area.
        @member {any}
        */
        element?: any;
        /**
        The X axis value or array of values for multi-axis charts.
        @member {any}
        */
        x?: any;
        /**
        The X axis value or array of values for multi-axis charts.
        @member {any}
        */
        y?: any;
    }

    interface SparklineSeriesClickEvent extends SparklineEvent {
        /**
        The data point value.
        @member {any}
        */
        value?: any;
        /**
        The data point category
        @member {any}
        */
        category?: any;
        /**
        The clicked series.
        @member {SparklineSeriesClickEventSeries}
        */
        series?: SparklineSeriesClickEventSeries;
        /**
        The original data item (when binding to dataSource).
        @member {any}
        */
        dataItem?: any;
        /**
        The DOM element of the data point.
        @member {any}
        */
        element?: any;
        /**
        The point value represented as a percentage value. Available only for donut, pie and 100% stacked charts.
        @member {any}
        */
        percentage?: any;
    }

    interface SparklineSeriesHoverEvent extends SparklineEvent {
        /**
        The data point value.
        @member {any}
        */
        value?: any;
        /**
        The data point category
        @member {any}
        */
        category?: any;
        /**
        The clicked series.
        @member {SparklineSeriesHoverEventSeries}
        */
        series?: SparklineSeriesHoverEventSeries;
        /**
        The original data item (when binding to dataSource).
        @member {any}
        */
        dataItem?: any;
        /**
        The DOM element of the data point.
        @member {any}
        */
        element?: any;
        /**
        The point value represented as a percentage value. Available only for donut, pie and 100% stacked charts.
        @member {any}
        */
        percentage?: any;
    }

    interface SparklineZoomStartEvent extends SparklineEvent {
        /**
        A hastable containing the initial range (min and max values) of named axes.
The axis name is used as a key.
        @member {any}
        */
        axisRanges?: any;
        /**
        The original user event that triggered the zoom action.
        @member {any}
        */
        originalEvent?: any;
    }

    interface SparklineZoomEvent extends SparklineEvent {
        /**
        A hastable containing the suggested current range (min and max values) of named axes.
The axis name is used as a key.Note that the axis ranges are not updated automatically. You need to call
set_options with either the suggested or custom min/max values for them to take effect.
        @member {any}
        */
        axisRanges?: any;
        /**
        A number that indicates the zoom amount and direction.A negative delta indicates "zoom in", while a positive "zoom out".
        @member {number}
        */
        delta?: number;
        /**
        The original user event that triggered the zoom action.This event can be used to prevent the default mousewheel action (scroll).
        @member {any}
        */
        originalEvent?: any;
    }

    interface SparklineZoomEndEvent extends SparklineEvent {
        /**
        A hastable containing the final range (min and max values) of named axes.
The axis name is used as a key.
        @member {any}
        */
        axisRanges?: any;
        /**
        The original user event that triggered the zoom action.
        @member {any}
        */
        originalEvent?: any;
    }


    class StockChart extends kendo.ui.Widget {
        static fn: StockChart;
        static extend(proto: Object): StockChart;

        element: JQuery;
        wrapper: JQuery;
        constructor(element: Element, options?: StockChartOptions);
        options: StockChartOptions;
        dataSource: kendo.data.DataSource;
        /**
        Prepares the widget for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        @method
        */
        destroy(): void;
        /**
        Repaints the chart using the currently loaded data.
        @method
        */
        redraw(): void;
        /**
        Reloads the data and renders the chart.
        @method
        */
        refresh(): void;
        /**
        Adjusts the chart layout to match the size of the container.
        @method
        @param force - Defines whether the widget should proceed with resizing even if the element dimensions have not changed.
        */
        resize(force: boolean): void;
        /**
        Sets the data source of the widget.
        @method
        @param dataSource - The data source to which the widget should be bound.
        */
        setDataSource(dataSource: kendo.data.DataSource): void;
        /**
        Returns the SVG representation of the chart.
The returned string is a self-contained SVG document that can be used as is or
converted to other formats using tools like Inkscape and
ImageMagick.
Both programs provide command-line interface suitable for server-side processing.
        @method
        @returns the SVG representation of the chart.
        */
        svg(): string;
        /**
        Returns a PNG image of the chart encoded as a Data URL.
        @method
        @returns A data URL with image/png MIME type. Will be null if the browser does not support the canvas element.
        */
        imageDataURL(): string;
    }

    interface StockChartCategoryAxisItemAutoBaseUnitSteps {
        /**
        The days unit steps.
        @member {any}
        */
        days?: any;
        /**
        The hours unit steps.
        @member {any}
        */
        hours?: any;
        /**
        The minutes unit steps.
        @member {any}
        */
        minutes?: any;
        /**
        The months unit steps.
        @member {any}
        */
        months?: any;
        /**
        The weeks unit steps.
        @member {any}
        */
        weeks?: any;
        /**
        The years unit steps.
        @member {any}
        */
        years?: any;
    }

    interface StockChartCategoryAxisItemCrosshairTooltipBorder {
        /**
        The color of the border.
        @member {string}
        */
        color?: string;
        /**
        The width of the border.
        @member {number}
        */
        width?: number;
    }

    interface StockChartCategoryAxisItemCrosshairTooltip {
        /**
        The background color of the tooltip.
        @member {string}
        */
        background?: string;
        /**
        The border configuration options.
        @member {StockChartCategoryAxisItemCrosshairTooltipBorder}
        */
        border?: StockChartCategoryAxisItemCrosshairTooltipBorder;
        /**
        The text color of the tooltip.
        @member {string}
        */
        color?: string;
        /**
        The tooltip font.
        @member {string}
        */
        font?: string;
        /**
        The tooltip format.
        @member {string}
        */
        format?: string;
        /**
        The padding of the tooltip.
        @member {any}
        */
        padding?: any;
        /**
        The tooltip template.
Template variables:
        @member {any}
        */
        template?: any;
        /**
        A value indicating if the tooltip should be displayed.
        @member {boolean}
        */
        visible?: boolean;
    }

    interface StockChartCategoryAxisItemCrosshair {
        /**
        The color of the crosshair.
        @member {string}
        */
        color?: string;
        /**
        The width of the crosshair.
        @member {number}
        */
        width?: number;
        /**
        The opacity of the crosshair.
        @member {number}
        */
        opacity?: number;
        /**
        The dash type of the crosshair.
        @member {number}
        */
        dashType?: number;
        /**
        The dash type of the crosshair.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The crosshar tooltip configuration options.
        @member {StockChartCategoryAxisItemCrosshairTooltip}
        */
        tooltip?: StockChartCategoryAxisItemCrosshairTooltip;
    }

    interface StockChartCategoryAxisItemLabelsBorder {
        /**
        The color of the border. Any valid CSS color string will work here, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the border.
        @member {string}
        */
        dashType?: string;
        /**
        The width of the border.
        @member {number}
        */
        width?: number;
    }

    interface StockChartCategoryAxisItemLabels {
        /**
        The background color of the labels. Any valid CSS color string will work here, including hex and rgb.
        @member {string}
        */
        background?: string;
        /**
        The border of the labels.
        @member {StockChartCategoryAxisItemLabelsBorder}
        */
        border?: StockChartCategoryAxisItemLabelsBorder;
        /**
        The text color of the labels. Any valid CSS color string will work here, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The font style of the labels.
        @member {string}
        */
        font?: string;
        /**
        The format of the labels.
        @member {string}
        */
        format?: string;
        /**
        The margin of the labels.
        @member {any}
        */
        margin?: any;
        /**
        Mirrors the axis labels and ticks.
If the labels are normally on the left side of the axis,
mirroring the axis will render them to the right.
        @member {boolean}
        */
        mirror?: boolean;
        /**
        The padding of the labels.
        @member {any}
        */
        padding?: any;
        /**
        The rotation angle of the labels.
        @member {number}
        */
        rotation?: number;
        /**
        Number of labels to skip.
Skips rendering the first n labels.
        @member {number}
        */
        skip?: number;
        /**
        Label rendering step.
Every n-th label is rendered where n is the step
        @member {number}
        */
        step?: number;
        /**
        The template which renders the labels.The fields which can be used in the template are:
        @member {any}
        */
        template?: any;
        /**
        The visibility of the labels.
        @member {boolean}
        */
        visible?: boolean;
        /**
        Culture to use for formatting the dates. See Globalization for more information.
It defaults to the global culture.
        @member {string}
        */
        culture?: string;
        /**
        Date format strings
        @member {any}
        */
        dateFormats?: any;
    }

    interface StockChartCategoryAxisItemLine {
        /**
        The color of the lines. Any valid CSS color string will work here, including hex and rgb.Note: This will also effect the major and minor ticks, but not the grid lines.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the line.
        @member {string}
        */
        dashType?: string;
        /**
        The visibility of the lines.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The width of the line. This will also effect the major and minor ticks, but
not the grid lines.
        @member {number}
        */
        width?: number;
    }

    interface StockChartCategoryAxisItemMajorGridLines {
        /**
        The color of the lines. Any valid CSS color string will work here, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the grid lines.
        @member {string}
        */
        dashType?: string;
        /**
        The visibility of the lines.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The width of the lines.
        @member {number}
        */
        width?: number;
        /**
        The step of the category axis major grid lines.
        @member {number}
        */
        step?: number;
        /**
        The skip of the category axis major grid lines.
        @member {number}
        */
        skip?: number;
    }

    interface StockChartCategoryAxisItemMajorTicks {
        /**
        The color of the category axis major ticks lines. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The axis major tick size. This is the length of the line in pixels that is drawn to indicate the tick
on the chart.
        @member {number}
        */
        size?: number;
        /**
        The width of the major ticks in pixels.
        @member {number}
        */
        width?: number;
        /**
        The visibility of the major ticks.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The step of the category axis major ticks.
        @member {number}
        */
        step?: number;
        /**
        The skip of the category axis major ticks.
        @member {number}
        */
        skip?: number;
    }

    interface StockChartCategoryAxisItemMinorGridLines {
        /**
        The color of the lines. Any valid CSS color string will work here, including hex and
rgb.Note that this setting has no effect if the visibility of the minor
grid lines is not set to true.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the grid lines.
        @member {string}
        */
        dashType?: string;
        /**
        The visibility of the lines.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The width of the lines.Note that this setting has no effect if the visibility of the minor
grid lines is not set to true.
        @member {number}
        */
        width?: number;
        /**
        The step of the category axis minor grid lines.
        @member {number}
        */
        step?: number;
        /**
        The skip of the category axis minor grid lines.
        @member {number}
        */
        skip?: number;
    }

    interface StockChartCategoryAxisItemMinorTicks {
        /**
        The axis minor tick size. This is the length of the line in pixels that is drawn to indicate the tick
on the chart.
        @member {number}
        */
        size?: number;
        /**
        The visibility of the minor ticks.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The color of the category axis minor ticks lines. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The width of the minor ticks in pixels.
        @member {number}
        */
        width?: number;
        /**
        The step of the category axis minor ticks.
        @member {number}
        */
        step?: number;
        /**
        The skip of the category axis minor ticks.
        @member {number}
        */
        skip?: number;
    }

    interface StockChartCategoryAxisItemNotesDataItemIconBorder {
        /**
        The border color of the icon.
        @member {string}
        */
        color?: string;
        /**
        The border width of the icon.
        @member {number}
        */
        width?: number;
    }

    interface StockChartCategoryAxisItemNotesDataItemIcon {
        /**
        The background color of the note icon.
        @member {string}
        */
        background?: string;
        /**
        The border of the icon.
        @member {StockChartCategoryAxisItemNotesDataItemIconBorder}
        */
        border?: StockChartCategoryAxisItemNotesDataItemIconBorder;
        /**
        The size of the icon.
        @member {number}
        */
        size?: number;
        /**
        The icon shape.The supported values are:
* "circle" - the marker shape is circle.
* "square" - the marker shape is square.
* "triangle" - the marker shape is triangle.
* "cross" - the marker shape is cross.
        @member {string}
        */
        type?: string;
        /**
        The icon visibility.
        @member {boolean}
        */
        visible?: boolean;
    }

    interface StockChartCategoryAxisItemNotesDataItemLabelBorder {
        /**
        The color of the border. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the border.The following dash types are supported:
        @member {string}
        */
        dashType?: string;
        /**
        The width of the border in pixels. By default the border width is set to zero which means that the border will not appear.
        @member {number}
        */
        width?: number;
    }

    interface StockChartCategoryAxisItemNotesDataItemLabel {
        /**
        The background color of the label. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        background?: string;
        /**
        The border of the label.
        @member {StockChartCategoryAxisItemNotesDataItemLabelBorder}
        */
        border?: StockChartCategoryAxisItemNotesDataItemLabelBorder;
        /**
        The text color of the note label. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The font style of the note label.
        @member {string}
        */
        font?: string;
        /**
        The template which renders the labels.The fields which can be used in the template are:
        @member {any}
        */
        template?: any;
        /**
        If set to true the chart will display the category notes label. By default the category notes label are visible.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The rotation angle of the label. By default the label are not rotated.
        @member {number}
        */
        rotation?: number;
        /**
        The format used to display the note label. Uses kendo.format. Contains one placeholder ("{0}") which represents the category value.
        @member {string}
        */
        format?: string;
        /**
        The label note text.
        @member {string}
        */
        text?: string;
        /**
        The position of the category axis note label.
        @member {string}
        */
        position?: string;
    }

    interface StockChartCategoryAxisItemNotesDataItemLine {
        /**
        The line width of the note.
        @member {number}
        */
        width?: number;
        /**
        The line color of the note.
        @member {string}
        */
        color?: string;
        /**
        The length of the connecting lines in pixels.
        @member {number}
        */
        length?: number;
    }

    interface StockChartCategoryAxisItemNotesDataItem {
        /**
        The value of the note.
        @member {any}
        */
        value?: any;
        /**
        The position of the category axis note.
        @member {string}
        */
        position?: string;
        /**
        The icon of the note.
        @member {StockChartCategoryAxisItemNotesDataItemIcon}
        */
        icon?: StockChartCategoryAxisItemNotesDataItemIcon;
        /**
        The label of the note.
        @member {StockChartCategoryAxisItemNotesDataItemLabel}
        */
        label?: StockChartCategoryAxisItemNotesDataItemLabel;
        /**
        The line of the note.
        @member {StockChartCategoryAxisItemNotesDataItemLine}
        */
        line?: StockChartCategoryAxisItemNotesDataItemLine;
    }

    interface StockChartCategoryAxisItemNotesIconBorder {
        /**
        The border color of the icon.
        @member {string}
        */
        color?: string;
        /**
        The border width of the icon.
        @member {number}
        */
        width?: number;
    }

    interface StockChartCategoryAxisItemNotesIcon {
        /**
        The background color of the notes icon.
        @member {string}
        */
        background?: string;
        /**
        The border of the icon.
        @member {StockChartCategoryAxisItemNotesIconBorder}
        */
        border?: StockChartCategoryAxisItemNotesIconBorder;
        /**
        The size of the icon.
        @member {number}
        */
        size?: number;
        /**
        The icon shape.The supported values are:
* "circle" - the marker shape is circle.
* "square" - the marker shape is square.
* "triangle" - the marker shape is triangle.
* "cross" - the marker shape is cross.
        @member {string}
        */
        type?: string;
        /**
        The icon visibility.
        @member {boolean}
        */
        visible?: boolean;
    }

    interface StockChartCategoryAxisItemNotesLabelBorder {
        /**
        The color of the border. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the border.The following dash types are supported:
        @member {string}
        */
        dashType?: string;
        /**
        The width of the border in pixels. By default the border width is set to zero which means that the border will not appear.
        @member {number}
        */
        width?: number;
    }

    interface StockChartCategoryAxisItemNotesLabel {
        /**
        The background color of the label. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        background?: string;
        /**
        The border of the label.
        @member {StockChartCategoryAxisItemNotesLabelBorder}
        */
        border?: StockChartCategoryAxisItemNotesLabelBorder;
        /**
        The text color of the label. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The font style of the label.
        @member {string}
        */
        font?: string;
        /**
        The template which renders the labels.The fields which can be used in the template are:
        @member {any}
        */
        template?: any;
        /**
        If set to true the chart will display the category notes label. By default the category notes label are visible.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The rotation angle of the label. By default the label are not rotated.
        @member {number}
        */
        rotation?: number;
        /**
        The format used to display the notes label. Uses kendo.format. Contains one placeholder ("{0}") which represents the category value.
        @member {string}
        */
        format?: string;
        /**
        The position of the labels.
        @member {string}
        */
        position?: string;
    }

    interface StockChartCategoryAxisItemNotesLine {
        /**
        The line width of the notes.
        @member {number}
        */
        width?: number;
        /**
        The line color of the notes.
        @member {string}
        */
        color?: string;
        /**
        The length of the connecting lines in pixels.
        @member {number}
        */
        length?: number;
    }

    interface StockChartCategoryAxisItemNotes {
        /**
        The position of the category axis note.
        @member {string}
        */
        position?: string;
        /**
        The icon of the notes.
        @member {StockChartCategoryAxisItemNotesIcon}
        */
        icon?: StockChartCategoryAxisItemNotesIcon;
        /**
        The label of the notes.
        @member {StockChartCategoryAxisItemNotesLabel}
        */
        label?: StockChartCategoryAxisItemNotesLabel;
        /**
        The line of the notes.
        @member {StockChartCategoryAxisItemNotesLine}
        */
        line?: StockChartCategoryAxisItemNotesLine;
        data?: StockChartCategoryAxisItemNotesDataItem[];
    }

    interface StockChartCategoryAxisItemPlotBand {
        /**
        The start position of the plot band in axis units.
        @member {number}
        */
        from?: number;
        /**
        The end position of the plot band in axis units.
        @member {number}
        */
        to?: number;
        /**
        The color of the plot band.
        @member {string}
        */
        color?: string;
        /**
        The opacity of the plot band.
        @member {number}
        */
        opacity?: number;
    }

    interface StockChartCategoryAxisItemSelectMousewheel {
        /**
        Reverses the mousewheel zoom direction.
Normal direction is down for "zoom out", up for "zoom in".
        @member {boolean}
        */
        reverse?: boolean;
        /**
        The zoom direction. Possible values:
        @member {string}
        */
        zoom?: string;
    }

    interface StockChartCategoryAxisItemSelect {
        /**
        The lower boundary of the selected range.
        @member {any}
        */
        from?: any;
        /**
        The upper boundary of the selected range.Note: The category with the specified index (date) is not included in the selected range
unless the axis is justified. In order to select all categories specify
a value larger than the last category index (date).
        @member {any}
        */
        to?: any;
        /**
        The minimum value that is selectable by the user.
        @member {any}
        */
        min?: any;
        /**
        The maximum value that is selectable by the user.Note: The category with the specified index (date) is not included in the selected range
unless the axis is justified. In order to select all categories specify
a value larger than the last category index (date).
        @member {any}
        */
        max?: any;
        /**
        Mousewheel zoom settings for the selection.
        @member {StockChartCategoryAxisItemSelectMousewheel}
        */
        mousewheel?: StockChartCategoryAxisItemSelectMousewheel;
    }

    interface StockChartCategoryAxisItemTitleBorder {
        /**
        The color of the border. Any valid CSS color string will work here, including
hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the border.
        @member {string}
        */
        dashType?: string;
        /**
        The width of the border.
        @member {number}
        */
        width?: number;
    }

    interface StockChartCategoryAxisItemTitle {
        /**
        The background color of the title. Any valid CSS color string will work here, including
hex and rgb.
        @member {string}
        */
        background?: string;
        /**
        The border of the title.
        @member {StockChartCategoryAxisItemTitleBorder}
        */
        border?: StockChartCategoryAxisItemTitleBorder;
        /**
        The text color of the title. Any valid CSS color string will work here, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The font style of the title.
        @member {string}
        */
        font?: string;
        /**
        The margin of the title.
        @member {any}
        */
        margin?: any;
        /**
        The position of the title.
        @member {string}
        */
        position?: string;
        /**
        The rotation angle of the title.
        @member {number}
        */
        rotation?: number;
        /**
        The text of the title.
        @member {string}
        */
        text?: string;
        /**
        The visibility of the title.
        @member {boolean}
        */
        visible?: boolean;
    }

    interface StockChartCategoryAxisItem {
        /**
        Category index at which the first value axis crosses this axis. (Only for object)Category indicies at which the value axes cross the category axis. (Only for array)Note: Specify an index greater than or equal to the number
of categories to denote the far end of the axis.
        @member {any}
        */
        axisCrossingValue?: any;
        /**
        Array of category names.
        @member {any}
        */
        categories?: any;
        /**
        Color to apply to all axis elements. Any valid CSS color string will work here, including hex and rgb.
Individual color settings for line and labels take priority.
        @member {string}
        */
        color?: string;
        /**
        The data field containing the category name.
        @member {string}
        */
        field?: string;
        /**
        Positions categories and series points on major ticks. This removes the empty space before and after the series.This option is ignored if either column, ohlc or candlestick series are plotted on the axis.
        @member {boolean}
        */
        justified?: boolean;
        /**
        Configures the axis labels.
        @member {StockChartCategoryAxisItemLabels}
        */
        labels?: StockChartCategoryAxisItemLabels;
        /**
        Configures the axis line. This will also effect major and minor ticks, but not gridlines.
        @member {StockChartCategoryAxisItemLine}
        */
        line?: StockChartCategoryAxisItemLine;
        /**
        Configures the major grid lines. These are the lines that are an extension of the major ticks through the
body of the chart.
        @member {StockChartCategoryAxisItemMajorGridLines}
        */
        majorGridLines?: StockChartCategoryAxisItemMajorGridLines;
        /**
        The major ticks of the axis.
        @member {StockChartCategoryAxisItemMajorTicks}
        */
        majorTicks?: StockChartCategoryAxisItemMajorTicks;
        /**
        Configures the minor grid lines.  These are the lines that are an extension of the minor ticks through
the body of the chart.Note that minor grid lines are not visible by default, therefore none of these settings will take effect with the minor grid lines visibility being set to true.
        @member {StockChartCategoryAxisItemMinorGridLines}
        */
        minorGridLines?: StockChartCategoryAxisItemMinorGridLines;
        /**
        The minor ticks of the axis.
        @member {StockChartCategoryAxisItemMinorTicks}
        */
        minorTicks?: StockChartCategoryAxisItemMinorTicks;
        /**
        The unique axis name.
        @member {string}
        */
        name?: string;
        /**
        The name of the pane that the axis should be rendered in.
The axis will be rendered in the first (default) pane if not set.
        @member {string}
        */
        pane?: string;
        plotBands?: StockChartCategoryAxisItemPlotBand[];
        /**
        Reverses the axis direction -
categories are listed from right to left and from top to bottom.
        @member {boolean}
        */
        reverse?: boolean;
        /**
        The selected axis range. If configured, axis selection will be enabled.** Available only for vertical axes **The range units are:
        @member {StockChartCategoryAxisItemSelect}
        */
        select?: StockChartCategoryAxisItemSelect;
        /**
        The title of the category axis.
        @member {StockChartCategoryAxisItemTitle}
        */
        title?: StockChartCategoryAxisItemTitle;
        /**
        The axis type.
        @member {string}
        */
        type?: string;
        /**
        The discrete categoryAxis.baseUnitStep values when
either categoryAxis.baseUnit is set to "fit" or
categoryAxis.baseUnitStep is set to "auto".
        @member {StockChartCategoryAxisItemAutoBaseUnitSteps}
        */
        autoBaseUnitSteps?: StockChartCategoryAxisItemAutoBaseUnitSteps;
        /**
        The background color of the axis.
        @member {string}
        */
        background?: string;
        /**
        The base time interval for the date axis. The default base unit is determined automatically from the minimum difference
between subsequent categories.The supported values are:Setting baseUnit to "fit" will set such base unit and categoryAxis.baseUnitStep
that the total number of categories does not exceed categoryAxis.maxDateGroups.Series data is aggregated for the specified base unit using the series.aggregate function.
        @member {string}
        */
        baseUnit?: string;
        /**
        The step (interval) between categories in base units. Setting it to "auto" will set the step to such value
that the total number of categories does not exceed categoryAxis.maxDateGroups.This option is ignored if categoryAxis.baseUnit is set to "fit".
        @member {any}
        */
        baseUnitStep?: any;
        /**
        The last date displayed on the axis.
By default, the minimum date is the same as the last category.
This is often used in combination with the min and roundToBaseUnit configuration options to
set up a fixed date range.
        @member {any}
        */
        max?: any;
        /**
        The first date displayed on the axis.
By default, the minimum date is the same as the first category.
This is often used in combination with the max and roundToBaseUnit configuration options to
set up a fixed date range.
        @member {any}
        */
        min?: any;
        /**
        By default, the first and last dates will be rounded off to the nearest base unit.
Specifying false for this option will disable this behavior.This option is most useful in combination with explicit min and max dates.It will be ignored if either column, ohlc or candlestick series are plotted on the axis.
        @member {boolean}
        */
        roundToBaseUnit?: boolean;
        /**
        Specifies the week start day when baseUnit is set to "weeks".
Use the kendo.days constants to specify the day by name.
        @member {number}
        */
        weekStartDay?: number;
        /**
        Specifies the maximum number of groups (categories) to produce when
either baseUnit is set to "fit" or baseUnitStep is set to "auto".This option is ignored in all other cases.The default value is approximately equal to [widget width, px] / 30
        @member {number}
        */
        maxDateGroups?: number;
        /**
        The visibility of the axis.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The crosshair configuration options.
        @member {StockChartCategoryAxisItemCrosshair}
        */
        crosshair?: StockChartCategoryAxisItemCrosshair;
        /**
        The category axis notes configuration.
        @member {StockChartCategoryAxisItemNotes}
        */
        notes?: StockChartCategoryAxisItemNotes;
    }

    interface StockChartChartAreaBorder {
        /**
        The color of the border.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the border.
        @member {string}
        */
        dashType?: string;
        /**
        The width of the border.
        @member {number}
        */
        width?: number;
    }

    interface StockChartChartArea {
        /**
        The background color of the chart area.
        @member {string}
        */
        background?: string;
        /**
        The background opacity of the chart area.
        @member {number}
        */
        opacity?: number;
        /**
        The border of the chart area.
        @member {StockChartChartAreaBorder}
        */
        border?: StockChartChartAreaBorder;
        /**
        The height of the chart area.
        @member {number}
        */
        height?: number;
        /**
        The margin of the chart area.
        @member {any}
        */
        margin?: any;
        /**
        The width of the chart area.
        @member {number}
        */
        width?: number;
    }

    interface StockChartLegendBorder {
        /**
        The color of the border.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the border.
        @member {string}
        */
        dashType?: string;
        /**
        The width of the border.
        @member {number}
        */
        width?: number;
    }

    interface StockChartLegendInactiveItemsLabels {
        /**
        The color of the labels.
Any valid CSS color string will work here, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The font style of the labels.
        @member {string}
        */
        font?: string;
        /**
        The template which renders the labels.The fields which can be used in the template are:
        @member {string}
        */
        template?: string;
    }

    interface StockChartLegendInactiveItemsMarkers {
        /**
        The color of the markers.
Any valid CSS color string will work here, including hex and rgb.
        @member {string}
        */
        color?: string;
    }

    interface StockChartLegendInactiveItems {
        /**
        Configures the legend labels.
        @member {StockChartLegendInactiveItemsLabels}
        */
        labels?: StockChartLegendInactiveItemsLabels;
        /**
        Configures the legend markers.
        @member {StockChartLegendInactiveItemsMarkers}
        */
        markers?: StockChartLegendInactiveItemsMarkers;
    }

    interface StockChartLegendLabels {
        /**
        The color of the labels.
Any valid CSS color string will work here, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The font style of the labels.
        @member {string}
        */
        font?: string;
        /**
        The template which renders the labels.The fields which can be used in the template are:
        @member {string}
        */
        template?: string;
    }

    interface StockChartLegend {
        /**
        The background color of the legend. Any valid CSS color string will work here, including hex and rgb.
        @member {string}
        */
        background?: string;
        /**
        The border of the legend.
        @member {StockChartLegendBorder}
        */
        border?: StockChartLegendBorder;
        /**
        Configures the legend labels.
        @member {StockChartLegendLabels}
        */
        labels?: StockChartLegendLabels;
        /**
        The margin of the legend.
        @member {any}
        */
        margin?: any;
        /**
        The X offset from its position.  The offset is relative to the current position of the legend.
For instance, a value of 20 will move the legend 20 pixels to the right of it's initial position.  A negative value will move the legend
to the left of the current position.
        @member {number}
        */
        offsetX?: number;
        /**
        The Y offset from its position.  The offset is relative to the current position of the legend.
For instance, a value of 20 will move the legend 20 pixels down from it's initial position.  A negative value will move the legend
upwards from the current position.
        @member {number}
        */
        offsetY?: number;
        /**
        The padding of the legend.
        @member {any}
        */
        padding?: any;
        /**
        The positions of the legend.
        @member {string}
        */
        position?: string;
        /**
        The visibility of the legend.
        @member {boolean}
        */
        visible?: boolean;
        /**
        Configures the legend inactive items.
        @member {StockChartLegendInactiveItems}
        */
        inactiveItems?: StockChartLegendInactiveItems;
    }

    interface StockChartNavigatorCategoryAxisItemAutoBaseUnitSteps {
        /**
        The seconds unit steps.
        @member {any}
        */
        seconds?: any;
        /**
        The minutes unit steps.
        @member {any}
        */
        minutes?: any;
        /**
        The hours unit steps.
        @member {any}
        */
        hours?: any;
        /**
        The days unit steps.
        @member {any}
        */
        days?: any;
        /**
        The weeks unit steps.
        @member {any}
        */
        weeks?: any;
        /**
        The months unit steps.
        @member {any}
        */
        months?: any;
        /**
        The years unit steps.
        @member {any}
        */
        years?: any;
    }

    interface StockChartNavigatorCategoryAxisItemCrosshairTooltipBorder {
        /**
        The color of the border. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the border.The following dash types are supported:
        @member {string}
        */
        dashType?: string;
        /**
        The width of the border in pixels. By default the border width is set to zero which means that the border will not appear.
        @member {number}
        */
        width?: number;
    }

    interface StockChartNavigatorCategoryAxisItemCrosshairTooltipPadding {
        /**
        The bottom padding of the crosshair tooltip.
        @member {number}
        */
        bottom?: number;
        /**
        The left padding of the crosshair tooltip.
        @member {number}
        */
        left?: number;
        /**
        The right padding of the crosshair tooltip.
        @member {number}
        */
        right?: number;
        /**
        The top padding of the crosshair tooltip.
        @member {number}
        */
        top?: number;
    }

    interface StockChartNavigatorCategoryAxisItemCrosshairTooltip {
        /**
        The background color of the tooltip. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        background?: string;
        /**
        The border options.
        @member {StockChartNavigatorCategoryAxisItemCrosshairTooltipBorder}
        */
        border?: StockChartNavigatorCategoryAxisItemCrosshairTooltipBorder;
        /**
        The text color of the tooltip. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The tooltip font.
        @member {string}
        */
        font?: string;
        /**
        The format used to display the tooltip. Uses kendo.format. Contains one placeholder ("{0}") which represents the category value.
        @member {string}
        */
        format?: string;
        /**
        The padding of the crosshair tooltip. A numeric value will set all paddings.
        @member {StockChartNavigatorCategoryAxisItemCrosshairTooltipPadding}
        */
        padding?: StockChartNavigatorCategoryAxisItemCrosshairTooltipPadding;
        /**
        The template which renders the tooltip.The fields which can be used in the template are:
        @member {any}
        */
        template?: any;
        /**
        If set to true the chart will display the category axis crosshair tooltip. By default the category axis crosshair tooltip is not visible.
        @member {boolean}
        */
        visible?: boolean;
    }

    interface StockChartNavigatorCategoryAxisItemCrosshair {
        /**
        The color of the crosshair. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The opacity of the crosshair. By default the crosshair is opaque.
        @member {number}
        */
        opacity?: number;
        /**
        The crosshar tooltip options.
        @member {StockChartNavigatorCategoryAxisItemCrosshairTooltip}
        */
        tooltip?: StockChartNavigatorCategoryAxisItemCrosshairTooltip;
        /**
        If set to true the chart will display the category axis crosshair. By default the category axis crosshair is not visible.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The width of the crosshair in pixels.
        @member {number}
        */
        width?: number;
    }

    interface StockChartNavigatorCategoryAxisItemLabelsBorder {
        /**
        The color of the border. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the border.The following dash types are supported:
        @member {string}
        */
        dashType?: string;
        /**
        The width of the border in pixels. By default the border width is set to zero which means that the border will not appear.
        @member {number}
        */
        width?: number;
    }

    interface StockChartNavigatorCategoryAxisItemLabelsDateFormats {
        /**
        The format used when categoryAxis.baseUnit is set to "days".
        @member {string}
        */
        days?: string;
        /**
        The format used when categoryAxis.baseUnit is set to "hours".
        @member {string}
        */
        hours?: string;
        /**
        The format used when categoryAxis.baseUnit is set to "months".
        @member {string}
        */
        months?: string;
        /**
        The format used when categoryAxis.baseUnit is set to "weeks".
        @member {string}
        */
        weeks?: string;
        /**
        The format used when categoryAxis.baseUnit is set to "years".
        @member {string}
        */
        years?: string;
    }

    interface StockChartNavigatorCategoryAxisItemLabelsMargin {
        /**
        The bottom margin of the labels.
        @member {number}
        */
        bottom?: number;
        /**
        The left margin of the labels.
        @member {number}
        */
        left?: number;
        /**
        The right margin of the labels.
        @member {number}
        */
        right?: number;
        /**
        The top margin of the labels.
        @member {number}
        */
        top?: number;
    }

    interface StockChartNavigatorCategoryAxisItemLabelsPadding {
        /**
        The bottom padding of the labels.
        @member {number}
        */
        bottom?: number;
        /**
        The left padding of the labels.
        @member {number}
        */
        left?: number;
        /**
        The right padding of the labels.
        @member {number}
        */
        right?: number;
        /**
        The top padding of the labels.
        @member {number}
        */
        top?: number;
    }

    interface StockChartNavigatorCategoryAxisItemLabels {
        /**
        The background color of the labels. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        background?: string;
        /**
        The border of the labels.
        @member {StockChartNavigatorCategoryAxisItemLabelsBorder}
        */
        border?: StockChartNavigatorCategoryAxisItemLabelsBorder;
        /**
        The text color of the labels. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The culture to use when formatting date values. See the globalization overview for more information.
        @member {string}
        */
        culture?: string;
        /**
        The format used to display the labels when the categories are dates. Uses kendo.format. Contains one placeholder ("{0}") which represents the category value.
        @member {StockChartNavigatorCategoryAxisItemLabelsDateFormats}
        */
        dateFormats?: StockChartNavigatorCategoryAxisItemLabelsDateFormats;
        /**
        The font style of the labels.
        @member {string}
        */
        font?: string;
        /**
        The format used to display the labels. Uses kendo.format. Contains one placeholder ("{0}") which represents the category value.
        @member {string}
        */
        format?: string;
        /**
        The margin of the labels. A numeric value will set all margins.
        @member {StockChartNavigatorCategoryAxisItemLabelsMargin}
        */
        margin?: StockChartNavigatorCategoryAxisItemLabelsMargin;
        /**
        If set to true the chart will mirror the axis labels and ticks. If the labels are normally on the left side of the axis, mirroring the axis will render them to the right.
        @member {boolean}
        */
        mirror?: boolean;
        /**
        The padding of the labels. A numeric value will set all paddings.
        @member {StockChartNavigatorCategoryAxisItemLabelsPadding}
        */
        padding?: StockChartNavigatorCategoryAxisItemLabelsPadding;
        /**
        The rotation angle of the labels. By default the labels are not rotated.
        @member {number}
        */
        rotation?: number;
        /**
        The number of labels to skip. By default no labels are skipped.
        @member {number}
        */
        skip?: number;
        /**
        The label rendering step - render every n-th label. By default every label is rendered.
        @member {number}
        */
        step?: number;
        /**
        The template which renders the labels.The fields which can be used in the template are:
        @member {any}
        */
        template?: any;
        /**
        If set to true the chart will display the category axis labels. By default the category axis labels are visible.
        @member {boolean}
        */
        visible?: boolean;
    }

    interface StockChartNavigatorCategoryAxisItemLine {
        /**
        The color of the lines. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the line.The following dash types are supported:
        @member {string}
        */
        dashType?: string;
        /**
        If set to true the chart will display the category axis lines. By default the category axis lines are visible.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The width of the line in pixels. Also affects the major and minor ticks, but not the grid lines.
        @member {number}
        */
        width?: number;
    }

    interface StockChartNavigatorCategoryAxisItemMajorGridLines {
        /**
        The color of the major grid lines. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the major grid lines.The following dash types are supported:
        @member {string}
        */
        dashType?: string;
        /**
        If set to true the chart will display the major grid lines. By default the major grid lines are visible.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The width of the category axis major grid lines in pixels.
        @member {number}
        */
        width?: number;
        /**
        The step of the category axis major grid lines.
        @member {number}
        */
        step?: number;
        /**
        The skip of the category axis major grid lines.
        @member {number}
        */
        skip?: number;
    }

    interface StockChartNavigatorCategoryAxisItemMajorTicks {
        /**
        The color of the category axis major ticks lines. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The length of the tick line in pixels.
        @member {number}
        */
        size?: number;
        /**
        If set to true the chart will display the category axis major ticks. By default the category axis major ticks are visible.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The width of the major ticks in pixels.
        @member {number}
        */
        width?: number;
        /**
        The step of the category axis major ticks.
        @member {number}
        */
        step?: number;
        /**
        The skip of the category axis major ticks.
        @member {number}
        */
        skip?: number;
    }

    interface StockChartNavigatorCategoryAxisItemMinorGridLines {
        /**
        The color of the minor grid lines. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the minor grid lines.The following dash types are supported:
        @member {string}
        */
        dashType?: string;
        /**
        If set to true the chart will display the minor grid lines. By default the minor grid lines are visible.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The width of the category axis minor grid lines in pixels.
        @member {number}
        */
        width?: number;
        /**
        The step of the category axis minor grid lines.
        @member {number}
        */
        step?: number;
        /**
        The skip of the category axis minor grid lines.
        @member {number}
        */
        skip?: number;
    }

    interface StockChartNavigatorCategoryAxisItemMinorTicks {
        /**
        The color of the category axis minor ticks lines. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The length of the tick line in pixels.
        @member {number}
        */
        size?: number;
        /**
        If set to true the chart will display the category axis minor ticks. By default the category axis minor ticks are visible.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The width of the minor ticks in pixels.
        @member {number}
        */
        width?: number;
        /**
        The step of the category axis minor ticks.
        @member {number}
        */
        step?: number;
        /**
        The skip of the category axis minor ticks.
        @member {number}
        */
        skip?: number;
    }

    interface StockChartNavigatorCategoryAxisItemNotesDataItemIconBorder {
        /**
        The border color of the icon.
        @member {string}
        */
        color?: string;
        /**
        The border width of the icon.
        @member {number}
        */
        width?: number;
    }

    interface StockChartNavigatorCategoryAxisItemNotesDataItemIcon {
        /**
        The background color of the note icon.
        @member {string}
        */
        background?: string;
        /**
        The border of the icon.
        @member {StockChartNavigatorCategoryAxisItemNotesDataItemIconBorder}
        */
        border?: StockChartNavigatorCategoryAxisItemNotesDataItemIconBorder;
        /**
        The size of the icon.
        @member {number}
        */
        size?: number;
        /**
        The icon shape.The supported values are:
* "circle" - the marker shape is circle.
* "square" - the marker shape is square.
* "triangle" - the marker shape is triangle.
* "cross" - the marker shape is cross.
        @member {string}
        */
        type?: string;
        /**
        The icon visibility.
        @member {boolean}
        */
        visible?: boolean;
    }

    interface StockChartNavigatorCategoryAxisItemNotesDataItemLabelBorder {
        /**
        The color of the border. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the border.The following dash types are supported:
        @member {string}
        */
        dashType?: string;
        /**
        The width of the border in pixels. By default the border width is set to zero which means that the border will not appear.
        @member {number}
        */
        width?: number;
    }

    interface StockChartNavigatorCategoryAxisItemNotesDataItemLabel {
        /**
        The background color of the label. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        background?: string;
        /**
        The border of the label.
        @member {StockChartNavigatorCategoryAxisItemNotesDataItemLabelBorder}
        */
        border?: StockChartNavigatorCategoryAxisItemNotesDataItemLabelBorder;
        /**
        The text color of the note label. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The font style of the note label.
        @member {string}
        */
        font?: string;
        /**
        The template which renders the labels.The fields which can be used in the template are:
        @member {any}
        */
        template?: any;
        /**
        If set to true the chart will display the category notes label. By default the category notes label are visible.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The rotation angle of the label. By default the label are not rotated.
        @member {number}
        */
        rotation?: number;
        /**
        The format used to display the note label. Uses kendo.format. Contains one placeholder ("{0}") which represents the category value.
        @member {string}
        */
        format?: string;
        /**
        The label note text.
        @member {string}
        */
        text?: string;
        /**
        The position of the category axis note label.
        @member {string}
        */
        position?: string;
    }

    interface StockChartNavigatorCategoryAxisItemNotesDataItemLine {
        /**
        The line width of the note.
        @member {number}
        */
        width?: number;
        /**
        The line color of the note.
        @member {string}
        */
        color?: string;
        /**
        The length of the connecting lines in pixels.
        @member {number}
        */
        length?: number;
    }

    interface StockChartNavigatorCategoryAxisItemNotesDataItem {
        /**
        The value of the note.
        @member {any}
        */
        value?: any;
        /**
        The position of the category axis note.
        @member {string}
        */
        position?: string;
        /**
        The icon of the note.
        @member {StockChartNavigatorCategoryAxisItemNotesDataItemIcon}
        */
        icon?: StockChartNavigatorCategoryAxisItemNotesDataItemIcon;
        /**
        The label of the note.
        @member {StockChartNavigatorCategoryAxisItemNotesDataItemLabel}
        */
        label?: StockChartNavigatorCategoryAxisItemNotesDataItemLabel;
        /**
        The line of the note.
        @member {StockChartNavigatorCategoryAxisItemNotesDataItemLine}
        */
        line?: StockChartNavigatorCategoryAxisItemNotesDataItemLine;
    }

    interface StockChartNavigatorCategoryAxisItemNotesIconBorder {
        /**
        The border color of the icon.
        @member {string}
        */
        color?: string;
        /**
        The border width of the icon.
        @member {number}
        */
        width?: number;
    }

    interface StockChartNavigatorCategoryAxisItemNotesIcon {
        /**
        The background color of the notes icon.
        @member {string}
        */
        background?: string;
        /**
        The border of the icon.
        @member {StockChartNavigatorCategoryAxisItemNotesIconBorder}
        */
        border?: StockChartNavigatorCategoryAxisItemNotesIconBorder;
        /**
        The size of the icon.
        @member {number}
        */
        size?: number;
        /**
        The icon shape.The supported values are:
* "circle" - the marker shape is circle.
* "square" - the marker shape is square.
* "triangle" - the marker shape is triangle.
* "cross" - the marker shape is cross.
        @member {string}
        */
        type?: string;
        /**
        The icon visibility.
        @member {boolean}
        */
        visible?: boolean;
    }

    interface StockChartNavigatorCategoryAxisItemNotesLabelBorder {
        /**
        The color of the border. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the border.The following dash types are supported:
        @member {string}
        */
        dashType?: string;
        /**
        The width of the border in pixels. By default the border width is set to zero which means that the border will not appear.
        @member {number}
        */
        width?: number;
    }

    interface StockChartNavigatorCategoryAxisItemNotesLabel {
        /**
        The background color of the label. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        background?: string;
        /**
        The border of the label.
        @member {StockChartNavigatorCategoryAxisItemNotesLabelBorder}
        */
        border?: StockChartNavigatorCategoryAxisItemNotesLabelBorder;
        /**
        The text color of the label. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The font style of the label.
        @member {string}
        */
        font?: string;
        /**
        The template which renders the labels.The fields which can be used in the template are:
        @member {any}
        */
        template?: any;
        /**
        If set to true the chart will display the category notes label. By default the category notes label are visible.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The rotation angle of the label. By default the label are not rotated.
        @member {number}
        */
        rotation?: number;
        /**
        The format used to display the notes label. Uses kendo.format. Contains one placeholder ("{0}") which represents the category value.
        @member {string}
        */
        format?: string;
        /**
        The position of the labels.
        @member {string}
        */
        position?: string;
    }

    interface StockChartNavigatorCategoryAxisItemNotesLine {
        /**
        The line width of the notes.
        @member {number}
        */
        width?: number;
        /**
        The line color of the notes.
        @member {string}
        */
        color?: string;
        /**
        The length of the connecting lines in pixels.
        @member {number}
        */
        length?: number;
    }

    interface StockChartNavigatorCategoryAxisItemNotes {
        /**
        The position of the category axis note.
        @member {string}
        */
        position?: string;
        /**
        The icon of the notes.
        @member {StockChartNavigatorCategoryAxisItemNotesIcon}
        */
        icon?: StockChartNavigatorCategoryAxisItemNotesIcon;
        /**
        The label of the notes.
        @member {StockChartNavigatorCategoryAxisItemNotesLabel}
        */
        label?: StockChartNavigatorCategoryAxisItemNotesLabel;
        /**
        The line of the notes.
        @member {StockChartNavigatorCategoryAxisItemNotesLine}
        */
        line?: StockChartNavigatorCategoryAxisItemNotesLine;
        data?: StockChartNavigatorCategoryAxisItemNotesDataItem[];
    }

    interface StockChartNavigatorCategoryAxisItemPlotBand {
        /**
        The color of the plot band.
        @member {string}
        */
        color?: string;
        /**
        The start position of the plot band in axis units.
        @member {number}
        */
        from?: number;
        /**
        The opacity of the plot band.
        @member {number}
        */
        opacity?: number;
        /**
        The end position of the plot band in axis units.
        @member {number}
        */
        to?: number;
    }

    interface StockChartNavigatorCategoryAxisItemTitleBorder {
        /**
        The color of the border. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the border.The following dash types are supported:
        @member {string}
        */
        dashType?: string;
        /**
        The width of the border in pixels. By default the border width is set to zero which means that the border will not appear.
        @member {number}
        */
        width?: number;
    }

    interface StockChartNavigatorCategoryAxisItemTitleMargin {
        /**
        The bottom margin of the title.
        @member {number}
        */
        bottom?: number;
        /**
        The left margin of the title.
        @member {number}
        */
        left?: number;
        /**
        The right margin of the title.
        @member {number}
        */
        right?: number;
        /**
        The top margin of the title.
        @member {number}
        */
        top?: number;
    }

    interface StockChartNavigatorCategoryAxisItemTitlePadding {
        /**
        The bottom padding of the title.
        @member {number}
        */
        bottom?: number;
        /**
        The left padding of the title.
        @member {number}
        */
        left?: number;
        /**
        The right padding of the title.
        @member {number}
        */
        right?: number;
        /**
        The top padding of the title.
        @member {number}
        */
        top?: number;
    }

    interface StockChartNavigatorCategoryAxisItemTitle {
        /**
        The background color of the title. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        background?: string;
        /**
        The border of the title.
        @member {StockChartNavigatorCategoryAxisItemTitleBorder}
        */
        border?: StockChartNavigatorCategoryAxisItemTitleBorder;
        /**
        The text color of the title. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The font style of the title.
        @member {string}
        */
        font?: string;
        /**
        The margin of the title. A numeric value will set all margins.
        @member {StockChartNavigatorCategoryAxisItemTitleMargin}
        */
        margin?: StockChartNavigatorCategoryAxisItemTitleMargin;
        /**
        The padding of the title. A numeric value will set all paddings.
        @member {StockChartNavigatorCategoryAxisItemTitlePadding}
        */
        padding?: StockChartNavigatorCategoryAxisItemTitlePadding;
        /**
        The position of the title.The supported values are:
        @member {string}
        */
        position?: string;
        /**
        The rotation angle of the title. By default the title is not rotated.
        @member {number}
        */
        rotation?: number;
        /**
        The text of the title.
        @member {string}
        */
        text?: string;
        /**
        If set to true the chart will display the category axis title. By default the category axis title is visible.
        @member {boolean}
        */
        visible?: boolean;
    }

    interface StockChartNavigatorCategoryAxisItem {
        /**
        The discrete navigator.categoryAxis.baseUnitStep values when
either navigator.categoryAxis.baseUnit is set to "fit" or
navigator.categoryAxis.baseUnitStep is set to "auto".
        @member {StockChartNavigatorCategoryAxisItemAutoBaseUnitSteps}
        */
        autoBaseUnitSteps?: StockChartNavigatorCategoryAxisItemAutoBaseUnitSteps;
        /**
        Category index at which the first value axis crosses this axis (when set as an object).Category indices at which the value axes cross the category axis (when set as an array).
        @member {any}
        */
        axisCrossingValue?: any;
        /**
        The background color of the axis.
        @member {string}
        */
        background?: string;
        /**
        The base time interval for the date axis. The default base unit is determined automatically from the minimum difference
between subsequent categories.The supported values are:Setting baseUnit to "fit" will set such base unit and categoryAxis.baseUnitStep
that the total number of categories does not exceed categoryAxis.maxDateGroups.Series data is aggregated for the specified base unit using the series.aggregate function.
        @member {string}
        */
        baseUnit?: string;
        /**
        The step (interval) between categories in base units. Setting it to "auto" will set the step to such value
that the total number of categories does not exceed categoryAxis.maxDateGroups.This option is ignored if categoryAxis.baseUnit is set to "fit".
        @member {any}
        */
        baseUnitStep?: any;
        /**
        The category names. The chart will create a category for every item of the array.
        @member {any}
        */
        categories?: any;
        /**
        The color to apply to all axis elements. Accepts a valid CSS color string, including hex and rgb. Can be overridden by categoryAxis.labels.color and
categoryAxis.line.color.
        @member {string}
        */
        color?: string;
        /**
        The crosshair configuration options.
        @member {StockChartNavigatorCategoryAxisItemCrosshair}
        */
        crosshair?: StockChartNavigatorCategoryAxisItemCrosshair;
        /**
        The data item field which contains the category name. Requires the dataSource option to be set.
        @member {string}
        */
        field?: string;
        /**
        If set to true the chart will position categories and series points on major ticks. This removes the empty space before and after the series.The default value is false except for "area" and "verticalArea".
        @member {boolean}
        */
        justified?: boolean;
        /**
        The axis labels configuration.
        @member {StockChartNavigatorCategoryAxisItemLabels}
        */
        labels?: StockChartNavigatorCategoryAxisItemLabels;
        /**
        The configuration of the axis lines. Also affects the major and minor ticks, but not the grid lines.
        @member {StockChartNavigatorCategoryAxisItemLine}
        */
        line?: StockChartNavigatorCategoryAxisItemLine;
        /**
        The configuration of the major grid lines. These are the lines that are an extension of the major ticks through the
body of the chart.
        @member {StockChartNavigatorCategoryAxisItemMajorGridLines}
        */
        majorGridLines?: StockChartNavigatorCategoryAxisItemMajorGridLines;
        /**
        The configuration of the category axis major ticks.
        @member {StockChartNavigatorCategoryAxisItemMajorTicks}
        */
        majorTicks?: StockChartNavigatorCategoryAxisItemMajorTicks;
        /**
        The last date displayed on the category date axis. By default, the minimum date is the same as the last category.
This is often used in combination with the categoryAxis.min and categoryAxis.roundToBaseUnit options to
set up a fixed date range.
        @member {any}
        */
        max?: any;
        /**
        The maximum number of groups (categories) to display when
categoryAxis.baseUnit is set to "fit" or
categoryAxis.baseUnitStep is set to "auto".
        @member {number}
        */
        maxDateGroups?: number;
        /**
        The first date displayed on the category date axis. By default, the minimum date is the same as the first category.
This is often used in combination with the categoryAxis.min and categoryAxis.roundToBaseUnit options to
set up a fixed date range.
        @member {any}
        */
        min?: any;
        /**
        The configuration of the minor grid lines. These are the lines that are an extension of the minor ticks through the
body of the chart.
        @member {StockChartNavigatorCategoryAxisItemMinorGridLines}
        */
        minorGridLines?: StockChartNavigatorCategoryAxisItemMinorGridLines;
        /**
        The configuration of the category axis minor ticks.
        @member {StockChartNavigatorCategoryAxisItemMinorTicks}
        */
        minorTicks?: StockChartNavigatorCategoryAxisItemMinorTicks;
        plotBands?: StockChartNavigatorCategoryAxisItemPlotBand[];
        /**
        If set to true the category axis direction will be reversed. By default categories are listed from left to right and from bottom to top.
        @member {boolean}
        */
        reverse?: boolean;
        /**
        If set to true the chart will round the first and last date to the nearest base unit.The roundToBaseUnit option will be ignored if series.type is set to "bar", "column", "ohlc" or "candlestick".
        @member {boolean}
        */
        roundToBaseUnit?: boolean;
        /**
        The title configuration of the category axis.
        @member {StockChartNavigatorCategoryAxisItemTitle}
        */
        title?: StockChartNavigatorCategoryAxisItemTitle;
        /**
        If set to true the chart will display the category axis. By default the category axis is visible.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The week start day when categoryAxis.baseUnit is set to "weeks".The supported values are:
        @member {number}
        */
        weekStartDay?: number;
        /**
        The category axis notes configuration.
        @member {StockChartNavigatorCategoryAxisItemNotes}
        */
        notes?: StockChartNavigatorCategoryAxisItemNotes;
    }

    interface StockChartNavigatorHint {
        /**
        The visibility of the hint.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The hint template.
Template variables:
        @member {any}
        */
        template?: any;
        /**
        The format of the hint.
        @member {string}
        */
        format?: string;
    }

    interface StockChartNavigatorPaneBorder {
        /**
        The color of the border. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the border.The following dash types are supported:
        @member {string}
        */
        dashType?: string;
        /**
        The width of the border in pixels. By default the border width is set to zero which means that the border will not appear.
        @member {number}
        */
        width?: number;
    }

    interface StockChartNavigatorPaneMargin {
        /**
        The bottom margin of the navigator pane.
        @member {number}
        */
        bottom?: number;
        /**
        The left margin of the navigator pane.
        @member {number}
        */
        left?: number;
        /**
        The right margin of the navigator pane.
        @member {number}
        */
        right?: number;
        /**
        The top margin of the navigator pane.
        @member {number}
        */
        top?: number;
    }

    interface StockChartNavigatorPanePadding {
        /**
        The bottom padding of the navigator pane.
        @member {number}
        */
        bottom?: number;
        /**
        The left padding of the navigator pane.
        @member {number}
        */
        left?: number;
        /**
        The right padding of the navigator pane.
        @member {number}
        */
        right?: number;
        /**
        The top padding of the navigator pane.
        @member {number}
        */
        top?: number;
    }

    interface StockChartNavigatorPaneTitleBorder {
        /**
        The color of the border. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the border.The following dash types are supported:
        @member {string}
        */
        dashType?: string;
        /**
        The width of the border in pixels. By default the border width is set to zero which means that the border will not appear.
        @member {number}
        */
        width?: number;
    }

    interface StockChartNavigatorPaneTitleMargin {
        /**
        The bottom margin of the title.
        @member {number}
        */
        bottom?: number;
        /**
        The left margin of the title.
        @member {number}
        */
        left?: number;
        /**
        The right margin of the title.
        @member {number}
        */
        right?: number;
        /**
        The top margin of the title.
        @member {number}
        */
        top?: number;
    }

    interface StockChartNavigatorPaneTitle {
        /**
        The background color of the title. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        background?: string;
        /**
        The border of the title.
        @member {StockChartNavigatorPaneTitleBorder}
        */
        border?: StockChartNavigatorPaneTitleBorder;
        /**
        The text color of the title. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The font style of the title.
        @member {string}
        */
        font?: string;
        /**
        The margin of the title. A numeric value will set all margins.
        @member {StockChartNavigatorPaneTitleMargin}
        */
        margin?: StockChartNavigatorPaneTitleMargin;
        /**
        The position of the title.The supported values are:
        @member {string}
        */
        position?: string;
        /**
        The text of the title.
        @member {string}
        */
        text?: string;
        /**
        If set to true the chart will display the pane title. By default the pane title is visible.
        @member {boolean}
        */
        visible?: boolean;
    }

    interface StockChartNavigatorPane {
        /**
        The background color of the pane. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        background?: string;
        /**
        The border of the navigator pane.
        @member {StockChartNavigatorPaneBorder}
        */
        border?: StockChartNavigatorPaneBorder;
        /**
        The navigator pane height in pixels.
        @member {number}
        */
        height?: number;
        /**
        The margin of the pane. A numeric value will set all margins.
        @member {StockChartNavigatorPaneMargin}
        */
        margin?: StockChartNavigatorPaneMargin;
        /**
        The unique name of the navigator pane.
        @member {string}
        */
        name?: string;
        /**
        The padding of the pane. A numeric value will set all paddings.
        @member {StockChartNavigatorPanePadding}
        */
        padding?: StockChartNavigatorPanePadding;
        /**
        The title configuration of the navigator pane.
        @member {StockChartNavigatorPaneTitle}
        */
        title?: StockChartNavigatorPaneTitle;
    }

    interface StockChartNavigatorSelect {
        /**
        The lower boundary of the selected range.
        @member {Date}
        */
        from?: Date;
        /**
        The upper boundary of the selected range.
        @member {Date}
        */
        to?: Date;
    }

    interface StockChartNavigatorSeriesItemBorder {
        /**
        The color of the border.  It defaults to the color of the current series.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the border.
        @member {string}
        */
        dashType?: string;
        /**
        The width of the border.
        @member {number}
        */
        width?: number;
    }

    interface StockChartNavigatorSeriesItemHighlightBorder {
        /**
        The width of the border.
        @member {number}
        */
        width?: number;
        /**
        The border color.
        @member {string}
        */
        color?: string;
        /**
        The border opacity.
        @member {number}
        */
        opacity?: number;
    }

    interface StockChartNavigatorSeriesItemHighlightLine {
        /**
        The width of the line.
        @member {number}
        */
        width?: number;
        /**
        The line color.
        @member {string}
        */
        color?: string;
        /**
        The opacity of the line.
        @member {number}
        */
        opacity?: number;
    }

    interface StockChartNavigatorSeriesItemHighlight {
        /**
        The border of highlighted points. The color is computed automatically from the base point color.
        @member {StockChartNavigatorSeriesItemHighlightBorder}
        */
        border?: StockChartNavigatorSeriesItemHighlightBorder;
        /**
        The highlight color.** Available only for pie series **
        @member {string}
        */
        color?: string;
        /**
        Line options for highlighted points. The color is computed automatically from the base point color.** Available only for candlestick series **
        @member {StockChartNavigatorSeriesItemHighlightLine}
        */
        line?: StockChartNavigatorSeriesItemHighlightLine;
        /**
        The opacity of the highlighted points.
        @member {number}
        */
        opacity?: number;
        /**
        A value indicating if the series points should be highlighted.
        @member {boolean}
        */
        visible?: boolean;
    }

    interface StockChartNavigatorSeriesItemLabelsBorder {
        /**
        The color of the border.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the border.
        @member {string}
        */
        dashType?: string;
        /**
        The width of the border.
        @member {number}
        */
        width?: number;
    }

    interface StockChartNavigatorSeriesItemLabels {
        /**
        The background color of the labels.
        @member {string}
        */
        background?: string;
        /**
        The border of the labels.
        @member {StockChartNavigatorSeriesItemLabelsBorder}
        */
        border?: StockChartNavigatorSeriesItemLabelsBorder;
        /**
        The text color of the labels.
        @member {string}
        */
        color?: string;
        /**
        The font style of the labels.
        @member {string}
        */
        font?: string;
        /**
        The format of the labels.
        @member {string}
        */
        format?: string;
        /**
        The margin of the labels.
        @member {any}
        */
        margin?: any;
        /**
        The padding of the labels.
        @member {any}
        */
        padding?: any;
        /**
        Defines the position of the labels.
        @member {string}
        */
        position?: string;
        /**
        The template which renders the chart series label.The fields which can be used in the template are:
        @member {any}
        */
        template?: any;
        /**
        The visibility of the labels.
        @member {boolean}
        */
        visible?: boolean;
    }

    interface StockChartNavigatorSeriesItemLine {
        /**
        The line color.
        @member {string}
        */
        color?: string;
        /**
        The line opacity.
        @member {number}
        */
        opacity?: number;
        /**
        The line width.
        @member {string}
        */
        width?: string;
    }

    interface StockChartNavigatorSeriesItemMarkersBorder {
        /**
        The color of the border.
        @member {string}
        */
        color?: string;
        /**
        The width of the border.
        @member {number}
        */
        width?: number;
    }

    interface StockChartNavigatorSeriesItemMarkers {
        /**
        The background color of the current series markers.
        @member {string}
        */
        background?: string;
        /**
        The border of the markers.
        @member {StockChartNavigatorSeriesItemMarkersBorder}
        */
        border?: StockChartNavigatorSeriesItemMarkersBorder;
        /**
        The rotation angle of the markers.
        @member {any}
        */
        rotation?: any;
        /**
        The marker size.
        @member {number}
        */
        size?: number;
        /**
        Configures the markers shape type.
        @member {string}
        */
        type?: string;
        /**
        The markers visibility.
        @member {boolean}
        */
        visible?: boolean;
    }

    interface StockChartNavigatorSeriesItemOverlay {
        /**
        The gradient name.Available options:
        @member {string}
        */
        gradient?: string;
    }

    interface StockChartNavigatorSeriesItemStack {
        /**
        The type of stack to plot. The following types are supported:
        @member {string}
        */
        type?: string;
        /**
        Indicates that the series should be stacked in a group with the specified name.
        @member {string}
        */
        group?: string;
    }

    interface StockChartNavigatorSeriesItemTooltipBorder {
        /**
        The color of the border.
        @member {string}
        */
        color?: string;
        /**
        The width of the border.
        @member {number}
        */
        width?: number;
    }

    interface StockChartNavigatorSeriesItemTooltip {
        /**
        The background color of the tooltip. The default is determined from the series color.
        @member {string}
        */
        background?: string;
        /**
        The border configuration options.
        @member {StockChartNavigatorSeriesItemTooltipBorder}
        */
        border?: StockChartNavigatorSeriesItemTooltipBorder;
        /**
        The text color of the tooltip. The default is the same as the series labels color.
        @member {string}
        */
        color?: string;
        /**
        The tooltip font.
        @member {string}
        */
        font?: string;
        /**
        The tooltip format. Format variables depend on the series type:
        @member {string}
        */
        format?: string;
        /**
        The padding of the tooltip.
        @member {any}
        */
        padding?: any;
        /**
        The tooltip template.
Template variables:
        @member {any}
        */
        template?: any;
        /**
        A value indicating if the tooltip should be displayed.
        @member {boolean}
        */
        visible?: boolean;
    }

    interface StockChartNavigatorSeriesItem {
        /**
        The type of the series. Available types:
        @member {string}
        */
        type?: string;
        /**
        The dash type of line chart.The following dash types are supported:
        @member {string}
        */
        dashType?: string;
        /**
        Array of data items. The data item type can be either a:
        @member {any}
        */
        data?: any;
        /**
        The data field containing the high value.** Available for candlestick and ohlc series only **
        @member {string}
        */
        highField?: string;
        /**
        The data field containing the series value.
        @member {string}
        */
        field?: string;
        /**
        The data item field which contains the category name or date.
        @member {string}
        */
        categoryField?: string;
        /**
        The navigator series name.
        @member {string}
        */
        name?: string;
        /**
        Configures the appearance of highlighted points.** Applicable to candlestick and ohlc series. **
        @member {StockChartNavigatorSeriesItemHighlight}
        */
        highlight?: StockChartNavigatorSeriesItemHighlight;
        /**
        The aggregate function to apply for date series.This function is used when a category (an year, month, etc.) contains two or more points.
The function return value is displayed instead of the individual points.The supported values are:
        @member {string}
        */
        aggregate?: string;
        /**
        The name of the value axis to use.** Applicable to area, column, line, ohlc and candlestick series **
        @member {string}
        */
        axis?: string;
        /**
        The border of the points.** Applicable to column, ohlc and candlestick series **
        @member {StockChartNavigatorSeriesItemBorder}
        */
        border?: StockChartNavigatorSeriesItemBorder;
        /**
        The data field containing the close value.** Available for candlestick and ohlc series only **
        @member {string}
        */
        closeField?: string;
        /**
        The series base color. The supported values are:
        @member {string}
        */
        color?: string;
        /**
        The data field containing the point color.** Applicable for column, candlestick and ohlc series. **
        @member {string}
        */
        colorField?: string;
        /**
        The series color when open value is smoller then close value.** Available for candlestick series only **
        @member {string}
        */
        downColor?: string;
        /**
        The data field containing the body color.** Available for candlestick series only **
        @member {string}
        */
        downColorField?: string;
        /**
        The distance between category clusters.** Applicable for column, candlestick and ohlc series. **
        @member {number}
        */
        gap?: number;
        /**
        Configures the series data labels.
        @member {StockChartNavigatorSeriesItemLabels}
        */
        labels?: StockChartNavigatorSeriesItemLabels;
        /**
        Line options.** Applicable to area, candlestick and ohlc series. **
        @member {StockChartNavigatorSeriesItemLine}
        */
        line?: StockChartNavigatorSeriesItemLine;
        /**
        The data field containing the low value.** Available for candlestick and ohlc series **
        @member {string}
        */
        lowField?: string;
        /**
        Marker options.** Applicable for area and line series. **
        @member {StockChartNavigatorSeriesItemMarkers}
        */
        markers?: StockChartNavigatorSeriesItemMarkers;
        /**
        The behavior for handling missing values. The supported values are:
        @member {string}
        */
        missingValues?: string;
        /**
        The supported values are:
        @member {string}
        */
        style?: string;
        /**
        The series opacity.
        @member {number}
        */
        opacity?: number;
        /**
        The data field containing the open value.** Available for candlestick and ohlc series **
        @member {string}
        */
        openField?: string;
        /**
        The effects overlay.
        @member {StockChartNavigatorSeriesItemOverlay}
        */
        overlay?: StockChartNavigatorSeriesItemOverlay;
        /**
        Space between points as proportion of the point width.Available for column, candlestick and ohlc series.
        @member {number}
        */
        spacing?: number;
        /**
        A boolean value indicating if the series should be stacked.
A string value is interpreted as navigator.series.stack.group.
        @member {StockChartNavigatorSeriesItemStack}
        */
        stack?: StockChartNavigatorSeriesItemStack;
        /**
        The data point tooltip configuration options.
        @member {StockChartNavigatorSeriesItemTooltip}
        */
        tooltip?: StockChartNavigatorSeriesItemTooltip;
        /**
        The line width.** Applicable for line series. **
        @member {number}
        */
        width?: number;
    }

    interface StockChartNavigator {
        categoryAxis?: StockChartNavigatorCategoryAxisItem[];
        /**
        Navigator DataSource configuration or instance.When the navigator is bound via its own data source,
it will automatically set "from" and "to" filters on the main data source.This, in conjunction with server filtering, allows you to visualize large data sets
without loading them at once.
        @member {any}
        */
        dataSource?: any;
        /**
        Indicates whether the navigator will call read on the data source initially.
Applicable only when using a dedicated navigator data source.
        @member {boolean}
        */
        autoBind?: boolean;
        /**
        The field containing the point date.
It is used as a default field for the navigator axis.The data item field value must be either:
        @member {string}
        */
        dateField?: string;
        /**
        The navigator pane configuration.
        @member {StockChartNavigatorPane}
        */
        pane?: StockChartNavigatorPane;
        /**
        The visibility of the navigator.
        @member {boolean}
        */
        visible?: boolean;
        series?: StockChartNavigatorSeriesItem[];
        /**
        Specifies the initially selected range.The full range of values is shown if no range is specified.
        @member {StockChartNavigatorSelect}
        */
        select?: StockChartNavigatorSelect;
        /**
        Default options for the navigator hint.
        @member {StockChartNavigatorHint}
        */
        hint?: StockChartNavigatorHint;
    }

    interface StockChartPaneBorder {
        /**
        The color of the border.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the border.
        @member {string}
        */
        dashType?: string;
        /**
        The width of the border.
        @member {number}
        */
        width?: number;
    }

    interface StockChartPaneTitleBorder {
        /**
        The color of the border. Any valid CSS color string will work here, including
hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the border.
        @member {string}
        */
        dashType?: string;
        /**
        The width of the border.
        @member {number}
        */
        width?: number;
    }

    interface StockChartPaneTitle {
        /**
        The background color of the title. Any valid CSS color string will work here, including
hex and rgb.
        @member {string}
        */
        background?: string;
        /**
        The border of the title.
        @member {StockChartPaneTitleBorder}
        */
        border?: StockChartPaneTitleBorder;
        /**
        The text color of the title. Any valid CSS color string will work here, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The font style of the title.
        @member {string}
        */
        font?: string;
        /**
        The margin of the title.
        @member {any}
        */
        margin?: any;
        /**
        The position of the title.
        @member {string}
        */
        position?: string;
        /**
        The text of the title.
        @member {string}
        */
        text?: string;
        /**
        The visibility of the title.
        @member {boolean}
        */
        visible?: boolean;
    }

    interface StockChartPane {
        /**
        The unique pane name.
        @member {string}
        */
        name?: string;
        /**
        The margin of the pane.
        @member {any}
        */
        margin?: any;
        /**
        The padding of the pane.
        @member {any}
        */
        padding?: any;
        /**
        The background color of the pane.
        @member {string}
        */
        background?: string;
        /**
        The border of the pane.
        @member {StockChartPaneBorder}
        */
        border?: StockChartPaneBorder;
        /**
        Specifies whether the charts in the pane should be clipped.
        @member {boolean}
        */
        clip?: boolean;
        /**
        The pane height in pixels.
        @member {number}
        */
        height?: number;
        /**
        The pane title text or configuration.
        @member {StockChartPaneTitle}
        */
        title?: StockChartPaneTitle;
    }

    interface StockChartPlotAreaBorder {
        /**
        The color of the border.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the border.
        @member {string}
        */
        dashType?: string;
        /**
        The width of the border.
        @member {number}
        */
        width?: number;
    }

    interface StockChartPlotArea {
        /**
        The background color of the plot area.
        @member {string}
        */
        background?: string;
        /**
        The background opacity of the plot area.
        @member {number}
        */
        opacity?: number;
        /**
        The border of the plot area.
        @member {StockChartPlotAreaBorder}
        */
        border?: StockChartPlotAreaBorder;
        /**
        The margin of the plot area.
        @member {any}
        */
        margin?: any;
    }

    interface StockChartSeriesItemBorder {
        /**
        The color of the border.  It defaults to the color of the current series.
        @member {any}
        */
        color?: any;
        /**
        The dash type of the border.
        @member {any}
        */
        dashType?: any;
        /**
        The border opacity.
        @member {any}
        */
        opacity?: any;
        /**
        The width of the border.
        @member {any}
        */
        width?: any;
    }

    interface StockChartSeriesItemHighlightBorder {
        /**
        The width of the border.
        @member {number}
        */
        width?: number;
        /**
        The border color.
        @member {string}
        */
        color?: string;
        /**
        The border opacity.
        @member {number}
        */
        opacity?: number;
    }

    interface StockChartSeriesItemHighlightLine {
        /**
        The width of the line.
        @member {number}
        */
        width?: number;
        /**
        The line color.
        @member {string}
        */
        color?: string;
        /**
        The opacity of the line.
        @member {number}
        */
        opacity?: number;
    }

    interface StockChartSeriesItemHighlight {
        /**
        A value indicating if the series points should be highlighted.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The border of highlighted points. The color is computed automatically from the base point color.** Applicable to bubble, pie, candlestick and ohlc series. **
        @member {StockChartSeriesItemHighlightBorder}
        */
        border?: StockChartSeriesItemHighlightBorder;
        /**
        The highlight color.** Available only for pie series **
        @member {string}
        */
        color?: string;
        /**
        Line options for highlighted points. The color is computed automatically from the base point color.** Available only for candlestick series **
        @member {StockChartSeriesItemHighlightLine}
        */
        line?: StockChartSeriesItemHighlightLine;
        /**
        The opacity of the highlighted points.** Applicable to bubble, pie, candlestick and ohlc series. **
        @member {number}
        */
        opacity?: number;
    }

    interface StockChartSeriesItemLabelsBorder {
        /**
        The color of the border.
        @member {any}
        */
        color?: any;
        /**
        The dash type of the border.
        @member {any}
        */
        dashType?: any;
        /**
        The width of the border.
        @member {any}
        */
        width?: any;
    }

    interface StockChartSeriesItemLabels {
        /**
        The background color of the labels.
        @member {any}
        */
        background?: any;
        /**
        The border of the labels.
        @member {StockChartSeriesItemLabelsBorder}
        */
        border?: StockChartSeriesItemLabelsBorder;
        /**
        The text color of the labels.
        @member {any}
        */
        color?: any;
        /**
        The font style of the labels.
        @member {any}
        */
        font?: any;
        /**
        The format of the labels.
        @member {any}
        */
        format?: any;
        /**
        The margin of the labels.
        @member {any}
        */
        margin?: any;
        /**
        The padding of the labels.
        @member {any}
        */
        padding?: any;
        /**
        Defines the position of the labels.
        @member {any}
        */
        position?: any;
        /**
        The template which renders the chart series label.The fields which can be used in the template are:
        @member {any}
        */
        template?: any;
        /**
        The visibility of the labels.
        @member {any}
        */
        visible?: any;
    }

    interface StockChartSeriesItemLine {
        /**
        The line color.
        @member {string}
        */
        color?: string;
        /**
        The line opacity.
        @member {number}
        */
        opacity?: number;
        /**
        The line width.
        @member {string}
        */
        width?: string;
        /**
        The supported values are:
        @member {string}
        */
        style?: string;
    }

    interface StockChartSeriesItemMarkersBorder {
        /**
        The color of the border.
        @member {any}
        */
        color?: any;
        /**
        The width of the border.
        @member {any}
        */
        width?: any;
    }

    interface StockChartSeriesItemMarkers {
        /**
        The background color of the current series markers.
        @member {any}
        */
        background?: any;
        /**
        The border of the markers.
        @member {StockChartSeriesItemMarkersBorder}
        */
        border?: StockChartSeriesItemMarkersBorder;
        /**
        The marker size.
        @member {any}
        */
        size?: any;
        /**
        The rotation angle of the markers.
        @member {any}
        */
        rotation?: any;
        /**
        Configures the markers shape type.
        @member {any}
        */
        type?: any;
        /**
        The markers visibility.
        @member {any}
        */
        visible?: any;
    }

    interface StockChartSeriesItemNotesIconBorder {
        /**
        The border color of the icon.
        @member {string}
        */
        color?: string;
        /**
        The border width of the icon.
        @member {number}
        */
        width?: number;
    }

    interface StockChartSeriesItemNotesIcon {
        /**
        The background color of the notes icon.
        @member {string}
        */
        background?: string;
        /**
        The border of the icon.
        @member {StockChartSeriesItemNotesIconBorder}
        */
        border?: StockChartSeriesItemNotesIconBorder;
        /**
        The size of the icon.
        @member {number}
        */
        size?: number;
        /**
        The icon shape.The supported values are:
* "circle" - the marker shape is circle.
* "square" - the marker shape is square.
* "triangle" - the marker shape is triangle.
* "cross" - the marker shape is cross.
        @member {string}
        */
        type?: string;
        /**
        The icon visibility.
        @member {boolean}
        */
        visible?: boolean;
    }

    interface StockChartSeriesItemNotesLabelBorder {
        /**
        The color of the border. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the border.The following dash types are supported:
        @member {string}
        */
        dashType?: string;
        /**
        The width of the border in pixels. By default the border width is set to zero which means that the border will not appear.
        @member {number}
        */
        width?: number;
    }

    interface StockChartSeriesItemNotesLabel {
        /**
        The background color of the label. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        background?: string;
        /**
        The border of the label.
        @member {StockChartSeriesItemNotesLabelBorder}
        */
        border?: StockChartSeriesItemNotesLabelBorder;
        /**
        The text color of the label. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The font style of the label.
        @member {string}
        */
        font?: string;
        /**
        The template which renders the labels.The fields which can be used in the template are:
        @member {any}
        */
        template?: any;
        /**
        If set to true the chart will display the series notes label. By default the series notes label are visible.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The rotation angle of the label. By default the label are not rotated.
        @member {number}
        */
        rotation?: number;
        /**
        The format used to display the notes label. Uses kendo.format. Contains one placeholder ("{0}") which represents the axis value.
        @member {string}
        */
        format?: string;
        /**
        The position of the labels.
        @member {string}
        */
        position?: string;
    }

    interface StockChartSeriesItemNotesLine {
        /**
        The line width of the notes.
        @member {number}
        */
        width?: number;
        /**
        The line color of the notes.
        @member {string}
        */
        color?: string;
        /**
        The length of the connecting lines in pixels.
        @member {number}
        */
        length?: number;
    }

    interface StockChartSeriesItemNotes {
        /**
        The position of the series note.
        @member {string}
        */
        position?: string;
        /**
        The icon of the notes.
        @member {StockChartSeriesItemNotesIcon}
        */
        icon?: StockChartSeriesItemNotesIcon;
        /**
        The label of the notes.
        @member {StockChartSeriesItemNotesLabel}
        */
        label?: StockChartSeriesItemNotesLabel;
        /**
        The line of the notes.
        @member {StockChartSeriesItemNotesLine}
        */
        line?: StockChartSeriesItemNotesLine;
    }

    interface StockChartSeriesItemOverlay {
        /**
        The gradient name.Available options:
        @member {string}
        */
        gradient?: string;
    }

    interface StockChartSeriesItemStack {
        /**
        The type of stack to plot. The following types are supported:
        @member {string}
        */
        type?: string;
        /**
        Indicates that the series should be stacked in a group with the specified name.
        @member {string}
        */
        group?: string;
    }

    interface StockChartSeriesItemTargetBorder {
        /**
        The color of the border.
        @member {any}
        */
        color?: any;
        /**
        The dash type of the border.
        @member {any}
        */
        dashType?: any;
        /**
        The width of the border.
        @member {any}
        */
        width?: any;
    }

    interface StockChartSeriesItemTargetLine {
        /**
        The width of the line.
        @member {any}
        */
        width?: any;
    }

    interface StockChartSeriesItemTarget {
        /**
        The target line.
        @member {StockChartSeriesItemTargetLine}
        */
        line?: StockChartSeriesItemTargetLine;
        /**
        The target color.
        @member {any}
        */
        color?: any;
        /**
        The border of the target.
        @member {StockChartSeriesItemTargetBorder}
        */
        border?: StockChartSeriesItemTargetBorder;
    }

    interface StockChartSeriesItemTooltipBorder {
        /**
        The color of the border.
        @member {string}
        */
        color?: string;
        /**
        The width of the border.
        @member {number}
        */
        width?: number;
    }

    interface StockChartSeriesItemTooltip {
        /**
        The background color of the tooltip. The default is determined from the series color.
        @member {string}
        */
        background?: string;
        /**
        The border configuration options.
        @member {StockChartSeriesItemTooltipBorder}
        */
        border?: StockChartSeriesItemTooltipBorder;
        /**
        The text color of the tooltip. The default is the same as the series labels color.
        @member {string}
        */
        color?: string;
        /**
        The tooltip font.
        @member {string}
        */
        font?: string;
        /**
        The tooltip format. Format variables depend on the series type:
        @member {string}
        */
        format?: string;
        /**
        The padding of the tooltip.
        @member {any}
        */
        padding?: any;
        /**
        The tooltip template.
Template variables:
        @member {any}
        */
        template?: any;
        /**
        A value indicating if the tooltip should be displayed.
        @member {boolean}
        */
        visible?: boolean;
    }

    interface StockChartSeriesItem {
        /**
        The type of the series. Available types:
        @member {string}
        */
        type?: string;
        /**
        The series line dash type.** Applicable only to line series **
        @member {string}
        */
        dashType?: string;
        /**
        Array of data items. The data item type can be either a:
        @member {any}
        */
        data?: any;
        /**
        The data field containing the high value.** Available for candlestick and ohlc series only **
        @member {string}
        */
        highField?: string;
        /**
        The data field containing the series value.
        @member {string}
        */
        field?: string;
        /**
        The data item field which contains the category name or date.
        @member {string}
        */
        categoryField?: string;
        /**
        The data field containing the current value.** Available for bullet and verticalBullet series. **
        @member {string}
        */
        currentField?: string;
        /**
        The data field containing the target value.** Available for bullet and verticalBullet series. **
        @member {string}
        */
        targetField?: string;
        /**
        The series name visible in the legend.
        @member {string}
        */
        name?: string;
        /**
        Configures the appearance of highlighted points.
        @member {StockChartSeriesItemHighlight}
        */
        highlight?: StockChartSeriesItemHighlight;
        /**
        The aggregate function to apply for date series.This function is used when a category (an year, month, etc.) contains two or more points.
The function return value is displayed instead of the individual points.The supported values are:
        @member {string}
        */
        aggregate?: string;
        /**
        The name of the value axis to use.** Applicable to area, column, line, ohlc and candlestick series **
        @member {string}
        */
        axis?: string;
        /**
        The border of the points.** Applicable to column, ohlc and candlestick series **
        @member {StockChartSeriesItemBorder}
        */
        border?: StockChartSeriesItemBorder;
        /**
        The data field containing the close value.** Available for candlestick and ohlc series only **
        @member {string}
        */
        closeField?: string;
        /**
        The series base color. The supported values are:
        @member {any}
        */
        color?: any;
        /**
        The data field containing the point color.** Applicable for column, candlestick and ohlc series. **
        @member {string}
        */
        colorField?: string;
        /**
        The series color when open value is smoller then close value.** Available for candlestick series only **
        @member {any}
        */
        downColor?: any;
        /**
        The data field containing the body color.** Available for candlestick series only **
        @member {string}
        */
        downColorField?: string;
        /**
        The distance between category clusters.** Applicable for column, candlestick and ohlc series. **
        @member {number}
        */
        gap?: number;
        /**
        Configures the series data labels.
        @member {StockChartSeriesItemLabels}
        */
        labels?: StockChartSeriesItemLabels;
        /**
        Line options.** Applicable to area, candlestick and ohlc series. **
        @member {StockChartSeriesItemLine}
        */
        line?: StockChartSeriesItemLine;
        /**
        The data field containing the low value.** Available for candlestick and ohlc series **
        @member {string}
        */
        lowField?: string;
        /**
        Marker options.** Applicable for area and line series. **
        @member {StockChartSeriesItemMarkers}
        */
        markers?: StockChartSeriesItemMarkers;
        /**
        The behavior for handling missing values. The supported values are:
        @member {string}
        */
        missingValues?: string;
        /**
        The supported values are:
        @member {string}
        */
        style?: string;
        /**
        Color to use for bars with negative values.** Applicable only to column series. **The plot stops before the missing point and continues after it.
        @member {string}
        */
        negativeColor?: string;
        /**
        The series opacity.
        @member {number}
        */
        opacity?: number;
        /**
        The data field containing the open value.** Available for candlestick and ohlc series **
        @member {string}
        */
        openField?: string;
        /**
        The effects overlay.
        @member {StockChartSeriesItemOverlay}
        */
        overlay?: StockChartSeriesItemOverlay;
        /**
        Space between points as proportion of the point width.Available for column, candlestick and ohlc series.
        @member {number}
        */
        spacing?: number;
        /**
        A boolean value indicating if the series should be stacked.
A string value is interpreted as series.stack.group.
        @member {StockChartSeriesItemStack}
        */
        stack?: StockChartSeriesItemStack;
        /**
        The data point tooltip configuration options.
        @member {StockChartSeriesItemTooltip}
        */
        tooltip?: StockChartSeriesItemTooltip;
        /**
        A value indicating whether to show the series name in the legend.
        @member {boolean}
        */
        visibleInLegend?: boolean;
        /**
        The line width.** Applicable for area and line series. **
        @member {number}
        */
        width?: number;
        /**
        The target of the bullet chart.
        @member {StockChartSeriesItemTarget}
        */
        target?: StockChartSeriesItemTarget;
        /**
        The series notes configuration.
        @member {StockChartSeriesItemNotes}
        */
        notes?: StockChartSeriesItemNotes;
    }

    interface StockChartSeriesDefaultsBorder {
        /**
        The color of the border.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the border.
        @member {string}
        */
        dashType?: string;
        /**
        The width of the border.
        @member {number}
        */
        width?: number;
    }

    interface StockChartSeriesDefaultsLabelsBorder {
        /**
        The color of the border.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the border.
        @member {string}
        */
        dashType?: string;
        /**
        The width of the border.
        @member {number}
        */
        width?: number;
    }

    interface StockChartSeriesDefaultsLabels {
        /**
        The background color of the labels. Any valid CSS color string will work here,
including hex and rgb.
        @member {string}
        */
        background?: string;
        /**
        The border of the labels.
        @member {StockChartSeriesDefaultsLabelsBorder}
        */
        border?: StockChartSeriesDefaultsLabelsBorder;
        /**
        The text color of the labels. Any valid CSS color string will work here, including hex
and rgb.
        @member {string}
        */
        color?: string;
        /**
        The font style of the labels.
labels
        @member {string}
        */
        font?: string;
        /**
        The format of the labels.
        @member {string}
        */
        format?: string;
        /**
        The margin of the labels.
        @member {any}
        */
        margin?: any;
        /**
        The padding of the labels.
        @member {any}
        */
        padding?: any;
        /**
        The label template.
Template variables:
        @member {any}
        */
        template?: any;
        /**
        The visibility of the labels.
        @member {boolean}
        */
        visible?: boolean;
    }

    interface StockChartSeriesDefaultsStack {
        /**
        The type of stack to plot. The following types are supported:
        @member {string}
        */
        type?: string;
    }

    interface StockChartSeriesDefaultsTooltipBorder {
        /**
        The color of the border.
        @member {string}
        */
        color?: string;
        /**
        The width of the border.
        @member {number}
        */
        width?: number;
    }

    interface StockChartSeriesDefaultsTooltip {
        /**
        The background color of the tooltip. The default is determined from the series color.
        @member {string}
        */
        background?: string;
        /**
        The border configuration options.
        @member {StockChartSeriesDefaultsTooltipBorder}
        */
        border?: StockChartSeriesDefaultsTooltipBorder;
        /**
        The text color of the tooltip. The default is the same as the series labels color.
        @member {string}
        */
        color?: string;
        /**
        The tooltip font.
        @member {string}
        */
        font?: string;
        /**
        The tooltip format.
        @member {string}
        */
        format?: string;
        /**
        The padding of the tooltip.
        @member {any}
        */
        padding?: any;
        /**
        The tooltip template.
Template variables:
        @member {any}
        */
        template?: any;
        /**
        A value indicating if the tooltip should be displayed.
        @member {boolean}
        */
        visible?: boolean;
    }

    interface StockChartSeriesDefaults {
        /**
        The area configuration options.
The default options for all area series. For more details see the series options.
        @member {any}
        */
        area?: any;
        /**
        The candlestick configuration options.
The default options for all candlestick series. For more details see the series options.
        @member {any}
        */
        candlestick?: any;
        /**
        The ohlc configuration options.
The default options for all ohlc series. For more details see the series options.
        @member {any}
        */
        ohlc?: any;
        /**
        The border of the series.
        @member {StockChartSeriesDefaultsBorder}
        */
        border?: StockChartSeriesDefaultsBorder;
        /**
        The column configuration options.
The default options for all column series. For more details see the series options.
        @member {any}
        */
        column?: any;
        /**
        The distance between category clusters.
        @member {number}
        */
        gap?: number;
        /**
        Configures the series data labels.
        @member {StockChartSeriesDefaultsLabels}
        */
        labels?: StockChartSeriesDefaultsLabels;
        /**
        The line configuration options.
The default options for all line series. For more details see the series options.
        @member {any}
        */
        line?: any;
        /**
        The effects overlay.
        @member {any}
        */
        overlay?: any;
        /**
        The pie configuration options.
The default options for all pie series. For more details see the series options.
        @member {any}
        */
        pie?: any;
        /**
        Space between bars.
        @member {number}
        */
        spacing?: number;
        /**
        A boolean value indicating if the series should be stacked.
        @member {StockChartSeriesDefaultsStack}
        */
        stack?: StockChartSeriesDefaultsStack;
        /**
        The default type of the series.The supported values are:
        @member {string}
        */
        type?: string;
        /**
        The data point tooltip configuration options.
        @member {StockChartSeriesDefaultsTooltip}
        */
        tooltip?: StockChartSeriesDefaultsTooltip;
    }

    interface StockChartTitleBorder {
        /**
        The color of the border.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the border.
        @member {string}
        */
        dashType?: string;
        /**
        The width of the border.
        @member {number}
        */
        width?: number;
    }

    interface StockChartTitle {
        /**
        The alignment of the title.
        @member {string}
        */
        align?: string;
        /**
        The background color of the title.
        @member {string}
        */
        background?: string;
        /**
        The border of the title.
        @member {StockChartTitleBorder}
        */
        border?: StockChartTitleBorder;
        /**
        The font of the title.
        @member {string}
        */
        font?: string;
        /**
        The margin of the title.
        @member {any}
        */
        margin?: any;
        /**
        The padding of the title.
        @member {any}
        */
        padding?: any;
        /**
        The position of the title.
        @member {string}
        */
        position?: string;
        /**
        The title of the chart. You can also set the text directly for a title with default options.
        @member {string}
        */
        text?: string;
        /**
        The visibility of the title.
        @member {boolean}
        */
        visible?: boolean;
    }

    interface StockChartTooltipBorder {
        /**
        The color of the border.
        @member {string}
        */
        color?: string;
        /**
        The width of the border.
        @member {number}
        */
        width?: number;
    }

    interface StockChartTooltip {
        /**
        The background color of the tooltip. The default is determined from the series color.
        @member {string}
        */
        background?: string;
        /**
        The border configuration options.
        @member {StockChartTooltipBorder}
        */
        border?: StockChartTooltipBorder;
        /**
        The text color of the tooltip. The default is the same as the series labels color.
        @member {string}
        */
        color?: string;
        /**
        The tooltip font.
        @member {string}
        */
        font?: string;
        /**
        The tooltip format.
        @member {string}
        */
        format?: string;
        /**
        The padding of the tooltip.
        @member {any}
        */
        padding?: any;
        /**
        The tooltip template.
Template variables:
        @member {any}
        */
        template?: any;
        /**
        A value indicating if the tooltip should be displayed.
        @member {boolean}
        */
        visible?: boolean;
        /**
        A value indicating if the tooltip should be shared.
        @member {boolean}
        */
        shared?: boolean;
        /**
        The shared tooltip template.
Template variables:
        @member {string}
        */
        sharedTemplate?: string;
    }

    interface StockChartValueAxisItemCrosshairTooltipBorder {
        /**
        The color of the border.
        @member {string}
        */
        color?: string;
        /**
        The width of the border.
        @member {number}
        */
        width?: number;
    }

    interface StockChartValueAxisItemCrosshairTooltip {
        /**
        The background color of the tooltip.
        @member {string}
        */
        background?: string;
        /**
        The border configuration options.
        @member {StockChartValueAxisItemCrosshairTooltipBorder}
        */
        border?: StockChartValueAxisItemCrosshairTooltipBorder;
        /**
        The text color of the tooltip.
        @member {string}
        */
        color?: string;
        /**
        The tooltip font.
        @member {string}
        */
        font?: string;
        /**
        The tooltip format.
        @member {string}
        */
        format?: string;
        /**
        The padding of the tooltip.
        @member {any}
        */
        padding?: any;
        /**
        The tooltip template.
Template variables:
        @member {any}
        */
        template?: any;
        /**
        A value indicating if the tooltip should be displayed.
        @member {boolean}
        */
        visible?: boolean;
    }

    interface StockChartValueAxisItemCrosshair {
        /**
        The color of the crosshair.
        @member {string}
        */
        color?: string;
        /**
        The width of the crosshair.
        @member {number}
        */
        width?: number;
        /**
        The opacity of the crosshair.
        @member {number}
        */
        opacity?: number;
        /**
        The dash type of the crosshair.
        @member {number}
        */
        dashType?: number;
        /**
        The dash type of the crosshair.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The crosshar tooltip configuration options.
        @member {StockChartValueAxisItemCrosshairTooltip}
        */
        tooltip?: StockChartValueAxisItemCrosshairTooltip;
    }

    interface StockChartValueAxisItemLabelsBorder {
        /**
        The color of the border. Any valid CSS color string will work here, including
hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the border.
        @member {string}
        */
        dashType?: string;
        /**
        The width of the border.
        @member {number}
        */
        width?: number;
    }

    interface StockChartValueAxisItemLabels {
        /**
        The background color of the labels. Any valid CSS color string will work here, including
hex and rgb
        @member {string}
        */
        background?: string;
        /**
        The border of the labels.
        @member {StockChartValueAxisItemLabelsBorder}
        */
        border?: StockChartValueAxisItemLabelsBorder;
        /**
        The text color of the labels. Any valid CSS color string will work here, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The font style of the labels.
        @member {string}
        */
        font?: string;
        /**
        The format of the labels.
        @member {string}
        */
        format?: string;
        /**
        The margin of the labels.
        @member {any}
        */
        margin?: any;
        /**
        Mirrors the axis labels and ticks.
If the labels are normally on the left side of the axis,
mirroring the axis will render them to the right.
        @member {boolean}
        */
        mirror?: boolean;
        /**
        The padding of the labels.
        @member {any}
        */
        padding?: any;
        /**
        The rotation angle of the labels.
        @member {number}
        */
        rotation?: number;
        /**
        Number of labels to skip.
Skips rendering the first n labels.
        @member {number}
        */
        skip?: number;
        /**
        Label rendering step.
Every n-th label is rendered where n is the step
        @member {number}
        */
        step?: number;
        /**
        The label template.
Template variables:
        @member {any}
        */
        template?: any;
        /**
        The visibility of the labels.
        @member {boolean}
        */
        visible?: boolean;
    }

    interface StockChartValueAxisItemLine {
        /**
        The color of the line. This will also effect the major and minor ticks, but
not the grid lines.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the line.
        @member {string}
        */
        dashType?: string;
        /**
        The visibility of the line.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The width of the line. This will also effect the major and minor ticks, but
not the grid lines.
        @member {number}
        */
        width?: number;
    }

    interface StockChartValueAxisItemMajorGridLines {
        /**
        The color of the lines.
        @member {string}
        */
        color?: string;
        /**
        The visibility of the lines.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The width of the lines.
        @member {number}
        */
        width?: number;
        /**
        The step of the value axis major grid lines.
        @member {number}
        */
        step?: number;
        /**
        The skip of the value axis major grid lines.
        @member {number}
        */
        skip?: number;
    }

    interface StockChartValueAxisItemMajorTicks {
        /**
        The axis major tick size. This is the length of the line in pixels that is drawn to indicate the tick on the chart.
        @member {number}
        */
        size?: number;
        /**
        The visibility of the major ticks.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The color of the value axis major ticks lines. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The width of the major ticks in pixels.
        @member {number}
        */
        width?: number;
        /**
        The step of the value axis major ticks.
        @member {number}
        */
        step?: number;
        /**
        The skip of the value axis major ticks.
        @member {number}
        */
        skip?: number;
    }

    interface StockChartValueAxisItemMinorGridLines {
        /**
        The color of the lines.Note that this has no effect if the visibility of the minor grid lines is not set to true.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the minor grid lines.
        @member {string}
        */
        dashType?: string;
        /**
        The visibility of the lines.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The width of the lines.Note that this settings has no effect if the visibility of the minor grid lines is not set to true.
        @member {number}
        */
        width?: number;
        /**
        The step of the value axis minor grid lines.
        @member {number}
        */
        step?: number;
        /**
        The skip of the value axis minor grid lines.
        @member {number}
        */
        skip?: number;
    }

    interface StockChartValueAxisItemMinorTicks {
        /**
        The axis minor tick size. This is the length of the line in pixels that is drawn to indicate the tick on the chart.
        @member {number}
        */
        size?: number;
        /**
        The color of the value axis minor ticks lines. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The width of the minor ticks in pixels.
        @member {number}
        */
        width?: number;
        /**
        The visibility of the minor ticks.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The step of the value axis minor ticks.
        @member {number}
        */
        step?: number;
        /**
        The skip of the value axis minor ticks.
        @member {number}
        */
        skip?: number;
    }

    interface StockChartValueAxisItemNotesDataItemIconBorder {
        /**
        The border color of the icon.
        @member {string}
        */
        color?: string;
        /**
        The border width of the icon.
        @member {number}
        */
        width?: number;
    }

    interface StockChartValueAxisItemNotesDataItemIcon {
        /**
        The background color of the note icon.
        @member {string}
        */
        background?: string;
        /**
        The border of the icon.
        @member {StockChartValueAxisItemNotesDataItemIconBorder}
        */
        border?: StockChartValueAxisItemNotesDataItemIconBorder;
        /**
        The size of the icon.
        @member {number}
        */
        size?: number;
        /**
        The icon shape.The supported values are:
* "circle" - the marker shape is circle.
* "square" - the marker shape is square.
* "triangle" - the marker shape is triangle.
* "cross" - the marker shape is cross.
        @member {string}
        */
        type?: string;
        /**
        The icon visibility.
        @member {boolean}
        */
        visible?: boolean;
    }

    interface StockChartValueAxisItemNotesDataItemLabelBorder {
        /**
        The color of the border. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the border.The following dash types are supported:
        @member {string}
        */
        dashType?: string;
        /**
        The width of the border in pixels. By default the border width is set to zero which means that the border will not appear.
        @member {number}
        */
        width?: number;
    }

    interface StockChartValueAxisItemNotesDataItemLabel {
        /**
        The background color of the label. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        background?: string;
        /**
        The border of the label.
        @member {StockChartValueAxisItemNotesDataItemLabelBorder}
        */
        border?: StockChartValueAxisItemNotesDataItemLabelBorder;
        /**
        The text color of the note label. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The font style of the note label.
        @member {string}
        */
        font?: string;
        /**
        The template which renders the labels.The fields which can be used in the template are:
        @member {any}
        */
        template?: any;
        /**
        If set to true the chart will display the value axis notes label. By default the value axis notes label are visible.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The rotation angle of the label. By default the label are not rotated.
        @member {number}
        */
        rotation?: number;
        /**
        The format used to display the note label. Uses kendo.format. Contains one placeholder ("{0}") which represents the axis value.
        @member {string}
        */
        format?: string;
        /**
        The label note text.
        @member {string}
        */
        text?: string;
        /**
        The position of the value axis note label.
        @member {string}
        */
        position?: string;
    }

    interface StockChartValueAxisItemNotesDataItemLine {
        /**
        The line width of the note.
        @member {number}
        */
        width?: number;
        /**
        The line color of the note.
        @member {string}
        */
        color?: string;
        /**
        The length of the connecting lines in pixels.
        @member {number}
        */
        length?: number;
    }

    interface StockChartValueAxisItemNotesDataItem {
        /**
        The value of the note.
        @member {any}
        */
        value?: any;
        /**
        The position of the value axis note.
        @member {string}
        */
        position?: string;
        /**
        The icon of the note.
        @member {StockChartValueAxisItemNotesDataItemIcon}
        */
        icon?: StockChartValueAxisItemNotesDataItemIcon;
        /**
        The label of the note.
        @member {StockChartValueAxisItemNotesDataItemLabel}
        */
        label?: StockChartValueAxisItemNotesDataItemLabel;
        /**
        The line of the note.
        @member {StockChartValueAxisItemNotesDataItemLine}
        */
        line?: StockChartValueAxisItemNotesDataItemLine;
    }

    interface StockChartValueAxisItemNotesIconBorder {
        /**
        The border color of the icon.
        @member {string}
        */
        color?: string;
        /**
        The border width of the icon.
        @member {number}
        */
        width?: number;
    }

    interface StockChartValueAxisItemNotesIcon {
        /**
        The background color of the notes icon.
        @member {string}
        */
        background?: string;
        /**
        The border of the icon.
        @member {StockChartValueAxisItemNotesIconBorder}
        */
        border?: StockChartValueAxisItemNotesIconBorder;
        /**
        The size of the icon.
        @member {number}
        */
        size?: number;
        /**
        The icon shape.The supported values are:
* "circle" - the marker shape is circle.
* "square" - the marker shape is square.
* "triangle" - the marker shape is triangle.
* "cross" - the marker shape is cross.
        @member {string}
        */
        type?: string;
        /**
        The icon visibility.
        @member {boolean}
        */
        visible?: boolean;
    }

    interface StockChartValueAxisItemNotesLabelBorder {
        /**
        The color of the border. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the border.The following dash types are supported:
        @member {string}
        */
        dashType?: string;
        /**
        The width of the border in pixels. By default the border width is set to zero which means that the border will not appear.
        @member {number}
        */
        width?: number;
    }

    interface StockChartValueAxisItemNotesLabel {
        /**
        The background color of the label. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        background?: string;
        /**
        The border of the label.
        @member {StockChartValueAxisItemNotesLabelBorder}
        */
        border?: StockChartValueAxisItemNotesLabelBorder;
        /**
        The text color of the label. Accepts a valid CSS color string, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The font style of the label.
        @member {string}
        */
        font?: string;
        /**
        The template which renders the labels.The fields which can be used in the template are:
        @member {any}
        */
        template?: any;
        /**
        If set to true the chart will display the value axis notes label. By default the value axis notes label are visible.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The rotation angle of the label. By default the label are not rotated.
        @member {number}
        */
        rotation?: number;
        /**
        The format used to display the notes label. Uses kendo.format. Contains one placeholder ("{0}") which represents the axis value.
        @member {string}
        */
        format?: string;
        /**
        The position of the labels.
        @member {string}
        */
        position?: string;
    }

    interface StockChartValueAxisItemNotesLine {
        /**
        The line width of the notes.
        @member {number}
        */
        width?: number;
        /**
        The line color of the notes.
        @member {string}
        */
        color?: string;
        /**
        The length of the connecting lines in pixels.
        @member {number}
        */
        length?: number;
    }

    interface StockChartValueAxisItemNotes {
        /**
        The position of the value axis note.
        @member {string}
        */
        position?: string;
        /**
        The icon of the notes.
        @member {StockChartValueAxisItemNotesIcon}
        */
        icon?: StockChartValueAxisItemNotesIcon;
        /**
        The label of the notes.
        @member {StockChartValueAxisItemNotesLabel}
        */
        label?: StockChartValueAxisItemNotesLabel;
        /**
        The line of the notes.
        @member {StockChartValueAxisItemNotesLine}
        */
        line?: StockChartValueAxisItemNotesLine;
        data?: StockChartValueAxisItemNotesDataItem[];
    }

    interface StockChartValueAxisItemPlotBand {
        /**
        The start position of the plot band in axis units.
        @member {number}
        */
        from?: number;
        /**
        The end position of the plot band in axis units.
        @member {number}
        */
        to?: number;
        /**
        The color of the plot band.
        @member {string}
        */
        color?: string;
        /**
        The opacity of the plot band.
        @member {number}
        */
        opacity?: number;
    }

    interface StockChartValueAxisItemTitleBorder {
        /**
        The color of the border.
        @member {string}
        */
        color?: string;
        /**
        The dash type of the border.
        @member {string}
        */
        dashType?: string;
        /**
        The width of the border.
        @member {number}
        */
        width?: number;
    }

    interface StockChartValueAxisItemTitle {
        /**
        The background color of the title. Any valid CSS color string will work here, including
hex and rgb.
        @member {string}
        */
        background?: string;
        /**
        The border of the title.
        @member {StockChartValueAxisItemTitleBorder}
        */
        border?: StockChartValueAxisItemTitleBorder;
        /**
        The text color of the title. Any valid CSS color string will work here, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        The font style of the title.
        @member {string}
        */
        font?: string;
        /**
        The margin of the title.
        @member {any}
        */
        margin?: any;
        /**
        The padding of the title.
        @member {any}
        */
        padding?: any;
        /**
        The position of the title.
        @member {string}
        */
        position?: string;
        /**
        The rotation angle of the title.
        @member {number}
        */
        rotation?: number;
        /**
        The text of the title.
        @member {string}
        */
        text?: string;
        /**
        The visibility of the title.
        @member {boolean}
        */
        visible?: boolean;
    }

    interface StockChartValueAxisItem {
        /**
        Value at which the category axis crosses this axis. (Only for object)Value indicies at which the category axes cross the value axis. (Only for array)Date at which the category axis crosses this axis. (Only for date)
        @member {any}
        */
        axisCrossingValue?: any;
        /**
        The background color of the axis.
        @member {string}
        */
        background?: string;
        /**
        Color to apply to all axis elements.
Individual color settings for line and labels take priority. Any valid CSS color string will work here, including hex and rgb.
        @member {string}
        */
        color?: string;
        /**
        Configures the axis labels.
        @member {StockChartValueAxisItemLabels}
        */
        labels?: StockChartValueAxisItemLabels;
        /**
        Configures the axis line. This will also affect the major and minor ticks, but not the grid lines.
        @member {StockChartValueAxisItemLine}
        */
        line?: StockChartValueAxisItemLine;
        /**
        Configures the major grid lines. These are the lines that are an extension of the major ticks through the
body of the chart.
        @member {StockChartValueAxisItemMajorGridLines}
        */
        majorGridLines?: StockChartValueAxisItemMajorGridLines;
        /**
        The major ticks of the axis.
        @member {StockChartValueAxisItemMajorTicks}
        */
        majorTicks?: StockChartValueAxisItemMajorTicks;
        /**
        The interval between major divisions.
        @member {number}
        */
        majorUnit?: number;
        /**
        The maximum value of the axis.
This is often used in combination with the min configuration option.
        @member {number}
        */
        max?: number;
        /**
        The minimum value of the axis.
This is often used in combination with the max configuration option.
        @member {number}
        */
        min?: number;
        /**
        Configures the minor grid lines.  These are the lines that are an extension of the minor ticks through the
        @member {StockChartValueAxisItemMinorGridLines}
        */
        minorGridLines?: StockChartValueAxisItemMinorGridLines;
        /**
        The minor ticks of the axis.
        @member {StockChartValueAxisItemMinorTicks}
        */
        minorTicks?: StockChartValueAxisItemMinorTicks;
        /**
        The interval between minor divisions.
It defaults to 1/5th of the majorUnit.
        @member {number}
        */
        minorUnit?: number;
        /**
        The unique axis name.
        @member {any}
        */
        name?: any;
        /**
        Prevents the automatic axis range from snapping to 0.
        @member {boolean}
        */
        narrowRange?: boolean;
        /**
        The name of the pane that the axis should be rendered in.
The axis will be rendered in the first (default) pane if not set.
        @member {string}
        */
        pane?: string;
        plotBands?: StockChartValueAxisItemPlotBand[];
        /**
        Reverses the axis direction -
values increase from right to left and from top to bottom.
        @member {boolean}
        */
        reverse?: boolean;
        /**
        The title of the value axis.
        @member {StockChartValueAxisItemTitle}
        */
        title?: StockChartValueAxisItemTitle;
        /**
        The visibility of the axis.
        @member {boolean}
        */
        visible?: boolean;
        /**
        The crosshair configuration options.
        @member {StockChartValueAxisItemCrosshair}
        */
        crosshair?: StockChartValueAxisItemCrosshair;
        /**
        The value axis notes configuration.
        @member {StockChartValueAxisItemNotes}
        */
        notes?: StockChartValueAxisItemNotes;
    }

    interface StockChartSeriesClickEventSeries {
        /**
        The series type
        @member {any}
        */
        type?: any;
        /**
        The series name
        @member {any}
        */
        name?: any;
        /**
        The series data points
        @member {any}
        */
        data?: any;
    }

    interface StockChartSeriesHoverEventSeries {
        /**
        The series type
        @member {any}
        */
        type?: any;
        /**
        The series name
        @member {any}
        */
        name?: any;
        /**
        The series data points
        @member {any}
        */
        data?: any;
    }

    interface StockChartOptions {
        name?: string;
        /**
        The field containing the point date.
It is used as a default categoryField for all series.The data item field value must be either:
        @member {string}
        */
        dateField?: string;
        /**
        The data navigator configuration options.
        @member {StockChartNavigator}
        */
        navigator?: StockChartNavigator;
        /**
        Default options for all chart axes.
        @member {any}
        */
        axisDefaults?: any;
        categoryAxis?: StockChartCategoryAxisItem[];
        /**
        The chart area configuration options.
This is the entire visible area of the chart.
        @member {StockChartChartArea}
        */
        chartArea?: StockChartChartArea;
        /**
        DataSource configuration or instance.
        @member {any}
        */
        dataSource?: any;
        /**
        Indicates whether the chart will call read on the data source initially.
        @member {boolean}
        */
        autoBind?: boolean;
        /**
        The chart legend configuration options.
        @member {StockChartLegend}
        */
        legend?: StockChartLegend;
        panes?: StockChartPane[];
        /**
        The plot area configuration options. This is the area containing the plotted series.
        @member {StockChartPlotArea}
        */
        plotArea?: StockChartPlotArea;
        /**
        Sets the preferred rendering engine.
If it is not supported by the browser, the Chart will switch to the first available mode.The supported values are:
        @member {string}
        */
        renderAs?: string;
        series?: StockChartSeriesItem[];
        /**
        The default colors for the chart's series. When all colors are used, new colors are pulled from the start again.
        @member {any}
        */
        seriesColors?: any;
        /**
        Default values for each series.
        @member {StockChartSeriesDefaults}
        */
        seriesDefaults?: StockChartSeriesDefaults;
        /**
        Sets Chart theme. Available themes: default, blueOpal, black.
        @member {string}
        */
        theme?: string;
        /**
        The chart title configuration options or text.
        @member {StockChartTitle}
        */
        title?: StockChartTitle;
        /**
        The data point tooltip configuration options.
        @member {StockChartTooltip}
        */
        tooltip?: StockChartTooltip;
        /**
        A value indicating if transition animations should be played.
        @member {boolean}
        */
        transitions?: boolean;
        valueAxis?: StockChartValueAxisItem[];
        /**
        Fires when an axis label is clicked.
        */
        axisLabelClick?(e: StockChartAxisLabelClickEvent): void;
        /**
        Fires when an legend item is clicked.
        */
        legendItemClick?(e: StockChartLegendItemClickEvent): void;
        /**
        Fires when an legend item is hovered.
        */
        legendItemHover?(e: StockChartLegendItemHoverEvent): void;
        /**
        Fires when the chart has received data from the data source
and is about to render it.
        */
        dataBound?(e: StockChartEvent): void;
        /**
        Fires when the user has used the mouse or a swipe gesture to drag the chart.The drag operation can be aborted by calling e.preventDefault().
        */
        dragStart?(e: StockChartDragStartEvent): void;
        /**
        Fires as long as the user is dragging the chart using the mouse or swipe gestures.
        */
        drag?(e: StockChartDragEvent): void;
        /**
        Fires when the user stops dragging the chart.
        */
        dragEnd?(e: StockChartDragEndEvent): void;
        /**
        Fired when the user clicks one of the notes.The event handler function context (available via the this keyword) will be set to the widget instance.
        */
        noteClick?(e: StockChartNoteClickEvent): void;
        /**
        Fired when the user hovers one of the notes.The event handler function context (available via the this keyword) will be set to the widget instance.
        */
        noteHover?(e: StockChartNoteHoverEvent): void;
        /**
        Fires when plot area is clicked.
        */
        plotAreaClick?(e: StockChartPlotAreaClickEvent): void;
        /**
        Fires when chart series are clicked.
        */
        seriesClick?(e: StockChartSeriesClickEvent): void;
        /**
        Fires when chart series are hovered.
        */
        seriesHover?(e: StockChartSeriesHoverEvent): void;
        /**
        Fires when the user has used the mousewheel to zoom the chart.The zoom operation can be aborted by calling e.preventDefault().
        */
        zoomStart?(e: StockChartZoomStartEvent): void;
        /**
        Fires as long as the user is zooming the chart using the mousewheel.
        */
        zoom?(e: StockChartZoomEvent): void;
        /**
        Fires when the user stops zooming the chart.
        */
        zoomEnd?(e: StockChartZoomEndEvent): void;
        /**
        Fires when the user starts modifying the axis selection.The range units are:
        */
        selectStart?(e: StockChartSelectStartEvent): void;
        /**
        Fires when the user modifies the selection.The range units are:
        */
        select?(e: StockChartSelectEvent): void;
        /**
        Fires when the user completes modifying the selection.
        */
        selectEnd?(e: StockChartSelectEndEvent): void;
    }

    interface StockChartEvent {
        sender: StockChart;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }

    interface StockChartAxisLabelClickEvent extends StockChartEvent {
        /**
        The axis that the label belongs to.
        @member {any}
        */
        axis?: any;
        /**
        The label value or category name.
        @member {any}
        */
        value?: any;
        /**
        The label text.
        @member {any}
        */
        text?: any;
        /**
        The label sequential index or category index.
        @member {any}
        */
        index?: any;
        /**
        The original data item used to generate the label.
** Applicable only for data bound category axis. **
        @member {any}
        */
        dataItem?: any;
        /**
        The DOM element of the label.
        @member {any}
        */
        element?: any;
    }

    interface StockChartLegendItemClickEvent extends StockChartEvent {
        /**
        The name of the series.
        @member {string}
        */
        text?: string;
        /**
        The series options.
        @member {any}
        */
        series?: any;
        /**
        The series index.
        @member {number}
        */
        seriesIndex?: number;
        /**
        The point index.
        @member {number}
        */
        pointIndex?: number;
        /**
        The DOM element of the plot area.
        @member {any}
        */
        element?: any;
    }

    interface StockChartLegendItemHoverEvent extends StockChartEvent {
        /**
        The name of the series.
        @member {string}
        */
        text?: string;
        /**
        The series options.
        @member {any}
        */
        series?: any;
        /**
        The series index.
        @member {number}
        */
        seriesIndex?: number;
        /**
        The point index.
        @member {number}
        */
        pointIndex?: number;
        /**
        The DOM element of the plot area.
        @member {any}
        */
        element?: any;
    }

    interface StockChartDragStartEvent extends StockChartEvent {
        /**
        A hastable containing the initial range (min and max values) of named axes.
The axis name is used as a key.
        @member {any}
        */
        axisRanges?: any;
        /**
        The original user event that triggered the drag action.
        @member {any}
        */
        originalEvent?: any;
    }

    interface StockChartDragEvent extends StockChartEvent {
        /**
        A hastable containing the suggested current range (min and max values) of named axes.
The axis name is used as a key.Note that the axis ranges are not updated automatically. You need to call
set_options with either the suggested or custom min/max values for them to take effect.
        @member {any}
        */
        axisRanges?: any;
        /**
        The original user event that triggered the drag action.
        @member {any}
        */
        originalEvent?: any;
    }

    interface StockChartDragEndEvent extends StockChartEvent {
        /**
        A hastable containing the final range (min and max values) of named axes.
The axis name is used as a key.
        @member {any}
        */
        axisRanges?: any;
        /**
        The original user event that triggered the drag action.
        @member {any}
        */
        originalEvent?: any;
    }

    interface StockChartNoteClickEvent extends StockChartEvent {
        /**
        The data point category. Available only for categorical charts (bar, line, area and similar).
        @member {any}
        */
        category?: any;
        /**
        The DOM element of the plot area.
        @member {any}
        */
        element?: any;
        /**
        The data point value.
        @member {any}
        */
        value?: any;
        /**
        The series of the note.
        @member {any}
        */
        series?: any;
        /**
        The data item of the point's note.
        @member {any}
        */
        dataItem?: any;
    }

    interface StockChartNoteHoverEvent extends StockChartEvent {
        /**
        The data point category. Available only for categorical charts (bar, line, area and similar).
        @member {any}
        */
        category?: any;
        /**
        The DOM element of the plot area.
        @member {any}
        */
        element?: any;
        /**
        The data point value.
        @member {any}
        */
        value?: any;
        /**
        The series of the note.
        @member {any}
        */
        series?: any;
        /**
        The data item of the point's note.
        @member {any}
        */
        dataItem?: any;
    }

    interface StockChartPlotAreaClickEvent extends StockChartEvent {
        /**
        The data point value.
Available only for categorical charts (bar, line, area and similar).
        @member {any}
        */
        value?: any;
        /**
        The data point category.
Available only for categorical charts (bar, line, area and similar).
        @member {any}
        */
        category?: any;
        /**
        The DOM element of the plot area.
        @member {any}
        */
        element?: any;
        /**
        The X axis value or array of values for multi-axis charts.
        @member {any}
        */
        x?: any;
        /**
        The X axis value or array of values for multi-axis charts.
        @member {any}
        */
        y?: any;
    }

    interface StockChartSeriesClickEvent extends StockChartEvent {
        /**
        The data point value.
        @member {any}
        */
        value?: any;
        /**
        The data point category
        @member {any}
        */
        category?: any;
        /**
        The clicked series.
        @member {StockChartSeriesClickEventSeries}
        */
        series?: StockChartSeriesClickEventSeries;
        /**
        The original data item (when binding to dataSource).
        @member {any}
        */
        dataItem?: any;
        /**
        The DOM element of the data point.
        @member {any}
        */
        element?: any;
        /**
        The point value represented as a percentage value. Available only for donut, pie and 100% stacked charts.
        @member {any}
        */
        percentage?: any;
    }

    interface StockChartSeriesHoverEvent extends StockChartEvent {
        /**
        The data point value.
        @member {any}
        */
        value?: any;
        /**
        The data point category
        @member {any}
        */
        category?: any;
        /**
        The clicked series.
        @member {StockChartSeriesHoverEventSeries}
        */
        series?: StockChartSeriesHoverEventSeries;
        /**
        The original data item (when binding to dataSource).
        @member {any}
        */
        dataItem?: any;
        /**
        The DOM element of the data point.
        @member {any}
        */
        element?: any;
        /**
        The point value represented as a percentage value. Available only for donut, pie and 100% stacked charts.
        @member {any}
        */
        percentage?: any;
    }

    interface StockChartZoomStartEvent extends StockChartEvent {
        /**
        A hastable containing the initial range (min and max values) of named axes.
The axis name is used as a key.
        @member {any}
        */
        axisRanges?: any;
        /**
        The original user event that triggered the zoom action.
        @member {any}
        */
        originalEvent?: any;
    }

    interface StockChartZoomEvent extends StockChartEvent {
        /**
        A hastable containing the suggested current range (min and max values) of named axes.
The axis name is used as a key.Note that the axis ranges are not updated automatically. You need to call
set_options with either the suggested or custom min/max values for them to take effect.
        @member {any}
        */
        axisRanges?: any;
        /**
        A number that indicates the zoom amount and direction.A negative delta indicates "zoom in", while a positive "zoom out".
        @member {number}
        */
        delta?: number;
        /**
        The original user event that triggered the zoom action.This event can be used to prevent the default mousewheel action (scroll).
        @member {any}
        */
        originalEvent?: any;
    }

    interface StockChartZoomEndEvent extends StockChartEvent {
        /**
        A hastable containing the final range (min and max values) of named axes.
The axis name is used as a key.
        @member {any}
        */
        axisRanges?: any;
        /**
        The original user event that triggered the zoom action.
        @member {any}
        */
        originalEvent?: any;
    }

    interface StockChartSelectStartEvent extends StockChartEvent {
        /**
        The target axis configuration.
        @member {any}
        */
        axis?: any;
        /**
        The lower boundary of the selected range.
        @member {any}
        */
        from?: any;
        /**
        The upper boundary of the selected range.Note: The last selected category is at index [to - 1] unless
the axis is justified. In this case it is at index [to].
        @member {any}
        */
        to?: any;
    }

    interface StockChartSelectEvent extends StockChartEvent {
        /**
        The target axis configuration.
        @member {any}
        */
        axis?: any;
        /**
        The lower boundary of the selected range.
        @member {any}
        */
        from?: any;
        /**
        The upper boundary of the selected range.Note: The last selected category is at index [to - 1] unless
the axis is justified. In this case it is at index [to].
        @member {any}
        */
        to?: any;
    }

    interface StockChartSelectEndEvent extends StockChartEvent {
        /**
        The target axis configuration.
        @member {any}
        */
        axis?: any;
        /**
        The lower boundary of the selected range.
        @member {any}
        */
        from?: any;
        /**
        The upper boundary of the selected range.Note: The last selected category is at index [to - 1] unless
the axis is justified. In this case it is at index [to].
        @member {any}
        */
        to?: any;
    }


}
declare module kendo.dataviz.diagram {
    class Circle extends Observable {
        constructor(options?: CircleOptions);
        options: CircleOptions;
        /**
        Gets or sets the visibilty of the current element.
        @method
        @returns True if the element is visible, false otherwise.
        */
        visible(): boolean;
        /**
        Gets or sets the visibilty of the current element.
        @method
        @param visible - The new visibility state.
        */
        visible(visible: boolean): void;
    }

    interface CircleStroke {
        /**
        Defines the stroke color of the circle.
        @member {string}
        */
        color?: string;
        /**
        Defines the stroke width of the circle.
        @member {number}
        */
        width?: number;
    }

    interface CircleOptions {
        name?: string;
        /**
        The fill color of the circle.
        @member {string}
        */
        background?: string;
        /**
        Defines the stroke configuration.
        @member {CircleStroke}
        */
        stroke?: CircleStroke;
        /**
        The center of the circle.
        @member {any}
        */
        center?: any;
        /**
        The radius of the circle.
        @member {number}
        */
        radius?: number;
    }

    interface CircleEvent {
        sender: Circle;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }


    class Connection extends Observable {
        constructor(options?: ConnectionOptions);
        options: ConnectionOptions;
        /**
        Gets or sets the current source of the connection.This object can be a Point for a floating endpoint (i.e. not attached to a shape), a Shape or a Connector of a Shape. You can use the Shape.getConnector() method to fetch a Connector on the basis of its name. If a Shape is specified the Connection will attach to the "Auto" connector.
        @method
        @returns the connection source.
        */
        source(): any;
        /**
        Gets or sets the current source of the connection.This object can be a Point for a floating endpoint (i.e. not attached to a shape), a Shape or a Connector of a Shape. You can use the Shape.getConnector() method to fetch a Connector on the basis of its name. If a Shape is specified the Connection will attach to the "Auto" connector.
        @method
        @param source - If no source is specified the method will return the current object to which the Connection's endpoint is attached.
        */
        source(source: kendo.dataviz.diagram.Shape): void;
        /**
        Gets or sets the current source of the connection.This object can be a Point for a floating endpoint (i.e. not attached to a shape), a Shape or a Connector of a Shape. You can use the Shape.getConnector() method to fetch a Connector on the basis of its name. If a Shape is specified the Connection will attach to the "Auto" connector.
        @method
        @param source - If no source is specified the method will return the current object to which the Connection's endpoint is attached.
        */
        source(source: kendo.dataviz.diagram.Point): void;
        /**
        Gets or sets the current source of the connection.This object can be a Point for a floating endpoint (i.e. not attached to a shape), a Shape or a Connector of a Shape. You can use the Shape.getConnector() method to fetch a Connector on the basis of its name. If a Shape is specified the Connection will attach to the "Auto" connector.
        @method
        @param source - If no source is specified the method will return the current object to which the Connection's endpoint is attached.
        */
        source(source: kendo.dataviz.diagram.Connector): void;
        /**
        Gets the global coordinate of the connection's start (initial endpoint).
The method returns a Point independently of the object to which the source is attached.
        @method
        @returns the coordinates of the connection source.
        */
        sourcePoint(): kendo.dataviz.diagram.Point;
        /**
        Gets or set the target of the Connection.This object can be a Point for a floating endpoint (i.e. not attached to a shape), a Shape or a Connector of a Shape. You can use the Shape.getConnector() method to fetch a Connector on the basis of its name. If a Shape is specified the Connection will attach to the "Auto" connector.
        @method
        @returns the connection target.
        */
        target(): any;
        /**
        Gets or set the target of the Connection.This object can be a Point for a floating endpoint (i.e. not attached to a shape), a Shape or a Connector of a Shape. You can use the Shape.getConnector() method to fetch a Connector on the basis of its name. If a Shape is specified the Connection will attach to the "Auto" connector.
        @method
        @param target - If no source is specified the method will return the current object to which the Connection's endpoint is attached.
        */
        target(target: kendo.dataviz.diagram.Shape): void;
        /**
        Gets or set the target of the Connection.This object can be a Point for a floating endpoint (i.e. not attached to a shape), a Shape or a Connector of a Shape. You can use the Shape.getConnector() method to fetch a Connector on the basis of its name. If a Shape is specified the Connection will attach to the "Auto" connector.
        @method
        @param target - If no source is specified the method will return the current object to which the Connection's endpoint is attached.
        */
        target(target: kendo.dataviz.diagram.Point): void;
        /**
        Gets or set the target of the Connection.This object can be a Point for a floating endpoint (i.e. not attached to a shape), a Shape or a Connector of a Shape. You can use the Shape.getConnector() method to fetch a Connector on the basis of its name. If a Shape is specified the Connection will attach to the "Auto" connector.
        @method
        @param target - If no source is specified the method will return the current object to which the Connection's endpoint is attached.
        */
        target(target: kendo.dataviz.diagram.Connector): void;
        /**
        Similar to the sourcePoint, this gets the coordinates of the target of the Connection independently of its endpoint attachement.
        @method
        @returns the coordinates of the connection target.
        */
        targetPoint(): kendo.dataviz.diagram.Point;
        /**
        Select or deselects the Connection.
        @method
        @param value - True to select the Connection and false to deselect it.
        */
        select(value: boolean): void;
        /**
        Gets or sets the (sub-) type of the Connection which defines the way it routes.The routing of a connection is the way that intermediate points of a Connection defines a route. A route is usually defined on the basis of constraints or behaviors. Currently the framework defines a default polyline route (which simply connects the given intermediate points) and a simple rectangular (aka cascading) route. The cascading type is useful when using tree layout and hierarchies; the routed Connection will in this case enhance the representation of the hierarchy and thus reproduce a classic organization diagram.
        @method
        */
        type(): void;
        /**
        Gets or sets the (sub-) type of the Connection which defines the way it routes.The routing of a connection is the way that intermediate points of a Connection defines a route. A route is usually defined on the basis of constraints or behaviors. Currently the framework defines a default polyline route (which simply connects the given intermediate points) and a simple rectangular (aka cascading) route. The cascading type is useful when using tree layout and hierarchies; the routed Connection will in this case enhance the representation of the hierarchy and thus reproduce a classic organization diagram.
        @method
        @param value - 
        */
        type(value: string): void;
        /**
        Gets the intermediate points of the connection.
        @method
        @returns the intermediate points of the connection.
        */
        points(): any;
        /**
        Gets all points of the Connection.
This is the union of the endpoints and the intermediate points.
        @method
        @returns all points of the connection.
        */
        allPoints(): any;
        /**
        Redraws the Connection with the given options.
        @method
        */
        redraw(): void;
    }

    interface ConnectionHoverStroke {
        /**
        Defines the highlight color when the pointer is hovering over the connection.
        @member {string}
        */
        color?: string;
    }

    interface ConnectionHover {
        /**
        Defines the hover stroke configuration.
        @member {ConnectionHoverStroke}
        */
        stroke?: ConnectionHoverStroke;
    }

    interface ConnectionPoint {
        /**
        Sets the X coordinate of the point.
        @member {number}
        */
        x?: number;
        /**
        Sets the Y coordinate of the point.
        @member {number}
        */
        y?: number;
    }

    interface ConnectionStroke {
        /**
        Defines the stroke or line color of the connection.
        @member {string}
        */
        color?: string;
    }

    interface ConnectionOptions {
        name?: string;
        /**
        Defines the stroke configuration.
        @member {ConnectionStroke}
        */
        stroke?: ConnectionStroke;
        /**
        Defines the hover configuration.
        @member {ConnectionHover}
        */
        hover?: ConnectionHover;
        /**
        The start cap (arrow, head or decoration) of the connection:
        @member {string}
        */
        startCap?: string;
        /**
        The start cap (arrow, head or decoration) of the connection:Note that you can also use the "ArrowStart" for the endCap but its direction will be inversed.
        @member {string}
        */
        endCap?: string;
        points?: ConnectionPoint[];
    }

    interface ConnectionEvent {
        sender: Connection;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }


    class Connector extends Observable {
        constructor(options?: ConnectorOptions);
        options: ConnectorOptions;
        /**
        Gets or sets the position of the Connector.
        @method
        @returns the current position of the connector.
        */
        position(): kendo.dataviz.diagram.Point;
        /**
        Gets or sets the position of the Connector.
        @method
        @param position - The new position of the connector.
        */
        position(position: kendo.dataviz.diagram.Point): void;
    }

    interface ConnectorOptions {
        name?: string;
        /**
        Defines the width of the connector.
        @member {number}
        */
        width?: number;
        /**
        Defines the height of the connector.
        @member {number}
        */
        height?: number;
        /**
        Defines the background color of the Connector.
        @member {string}
        */
        background?: string;
        /**
        Defines the color of the Connector when the pointer hovers over it.
        @member {string}
        */
        hoveredBackground?: string;
    }

    interface ConnectorEvent {
        sender: Connector;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }


    class Group extends Observable {
        constructor(options?: GroupOptions);
        options: GroupOptions;
        /**
        Appends the given element to the group
        @method
        @param element - The element to append.
        */
        append(element: any): void;
        /**
        Removes all elements from the group.
        @method
        */
        clear(): void;
        /**
        Removes the given element from the group
        @method
        @param element - The element to remove.
        */
        remove(element: any): void;
        /**
        Gets or sets the visibilty of the current element.
        @method
        @returns True if the element is visible, false otherwise.
        */
        visible(): boolean;
        /**
        Gets or sets the visibilty of the current element.
        @method
        @param visible - The new visibility state.
        */
        visible(visible: boolean): void;
    }

    interface GroupOptions {
        name?: string;
        /**
        The X position of the top-left corner of the group.
        @member {number}
        */
        x?: number;
        /**
        The Y position of the top-left corner of the group.
        @member {number}
        */
        y?: number;
    }

    interface GroupEvent {
        sender: Group;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }


    class Image extends Observable {
        constructor(options?: ImageOptions);
        options: ImageOptions;
        /**
        Gets or sets the visibilty of the current element.
        @method
        @returns True if the element is visible, false otherwise.
        */
        visible(): boolean;
        /**
        Gets or sets the visibilty of the current element.
        @method
        @param visible - The new visibility state.
        */
        visible(visible: boolean): void;
    }

    interface ImageOptions {
        name?: string;
        /**
        The height of the image.
        @member {number}
        */
        height?: number;
        /**
        The width of the image.
        @member {number}
        */
        width?: number;
        /**
        The X position of the top-left corner of the element.
        @member {number}
        */
        x?: number;
        /**
        The Y position of the top-left corner of the element.
        @member {number}
        */
        y?: number;
    }

    interface ImageEvent {
        sender: Image;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }


    class Line extends Observable {
        constructor(options?: LineOptions);
        options: LineOptions;
        /**
        Gets or sets the visibilty of the current element.
        @method
        @returns True if the element is visible, false otherwise.
        */
        visible(): boolean;
        /**
        Gets or sets the visibilty of the current element.
        @method
        @param visible - The new visibility state.
        */
        visible(visible: boolean): void;
    }

    interface LineStroke {
        /**
        Defines the line color.
        @member {string}
        */
        color?: string;
        /**
        Defines the line width.
        @member {number}
        */
        width?: number;
    }

    interface LineOptions {
        name?: string;
        /**
        Defines the stroke configuration.
        @member {LineStroke}
        */
        stroke?: LineStroke;
        /**
        The first point of the line.
        @member {any}
        */
        from?: any;
        /**
        The second point of the line.
        @member {any}
        */
        to?: any;
    }

    interface LineEvent {
        sender: Line;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }


    class Point extends Observable {
        constructor(options?: PointOptions);
        options: PointOptions;
    }

    interface PointOptions {
        name?: string;
        /**
        Defines the x-coordinate of the point.
        @member {number}
        */
        x?: number;
    }

    interface PointEvent {
        sender: Point;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }


    class Rect extends Observable {
        constructor(options?: RectOptions);
        options: RectOptions;
    }

    interface RectOptions {
        name?: string;
        /**
        Sets the height of the rectangle.
        @member {number}
        */
        height?: number;
        /**
        Sets the width of the rectangle.
        @member {number}
        */
        width?: number;
        /**
        The x-coordinate of the top-left corner of the rectangle.
        @member {number}
        */
        x?: number;
        /**
        The y-coordinate of the top-left corner of the rectangle.
        @member {number}
        */
        y?: number;
    }

    interface RectEvent {
        sender: Rect;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }


    class Rectangle extends Observable {
        constructor(options?: RectangleOptions);
        options: RectangleOptions;
        /**
        Gets or sets the visibilty of the current element.
        @method
        @returns True if the element is visible, false otherwise.
        */
        visible(): boolean;
        /**
        Gets or sets the visibilty of the current element.
        @method
        @param visible - The new visibility state.
        */
        visible(visible: boolean): void;
    }

    interface RectangleStroke {
        /**
        Defines the line color of the rectangle.
        @member {string}
        */
        color?: string;
        /**
        Defines the stroke width of the rectangle.
        @member {number}
        */
        width?: number;
    }

    interface RectangleOptions {
        name?: string;
        /**
        Defines the fill color of the rectangle.
        @member {string}
        */
        background?: string;
        /**
        Sets the height of the rectangle.
        @member {number}
        */
        height?: number;
        /**
        Defines the stroke configuration.
        @member {RectangleStroke}
        */
        stroke?: RectangleStroke;
        /**
        Sets the width of the rectangle.
        @member {number}
        */
        width?: number;
        /**
        The X position of the top-left corner of the rectangle.
        @member {number}
        */
        x?: number;
        /**
        The Y position of the top-left corner of the rectangle.
        @member {number}
        */
        y?: number;
    }

    interface RectangleEvent {
        sender: Rectangle;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }


    class Shape extends Observable {
        constructor(options?: ShapeOptions);
        options: ShapeOptions;
        /**
        Get or set method returning the current global position or sets the position specified.
        @method
        */
        position(): void;
        /**
        Get or set method returning the current global position or sets the position specified.
        @method
        @param point - Either the location to set or if no parameter given returns the current location.
        */
        position(point: kendo.dataviz.diagram.Point): void;
        /**
        Returns a clone (with a different id) of the shape.
        @method
        @returns A clone of the current shape.
        */
        clone(): kendo.dataviz.diagram.Shape;
        /**
        Selects or deselects the shape.
        @method
        @param value - Use 'true' to select the shape or 'false' to deselect it.
        */
        select(value: boolean): void;
        /**
        Returns the connections attached to the shape. You can optionally specify to return only the incoming or outgoing connections.
        @method
        @param type - If not parameter specified all connections are returned, if "in" then only the incoming (i.e. towards the shape) are returned, if "out" the only the outgoing (i.e. away from the shape) are returned.
        */
        connections(type: string): void;
        /**
        Fetches a (default or custom) Connector defined on the Shape by its name.
        @method
        */
        getConnector(): void;
        /**
        Returns the middle positions of the sides of the bounds or the center of the shape's bounds. This method is useful when defining custom connectors where a position function relative to the shape's coordinate system is required.
        @method
        @param side - One of the four sides of a bound; "left", "right", "top", "bottom". If none specified the center of the shape's bounds will be returned.
        */
        getPosition(side: string): void;
        /**
        Renders the shape with the given options. It redefines the options and redraws the shape accordingly.
        @method
        */
        redraw(): void;
    }

    interface ShapeConnector {
        /**
        The connector name. Predefined names include:
        @member {string}
        */
        name?: string;
        /**
        The connector description.
        @member {string}
        */
        description?: string;
        /**
        The function that positions the connector.
        @member {Function}
        */
        position?: Function;
    }

    interface ShapeContent {
        /**
        The text displayed in the shape.
        @member {string}
        */
        text?: string;
        /**
        The alignment of the text inside the shape.
        @member {string}
        */
        align?: string;
    }

    interface ShapeHover {
        /**
        Hover's background color.
        @member {string}
        */
        background?: string;
    }

    interface ShapeRotation {
        /**
        The rotation angle.
        @member {number}
        */
        angle?: number;
    }

    interface ShapeStroke {
        /**
        Defines the color of the shape's stroke.
        @member {string}
        */
        color?: string;
        /**
        Defines the thickness or width of the shape's stroke.
        @member {number}
        */
        width?: number;
        /**
        The dash type of the shape.The following dash types are supported:
        @member {string}
        */
        dashType?: string;
    }

    interface ShapeOptions {
        name?: string;
        /**
        The unique identifier for a Shape.
        @member {string}
        */
        id?: string;
        /**
        The path option of a Shape is a description of a custom geometry. The format follows the standard SVG format (http://www.w3.org/TR/SVG/paths.html#PathData "SVG Path data.").
        @member {string}
        */
        path?: string;
        /**
        Defines the stroke configuration.
        @member {ShapeStroke}
        */
        stroke?: ShapeStroke;
        /**
        Specifies the type of the Shape using any of the built-in shape type.
        @member {string}
        */
        type?: string;
        /**
        Defines the x-coordinate of the shape when added to the diagram.
        @member {number}
        */
        x?: number;
        /**
        Defines the y-coordinate of the shape when added to the diagram.
        @member {number}
        */
        y?: number;
        /**
        Defines the minimum width the shape should have, i.e. it cannot be resized to a value smaller than the given one.
        @member {number}
        */
        minWidth?: number;
        /**
        Defines the minimum height the shape should have, i.e. it cannot be resized to a value smaller than the given one.
        @member {number}
        */
        minHeight?: number;
        /**
        Defines the width of the shape when added to the diagram.
        @member {number}
        */
        width?: number;
        /**
        Defines the height of the shape when added to the diagram.
        @member {number}
        */
        height?: number;
        /**
        Defines the fill-color of the shape.
        @member {string}
        */
        background?: string;
        /**
        Defines the hover configuration.
        @member {ShapeHover}
        */
        hover?: ShapeHover;
        connectors?: ShapeConnector[];
        /**
        The shape rotation settings.
        @member {ShapeRotation}
        */
        rotation?: ShapeRotation;
        /**
        Defines the shapes content settings.
        @member {ShapeContent}
        */
        content?: ShapeContent;
        /**
        A function returning a visual element to render for this shape.
        @member {Function}
        */
        visual?: Function;
    }

    interface ShapeEvent {
        sender: Shape;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }


    class TextBlock extends Observable {
        constructor(options?: TextBlockOptions);
        options: TextBlockOptions;
        /**
        Gets or sets the text block content.
        @method
        @returns the current text content.
        */
        content(): string;
        /**
        Gets or sets the text block content.
        @method
        @param content - The new text content.
        */
        content(content: string): void;
        /**
        Gets or sets the visibilty of the current element.
        @method
        @returns True if the element is visible, false otherwise.
        */
        visible(): boolean;
        /**
        Gets or sets the visibilty of the current element.
        @method
        @param visible - The new visibility state.
        */
        visible(visible: boolean): void;
    }

    interface TextBlockOptions {
        name?: string;
        /**
        The background color of the text block.
        @member {string}
        */
        background?: string;
        /**
        The text color of the text block.
        @member {string}
        */
        color?: string;
        /**
        The font family of the text block.
        @member {string}
        */
        fontFamily?: string;
        /**
        The font size of the text block.
        @member {number}
        */
        fontSize?: number;
        /**
        The height of the text block.
        @member {number}
        */
        height?: number;
        /**
        The content of the text block.
        @member {string}
        */
        text?: string;
        /**
        The width of the text block.
        @member {number}
        */
        width?: number;
        /**
        The X position of the top-left corner of the text block.
        @member {number}
        */
        x?: number;
        /**
        The Y position of the top-left corner of the text block.
        @member {number}
        */
        y?: number;
    }

    interface TextBlockEvent {
        sender: TextBlock;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }


}
declare module kendo {
    class Color extends Observable {
        options: ColorOptions;
        /**
        Computes the relative luminance between two colors.
        @method
        @returns The relative luminance.
        */
        diff(): number;
        /**
        Compares two color objects for equality.
        @method
        @returns returns true if the two colors are the same. Otherwise, false
        */
        equals(): boolean;
    }

    interface ColorOptions {
        name?: string;
    }

    interface ColorEvent {
        sender: Color;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }


}
declare module FX {
    class FX  {
        options: FXOptions;
        /**
        Applies the specified animation effect/s to all selected elements and triggers the callback on every element when it completes its animation.
Uses transitions and transformations where available and falls back to jQuery animate where not. kendoAnimate can be used to run one of the provided
animation effects or you can define one yourself, using the same format.
        @method
        @param duration - The effect duration (speed) in milliseconds.
        @param reverse - Whether the effect should play backwards, useful when doing the same animation but with the opposite direction, like opening and closing.
        @param complete - Completion callback that should be called after animation completion. It gets fired for every animated element and is passed the said element
as its only argument.
        @param show - Whether the element should be shown before animating.
        @param hide - Whether the element should be hidden after the animation completes.
        */
        kendoAnimate(duration: number, reverse: boolean, complete: Function, show: boolean, hide: boolean): void;
        /**
        Stops the animation effect running on the specified elements and optionally jumps to the end and clears the animation effect queue.
In browsers that don't support transitions falls back to jQuery stop().This functionality is useful to avoid chaining many effects, causing them to run longer than expected.
        @method
        @param gotoEnd - Whether to jump to the animation end position when stopping or just leave the element at its current position.
        */
        kendoStop(gotoEnd: boolean): void;
        /**
        Adds a CSS class to the element, while doing a transition to the new state. If the browser doesn't support transitions,
the method falls back to jQuery addClass();
        @method
        @param classes - A list of the classes that should be added to the element/s, separated by a space.
        @param options - An object containing several additional options, like duration and exclusive.
        */
        kendoAddClass(classes: string, options: any): void;
        /**
        Removes a CSS class from the element, while doing a transition to the new state. If the browser doesn't support transitions,
the method falls back to jQuery removeClass();
        @method
        @param classes - A list of the classes that should be removed from the element/s, separated by a space.
        @param options - An object containing several additional options, like duration and exclusive.
        */
        kendoRemoveClass(classes: string, options: any): void;
        /**
        Toggle a CSS class on the element, based on a flag, while doing a transition to the new state. If the browser doesn't support transitions,
the method falls back to jQuery toggleClass();
        @method
        @param classes - A list of the classes that should be toggled on the element/s, separated by a space.
        @param options - An object containing several additional options, like duration and exclusive.
        @param toggle - A boolean flag to control the toggle - true to add or false to remove the CSS class. If omitted the method will assume the opposite state
should be toggled.
        */
        kendoToggleClass(classes: string, options: any, toggle: boolean): void;
    }

    interface FXKendoAddClassOptions {
        duration?: number;
        exclusive?: string;
        ease?: string;
    }

    interface FXKendoRemoveClassOptions {
        duration?: number;
        exclusive?: string;
        ease?: string;
    }

    interface FXKendoToggleClassOptions {
        duration?: number;
        exclusive?: string;
        ease?: string;
    }

    interface FXOptions {
        name?: string;
    }

    interface FXEvent {
        sender: FX;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }


}
declare module kendo.mobile.ui {
    class ActionSheet extends kendo.mobile.ui.Widget {
        static fn: ActionSheet;
        static extend(proto: Object): ActionSheet;

        element: JQuery;
        wrapper: JQuery;
        constructor(element: Element, options?: ActionSheetOptions);
        options: ActionSheetOptions;
        /**
        Close the ActionSheet.
        @method
        */
        close(): void;
        /**
        Prepares the ActionSheet for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        @method
        */
        destroy(): void;
        /**
        Open the ActionSheet.
        @method
        @param target - (optional) The target element of the ActionSheet, available in the callback methods.Notice The target element is mandatory on tablets, as the ActionSheet widget positions itself relative to opening element when a tablet is detected.
        @param context - (optional) The context of the ActionSheet, available in the callback methods.
        */
        open(target: JQuery, context: any): void;
    }

    interface ActionSheetPopup {
        /**
        The direction to which the popup will expand, relative to the target that opened it.
        @member {any}
        */
        direction?: any;
        /**
        The height of the popup in pixels.
        @member {any}
        */
        height?: any;
        /**
        The width of the popup in pixels.
        @member {any}
        */
        width?: any;
    }

    interface ActionSheetOptions {
        name?: string;
        /**
        The text of the cancel button.
        @member {string}
        */
        cancel?: string;
        /**
        The popup configuration options (tablet only).
        @member {ActionSheetPopup}
        */
        popup?: ActionSheetPopup;
        /**
        By default, the actionsheet opens as a full screen dialog on a phone device or as a popover if a tablet is detected. Setting the type to "phone" or "tablet" will force the looks of the widget regardless of the device.
        @member {string}
        */
        type?: string;
        /**
        Fires when the ActionSheet is closed.
        */
        close?(e: ActionSheetEvent): void;
        /**
        Fires when the ActionSheet is opened.
        */
        open?(e: ActionSheetOpenEvent): void;
    }

    interface ActionSheetEvent {
        sender: ActionSheet;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }

    interface ActionSheetOpenEvent extends ActionSheetEvent {
        /**
        The invocation target of the ActionSheet.
        @member {JQuery}
        */
        target?: JQuery;
        /**
        The defined ActionSheet context.
        @member {JQuery}
        */
        context?: JQuery;
    }


    class BackButton extends kendo.mobile.ui.Widget {
        static fn: BackButton;
        static extend(proto: Object): BackButton;

        element: JQuery;
        wrapper: JQuery;
        constructor(element: Element, options?: BackButtonOptions);
        options: BackButtonOptions;
        /**
        Prepares the BackButton for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        @method
        */
        destroy(): void;
    }

    interface BackButtonOptions {
        name?: string;
        /**
        Fires when the user taps the button.
        */
        click?(e: BackButtonClickEvent): void;
    }

    interface BackButtonEvent {
        sender: BackButton;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }

    interface BackButtonClickEvent extends BackButtonEvent {
        /**
        The clicked DOM element
        @member {JQuery}
        */
        target?: JQuery;
        /**
        The button DOM element
        @member {JQuery}
        */
        button?: JQuery;
    }


    class Button extends kendo.mobile.ui.Widget {
        static fn: Button;
        static extend(proto: Object): Button;

        element: JQuery;
        wrapper: JQuery;
        constructor(element: Element, options?: ButtonOptions);
        options: ButtonOptions;
        /**
        Introduced in Q1 2013 SP Sets a badge on the Button with the specified value. If invoked without parameters, returns the current badge value. Set the value to false to remove the badge.
        @method
        @param value - The target value to be set or false to be removed.
        @returns the badge value if invoked without parameters, otherwise the Button object.
        */
        badge(value: string): string;
        /**
        Introduced in Q1 2013 SP Sets a badge on the Button with the specified value. If invoked without parameters, returns the current badge value. Set the value to false to remove the badge.
        @method
        @param value - The target value to be set or false to be removed.
        @returns the badge value if invoked without parameters, otherwise the Button object.
        */
        badge(value: boolean): string;
        /**
        Prepares the Button for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        @method
        */
        destroy(): void;
        /**
        Changes the enabled state of the widget.
        @method
        @param enable - Whether to enable or disable the widget.
        */
        enable(enable: boolean): void;
    }

    interface ButtonOptions {
        name?: string;
        /**
        The badge of the button.
        @member {string}
        */
        badge?: string;
        /**
        If set to false the widget will be disabled and will not allow the user to click it. The widget is enabled by default.
        @member {boolean}
        */
        enable?: boolean;
        /**
        The icon of the button. It can be either one of the built-in icons, or a custom one.
        @member {string}
        */
        icon?: string;
        /**
        Fires when the user taps the button.
        */
        click?(e: ButtonClickEvent): void;
    }

    interface ButtonEvent {
        sender: Button;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }

    interface ButtonClickEvent extends ButtonEvent {
        /**
        The clicked DOM element
        @member {JQuery}
        */
        target?: JQuery;
        /**
        The button DOM element
        @member {JQuery}
        */
        button?: JQuery;
    }


    class ButtonGroup extends kendo.mobile.ui.Widget {
        static fn: ButtonGroup;
        static extend(proto: Object): ButtonGroup;

        element: JQuery;
        wrapper: JQuery;
        constructor(element: Element, options?: ButtonGroupOptions);
        options: ButtonGroupOptions;
        /**
        Introduced in Q1 2013 SP Sets a badge on one of the ButtonGroup buttons with the specified value. If invoked without parameters, returns the button's current badge value. Set the value to false to remove the badge.
        @method
        @param button - The target button specified either as a jQuery selector/object or as an button index.
        @param value - The target value to be set or false to be removed.
        @returns the badge value if invoked without parameters, otherwise the ButtonGroup object.
        */
        badge(button: string, value: string): string;
        /**
        Introduced in Q1 2013 SP Sets a badge on one of the ButtonGroup buttons with the specified value. If invoked without parameters, returns the button's current badge value. Set the value to false to remove the badge.
        @method
        @param button - The target button specified either as a jQuery selector/object or as an button index.
        @param value - The target value to be set or false to be removed.
        @returns the badge value if invoked without parameters, otherwise the ButtonGroup object.
        */
        badge(button: string, value: boolean): string;
        /**
        Introduced in Q1 2013 SP Sets a badge on one of the ButtonGroup buttons with the specified value. If invoked without parameters, returns the button's current badge value. Set the value to false to remove the badge.
        @method
        @param button - The target button specified either as a jQuery selector/object or as an button index.
        @param value - The target value to be set or false to be removed.
        @returns the badge value if invoked without parameters, otherwise the ButtonGroup object.
        */
        badge(button: number, value: string): string;
        /**
        Introduced in Q1 2013 SP Sets a badge on one of the ButtonGroup buttons with the specified value. If invoked without parameters, returns the button's current badge value. Set the value to false to remove the badge.
        @method
        @param button - The target button specified either as a jQuery selector/object or as an button index.
        @param value - The target value to be set or false to be removed.
        @returns the badge value if invoked without parameters, otherwise the ButtonGroup object.
        */
        badge(button: number, value: boolean): string;
        /**
        Get the currently selected Button.
        @method
        @returns the jQuery object representing the currently selected button.
        */
        current(): JQuery;
        /**
        Prepares the ButtonGroup for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        @method
        */
        destroy(): void;
        /**
        Select a Button.
        @method
        @param li - LI element or index of the Button.
        */
        select(li: JQuery): void;
        /**
        Select a Button.
        @method
        @param li - LI element or index of the Button.
        */
        select(li: number): void;
    }

    interface ButtonGroupOptions {
        name?: string;
        /**
        Defines the initially selected Button (zero based index).
        @member {number}
        */
        index?: number;
        /**
        Sets the DOM event used to select the button. Accepts "up" as an alias for touchend, mouseup and MSPointerUp vendor specific events.By default, buttons are selected immediately after the user presses the button (on touchstart or mousedown or MSPointerDown, depending on the mobile device).
However, if the widget is placed in a scrollable view, the user may accidentally press the button when scrolling. In such cases, it is recommended to set this option to "up".
        @member {string}
        */
        selectOn?: string;
        /**
        Fires when a Button is selected.
        */
        select?(e: ButtonGroupSelectEvent): void;
    }

    interface ButtonGroupEvent {
        sender: ButtonGroup;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }

    interface ButtonGroupSelectEvent extends ButtonGroupEvent {
        /**
        The index of the selected button
        @member {number}
        */
        index?: number;
    }


    class DetailButton extends kendo.mobile.ui.Widget {
        static fn: DetailButton;
        static extend(proto: Object): DetailButton;

        element: JQuery;
        wrapper: JQuery;
        constructor(element: Element, options?: DetailButtonOptions);
        options: DetailButtonOptions;
        /**
        Prepares the DetailButton for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        @method
        */
        destroy(): void;
    }

    interface DetailButtonOptions {
        name?: string;
        /**
        Fires when the user taps the button.
        */
        click?(e: DetailButtonClickEvent): void;
    }

    interface DetailButtonEvent {
        sender: DetailButton;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }

    interface DetailButtonClickEvent extends DetailButtonEvent {
        /**
        The clicked DOM element
        @member {JQuery}
        */
        target?: JQuery;
        /**
        The button DOM element
        @member {JQuery}
        */
        button?: JQuery;
    }


    class Drawer extends kendo.mobile.ui.Widget {
        static fn: Drawer;
        static extend(proto: Object): Drawer;

        element: JQuery;
        wrapper: JQuery;
        constructor(element: Element, options?: DrawerOptions);
        options: DrawerOptions;
        /**
        Prepares the Drawer for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        @method
        */
        destroy(): void;
        /**
        Hide the Drawer
        @method
        */
        hide(): void;
        /**
        Show the Drawer
        @method
        */
        show(): void;
    }

    interface DrawerOptions {
        name?: string;
        /**
        The position of the drawer. Can be left (default) or right.
        @member {string}
        */
        position?: string;
        /**
        If set to false, swiping the view will not activate the drawer. In this case, the drawer will only be open by a designated button
        @member {boolean}
        */
        swipeToOpen?: boolean;
        /**
        The text to display in the Navbar title (if present).
        @member {string}
        */
        title?: string;
        /**
        A list of the view ids on which the drawer will appear. If omitted, the drawer will work on any view in the application.
        @member {any}
        */
        views?: any;
        /**
        Fires before the mobile Drawer is revealed. The event can be prevented by calling the preventDefault method of the event parameter.
        */
        beforeShow?(e: DrawerEvent): void;
        /**
        Fired when the mobile Drawer is closed by the user.
        */
        hide?(e: DrawerHideEvent): void;
        /**
        Fired when the mobile Drawer and its child widgets are initialized.
        */
        init?(e: DrawerInitEvent): void;
        /**
        Fires when the Drawer is shown.
        */
        show?(e: DrawerShowEvent): void;
    }

    interface DrawerEvent {
        sender: Drawer;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }

    interface DrawerHideEvent extends DrawerEvent {
    }

    interface DrawerInitEvent extends DrawerEvent {
    }

    interface DrawerShowEvent extends DrawerEvent {
    }


    class Layout extends kendo.mobile.ui.Widget {
        static fn: Layout;
        static extend(proto: Object): Layout;

        element: JQuery;
        wrapper: JQuery;
        constructor(element: Element, options?: LayoutOptions);
        options: LayoutOptions;
    }

    interface LayoutOptions {
        name?: string;
        /**
        The id of the layout. Required
        @member {string}
        */
        id?: string;
        /**
        The specific platform this layout targets. By default, layouts are displayed
on all platforms.
        @member {string}
        */
        platform?: string;
        /**
        Fires when a mobile View using the layout becomes hidden.
        */
        hide?(e: LayoutHideEvent): void;
        /**
        Fires after a mobile Layout and its child widgets is initialized.
        */
        init?(e: LayoutInitEvent): void;
        /**
        Fires when a mobile View using the layout becomes visible.
        */
        show?(e: LayoutShowEvent): void;
    }

    interface LayoutEvent {
        sender: Layout;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }

    interface LayoutHideEvent extends LayoutEvent {
        /**
        The mobile layout instance
        @member {JQuery}
        */
        layout?: JQuery;
        /**
        The mobile view instance
        @member {JQuery}
        */
        view?: JQuery;
    }

    interface LayoutInitEvent extends LayoutEvent {
        /**
        The mobile layout instance
        @member {JQuery}
        */
        layout?: JQuery;
    }

    interface LayoutShowEvent extends LayoutEvent {
        /**
        The mobile layout instance
        @member {JQuery}
        */
        layout?: JQuery;
        /**
        The mobile view instance
        @member {JQuery}
        */
        view?: JQuery;
    }


    class ListView extends kendo.mobile.ui.Widget {
        static fn: ListView;
        static extend(proto: Object): ListView;

        element: JQuery;
        wrapper: JQuery;
        constructor(element: Element, options?: ListViewOptions);
        options: ListViewOptions;
        dataSource: kendo.data.DataSource;
        /**
        Appends new items generated by rendering the given data items with the listview template to the bottom of the listview.
        @method
        @param dataItems - 
        */
        append(dataItems: any): void;
        /**
        Prepends new items generated by rendering the given data items with the listview template to the top of the listview.
        @method
        @param dataItems - 
        */
        prepend(dataItems: any): void;
        /**
        Replaces the contents of the listview with the passed rendered data items.
        @method
        @param dataItems - 
        */
        replace(dataItems: any): void;
        /**
        Removes the listview items which are rendered with the passed data items.
        @method
        @param dataItems - 
        */
        remove(dataItems: any): void;
        /**
        Re-renders the given listview item with the new dataItem provided. In order for the method to work as expected, the data items should be of type kendo.data.Model.
        @method
        @param item - The listview item to update
        @param dataItem - The new dataItem
        */
        setDataItem(item: JQuery, dataItem: kendo.data.Model): void;
        /**
        Prepares the ListView for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        @method
        */
        destroy(): void;
        /**
        Get the listview DOM element items
        @method
        @returns The listview DOM element items
        */
        items(): JQuery;
        /**
        Repaints the listview (works only in databound mode).
        @method
        */
        refresh(): void;
        /**
        Sets the DataSource of an existing ListView and rebinds it.
        @method
        @param dataSource - 
        */
        setDataSource(dataSource: kendo.data.DataSource): void;
    }

    interface ListViewFilterable {
        /**
        Placeholder text for search input.
        @member {string}
        */
        placeholder?: string;
        /**
        Indicates whether filtering should be performed on every key up event or when the user press the Search button of the device keyboard.
        @member {boolean}
        */
        autoFilter?: boolean;
        /**
        Specifies the field which will be used in the filter expression. The default field value is undefined which is usefull when the list view is bound to a list of primitive types.
If this is not case the field must be defined.
        @member {string}
        */
        field?: string;
        /**
        Specifies whether the filter expression must be case sensitive or not.
        @member {boolean}
        */
        ignoreCase?: boolean;
        /**
        Specifies the comparison operator used in the filter expression. The operator must be one of the available DataSource filter operators.
        @member {string}
        */
        operator?: string;
    }

    interface ListViewOptions {
        name?: string;
        /**
        Used in combination with pullToRefresh. If set to true, newly loaded data will be appended on top when refreshing. Notice: not applicable if ListView is in a virtual mode.
        @member {boolean}
        */
        appendOnRefresh?: boolean;
        /**
        Indicates whether the listview will call read on the DataSource initially. If set to false, the listview will be bound after the DataSource instance fetch method is called.
        @member {boolean}
        */
        autoBind?: boolean;
        /**
        Instance of DataSource or the data that the mobile ListView will be bound to.
        @member {any}
        */
        dataSource?: any;
        /**
        If set to true, the listview gets the next page of data when the user scrolls near the bottom of the view.
        @member {boolean}
        */
        endlessScroll?: boolean;
        /**
        If set to true, the group headers will persist their position when the user scrolls through the listview.
Applicable only when the type is set to group, or when binding to grouped DataSource.Notice: fixed headers are not supported in virtual mode.
        @member {boolean}
        */
        fixedHeaders?: boolean;
        /**
        The header item template (applicable when the type is set to group).
        @member {any}
        */
        headerTemplate?: any;
        /**
        If set to true, a button is rendered at the bottom of the listview. Tapping it fetches and displays the items from the next page of the DataSource.
        @member {boolean}
        */
        loadMore?: boolean;
        /**
        The text of the rendered load-more button (applies only if loadMore is set to true).
        @member {string}
        */
        loadMoreText?: string;
        /**
        If set to true, the listview will reload its data when the user pulls the view over the top limit.
        @member {boolean}
        */
        pullToRefresh?: boolean;
        /**
        A callback function used when the 'pullToRefresh' option is enabled. The result of the function will be send as additional parameters to the DataSource's next method.Notice: When the listview is in a virtual mode, the pull to refresh action removes the previously loaded items in the listview (instead of appending new records at the top).
Previously loaded pages in the DataSource are also discarded.
        @member {Function}
        */
        pullParameters?: Function;
        /**
        The style of the widget. Can be either empty string(""), or inset.
        @member {string}
        */
        style?: string;
        /**
        The item template.
        @member {any}
        */
        template?: any;
        /**
        The type of the control. Can be either flat (default) or group. Determined automatically in databound mode.
        @member {string}
        */
        type?: string;
        /**
        Indicates whether the filter input must be visible or not.
        @member {ListViewFilterable}
        */
        filterable?: ListViewFilterable;
        /**
        Fires when item is tapped.
        */
        click?(e: ListViewClickEvent): void;
        /**
        Fires when the ListView has received data from the DataSource.
        */
        dataBound?(e: ListViewEvent): void;
        /**
        Fires when the ListView is about to be rendered.
        */
        dataBinding?(e: ListViewEvent): void;
        /**
        Fires when a new item is added to the listview (usually in virtual mode).
        */
        itemChange?(e: ListViewEvent): void;
    }

    interface ListViewEvent {
        sender: ListView;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }

    interface ListViewClickEvent extends ListViewEvent {
        /**
        The selected list item.
        @member {JQuery}
        */
        item?: JQuery;
        /**
        The tapped DOM element.
        @member {JQuery}
        */
        target?: JQuery;
        /**
        The corresponding dataItem associated with the item (available in databound mode only).
Note: The dataItem must be from a non-primitive type (Object).
        @member {any}
        */
        dataItem?: any;
        /**
        The tapped Kendo mobile Button (if present).
        @member {kendo.mobile.ui.Button}
        */
        button?: kendo.mobile.ui.Button;
    }


    class Loader extends kendo.mobile.ui.Widget {
        static fn: Loader;
        static extend(proto: Object): Loader;

        element: JQuery;
        wrapper: JQuery;
        constructor(element: Element, options?: LoaderOptions);
        options: LoaderOptions;
        /**
        Hide the loading animation.
        @method
        */
        hide(): void;
        /**
        Show the loading animation.
        @method
        */
        show(): void;
    }

    interface LoaderOptions {
        name?: string;
    }

    interface LoaderEvent {
        sender: Loader;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }


    class ModalView extends kendo.mobile.ui.Widget {
        static fn: ModalView;
        static extend(proto: Object): ModalView;

        element: JQuery;
        wrapper: JQuery;
        constructor(element: Element, options?: ModalViewOptions);
        options: ModalViewOptions;
        /**
        Close the ModalView
        @method
        */
        close(): void;
        /**
        Prepares the ModalView for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        @method
        */
        destroy(): void;
        /**
        Open the ModalView
        @method
        @param target - (optional) The target of the ModalView
        */
        open(target: JQuery): void;
    }

    interface ModalViewOptions {
        name?: string;
        /**
        The height of the ModalView container in pixels. If not set, the element style is used.
        @member {number}
        */
        height?: number;
        /**
        When set to false, the ModalView will close when the user taps outside of its element.
        @member {boolean}
        */
        modal?: boolean;
        /**
        The width of the ModalView container in pixels. If not set, the element style is used.
        @member {number}
        */
        width?: number;
        /**
        Fired when the mobile ModalView is closed by the user.
        */
        close?(e: ModalViewCloseEvent): void;
        /**
        Fired when the mobile ModalView and its child widgets are initialized.
        */
        init?(e: ModalViewInitEvent): void;
        /**
        Fires when the ModalView is shown.
        */
        open?(e: ModalViewOpenEvent): void;
    }

    interface ModalViewEvent {
        sender: ModalView;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }

    interface ModalViewCloseEvent extends ModalViewEvent {
    }

    interface ModalViewInitEvent extends ModalViewEvent {
    }

    interface ModalViewOpenEvent extends ModalViewEvent {
        /**
        The invocation target of the ModalView.
        @member {JQuery}
        */
        target?: JQuery;
    }


    class NavBar extends kendo.mobile.ui.Widget {
        static fn: NavBar;
        static extend(proto: Object): NavBar;

        element: JQuery;
        wrapper: JQuery;
        constructor(element: Element, options?: NavBarOptions);
        options: NavBarOptions;
        /**
        Prepares the NavBar for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        @method
        */
        destroy(): void;
        /**
        Update the title element text. The title element is specified by setting the role data attribute to view-title.
        @method
        @param value - The text of title
        */
        title(value: string): void;
    }

    interface NavBarOptions {
        name?: string;
    }

    interface NavBarEvent {
        sender: NavBar;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }


    class Pane extends kendo.mobile.ui.Widget {
        static fn: Pane;
        static extend(proto: Object): Pane;

        element: JQuery;
        wrapper: JQuery;
        constructor(element: Element, options?: PaneOptions);
        options: PaneOptions;
        /**
        Prepares the Pane for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        @method
        */
        destroy(): void;
        /**
        Hide the loading animation.
        @method
        */
        hideLoading(): void;
        /**
        Navigate the local or remote view.
        @method
        @param url - The id or URL of the view.
        @param transition - The transition to apply when navigating. See View Transitions for more information.
        */
        navigate(url: string, transition: string): void;
        /**
        Navigate to local or to remote view. The view will replace the current one in the history stack.
        @method
        @param url - The id or URL of the view.
        @param transition - The transition to apply when navigating. See View Transitions for more information.
        */
        replace(url: string, transition: string): void;
        /**
        
        @method
        */
        Example(): void;
        /**
        Show the loading animation.
        @method
        */
        showLoading(): void;
        /**
        Get a reference to the current view.
        @method
        @returns the view instance.
        */
        view(): kendo.mobile.ui.View;
    }

    interface PaneOptions {
        name?: string;
        /**
        Applicable when the pane is inside a SplitView. If set to true, the pane will be hidden when the device is in portrait position. The expandPanes SplitView method displays the hidden panes.The id of the initial mobile View to display.
        @member {boolean}
        */
        collapsible?: boolean;
        /**
        The id of the initial mobile View to display.
        @member {string}
        */
        initial?: string;
        /**
        The id of the default Pane Layout.
        @member {string}
        */
        layout?: string;
        /**
        The text displayed in the loading popup. Setting this value to false will disable the loading popup.
        @member {string}
        */
        loading?: string;
        /**
        Sets the pane width in pixels when the device is in portrait position.
        @member {number}
        */
        portraitWidth?: number;
        /**
        The default View transition.
        @member {string}
        */
        transition?: string;
        /**
        Triggered when pane navigates to a view.
        */
        navigate?(e: PaneNavigateEvent): void;
        /**
        Triggered after the pane displays a view.
        */
        viewShow?(e: PaneViewShowEvent): void;
    }

    interface PaneEvent {
        sender: Pane;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }

    interface PaneNavigateEvent extends PaneEvent {
        /**
        The URL of the view
        @member {JQuery}
        */
        url?: JQuery;
    }

    interface PaneViewShowEvent extends PaneEvent {
        /**
        The displayed view
        @member {kendo.mobile.ui.View}
        */
        view?: kendo.mobile.ui.View;
    }


    class PopOver extends kendo.mobile.ui.Widget {
        static fn: PopOver;
        static extend(proto: Object): PopOver;

        element: JQuery;
        wrapper: JQuery;
        constructor(element: Element, options?: PopOverOptions);
        options: PopOverOptions;
        /**
        Close the popover.
        @method
        */
        close(): void;
        /**
        Prepares the PopOver for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        @method
        */
        destroy(): void;
        /**
        Open the PopOver.
        @method
        @param target - The target of the Popover, to which the visual arrow will point to. This parameter is required for a tablet OS.
        */
        open(target: JQuery): void;
    }

    interface PopOverPane {
        /**
        The id of the initial mobile View to display.
        @member {string}
        */
        initial?: string;
        /**
        The id of the default Pane Layout.
        @member {string}
        */
        layout?: string;
        /**
        The text displayed in the loading popup. Setting this value to false will disable the loading popup.
        @member {string}
        */
        loading?: string;
        /**
        The default View transition.
        @member {string}
        */
        transition?: string;
    }

    interface PopOverPopup {
        /**
        The height of the popup in pixels.
        @member {any}
        */
        height?: any;
        /**
        The width of the popup in pixels.
        @member {any}
        */
        width?: any;
    }

    interface PopOverOptions {
        name?: string;
        /**
        The pane configuration options.
        @member {PopOverPane}
        */
        pane?: PopOverPane;
        /**
        The popup configuration options.
        @member {PopOverPopup}
        */
        popup?: PopOverPopup;
        /**
        Fires when popover is closed.
        */
        close?(e: PopOverCloseEvent): void;
        /**
        Fires when popover is opened.
        */
        open?(e: PopOverOpenEvent): void;
    }

    interface PopOverEvent {
        sender: PopOver;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }

    interface PopOverCloseEvent extends PopOverEvent {
    }

    interface PopOverOpenEvent extends PopOverEvent {
        /**
        The DOM element, which triggered the popover opening.
        @member {JQuery}
        */
        target?: JQuery;
    }


    class ScrollView extends kendo.mobile.ui.Widget {
        static fn: ScrollView;
        static extend(proto: Object): ScrollView;

        element: JQuery;
        wrapper: JQuery;
        constructor(element: Element, options?: ScrollViewOptions);
        options: ScrollViewOptions;
        dataSource: kendo.data.DataSource;
        /**
        Update the ScrollView HTML content.
        @method
        @param content - The new ScrollView content.
        */
        content(content: string): void;
        /**
        Update the ScrollView HTML content.
        @method
        @param content - The new ScrollView content.
        */
        content(content: JQuery): void;
        /**
        Prepares the ScrollView for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        @method
        */
        destroy(): void;
        /**
        Switches to the next page with animation.
        @method
        */
        next(): void;
        /**
        Switches to the previous page with animation.
        @method
        */
        prev(): void;
        /**
        Redraw the mobile ScrollView pager. Called automatically on device orientation change event.
        @method
        */
        refresh(): void;
        /**
        Scroll to the given page. Pages are zero-based indexed.
        @method
        @param page - The page to scroll to.
        @param instant - If set to true, the ScrollView will jump instantly to the given page without any animation effects.
        */
        scrollTo(page: number, instant: boolean): void;
        /**
        Sets the DataSource of an existing ScrollView and rebinds it.
        @method
        @param dataSource - 
        */
        setDataSource(dataSource: kendo.data.DataSource): void;
    }

    interface ScrollViewOptions {
        name?: string;
        /**
        If set to false the widget will not bind to the DataSource during initialization. In this case data binding will occur when the change event of the data source is fired. By default the widget will bind to the DataSource specified in the configuration.Applicable only in data bound mode.
        @member {boolean}
        */
        autoBind?: boolean;
        /**
        The velocity threshold after which a swipe will result in a bounce effect.
        @member {number}
        */
        bounceVelocityThreshold?: number;
        /**
        The height of the ScrollView content. Supports 100% if the ScrollView is embedded in a stretched view and the ScrollView element is an immediate child of the view element.
        @member {any}
        */
        contentHeight?: any;
        /**
        Instance of DataSource that the mobile ScrollView will be bound to. If DataSource is set, the widget will operate in data bound mode.
        @member {any}
        */
        dataSource?: any;
        /**
        The milliseconds that take the ScrollView to snap to the current page after released.
        @member {number}
        */
        duration?: number;
        /**
        The template which is used to render the pages without content. By default the ScrollView renders a blank page.Applicable only in data bound mode.
        @member {string}
        */
        emptyTemplate?: string;
        /**
        If set to true the ScrollView will display a pager. By default pager is enabled.
        @member {boolean}
        */
        enablePager?: boolean;
        /**
        Determines how many data items will be passed to the page template.Applicable only in data bound mode.
        @member {number}
        */
        itemsPerPage?: number;
        /**
        The initial page to display.
        @member {number}
        */
        page?: number;
        /**
        Multiplier applied to the snap amount of the ScrollView. By default, the widget scrolls to the next screen when swipe. If the pageSize property is set to 0.5, the ScrollView will scroll by half of the widget width.Not applicable in data bound mode.
        @member {number}
        */
        pageSize?: number;
        /**
        The template which is used to render the content of pages. By default the ScrollView renders a div element for every page.Applicable only in data bound mode.
        @member {string}
        */
        template?: string;
        /**
        The velocity threshold after which a swipe will navigate to the next page (as opposed to snapping back to the current page).
        @member {number}
        */
        velocityThreshold?: number;
        /**
        Fires before the widget page is changed. The change can be prevented by calling the preventDefault method of the event parameter, in which case the widget will snap back to the current page.
        */
        changing?(e: ScrollViewChangingEvent): void;
        /**
        Fires when the widget page is changed.
        */
        change?(e: ScrollViewChangeEvent): void;
        /**
        Fires when widget refreshes
        */
        refresh?(e: ScrollViewRefreshEvent): void;
    }

    interface ScrollViewEvent {
        sender: ScrollView;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }

    interface ScrollViewChangingEvent extends ScrollViewEvent {
        /**
        The current page (zero based index)
        @member {number}
        */
        currentPage?: number;
        /**
        The page about to be displayed (zero based index)
        @member {number}
        */
        nextPage?: number;
    }

    interface ScrollViewChangeEvent extends ScrollViewEvent {
        /**
        The current page (zero based index)
        @member {number}
        */
        page?: number;
        /**
        The page element. Available only in data bound mode. Parameter will be undefined in standard mode.
        @member {JQuery}
        */
        element?: JQuery;
        /**
        The data collection. Available only in data bound mode. Parameter will be undefined in standard mode.
        @member {any}
        */
        data?: any;
    }

    interface ScrollViewRefreshEvent extends ScrollViewEvent {
        /**
        The number of pages
        @member {number}
        */
        pageCount?: number;
        /**
        The current page number (zero based index)
        @member {number}
        */
        page?: number;
    }


    class Scroller extends kendo.mobile.ui.Widget {
        static fn: Scroller;
        static extend(proto: Object): Scroller;

        element: JQuery;
        wrapper: JQuery;
        constructor(element: Element, options?: ScrollerOptions);
        options: ScrollerOptions;
        /**
        Scrolls the scroll container to the specified location with animation. The arguments should be negative numbers.
        @method
        @param x - The horizontal offset in pixels to scroll to.
        @param y - The vertical offset in pixels to scroll to.
        */
        animatedScrollTo(x: number, y: number): void;
        /**
        Prepares the Scroller for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        @method
        */
        destroy(): void;
        /**
        Disables the scrolling of the element.
        @method
        */
        disable(): void;
        /**
        Enables the scrolling of the element after it has been disabled by calling disable.
        @method
        */
        enable(): void;
        /**
        Returns the viewport height of the scrollable element.
        @method
        @returns the viewport height in pixels.
        */
        height(): number;
        /**
        Indicate that the pull event is handled (i.e. data from the server has been retrieved).
        @method
        */
        pullHandled(): void;
        /**
        Scrolls the container to the top.
        @method
        */
        reset(): void;
        /**
        Returns the height in pixels of the scroller content.
        @method
        */
        scrollHeight(): void;
        /**
        Scrolls the container to the specified location. The arguments should be negative numbers.
        @method
        @param x - The horizontal offset in pixels to scroll to.
        @param y - The vertical offset in pixels to scroll to.
        */
        scrollTo(x: number, y: number): void;
        /**
        Returns the width in pixels of the scroller content.
        @method
        */
        scrollWidth(): void;
        /**
        Zooms the scroller out to the minimum zoom level possible.
        @method
        */
        zoomOut(): void;
    }

    interface ScrollerOptions {
        name?: string;
        /**
        If set to true, the user can zoom in/out the contents of the widget using the pinch/zoom gesture.
        @member {boolean}
        */
        zoom?: boolean;
        /**
        Weather or not to allow out of bounds dragging and easing.
        @member {boolean}
        */
        elastic?: boolean;
        /**
        The threshold below which a releasing the scroller will trigger the pull event.
Has effect only when the pullToRefresh option is set to true.
        @member {number}
        */
        pullOffset?: number;
        /**
        The message template displayed when the user pulls the scroller.
Has effect only when the pullToRefresh option is set to true.
        @member {string}
        */
        pullTemplate?: string;
        /**
        If set to true, the scroller will display a hint when the user pulls the container beyond its top limit.
If a pull beyond the specified pullOffset occurs, a pull event will be triggered.
        @member {boolean}
        */
        pullToRefresh?: boolean;
        /**
        The message template displayed during the refresh.
Has effect only when the pullToRefresh option is set to true.
        @member {string}
        */
        refreshTemplate?: string;
        /**
        The message template displayed when the user pulls the scroller below the pullOffset, indicating that pullToRefresh will occur.
Has effect only when the pullToRefresh option is set to true.
        @member {string}
        */
        releaseTemplate?: string;
        /**
        If set to true, the scroller will use the native scrolling available in the current platform. This should help with form issues on some platforms (namely Android and WP8).
Native scrolling is only enabled on platforms that support it: iOS > 4, Android > 2, WP8. BlackBerry devices do support it, but the native scroller is flaky.
        @member {boolean}
        */
        useNative?: boolean;
        /**
        Fires when the pull option is set to true, and the user pulls the scrolling container beyond the specified pullThreshold.
        */
        pull?(e: ScrollerEvent): void;
        /**
        Fires when the scroller dimensions change (e.g. orientation change or resize)
        */
        resize?(e: ScrollerEvent): void;
        /**
        Fires when the user scrolls through the content.
        */
        scroll?(e: ScrollerScrollEvent): void;
    }

    interface ScrollerEvent {
        sender: Scroller;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }

    interface ScrollerScrollEvent extends ScrollerEvent {
        /**
        The number of pixels that are hidden from view above the scrollable area.
        @member {number}
        */
        scrollTop?: number;
        /**
        The number of pixels that are hidden from view to the left of the scrollable area.
        @member {number}
        */
        scrollLeft?: number;
    }


    class SplitView extends kendo.mobile.ui.Widget {
        static fn: SplitView;
        static extend(proto: Object): SplitView;

        element: JQuery;
        wrapper: JQuery;
        constructor(element: Element, options?: SplitViewOptions);
        options: SplitViewOptions;
        /**
        Prepares the SplitView for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        @method
        */
        destroy(): void;
        /**
        Displays the collapsible panes; has effect only when the device is in portrait orientation.
        @method
        */
        expandPanes(): void;
        /**
        Collapses back the collapsible panes (displayed previously with expandPanes); has effect only when the device is in portrait orientation.
        @method
        */
        collapsePanes(): void;
    }

    interface SplitViewOptions {
        name?: string;
        /**
        Defines the SplitView style - horizontal or vertical.
        @member {string}
        */
        style?: string;
        /**
        Fires after the mobile SplitView and its child widgets are initialized.
        */
        init?(e: SplitViewInitEvent): void;
        /**
        Fires when the mobile SplitView becomes visible.
        */
        show?(e: SplitViewShowEvent): void;
    }

    interface SplitViewEvent {
        sender: SplitView;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }

    interface SplitViewInitEvent extends SplitViewEvent {
        /**
        The mobile SplitView instance
        @member {JQuery}
        */
        view?: JQuery;
    }

    interface SplitViewShowEvent extends SplitViewEvent {
        /**
        The mobile SplitView instance
        @member {JQuery}
        */
        view?: JQuery;
    }


    class Switch extends kendo.mobile.ui.Widget {
        static fn: Switch;
        static extend(proto: Object): Switch;

        element: JQuery;
        wrapper: JQuery;
        constructor(element: Element, options?: SwitchOptions);
        options: SwitchOptions;
        /**
        Get/Set the checked state of the widget.
        @method
        @returns The checked state of the widget.
        */
        check(): boolean;
        /**
        Get/Set the checked state of the widget.
        @method
        @param check - Whether to turn the widget on or off.
        */
        check(check: boolean): void;
        /**
        Prepares the Switch for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        @method
        */
        destroy(): void;
        /**
        Changes the enabled state of the widget.
        @method
        @param enable - Whether to enable or disable the widget.
        */
        enable(enable: boolean): void;
        /**
        Forces the Switch to recalculate its dimensions. Useful when major changes in the interface happen dynamically, like for instance changing the skin.
        @method
        */
        refresh(): void;
        /**
        Toggle the checked state of the widget.
        @method
        */
        toggle(): void;
    }

    interface SwitchOptions {
        name?: string;
        /**
        The checked state of the widget.
        @member {boolean}
        */
        checked?: boolean;
        /**
        If set to false the widget will be disabled and will not allow the user to change its checked state. The widget is enabled by default.
        @member {boolean}
        */
        enable?: boolean;
        /**
        The OFF label.
        @member {string}
        */
        offLabel?: string;
        /**
        The ON label.
        @member {string}
        */
        onLabel?: string;
        /**
        Fires when the state of the widget changes
        */
        change?(e: SwitchChangeEvent): void;
    }

    interface SwitchEvent {
        sender: Switch;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }

    interface SwitchChangeEvent extends SwitchEvent {
        /**
        The checked state of the widget.
        @member {any}
        */
        checked?: any;
    }


    class TabStrip extends kendo.mobile.ui.Widget {
        static fn: TabStrip;
        static extend(proto: Object): TabStrip;

        element: JQuery;
        wrapper: JQuery;
        constructor(element: Element, options?: TabStripOptions);
        options: TabStripOptions;
        /**
        Introduced in Q1 2013 SP Sets a badge on one of the tabs with the specified value. If invoked without second parameter, returns the tab's current badge value. Set the value to false to remove the badge.
        @method
        @param tab - The target tab specified either as a jQuery selector/object or as an item index.
        @param value - The target value to be set or false to be removed.
        @returns Returns the badge value if invoked without parameters, otherwise returns the TabStrip object.
        */
        badge(tab: string, value: string): string;
        /**
        Introduced in Q1 2013 SP Sets a badge on one of the tabs with the specified value. If invoked without second parameter, returns the tab's current badge value. Set the value to false to remove the badge.
        @method
        @param tab - The target tab specified either as a jQuery selector/object or as an item index.
        @param value - The target value to be set or false to be removed.
        @returns Returns the badge value if invoked without parameters, otherwise returns the TabStrip object.
        */
        badge(tab: string, value: boolean): string;
        /**
        Introduced in Q1 2013 SP Sets a badge on one of the tabs with the specified value. If invoked without second parameter, returns the tab's current badge value. Set the value to false to remove the badge.
        @method
        @param tab - The target tab specified either as a jQuery selector/object or as an item index.
        @param value - The target value to be set or false to be removed.
        @returns Returns the badge value if invoked without parameters, otherwise returns the TabStrip object.
        */
        badge(tab: number, value: string): string;
        /**
        Introduced in Q1 2013 SP Sets a badge on one of the tabs with the specified value. If invoked without second parameter, returns the tab's current badge value. Set the value to false to remove the badge.
        @method
        @param tab - The target tab specified either as a jQuery selector/object or as an item index.
        @param value - The target value to be set or false to be removed.
        @returns Returns the badge value if invoked without parameters, otherwise returns the TabStrip object.
        */
        badge(tab: number, value: boolean): string;
        /**
        Get the currently selected tab DOM element.
        @method
        @returns the currently selected tab DOM element.
        */
        currentItem(): JQuery;
        /**
        Prepares the TabStrip for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        @method
        */
        destroy(): void;
        /**
        Set the mobile TabStrip active tab to the tab with the specified URL. This method doesn't change the current View. To change the View, use Application's navigate method instead.
        @method
        @param url - The URL or zero based index of the tab.
        */
        switchTo(url: string): void;
        /**
        Set the mobile TabStrip active tab to the tab with the specified URL. This method doesn't change the current View. To change the View, use Application's navigate method instead.
        @method
        @param url - The URL or zero based index of the tab.
        */
        switchTo(url: number): void;
        /**
        Set the mobile TabStrip active tab to the tab with the specified full URL. This method doesn't change the current View. To change the View, use Application's navigate method instead.
        @method
        @param url - The URL of the tab.
        */
        switchByFullUrl(url: string): void;
        /**
        Clear the currently selected tab.
        @method
        */
        clear(): void;
    }

    interface TabStripOptions {
        name?: string;
        /**
        The index of the initially selected tab.
        @member {number}
        */
        selectedIndex?: number;
        /**
        Fires when tab is selected.
        */
        select?(e: TabStripSelectEvent): void;
    }

    interface TabStripEvent {
        sender: TabStrip;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }

    interface TabStripSelectEvent extends TabStripEvent {
        /**
        The selected tab
        @member {JQuery}
        */
        item?: JQuery;
    }


    class View extends kendo.mobile.ui.Widget {
        static fn: View;
        static extend(proto: Object): View;

        element: JQuery;
        wrapper: JQuery;
        constructor(element: Element, options?: ViewOptions);
        options: ViewOptions;
        /**
        Retrieves the current content holder of the View - this is the content element if the View is stretched or the scroll container otherwise.
        @method
        */
        contentElement(): void;
        /**
        Prepares the View for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        @method
        */
        destroy(): void;
        /**
        Enables or disables the user interaction with the view and its contents.
        @method
        @param enable - Omitting the parameter or passing true enables the view. Passing false disables the view.
        */
        enable(enable: boolean): void;
    }

    interface ViewOptions {
        name?: string;
        /**
        The MVVM model to bind to. If a string is passed, The view will try to resolve a reference to the view model variable in the global scope.
        @member {string}
        */
        model?: string;
        /**
        Applicable to remote views only. If set to true, the remote view contents will be reloaded from the server (using Ajax) each time the view is navigated to.
        @member {boolean}
        */
        reload?: boolean;
        /**
        If set to true, the view will stretch its child contents to occupy the entire view, while disabling kinetic scrolling.
Useful if the view contains an image or a map.
        @member {boolean}
        */
        stretch?: boolean;
        /**
        The text to display in the NavBar title (if present) and the browser title.
        @member {string}
        */
        title?: string;
        /**
        If set to true, the view will use the native scrolling available in the current platform. This should help with form issues on some platforms (namely Android and WP8).
Native scrolling is only enabled on platforms that support it: iOS > 5+, Android > 3+, WP8. BlackBerry devices do support it, but the native scroller is flaky.
        @member {boolean}
        */
        useNativeScrolling?: boolean;
        /**
        If set to true, the user can zoom in/out the contents of the view using the pinch/zoom gesture.
        @member {boolean}
        */
        zoom?: boolean;
        /**
        Fires after the mobile View becomes visible. If the view is displayed with transition, the event is triggered after the transition is complete.
        */
        afterShow?(e: ViewAfterShowEvent): void;
        /**
        Fires before the mobile View becomes hidden.
        */
        beforeHide?(e: ViewBeforeHideEvent): void;
        /**
        Fires before the mobile View becomes visible. The event can be prevented by calling the preventDefault method of the event parameter, in case a redirection should happen.
        */
        beforeShow?(e: ViewBeforeShowEvent): void;
        /**
        Fires when the mobile View becomes hidden.
        */
        hide?(e: ViewHideEvent): void;
        /**
        Fires after the mobile View and its child widgets are initialized.
        */
        init?(e: ViewInitEvent): void;
        /**
        Fires when the mobile View becomes visible.
        */
        show?(e: ViewShowEvent): void;
    }

    interface ViewEvent {
        sender: View;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }

    interface ViewAfterShowEvent extends ViewEvent {
        /**
        The mobile view instance
        @member {kendo.mobile.ui.View}
        */
        view?: kendo.mobile.ui.View;
    }

    interface ViewBeforeHideEvent extends ViewEvent {
        /**
        The mobile view instance
        @member {kendo.mobile.ui.View}
        */
        view?: kendo.mobile.ui.View;
    }

    interface ViewBeforeShowEvent extends ViewEvent {
        /**
        The mobile view instance
        @member {kendo.mobile.ui.View}
        */
        view?: kendo.mobile.ui.View;
    }

    interface ViewHideEvent extends ViewEvent {
        /**
        The mobile view instance
        @member {kendo.mobile.ui.View}
        */
        view?: kendo.mobile.ui.View;
    }

    interface ViewInitEvent extends ViewEvent {
        /**
        The mobile view instance
        @member {kendo.mobile.ui.View}
        */
        view?: kendo.mobile.ui.View;
    }

    interface ViewShowEvent extends ViewEvent {
        /**
        The mobile view instance.
        @member {kendo.mobile.ui.View}
        */
        view?: kendo.mobile.ui.View;
    }


}
declare module kendo.ui {
    class Touch extends kendo.ui.Widget {
        static fn: Touch;
        static extend(proto: Object): Touch;

        element: JQuery;
        wrapper: JQuery;
        constructor(element: Element, options?: TouchOptions);
        options: TouchOptions;
        /**
        Cancels the current touch event sequence. Calling cancel in a touchstart or dragmove will disable subsequent move or tap/end/hold event handlers from being called.
        @method
        */
        cancel(): void;
        /**
        Prepares the Touch for safe removal from DOM. Detaches all event handlers and removes jQuery.data attributes to avoid memory leaks. Calls destroy method of any child Kendo widgets.
        @method
        */
        destroy(): void;
    }

    interface TouchOptions {
        name?: string;
        /**
        jQuery selector that specifies child elements that are touchable if a widget is attached to a container.
        @member {string}
        */
        filter?: string;
        /**
        If set to true, the widget will capture and trigger the gesturestart, gesturechange, and gestureend events when the user touches the element with two fingers.
        @member {boolean}
        */
        multiTouch?: boolean;
        /**
        If set to true, the Touch widget will recognize horizontal swipes and trigger the swipe event.Notice: if the enableSwipe option is set to true, the dragstart, drag and dragend events will not be triggered.
        @member {boolean}
        */
        enableSwipe?: boolean;
        /**
        The minimum horizontal distance in pixels the user should swipe before the swipe event is triggered.
        @member {number}
        */
        minXDelta?: number;
        /**
        The maximum vertical deviation in pixels of the swipe event. Swipes with higher deviation are discarded.
        @member {number}
        */
        maxYDelta?: number;
        /**
        The maximum amount of time in milliseconds the swipe event can last. Slower swipes are discarded.
        @member {number}
        */
        maxDuration?: number;
        /**
        The timeout in milliseconds before the hold event is fired.Notice: the hold event will be triggered after the time passes, not after the user lifts his/hers finger.
        @member {number}
        */
        minHold?: number;
        /**
        The maximum period (in milliseconds) between two consecutive taps which will trigger the doubletap event.
        @member {number}
        */
        doubleTapTimeout?: number;
        /**
        Fires when the user presses the element.
        */
        touchstart?(e: TouchTouchstartEvent): void;
        /**
        Fires when the user starts dragging the element.
        */
        dragstart?(e: TouchDragstartEvent): void;
        /**
        Fires each time the user drags (within the element boundaries).
        */
        drag?(e: TouchDragEvent): void;
        /**
        Fires when the user lifts his/hers finger, or drags outside of the element boundaries.
        */
        dragend?(e: TouchDragendEvent): void;
        /**
        Fires when the user taps on the element. A touch sequence is considered a tap if the user does not perform dragging.
        */
        tap?(e: TouchTapEvent): void;
        /**
        Fires when the user quickly taps twice on the element.
        */
        doubletap?(e: TouchDoubletapEvent): void;
        /**
        Fires when the user presses and holds  his/hers finger on the element for a minimum amount of time.The minimum amount can be configured through the minHold configuration option.
        */
        hold?(e: TouchHoldEvent): void;
        /**
        Fires when the user performs a horizontal swipe on the element.For this event to be triggered, the enableSwipe configuration option should be set to true.
        */
        swipe?(e: TouchSwipeEvent): void;
        /**
        Fires when the user presses the element with two fingers (or presses with a second finger while a first finger is still touching the element).
        */
        gesturestart?(e: TouchGesturestartEvent): void;
        /**
        Fires when the user moves a finger while multiple fingers are touching the element.
        */
        gesturechange?(e: TouchGesturechangeEvent): void;
        /**
        Fires when the user lifts the second finger from the element.
Notice: After the last finger is moved, the dragend event is fired.
        */
        gestureend?(e: TouchGestureendEvent): void;
    }

    interface TouchEvent {
        sender: Touch;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }

    interface TouchTouchstartEvent extends TouchEvent {
        /**
        The touch event instance
        @member {kendo.mobile.ui.TouchEventOptions}
        */
        touch?: kendo.mobile.ui.TouchEventOptions;
        /**
        The jQuery event which triggered the touch event.
        @member {JQueryEventObject}
        */
        event?: JQueryEventObject;
    }

    interface TouchDragstartEvent extends TouchEvent {
        /**
        The touch event instance
        @member {kendo.mobile.ui.TouchEventOptions}
        */
        touch?: kendo.mobile.ui.TouchEventOptions;
        /**
        The jQuery event which triggered the touch event.
        @member {JQueryEventObject}
        */
        event?: JQueryEventObject;
    }

    interface TouchDragEvent extends TouchEvent {
        /**
        The touch event instance
        @member {kendo.mobile.ui.TouchEventOptions}
        */
        touch?: kendo.mobile.ui.TouchEventOptions;
        /**
        The jQuery event which triggered the touch event.
        @member {JQueryEventObject}
        */
        event?: JQueryEventObject;
    }

    interface TouchDragendEvent extends TouchEvent {
        /**
        The touch event instance
        @member {kendo.mobile.ui.TouchEventOptions}
        */
        touch?: kendo.mobile.ui.TouchEventOptions;
        /**
        The jQuery event which triggered the touch event.
        @member {JQueryEventObject}
        */
        event?: JQueryEventObject;
    }

    interface TouchTapEvent extends TouchEvent {
        /**
        The touch event instance
        @member {kendo.mobile.ui.TouchEventOptions}
        */
        touch?: kendo.mobile.ui.TouchEventOptions;
        /**
        The jQuery event which triggered the touch event.
        @member {JQueryEventObject}
        */
        event?: JQueryEventObject;
    }

    interface TouchDoubletapEvent extends TouchEvent {
        /**
        The touch event instance
        @member {kendo.mobile.ui.TouchEventOptions}
        */
        touch?: kendo.mobile.ui.TouchEventOptions;
        /**
        The jQuery event which triggered the touch event.
        @member {JQueryEventObject}
        */
        event?: JQueryEventObject;
    }

    interface TouchHoldEvent extends TouchEvent {
        /**
        The touch event instance
        @member {kendo.mobile.ui.TouchEventOptions}
        */
        touch?: kendo.mobile.ui.TouchEventOptions;
        /**
        The jQuery event which triggered the touch event.
        @member {JQueryEventObject}
        */
        event?: JQueryEventObject;
    }

    interface TouchSwipeEvent extends TouchEvent {
        /**
        The touch event instance
        @member {kendo.mobile.ui.TouchEventOptions}
        */
        touch?: kendo.mobile.ui.TouchEventOptions;
        /**
        The jQuery event which triggered the touch event.
        @member {JQueryEventObject}
        */
        event?: JQueryEventObject;
    }

    interface TouchGesturestartEvent extends TouchEvent {
        /**
        An array containing the active touches.
        @member {any}
        */
        touches?: any;
        /**
        The jQuery event which triggered the touch event.
        @member {JQueryEventObject}
        */
        event?: JQueryEventObject;
        /**
        The distance (in pixels) between the two touches.
        @member {number}
        */
        distance?: number;
        /**
        The center point between the two touches. The point has two properties, x and y, which contain the x and the y coordinate, respectively.
        @member {kendo.mobile.ui.Point}
        */
        center?: kendo.mobile.ui.Point;
    }

    interface TouchGesturechangeEvent extends TouchEvent {
        /**
        An array containing the active touches.
        @member {any}
        */
        touches?: any;
        /**
        The jQuery event which triggered the touch event.
        @member {JQueryEventObject}
        */
        event?: JQueryEventObject;
        /**
        The distance (in pixels) between the two touches
        @member {number}
        */
        distance?: number;
        /**
        The center point between the two touches. The point has two properties, x and y, which contain the x and the y coordinate, respectively.
        @member {kendo.mobile.ui.Point}
        */
        center?: kendo.mobile.ui.Point;
    }

    interface TouchGestureendEvent extends TouchEvent {
        /**
        An array containing the active touches
        @member {any}
        */
        touches?: any;
        /**
        The jQuery event which triggered the touch event.
        @member {JQueryEventObject}
        */
        event?: JQueryEventObject;
        /**
        The distance (in pixels) between the two touches
        @member {number}
        */
        distance?: number;
        /**
        The center point between the two touches. The point has two properties, x and y, which contain the x and the y coordinate, respectively.
        @member {kendo.mobile.ui.Point}
        */
        center?: kendo.mobile.ui.Point;
    }


    class Validator extends kendo.ui.Widget {
        static fn: Validator;
        static extend(proto: Object): Validator;

        element: JQuery;
        wrapper: JQuery;
        constructor(element: Element, options?: ValidatorOptions);
        options: ValidatorOptions;
        /**
        Get the error messages if any.
        @method
        @returns Messages for the failed validation rules.
        */
        errors(): any;
        /**
        Hides the validation messages.
        @method
        */
        hideMessages(): void;
        /**
        Validates the input element(s) against the declared validation rules.
        @method
        @returns true if all validation rules passed successfully.Note that if a HTML form element is set as validation container, the form submits will be automatically prevented if validation fails.
        */
        validate(): boolean;
        /**
        Validates the input element against the declared validation rules.
        @method
        @param input - Input element to be validated.
        @returns true if all validation rules passed successfully.
        */
        validateInput(input: Element): boolean;
        /**
        Validates the input element against the declared validation rules.
        @method
        @param input - Input element to be validated.
        @returns true if all validation rules passed successfully.
        */
        validateInput(input: JQuery): boolean;
    }

    interface ValidatorOptions {
        name?: string;
        /**
        The template which renders the validation message.
        @member {string}
        */
        errorTemplate?: string;
        /**
        Set of messages (either strings or functions) which will be shown when given validation rule fails.
By setting already existing key the appropriate built-in message will be overridden.
        @member {any}
        */
        messages?: any;
        /**
        Set of custom validation rules. Those rules will extend the built-in ones.
        @member {any}
        */
        rules?: any;
        /**
        Determines if validation will be triggered when element loses focus. Default value is true.
        @member {boolean}
        */
        validateOnBlur?: boolean;
        /**
        Fired when validation completes.The event handler function context (available via the this keyword) will be set to the data source instance.
        */
        validate?(e: ValidatorValidateEvent): void;
    }

    interface ValidatorEvent {
        sender: Validator;
        isDefaultPrevented(): boolean;
        preventDefault: Function;
    }

    interface ValidatorValidateEvent extends ValidatorEvent {
    }


}

interface HTMLElement {
    kendoBindingTarget: kendo.data.Binding;
}

interface JQueryXHR {
}

interface JQueryEventObject {
}

interface JQueryPromise<T> {
}

interface JQuery {

    kendoDraggable(): JQuery;
    kendoDraggable(options: kendo.ui.DraggableOptions): JQuery;

    kendoDropTarget(): JQuery;
    kendoDropTarget(options: kendo.ui.DropTargetOptions): JQuery;

    kendoDropTargetArea(): JQuery;
    kendoDropTargetArea(options: kendo.ui.DropTargetAreaOptions): JQuery;

    data(key: any): any;

    kendoBarcode(): JQuery;
    kendoBarcode(options: kendo.dataviz.ui.BarcodeOptions): JQuery;
    data(key: "kendoBarcode") : kendo.dataviz.ui.Barcode;

    kendoChart(): JQuery;
    kendoChart(options: kendo.dataviz.ui.ChartOptions): JQuery;
    data(key: "kendoChart") : kendo.dataviz.ui.Chart;

    kendoDiagram(): JQuery;
    kendoDiagram(options: kendo.dataviz.ui.DiagramOptions): JQuery;
    data(key: "kendoDiagram") : kendo.dataviz.ui.Diagram;

    kendoLinearGauge(): JQuery;
    kendoLinearGauge(options: kendo.dataviz.ui.LinearGaugeOptions): JQuery;
    data(key: "kendoLinearGauge") : kendo.dataviz.ui.LinearGauge;

    kendoMap(): JQuery;
    kendoMap(options: kendo.dataviz.ui.MapOptions): JQuery;
    data(key: "kendoMap") : kendo.dataviz.ui.Map;

    kendoMobileActionSheet(): JQuery;
    kendoMobileActionSheet(options: kendo.mobile.ui.ActionSheetOptions): JQuery;
    data(key: "kendoMobileActionSheet") : kendo.mobile.ui.ActionSheet;

    kendoMobileBackButton(): JQuery;
    kendoMobileBackButton(options: kendo.mobile.ui.BackButtonOptions): JQuery;
    data(key: "kendoMobileBackButton") : kendo.mobile.ui.BackButton;

    kendoMobileButton(): JQuery;
    kendoMobileButton(options: kendo.mobile.ui.ButtonOptions): JQuery;
    data(key: "kendoMobileButton") : kendo.mobile.ui.Button;

    kendoMobileButtonGroup(): JQuery;
    kendoMobileButtonGroup(options: kendo.mobile.ui.ButtonGroupOptions): JQuery;
    data(key: "kendoMobileButtonGroup") : kendo.mobile.ui.ButtonGroup;

    kendoMobileDetailButton(): JQuery;
    kendoMobileDetailButton(options: kendo.mobile.ui.DetailButtonOptions): JQuery;
    data(key: "kendoMobileDetailButton") : kendo.mobile.ui.DetailButton;

    kendoMobileDrawer(): JQuery;
    kendoMobileDrawer(options: kendo.mobile.ui.DrawerOptions): JQuery;
    data(key: "kendoMobileDrawer") : kendo.mobile.ui.Drawer;

    kendoMobileLayout(): JQuery;
    kendoMobileLayout(options: kendo.mobile.ui.LayoutOptions): JQuery;
    data(key: "kendoMobileLayout") : kendo.mobile.ui.Layout;

    kendoMobileListView(): JQuery;
    kendoMobileListView(options: kendo.mobile.ui.ListViewOptions): JQuery;
    data(key: "kendoMobileListView") : kendo.mobile.ui.ListView;

    kendoMobileLoader(): JQuery;
    kendoMobileLoader(options: kendo.mobile.ui.LoaderOptions): JQuery;
    data(key: "kendoMobileLoader") : kendo.mobile.ui.Loader;

    kendoMobileModalView(): JQuery;
    kendoMobileModalView(options: kendo.mobile.ui.ModalViewOptions): JQuery;
    data(key: "kendoMobileModalView") : kendo.mobile.ui.ModalView;

    kendoMobileNavBar(): JQuery;
    kendoMobileNavBar(options: kendo.mobile.ui.NavBarOptions): JQuery;
    data(key: "kendoMobileNavBar") : kendo.mobile.ui.NavBar;

    kendoMobilePane(): JQuery;
    kendoMobilePane(options: kendo.mobile.ui.PaneOptions): JQuery;
    data(key: "kendoMobilePane") : kendo.mobile.ui.Pane;

    kendoMobilePopOver(): JQuery;
    kendoMobilePopOver(options: kendo.mobile.ui.PopOverOptions): JQuery;
    data(key: "kendoMobilePopOver") : kendo.mobile.ui.PopOver;

    kendoMobileScrollView(): JQuery;
    kendoMobileScrollView(options: kendo.mobile.ui.ScrollViewOptions): JQuery;
    data(key: "kendoMobileScrollView") : kendo.mobile.ui.ScrollView;

    kendoMobileScroller(): JQuery;
    kendoMobileScroller(options: kendo.mobile.ui.ScrollerOptions): JQuery;
    data(key: "kendoMobileScroller") : kendo.mobile.ui.Scroller;

    kendoMobileSplitView(): JQuery;
    kendoMobileSplitView(options: kendo.mobile.ui.SplitViewOptions): JQuery;
    data(key: "kendoMobileSplitView") : kendo.mobile.ui.SplitView;

    kendoMobileSwitch(): JQuery;
    kendoMobileSwitch(options: kendo.mobile.ui.SwitchOptions): JQuery;
    data(key: "kendoMobileSwitch") : kendo.mobile.ui.Switch;

    kendoMobileTabStrip(): JQuery;
    kendoMobileTabStrip(options: kendo.mobile.ui.TabStripOptions): JQuery;
    data(key: "kendoMobileTabStrip") : kendo.mobile.ui.TabStrip;

    kendoMobileView(): JQuery;
    kendoMobileView(options: kendo.mobile.ui.ViewOptions): JQuery;
    data(key: "kendoMobileView") : kendo.mobile.ui.View;

    kendoQRCode(): JQuery;
    kendoQRCode(options: kendo.dataviz.ui.QRCodeOptions): JQuery;
    data(key: "kendoQRCode") : kendo.dataviz.ui.QRCode;

    kendoRadialGauge(): JQuery;
    kendoRadialGauge(options: kendo.dataviz.ui.RadialGaugeOptions): JQuery;
    data(key: "kendoRadialGauge") : kendo.dataviz.ui.RadialGauge;

    kendoSparkline(): JQuery;
    kendoSparkline(options: kendo.dataviz.ui.SparklineOptions): JQuery;
    data(key: "kendoSparkline") : kendo.dataviz.ui.Sparkline;

    kendoStockChart(): JQuery;
    kendoStockChart(options: kendo.dataviz.ui.StockChartOptions): JQuery;
    data(key: "kendoStockChart") : kendo.dataviz.ui.StockChart;

    kendoTouch(): JQuery;
    kendoTouch(options: kendo.ui.TouchOptions): JQuery;
    data(key: "kendoTouch") : kendo.ui.Touch;

    kendoValidator(): JQuery;
    kendoValidator(options: kendo.ui.ValidatorOptions): JQuery;
    data(key: "kendoValidator") : kendo.ui.Validator;

}
