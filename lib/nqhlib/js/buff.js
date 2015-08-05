/*
 * buff
Create: nqhuy2k6@gmail.com
03/01/2015
*/
(function ($) {
    function bufF(op_) {
        var data = {},bufF = this;
        bufF.getData = function () { return data; };
        bufF.getByKey = function (k) {
            for (var prop in data) {
                if (data.hasOwnProperty(prop)) {
                    if (prop = k)
                        return data[prop];
                }
            }
            return 0;
        }
        bufF.find = function(a, attr, val) {
            var arr = [];
            for(var i = 0; i < a.length; i++) {
                if(a[i].hasOwnProperty(attr) && a[i][attr] === val) {
                    arr.push(a[i]);
                }
            }
            return arr.length?arr:false;
        }
        bufF.setByKey = function (k,d) {
            var obj = {};
            obj[k] = d;
            p(obj);
        }
        p(op_);
        function p(o) {
            $.extend(data, o);
        }
    }
    $.buff = function (op) {
        var buff = new bufF(op);
        buff.home = function () { return '/page'; };
        return buff;
    };
    $.buff.version = "0.0.1";
})(jQuery);