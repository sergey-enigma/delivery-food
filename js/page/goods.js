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

    function init(list) {
        elems.cards.textContent = '';
        list.forEach(createCard);
    }

    function show() {
        elems.menu.classList.remove('hide');
    }

    function hide() {
        elems.menu.classList.add('hide');
    }

    function createCard(obj) {
        const { id, name, description, image, price } = obj;

        const card = document.createElement('div');
        card.id = id;
        card.className = 'card';
        card.insertAdjacentHTML('beforeend', `
            <img src="${image}" alt="image" class="card-image"/>
            <div class="card-text">
                <div class="card-heading">
                    <h3 class="card-title card-title-reg">${name}</h3>
                </div>
                <div class="card-info">
                    <div class="ingredients">${description}</div>
                </div>
                <div class="card-buttons">
                    <button class="button button-primary button-add-cart">
                        <span class="button-card-text">В корзину</span>
                        <span class="button-cart-svg"></span>
                    </button>
                    <strong class="card-price-bold">${price} ₽</strong>
                </div>
            </div>
        `);
        elems.cards.insertAdjacentElement('beforeend', card);
    }

    return self;
}());
