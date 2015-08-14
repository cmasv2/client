define(['durandal/app', "knockout", "knockback", "../collections/alarm-watcher-collection", "moment"],
    function (app, ko, kb, AlarmWatcherCollection, Moment) {
    return function () {
        var alarmCollection = new AlarmWatcherCollection();
        var me = this,buff = app.buff;
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
		function Alarmtoggle() {
           jQuery(".panel-body").toggle("blind");
		   jQuery(".i-icon").toggleClass("fa-chevron-circle-down");
        }
        me.Moment = Moment;
        me.AlarmAck = AlarmAck;
        me.FilterAlarmLast7days = FilterAlarmLast7days;
        me.FilterAlarmYesterday = FilterAlarmYesterday;
        me.FilterAlarmToday = FilterAlarmToday;
		me.Alarmtoggle = Alarmtoggle;
        me.channelname = function (c){
            var a = buff.find(buff.getByKey('ChannelsAll'), 'id', c);
            return a[0].name != undefined?a[0].name:"NaN";
        };
        alarmCollection.fetch();
        me.dataComponent = kb.collectionObservable(alarmCollection);

        app.on('update-alarm', function (data) {
            alarmCollection.fetch();
            //console.log(Moment(data.alarmAt).format());
        });
    };
}
);
