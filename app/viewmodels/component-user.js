define(['durandal/app', "knockout", 'plugins/router'],
    function (app, ko, router) {
        return function () {
            var me = this,user = [],apis = app.services.getService("apis"), buff = app.buff;
            function showUser(u) {
                if (u.id == 0) u.email = "";
                me.user.removeAll();
                me.user.push(u);
            }
            function saveConfig(u){
				var error_msg = me.showError();
				if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(u.email) == false) {
					if (error_msg != '') {
						error_msg += " & Invalid Email Address"
					} else {
						error_msg = "Invalid Email Address"
					}
				}
                if (error_msg != '') {
                    app.showMessage(error_msg, 'Error', ['Yes']);
                } else {
					if (me.pass1() == "") {
						if (u.id == 0) { //add new user
							apis.edituse(u.id, {"username": u.username, "email": u.email, "password": "123456", "fullname": u.fullname, "cellphone": u.cellphone}).then(function(){
								app.showMessage('Save successful ', 'Successful', ['Yes']);
							})
						} else { //edit old user without changing password
							apis.edituse(u.id, {"username": u.username, "email": u.email, "fullname": u.fullname, "cellphone": u.cellphone}).then(function(){
								app.showMessage('Save successful ', 'Successful', ['Yes']);
							})
						}
					} else { //edit all user info.
						apis.edituse(u.id, {"username": u.username, "email": u.email, "password": me.pass1(), "fullname": u.fullname, "cellphone": u.cellphone}).then(function(){
							app.showMessage('Save successful ', 'Successful', ['Yes']);
						});
					}
                }
            }

            me.activate = function () {};
            me.addUser = function(){
                me.user.removeAll();
                me.user.push({"username":"user","email":"user@cmas.com","id":0,"fullname":"","cellphone":""});
            }
            me.saveConfig = saveConfig;
            //me.title = ko.observable('User Information');
			//me.email = ko.observable();
            me.pass1 = ko.observable('');
            me.pass2 = ko.observable('');
            me.showUser = showUser;
            me.users = ko.observableArray(buff.getByKey('CMASUsers'));
            me.user = ko.observableArray(user);
            me.showError = ko.computed(function () {
                var msg = "";
                if (me.pass1() != me.pass2()) msg = "Incorrect Password";
				/*if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(me.email()) == false) {
					if (msg != '') {
						msg += " & Invalid Email Address"
					} else {
						msg = "Invalid Email Address"
					}
				}*/
                return msg;
            });
        };
    }
);
