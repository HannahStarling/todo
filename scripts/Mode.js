import { mode } from './data.js';

export class Mode {
  constructor(mode, button) {
    this._button = button;
    this._mode = mode.getAttribute('href');

    this._lightMode = './pages/lightmode.css';
    this._darkMode = './pages/darkmode.css';
  }

  _setDarkMode() {
    this._mode = this._darkMode;
    this._button.textContent = 'Lightmode';
  }

  _setLightMode() {
    this._mode = this._lightMode;
    this._button.textContent = 'Darkmode';
  }

  _handlerMode() {
    this._mode === this._lightMode ? this._setDarkMode() : this._setLightMode();
    mode.href = this._mode;
  }

  _setEventListeners() {
    this._button.addEventListener('click', () => {
      this._handlerMode();
    });
  }

  enableModeHandler() {
    this._setEventListeners();
  }
}
