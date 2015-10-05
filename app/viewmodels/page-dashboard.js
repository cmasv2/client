define(['durandal/app', "knockout", "bootstrap", "./../data/data-map", "viewmodels/component-1", "viewmodels/component-2", "viewmodels/component-3", "viewmodels/component-4"],
function (app, ko, bootstrap, dataMap, Component1, Component2, Component3, Component4) {
    return function () {
        
        var me = this;
        var datamap = dataMap();
        var dashboardViewModel = this;
        dashboardViewModel.compoment1 = ko.observable();
        dashboardViewModel.compoment2 = ko.observable();
        dashboardViewModel.compoment2_1 = ko.observable();
        dashboardViewModel.compoment3 = ko.observable();
        dashboardViewModel.compoment4 = ko.observable();
        function random(val) {
            return Math.floor((Math.random() * val));
        }
        dashboardViewModel.activate = function () {
            var config = [
                {
                    name: "UPS",
                    icon: "fa fa-tasks",
                    channels: datamap.getByKey('UPS_SYSTEM'),
                    warningSystem: datamap.getByKey('WARNING_SYSTEM'),
                    
                }];
            me.compoment1(new Component1(config));
            var config = [
                {
                    name: "Rectifier",
                    icon: "fa fa-tasks",
                    channels: datamap.getByKey('REC_SYSTEM')
                }];
            //
            me.compoment2(new Component2(config));
            var config = [
                {
                    name: "DHCX",
                    icon: "fa fa-archive",
                    channels: datamap.getByKey('DHCX_SYSTEM')
                }];
            me.compoment2_1(new Component2(config));
            var config = [
                {
                    name: "name",
                    progress: random(100),
                    channels: datamap.getByKey('PW_SYSTEM')
                }];
            
            me.compoment3(new Component3(config));
            var Alarms = [];
            me.compoment4(new Component4(Alarms));
        };
    };
}
);

