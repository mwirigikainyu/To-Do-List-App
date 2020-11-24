const btn = document.getElementById('button');
const startingText = document.getElementById('starting-text');
let section = document.getElementsByTagName('section')[0];
let input = document.getElementById('input');
// let newTask;
let deleteBtn;
// let text;
let doneBtn;
let isToggled;
let listOfTasks = [];

function createTaskElement() {
  section.innerHTML = '';
  listOfTasks.forEach((task, index) => {
    // // var index = Object.keys(listOfTasks).indexOf(item);
    // create task
    let newTask = document.createElement('div');
    newTask.className = 'task margin';
    let text = document.createElement('p');
    text.innerHTML = task;
    text.className = 'text';
    // create delete btn
    deleteBtn = document.createElement('img');
    deleteBtn.addEventListener('click', removeTask);
    deleteBtn.dataset.arg = index;
    deleteBtn.src = 'images/delete.png';
    deleteBtn.className = 'delete';
    // // create dont btn
    doneBtn = document.createElement('img');
    doneBtn.addEventListener('click', completeTask);
    doneBtn.dataset.arg = index;
    doneBtn.src = 'images/done.png';
    doneBtn.className = 'done';

    section.appendChild(newTask);
    newTask.appendChild(doneBtn);
    newTask.appendChild(text);
    newTask.appendChild(deleteBtn);
  });

  if (listOfTasks.length == 0) {
    startingText.classList.toggle('hidden');
    isToggled = false;
  }
}

function addToList(str) {
  listOfTasks.push(str);
  section, createTaskElement();
}

function removeTask(event) {
  let index = event.target.dataset.arg;
  listOfTasks.splice(index, 1);
  createTaskElement();
}

function completeTask(event) {
  let index = event.target.dataset.arg;
  console.log(event);
}

function addTask() {
  let inputValue = input.value;
  if (inputValue) {
    addToList(inputValue);
    if (!isToggled) {
      startingText.classList.toggle('hidden');
      isToggled = true;
    }
  }
  input.value = '';
}

btn.addEventListener('click', addTask);
input.addEventListener('keyup', function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    btn.click(addTask);
  }
});
