const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
// toDos : 할 일을 저장하는 배열 array
const toDos = [];
// 브라우저 저장 : localStorage => array, object를 저장할 수 없음 / text만 저장 가능
// saveToDos() : toDos를 localStorage에 저장하는 함수
function saveToDos() {
  // ** 중요 ** JSON.stringify() : JavaScript 값이나 객체를 JSON 문자열로 변환
  // ex) ["a","b","c"]
  localStorage.setItem("todos", JSON.stringify(toDos));
}

// deleteToDo() : 할 일을 삭제하는 함수
function deleteToDo(event) {
  // parentElement : 부모 요소를 반환 => li
  const li = event.target.parentElement;
  li.remove();
}

// paintToDo() : handleSubmit()에서 받은 값을 ul에 추가
function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "✅";
  // addEventListener() : 이벤트 리스너를 추가 => 다 한 일을 클릭해서 삭제
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

// hadleToDoSubmit() : 할 일을 추가하는 함수
function handleToDoSubmit(event) {
  event.preventDefault();
  // newTodo : toDoInput에 입력된 값
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  toDos.push(newTodo);
  paintToDo(newTodo);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
