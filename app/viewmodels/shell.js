define(['plugins/router', 'durandal/app'], function (router, app) {
    return {
        router: router, 
        activate: function () {
            router.map([
                {
                    route: '', 
                    title: 'login',
                    description: 'login',
                    icon: 'fa-home', 
                    moduleId: 'viewmodels/page-login', 
                    nav: false
                },
                {
                    route: 'page*details', 
                    title: 'Dashboard',
                    description: 'Dashboard',
                    icon: 'fa-home', 
                    moduleId: 'page/index', 
                    nav: false
                }
            ]).buildNavigationModel()
            .mapUnknownRoutes('viewmodels/page-login', 'not-found');
            
            return router.activate();
        }
    };
});