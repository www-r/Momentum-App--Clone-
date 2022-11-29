
const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector("#greeting");

 //string만 포함된 변수는 대문자로 쓴다->오타로 인한 에러 방자하기위해.
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

//browser가 function의 첫번째 argument에게 어떤 일이 일어났는지에 대한 정보의 object를 준다.
function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, loginInput.value);
    paintGreetings();
}
function paintGreetings(){
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    
}


const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName===null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit );

} else {
   paintGreetings();
    
}
