define(["durandal/app", "socket", "jquery"], function (app, Io, $) {
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
            $('#errorcmasld').hide();
            socket.emit('ping-reply', data);
        });
        socket.on('hand-shake', function (data) {
            socket.ping();
            socket.emit('feed-back', {key: 'Will be random key'});
        });
        Soc.connected = function () {
            return socket.connected;
        }

        Soc.Lis = function (channelName, callBack) {
            if (Soc.connected()) {
                socket.emit('listen', {object: "channel", key: channelName});
                socket.on("update-channel-" + channelName, callBack);
            }
            else {
                app.showMessage("Socket connect failed", 'Error', ['Yes']);
            }
        };
        socket.on('update-alarm', function (data) {
            app.trigger('update-alarm', data);
        })
        socket.on('error', function (data) {
            $('#errorcmasld').show();
            $("#errorcmasmsg").text("Socket error");
            console.log(data || 'error');
        });

        socket.on('connect_failed', function (data) {
            $('#errorcmasld').show();
            $("#errorcmasmsg").text("Socket connect failed");
            console.log(data || 'connect_failed');
        });

        return Soc;
    }
});