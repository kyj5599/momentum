const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

// preventDefault() : 기본 동작을 막는다.
function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  // localStorage : 작은 정보를 유저 컴퓨터에 저장하는 방법
  // setItem : localStorage에 정보를 저장하는 방법
  localStorage.setItem("username", username);
  greeting.innerText = `Hello ${username}!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

// submit : form을 제출할 때 발생하는 이벤트 => 브라우저의 기본 동작을 막게 된다.
loginForm.addEventListener("submit", onLoginSubmit);
