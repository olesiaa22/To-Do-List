const inputTask = document.getElementById("input");
const addBtn = document.getElementById("add");
const taskContainer = document.getElementById("tasks-container");
const taskInContainer = document.getElementById("task");
const inputtedTask = document.getElementById("inputted-task");
const deleteBtn = document.getElementById("del");
const editBtn = document.getElementById("edit");

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

// deleteBtn.addEventListener('click', (event)=>{
//   const delTask = event.target
//   delTask.classList.remove("task")
// })

taskContainer.addEventListener("click", (event) => {
  if (
    event.target.classList.contains("delete") ||
    event.target.closest(".delete")
  ) {
    const taskDiv = event.target.closest(".task");
    if (taskDiv) taskDiv.remove();
  }
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
  // complete task
  if (e.target.type === "checkbox") {
    const taskDiv = e.target.closest(".inputted-task");
    const taskText = taskDiv.querySelector("p");
    taskText.classList.toggle("completed");
  }
});

taskContainer.addEventListener("click", (event) => {
  //edit task
  if (
    event.target.classList.contains("edit") ||
    event.target.closest(".edit")
  ) {
    const taskDiv = event.target.closest(".task");

    if (taskDiv) {
      // taskDiv.innerHTML = inputTask.value;
      // inputTask.remove();
      const taskText = taskDiv.querySelector("p");
      const currentText = taskText.textContent;

      //створення інпуту для редагування тексту
      const inputField = document.createElement("input");
      inputField.type = "text";
      inputField.value = currentText;
      taskDiv.replaceChild(inputField, taskText);

      inputField.addEventListener("blur", () => {
        taskText.textContent = inputField.value;
        taskDiv.replaceChild(taskText, inputField);

        if (taskDiv.querySelector("input[type:'checkbox'").checked) {
          taskText.classList.add(completed);
        }
      });

      inputField.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          taskText.textContent = inputField.value;
          taskDiv.replaceChild(taskText, inputField);

          if (taskDiv.querySelector("input[type='checkbox").checked) {
            taskText.classList.add("completed");
          }
        }
      });
    }
  }

  if (event.target.type === "checkbox") {
    const taskDiv = event.target.closest(".task");
    const taskText = taskDiv.querySelector("p");

    if (event.target.checked) {
      taskText.classList.add("completed");
    } else {
      taskText.classList.remove("completed");
    }
  }
});
// checkBox.addEventListener("click", () => {
//   const checkbox = document.createElement("input");
//   checkbox.type = "checkbox";
// });
