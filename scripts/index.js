import { settings, form, mode, themeButton } from './data.js';
import { Task } from './Task.js';
import { FormValidator } from './FormValidator.js';

const task = new Task(document).newTask();
const validation = new FormValidator(settings, form).enableValidation();
