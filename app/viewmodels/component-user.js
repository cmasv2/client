define(['durandal/app', "knockout", 'plugins/router'],
    function (app, ko, router) {
        return function () {
            var me = this,user = [],apis = app.services.getService("apis"), buff = app.buff;
            function showUser(u){
                if(u.id == 0) u.email = "";
                me.user.removeAll();
                me.user.push(u);
            }
            function saveConfig(u){
                if(me.showError() != '')
                {
                    app.showMessage("Incorrect password", 'Error', ['Yes']);
                }
                else{
                    apis.edituse(u.id,{"email": u.email, "password": me.pass1()}).then(function(){
                        app.showMessage('Save successful ', 'Successful', ['Yes']);
                    });
                }
            }
            /* radom data */
            me.activate = function () {};
            me.addUser = function(){
                me.user.removeAll();
                me.user.push({"email": "","id":0});
            }
            me.saveConfig = saveConfig;
            me.title = ko.observable('User Information');
            me.pass1 = ko.observable('');
            me.pass2 = ko.observable('');
            me.showUser = showUser;
            me.users = ko.observableArray(buff.getByKey('CMASUsers'));
            me.user = ko.observableArray(user);
            me.showError = ko.computed(function () {
                var msg = "";
                if (me.pass1() != me.pass2())msg = "Incorrect password";
                return msg
            });
        };
    }
);
