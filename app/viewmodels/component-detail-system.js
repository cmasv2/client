define(['durandal/app', "knockout",'plugins/router', "./../bindings/status-binding"],
    function (app, ko,router) {
        return function (config) {
            var dataComponent = config;
            var Soc = app.services.getService("socket");
            var buff = app.buff;
            var me = this;
            function Lis(c) {
                c.value = ko.observable('NaN');
                var cv = function (value) {
                    if (value != undefined){
                        if(value == 0){
                            c.value("<img src='images/icon/off.png' style='height: 56px'/>");
                        }
                        else if(value == 1){
                            c.value("<img src='images/icon/on.png' style='height: 56px'/>");
                        }
                        else{
                            c.value(c.caption + (Math.round(value * 10) / 10) + " V");
                        }
                    }
                }
                if (Soc.connected())
                    if (c.channelName != 'xxx')
                        Soc.Lis(c.channelName, cv);
            }
            me.activate = function () {
                if(config[0]['unit'] != undefined) {
                    for (var i = 0; i < config[0]['unit'].length; i++) {
                        var up = buff.find(buff.getByKey("LocationAll"), "code", config[0]["unit"][i].code);
                        config[0]["unit"][i].name = up ? up[0].name : "NaN";
                    }
                }
                else{
                    config[0]['unit'] = 0;
                }
                if(config[0]['divs'] != undefined) {
                    for(var i = 0 ; i < config[0]['divs'].length ; i++ ){
                        Lis(config[0]['divs'][i]);
                    }
                }
                else{
                    config[0]['divs'] = 0;
                }
            };
            me.viewdetail = function (c) {
                router.navigate("page/" + c.url);
            };
            me.dataComponent = ko.observableArray(dataComponent);
        };
    }
);
