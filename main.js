const inputTask = document.getElementById("input");
const addBtn = document.getElementById("add");
const taskContainer = document.getElementById("tasks-container");
const taskInContainer = document.getElementById("task");
const inputtedTask = document.getElementById("inputted-task");

function appendTask(text) {
  const task = document.createElement("div");
  task.classList.add("task");
  if (!text.trim()) return;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const textField = document.createElement("p");
  textField.textContent = text;

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete");
  deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';

  const editButton = document.createElement("button");
  editButton.classList.add("edit");
  editButton.innerHTML = '<i class="fa-solid fa-pencil"></i>';

  task.appendChild(checkbox);
  task.appendChild(textField);
  task.appendChild(deleteButton);
  task.appendChild(editButton);

  taskContainer.append(task);
}

addBtn.addEventListener("click", () => {
  const textContent = inputTask.value;

  appendTask(textContent);

  inputTask.value = "";
});

// inputtedTask.addEventListener("click", () => {
//   const completedTask = document.getElementById("inputted-task");
//   if (checkBox.checked === false) {
//     checkBox.checked = true;
//     completedTask.classList.add("completed");
//   } else {
//     checkBox.checked = false;
//     completedTask.classList.remove("completed");
//   }
// });

taskContainer.addEventListener("click", (e) => {
  if (e.target.type === "checkbox") {
    const taskDiv = e.target.closest(".task");
    const taskText = taskDiv.querySelector("p");
    taskText.classList.toggle("completed");
  }
});
// checkBox.addEventListener("click", () => {
//   const checkbox = document.createElement("input");
//   checkbox.type = "checkbox";
// });
