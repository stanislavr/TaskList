// Define UI vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  // Add task event
  form.addEventListener('submit', addTask);
  // Remove task event
  taskList.addEventListener('click', removeTask);
  // Clear all tasks event
  clearBtn.addEventListener('click', clearAllTasks);
  // Filter tasks event
  filter.addEventListener('input', filterTasks);
}

// Add task
function addTask(e) {
  e.preventDefault();

  if (taskInput.value === '') {
    alert('Add a task');
  }

  // Create li element
  const li = document.createElement('li');
  // add class
  li.className = 'collection-item';
  // create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // create new link element
  const link = document.createElement('a');
  // add class
  link.className = 'delete-item secondary-content';
  // add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // append the link to li
  li.appendChild(link);
  // append li to ul
  taskList.appendChild(li);
  // clear input
  taskInput.value = '';
}

// Remove Task
function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    console.log('Clicked on a task delete icon');
    if (confirm('Are you sure you want to delete this task?')) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

// Clear all tasks
function clearAllTasks(e) {
  e.preventDefault();
  console.log('Clicked on a Clear Tasks btn');
  // Option 1
  taskList.querySelectorAll('li').forEach(task => {
    task.remove();
  });
  // // Option 2
  // taskList.innerHTML = '';
  // // Option 3
  // while (taskList.firstChild) {
  //   taskList.removeChild(taskList.firstChild);
  // }
}

// Filter tasks
function filterTasks(e) {
  //console.log('Filtering...');
  taskList.querySelectorAll('li').forEach(task => {
    const filterText = e.target.value.toLowerCase();
    const taskText = task.textContent.toLowerCase();

    // hide task if it matches filter text
    taskText.includes(filterText)
      ? (task.style.display = 'block')
      : (task.style.display = 'none');
  });
}
