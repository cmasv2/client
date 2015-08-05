define(["durandal/app"], function (app) {
    return function() {
        var me = this;
        var currentUser = false;
        
        me.getcurrentUser = function() {
            return currentUser;
        }
        me.cheklogin = function (use, pass){
            currentUser = true;
        }
        return this;
    };
});
