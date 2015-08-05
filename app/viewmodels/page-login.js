define(['durandal/app', "knockout", 'plugins/router', "./../data/configGui", "css!../../css/login.css"],
    function (app, ko, router, conF) {
    return function () {
        var me = this, conf = conF(),a = app.services.getService("apis");
        me.username = ko.observable("admin@cmas.com");
        me.password = ko.observable("admin");
        me.showok = ko.observable(0);
        me.act = ko.observable(1);
        me.showError = ko.computed(function () {
            var msg = '';
            if (!me.password()) {
                msg = 'Enter your password';
            }
            if (!me.username()) {
                msg = "Enter your Username";
            }
            return msg;
        });
        function init(u,r){
            app.buff = $.buff(conf);
            var ch;
            a.GetLocations().then(function(re){
                app.buff.setByKey('LocationAll',re);
            },function (e){app.showMessage("Url: api/Locations?access_token=" + apis.access_token()+'<br/>'+ e.responseText, 'Error', ['Yes']);});
            if(ch = a.ChannelsAll()){
                app.buff.setByKey('ChannelsAll',ch);
            }
            var location;
            if(location = a.getsub1(0)){
                app.buff.setByKey('Location', location);
                app.buff.setByKey('infoUser',u);
                setTimeout(function(){r(app.buff.home())},5000);
            }
        }
        function login(){
            if(me.act()){
                me.act(0);
                a.login({"email": me.username(), "password": me.password()}).then(function(r){
                    localStorage.setItem('swagger_accessToken',r.id);
                    me.showok("login successful");
                    init(r,function(val) {router.navigate(val);});
                },function (e) {me.act(1);
                    app.showMessage('login failed ', 'Error', ['Yes']);
                 });
            }
        }
        me.activate = function () {
            localStorage.setItem('swagger_accessToken','');
        }
        me.login = login;
    };
}
);

