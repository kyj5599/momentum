// 조건문 (conditional) 2
// NaN : Not a Number
// isNaN() : 숫자가 아닌지 확인하는 함수
// isNaN은 boolean을 반환(return)한다.
const age = parseInt(prompt("How old are you?"));

// if
if (isNaN(age)) {
  // isNaN(age) === true
  console.log("Please write a number");
} else {
  console.log("Thank you for writing your age.");
}
