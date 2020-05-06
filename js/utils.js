'use strict';

window.utils = (function() {
    let utils = {
        applyFun: applyFunction
    };

    function applyFunction(obj, fun, context) {
        let res = {};
        Object.keys(obj).forEach(function(key) {
            res[key] = fun.call(context, obj[key]);
        });
        return res;
    }

    return utils;
}());
