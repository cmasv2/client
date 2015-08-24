/**
 Create by Huy: codocmm@gmail.com ~ nqhuy2k6@gmail.com
 07/31/2015
 */
/**
 Create by Huy: codocmm@gmail.com ~ nqhuy2k6@gmail.com
 07/31/2015
 */
define(["durandal/app", "knockout", "bootstrap", "viewmodels/component-report2", "viewmodels/component-report3"], function (app, ko, bootstrap, componentReport1, componentReport7) {
    return function () {
        var me = this, Reports = [{
            name: "Report",
            id: 0,
            sub: [{
                name: "Template 1",
                id: 1,
                sub: 0
            }, {name: "Template 2", id: 2, sub: 0}]
        }], AutoReports = [];

        function viewdetail(r) {
            if (r.id === 1)me.compoment1(new componentReport1);
            else if (r.id === 2)me.compoment1(new componentReport7);
            else app.showMessage("Page not found", "Error", ["Yes"])
        }

        me.compoment1 = ko.observable();
        me.compoment1(new componentReport1);
        me.viewdetail = viewdetail;
        me.reports = ko.observableArray(Reports)
    }
});