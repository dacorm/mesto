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
    popupConfirm,
    popupImage,
    popupPlace,
    popupProfile,
    popupProfileOpenButton,
    profileAvatar,
    profileJob,
    profileName,
    validation
} from '../utils/variables.js'
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from '../components/Api.js';
import './index.css';
import PopupConfirm from "../components/PopupConfirm";
let userId;


const cardsList = new Section({
    renderer: (data) => {
        const card = createCard(data);
        cardsList.addItem(card)
    }
}, cardItems)

function createCard(data) {
    const card = new Card(
        {
            title: data.name,
            image: data.link,
            likes: data.likes,
            userId,
            // ownerId: data.owner._id,
            id: data._id
        },
        '#card',
        openCard,
        async () => {
            try {
                const res = await api.like(data._id);
                card.like();
                card.setLikesCount(res);
            } catch (e) {
                console.warn(e)
            }
        },
        async () => {
            try {
                const res = await api.dislike(data._id);
                card.dislike();
                card.setLikesCount(res);
            } catch (e) {
                console.warn(e)
            }
        },
        () => {
            popupConfirm.open(card)
        }
    );

    return card.generateCard();
}

const popupAdd = new PopupWithForm(popupPlace, submitPlaceForm)
popupAdd.setEventListeners();

async function submitPlaceForm(data) {
    popupAdd.renderLoading(true, 'Сохранение...');
    try {
        const res = await api.addNewCard(data);
        const card = createCard(res);
        cardsList.addItem(card);
        popupAdd.close();
    } catch (e) {
        console.warn(e)
    } finally {
        popupAdd.renderLoading(false);
    }
}

const confirmPopup = new PopupConfirm(popupConfirm, async (card) => {
    try {
        await api.deleteCard(card._id);
        confirmPopup.close();
    } catch (e) {
        console.warn(e)
    }
})
confirmPopup.setEventListeners();

const popupEdit = new PopupWithForm(popupProfile, submitProfileForm)
popupEdit.setEventListeners();

const userInfo = new UserInfo({
    profileNameSelector: '.profile__name',
    profileJobSelector: '.profile__job',
    profileAvatarSelector: '.profile__avatar',
})

async function submitProfileForm(data) {
    popupEdit.renderLoading(true, 'Сохранение...')
    try {
        const res = await api.setUserInfo(data);
        userInfo.setUserInfo(res);
        popupEdit.close();
    } catch (e) {
        console.warn(e)
    } finally {
        popupEdit.renderLoading(false);
    }
}

popupProfileOpenButton.addEventListener('click', () => {
    const info = userInfo.getUserInfo();
    popupEdit.setInputValue(info);
    popupEdit.open();
    renderProfilePopupInputs();
    editFormValidation.hideAllErrors();
});

function openCard(title, src) {
    imagePopup.open(title, src)
}

function renderProfilePopupInputs() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}

// function submitProfileForm(userData) {
//     userInfo.setUserInfo(userData)
// }

// function submitPlaceForm(obj) {
//     const card = createCard(obj)
//     cardsList.addItem(card);
//     popupAdd.close();
// }

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
const api = new Api({
    baseUrl: "https://mesto.nomoreparties.co/v1/cohort-47",
    headers: {
        authorization: "778058ff-f85d-4c06-865c-00c5c790cf32",
        "Content-Type": "application/json",
    },
})

Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then(([userData, cards]) => {
        userId = userData._id;
        userInfo.setUserInfo(userData);

        cardsList.renderItems(cards.reverse());
    })
    .catch((e) => console.log(e));



