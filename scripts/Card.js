export class Card {
    constructor(data, selector, openCard) {
        this._title = data.name;
        this._image = data.link;
        this._selector = selector;
        this._openCard = openCard;
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
        this._imageElement = this._element.querySelector('.card__item-image');
        this._imageElement.src = this._image;
        this._imageElement.alt = this._title;
        this._element.querySelector('.card__item-title').textContent = this._title;

        this._setEventListeners();

        return this._element;
    }

    _setEventListeners() {
        this._likeButton = this._element.querySelector('.card__item-like-button');
        this._element.querySelector('.card__item-image').addEventListener('click', () => {
            this._openCard(this._title, this._image);
        });

        this._likeButton.addEventListener('click', () => {
            this._handleLikeCLick();
        });

        this._element.querySelector('.card__item-thrash').addEventListener('click', () => {
            this._handleDeleteClick();
        });
    }


    _handleLikeCLick() {
        this._likeButton.classList.toggle('card__item-like-button_active');
    }

    _handleDeleteClick() {
        this._element.remove();
        this._element = null;
    }
}