define(['durandal/app', "knockout", 'plugins/router',
 "../bindings/tree-binding",
 "css!../../lib/jstree/dist/themes/default/style.min.css"],
    function (app, ko, router) {
    return function (config) {
        var dataComponent = config;
        var me = this;
        var componentModel = this;
        function viewdetail(page) {
            router.navigate("page/explorer" + page.url);
        }
        componentModel.activate = function () {
          
        };
        componentModel.viewdetail = viewdetail;
        componentModel.dataComponent = ko.observableArray(dataComponent);
    };
}
);
