var main = main || {};
main.lib = {};

main.lib.events = (function () {

    var topics = {};
    var subUid = -1;
    var events = {};

    events.emit = function (topic, args) {

        if (!topics[topic]) {
            return false;
        }

        var subscribers = topics[topic];
        var len = subscribers ? subscribers.length : 0;

        while (len--) {
            subscribers[len].func(args);
        }

        return this;
    };

    events.on = function (topic, func) {

        if (!topics[topic]) {
            topics[topic] = [];
        }

        var token = ( ++subUid ).toString();
        topics[topic].push({
            token: token,
            func: func
        });
        return token;
    };

    events.off = function (token) {
        for (var m in topics) {
            if (topics[m]) {
                for (var i = 0, j = topics[m].length; i < j; i++) {
                    if (topics[m][i].token === token) {
                        topics[m].splice(i, 1);
                        return token;
                    }
                }
            }
        }
        return this;
    };

    return events;
}());

