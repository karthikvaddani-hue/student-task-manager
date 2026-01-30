const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
    if (taskInput.value === "") return;

    const li = document.createElement("li");
    li.innerHTML = `
        <span onclick="toggleTask(this)">${taskInput.value}</span>
        <span class="delete" onclick="deleteTask(this)">❌</span>
    `;
    taskList.appendChild(li);
    taskInput.value = "";
}

function toggleTask(task) {
    task.classList.toggle("completed");
}

function deleteTask(task) {
    task.parentElement.remove();
}
