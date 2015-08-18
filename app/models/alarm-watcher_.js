/**
 Create by Huy: codocmm@gmail.com ~ nqhuy2k6@gmail.com
 07/31/2015
 */
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
                //data: JSON.stringify({id: }),
                url: that.url + that.get("id") + "/acknowledge?access_token=" + localStorage.getItem('swagger_accessToken'),
                processData: false
            };
            return $.ajax(params);
        }
    });
})