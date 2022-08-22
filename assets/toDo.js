const main = document.getElementById('main');
main.innerHTML = `
<h1>To Do List</h1>
<div>
<input id="task" type="text">
<button id=btn-add>Add</button>
<button id=btn-show-hide>Hide</button>
</div>
`
const taskToAdd = document.getElementById('task');

const div = document.createElement('div');
div.setAttribute("id", "task-container");
main.appendChild(div);

function addTask (){
    const taskToAddValue = taskToAdd.value;
    const newTaskUl = document.createElement('ul');
    newTaskUl.setAttribute("id", "new-task-ul")
    const newTaskLi = document.createElement('li');
    newTaskLi.innerText = taskToAddValue;

    const removeButton = document.createElement('button');
    removeButton.setAttribute("id", "btn-remove");
    removeButton.innerText = "Remove";

    const startButton = document.createElement('button');
    startButton.classList =  "btn-start";
    startButton.innerText = "Start";

    newTaskLi.appendChild(removeButton);
    newTaskLi.appendChild(startButton);
    newTaskUl.appendChild(newTaskLi);    
    div.appendChild(newTaskUl);
    taskToAdd.value = ""

    startButton.addEventListener('click', function(){
        newTaskUl.removeChild(newTaskLi);
        const inProgressUl = document.createElement('ul');
        inProgressUl.setAttribute("id", "in-progress-ul");
        const inProgressLi = document.createElement('li');
        inProgressLi.innerText = newTaskLi.childNodes[0].data;
        inProgressUl.appendChild(inProgressLi)
        div.appendChild(inProgressUl)
    }) 
}
let isShow = true;

const showHideButton = document.getElementById("btn-show-hide").addEventListener("click", function(){
    const showHideDiv = document.getElementById("task-container")
    let buttonText = document.getElementById("btn-show-hide");
    if(isShow){
        showHideDiv.style.display = "none"
        isShow = false;
        buttonText.innerText = "Show"
    }else if(isShow !== true){
        showHideDiv.style.display = "block"
        isShow = true;
        buttonText.innerText = "Hide"
    }

})
document.addEventListener('keypress', function(event){
    if(taskToAdd.value === ""){
        return;
    }
    if(event.key === "Enter"){
        document.getElementById('btn-add').disabled = true;
        addTask();
    }
})
document.getElementById('btn-add').addEventListener('click', function(){
    if(taskToAdd.value === ""){
        return;
    }
    addTask();
})
