const main = document.getElementById('main');
main.innerHTML = `
<div id="main-div">
<h1>To Do List</h1>
<div>
<input id="task" type="text">
<button id=btn-add>Add</button>
<button id=btn-show-hide>Hide</button>
</div>
</div>
`
const taskToAdd = document.getElementById('task');

const div = document.createElement('div');
div.setAttribute("id", "task-container");
main.appendChild(div);

const newTaskDiv = document.createElement('div');
newTaskDiv.innerHTML = `<h3>New Task:</h3>`
const inProgressDiv = document.createElement('div');
inProgressDiv.innerHTML = `<h3>Task In Progress:</h3>`
const completedDiv = document.createElement('div');
completedDiv.innerHTML = `<h3>Completed Task:</h3>`
const canceledDiv = document.createElement('div');
canceledDiv.innerHTML = `<h3>Canceled Task:</h3>`

div.appendChild(newTaskDiv);
div.appendChild(inProgressDiv);
div.appendChild(completedDiv);
div.appendChild(canceledDiv);

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
    newTaskDiv.appendChild(newTaskUl);
    taskToAdd.value = ""

    startButton.addEventListener('click', function(){
        newTaskUl.removeChild(newTaskLi);
        const inProgressUl = document.createElement('ul');
        inProgressUl.setAttribute("id", "in-progress-ul");
        const inProgressLi = document.createElement('li');
        inProgressLi.innerText = newTaskLi.childNodes[0].data;
        const completedButton = document.createElement('button');
        completedButton.innerText = "Finish";
        inProgressLi.appendChild(completedButton);
        inProgressUl.appendChild(inProgressLi);
        inProgressDiv.appendChild(inProgressUl);

        completedButton.addEventListener("click", function(){
            inProgressUl.removeChild(inProgressLi);
            const completedUl = document.createElement("ul");
            const completedLi = document.createElement("li");
            completedLi.innerText = inProgressLi.childNodes[0].data;
            completedUl.appendChild(completedLi);
            completedDiv.appendChild(completedUl);
        })
    }) 
    removeButton.addEventListener('click', function(){
        newTaskUl.removeChild(newTaskLi);
        const canceledUl = document.createElement('ul');
        canceledUl.setAttribute("id", "canceled-ul");
        const canceledLi = document.createElement('li');
        canceledLi.innerText = newTaskLi.childNodes[0].data;
        canceledUl.appendChild(canceledLi)
        canceledDiv.appendChild(canceledUl)
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
        showHideDiv.style.display = "flex"
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
