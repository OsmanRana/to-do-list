const main = document.getElementById('main');
main.innerHTML = `<h1>To Do List</h1>
<input id="task" type="text">
<button id=btn-add>Add</button>
<button id=btn-show-hide>Hide</button>
`
const taskToAdd = document.getElementById('task');

const div = document.createElement('div');
div.setAttribute("id", "task-container");
main.appendChild(div);

function addTask (){
    const taskToAddValue = taskToAdd.value;
   
    const ul = document.createElement('ul');
    ul.setAttribute("id", "task-ul")
    const li = document.createElement('li');
    li.classList = "movingLi"
    li.innerText = taskToAddValue;
    const button = document.createElement('button')
    button.classList =  "btn-remove";
    button.innerText = "Remove";
    ul.appendChild(li)    
    ul.appendChild(button);
    div.appendChild(ul);
    taskToAdd.value = ""
  
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
