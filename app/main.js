requirejs.config({
    paths: {
        'data': 'data',
        'css': '../lib/require/css',
        'text': '../lib/require/text',
        'durandal': '../lib/durandal/js',
        'plugins' : '../lib/durandal/js/plugins',
        'transitions' : '../lib/durandal/js/transitions',
        'knockout': '../lib/knockout/knockout-3.1.0',
        'bootstrap': '../lib/bootstrap/js/bootstrap',
        'bootstrap-switch': '../lib/bootstrap-switch/dist/js/bootstrap-switch',
        'jquery': '../lib/jquery/jquery-1.9.1',
        'buff': '../lib/nqhlib/js/buff',
        'q': '../lib/q/q',
        "socket": "../lib/socket.io/socket.io-1.3.5",
        "backbone": "../lib/backbone/backbone.min",
        "knockback": "../lib/knockback/knockback.min",
        "flot": "../lib/flot/jquery.flot.min",
        "flotpie": "../lib/flot/jquery.flot.pie.min",
        "flottime": "../lib/flot/jquery.flot.time.min",
        "flotcrosshair": "../lib/flot/jquery.flot.crosshair.min",
        "flotnavigate": "../lib/flot/jquery.flot.navigate",
        "flotAxisLabel" : "../lib/flot/jquery.flot.axislabels",
        "flotCategories" : "../lib/flot/jquery.flot.categories",
        "flotOrderBars" : "../lib/flot/jquery.flot.orderBars",
        "TrendingControl":"../lib/nqhlib/js/Control.Trending",
        "Canvas2Image":"../lib/nqhlib/js/canvas2image",
        "moment" : "../lib/moment/moment.with.locate",
        "underscore": "../lib/underscore/underscore.min",
        "jstree": "../lib/jstree/dist/jstree",
        "gauges": "../lib/Gauges/src/jquery.gauge",
        "bootstrap-datepicker": "../lib/bootstrap/js/bootstrap.datepicker.min"
    },
    shim: {
        'bootstrap': {
            deps: ['jquery'],
            exports: 'jQuery'
        },
        'bootstrap-switch': {
            deps: ['jquery'],
            exports: 'jQuery'
        },
        'buff': {
            deps: ['jquery'],
            exports: 'jQuery'
        },
        'backbone': {
            deps: ['jquery', "underscore"],
            exports: 'Backbone'
        },
        'knockback': {
            deps: ['backbone', "knockout"],
            exports: 'kb'
        },
        "flot": {
            deps: ["jquery"],
            exports: "plot"
        },
        "flotpie": {
            deps: ["jquery", "flot"],
            exports: "plot"
        },
        "flottime": {
            deps: ["jquery", "flot"],
            exports: "plot"
        },
        "flotAxisLabel": {
            deps: ["jquery", "flot"],
            exports: "plot"
        },
        "flotCategories": {
            deps: ["jquery", "flot"],
            exports: "plot"
        },
        "flotOrderBars": {
            deps: ["jquery", "flot"],
            exports: "plot"
        }
    }
});

define(['durandal/system', 'durandal/app', 'durandal/viewLocator', "services/service-provider", "config","buff"],
    function (system, app, viewLocator, ServiceProvider,Config) {
    //>>excludeStart("build", true);
    system.debug(true);
    //>>excludeEnd("build");
    
    app.title = 'CMAS';
    app.CMASConfig = Config;
    app.buff = false;
    app.configurePlugins({
        router: true,
        dialog: true
    });
    
    var serviceProvider = new ServiceProvider();
    
    app.services = serviceProvider;
    
    serviceProvider.register("client")
    .then(serviceProvider.register.bind(serviceProvider, "authentication"))
    .then(serviceProvider.register.bind(serviceProvider, "apis"))
    .then(serviceProvider.register.bind(serviceProvider, "socket"))
        .done(function () {
        app.start().then(function () {
            //Replace 'viewmodels' in the moduleId with 'views' to locate the view.
            //Look for partial views in a 'views' folder in the root.
            viewLocator.useConvention();
            //Show the app by setting the root view model for our application with a transition.
            //if (!app.services.getService("authentication").currentUser())
            //app.setRoot('viewmodels/page-login', 'entrance');
            //else
            app.setRoot('viewmodels/shell', 'entrance');
                
        });
    });
});