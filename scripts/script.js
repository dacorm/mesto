const popupOpened = document.querySelector('.profile__edit-button');
const popupClosed = document.querySelector('.popup__escape-button');
const popup = document.querySelector('.popup');

function open() {
    popup.classList.add('popup_active');
}

function close() {
    popup.classList.remove('popup_active');
}


popupOpened.addEventListener('click', open)
popupClosed.addEventListener('click', close);