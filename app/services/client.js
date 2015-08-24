/**
 Create by Huy: codocmm@gmail.com ~ nqhuy2k6@gmail.com
 07/31/2015
 */
define(["../data/client"], function (client) {
    return function () {
        var me = this;
        me.getPages = function () {
            return client.pages
        };
        me.getPageDefinitions = function (page) {
            return client.pageDefinitions[page]
        }
    }
});