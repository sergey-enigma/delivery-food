'use strict';

window.auth = (function() {
    let modal = window.modal;
    let utils = window.utils;

    let self = {
        init: init,
        toggle: toggle
    };

    let elems = {};

    function logoutHandler() {
        login('');
    }

    function submitHandler(event) {
        event.preventDefault();
        if (login(elems.loginText.value.trim())) {
            elems.loginText.style.borderColor = '';
            modal.toggle(elems.modalDialog)();
        } else {
            elems.loginText.style.borderColor = 'red';
        }
    }

    function login(username) {
        if (username) {
            elems.userNameLabel.textContent = username;
            elems.loginText.value = '';

            elems.logoutButton.style.display = 'block';
            elems.loginButton.style.display = 'none';
        } else {
            elems.userNameLabel.textContent = '';
            elems.logoutButton.style.display = 'none';
            elems.loginButton.style.display = 'block';
        }
        localStorage.setItem('delivery-food.username', username);

        return username;
    }

    function toggle() {
        modal.toggle(elems.modalDialog)();
    }

    function init(selectors) {
        elems = utils.applySelector(selectors);

        elems.userNameLabel.style.display = 'inline-block';
        elems.loginButton.addEventListener('click', toggle);
        elems.closeModalDialog.addEventListener('click', toggle);
        elems.logoutButton.addEventListener('click', logoutHandler);
        elems.authForm.addEventListener('submit', submitHandler);

        login(localStorage.getItem('delivery-food.username') || '');
    }

    return self;
}());
