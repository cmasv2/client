/**
 Create by Huy: codocmm@gmail.com ~ nqhuy2k6@gmail.com
 07/31/2015
 */
define(["q"], function (Q) {
    return function () {
        var me = this;
        services = {};
        me.register = function (serviceName) {
            console.log(serviceName);
            var defered = Q.defer();
            require(["services/" + serviceName], function (ServiceClass) {
                console.log("Done " + serviceName);
                services[serviceName] = new ServiceClass;
                defered.resolve()
            });
            return defered.promise
        };
        me.getService = function (serviceName) {
            return services[serviceName]
        }
    }
});