const popupOpened = document.querySelector('.profile__edit-button');
const popupClose = document.querySelector('#edit_close');
const popupProfile = document.querySelector('#popup_profile');
const formElement = document.querySelector('#profile_form');
const nameInput = document.querySelector('#name');
const jobInput = document.querySelector('#workplace');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__workplace');
const placeInput = document.querySelector('#new_place');
const placeImageInput = document.querySelector('#place_link');
const placeForm = document.querySelector('#place_form');
const placeAddButton = document.querySelector('.profile__add-button');
const popupPlace = document.querySelector('#popup_place');
const placeClose = document.querySelector('#place_close');
const cardItems = document.querySelector('.card__items');
const imageClose = document.querySelector('#image_close');
const popupImage = document.querySelector('#popup_image');
const popupImageSrc = document.querySelector('.popup__image');
const popupImageTitle = document.querySelector('.popup__image-description');
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
    fillCard(initialCards[i].name, initialCards[i].link);
}

function fillCard(title, src) {
    const cardTemplate = document.querySelector('#card').content;
    const card = cardTemplate.querySelector('.card__item').cloneNode(true);

    card.querySelector('.card__item-image').src = src;
    card.querySelector('.card__item-image').alt = title;
    card.querySelector('.card__item-title').textContent = title;
    card.querySelector('.card__item-image').addEventListener('click', () => {
        cardOpen(title, src);
    });
    card.querySelector('.card__item-like-button').addEventListener('click', likeCard);
    card.querySelector('.card__item-thrash').addEventListener('click', removeCard);
    cardItems.prepend(card);
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
    open(popupImage);
    popupImageSrc.src = src;
    popupImageTitle.textContent = title;
    popupImageSrc.alt = title;
}


function open(element) {
    element.classList.add('popup_active');
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}

function close(element) {
    element.classList.remove('popup_active');
}


function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    close(popupProfile);
}


function formSubmitPlace(evt) {
    evt.preventDefault();
    fillCard(placeInput.value, placeImageInput.value);
    close(popupPlace);
}


popupOpened.addEventListener('click', () => {
    open(popupProfile);
});
popupClose.addEventListener('click', () => {
    close(popupProfile)
});
placeClose.addEventListener('click', () => {
    close(popupPlace)
});
placeAddButton.addEventListener('click', () => {
    open(popupPlace);
});
imageClose.addEventListener('click', () => {
    close(popupImage);
})
formElement.addEventListener('submit', formSubmitHandler);
placeForm.addEventListener('submit', formSubmitPlace);