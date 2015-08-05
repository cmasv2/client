define(['durandal/app', "knockout","./../bindings/status-binding"],
    function (app, ko) {
        return function (config) {
            var dataComponent = config;
            //var channels = [];
            var me = this;
            var componentModel = this;
            var socketService = app.services.getService("socket");
            function listenChannel(channelObject) {
                channelObject.value = ko.observable();
                var convertFunction = function (value) {
                    channelObject.value(Math.round(value * 100) / 100);
                };
                if (socketService.connected())
                    socketService.listenChannel(channelObject.channelName, convertFunction);
                else
                    channelObject.value('NaN');
            }
            function radomdata(){
                for (var i = 1; i < 3 ; i++) {
                    var status ={
                        name : "System On (Fan)",
                        datas: [
                        {
                            name : "El. Heater 1",
                            icon: "fa-li fa fa-circle",
                            status: random(2), 
                            unit: "kva"
                        },
                        {
                            name : "El. Heater 1",
                            icon: "fa-li fa fa-circle",
                            status: random(2), 
                            unit: "kva"
                        },
                        {
                            name : "El. Heater 1",
                            icon: "fa-li fa fa-circle",
                            status: random(2), 
                            unit: "kva"
                        }]
                    }
                    bindingStatus(status.datas[0].status);
                    dataComponent[0].Status.push(status);
                }
            }
            function random(val){
                return Math.floor((Math.random() * val) ); 
            }
            function bindingStatus(status) {
                var _status = status;
                status = ko.observable(_status);
            }
            radomdata();
            function viewdetail(channel){
                alert("view detail " + channel.name);
            }
            if (dataComponent[0].Parameters) {
                //
                for (i = 0; i < dataComponent[0].Parameters.length; i++) {
                    for (j = 0; j < dataComponent[0].Parameters[i].data.length; j++) {
                        listenChannel(dataComponent[0].Parameters[i].data[j].values[0]);
                        listenChannel(dataComponent[0].Parameters[i].data[j].values[1]);
                        listenChannel(dataComponent[0].Parameters[i].data[j].values[2]);
                    }
                    listenChannel(dataComponent[0].Parameters[i].kWh);
                    listenChannel(dataComponent[0].Parameters[i].Time);
                }
            }
            if (dataComponent[0].Battery.values) {
                for (i = 0; i < dataComponent[0].Battery.values.length; i++) {
                    listenChannel(dataComponent[0].Battery.values[i]);
                }
            }
            
            /*
            for (var i = 0; i < dataComponent[0].channels.length; i++) {
                bindingStatus(dataComponent[0].channels[i][0].status);
                listenChannel(dataComponent[0].channels[i][0]["value1"]);
                if (dataComponent[0].channels[i][1]) {
                    bindingStatus(dataComponent[0].channels[i][1].status);
                    listenChannel(dataComponent[0].channels[i][1]["value1"]);
                }
            }
            */

            componentModel.viewdetail = viewdetail;
            componentModel.dataComponent = ko.observableArray(dataComponent);
        };
    }
);
