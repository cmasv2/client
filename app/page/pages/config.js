define(['durandal/app', "knockout", "bootstrap","viewmodels/component-user","viewmodels/component-alarm"],
    function (app, ko,bootstrap,componentUser,componentAlarm) {
        return function () {
            var me = this;
            var ConfigViewModel = this;
            ConfigViewModel.compoment1 = ko.observable();
            ConfigViewModel.activate = function () {
                me.user();
            };
            me.user = function (){ me.compoment1(new componentUser());};
            me.Alarm = function (){ me.compoment1(new componentAlarm());};
        };
    }
);