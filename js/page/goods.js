'use strict';

window.page = window.page || {};
window.page.goods = (function() {
    let utils = window.utils;

    let elems = {
        menu: '.menu',
        cards: '.cards-menu'
    };
    elems = utils.applySelector(elems);

    let self = {
        init: init,
        show: show,
        hide: hide
    };

    function init(count) {
        elems.cards.textContent = '';
        for (let i = 0; i < count; i++) {
            createCard();
        }
    }

    function show() {
        elems.menu.classList.remove('hide');
    }

    function hide() {
        elems.menu.classList.add('hide');
    }

    function createCard() {
        const card = document.createElement('div');
        card.className = 'card';
        card.insertAdjacentHTML('beforeend', `
            <img src="img/pizza-plus/pizza-classic.jpg" alt="image" class="card-image"/>
            <div class="card-text">
                <div class="card-heading">
                    <h3 class="card-title card-title-reg">Пицца Классика</h3>
                </div>
                <div class="card-info">
                    <div class="ingredients">
                        Соус томатный, сыр «Моцарелла», сыр «Пармезан», ветчина, салями, грибы.
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
        elems.cards.insertAdjacentElement('beforeend', card);
    }

    return self;
}());
