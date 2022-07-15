import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popup, submitHandler) {
        super(popup);
        this._submitHandler = submitHandler;
        this._form = this._popup.querySelector('.popup__form');
        this._inputs = this._popup.querySelectorAll('.form__input');
    }

    _getInputValue() {
        this._inputValues = {};
        this._inputs.forEach(input => {
            return this._inputValues[input.id] = input.value;
        })
        return this._inputValues
    }

    setInputValue(obj) {
        this._inputs.forEach(input => {
            input.value = obj[input.id]
        })
    }

    setEventListeners() {
        super.setEventListeners();
        this._popup.addEventListener('submit', (e) => {
            e.preventDefault();
            this._obj = this._getInputValue();
            this._submitHandler(this._obj);
            super.close();
        })
    }
}