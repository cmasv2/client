﻿define(['durandal/app', "knockout", 'plugins/router'],
    function (app, ko, router) {
    return function () {
        var me = this,componentUserModel = this,users = [],user = [];
        function showUser(u){
            if(u.id == 0) u.email = "";
           componentUserModel.user.removeAll();
           componentUserModel.user.push(u);
       }
       function saveConfig(){
           app.showMessage("Page not found", 'Error', ['Yes']);
       }
       /* radom data */
       users = [
           {"email": "Add New","id":0},
           {"email": "admin@admin.com","id":1},
           {"email": "admin1@admin.com","id":2},
           {"email": "admin2@admin.com","id":3},
           {"email": "admin3@admin.com","id":4}
           ];
       user = [{"email": "","id":0}],
       /* radom data */
        componentUserModel.activate = function () {
          
        };
        me.saveConfig = saveConfig;
        componentUserModel.title = ko.observable('User managare');
        componentUserModel.pass1 = ko.observable();
        componentUserModel.pass2 = ko.observable();
        componentUserModel.showUser = showUser;
        componentUserModel.users = ko.observableArray(users);
        componentUserModel.user = ko.observableArray(user);
    };
}
);
