'use strict';

(function() {
  let modal = window.modal;
  let auth = window.auth;

  const cartButton = document.querySelector("#cart-button");
  const modalCart = document.querySelector(".modal");
  const close = document.querySelector(".close");

  cartButton.addEventListener("click", modal.toggle(modalCart));
  close.addEventListener("click", modal.toggle(modalCart));

  let selectors = {
    loginButton: '.button-auth',
    logoutButton: '.button-out',
    userNameLabel: '.user-name',
    modalDialog: '.modal-auth',
    closeModalDialog: '.close-auth',
    authForm: '#logInForm',
    loginText: '#login',
    passwordText: '#password'
  };
  auth.init(selectors);
}());
