/**
 Create by Huy: codocmm@gmail.com ~ nqhuy2k6@gmail.com
 07/31/2015
 */
define([
    "backbone"
], function (Backbone) {
    "use strict";
    return Backbone.Model.extend({
        defaults: {
            "fromTime": "",
            "toTime": ""
        }
    });
});