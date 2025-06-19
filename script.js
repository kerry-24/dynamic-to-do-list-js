/* //Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {

    // select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Define function to add task
    function addTask() {
        const taskText = taskInput.value.trim(); // get and trim the task input

        // check if the task is not empty
        if (taskText === (" ")) {
            alert("Please enter a task");
            return;
        }

        // create a new list item element
            const li = document.createElement('li');
            li.textContent = taskText;

            //create a remove button
            const removeButton = document.createElement('button');
            removeButton.textContent = "Remove";
            removeButton.classList.add('remove-btn');
            li.appendChild(removeButton);


            // set event listener to remove button when clicked
            removeButton.onclick = () => {
                taskList.removeChild(li);
            };

            // append the list item to tasklist
            taskList.appendChild(li)
            
            //clear the Input Field
            taskInput.value = "";
         }

         //Add event listener to the add task button
        addButton.addEventListener('click', addTask);

        //Add keypress event listener for the enter key on the input field
        taskInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                addTask();
            }
        });   
});*/
// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Initialize an array to hold tasks
    let tasks = [];

    // Load tasks from Local Storage on page load
    function loadTasks() {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            tasks = JSON.parse(storedTasks);
            tasks.forEach(task => {
                createTaskElement(task);
            });
        }
    }

    // Save tasks array to Local Storage
    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Create a task list item in the DOM
    function createTaskElement(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        // Remove task from both DOM and Local Storage
        removeButton.onclick = () => {
            taskList.removeChild(li);
            tasks = tasks.filter(task => task !== taskText);
            saveTasks();
        };

        li.appendChild(removeButton);
        taskList.appendChild(li);
    }

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Add task to array and update storage
        tasks.push(taskText);
        saveTasks();

        // Add task to DOM
        createTaskElement(taskText);

        // Clear the input field
        taskInput.value = "";
    }

    // Event listener for Add button
    addButton.addEventListener('click', addTask);

    // Event listener for Enter key
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Load tasks when the page is ready
    loadTasks();
});

