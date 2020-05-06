'use strict';

window.utils = (function() {
    let self = {
        applyFunction: applyFunction,
        applySelector: applySelector
    };

    function applyFunction(obj, fun, context) {
        let res = {};
        Object.keys(obj).forEach(function(key) {
            res[key] = fun.call(context, obj[key]);
        });
        return res;
    }

    function applySelector(obj) {
        return self.applyFunction(obj, document.querySelector, document);
    }

    return self;
}());
