define(['durandal/app', "knockout", "bootstrap", "./../data/data-map", "viewmodels/component-detail-system", "viewmodels/component-4"],
    function (app, ko, bootstrap, dataMap, ComponentDetailSystem, Component4) {
    return function () {
        var me = this;
        var dashboardViewModel = this;
        var datamap = dataMap();
        dashboardViewModel.compoment1 = ko.observable();
        dashboardViewModel.compoment2 = ko.observable();
        dashboardViewModel.activate = function (sys) {
            me.compoment1(new ComponentDetailSystem(datamap.getByKey(sys + "_DETAIL")));
            var Alarms = [];
            me.compoment2(new Component4(Alarms));
                
        };

    };
}
);

