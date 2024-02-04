const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

// toDos : 할 일을 저장하는 배열 array
// const -> let : 값이 변할 수 있음
let toDos = [];

// 브라우저 저장 : localStorage => array, object를 저장할 수 없음 / text만 저장 가능
// saveToDos() : toDos를 localStorage에 저장하는 함수
function saveToDos() {
  // ** 중요 ** JSON.stringify() : JavaScript 값이나 객체를 JSON 문자열로 변환, string으로 변환
  // ex) ["a","b","c"]
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// deleteToDo() : 할 일을 삭제하는 함수
function deleteToDo(event) {
  // parentElement : 부모 요소를 반환 => li
  const li = event.target.parentElement;
  li.remove();
  // 클릭한 li.id와 toDos.id가 같지 않은 것만 반환
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

// paintToDo() : handleSubmit()에서 받은 값을 ul에 추가
function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
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
  // newTodoObj : toDos에 추가할 객체
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// localStorage에 저장된 값이 있으면 가져와서 화면에 출력
const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  // parsedToDos : JavaScript에서 사용가능한 object로 변환 => array로 변환
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  // forEach() : 배열의 각 요소에 대해 한 번씩 제공한 함수를 실행
  // 위의 paintToDo 함수를 가져옴
  parsedToDos.forEach(paintToDo);
}