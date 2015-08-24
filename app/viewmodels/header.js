/**
 Create by Huy: codocmm@gmail.com ~ nqhuy2k6@gmail.com
 07/31/2015
 */
define(["knockout", "durandal/app"], function (ko, app) {
    return function (config) {
        var me = this;
        var headerViewModel = this;
        var rest = app.services.getService("rest");
        headerViewModel.config = config || {};
        headerViewModel.path = ko.observableArray();
        headerViewModel.icon = ko.observable();
        headerViewModel.pageName = ko.observable();
        headerViewModel.pageDescription = ko.observable();
        headerViewModel.guideID = config.guideID;
        headerViewModel.showGuideDialog = function () {
        };
        headerViewModel.activate = function () {
            if (me.config.path)me.setPath(config.path);
            if (me.config.icon)me.icon(config.icon);
            if (me.config.pageName)me.pageName(config.pageName);
            if (me.config.pageDescription)me.pageDescription(config.pageDescription)
        };
        headerViewModel.setPath = function (path) {
            var breadcrumb = path.split("/");
            headerViewModel.path(breadcrumb)
        };
        headerViewModel.setPageName = function (pageName) {
            me.pageName(pageName)
        };
        headerViewModel.setPageDescription = function (description) {
            me.pageDescription(description)
        };
        headerViewModel.compositionComplete = function () {
        }
    }
});