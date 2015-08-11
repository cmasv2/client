define(['durandal/app', "knockout", "./../bindings/status-binding"],
    function (app, ko) {
    return function (config) {
        var dataComponent = config;
        var Soc = app.services.getService("socket");
        //var channels = [];
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
                        c.value((Math.round(value * 10) / 10) + " V");
                    }
                }
            }
            if (Soc.connected())
                if (c.channelName != 'xxx')
                    Soc.Lis(c.channelName, cv);
        }
        for(var i = 0 ; i < config[0]['divs'].length ; i++ ){

            Lis(config[0]['divs'][i]);
        }
        me.dataComponent = ko.observableArray(dataComponent);
    };
}
);
