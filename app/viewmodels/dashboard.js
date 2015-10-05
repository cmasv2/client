define(['durandal/app', "knockout", "viewmodels/component-1","viewmodels/component-2"],
    function (app, ko, Component1, Component2) {
        return function () {
            var me = this;
            var dashboardViewModel = this;

            dashboardViewModel.compoment1 = ko.observable();
            dashboardViewModel.compoment2 = ko.observable();

            dashboardViewModel.activate = function () {
                me.compoment1(new Component1());
                me.compoment2(new Component2());
            };

        };
    }
);

