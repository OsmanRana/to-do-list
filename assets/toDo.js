const main = document.getElementById('main');
main.innerHTML = `<h1>To Do List</h1>
<br>
<input id="task" type="text">
<br>
<button id=btn-add>Add</button>
`
const taskToAdd = document.getElementById('task');
function addTask (){
    
    const taskToAddValue = taskToAdd.value;
    const div = document.createElement('div');
    div.setAttribute("id", "task-container");
    main.appendChild(div);
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    li.innerText = taskToAddValue;
    ul.appendChild(li)    
    const button = document.createElement('button');
    button.setAttribute("id", "btn-remove");
    button.innerText = "Remove";
    div.appendChild(ul);
    div.appendChild(button);
    taskToAdd.value = ""

    document.getElementById('btn-remove').addEventListener('click', function(){
        const taskContainer = document.getElementById('task-container');
        document.removeChild(taskContainer)
        console.log('clicked', taskContainer);
    })
}
document.addEventListener('keypress', function(event){
    if(taskToAdd.value === ""){
        return;
    }
    if(event.key === "Enter"){
        document.getElementById('btn-add').disabled = true;
        addTask();
    }
})
const addButton = document.getElementById('btn-add').addEventListener('click', function(event){
    if(taskToAdd.value === ""){
        return;
    }
    addTask();
})
