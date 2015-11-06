define(["durandal/app", "knockout", "plugins/router"], function (app, ko, router) {
    return function () {
        var me = this, api = app.services.getService("apis");

        me.activate = function () {
            if (localStorage.getItem("swagger_accessToken")) {
				//api.logout().then(function (r) {
					localStorage.setItem("swagger_accessToken", '');
					localStorage.setItem("user", null);
					//console.log("User logout");
				//}, function (e) {
					//app.showMessage("Please login first!", "Error", ["Yes"])
				//});
				router.navigate("");
			}
        };
    }
});