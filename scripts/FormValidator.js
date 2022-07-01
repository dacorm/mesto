export class FormValidator {
    constructor(formElement, config) {
        this._form = formElement;
        this._inputSelector = config.inputSelector;
        this._inputErrorClass = config.inputErrorClass;
        this._errorClass = config.errorClass;
        this._inactiveBtn = config.inactiveBtn;
        this._button = config.buttonSelector;
        this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
    }

    _setEventListeners() {
        const buttonElement = this._form.querySelector(this._button);

        this._toggleButtonState(buttonElement);

        this._inputList.forEach(inputElement => {
            inputElement.addEventListener('input', () => {
                this._errorElement = this._form.querySelector(`.${inputElement.id}-error`);
                this._checkInputValidity(inputElement);
                this._toggleButtonState(buttonElement);
            });
        });
    }

    hideAllErrors() {
        this._toggleButtonState(this._form.querySelector(this._button));

        this._inputList.forEach((input) => {
            this._errorElement = this._form.querySelector(`.${input.id}-error`);
            this._errorElement.classList.remove(this._errorClass);
            this._errorElement.textContent = '';
            input.classList.remove(this._inputErrorClass);
        })
    }

    _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement);
        } else {
            this._hideInputError(inputElement);
        }
    }

    _showInputError(inputElement) {
        inputElement.classList.add(this._inputErrorClass);
        this._errorElement.classList.add(this._errorClass);
        this._errorElement.textContent = inputElement.validationMessage;
    }

    _hideInputError(inputElement) {
        if (!this._errorElement) return;
        inputElement.classList.remove(this._inputErrorClass);
        this._errorElement.classList.remove(this._errorClass);
        this._errorElement.textContent = '';
    }

    _validateInput() {
        return this._inputList.some((input) => !input.validity.valid);
    }

    _toggleButtonState(buttonElement) {
        if (this._validateInput()) {
            buttonElement.classList.add(this._inactiveBtn);
            buttonElement.setAttribute('disabled', true);
        } else {
            buttonElement.classList.remove(this._inactiveBtn);
            buttonElement.removeAttribute('disabled', true);
        }
    }



    enableValidaton() {
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        this._setEventListeners();
    }
}