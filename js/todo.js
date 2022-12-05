const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
// const todoInput = document.querySelector(#todo-form input);
const todoList = document.getElementById("todo-list");

const todos = [];

function saveTodos(){
    localStorage.setItem("todos",todos) //local storage can only save strings
}

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
}

function paintTodo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteTodo );
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

//forma은 submit를 가지고, submit하면 default 로 새로고침이 된다.
function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value; 
    //copying the current value of the input tnto a new variable
    todoInput.value = "";
    todos.push(newTodo);
    paintTodo(newTodo);
    saveTodos();
} 
todoForm.addEventListener("submit", handleTodoSubmit);
