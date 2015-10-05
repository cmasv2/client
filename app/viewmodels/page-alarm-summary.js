define(['durandal/app', "knockout", "bootstrap","viewmodels/component-4"],
    function (app, ko,bootstrap,Component4) {
        return function () {
            var me = this;
            var dashboardViewModel = this;
            dashboardViewModel.compoment4 = ko.observable();
            dashboardViewModel.activate = function () {
            	var Alarms = [];
                me.compoment4(new Component4(Alarms));
                
            };

        };
    }
);

