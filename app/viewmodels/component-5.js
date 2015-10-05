/**
 Create by Huy: codocmm@gmail.com ~ nqhuy2k6@gmail.com
 07/31/2015
 */
define(['durandal/app', "knockout", "moment",'q', "./../bindings/status-binding", "css!../../lib/jstree/dist/themes/default/style.min.css", "css!../../lib/nqhlib/css/switch_ac.css"], function (app, ko, Moment,Q) {
        return function (cf,id,idc) {
            var me = this, apis = app.services.getService("apis"), buff = app.buff;
            var Soc = app.services.getService("socket");
            var channels = buff.find(infid(cf[0].id), "controllable",false);
            me.EscalationProfiles = ko.observableArray(buff.getByKey('opEscalationProfiles'));
            me.alarmWatcher = ko.observableArray([]);
            me.channelSelect = ko.observableArray([]);
            me.idc =  ko.observable(idc != undefined?idc:0);
            var controls = [];//buff.find(infid(cf[0].id), "controllable",true);

            function getBuffer(key) {
                if (!bufferApp) {
                    return false;
                }
                else {
                    return bufferApp.getByKey(key);
                }
            }

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
                                var s = (t - (t % 60))% 60;
                                c.value(Math.round(h) + ":" + Math.round(m)+":" + Math.round(s));
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

            function binds(s) {
                var _s = s;
                s = ko.observable(_s);
            }

            function infid(i) {
                return buff.find(buff.getByKey('ChannelsAll'), 'unitID', i);
            }
            function inf(c) {
                return buff.find(buff.getByKey('ChannelsAll'), 'code', c);
            }
            function infidc(id) {
                return buff.find(buff.getByKey('ChannelsAll'), 'id', id);
            }
            function infa(id) {
                return buff.find(buff.getByKey('AlarmWatchersAll'), 'channelID', id);
            }
            function channelSelectf(cc,flag) {
                me.channelSelect.removeAll();
                cc.data = {channelName: cc.code, value: 0};
                Lis(cc.data);
                flag ? false : cc.alarmWatcher = 0;
                cc.alarmWatchers = infa(cc.id);
                me.channelSelect.push(cc);
            }
            function viewdetail(c) {
                if (c != undefined){
                    channelSelectf(c,0);
                    me.idc(c.code);
                }
            }
            me.cancelAlarm = function (c) {
                channelSelectf(c,0);
            }
            me.EditAlarm = function(c){
                if(!c.msg){
                    c.msg = {"alarm":"Alarm !","reset":"Reset !"};
                }
                if(!c.notificationMethod.notifyWhen)
                    c.notificationMethod.notifyWhen = "alarm";// "notificationMethod": {"sms": 0, "email": 0,"notifyWhen": "alarm"}
                Q.when(infidc(c.channelID)).then(function(channel) {
                    channel[0].alarmWatcher = c;
                    channel[0].value = 0;
                    channel[0].min = 0;
                    channel[0].max = 1000;
                    channelSelectf(channel[0], 1);
                });

            }
            function escalationProfileID(a){
                var type = channel.alarmWatcher.type;
                console.log(type);
                var temp = buff.find(buff.getByKey('EscalationProfiles'), 'displayName', type);
                console.log(temp);
                channel.alarmWatcher.escalationProfileID = temp[0].id;
            }
            function saveAlarm(c) {
                var type = c.alarmWatcher.type;
                var temp = buff.find(buff.getByKey('EscalationProfiles'), 'displayName', type);
                c.alarmWatcher.escalationProfileID = temp[0].id;
                if (c.alarmWatcher.id != undefined) {
                    apis.updateAlarm(c.alarmWatcher, c.alarmWatcher.id).then(function (response) {
                        app.showMessage('Save successful ', 'Successful', ['Yes']);
                        var data = me.channels().slice(0);
                        me.channels.removeAll();
                        me.channels(data);
                        apis.AlarmWatchers().then(function(ch){
                            app.buff.setByKey('AlarmWatchersAll', ch);
                            Q.when(setalarmWatcher(data[0].sub)).then(function(){
                                channelSelectf(c,0);
                            });
                        });
                    }, function (e) {
                        app.showMessage('Save failed <br/>' + e.responseText, 'Error', ['Yes']);
                    });
                } else {
                    apis.saveAlarm(c.alarmWatcher).then(function (r) {
                        app.showMessage('Save successful ', 'Successful', ['Yes']);
                        r.alarmAt = r.resetAt = r.acknowledgeAt = 0;
                        var data = me.channels().slice(0);
                        me.channels.removeAll();
                        me.channels(data);
                        apis.AlarmWatchers().then(function(ch){
                            app.buff.setByKey('AlarmWatchersAll', ch);
                            Q.when(setalarmWatcher(data[0].sub)).then(function(){
                                channelSelectf(c,0);
                            });
                        });
                    }, function (e) {
                        app.showMessage('Save failed <br/>' + e.responseText, 'Error', ['Yes']);
                    });
                }
            }

            function saveControl(channel) {
                var c = buff.find(buff.getByKey('ChannelsAll'), 'code',channel.value.channelName);
                if (confirm("Are you sure?")) {
                    if (c[0].type = 'Digital') {
                        c[0].value = channel.value.value() ? 0 : 1;
                    }
                    apis.saveControl(c[0]).then(function (response) {
                        app.showMessage('Save successful ', 'Successful', ['Yes']);
                    }, function (e) {
                        app.showMessage('Save failed <br/>' + e.responseText, 'Error', ['Yes']);
                    });
                }
            }

            function Checkalarm(c) {
                return apis.checkalarm(c.id);
            }

            function viewdocument(document) {
                if (document.id) {
                    me.document.removeAll();
                    me.document.push(document);
                }
            }

            function pusha(a) {
                if (a != undefined) {
                    if (a.enable == "1" || a.enable == true) {
                        me.alarmWatcher.push(a);
                    }
                }
            }

            function setalarmWatcher(c) {
                me.alarmWatcher.removeAll();
                for (var i = 0; i < c.length; i++) {
                    var kq = infa(c[i].id);
                    if(kq != false){
                        for(var j = 0 ; j < kq.length ; j++){
                            pusha(kq[j]);
                        }
                    }
                    //if(c[i].alarmWatcher != undefined && c[i].alarmWatcher.id)
                    //pusha(c[i].alarmWatcher);
                }
            }
            function channelSelectid(c){
                channelSelectf(buff.find(buff.getByKey('ChannelsAll'), 'id', c.channelID)[0],0)
            }
            me.getselect = function(){
                return me.idc;
            }

            me.channelSelectId = channelSelectid;
            me.channelname = function (c,msg) {
                var a = buff.find(buff.getByKey('ChannelsAll'), 'id', c);
                if(a[0].name != undefined ){
                    var up = buff.find(buff.getByKey("LocationAll"), "id", a[0].unitID);
                    if(up[0].name){
                        var up1 = buff.find(buff.getByKey("LocationAll"), "id", up[0].parentID);
                        return "<a href='#page/detail/" + up1[0].code + "/" + up[0].code + "/" + a[0].code + "' title='" + up[0].name + "' alt='" + up[0].name + "' >" + msg.alarm + "</a>";
                    }
                    return a[0].name
                }
                else
                    return "NaN";
            };
            me.AlarmAck = function(c){
                console.log(c);
            };
            me.colorAlarm = function (c) {
                /*
                 'inactive','active','acknowledge','reset'
                 */
                switch (c.status) {
                    case "active":
                    case "reset":
                        switch (c.type) {
                            case "Critical":
                                return "AlarmRedBink";
                                break;
                            case "Warning":
                                return "AlarmYellowBink";
                                break;
                            case "Advisory":
                                return "AlarmBrownBink";
                                break;
                            default:
                                return "AlarmBlueBink";
                                break;
                        }
                        break;
                    case "acknowledge":
                        switch (c.type){
                            case "Critical":
                                return "AlarmRed";
                                break;
                            case "Warning":
                                return "AlarmYellow";
                                break;
                            case "Advisory":
                                return "AlarmBrown";
                                break;
                            default:
                                return "AlarmBlue";
                                break;
                        }
                        break;
                    default:
                        return "Coldefault";
                }
            }
            me.activate = function () {
                if (cf[0].Parameters != undefined) {
                    for (i = 0; i < cf[0].Parameters.length; i++) {
                        for (j = 0; j < cf[0].Parameters[i].data.length; j++) {
                            for (h = 0; h < cf[0].Parameters[i].data[j].values.length; h++) {
                                Lis(cf[0].Parameters[i].data[j].values[h]);
                            }
                        }
                        for (j = 0; j < cf[0].Parameters[i].values.length; j++) {
                            var info = inf(cf[0].Parameters[i].values[j].channelName);
                            cf[0].Parameters[i].values[j].unit = info ? info.unit : " ";
                            Lis(cf[0].Parameters[i].values[j]);
                        }
                    }
                } else {
                    cf[0].Parameters = 0;
                }
                if (cf[0].status) {
                    for (var i = 0; i < cf[0].status.length; i++) {
                        if (cf[0].status[i].datas != undefined) {
                            for (var j = 0; j < cf[0].status[i].datas.length; j++) {
                                cf[0].status[i].datas[j].icon = cf[0].status[i].datas[j].icon ? cf[0].status[i].datas[j].icon : 0;
                                if (cf[0].status[i].datas[j].status) {
                                    var info = inf(cf[0].status[i].datas[j].status.channelName);
                                    cf[0].status[i].datas[j].name = info ? info[0].name : "NaN";
                                    Lis(cf[0].status[i].datas[j].status);
                                }
                                if (cf[0].status[i].datas[j].value) {
                                    var info = inf(cf[0].status[i].datas[j].value.channelName);
                                    cf[0].status[i].datas[j].name = info ? info[0].name : "NaN";
                                    cf[0].status[i].datas[j].unit = info ? info[0].unit : " ";
                                    Lis(cf[0].status[i].datas[j].value);
                                }
                            }
                        }
                        else
                            cf[0].status[i].datas = 0;
                        if (cf[0].status[i].Parameters != undefined) {
                            for (var k = 0; k < cf[0].status[i].Parameters.length; k++) {
                                for (var j = 0; j < cf[0].status[i].Parameters[k].data.length; j++) {
                                    for (h = 0; h < cf[0].status[i].Parameters[k].data[j].values.length; h++) {
                                        Lis(cf[0].status[i].Parameters[k].data[j].values[h]);
                                    }
                                }
                                for (var j = 0; j < cf[0].status[i].Parameters[k].values.length; j++) {
                                    var info = inf(cf[0].status[i].Parameters[k].values[j].channelName);
                                    cf[0].status[i].Parameters[k].values[j].unit = info ? info.unit : " ";
                                    Lis(cf[0].status[i].Parameters[k].values[j]);
                                }
                            }
                        }
                        else
                            cf[0].status[i].Parameters = 0;
                    }
                } else {
                    cf[0].status = 0;
                }

                if (cf[0].Battery != undefined) {
                    if (cf[0].Battery.values != undefined) {
                        for (i = 0; i < cf[0].Battery.values.length; i++) {
                            var info = inf(cf[0].Battery.values[i].channelName);
                            cf[0].Battery.values[i].unit = info ? info[0].unit : " ";
                            Lis(cf[0].Battery.values[i]);
                        }
                    }
                } else {
                    cf[0].Battery = 0;
                }
                cf[0].channelsdetail = {
                    name: ""
                };
                for (var i = 0; i < controls.length; i++) {
                    controls[i].value = 0;
                    controls[i].min = 0;
                    controls[i].max = 100;
                    controls[i].data = {channelName: controls[i].code, value: 0};
                    Lis(controls[i].data);
                }
                if (channels.length) {
                    if(me.idc()){
                        var up = buff.find(buff.getByKey('ChannelsAll'), 'code', idc);
                        channelSelectf(up[0],0) ;
                    }
                    else
                    {
                        channelSelectf(channels[0],0);
                    }
                    setalarmWatcher(channels);
                }
            }
            var up = buff.find(buff.getByKey('DOCUMENT_ALL'), 'code', id);
            var documents = up ? up[0]._ : 0;
            var document = [];
            if(documents) document.push(documents[0].sub[0]);
            me.document = ko.observableArray(document);
            me.Moment = Moment;
            me.saveControl = saveControl;
            me.saveAlarm = saveAlarm;
            me.viewdocument = viewdocument;
            me.viewdetail = viewdetail;
            me.checkalarm = Checkalarm;
            me.documents = ko.observableArray(documents);
            me.controls = ko.observableArray(controls);
            me.channels = ko.observableArray([{name: "channels", id: 0, sub: channels}]);
            me.cf = ko.observableArray(cf);
            me.colmd = function(){
                return cf[0].status.length > 1 ? 'col-md-6':'col-md-12';
            };
            me.alarmicon = function (c) {
                if(c.id != undefined && c.id){
                    if(buff.find(infa(c.id),"enable",true))
                        return 'fa-bullhorn';
                }
                return "fa-check-square-o";
            };
            me.ValueControl = function(c){
                if(confirm("Are you sure?")) {
                    var a = (c.value.value()*1) ? 0 : 1;
                    c.value.value(a);
                    apis.saveControl(c.value).then(function (response) {
                        //app.showMessage('Save successful ', 'Successful', ['Yes']);
                    }, function (e) {
                        app.showMessage('Save failed <br/>' + e.responseText, 'Error', ['Yes']);
                    });
                }
            }
            me.addAlarm = function(c){
                //console.log(c);
                c.value = 0;
                c.min = 0;
                c.max = 1000;
                c.alarmWatcher = {
                    'enable': false,
                    'channelID': c.id,
                    'type': 'critical',
                    'alarmCondition': 'greaterthan',
                    'alarmThreshold': 0,
                    'resetCondition': 'lessthan',
                    'resetThreshold': 0,
                    "notificationMethod": {"sms": 0, "email": 0,"notifyWhen": "alarm"},
                    "msg":{"alarm":"Alarm !","reset":"Reset !"}
                };
                channelSelectf(c,1);
            }
            app.on('update-alarm', function (data) {
                apis.AlarmWatchers().then(function(ch){
                    app.buff.setByKey('AlarmWatchersAll', ch);
                    //setalarmWatcher(me.channels().sub);
                });
            });
        };
    }
);