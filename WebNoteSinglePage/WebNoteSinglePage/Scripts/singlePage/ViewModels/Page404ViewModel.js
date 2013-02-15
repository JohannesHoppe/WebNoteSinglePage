define(['jquery',
        'knockout.mapping',
        'singlePage/appState'], function () {

    var loadModel = function (activeParam, callback) {

        var model = {};
        callback.call(model);
    };

    return { loadModel: loadModel };
});
