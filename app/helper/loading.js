/**
 Create by Huy: codocmm@gmail.com ~ nqhuy2k6@gmail.com
 07/31/2015
 */
define(["blockUI", "spinner"], function (blockUI, Spinner) {
    var LoadingSpinner = {
        blockElement: function (el, msg) {
            var options = {
                css: {
                    backgroundPosition: "center 20px",
                    background: "linear-gradient(#1086d1, #0e77b9)",
                    "background-color": "#0e77b9",
                    filter: 'progid:DXImageTransform.Microsoft.Gradient(startColorStr="#1086d1", endColorStr="#0e77b9")',
                    "-webkit-box-shadow": "inset 0 0 25px #0d6eab;",
                    "box-shadow": "inset 0 0 25px #0d6eab;",
                    left: "40%",
                    border: "none",
                    fontSize: "16px"
                },
                overlayCSS: {backgroundColor: "gray", opacity: .5},
                centerY: true,
                centerX: true,
                message: '<div><div class="dialog-message" style="font-size:14px; padding:10px;">' + msg + "</div></div>",
                fadeIn: 0,
                fadeOut: 0
            };
            el.block(options)
        }, unblockElement: function (el) {
            el.unblock()
        }, show: function (msg) {
            var opts = {
                lines: 12,
                length: 5,
                width: 4,
                radius: 8,
                corners: 1,
                rotate: 0,
                direction: 1,
                color: "#fff",
                speed: 1.5,
                trail: 60,
                shadow: false,
                hwaccel: false,
                className: "spinner",
                zIndex: 99999,
                top: "auto",
                left: "auto"
            };
            $.blockUI({
                css: {
                    padding: "10px",
                    backgroundPosition: "center 20px",
                    "background-color": "#22b573",
                    "-webkit-box-shadow": "inset 0 0 25px #0d6eab;",
                    "box-shadow": "inset 0 0 25px #0d6eab;",
                    width: "20%",
                    left: "40%",
                    borderRadius: "5px",
                    "border-radius": "5px",
                    border: "none",
                    fontSize: "16px"
                },
                overlayCSS: {backgroundColor: "gray", opacity: .5},
                centerY: true,
                centerX: true,
                message: '<div><div class="dialog-img"></div><div class="dialog-message" style="color: #ffffff">' + msg + "</div></div>",
                fadeIn: 0,
                fadeOut: 0
            });
            var target = $(".dialog-message").get(0);
            var spinner = (new Spinner(opts)).spin(target)
        }, hide: function () {
            $.unblockUI()
        }
    };
    return LoadingSpinner
});