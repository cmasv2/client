define(['durandal/app', "knockout", 'plugins/router'],
    function (app, ko, router) {
    var initialData = [
            { name: "Critical", values:[{value:1},{value:2},{value:3}]},
            { name: "Warning", values:[{value:4},{value:5},{value:6}]},
            { name: "Advisory", values:[{value:7},{value:8},{value:9}]},
            { name: "Log", values:[{value:10},{value:7},{value:3}]}
        ],items = ko.observableArray(initialData),
        columns = [
                { headerText: "Alarm Priority", rowText: "name" },
                { headerText: "Level 1 - Operator", rowText: "level1" },
                { headerText: "Level 2 - Manager", rowText: "level2" },
                { headerText: "Level 3 - Administrator", rowText: "level3" }
            ],
        options = [{name: "1 st",value:1},{ name: "2 st",value:2},{ name: "3 st",value:3},{ name: "4 st",value:4},{ name: "5 st",value:5},
        { name: "6 st",value:6},{ name: "7 st",value:7},{ name: "8 st",value:8},{ name: "9 st",value:9},{ name: "10 st",value:10}];

    return function () {
        var me = this,componentUserModel = this;
        function saveConfig(){
            app.showMessage("Page not found", 'Error', ['Yes']);
        }
        me.items = items;
        me.columns = columns;
        me.options = options;
        me.saveConfig = saveConfig;
    };
}
);
