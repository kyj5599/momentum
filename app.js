const hellos = document.getElementsByClassName("hello");

// querySelector : element를 CSS 방식으로 검색할 수 있음
// 첫번째 element만 가져옴
// 다 가져오고 싶으면 querySelectorAll
const title = document.querySelector(".hello h1");

// getElementById : id로 element를 검색할 수 있음
// const title = document.querySelector("#hello");
// const title = document.getElementById("hello");

console.log(title);
