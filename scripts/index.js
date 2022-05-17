const popupOpened = document.querySelector('.profile__edit-button');
const popupClosed = document.querySelector('.popup__escape-button');
const popup = document.querySelector('.popup');
const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('#name');
const jobInput = document.querySelector('#workplace');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__workplace');


function open() {
    popup.classList.add('popup_active');
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}

function close() {
    popup.classList.remove('popup_active');
}


function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    close();
}

popupOpened.addEventListener('click', open);
popupClosed.addEventListener('click', close);
formElement.addEventListener('submit', formSubmitHandler);