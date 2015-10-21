/**
 Create by Huy: codocmm@gmail.com ~ nqhuy2k6@gmail.com
 07/31/2015
 */
define(['durandal/app', "knockout", "knockback", "../collections/alarm-watcher-collection", "moment", "jquery", "../../lib/tablesorter/jquery.tablesorter", "../../lib/tablesorter/jquery.tablesorter.widgets", "css!../../lib/tablesorter/custom.css"],
    function (app, ko, kb, AlarmWatcherCollection, Moment, $) {
        return function (heighth) {
            var alarmCollection = new AlarmWatcherCollection();
            var me = this, buff = app.buff;

            function AlarmAck(alarmViewModel) {
                alarmViewModel.model().acknowledge();
            }

            function FilterAlarmLast7days() {
                alert("Alarm Last 7 days");
            }

            function FilterAlarmYesterday() {
                alert("Alarm Yesterday");
            }

            function FilterAlarmToday() {
                alert("Alarm Today");
            }

            me.Moment = Moment;
            me.AlarmAck = AlarmAck;
            me.FilterAlarmLast7days = FilterAlarmLast7days;
            me.FilterAlarmYesterday = FilterAlarmYesterday;
            me.FilterAlarmToday = FilterAlarmToday;
            me.channelname = function (c,msg) {
                var a = buff.find(buff.getByKey('ChannelsAll'), 'id', c);
                if(a[0] != undefined)
                {
                    if(a[0].name != undefined ){
                        var up = buff.find(buff.getByKey("LocationAll"), "id", a[0].unitID);
                        if(up[0].name){
                            var up1 = buff.find(buff.getByKey("LocationAll"), "id", up[0].parentID);
                            return "<a href='#page/detail/" + up1[0].code + "/" + up[0].code + "/" + a[0].code + "' title='" + up[0].name + "' alt='" + up[0].name + "' >" + msg.alarm + "</a>";
                        }
                        return a[0].name
                    }
                    else
                        return "NaN";
                }
            };
            me.colorAlarm = function (c) {
                /*
                 'inactive','active','acknowledge','reset'
                 */
                switch (c.status()) {
                    case "active":
                    case "reset":
                        switch (c.type()) {
                            case "Critical":
                                return "AlarmRedBink";
                                break;
                            case "Warning":
                                return "AlarmYellowBink";
                                break;
                            case "Advisory":
                                return "AlarmBrownBink";
                                break;
                            default:
                                return "AlarmBlueBink";
                                break;
                        }
                        break;
                    case "acknowledge":
                        switch (c.type()) {
                            case "Critical":
                                return "AlarmRed";
                                break;
                            case "Warning":
                                return "AlarmYellow";
                                break;
                            case "Advisory":
                                return "AlarmBrown";
                                break;
                            default:
                                return "AlarmBlue";
                                break;
                        }
                        break;
                    default:
                        return "Coldefault";
                }
            };
            alarmCollection.fetch();
            me.cf = kb.collectionObservable(alarmCollection);
            me.cf.comparator(
                function(a, b){
                    var map = {'active':1,'reset':2,'acknowledge':3,'inactive':4};
                    if (map[a.status()] > map[b.status()]) {
                        return 1;
                    }
                    if (map[a.status()] < map[b.status()]) {
                        return -1;
                    }return 0;
                }
            );
			ko.bindingHandlers.sortTable = {
				init: function(element, valueAccessor) {
					setTimeout( function() {
						$(element).addClass('tablesorter');
						$(element).tablesorter({
							widgets: ['zebra', 'filter'],
							widgetOptions : {
								  // If there are child rows in the table (rows with class name from "cssChildRow" option)
								  // and this option is true and a match is found anywhere in the child row, then it will make that row
								  // visible; default is false
								  filter_childRows : false,

								  // extra css class name(s) applied to the table row containing the filters & the inputs within that row
								  // this option can either be a string (class applied to all filters) or an array (class applied to indexed filter)
								  filter_cssFilter : 'tablesorter-filter', // or []

								  // Set this option to false to make the searches case sensitive
								  filter_ignoreCase : true,

								  // if true, search column content while the user types (with a delay)
								  filter_liveSearch : true,

								  // Delay in milliseconds before the filter widget starts searching; This option prevents searching for
								  // every character while typing and should make searching large tables faster.
								  filter_searchDelay : 300,

								  // Set this option to true to use the filter to find text from the start of the column
								  // So typing in "a" will find "albert" but not "frank", both have a's; default is false
								  filter_startsWith : false
								}
						});
					}, 0);
				}
			};
            //me.cf.sortAttribute('lastUpdated');
            //console.log(me.cf());
            me.heighth = heighth != undefined ? heighth : 0;
            app.on('update-alarm', function (data) {
                alarmCollection.fetch();
                //console.log(Moment(data.alarmAt).format());
            });
        };
    }
);
