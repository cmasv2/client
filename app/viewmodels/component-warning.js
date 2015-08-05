define(['durandal/app', 'plugins/router', "knockout", "moment", "../collections/alarm-watcher-collection", "./../bindings/status-binding"], function (app, router, ko, Moment, AlarmWatcherCollection) {
    return function (config) {
        var warningSystem = config;
        var me = this;
        var componentModel = this;
        var Soc = app.services.getService("socket");
        
        function Lis(c) {
            c.value = ko.observable('NaN');
            var cv = function (value) {
                if(value != undefined)
                c.value(Math.round(value * 10) / 10);
            }
            if (Soc.connected())
                if (c.channelName != 'xxx')
                    Soc.Lis(c.channelName, cv);
        }
        function binds(status) {
            var _status = status;
            status = ko.observable(_status);
        }
        componentModel.view = function (d){};
        componentModel.warningSystem = ko.observableArray(warningSystem);
        
    };
}
);
