define(["plugins/http",'durandal/app'], function (http,app) {
    
    return function () {
        var apis = this;
        apis.key = 0;
        apis.access_token = function(){
            if(!apis.key) apis.key = localStorage.getItem('swagger_accessToken');
            return apis.key;
        }
        apis.login = function(a){
            return http.post("api/CMASUsers/login", a);
        }
        apis.Channels = function () {
            return http.get("api/Channels?filter[include][alarmWatcher]&access_token=" + apis.access_token());
        };
        apis.GetLocations = function(){
            return http.get("api/Locations?access_token=" + apis.access_token());
        }
        apis.GetLocationByParentID = function(parentID){
            return http.get("api/Locations?filter[where][parentID]=" + parentID + "&access_token=" + apis.access_token());
        }
        apis.getHistories = function(id,f,t){
		   return http.get(encodeURIComponent("api/ChannelHistories/" + id + "findByTimeRange?startDate=" + f + "&endDate=" + t + "&access_token=" + apis.access_token()));
		}
        apis.UnitByCode = function(code){
            return http.get("api/Locations?filter[where][code]=" + code + "&access_token=" + apis.access_token());
        }
        apis.channelsByUnitId = function(id){
            return http.get("api/Channels?filter[where][unitID]=" + id + "&filter[include][alarmWatcher]" + "&access_token=" + apis.access_token());
        }
        apis.saveAlarm = function(data){
            return http.post("api/AlarmWatchers" + "?access_token=" + apis.access_token(), data);
        }
        apis.updateAlarm = function(data,id){
            return http.put("api/AlarmWatchers/" + id + "?access_token=" + apis.access_token(), data);
            // dung push return http.push()
        }
        apis.getAlarmByChannelId = function(code){
            return http.get("api/AlarmWatchers?filter[where][channelID]=" + code + "&access_token=" + apis.access_token());
        }
        apis.saveControl = function(channel){
            return http.put("api/ChannelData/" + parseInt(channel.id) + "?access_token=" + apis.access_token(), {"value": channel.value});
        }
        apis.GetLocationsToArray = function(){
            var items = [];
            apis.GetLocations().then(function(r){
                $.each(r, function (i, item) {
                    items.push(item);
                });
            },function (e){app.showMessage("Url: api/Locations?access_token=" + apis.access_token()+'<br/>'+ e.responseText, 'Error', ['Yes']);});
            return items;
        }
        apis.channelsByUnit = function(id){
            var items = [];
            apis.UnitByCode(id).then(function(response){
                $.each(response, function (i, item) {
                    apis.channelsByUnitId(item.id).then(function(response){
                        $.each(response, function (i, item) {
                            var temp = [];
                            temp.name = getval(item.displayName);
                            temp.code = item.name;
                            temp.typec = getval(item.type);/* Analogue ,Digital(0,1)*/
                            temp.controllable = parseInt(item.controllable);
                            temp.description = getval(item.description);
                            temp.unit = getval(item.unit);
                            temp.id = item.id;
                            temp.sub = 0;
                            items.push(temp);
                        });
                    });
                });
            });
            return [{name: "channels",id: 0,sub: items}];
        }
        apis.channelsByIdUnit = function(id){
            var items = [];
             apis.channelsByUnitId(id).then(function(response){
                $.each(response, function (i, item) {
                    var temp = [];
                    temp.name = getval(item.displayName);
                    temp.code = item.name;
                    temp.typec = getval(item.type);/* Analogue ,Digital(0,1)*/
                    temp.controllable = parseInt(item.controllable);
                    temp.description = getval(item.description);
                    temp.unit = getval(item.unit);
                    temp.id = item.id;
                    temp.sub = 0;
                    items.push(temp);
                });
            },
            function (e){app.showMessage('Url: api/Channels?filter[where][unitID]=' + id +'&filter[include][alarmWatcher]'+ "&access_token=" + localStorage.getItem('swagger_accessToken') +'<br/>'+ e.responseText, 'Error', ['Yes']);});
            return [{name: "channels",id: 0,sub: items}];
        }
        apis.ChannelsAll = function(){
            var items = [];
            apis.Channels().then(function (response) {
                $.each(response, function (i, item) {
                    var temp = [];
                    temp.id = item.id;
                    temp.name = getval(item.displayName);
                    temp.code = item.name;
                    temp.unitID = item.unitID;
                    temp.type = getval(item.type);/* Analogue ,Digital(0,1)*/
                    temp.controllable = item.controllable;
                    temp.description = getval(item.description);
                    temp.unit = getval(item.unit);
                    temp.sub = 0;
                    temp.alarmWatcher = item.alarmWatcher;
                    items.push(temp);
                });
            });
            return items;
        }
        apis.getsub = function(parent, url) {
            var items = [];
            apis.GetLocationByParentID(parent).then(function (response) {
                $.each(response, function (i, item) {
                    var temp = [];
                    temp.name = item.name;// + ': ' + item.code;
                    temp.id = item.id;
                    temp.code = item.code;
                    var _url = '';
                    if (parent)
                        _url = url + '/' + this.code;
                    temp.url = _url;
                    temp.sub = apis.getsub(item.id, _url);
                    items.push(temp);
                });
            },
             function (e){app.showMessage('Url: api/Locations?filter[where][parentID]=' + parent + "&access_token=" + localStorage.getItem('swagger_accessToken') +'<br/>'+ e.responseText, 'Error', ['Yes']);}
             );
            return items;
        }
        apis.getsub1 = function(parent,url) {
            var items = [];
            apis.GetLocationByParentID(parent).then(function (response) {
                $.each(response, function (i, item) {
                var logo = '',_url = '',open = item.open;
                if(item.logo != '')
                    logo = "/images/icon/"+item.logo;
                if (parent)
                    _url = url + '/' + item.code;
                else
                    open = 1;
                var temp = {
                   "text" : item.name,
                   "code" : item.code,
                   "id" : item.id,
                   "state" : { "selected" : 0 ,"opened" : open},
                   "icon" : logo,
                   "url": _url,
                   "children" : apis.getsub1(item.id,_url)};
                    items.push(temp);
                });
            },
            function (e){app.showMessage('Url: api/Locations?filter[where][parentID]=' + parent + "&access_token=" + localStorage.getItem('swagger_accessToken') + '<br/>'+ e.responseText, 'Error', ['Yes']);}
            );
            return items;
        }
        apis.getDataByTimeRange = function (channelName, from, to) {
           return 1;
        };
        function getval(val){
            return val?val:'NaN';
        }
    };
});