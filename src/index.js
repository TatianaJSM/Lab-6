import {
  getTasks,
  addTask,
  toggleTask,
  deleteTask,
  getPending
} from "./modules/task.js";

import { render } from "./modules/ui.js";

const form = document.querySelector("#todo-form");
const input = document.querySelector("#task-input");
const list = document.querySelector("#task-list");
const count = document.querySelector("#pending-count");
const error = document.querySelector("#error-message");

function update() {
  render(getTasks(), list, handleToggle, handleDelete);
  count.textContent = getPending().length;
}

function handleToggle(id) {
  toggleTask(id);
  update();
}

function handleDelete(id) {
  deleteTask(id);
  update();
}

form.addEventListener("submit", e => {
  e.preventDefault();

  const text = input.value.trim();

  if (!text) {
    error.textContent = "No puedes agregar una tarea vacía";
    return;
  }

  error.textContent = "";
  addTask(text);
  input.value = "";
  update();
});

update();