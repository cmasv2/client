/*
Create: nqhuy2k6@gmail.com
03/01/2015
*/
;(function($,Canvas2Image) {
    var thePlot = null;
    var theClasses = null;
    function init(plot, classes) {
        thePlot = plot;
        theClasses = classes;
        plot.hooks.draw.push(drawControlTrending);
        plot.hooks.shutdown.push(shutdown)
    }

    function drawControlTrending(plot, canvascontext) {
        var options = plot.getOptions();
        var display = options.ControlTrending.display || "none";
        var control = "<div class='navigation-control' style='width: 0; height: 0; right: " + options.ControlTrending.position.right + "; top: " + options.ControlTrending.position.top + "; position: absolute; display: " + display + ";'>Control</div>";
        var buttonTemplate = "<div class='{0}' title='{0}' alt='{0}' style='box-sizing: border-box; position: absolute; left: {1}; top: {2}; height: 25px; width: 25px; border: solid 1px #666; padding: 0; line-height: 28px; border-radius: 5px; cursor: pointer; background-color: #f5f5f5; display: inline-block; text-align: center; -webkit-box-shadow: 0 0 4px rgba(0, 0, 0, 0.15); box-shadow: 0 0 4px rgba(0, 0, 0, 0.15); text-shadow: 1px 1px 5px rgba(100, 100, 100, 0.75);'><div><span class='icon' style='color: #666; vertical-align: baseline;{4}'>{3}</span></div></div>";
        var horizontalZoomin = buttonTemplate.format('zoom-in-horizontal', '0', '0', '&#x2194;', ' font-size: larger!important;');
        var zoomin = buttonTemplate.format('zoom-in', '29px', '0', '+', '');
        var verticalZoomin = buttonTemplate.format('zoom-in-vertical', '58px', '0', '&#x2195;', ' font-size: larger!important;');
        var home = buttonTemplate.format('zoom-home', '29px', '58px', '⌂', '');
        var horizontalZoomout = buttonTemplate.format('zoom-out-horizontal', '0', '116px', '&#x2194;', ' font-size: larger!important;');
        var zoomout = buttonTemplate.format('zoom-out', '29px', '116px', '-', '');
        var verticalZoomout = buttonTemplate.format('zoom-out-vertical', '58px', '116px', '&#x2195;', ' font-size: larger!important;');
        var panup = buttonTemplate.format('pan-up', '29px', '29px', '↑', '');
        var panright = buttonTemplate.format('pan-right', '58px', '58px', '→', '');
        var pandown = buttonTemplate.format('pan-down', '29px', '87px', '↓', '');
        var panleft = buttonTemplate.format('pan-left', '0', '58px', '←', '');
        var whitebox = "";
        var $placeholder = plot.getPlaceholder();
         if ($placeholder.find("ul.menu-bar").length <= 0) {
            var $menuBar = $(plot.getOptions().menu.menuHtml);
            if (!$menuBar.hasClass("menu-bar")) $menuBar.addClass("menu-bar");
            $menuBar.appendTo($placeholder);
            $menuBar.css({
                right: plot.getOptions().menu.position.right,
                top: plot.getOptions().menu.position.top
            });
            $("ul.menu-bar, ul.menu-bar ul").css({
                "list-style-type": "none",
                margin: "0",
                padding: "0",
                height: "auto",
                overflow: "visible",
                position: "absolute",
                "z-index": "100",
                color: "#666",
                width: "auto"
            });
            $("ul.menu-bar > li").css({
                float: "left",
                border: "solid 1px #666",
                "border-radius": "5px",
                "box-sizing": "border-box",
                height: "25px",
                "line-height": "25px",
                "margin-right": "3px",
                width: "25px",
                "margin-right": "1px",
                cursor: "pointer",
                "text-align": "center",
                "vertical-align": "middle",
                "text-shadow": "0 1px 1px rgba(100, 100, 100, 0.75)",
                "background-color": "#f5f5f5",
                "box-shadow": "0 0 4px rgba(0, 0, 0, 0.15)",
                "-webkit-box-shadow": "0 0 4px rgba(0, 0, 0, 0.15)",
                display: "inline-block"
            });
            $("ul.menu-bar li span.helper").css({
                display: "inline-block",
                height: "100%",
                "vertical-align": "middle",
                position: "relative"
            });
            $("ul.menu-bar ul").css({
                display: "none",
                width: "auto",
                "margin-top": "-1px"
            });
            $("ul.menu-bar ul li").css({
                border: "solid 1px black",
                "border-collapse": "collapse",
                display: "inline-block",
                width: "100%",
                "white-space": "nowrap",
                padding: "0 5px",
                "margin-top": "-1px",
                "background-color": "#f5f5f5",
                overflow: "visible",
                "text-align": "left"
            });
            $("ul.menu-bar").append("<li class='clearFloat'></li>");
            $("ul.menu-bar").on("mouseover", "li", function(e) {
                showSubMenus(this)
            }).on("mouseout", "li", function(e) {
                hideSubMenus(this)
            });
            $("ul.menu-bar li").each(function(index, li) {
                var handler = $(li).attr("handler");
                var event = $(li).attr("event");
                if (event && event != "" && handler && handler != "") {
                    $(li).bind(event, eval(handler))
                }
            });

            function showSubMenus(context) {
                var $subMenus = $(context).find("ul");
                $subMenus.show();
                $(context).css({
                    "background-color": "white",
                    color: "black"
                })
            }

            function hideSubMenus(context) {
                var $subMenus = $(context).find("ul");
                $subMenus.hide();
                $(context).css({
                    "background-color": "#f5f5f5",
                    color: "#666"
                })
            }

            function handleSubMenus(context) {
                var $subMenus = $(context).find("ul");
                if ($subMenus.is(":visible")) {
                    hideSubMenus(context)
                } else {
                    showSubMenus(context)
                }
            }
        }
        $placeholder.find(".navigation-control").remove();
        $(control).html(horizontalZoomin + zoomin + verticalZoomin + whitebox +
         panup + whitebox + panleft + home + panright + whitebox + pandown + whitebox +
          horizontalZoomout + zoomout + verticalZoomout).appendTo($placeholder);
        $placeholder.find(".zoom-in-horizontal").click(function() {
            zoomIn(plot, 'xaxis', 'yaxis')
        });
        $placeholder.find(".zoom-in").click(function() {
            zoomIn(plot)
        });
        $placeholder.find(".zoom-in-vertical").click(function() {
            zoomIn(plot, 'yaxis', 'xaxis',plot.getchannelsl())
        });
        $placeholder.find('.zoom-out-horizontal').click(function() {
            zoomOut(plot, 'xaxis', 'yaxis')
        });
        $placeholder.find(".zoom-out").click(function() {
            zoomOut(plot)
        });
        $placeholder.find('.zoom-out-vertical').click(function() {
            zoomOut(plot, 'yaxis', 'xaxis',plot.getchannelsl())
        });
        $placeholder.find(".zoom-home").click(function() {
            zoomHome(plot)
        });
        $placeholder.find(".pan-up").click(function() {
            panUp(plot)
        });
        $placeholder.find(".pan-right").click(function() {
            panRight(plot)
        });
        $placeholder.find(".pan-down").click(function() {
            panDown(plot)
        });
        $placeholder.find(".pan-left").click(function() {
            panLeft(plot)
        })
    }

    function shutdown(plot, eventHolder) {
        var $placeholder = plot.getPlaceholder();
        $placeholder.find(".zoom-in-horizontal").unbind("click");
        $placeholder.find(".zoom-in").unbind("click");
        $placeholder.find(".zoom-in-vertical").unbind("click");
        $placeholder.find('.zoom-out-horizontal').unbind('click');
        $placeholder.find(".zoom-out").unbind("click");
        $placeholder.find('.zoom-out-vertical').unbind('click');
        $placeholder.find(".zoom-home").unbind("click");
        $placeholder.find(".pan-up").unbind("click");
        $placeholder.find(".pan-right").unbind("click");
        $placeholder.find(".pan-down").unbind("click");
        $placeholder.find(".pan-left").unbind("click");
        var $menuBar = $placeholder.find("ul.menu-bar");
        if ($menuBar.length > 0) {
            $("ul.menu-bar li").each(function(index, li) {
                var handler = $(li).attr("handler");
                var event = $(li).attr("event");
                if (event && event != "" && handler && handler != "") {
                    $(li).unbind(event)
                }
            })
        }
        $menuBar.remove()
    }
    var m_originalRatioXY = false;

    function zoomIn(plot, zoomAxis, notZoomAxis,click) {
        var axes = plot.getAxes();
        var xaxis = axes.xaxis;
        var yaxis = axes.yaxis;
        var center = plot.p2c({
            x: (xaxis.min + xaxis.max) / 2,
            y: (yaxis.min + yaxis.max) / 2
        });
        var originalZoomRange = null;
        if (notZoomAxis) {
            originalZoomRange = plot.getAxes()[notZoomAxis].options.zoomRange;
            plot.getAxes()[notZoomAxis].options.zoomRange = false;
            if (plot.getOptions().coordinate && plot.getOptions().coordinate.ratioXY) {
                m_originalRatioXY = plot.getOptions().coordinate.ratioXY;
                plot.getOptions().coordinate.ratioXY = false
            }
        }
        if(!click)
            click = null;
        $.each(plot.getAxes(), function(_, axis) {
            axis.options.min = axis.min;
            axis.options.max = axis.max
        });
        plot.zoom({
            amount: options.ControlTrending.zoomAmount,
            center: center
        },click);
        if (notZoomAxis) {
            plot.getAxes()[notZoomAxis].options.zoomRange = originalZoomRange
        }
    }

    function zoomOut(plot, zoomAxis, notZoomAxis,click) {
        var axes = plot.getAxes();
        var xaxis = axes.xaxis;
        var yaxis = axes.yaxis;
        var center = plot.p2c({
            x: (xaxis.min + xaxis.max) / 2,
            y: (yaxis.min + yaxis.max) / 2
        });
        var originalZoomRange = null;
        if (notZoomAxis) {
            originalZoomRange = plot.getAxes()[notZoomAxis].options.zoomRange;
            plot.getAxes()[notZoomAxis].options.zoomRange = false;
            if (plot.getOptions().coordinate && plot.getOptions().coordinate.ratioXY) {
                m_originalRatioXY = plot.getOptions().coordinate.ratioXY;
                plot.getOptions().coordinate.ratioXY = false
            }
        }
        $.each(plot.getAxes(), function(_, axis) {
            axis.options.min = axis.min;
            axis.options.max = axis.max
        });
        if(!click)
            click = null;
        plot.zoomOut({
            amount: options.ControlTrending.zoomAmount,
            center: center
        },click);
        if (notZoomAxis) {
            plot.getAxes()[notZoomAxis].options.zoomRange = originalZoomRange
        }
    }

    function zoomHome(plot) {
        /*
        var options = plot.getOptions();
        var axes = plot.getAxes();
        var xaxis = axes.xaxis;
        var yaxis = axes.yaxis;
        xaxis.options.min = options.ControlTrending.homeRange.xmin;
        xaxis.options.max = options.ControlTrending.homeRange.xmax;
        yaxis.options.min = options.ControlTrending.homeRange.ymin;
        yaxis.options.max = options.ControlTrending.homeRange.ymax;
        if (plot.getOptions().coordinate && m_originalRatioXY) {
            plot.getOptions().coordinate.ratioXY = m_originalRatioXY
        }
        plot.setupGrid();
        plot.draw()*/
    }

    function panUp(plot) {
        plot.pan({
            top: options.ControlTrending.panAmount
        })
    }

    function panRight(plot) {
        plot.pan({
            left: -options.ControlTrending.panAmount
        })
    }

    function panDown(plot) {
        plot.pan({
            top: -options.ControlTrending.panAmount
        })
    }

    function panLeft(plot) {
        plot.pan({
            left: options.ControlTrending.panAmount
        })
    }
    function saveAsPng() {
        if (thePlot) {
            mergedCanvas = mergeCanvases(thePlot);
            Canvas2Image.saveAsPNG(mergedCanvas, false)
        }
        setTimeout(function() {
            deleteStaleCanvasImage(thePlot, mergedCanvas)
        }, 500)
    }

    function saveAsJpeg() {
        if (thePlot) {
            mergedCanvas = mergeCanvases(thePlot);
            Canvas2Image.saveAsJPEG(mergedCanvas, false)
        }
        setTimeout(function() {
            deleteStaleCanvasImage(thePlot, mergedCanvas)
        }, 500)
    }

    function saveAsBmp() {
        if (thePlot) {
            mergedCanvas = mergeCanvases(thePlot);
            Canvas2Image.saveAsBMP(mergedCanvas, false)
        }
        setTimeout(function() {
            deleteStaleCanvasImage(thePlot, mergedCanvas)
        }, 500)
    }

    function deleteStaleCanvasImage(plot, mergedCanvas) {
        if (!!mergedCanvas) {
            $(mergedCanvas).remove()
        }
        $(".mergedCanvas").remove()
    }

    function mergeCanvases(plot) {
        var theMergedCanvas = plot.getCanvas();
        if (!!theClasses) {
            theMergedCanvas = new theClasses.Canvas("mergedCanvas", plot.getPlaceholder());
            var mergedContext = theMergedCanvas.context;
            $(theMergedCanvas).css({
                visibility: "hidden",
                "z-index": "-100",
                position: "absolute"
            });
            var $canvases = $(plot.getPlaceholder()).find("canvas");
            $canvases.each(function(index, canvas) {
                mergedContext.drawImage(canvas, 0, 0)
            });
            return theMergedCanvas.element
        }
        return theMergedCanvas
    }

    function showNavigationControl() {
        if (thePlot) {
            $(thePlot.getPlaceholder()).find(".navigation-control").css({
                display: "block"
            });
            $.extend(true, thePlot.getOptions(), {
                ControlTrending: {
                    display: "block"
                }
            })
        }
    }

    function hideNavigationControl() {
        if (thePlot) {
            $(thePlot.getPlaceholder()).find(".navigation-control").css({
                display: "none"
            });
            $.extend(true, thePlot.getOptions(), {
                ControlTrending: {
                    display: "none"
                }
            })
            //thePlot.getOptions().ControlTrending = "none"
        }
    }

    function handleNavigationControl() {
        if (thePlot) {
            var display = $(thePlot.getPlaceholder()).find(".navigation-control").css("display")
        }
        if (display != "none") {
            hideNavigationControl()
        } else {
            showNavigationControl()
        }
    }

    function fullScreen() {
        if ($("#applicationHost").length > 0) {
            return true
        }
        var element = document.body;
        var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;
        var isInFullScreen = (document.fullScreenElement && document.fullScreenElement !== null) || (document.mozFullScreen || document.webkitIsFullScreen);
        if (isInFullScreen) {
            var exitFullScreen = document.exitFullscreen || document.mozCancelFullScreen || document.webkitCancelFullScreen;
            exitFullScreen.call(document)
        } else {
            if (requestMethod) {
                requestMethod.call(element)
            } else if (typeof window.ActiveXObject !== "undefined") {
                try {
                    var wscript = new ActiveXObject("WScript.Shell");
                    if (wscript !== null) {
                        wscript.SendKeys("{F11}")
                    }
                } catch (ex) {}
            }
        }
        return false
    }
    var options = {
        ControlTrending: {
            homeRange: {
                xmin: -10,
                xmax: 10,
                ymin: -10,
                ymax: 10
            },
            panAmount: 10,
            zoomAmount: 1.5,
            position: {
                right: "20px",
                top: "38px"
            }
        },
        menu: {
            position: {
                right: "46px",
                top: "10px"
            },
            menuHtml: "<ul class='menu-bar'><li title='{0}'><span class='helper'></span><span class='icon' style='font-size: larger'>&#xe001;</span><ul><li event='click' handler='saveAsPng'>{1}</li><li event='click' handler='saveAsJpeg'>{2}</li><li event='click' handler='saveAsBmp'>{3}</li></ul></li><li title='{4}' event='click' handler='handleNavigationControl'><span class='helper'></span><span class='icon' style='font-size: larger;'>m</span></li></ul>".format("Save as image...", "Save as PNG...", "Save as JPEG...", "Save as BMP...","Toggle navigation control")
        }
    };
    $.plot.plugins.push({
        init: init,
        options: options,
        name: 'ControlTrending',
        version: '1.0'
    })
})(jQuery,Canvas2Image)