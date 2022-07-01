import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

const popupProfileOpenButton = document.querySelector('.profile__edit-button');
const popupProfileCloseButton = document.querySelector('#edit_close');
const popupProfile = document.querySelector('#popup_profile');
const formProfileElement = document.querySelector('#profile_form');
const nameInput = document.querySelector('#name');
const jobInput = document.querySelector('#workplace');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__workplace');
const placeInput = document.querySelector('#newplace');
const placeImageInput = document.querySelector('#placelink');
const placeForm = document.querySelector('#place_form');
const placeAddButton = document.querySelector('.profile__add-button');
const popupPlace = document.querySelector('#popup_place');
const popupPlaceCloseButton = document.querySelector('#place_close');
const cardItems = document.querySelector('.card__items');
const imageCloseButton = document.querySelector('#image_close');
const popupImage = document.querySelector('#popup_image');
const popupImageSrc = document.querySelector('.popup__image');
const popupImageTitle = document.querySelector('.popup__image-description');
const popupOverlays = document.querySelectorAll('.popup');
const placeSubmitBtn = placeForm.querySelector('.popup__save-button');
const profileSubmitBtn = formProfileElement.querySelector('.popup__save-button');

let cardFullItem = '';
export const validation = {
    formSelector: '.popup__form',
    inputSelector: '.form__input',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'form__input-error_active',
    inactiveBtn: 'popup__save-button_disabled',
    buttonSelector: '.popup__save-button',
};
const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];


initialCards.forEach((item) => {
    const cardItem = createCard(item);
    cardItems.prepend(cardItem);
})

function createCard(data) {
    const card = new Card(data, '#card', openCard);

    const cardElement = card.generateCard();

    return cardElement;
}

function renderCard(card, container) {
    container.prepend(card);
}


function openCard(title, src) {
    openPopup(popupImage);
    popupImageSrc.src = src;
    popupImageTitle.textContent = title;
    popupImageSrc.alt = title;
}

export function openPopup(element) {
    element.classList.add('popup_active');
    document.addEventListener('keydown', closePopupWithEsc);
}

function renderProfilePopupInputs() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}

function closePopup(element) {
    element.classList.remove('popup_active');
    document.removeEventListener('keydown', closePopupWithEsc);
}


function submitProfileForm(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(popupProfile);
}

function renderPlacePopupInputs() {
    placeInput.value = '';
    placeImageInput.value = '';
}

function submitPlaceForm(evt) {
    evt.preventDefault();
    const cardData = {
        name: placeInput.value,
        link: placeImageInput.value,
    };

    const cardItem = createCard(cardData);
    renderCard(cardItem, cardItems);
    addFormValidation.hideAllErrors();
    closePopup(popupPlace);
}

const closePopupWithEsc = (evt) => {
    if (evt.key === 'Escape') {
        closePopup(document.querySelector('.popup_active'))
    }
}

popupProfileOpenButton.addEventListener('click', () => {
    openPopup(popupProfile);
    renderProfilePopupInputs();
    editFormValidation.hideAllErrors();
});
popupProfileCloseButton.addEventListener('click', () => {
    closePopup(popupProfile)
});
popupPlaceCloseButton.addEventListener('click', () => {
    closePopup(popupPlace)
});
placeAddButton.addEventListener('click', () => {
    openPopup(popupPlace);
    renderPlacePopupInputs();
    addFormValidation.hideAllErrors();
});
imageCloseButton.addEventListener('click', () => {
    closePopup(popupImage);
})
formProfileElement.addEventListener('submit', submitProfileForm);
placeForm.addEventListener('submit', submitPlaceForm);
popupOverlays.forEach((popupEl) => popupEl.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_active')) {
        closePopup(evt.target);
    }
}))

const editFormValidation = new FormValidator(formProfileElement, validation);
editFormValidation.enableValidaton();
const addFormValidation = new FormValidator(placeForm, validation);
addFormValidation.enableValidaton();