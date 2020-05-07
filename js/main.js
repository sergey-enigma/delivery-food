'use strict';

(function() {
  let utils = window.utils;
  let auth = window.auth;
  let cart = window.cart;
  let restaurants = window.page.restaurants;

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
  cart.init();

  utils.getData('db/partners.json')
    .then(restaurants.init);
}());
