const tasks = [];
let taskId = 0;

function addTask(event) {
  event.preventDefault();

  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") return;

  const newTask = {
    task_id: taskId,
    text: taskText,
    done: false,
  };

  tasks.push(newTask);

  displayTask(newTask);

  taskInput.value = "";
  taskId++;
}

function displayTask(task) {
  const taskList = document.querySelector(".listTasks");

  const taskItem = document.createElement("div");
  taskItem.classList.add("task-item");
  taskItem.setAttribute("data-task-id", task.task_id);

  taskItem.innerHTML = `
        <input type="checkbox" id="task-${task.task_id}" ${
    task.done ? "checked" : ""
  }>
        <label for="task-${task.task_id}" class="${
    task.done ? "strike-through" : ""
  }">${task.text}</label>
        <button onclick="deleteTask(${
          task.task_id
        })"><i class="fas fa-times"></i></button>
    `;

  taskList.appendChild(taskItem);

  taskItem
    .querySelector('input[type="checkbox"]')
    .addEventListener("change", () => doneTask(task.task_id));
}

function doneTask(taskId) {
  const task = tasks.find((t) => t.task_id === taskId);
  task.done = !task.done;

  const taskItem = document.querySelector(`[data-task-id="${taskId}"]`);
  const label = taskItem.querySelector("label");

  if (task.done) {
    label.classList.add("strike-through");
  } else {
    label.classList.remove("strike-through");
  }
}

function deleteTask(taskId) {
  const taskIndex = tasks.findIndex((t) => t.task_id === taskId);
  tasks.splice(taskIndex, 1);

  const taskItem = document.querySelector(`[data-task-id="${taskId}"]`);
  taskItem.remove();
}

document.getElementById("taskForm").addEventListener("submit", addTask);
