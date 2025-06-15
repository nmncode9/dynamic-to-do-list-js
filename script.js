document.addEventListener("DOMContentLoaded", () => {
    
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    function addTask() {

        const taskText = taskInput.value.trim()

        if (!taskText) {
            alert("Enter a task")
        } else {
            const task = document.createElement("li");
            task.textContent = taskText;
            
            const removeButton = document.createElement("button");
            removeButton.textContent = "Remove";
            removeButton.classList.add("remove-btn");
            removeButton.addEventListener("click", () => task.remove());
            
            task.appendChild(removeButton);
            taskList.appendChild(task);

            taskInput.value = "";
        }

    }

    addButton.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", () => {
        let key = event.key;
        if (key == "Enter") {
            addTask();
        }
        
    })

});
