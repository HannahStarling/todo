export class FormValidator {
  constructor(
    {
      formSelector,
      inputSelector,
      submitButtonSelector,
      inactiveButtonClass,
      inputErrorClass,
      errorClass,
    },
    form
  ) {
    this._formSelector = formSelector;
    this._inputSelector = inputSelector;
    this._submitButtonSelector = submitButtonSelector;
    this._inactiveButtonClass = inactiveButtonClass;
    this._inputErrorClass = inputErrorClass;
    this._errorClass = errorClass;

    this._form = form;
    this._button = this._form.querySelector(this._submitButtonSelector);
    this._inputs = Array.from(this._form.querySelectorAll(this._inputSelector));
  }

  _isInvalid() {
    return !this._form.checkValidity();
  }

  _checkInputValidity(input) {
    return !input.validity.valid;
  }

  _toggleButton() {
    this._button.disabled = this._isInvalid();
    this._button.classList.toggle(this._inactiveButtonClass, this._isInvalid());
  }

  _searchInputError(input) {
    return this._form.querySelector(`.form__input-error_type_${input.id}`);
  }

  _handleInputError(input) {
    const error = this._searchInputError(input);
    input.classList.toggle(
      this._inputErrorClass,
      this._checkInputValidity(input)
    );
    error.classList.add(this._errorClass);
    error.textContent = input.validationMessage;
  }

  _disableButton() {
    this._button.disabled = this._isInvalid();
    this._button.classList.toggle(this._inactiveButtonClass, this._isInvalid());
  }

  _setEventListeners() {
    this._toggleButton();
    this._inputs.forEach((input) => {
      input.addEventListener('input', () => {
        this._handleInputError(input);
        this._toggleButton();
      });
    });

    this._form.addEventListener('submit', () => {
      this._disableButton();
    });
  }

  enableValidation() {
    this._setEventListeners();
  }
}
