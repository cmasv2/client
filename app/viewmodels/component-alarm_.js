/**
 Create by Huy: codocmm@gmail.com ~ nqhuy2k6@gmail.com
 07/31/2015
 */
define(['durandal/app', "knockout", 'plugins/router'],
    function (app, ko, router) {
        return function () {
            var me = this;
            var init = [
                    {name: "Level 1 - Operator", values: [{value: 4}, {value: 5}, {value: 6}, {value: 3}]},
                    {name: "Level 2 - Manager", values: [{value: 7}, {value: 8}, {value: 9}, {value: 3}]},
                    {name: "Level 3 - Administrator", values: [{value: 10}, {value: 7}, {value: 3}, {value: 3}]}
                ], items = ko.observableArray(init),
                columns = [{ht: "#"}, {ht: "Critical"}, {ht: "Warning"}, {ht: "Advisory"}, {ht: "Log"}],
                options = [{name: "1 st", value: 1}, {name: "2 st", value: 2}, {name: "3 st", value: 3}, {
                    name: "4 st",
                    value: 4
                }, {name: "5 st", value: 5},
                    {name: "6 st", value: 6}, {name: "7 st", value: 7}, {name: "8 st", value: 8}, {
                        name: "9 st",
                        value: 9
                    }, {name: "10 st", value: 10}];

            function saveConfig() {
                app.showMessage("Page not found", 'Error', ['Yes']);
            }

            me.items = items;
            me.columns = columns;
            me.options = options;
            me.saveConfig = saveConfig;
        };
    }
);
