define(['durandal/app', 'plugins/router', "knockout", "./../bindings/status-binding"],function (app, router, ko) {
    return function (cf) {
        var me = this,buff = app.buff;
        var Soc = app.services.getService("socket");
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
        function binds(s) {
            var _s = s;
            s = ko.observable(_s);
        }
        function inf(c){
            return buff.find(buff.getByKey('ChannelsAll'), 'code', c);
        }
        for (var i = 0; i < cf[0].channels.length; i++) {
            var it = cf[0].channels[i];
            binds(it.status);
            var u = buff.find(buff.getByKey("LocationAll"), "code", it.code);
            it.name = u?u[0].name:"NaN";
            if (it["value1"] != undefined){
                var info = inf(it["value1"].channelName);
                it["value1"].unit = info?info[0].unit:"NaN";
                Lis(it["value1"]);
            }
            if (it["value2"] != undefined){
                var info = inf(it["value2"].channelName);
                it["value2"].unit = info?info[0].unit:"NaN";
                Lis(it["value2"]);
            }
            else
                it["value2"] = 0;
        }
        me.viewdetail = function (c) {router.navigate("page/" + c.url + "/" + c.code);};
        me.cf = ko.observableArray(cf);
    };
}
);
