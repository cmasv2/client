define(['durandal/app', "knockout", "bootstrap","jquery", "viewmodels/component-1","viewmodels/component-2", "viewmodels/component-3", "viewmodels/component-4"],function (app, ko, bootstrap,$, Component1, Component2, Component3, Component4) {
    return function () {
        var me = this,
            apis = app.services.getService("apis"),
            buff = app.buff;
        me.comp1 = ko.observable();
        me.comp2 = ko.observable();
        me.comp2_1 = ko.observable();
        me.comp3 = ko.observable();
        me.comp4 = ko.observable();
        function getPr(val) {
            /*@@ TODO:unfinished */
            return Math.floor((Math.random() * 100));
        }
        me.compositionComplete = function () {
            setTimeout(function(){$('#initcmasld').hide(); },5000);
        };
        me.activate = function () {
            var up = buff.find(buff.getByKey("LocationAll"), "code", "DAR_UP");
            me.comp1(new Component1([{name: up?up[0].name:"NaN",icon: "fa fa-tasks",channels: buff.getByKey('DAR_UP'),warningSystem: buff.getByKey('WARNING_SYSTEM')}]));
            var up = buff.find(buff.getByKey("LocationAll"), "code", "DAR_RE");
            me.comp2(new Component2([{name:up?up[0].name:"NaN",icon: "fa fa-tasks",channels: buff.getByKey('DAR_RE')}]));
            var up = buff.find(buff.getByKey("LocationAll"), "code", "DAR_PI");
            me.comp2_1(new Component2([{name:up?up[0].name:"NaN",icon: "fa fa-archive",channels: buff.getByKey('DAR_PI')}]));
            me.comp3(new Component3([{progress: getPr(),channels: buff.getByKey('DAR_PW')}]));
            me.comp4(new Component4());
        };
    };
});