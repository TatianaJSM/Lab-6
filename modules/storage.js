const KEY = "tasks";

export function getTasksStorage() {
  const data = localStorage.getItem(KEY);
  return data ? JSON.parse(data) : [];
}

export function saveTasksStorage(tasks) {
  localStorage.setItem(KEY, JSON.stringify(tasks));
}