document.addEventListener("DOMContentLoaded", () => {

    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Check local storage for previous tasks
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Function to save tasks to local storage
    function saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    // Function to create a task element
    function createTaskElement(taskText) {
        const task = document.createElement("li");
        task.textContent = taskText;

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove-btn");

        // Remove task from DOM and local storage
        removeButton.addEventListener("click", () => {
            taskList.removeChild(task);
            tasks = tasks.filter(t => t !== taskText);
            saveTasks();
        });

        task.appendChild(removeButton);
        taskList.appendChild(task);
    }

    // Function to load tasks from local storage
    function loadTasks() {
        tasks.forEach(taskText => {
            createTaskElement(taskText);
        });
    }

    loadTasks(); // Load tasks when the page loads

    function addTask() {

        const taskText = taskInput.value.trim();

        if (!taskText) {
            alert("Enter a task");
        } else {
            createTaskElement(taskText);

            // Write the user input to local storage
            tasks.push(taskText);
            saveTasks();

            taskInput.value = "";
        }
    }

    addButton.addEventListener("click", addTask);

    taskInput.addEventListener("keypress", () => {
        let key = event.key;
        if (key == "Enter") {
            addTask();
        }
    });

});
