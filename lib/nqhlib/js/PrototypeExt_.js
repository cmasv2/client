/**
 Create by Huy: codocmm@gmail.com ~ nqhuy2k6@gmail.com
 07/31/2015
 */
if (!String.prototype.format) {
    String.prototype.format = function () {

        if (arguments.length <= 0) {
            return this;
        } else {
            var format = this;
            var args = arguments;

            var s = format.replace(/(?:[^{]|^|\b|)(?:{{)*(?:{(\d+)}){1}(?:}})*(?=[^}]|$|\b)/g, function (match, number) {
                number = parseInt(number);

                return typeof args[number] != "undefined" ? match.replace(/{\d+}/g, args[number]) : match;
            });

            return s.replace(/{{/g, "{").replace(/}}/g, "}");
        }
    };
}