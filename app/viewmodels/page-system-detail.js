define(['durandal/app', "knockout", "bootstrap", "./../data/data-map", "viewmodels/component-2",
    "viewmodels/component-5", "viewmodels/component-4", "viewmodels/component-detail-system"],
    function (app, ko, bootstrap, dataMap, Component2, Component5, Component4, ComponentDetailSystem) {
    return function () {
        var me = this;
        var dashboardViewModel = this;
        var datamap = dataMap();
        dashboardViewModel.compoment1 = ko.observable();
        dashboardViewModel.compoment2 = ko.observable();
        dashboardViewModel.compoment3 = ko.observable();
        function random(val) {
            return Math.floor((Math.random() * val));
        }
        dashboardViewModel.activate = function (sys, id) {
            var config = [
                {
                    name: "",
                    id: "",
                    icon: "fa fa-tasks",
                    channels: datamap.getByKey(sys)
                }];
            //
            me.compoment1(new Component2(config));
            if (id != undefined)
                me.compoment2(new Component5(datamap.getByKey(id)));
            else
                me.compoment2(new ComponentDetailSystem(datamap.getByKey(sys + "_DETAIL")));
            var Alarms = [];
            me.compoment3(new Component4(Alarms));
                
        };

    };
}
);

