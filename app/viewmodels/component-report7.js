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
            me.Currentl1(radom(100));
        }
        me.fromTime = kb.observable(report, "fromTime");
        me.object = kb.observable(report, "object");
        me.unit = kb.observable(report, "unit");
        me.frequency = ko.observable();
        me.Currentl1 = ko.observable();
        me.fromTime.subscribe(dateRangeUpdated);
        me.toTime = kb.observable(report, "toTime");
        me.toTime.subscribe(dateRangeUpdated);
        initdata();
    };
}
);
