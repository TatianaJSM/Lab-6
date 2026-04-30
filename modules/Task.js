import { getTasksStorage, saveTasksStorage } from "./storage.js";

let tasks = getTasksStorage();

export function getTasks() {
  return tasks;
}

export function addTask(text) {
  const newTask = {
    id: Date.now(),
    text,
    completed: false
  };

  tasks.push(newTask);
  saveTasksStorage(tasks);
}

export function toggleTask(id) {
  tasks = tasks.map(task =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );

  saveTasksStorage(tasks);
}

export function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  saveTasksStorage(tasks);
}

export function getPending() {
  return tasks.filter(t => !t.completed);
}