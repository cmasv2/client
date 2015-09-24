define(['durandal/app', "knockout", "bootstrap", "jquery", "viewmodels/component-1", "viewmodels/component-2", "viewmodels/component-3", "viewmodels/component-4"], function (app, ko, bootstrap, $, Component1, Component2, Component3, Component4) {
    return function () {
        var me = this,
            apis = app.services.getService("apis"),
            Soc = app.services.getService("socket"),
            buff = app.buff;
        me.comp1 = ko.observable();
        me.comp2 = ko.observable();
        me.comp2_1 = ko.observable();
        me.comp2_2 = ko.observable();
        me.comp3 = ko.observable();
        me.comp4 = ko.observable();
        var gt1 = [{"channelName": "CMAS_ENV_ServerTemp1"},{"channelName": "CMAS_ENV_ServerHum1"}];
        function Lis(c) {
            c.value = ko.observable('NaN');
            var cv = function (value) {
                if (value != undefined)
                    c.value(Math.round(value * 10) / 10);
            }
            if (Soc.connected())
                if (c.channelName != 'xxx')
                    Soc.Lis(c.channelName, cv);
        }
        function getPr(val) {
            /*@@ TODO:unfinished */
            return Math.floor((Math.random() * 100));
        }
        function inf(c) {
            return buff.find(buff.getByKey('ChannelsAll'), 'code', c);
        }
        me.compositionComplete = function () {
            setTimeout(function () {
                $('#initcmasld').hide();
            }, 2000);
        };
        me.activate = function () {
            var info = inf(gt1[0].channelName);
            gt1[0].unit = info ? info[0].unit : " ";
            Lis(gt1[0]);
            var info = inf(gt1[1].channelName);
            gt1[1].unit = info ? info[0].unit : " ";
            Lis(gt1[1]);
            $('#detailoading').append("<p>Go to dashboard </p>");
            var up = buff.find(buff.getByKey("LocationAll"), "code", "ITW_UP");
            me.comp1(new Component2([{
                name: up ? up[0].name : "NaN",
                "url": "detail",
                "code": "ITW_UP",
                icon: "fa fa-tasks",
                channels: buff.getByKey('ITW_UP')
            }]));
            var up = buff.find(buff.getByKey("LocationAll"), "code", "ITW_FF");
            me.comp2(new Component2([{
                name: up ? up[0].name : "NaN",
                "url": "detail",
                "code": "ITW_FF",
                icon: "fa fa-tasks",
                channels: buff.getByKey('ITW_FF')
            }]));
            var up = buff.find(buff.getByKey("LocationAll"), "code", "ITW_AI");
            me.comp2_1(new Component2([{
                name: up ? up[0].name : "NaN",
                "url": "detail",
                "code": "ITW_AI",
                icon: "fa fa-tasks",
                channels: buff.getByKey('ITW_AI')
            }]));
            var up = buff.find(buff.getByKey("LocationAll"), "code", "ITW_EV");
            me.comp2_2(new Component2([{
                name: up ? up[0].name : "NaN",
                "url": "detail",
                "code": "ITW_EV",
                icon: "fa fa-tasks",
                channels: buff.getByKey('ITW_EV')
            }]));
            var up = buff.find(buff.getByKey("LocationAll"), "code", "ITW_PW");
            me.comp3(new Component2([{
                name: up ? up[0].name : "NaN",
                "url": "detail",
                "code": "ITW_PW",
                icon: "fa fa-tasks",
                channels: buff.getByKey('ITW_PW')
            }]));
            me.comp4(new Component4(1));
        };
        me.gt1 = ko.observableArray(gt1);
    };
});