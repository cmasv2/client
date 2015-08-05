define(["backbone", "knockout", "moment", "jquery", "underscore"], function (Backbone, ko, Moment, $, _) {
    return Backbone.Model.extend({
        url: "api/AlarmWatchers/",
        defaults: {},
        acknowledge: function () {
            var that = this;
            var params = {
                timeout: 30000,
                type: "POST",
                dataType: "json",
                data: JSON.stringify({id: that.get("id")}),
                url: that.url + "acknowledge",                
                processData: false
            };
            return $.ajax(params);
        }
    });
})