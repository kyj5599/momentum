const h1 = document.querySelector("h1");

function handleTitleClick() {
  const clickedClass = "clicked";
  if (h1.classList.contains(clickedClass)) {
    h1.classList.remove(clickedClass);
  } else {
    h1.classList.add(clickedClass);
  }
}

h1.addEventListener("click", handleTitleClick);

// =======================================================

const body = document.body;

function handleWindowResize() {
  const windowWidth = window.innerWidth;

  if (windowWidth >= 1200) {
    body.style.backgroundColor = "yellow";
  } else if (windowWidth >= 600) {
    body.style.backgroundColor = "purple";
  } else {
    body.style.backgroundColor = "blue";
  }
}

window.addEventListener("resize", handleWindowResize);
