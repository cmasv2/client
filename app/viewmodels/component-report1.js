define(['durandal/app', "knockout","knockback", 'plugins/router',"../models/report","../bindings/datetime.picker", "bootstrap-datepicker",],
    function (app, ko,kb, router,Report) {
    return function () {
        var me = this;
        var report = new Report({
        	            fromTime: moment().subtract(1, "day").format(app.CMASConfig.DateTimeFormat.GLOBAL),
        	            toTime: moment().format(app.CMASConfig.DateTimeFormat.GLOBAL),
        	            object: "PM-710",
        	            unit:"Tủ ABC"
        	        });
        function dateRangeUpdated() {
            initdata();
        }
        function radom(val){
            return Math.floor((Math.random() * val) + 1);
        }
        function initdata(){
            me.frequency(radom(100));
            me.kWh(radom(100));
            me.kVARh(radom(100));
            me.kVAh(radom(100));
            me.OperatingTime(radom(100));
            me.Currentl1(radom(100));
            me.Currentl2(radom(100));
            me.Currentl3(radom(100));
            me.Voltage12(radom(100));
            me.Voltage23(radom(100));
            me.Voltage31(radom(100));
        }
        me.fromTime = kb.observable(report, "fromTime");
        me.object = kb.observable(report, "object");
        me.unit = kb.observable(report, "unit");
        me.frequency = ko.observable();
        me.kWh =  ko.observable();
        me.kVARh =  ko.observable();
        me.kVAh =  ko.observable();
        me.OperatingTime = ko.observable();
        me.Currentl1 = ko.observable();
        me.Currentl2 = ko.observable();
        me.Currentl3 = ko.observable();
        me.Voltage12 = ko.observable();
        me.Voltage23 = ko.observable();
        me.Voltage31 = ko.observable();
        me.fromTime.subscribe(dateRangeUpdated);
        me.toTime = kb.observable(report, "toTime");
        me.toTime.subscribe(dateRangeUpdated);
        initdata();
    };
}
);
