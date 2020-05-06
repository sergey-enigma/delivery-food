'use strict';

window.page = window.page || {};
window.page.restaurants = (function() {
    let goods = window.page.goods;
    let utils = window.utils;
    let auth = window.auth;

    let elems = {
        logo: '.logo',
        cards: '.cards-restaurants',
        promo: '.container-promo',
        restaurants: '.restaurants'
    };
    elems = utils.applySelector(elems);

    let self = {
        init: init,
        show: show,
        hide: hide
    };

    function createCard() {
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
        elems.cards.insertAdjacentHTML('beforeend', card);
    }

    function init(count) {
        elems.cards.textContent = '';
        for (let i = 0; i < count; i++) {
            createCard();
        }

        elems.cards.addEventListener('click', openGoods);
        elems.logo.addEventListener('click', openRestaurants);
    }

    function show() {
        elems.promo.classList.remove('hide');
        elems.restaurants.classList.remove('hide');
    }

    function hide() {
        elems.promo.classList.add('hide');
        elems.restaurants.classList.add('hide');
    }

    function openGoods(event) {
        const restaurant = event.target.closest('.card-restaurant');
        if (restaurant) {
            if (auth.isAuthorized()) {
                self.hide();

                goods.init(3);
                goods.show();
            } else {
                auth.toggle();
            }
        }
    }

    function openRestaurants() {
        self.show();
        goods.hide();
    }

    return self;
}());
