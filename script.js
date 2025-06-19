 //Wait until the DOM is fully loaded
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
});
