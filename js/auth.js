'use strict';

window.auth = (function() {
    let modal = window.modal;
    let utils = window.utils;
    let auth = {
        init: init
    };

    let authElements;

    function logoutHandler() {
        login('');
    }

    function submitHandler(event) {
        event.preventDefault();
        if (login(authElements.loginText.value.trim())) {
            authElements.loginText.style.borderColor = '';
            modal.toggle(authElements.modalDialog)();
        } else {
            authElements.loginText.style.borderColor = 'red';
        }
    }

    function login(username) {
        if (username) {
            authElements.userNameLabel.textContent = username;
            authElements.loginText.value = '';

            authElements.logoutButton.style.display = 'block';
            authElements.loginButton.style.display = 'none';
        } else {
            authElements.userNameLabel.textContent = '';
            authElements.logoutButton.style.display = 'none';
            authElements.loginButton.style.display = 'block';
        }
        localStorage.setItem('delivery-food.username', username);

        return username;
    }

    function init(selectors) {
        authElements = utils.applyFun(selectors, document.querySelector, document);

        authElements.userNameLabel.style.display = 'inline-block';
        authElements.loginButton.addEventListener('click', modal.toggle(authElements.modalDialog));
        authElements.closeModalDialog.addEventListener('click', modal.toggle(authElements.modalDialog));
        authElements.logoutButton.addEventListener('click', logoutHandler);
        authElements.authForm.addEventListener('submit', submitHandler);

        login(localStorage.getItem('delivery-food.username') || '');
    }

    return auth;
}());
