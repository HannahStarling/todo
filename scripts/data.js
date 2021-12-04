const settings = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_inactive',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active',
};
const form = document.querySelector('.form');
const mode = document.querySelector('.mode');
const themeButton = document.querySelector('.header__button_type_theme');
const clearButton = document.querySelector('.header__button_type_clear');

export { settings, form, mode, themeButton, clearButton };
