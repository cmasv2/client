define(["blockUI", "spinner"], function(blockUI, Spinner){
    var LoadingSpinner = {
        blockElement: function(el, msg) {
            var options = {
                css: {
                    backgroundPosition: 'center 20px',
                    background: "linear-gradient(#1086d1, #0e77b9)",
                    "background-color": "#0e77b9",
                    filter: 'progid:DXImageTransform.Microsoft.Gradient(startColorStr="#1086d1", endColorStr="#0e77b9")',
                    "-webkit-box-shadow": "inset 0 0 25px #0d6eab;",
                    "box-shadow": "inset 0 0 25px #0d6eab;",
                    left: '40%',
                    border: 'none',
                    fontSize: '16px'
                },
                overlayCSS: {
                    backgroundColor: 'gray',
                    opacity: 0.5
                },
                centerY: true,
                centerX: true,
                message: '<div><div class="dialog-message" style="font-size:14px; padding:10px;">' + msg + '</div></div>',
                fadeIn: 0,
                fadeOut: 0
            };
            el.block(options);
        },
        unblockElement: function(el) {
            el.unblock();
        },
        show: function (msg) {
            var opts = {
                lines: 12, // The number of lines to draw
                length: 5, // The length of each line
                width: 4, // The line thickness
                radius: 8, // The radius of the inner circle
                corners: 1, // Corner roundness (0..1)
                rotate: 0, // The rotation offset
                direction: 1, // 1: clockwise, -1: counterclockwise
                color: '#fff', // #rgb or #rrggbb or array of colors
                speed: 1.5, // Rounds per second
                trail: 60, // Afterglow percentage
                shadow: false, // Whether to render a shadow
                hwaccel: false, // Whether to use hardware acceleration
                className: 'spinner', // The CSS class to assign to the spinner
                zIndex: 99999, // The z-index (defaults to 2000000000)
                top: 'auto', // Top position relative to parent in px
                left: 'auto' // Left position relative to parent in px
            };
            $.blockUI({
                css: {
                    padding : '10px',
                    backgroundPosition: 'center 20px',
                    "background-color": "#22b573",
                    "-webkit-box-shadow": "inset 0 0 25px #0d6eab;",
                    "box-shadow": "inset 0 0 25px #0d6eab;",
                    width: '20%',
                    left: '40%',
                    borderRadius: '5px',
                    "border-radius": '5px',
                    border: 'none',
                    fontSize: '16px'
                },
                overlayCSS: {
                    backgroundColor: 'gray',
                    opacity: 0.5
                },
                centerY: true,
                centerX: true,
                message: '<div><div class="dialog-img"></div><div class="dialog-message" style="color: #ffffff">' + msg + '</div></div>',
                fadeIn: 0,
                fadeOut: 0
            });

            var target = $('.dialog-message').get(0);
            var spinner = new Spinner(opts).spin(target);
        },
        hide: function () {
            $.unblockUI();
        }
    }
    return LoadingSpinner;
});
