'use strict';

window.modal = (function() {
    let modal = {
        toggle: toggleModal
    };

    function toggleModal(elem) {
        return function() {
            elem.classList.toggle("is-open");
        }
    }

    return modal;
}());
