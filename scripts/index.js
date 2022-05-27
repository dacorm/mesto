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
    fillPlace(i);
}

function fillPlace(i) {
    const cardTemplate = document.querySelector('#card').content;
    const card = cardTemplate.querySelector('.card__item').cloneNode(true);

    card.querySelector('.card__item-image').src = `${initialCards[i].link}`;
    card.querySelector('.card__item-title').textContent = `${initialCards[i].name}`;
    card.querySelector('.card__item-like-button').addEventListener('click', (event) => {
        const evtTarget = event.target;
        evtTarget.classList.toggle('card__item-like-button_active');
    })
    cardItems.append(card);
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

function formSubmitHandlerPlace(evt) {
    evt.preventDefault();
    close(popupProfile);
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
formElement.addEventListener('submit', formSubmitHandler);