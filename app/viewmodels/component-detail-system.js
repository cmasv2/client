define(['durandal/app', "knockout", "./../bindings/status-binding"],
    function (app, ko) {
    return function (config) {
        var dataComponent = config;
        //var channels = [];
        var me = this;
        var componentModel = this;
        componentModel.dataComponent = ko.observableArray(dataComponent);
    };
}
);
