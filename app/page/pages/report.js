define(['durandal/app', "knockout", "bootstrap","viewmodels/component-report1","viewmodels/component-report7","css!../../../lib/jstree/dist/themes/default/style.min.css"],
    function (app, ko,bootstrap,componentReport1,componentReport7) {
        return function () {
            var me = this,
            Reports = [{
                                name: "Report",
                                id: 0,
                                sub: [
                                {name: "Report template 1",id: 1,sub: 0},
                                {name: "Report template 2",id: 2,sub: 0},
                                {name: "Report template 3",id: 3,sub: 0},
                                {name: "Report template 4",id: 4,sub: 0},
                                {name: "Report template 5",id: 5,sub: 0},
                                {name: "Report template 6",id: 6,sub: 0},
                                {name: "Report template 7",id: 7,sub: 0},
                                {name: "Report template 8",id: 8,sub: 0}
                                ]
                            }],
            AutoReports = [],report = [];
            me.compoment1 = ko.observable();
            for(var i = 0;i<100;i++){
                var temp = {name: i + ", Auto report 1 month mm year yyyy ",id: i ,path: "201406.pdf",sub: 0}
                AutoReports.push(temp);
            }
            function viewdetail(report) {
                if(report.id != 0){
                    me.id(report.id);
                    me.autoreports.removeAll();
                    for(var i = 0;i<100;i++){
                        var temp = {name: i + ", Auto report "+ report.id +" month mm year yyyy ",id: i,path: "requestProcess.pdf",sub: 0}
                        me.autoreports.push(temp);
                    }
                 }
            }
            function viewreport(report){
                me.report.removeAll();
                me.report.push(report);
            }
            function viewManual(){
               if(me.id() == 1)
               {
                     me.report.removeAll();
                     me.compoment1(new componentReport1());
               }else if(me.id() == 7){
                     me.report.removeAll();
                     me.compoment1(new componentReport7());
               }
               else
                    app.showMessage("Page not found", 'Error', ['Yes']);
            }
            report.push(AutoReports[0]);
            me.viewreport = viewreport;
            me.viewManual = viewManual;
            me.viewdetail = viewdetail;
            me.reports = ko.observableArray(Reports);
            me.id = ko.observable(1);
            me.autoreports = ko.observableArray(AutoReports);
            me.report = ko.observableArray(report);

        };
    }
);

