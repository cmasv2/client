define(["durandal/app", "socket"], function (app, Io) {
    return function () {
        var Soc = this;
        
        var socket = new Io($(location).attr('host'));

        socket.ping = function () {
            var t = Date.now();
            socket.emit('ping');
            socket.once('ping-reply', function (data) {
                console.log((Date.now() - t) / 2 + "ms");
            });
        }
        socket.on('ping', function (data) {
            socket.emit('ping-reply', data);
        });
        socket.on('hand-shake', function (data) {
            socket.ping();
            socket.emit('feed-back', { key: 'Will be random key' });            
        });
        Soc.connected = function () {
            return socket.connected;
        }

        Soc.Lis = function (channelName, callBack) {
            socket.emit('listen', { object: "channel", key: channelName });
            socket.on("update-channel-" + channelName, callBack);
        };

        socket.on('update-alarm', function (data) {
            app.trigger('update-alarm', data);
        })
        
        return Soc;
    }
});