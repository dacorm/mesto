import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import {
    popupProfileOpenButton,
    popupProfileCloseButton,
    popupProfile,
    formProfileElement,
    nameInput,
    jobInput,
    profileName,
    profileJob,
    placeInput,
    placeImageInput,
    placeForm,
    placeAddButton,
    popupPlace,
    popupPlaceCloseButton,
    cardItems,
    imageCloseButton,
    popupImage,
    popupImageSrc,
    popupImageTitle,
    popupOverlays,
    placeSubmitBtn,
    profileSubmitBtn,
    cardFullItem,
    validation,
    initialCards
} from '../utils/variables.js'
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

const createCards = new Section({
    items: initialCards,
    renderer: (data) => {
        const card = createCard(data);
        createCards.addItem(card)
    }
}, cardItems)
createCards.renderItem()



function createCard(data) {
    const card = new Card(data, '#card', openCard);

    const cardElement = card.generateCard();

    return cardElement;
}

function openCard(title, src) {
    imagePopup.open(title, src)
}

// export function openPopup(element) {
//     element.classList.add('popup_active');
//     document.addEventListener('keydown', closePopupWithEsc);
// }

function renderProfilePopupInputs() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}

// function closePopup(element) {
//     element.classList.remove('popup_active');
//     document.removeEventListener('keydown', closePopupWithEsc);
// }


function submitProfileForm() {
    const obj = info.getUserInfo();
    info.getUserInfo();
    popupEdit.setInputValue(obj);
    popupEdit.open();
}

function renderPlacePopupInputs() {
    placeInput.value = '';
    placeImageInput.value = '';
    popupAdd.close()
}

function submitPlaceForm(data) {
    const card = createCard(data)
    createCards.addItem(card);
    popupAdd.close();
}

// const closePopupWithEsc = (evt) => {
//     if (evt.key === 'Escape') {
//         closePopup(document.querySelector('.popup_active'))
//     }
// }

popupProfileOpenButton.addEventListener('click', () => {
    popupEdit.open();
    renderProfilePopupInputs();
    editFormValidation.hideAllErrors();
});
// popupProfileCloseButton.addEventListener('click', () => {
//     closePopup(popupProfile)
// });
placeAddButton.addEventListener('click', () => {
    popupAdd.open();
    renderPlacePopupInputs();
    addFormValidation.hideAllErrors();
});

// imageCloseButton.addEventListener('click', () => {
//     closePopup(popupImage);
// })
// formProfileElement.addEventListener('submit', submitProfileForm);
// placeForm.addEventListener('submit', submitPlaceForm);
// popupOverlays.forEach((popupEl) => popupEl.addEventListener('mousedown', (evt) => {
//     if (evt.target.classList.contains('popup_active')) {
//         closePopup(evt.target);
//     }
// }))

const editFormValidation = new FormValidator(formProfileElement, validation);
editFormValidation.enableValidaton();
const addFormValidation = new FormValidator(placeForm, validation);
addFormValidation.enableValidaton();
const imagePopup = new PopupWithImage(popupImage);
imagePopup.setEventListeners();
const popupAdd = new PopupWithForm(popupPlace, submitPlaceForm)
popupAdd.setEventListeners();
const popupEdit = new PopupWithForm(popupProfile, submitProfileForm)
popupEdit.setEventListeners();
const info = new UserInfo({
    profileName: profileName,
    profileJob: profileJob
})

