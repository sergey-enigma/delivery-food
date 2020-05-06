'use strict';

(function() {
  let modal = window.modal;
  let auth = window.auth;

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

  const cartButton = document.querySelector("#cart-button");
  const modalCart = document.querySelector(".modal");
  const close = document.querySelector(".close");

  const cardsRestaurants = document.querySelector('.cards-restaurants');
  const containerPromo = document.querySelector('.container-promo');
  const restaurants = document.querySelector('.restaurants');
  const menu = document.querySelector('.menu');
  const logo = document.querySelector('.logo');
  const cardsMenu = document.querySelector('.cards-menu');

  function createCardRestaurant() {
    const card = `
        <a class="card card-restaurant">
          <img src="img/pizza-plus/preview.jpg" alt="image" class="card-image"/>
					<div class="card-text">
						<div class="card-heading">
							<h3 class="card-title">Пицца плюс</h3>
							<span class="card-tag tag">50 мин</span>
						</div>
						<div class="card-info">
							<div class="rating">
								4.5
							</div>
							<div class="price">От 900 ₽</div>
							<div class="category">Пицца</div>
						</div>
					</div>
				</a>
    `;

    cardsRestaurants.insertAdjacentHTML('beforeend', card);
  }

  function openGoods(event) {
    const target = event.target;
    const restaurant = target.closest('.card-restaurant');

    if (restaurant) {
      cardsMenu.textContent = '';

      containerPromo.classList.add('hide');
      restaurants.classList.add('hide');
      menu.classList.remove('hide');

      createCardGood();
      createCardGood();
      createCardGood();
    }
  }

  function createCardGood() {
    const card = document.createElement('div');
    card.className = 'card';
    card.insertAdjacentHTML('beforeend', `
      <img src="img/pizza-plus/pizza-classic.jpg" alt="image" class="card-image"/>
      <div class="card-text">
        <div class="card-heading">
					<h3 class="card-title card-title-reg">Пицца Классика</h3>
				</div>
				<div class="card-info">
					<div class="ingredients">Соус томатный, сыр «Моцарелла», сыр «Пармезан», ветчина, салями,
						грибы.
					</div>
				</div>
				<div class="card-buttons">
					<button class="button button-primary button-add-cart">
						<span class="button-card-text">В корзину</span>
						<span class="button-cart-svg"></span>
					</button>
					<strong class="card-price-bold">510 ₽</strong>
				</div>
			</div>
    `);
    cardsMenu.insertAdjacentElement('beforeend', card);
  }


  cartButton.addEventListener("click", modal.toggle(modalCart));
  close.addEventListener("click", modal.toggle(modalCart));

  cardsRestaurants.addEventListener('click', openGoods);
  logo.addEventListener('click', function() {
    containerPromo.classList.remove('hide');
    restaurants.classList.remove('hide');
    menu.classList.add('hide');
  });

  createCardRestaurant();
  createCardRestaurant();
  createCardRestaurant();
}());
