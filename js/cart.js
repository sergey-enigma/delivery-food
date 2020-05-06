'use strict';

window.cart = (function() {
    let modal = window.modal;
    let utils = window.utils;

    let elems = {
        open: '#cart-button',
        close: '.close',
        modal: '.modal'
    };
    elems = utils.applySelector(elems);

    let self = {
        init: init
    };

    function init() {
        elems.open.addEventListener("click", modal.toggle(elems.modal));
        elems.close.addEventListener("click", modal.toggle(elems.modal));
    }

    return self;
}());
