export function renderTasks(tasks, taskList) {
  taskList.innerHTML = "";

  if (tasks.length === 0) {
    taskList.innerHTML = "<li class='empty-state'>No hay tareas todavía.</li>";
    return;
  }

  tasks.forEach(task => {
    const li = document.createElement("li");

    li.className = `task-item ${task.completed ? "completed" : "pending"}`;
    li.dataset.id = task.id;

    li.innerHTML = `
      <div class="task-content">
        <div class="task-text-container">
          <p class="task-text">${task.text}</p>
          <span class="task-status ${task.completed ? "status-completed" : "status-pending"}">
            ${task.completed ? "Completada" : "Pendiente"}
          </span>
        </div>
      </div>

      <div class="task-actions">
        <button class="status-btn" type="button" data-action="toggle">
          ${task.completed ? "Desmarcar" : "Completar"}
        </button>

        <button class="delete-btn" type="button" data-action="delete">
          Eliminar
        </button>
      </div>
    `;

    taskList.appendChild(li);
  });
}