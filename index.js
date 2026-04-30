import {
  getTasks,
  addTask,
  toggleTask,
  deleteTask,
  getPendingTasks
} from "./modules/task.js";

import { renderTasks } from "./modules/ui.js";

const form = document.querySelector("#todo-form");
const input = document.querySelector("#task-input");
const list = document.querySelector("#task-list");
const count = document.querySelector("#pending-count");
const error = document.querySelector("#error-message");

function updateApp() {
  renderTasks(getTasks(), list);
  count.textContent = getPendingTasks().length;
}

form.addEventListener("submit", event => {
  event.preventDefault();

  const text = input.value.trim();

  if (text === "") {
    error.textContent = "No puedes agregar una tarea vacía.";
    return;
  }

  error.textContent = "";
  addTask(text);
  input.value = "";
  input.focus();

  updateApp();
});

list.addEventListener("click", event => {
  const button = event.target.closest("button");

  if (!button) return;

  const taskItem = button.closest(".task-item");

  if (!taskItem) return;

  const id = Number(taskItem.dataset.id);
  const action = button.dataset.action;

  if (action === "toggle") {
    toggleTask(id);
  }

  if (action === "delete") {
    deleteTask(id);
  }

  updateApp();
});

updateApp();