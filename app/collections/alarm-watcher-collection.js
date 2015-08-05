define(["backbone", "knockout", "moment", "../models/alarm-watcher"], function (Backbone, ko, Moment, AlarmWatcher) {
    return Backbone.Collection.extend({
        url: "api/AlarmWatchers",
        model: AlarmWatcher,
        defaults: {}
    });
})