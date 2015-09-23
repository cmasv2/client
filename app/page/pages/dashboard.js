/**
 Create by Huy: codocmm@gmail.com ~ nqhuy2k6@gmail.com
 07/31/2015
 */
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
        var gt1 = [{"channelName": "ENV_ServerTemp1"},{"channelName": "ENV_ServerHum1"}];
        var ACSystem = [{"channelName": "AC_ServerCtrl1","type":"1","_1":"<span class=\'text-success\'><i class=\'fa fa-spinner fa-spin\'></i> Running</span>","_0":"<span class=\'text-danger\'><i class=\'fa fa-stop\'></i> Stop</span>"},{"channelName": "AC_ServerCtrl2","type":"1","_1":"<span class=\'text-success\'><i class=\'fa fa-spinner fa-spin\'></i> Running</span>","_0":"<span class=\'text-danger\'><i class=\'fa fa-stop\'></i> Stop</span>"},{"channelName": "AC_ServerCtrl3","type":"1","_1":"<span class=\'text-success\'><i class=\'fa fa-spinner fa-spin\'></i> Running</span>","_0":"<span class=\'text-danger\'><i class=\'fa fa-stop\'></i> Stop</span>"}];
        function Lis(c) {
            if(c.type == 5){
                c.value = ko.observable('NaN');
                Q.when(apis.ChannelDataByCode(c.channelName)).then(function(r){
                    c.value(r?r.value:0);
                    c.id = r? r.id:0;
                });
            }
            else
            {
                c.value = ko.observable('NaN');
                var cv = function (value) {
                    if (c.type != undefined) {
                        if (c.type == "1") {
                            c.value(c["_" + (Math.round(value * 10) / 10)]);
                        }
                        else if (c.type == "4") {
                            var t = value % 3600;
                            var h = (value - t) / 3600;
                            var m = (t - (t % 60))/ 60;
                            c.value(Math.round(h) + ":" + Math.round(m));
                        }
                        else if (c.type == "6") {
                            c.value(c["_" + (Math.round(value * 10) / 10)]);
                        }
                        else{
                            c.type = 0;
                            c.value(Math.round(value * 10) / 10);
                        }
                    }
                    else{
                        c.type = 0;
                        c.value(Math.round(value * 10) / 10);
                    }
                }
                if (Soc.connected())
                    if (c.channelName != 'xxx')
                        Soc.Lis(c.channelName, cv);
            }
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
            var info = inf(ACSystem[0].channelName);
            ACSystem[0].unit = info ? info[0].unit : " ";
            Lis(ACSystem[0]);
            var info = inf(ACSystem[1].channelName);
            ACSystem[1].unit = info ? info[0].unit : " ";
            Lis(ACSystem[1]);
            var info = inf(ACSystem[2].channelName);
            ACSystem[2].unit = info ? info[0].unit : " ";
            Lis(ACSystem[2]);
            $('#detailoading').append("<p>Go to dashboard </p>");
            var up = buff.find(buff.getByKey("LocationAll"), "code", "CMAS_UP");
            me.comp1(new Component2([{
                name: up ? up[0].name : "NaN",
                "url": "detail",
                "code": "CMAS_UP",
                icon: "fa fa-tasks",
                channels: buff.getByKey('CMAS_UP')
            }]));
            var up = buff.find(buff.getByKey("LocationAll"), "code", "CMAS_FF");
            me.comp2(new Component2([{
                name: up ? up[0].name : "NaN",
                "url": "detail",
                "code": "CMAS_FF",
                icon: "fa fa-tasks",
                channels: buff.getByKey('CMAS_FF')
            }]));
            var up = buff.find(buff.getByKey("LocationAll"), "code", "CMAS_AI");
            me.comp2_1(new Component2([{
                name: up ? up[0].name : "NaN",
                "url": "detail",
                "code": "CMAS_AI",
                icon: "fa fa-tasks",
                channels: buff.getByKey('CMAS_AI')
            }]));
            var up = buff.find(buff.getByKey("LocationAll"), "code", "CMAS_EV");
            me.comp2_2(new Component2([{
                name: up ? up[0].name : "NaN",
                "url": "detail",
                "code": "CMAS_EV",
                icon: "fa fa-tasks",
                channels: buff.getByKey('CMAS_EV')
            }]));
            var up = buff.find(buff.getByKey("LocationAll"), "code", "CMAS_PW");
            me.comp3(new Component2([{
                name: up ? up[0].name : "NaN",
                "url": "detail",
                "code": "CMAS_PW",
                icon: "fa fa-tasks",
                channels: buff.getByKey('CMAS_PW')
            }]));
            me.comp4(new Component4(1));
        };
        me.gt1 = ko.observableArray(gt1);
        me.ACSystem = ko.observableArray(ACSystem);
    };
});