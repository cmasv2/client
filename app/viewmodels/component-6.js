define(['durandal/app', "knockout", "knockback", "../collections/alarm-watcher-collection", "moment"],
    function (app, ko, kb, AlarmWatcherCollection, Moment) {
    return function () {
        var alarmCollection = new AlarmWatcherCollection();
        var me = this;
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
        alarmCollection.fetch();
        me.dataComponent = kb.collectionObservable(alarmCollection);

        app.on('update-alarm', function (data) {
            alarmCollection.fetch();
            //console.log(Moment(data.alarmAt).format());
        });
    };
}
);
