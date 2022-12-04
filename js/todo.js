const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
// const todoInput = document.querySelector(#todo-form input);
const todoList = document.getElementById("todo-list");

function paintTodo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerText = newTodo;
    todoList.appendChild(li);
}

//forma은 submit를 가지고, submit하면 default 로 새로고침이 된다.
function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value; 
    //copying the current value of the input tnto a new variable
    todoInput.value = "";
    paintTodo(newTodo);
} 
todoForm.addEventListener("submit", handleTodoSubmit);
