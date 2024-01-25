// 1. 마우스가 title위로 올라가면 텍스트가 변경되어야 합니다.
// 2. 마우스가 title을 벗어나면 텍스트가 변경되어야 합니다.
// 3. 브라우저 창의 사이즈가 변하면 title이 바뀌어야 합니다.
// 4. 마우스를 우 클릭하면 title이 바뀌어야 합니다.
// 5. title의 색상은 colors 배열에 있는 색을 사용해야 합니다.
// 6. .css 와 .html 파일은 수정하지 마세요.
// 7. 모든 함수 핸들러는 superEventHandler내부에 작성해야 합니다.

const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const title = document.querySelector("h1");

const superEventHandler = {
  mouseOver: () => {
    title.innerHTML = "The mouse is here!";
    title.style.color = colors[0];
  },
  mouseLeave: () => {
    title.innerHTML = "The mouse is gone!";
    title.style.color = colors[1];
  },
  resize: () => {
    title.innerHTML = "You just resized!";
    title.style.color = colors[2];
  },
  contextMenu: () => {
    title.innerHTML = "That was a right click!";
    title.style.color = colors[4];
  },
};

title.addEventListener("mouseover", superEventHandler.mouseOver);
title.addEventListener("mouseleave", superEventHandler.mouseLeave);
window.addEventListener("resize", superEventHandler.resize);
window.addEventListener("contextmenu", superEventHandler.contextMenu);
