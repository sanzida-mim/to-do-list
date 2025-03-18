function GEBID(id) {
    return document.getElementById(id);
}

function CE(id) {
    return document.createElement(id);
}

const taskInputForm = GEBID('new-task-form');
const newInputTask = GEBID('input-new-task');
const taskList = GEBID('task-item');

taskInputForm.addEventListener('submit', addNewTask);

function addNewTask(evnt) {
    evnt.preventDefault();

    let taskListItem = CE('li');
	let taskSpan = CE('span');
	let taskActions = CE('div');
	let taskEdit = CE('button');
	let taskDelete = CE('button');

    taskListItem.appendChild(taskSpan);
    taskListItem.appendChild(taskActions);
    taskActions.appendChild(taskEdit);
    taskActions.appendChild(taskDelete);
	taskList.appendChild(taskListItem);

    taskSpan.innerText = newInputTask.value;

    taskInputForm.reset();
}

taskSpan.innerText = newInputTask.value;