define(['durandal/app', 
    "plugins/router", 
    "knockout", 
    "viewmodels/base_view"], function (app, router, ko, PageView) {
    return function () {
        console.log("Main page loaded");
        var me = this;
        var mainViewModel = this;

        mainViewModel.pages = ko.observableArray();
        mainViewModel.currentPage = ko.observable();

        var pageViewModel = new PageView();

        app.on("loadpage").then(function (params) {
            me.createPage(params.pageName);
        });

        var client = app.services.getService("client");

        mainViewModel.activate = function (pageName) {

            me.pages(client.getPages());
            if (pageName) {
                this.loadPage(pageName);
            } else {
                me.activePage(pageViewModel);

                for (var index in me.pages()) {
                    if(me.pages()[index].active) {
                        me.loadPage(me.pages()[index].name);
                        break;
                    }
                }
            }
        };
        mainViewModel.navigateToPage = function (pageName) {
            router.navigate("#page/" + pageName);
        };

        mainViewModel.loadPage = function (pageName) {
            var pageConfig = client.getPageDefinitions(pageName);
            pageViewModel.loadContent(pageConfig);
            me.currentPage(pageName);

            me.activePage(pageViewModel);
        };        
    };
});

