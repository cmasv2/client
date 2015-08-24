requirejs.config({
    paths: {
        "data": "data",
        "css": "../lib/require/css",
        "text": "../lib/require/text",
        "durandal": "../lib/durandal/js",
        "plugins": "../lib/durandal/js/plugins",
        "transitions": "../lib/durandal/js/transitions",
        "knockout": "../lib/knockout/knockout-3.1.0",
        "bootstrap": "../lib/bootstrap/js/bootstrap",
        "bootstrap-switch": "../lib/bootstrap-switch/dist/js/bootstrap-switch",
        "jquery": "../lib/jquery/jquery-1.9.1",
        "buff": "../lib/nqhlib/js/buff",
        "q": "../lib/q/q",
        "socket": "../lib/socket.io/socket.io-1.3.5",
        "backbone": "../lib/backbone/backbone.min",
        "knockback": "../lib/knockback/knockback.min",
        "flot": "../lib/flot/jquery.flot",
        "flotpie": "../lib/flot/jquery.flot.pie",
        "flottime": "../lib/flot/jquery.flot.time",
        "flotcrosshair": "../lib/flot/jquery.flot.crosshair",
        "flotnavigate": "../lib/flot/jquery.flot.navigate",
        "flotCategories": "../lib/flot/jquery.flot.categories",
        "TrendingControl": "../lib/nqhlib/js/Control.Trending",
        "Canvas2Image": "../lib/nqhlib/js/canvas2image",
        "PrototypeExt": "../lib/nqhlib/js/PrototypeExt",
        "jqplot": "../lib/nqhlib/js/jquery.jqplot.min",
        "cursor": "../lib/nqhlib/js/jqplot.cursor.min",
        "dateAxisRenderer": "../lib/nqhlib/js/jqplot.dateAxisRenderer.min",
        "canvasTextRenderer": "../lib/nqhlib/js/jqplot.canvasTextRenderer.min",
        "canvasAxisLabelRenderer": "../lib/nqhlib/js/jqplot.canvasAxisLabelRenderer.min",
        "canvasAxisTickRenderer": "../lib/nqhlib/js/jqplot.canvasAxisTickRenderer.min",
        "pieRenderer": "../lib/nqhlib/js/jqplot.pieRenderer.min",
        "moment": "../lib/moment/moment.with.locate",
        "underscore": "../lib/underscore/underscore.min",
        "jstree": "../lib/jstree/dist/jstree",
        "gauges": "../lib/Gauges/src/jquery.gauge",
        "sparkline": "../lib/sparkline/jquery.sparkline.min",
        "bootstrap-datepicker": "../lib/bootstrap/js/bootstrap.datepicker.min"
    },
    shim: {
        "bootstrap": {deps: ["jquery"], exports: "jQuery"},
        "bootstrap-switch": {deps: ["jquery"], exports: "jQuery"},
        "sparkline": {deps: ["jquery"], exports: "sparkline"},
        "jqplot": {deps: ["jquery"], exports: "jqplot"},
        "cursor": {deps: ["jquery", "jqplot"], exports: "jqplot"},
        "dateAxisRenderer": {deps: ["jquery", "jqplot"], exports: "jqplot"},
        "canvasTextRenderer": {deps: ["jquery", "jqplot"], exports: "jqplot"},
        "canvasAxisLabelRenderer": {deps: ["jquery", "jqplot"], exports: "jqplot"},
        "canvasAxisTickRenderer": {deps: ["jquery", "jqplot"], exports: "jqplot"},
        "pieRenderer": {deps: ["jquery", "jqplot"], exports: "jqplot"},
        "buff": {deps: ["jquery"], exports: "jQuery"},
        "backbone": {deps: ["jquery", "underscore"], exports: "Backbone"},
        "knockback": {deps: ["backbone", "knockout"], exports: "kb"},
        "flot": {deps: ["jquery"], exports: "plot"},
        "flotpie": {deps: ["jquery", "flot"], exports: "plot"},
        "flottime": {deps: ["jquery", "flot"], exports: "plot"},
        "flotcrosshair": {deps: ["jquery", "flot"], exports: "plot"},
        "flotnavigate": {deps: ["jquery", "flot"], exports: "plot"},
        "flotCategories": {deps: ["jquery", "flot"], exports: "plot"},
        "TrendingControl": {deps: ["jquery", "flot", "Canvas2Image", "PrototypeExt"], exports: "plot"}
    }
});
define(["durandal/system", "durandal/app", "durandal/viewLocator", "services/service-provider", "config", "buff"], function (system, app, viewLocator, ServiceProvider, Config) {
    system.debug(true);
    app.title = "CMAS";
    app.CMASConfig = Config;
    app.buff = false;
    app.configurePlugins({router: true, dialog: true});
    var serviceProvider = new ServiceProvider;
    app.services = serviceProvider;
    serviceProvider.register("client").then(serviceProvider.register.bind(serviceProvider, "authentication")).then(serviceProvider.register.bind(serviceProvider, "apis")).then(serviceProvider.register.bind(serviceProvider, "socket")).done(function () {
        app.start().then(function () {
            viewLocator.useConvention();
            app.setRoot("viewmodels/shell", "entrance")
        })
    })
});