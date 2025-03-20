const inputForm = document.getElementById('input-form');
const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

inputForm.addEventListener('submit', addTask);

function addTask(e) {
    e.preventDefault();

    if(inputBox.value === '') {
        alert('You must write something first!');
    } else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }

    inputBox.value = '';
    saveTask();
}

listContainer.addEventListener('click', function(evnt) {
    if(evnt.target.tagName == 'LI') {
        evnt.target.classList.toggle('checked');
        saveTask();
    } else if (evnt.target.tagName == 'SPAN') {
        evnt.target.parentElement.remove();
        saveTask();
    }
}, false);

function saveTask() {
    localStorage.setItem('tasks', listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem('tasks');
}

showTask();