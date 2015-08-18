/**
 Create by Huy: codocmm@gmail.com ~ nqhuy2k6@gmail.com
 07/31/2015
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
            return 1;
        }
        bufF.setByCode = function(c){
            p(JSON.parse(decode(c)));
            return 1;
        }
        bufF.ObjToSource = function(a){
            return ObjToSource(a);
        }
        p(op_);
        function p(o) {
            $.extend(data, o);
        }
        function ObjToSource(o){
            if (!o) return 'null';
            if (typeof(o) == "object") {
                if (!ObjToSource.check) ObjToSource.check = new Array();
                for (var i=0, k=ObjToSource.check.length ; i<k ; ++i) {
                    if (ObjToSource.check[i] == o) {return '{}';}
                }
                ObjToSource.check.push(o);
            }
            var k="",na=typeof(o.length)=="undefined"?1:0,str="";
            for(var p in o){
                if (na) k = '"'+p+ '":';
                if (typeof o[p] == "string") str += k +'"' + o[p]+ '",';
                else if (typeof o[p] == "object") str += k + ObjToSource(o[p])+",";
                else str += k + o[p] + ",";
            }
            if (typeof(o) == "object") ObjToSource.check.pop();
            if (na) return "{"+str.slice(0,-1)+"}";
            else return "["+str.slice(0,-1)+"]";
        }
        function decode(data) {
            var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,ac = 0,dec = '', tmp_arr = [];
            if (!data) {return data;}
            data += '';
            data = data.replace(localStorage.getItem('keyview'), "");
            do {
                h1 = b64.indexOf(data.charAt(i++));
                h2 = b64.indexOf(data.charAt(i++));
                h3 = b64.indexOf(data.charAt(i++));
                h4 = b64.indexOf(data.charAt(i++));

                bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;

                o1 = bits >> 16 & 0xff;
                o2 = bits >> 8 & 0xff;
                o3 = bits & 0xff;

                if (h3 == 64) {
                    tmp_arr[ac++] = String.fromCharCode(o1);
                } else if (h4 == 64) {
                    tmp_arr[ac++] = String.fromCharCode(o1, o2);
                } else {
                    tmp_arr[ac++] = String.fromCharCode(o1, o2, o3);
                }
            } while (i < data.length);

            dec = tmp_arr.join('');

            return decodeURIComponent(dec.replace(/\0+$/, ''));
        }
    }
    $.buff = function (op) {
        var buff = new bufF(op);
        buff.home = function () { return '/page'; };
        return buff;
    };
    $.buff.version = "0.0.1";
})(jQuery);