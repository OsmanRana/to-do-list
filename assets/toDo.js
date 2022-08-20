const main = document.getElementById('main');
main.innerHTML = `<h1>To Do List</h1>
<br>
<input id="task" type="text">
<br>
<button id=btn-add>Add</button>
`
const taskToAdd = document.getElementById('task')
const taskToAddValue = taskToAdd.value;
const addButton = document.getElementById('btn-add').addEventListener('click', function(){
    console.log('clicked')
})
console.log(addButton)
