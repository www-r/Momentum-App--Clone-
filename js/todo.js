const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
// const todoInput = document.querySelector(#todo-form input);
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";
let toDos = []; //to update the old toDos

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos)) 
 //local storage can only save strings=> save into a form of array (not real array)
}//JSON stringify => take JS object or an array and make into a strings.

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo)=> toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo );
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

//forma은 submit를 가지고, submit하면 default 로 새로고침이 된다.
function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value; 
    //copying the current value of the input tnto a new variable
    toDoInput.value = "";
    const newTodoObj = {
        text:newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
} 
toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    //JSON.parse() => make string into an array
    toDos = parsedToDos; //update todos
    parsedToDos.forEach(paintToDo);
}