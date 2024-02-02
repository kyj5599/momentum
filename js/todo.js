const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

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
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
