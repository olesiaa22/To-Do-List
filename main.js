const inputTask = document.getElementById("input");
const addBtn = document.getElementById("add");
const taskContainer = document.getElementById("tasks-container");

function appendTask(text) {
  const task = document.createElement("div");
  task.classList.add("task");

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
