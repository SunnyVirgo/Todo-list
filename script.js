const task = document.getElementById('task')
const listContainer = document.getElementById('list-container')
const checkAll = document.getElementsByClassName('check')

function addTask(){
    if(task.value === ""){
        alert("Please enter task first!")
    }else{
        let li = document.createElement("li")
        li.innerHTML = task.value
        let span = document.createElement("span")
        span.textContent="\u00d7"
        li.appendChild(span)
        listContainer.appendChild(li)
       
    }
    task.value = ""
    saveData()
}
listContainer.addEventListener("click", function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked")
        saveData()
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
},false)


function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")

}

showTask();