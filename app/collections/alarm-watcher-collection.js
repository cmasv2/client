/**
 Create by Huy: codocmm@gmail.com ~ nqhuy2k6@gmail.com
 07/31/2015
 */
define(["backbone", "knockout", "moment", "../models/alarm-watcher"], function (Backbone, ko, Moment, AlarmWatcher) { return Backbone.Collection.extend({ url: "api/AlarmWatchers?filter[where][enable]=true&access_token=" + localStorage.getItem('swagger_accessToken'), model: AlarmWatcher, defaults: {} }); })