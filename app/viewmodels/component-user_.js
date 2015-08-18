/**
 Create by Huy: codocmm@gmail.com ~ nqhuy2k6@gmail.com
 07/31/2015
 */
define(['durandal/app', "knockout", 'plugins/router'],
    function (app, ko, router) {
        return function () {
            var me = this, buff = app.buff, users = [], user = [];

            function showUser(u) {
                if (u.id == 0) u.email = "";
                me.user.removeAll();
                me.user.push(u);
            }
            function inf() {
                return buff.getByKey('infoUser');
            }
            function saveConfig(u) {
                console.log(u);
                app.showMessage("Page not found", 'Error', ['Yes']);
            }

            /* radom data
            users = [
                {"email": "Add New", "id": 0},
                {"email": "admin@admin.com", "id": 1},
                {"email": "admin1@admin.com", "id": 2},
                {"email": "admin2@admin.com", "id": 3},
                {"email": "admin3@admin.com", "id": 4}
            ];*/
            user.push(inf());
            me.activate = function () {

            };
            me.saveConfig = saveConfig;
            me.title = ko.observable('User managare');
            me.pass1 = ko.observable();
            me.pass2 = ko.observable();
            me.showUser = showUser;
            me.users = ko.observableArray(users);
            me.user = ko.observableArray(user);
        };
    }
);
