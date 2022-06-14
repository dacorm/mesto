const popupProfileOpenButton = document.querySelector('.profile__edit-button');
const popupProfileCloseButton = document.querySelector('#edit_close');
const popupProfile = document.querySelector('#popup_profile');
const formProfileElement = document.querySelector('#profile_form');
const nameInput = document.querySelector('#name');
const jobInput = document.querySelector('#workplace');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__workplace');
const placeInput = document.querySelector('#new_place');
const placeImageInput = document.querySelector('#place_link');
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
let cardFullItem = '';
const validation = {
    formSelector: '.popup__form',
    inputSelector: '.form__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_disabled',
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

for (let i = 0; i < initialCards.length; i++) {
    cardFullItem = fillCard(initialCards[i].name, initialCards[i].link);
    renderCard(cardFullItem, cardItems);
}

function fillCard(title, src) {
    const cardTemplate = document.querySelector('#card').content;
    const card = cardTemplate.querySelector('.card__item').cloneNode(true);
    const cardImage = card.querySelector('.card__item-image')
    cardImage.src = src;
    cardImage.alt = title;
    card.querySelector('.card__item-title').textContent = title;
    card.querySelector('.card__item-image').addEventListener('click', () => {
        cardOpen(title, src);
    });
    card.querySelector('.card__item-like-button').addEventListener('click', likeCard);
    card.querySelector('.card__item-thrash').addEventListener('click', removeCard);
    return card;
}

function renderCard(card, container) {
    container.prepend(card);
}

function likeCard(event) {
    const evtTarget = event.target;
    evtTarget.classList.toggle('card__item-like-button_active');
}

function removeCard(event) {
    const evtTarget = event.target;
    evtTarget.closest('.card__item').remove();
}

function cardOpen(title, src) {
    openPopup(popupImage);
    popupImageSrc.src = src;
    popupImageTitle.textContent = title;
    popupImageSrc.alt = title;
}


function openPopup(element) {
    element.classList.add('popup_active');
    document.addEventListener('keydown', closePopupWithEsc);
    element.addEventListener('click', closePopup);
}

function renderProfilePopupInputs() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}

function closePopup(element) {
    element.classList.remove('popup_active');
    document.removeEventListener('keydown', closePopupWithEsc);
    element.removeEventListener('click', closePopup);
}


function submitProfileForm(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    setInactiveBtn(formProfileElement.querySelector('.popup__save-button'), validation);
    closePopup(popupProfile);
}

function renderPlacePopupInputs() {
    placeInput.value = '';
    placeImageInput.value = '';
}

function submitPlaceForm(evt) {
    evt.preventDefault();
    cardFullItem = fillCard(placeInput.value, placeImageInput.value);
    renderCard(cardFullItem, cardItems);
    setInactiveBtn(placeForm.querySelector('.popup__save-button'), validation)
    closePopup(popupPlace);
}

const closePopupWithEsc = (evt) => {
    if (evt.key === 'Escape') {
        closePopup(document.querySelector('.popup_active'))
    }
}



popupProfileOpenButton.addEventListener('click', () => {
    openPopup(popupProfile);
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
});
imageCloseButton.addEventListener('click', () => {
    closePopup(popupImage);
})
formProfileElement.addEventListener('submit', submitProfileForm);
placeForm.addEventListener('submit', submitPlaceForm, renderProfilePopupInputs);
popupOverlays.forEach((popupEl) => popupEl.addEventListener('mousedown', () => {
    closePopup(popupEl);
}))