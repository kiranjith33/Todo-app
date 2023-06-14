const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Create a Function for Adding Tasks..

function addTask(){
    if (inputBox.value=== ''){
        alert("You Must Write Something !");

    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        // Create a Delete Property and Give the Function for 
        // Deleting Tasks
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        

    }
    inputBox.value = "";
    saveData();
}
listContainer.addEventListener("click",function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
    },false);

    function saveData(){
        localStorage.setItem("data", listContainer.innerHTML);
    }
    function showTask(){
        listContainer.innerHTML = localStorage.getItem("data");
    
    }
    showTask();