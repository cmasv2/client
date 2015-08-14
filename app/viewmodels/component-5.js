define(['durandal/app', "knockout", "bootstrap-switch", "./../bindings/bootstrapSwitch","./../bindings/status-binding","css!../../lib/jstree/dist/themes/default/style.min.css","css!../../lib/bootstrap-switch/dist/css/bootstrap3/bootstrap-switch.min.css","./../bindings/status-binding"],function (app, ko) {
    return function (cf) {
		
        var me = this,apis = app.services.getService("apis"),buff = app.buff;
        var Soc = app.services.getService("socket");
        var channels = [{name: "channels",id: 0,sub: infid(cf[0].id)}];
        me.channelSelect = [];
        me.controls = [];
		
		/*
		//status-binding start
		var dataComponent = cf;
		function LisS(c) {
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
                        c.value((Math.round(value * 10) / 10) + " V");
                    }
                }
            }
            if (Soc.connected())
                if (c.channelName != 'xxx')
                    Soc.LisS(c.channelName, cv);
        }
		for(var i = 0 ; i < cf[0]['divs'].length ; i++ ){
            LisS(cf[0]['divs'][i]);
        }
		
		me.dataComponent = ko.observableArray(dataComponent);
		//status-binding end
		*/
		
        function getBuffer(key) {
            if (!bufferApp) {
                return false;
            }
            else {
                return bufferApp.getByKey(key);
            }
        }
        function Lis(c) {
            c.value = ko.observable('NaN');
            var cv = function (value) {
                //if (value != undefined)
                //    c.value(Math.round(value * 10) / 10);
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
		//
		for(var i = 0 ; i < cf[0]['divs'].length ; i++ ){
            Lis(cf[0]['divs'][i]);
        }
		//
        function binds(s) {
            var _s = s;
            s = ko.observable(_s);
        }
        function infid(i){
            return buff.find(buff.getByKey('ChannelsAll'), 'unitID', i);
        }
        function inf(c){
            return buff.find(buff.getByKey('ChannelsAll'), 'code', c);
        }
        if (cf[0].Parameters != undefined) {
            for (i = 0; i < cf[0].Parameters.length; i++) {
                for (j = 0; j < cf[0].Parameters[i].data.length; j++) {
                    for(h = 0;h< cf[0].Parameters[i].data[j].values.length;h++)
                    {
                        Lis(cf[0].Parameters[i].data[j].values[h]);
                    }
                }
                for (j = 0; j < cf[0].Parameters[i].values.length; j++) {
                    var info = inf(cf[0].Parameters[i].values[j].channelName);
                    cf[0].Parameters[i].values[j].unit = info?info.unit:"NaN";
                    Lis(cf[0].Parameters[i].values[j]);
                }
            }
        } else {
            cf[0].Parameters = 0;
        }
        if (cf[0].status) {
            for (i = 0; i < cf[0].status.length; i++) {
                if (cf[0].status[i].datas != undefined) {
                    for (j = 0; j < cf[0].status[i].datas.length; j++) {
                        cf[0].status[i].datas[j].icon = cf[0].status[i].datas[j].icon?cf[0].status[i].datas[j].icon:0;
                        if(cf[0].status[i].datas[j].status){
                            var info = inf(cf[0].status[i].datas[j].status.channelName);
                            cf[0].status[i].datas[j].name = info?info[0].name:"NaN";
                            Lis(cf[0].status[i].datas[j].status);
                        }
                        if(cf[0].status[i].datas[j].value){
                            var info = inf(cf[0].status[i].datas[j].value.channelName);
                            cf[0].status[i].datas[j].name = info?info[0].name:"NaN";
                            cf[0].status[i].datas[j].unit = info?info[0].unit:" ";
                            Lis(cf[0].status[i].datas[j].value);
                        }
                    }
                }
            }
        } else {
            cf[0].Parameter = 0;
        }

        if (cf[0].Battery != undefined) {
            if (cf[0].Battery.values != undefined) {
                for (i = 0; i < cf[0].Battery.values.length; i++) {
                    var info = inf(cf[0].Battery.values[i].channelName);
                    cf[0].Battery.values[i].unit = info?info[0].unit:"NaN";
                    Lis(cf[0].Battery.values[i]);
                }
            }
        } else {
            cf[0].Battery = 0;
        }
        cf[0].channelsdetail = {
            name: ""
        };
        for(var i=0;i<channels[0].sub.length;i++){
            var temp = channels[0].sub[i];
            if(temp.controllable){
                temp.value = 0;
                temp.min = 0;
                temp.max = 100;
                temp.data = {channelName: temp.code, value: 0 };
                Lis(temp.data);
                me.controls.push(temp);
            }
        }
        function channelSelect(channel) {
            if(typeof(channel) != "object") return;
            me.channelSelect.removeAll();
            channel.data = { channelName: channel.code, value: 0 };
            Lis(channel.data);
            channel.value = 0;
            channel.min = 0;
            channel.max = 100;
            if(channel.alarmWatcher == undefined){
                channel.alarmWatcher = {'enable':true,'status':'','channelID': channel.id,'type':'critical','alarmCondition':'greaterthan','alarmThreshold':0,'resetCondition':'lessthan','resetThreshold':0,"notificationMethod":{"sms":0,"email":0}};
            }
            me.channelSelect.push(channel);
        }
        function viewdetail(channel){
            if(channel.id)
                channelSelect(channel);
        }
        function cancelAlarm(channel) {
            me.channelSelect.shift();
        }

        function saveAlarm(channel) {
            if(channel.alarmWatcher.id != undefined){
                apis.updateAlarm(channel.alarmWatcher,channel.alarmWatcher.id).then(function(response){
                        app.showMessage('Save successful ', 'Successful', ['Yes']);
                },function (e) {app.showMessage('Save failed <br/>' + e.responseText, 'Error', ['Yes']);});
            }else{
                apis.saveAlarm(channel.alarmWatcher).then(function(response){
                    app.showMessage('Save successful ', 'Successful', ['Yes']);
                    channelSelect(channel);
                },function (e) {app.showMessage('Save failed <br/>' + e.responseText, 'Error', ['Yes']);});
            }
        }
        function saveControl(channel){
            if(confirm("Are you sure?")){
                if(channel.type = 'Digital'){
                    channel.value = channel.data.value()?0:1;
                }
                apis.saveControl(channel).then(function(response){
                    app.showMessage('Save successful ', 'Successful', ['Yes']);
                },function (e) {app.showMessage('Save failed <br/>' + e.responseText, 'Error', ['Yes']);});
            }
        }
        function viewdocument(document){
            if(document.id)
            {
                me.document.removeAll();
                me.document.push(document);
            }
        }
        me.activate = function () {
            channelSelect(channels[0].sub[0]);

        }
        var documents = [
        {
            name: "Documents V1",
            id: 0,
            icon : "jstree-folder",
            sub: [
                {name: "Documents v1 UPS 1",id: 1,path: "requestProcess.pdf",icon : "icon-pdf",sub: 0},
                {name: "Documents v1 UPS 2",id: 2,path: "requestProcess.pdf",icon : "icon-pdf",sub: 0},
                {name: "Documents v1 UPS 3",id: 3,path: "requestProcess.pdf",icon : "icon-pdf",sub: 0},
                {name: "Documents v1 UPS 1",id: 4,path: "requestProcess.pdf",icon : "icon-pdf",sub: 0}
            ]
         },
         {
             name: "Documents V2",
             id: 0,
             icon : "jstree-folder",
             sub: [
                 {name: "Documents v2 UPS 1",id: 1,path: "requestProcess.pdf",icon : "icon-pdf",sub: 0},
                 {name: "Documents v2 UPS 2",id: 2,path: "requestProcess.pdf",icon : "icon-pdf",sub: 0},
                 {name: "Documents v2 UPS 3",id: 3,path: "requestProcess.pdf",icon : "icon-pdf",sub: 0},
                 {name: "Documents v2 UPS 1",id: 4,path: "requestProcess.pdf",icon : "icon-pdf",sub: 0},
                {name: "Documents v2 UPS 2",id: 2,path: "requestProcess.pdf",icon : "icon-pdf",sub: 0},
                {name: "Documents v2 UPS 3",id: 3,path: "requestProcess.pdf",icon : "icon-pdf",sub: 0},
                {name: "Documents v2 UPS 1",id: 4,path: "requestProcess.pdf",icon : "icon-pdf",sub: 0},
               {name: "Documents v2 UPS 2",id: 2,path: "requestProcess.pdf",icon : "icon-pdf",sub: 0},
               {name: "Documents v2 UPS 3",id: 3,path: "requestProcess.pdf",icon : "icon-pdf",sub: 0},
               {name: "Documents v2 UPS 1",id: 4,path: "requestProcess.pdf",icon : "icon-pdf",sub: 0},
              {name: "Documents v2 UPS 2",id: 2,path: "requestProcess.pdf",icon : "icon-pdf",sub: 0},
              {name: "Documents v2 UPS 3",id: 3,path: "requestProcess.pdf",icon : "icon-pdf",sub: 0},
              {name: "Documents v2 UPS 1",id: 4,path: "requestProcess.pdf",icon : "icon-pdf",sub: 0}
             ]
          }];
        var document = [];
        document.push(documents[0].sub[0]);
        me.document = ko.observableArray(document);
        me.saveControl = saveControl;
        me.saveAlarm = saveAlarm;
        me.viewdocument = viewdocument;
        me.viewdetail = viewdetail;
        me.documents = ko.observableArray(documents);
        me.controls =  ko.observableArray(me.controls);
        me.channelSelect = ko.observableArray(me.channelSelect);
        me.channels = ko.observableArray(channels);
        me.cf = ko.observableArray(cf);
    };
}
);
