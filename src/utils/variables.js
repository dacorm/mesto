export const popupProfileOpenButton = document.querySelector('.profile__edit-button');
export const popupProfileCloseButton = document.querySelector('#edit_close');
export const popupProfile = document.querySelector('#popup_profile');
export const formProfileElement = document.querySelector('#profile_form');
export const nameInput = document.querySelector('#fullName');
export const jobInput = document.querySelector('#workplace');
export const profileName = document.querySelector('.profile__name');
export const profileJob = document.querySelector('.profile__workplace');
export const profileAvatar = document.querySelector('.profile__avatar');
export const placeInput = document.querySelector('#name');
export const popupConfirm = document.querySelector('#popup_confirm');
export const popupAvatar = document.querySelector('#popup_avatar');
export const placeImageInput = document.querySelector('#link');
export const placeForm = document.querySelector('#place_form');
export const placeAddButton = document.querySelector('.profile__add-button');
export const popupPlace = document.querySelector('#popup_place');
export const popupPlaceCloseButton = document.querySelector('#place_close');
export const cardItems = document.querySelector('.card__items');
export const imageCloseButton = document.querySelector('#image_close');
export const popupImage = document.querySelector('#popup_image');
export const popupImageSrc = document.querySelector('.popup__image');
export const popupImageTitle = document.querySelector('.popup__image-description');
export const popupOverlays = document.querySelectorAll('.popup');
export const placeSubmitBtn = placeForm.querySelector('.popup__save-button');
export const profileSubmitBtn = formProfileElement.querySelector('.popup__save-button');
export const avatarButton = document.querySelector('.profile__avatar')
export const avatarForm = document.querySelector('#avatar_form');


export let cardFullItem = '';
export const validation = {
    formSelector: '.popup__form',
    inputSelector: '.form__input',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'form__input-error_active',
    inactiveBtn: 'popup__save-button_disabled',
    buttonSelector: '.popup__save-button',
    avatarSelector: '.profile__avatar-image',
};
export const initialCards = [
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
