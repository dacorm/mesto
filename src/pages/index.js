import {Card} from "../components/Card.js";
import {FormValidator} from "../components/FormValidator.js";
import {
    cardItems,
    formProfileElement,
    initialCards,
    jobInput,
    nameInput,
    placeAddButton,
    placeForm,
    placeImageInput,
    placeInput,
    popupImage,
    popupPlace,
    popupProfile,
    popupProfileOpenButton,
    profileJob,
    profileName,
    validation
} from '../utils/variables.js'
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import './index.css';

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


function renderProfilePopupInputs() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}

function submitProfileForm(obj) {
    info.setUserInfo(obj)
}

function submitPlaceForm(obj) {
    const card = createCard(obj)
    createCards.addItem(card);
    popupAdd.close();
}

popupProfileOpenButton.addEventListener('click', () => {
    popupEdit.open();
    renderProfilePopupInputs();
    editFormValidation.hideAllErrors();
});

placeAddButton.addEventListener('click', () => {
    popupAdd.open();
    addFormValidation.hideAllErrors();
});




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

console.log(popupAdd);