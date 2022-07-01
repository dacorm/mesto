import { cardOpen } from './index.js'

export class Card {
    constructor(data, selector) {
        this._title = data.name;
        this._image = data.link;
        this._selector = selector;
    }

    _getElement() {
        const cardTemplate = document.querySelector(this._selector)
            .content
            .querySelector('.card__item')
            .cloneNode(true);


        return cardTemplate;
    }

    generateCard() {
        this._element = this._getElement();
        this._element.querySelector('.card__item-image').src = this._image;
        this._element.querySelector('.card__item-title').textContent = this._title;

        this._setEventListeners();

        return this._element;
    }

    _setEventListeners() {
        this._element.querySelector('.card__item-image').addEventListener('click', () => {
            this._handleImageClick();
        });

        this._element.querySelector('.card__item-like-button').addEventListener('click', () => {
            this._handleLikeCLick();
        });

        this._element.querySelector('.card__item-thrash').addEventListener('click', () => {
            this._handleDeleteClick();
        });
    }

    _handleImageClick() {
        cardOpen(this._title, this._image);
    }

    _handleLikeCLick() {
        this._element.querySelector('.card__item-like-button').classList.toggle('card__item-like-button_active');
    }

    _handleDeleteClick() {
        this._element.remove();
        this._element = null;
    }
}