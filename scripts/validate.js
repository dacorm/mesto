const setInactiveBtn = (buttonElement, validation) => {
    buttonElement.classList.add(validation.inactiveBtn);
    buttonElement.setAttribute('disabled', true);
}

const setActiveBtn = (buttonElement, validation) => {
    buttonElement.classList.remove(validation.inactiveBtn);
    buttonElement.removeAttribute('disabled', true);
}

const showInputError = (formElement, inputElement, errorMessage, validation) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(validation.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(validation.errorClass);
};

const hideInputError = (formElement, inputElement, validation) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(validation.inputErrorClass);
    errorElement.classList.remove(validation.errorClass);
    errorElement.textContent = '';
};

const enableValidation = (validation) => {
    const formList = Array.from(document.querySelectorAll(validation.formSelector));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });

        setEventListeners(formElement, validation);
    });
};

const checkInputValidity = (formElement, inputElement, validation) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, validation);
    } else {
        hideInputError(formElement, inputElement, validation);
    }
};

const setEventListeners = (formElement, validation) => {
    const inputList = Array.from(formElement.querySelectorAll(validation.inputSelector));
    const buttonElement = formElement.querySelector(validation.buttonSelector);

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(formElement, inputElement, validation);
            toggleBtnState(buttonElement, inputList, validation);
        });
    });
};

const validateInput = (inputList) => inputList.some((inputEl) => !inputEl.validity.valid);

const toggleBtnState = (buttonElement, inputList, validation) => {
    if (validateInput(inputList)) {
        setInactiveBtn(buttonElement, validation);
    } else {
        setActiveBtn(buttonElement, validation);
    }
};

enableValidation(validation);

