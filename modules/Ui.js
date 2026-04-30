export function render(tasks, list, onToggle, onDelete) {
  list.innerHTML = "";

  if (tasks.length === 0) {
    list.innerHTML = "<li class='empty-state'>No hay tareas</li>";
    return;
  }

  tasks.forEach(task => {
    const li = document.createElement("li");
    li.className = `task-item ${task.completed ? "completed" : "pending"}`;

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
        <button class="status-btn">
          ${task.completed ? "Desmarcar" : "Completar"}
        </button>

        <button class="delete-btn">
          Eliminar
        </button>
      </div>
    `;

    const [btnToggle, btnDelete] = li.querySelectorAll("button");

    btnToggle.onclick = () => onToggle(task.id);
    btnDelete.onclick = () => onDelete(task.id);

    list.appendChild(li);
  });
}