Object.assign(app, (function (actionTypes) {
    var actions = {
        roll: function () {
            return {
                type: actionTypes.ROLL
            }
        },

        addPlayer: function () {
            return {
                type: actionTypes.ADD_PLAYER
            }
        }
    };

    return {
        actions: actions
    };

})(app.actionTypes));
