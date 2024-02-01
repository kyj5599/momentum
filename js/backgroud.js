const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// createElement() : HTML 요소를 생성
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

// appendChild() : HTML 요소를 추가 (마지막 자식으로 추가)
document.body.appendChild(bgImage);
// prepend() : HTML 요소를 추가 (첫번째 자식으로 추가)
// document.body.prepend(bgImage);
