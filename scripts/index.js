import { settings, form, mode, themeButton } from './data.js';
import { Task } from './Task.js';
import { FormValidator } from './FormValidator.js';
import { Mode } from './Mode.js';

const task = new Task(document).newTask();
const validation = new FormValidator(settings, form).enableValidation();
const theme = new Mode(mode, themeButton).enableModeHandler();
