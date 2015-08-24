/**
 Create by Huy: codocmm@gmail.com ~ nqhuy2k6@gmail.com
 07/31/2015
 */
define(["durandal/app", "knockout", "knockback", "../collections/alarm-watcher-collection", "moment"], function (app, ko, kb, AlarmWatcherCollection, Moment) {
    return function (heighth) {
        var alarmCollection = new AlarmWatcherCollection;
        var me = this, buff = app.buff;

        function AlarmAck(alarmViewModel) {
            alarmViewModel.model().acknowledge()
        }

        function FilterAlarmLast7days() {
            alert("Alarm Last 7 days")
        }

        function FilterAlarmYesterday() {
            alert("Alarm Yesterday")
        }

        function FilterAlarmToday() {
            alert("Alarm Today")
        }

        me.Moment = Moment;
        me.AlarmAck = AlarmAck;
        me.FilterAlarmLast7days = FilterAlarmLast7days;
        me.FilterAlarmYesterday = FilterAlarmYesterday;
        me.FilterAlarmToday = FilterAlarmToday;
        me.channelname = function (c, msg) {
            var a = buff.find(buff.getByKey("ChannelsAll"), "id", c);
            if (a[0].name != undefined) {
                var up = buff.find(buff.getByKey("LocationAll"), "id", a[0].unitID);
                if (up[0].name) {
                    var up1 = buff.find(buff.getByKey("LocationAll"), "id", up[0].parentID);
                    return "<a href='#page/detail/" + up1[0].code + "/" + up[0].code + "/" + a[0].code + "' title='" + up[0].name + "' alt='" + up[0].name + "' >" + msg.alarm + "</a>"
                }
                return a[0].name
            } else return "NaN"
        };
        me.colorAlarm = function (c) {
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
                            break
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
                            break
                    }
                    break;
                default:
                    return "Coldefault"
            }
        };
        alarmCollection.fetch();
        me.cf = kb.collectionObservable(alarmCollection);
        me.cf.comparator(function (a, b) {
            var map = {"active": 1, "reset": 2, "acknowledge": 3, "inactive": 4};
            if (map[a.status()] > map[b.status()])return 1;
            if (map[a.status()] < map[b.status()])return -1;
            return 0
        });
        me.heighth = heighth != undefined ? heighth : 0;
        app.on("update-alarm", function (data) {
            alarmCollection.fetch()
        })
    }
});
