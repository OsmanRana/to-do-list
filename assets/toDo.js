const main = document.getElementById('main');
main.innerHTML = `<h1>To Do List</h1>
<br>
<input id="task" type="text">
<br>
<button id=btn-add>Add</button>
`
const taskToAdd = document.getElementById('task')

const addButton = document.getElementById('btn-add').addEventListener('click', function(){
    let taskToAddValue = taskToAdd.value;
    const p = document.createElement('p');
    p.innerText = taskToAddValue;
    main.appendChild(p);
    taskToAdd.value = ""
    console.log('clicked', p)
})
