/**
 Create by Huy: codocmm@gmail.com ~ nqhuy2k6@gmail.com
 07/31/2015
 */
define(["durandal/app","jquery", "knockout", "bootstrap", "viewmodels/component-report1", "viewmodels/component-report7", "css!../../../lib/jstree/dist/themes/default/style.min.css"], function (app,$, ko, bootstrap, componentReport1, componentReport7) {
    return function () {
        var me = this, Reports = [{
            name: "Report",
            id: 0,
            sub: [{
                name: "T\u1ed4NG H\u1ee2P C\u1ea2NH B\u00c1O",
                id: 1,
                sub: 0
            }, {name: "B\u00c1O C\u00c1O V\u1eacN H\u00c0NH", id: 2, sub: 0}]
        }], AutoReports = [];

        function viewdetail(r) {
            if (r.id === 1)me.compoment1(new componentReport1); else if (r.id === 2)me.compoment1(new componentReport7); else app.showMessage("Page not found", "Error", ["Yes"])
        }

        function Popup(data)
        {
            var mywindow = window.open('', 'report', 'height=400,width=600');
            mywindow.document.write('<html><head><title>my div</title>');
            /*optional stylesheet*/ //mywindow.document.write('<link rel="stylesheet" href="main.css" type="text/css" />');
            mywindow.document.write('</head><body >');
            mywindow.document.write(data);
            mywindow.document.write('</body></html>');

            mywindow.document.close(); // necessary for IE >= 10
            mywindow.focus(); // necessary for IE >= 10

            mywindow.print();
            mywindow.close();

            return true;
        }
        me.compoment1 = ko.observable();
        me.compoment1(new componentReport1);
        me.viewdetail = viewdetail;

        me.Print = function () {
            Popup($("#printrp").html())
        }
        me.reports = ko.observableArray(Reports)
    }
});