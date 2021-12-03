export class Task {
  constructor(container) {
    this._container = container;
    this._commentList = container.querySelector('ol');
    this._input = container.querySelector('input');
    this._form = container.querySelector('form');
  }

  _createTask() {
    const newTask = this._container.createElement('li');
    newTask.classList.add(`to-do__item`);
    newTask.textContent = this._input.value;
    return newTask;
  }

  _appendTask(e) {
    e.preventDefault();
    this._newTask = this._createTask();
    this._commentList.append(this._newTask);
    this._input.value = '';
  }

  _setEventListeners() {
    this._form.addEventListener('submit', (e) => {
      this._appendTask(e);
    });
  }

  newTask() {
    this._setEventListeners();
  }
}
