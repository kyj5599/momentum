// 조건문 (conditional) 3
const age = parseInt(prompt("How old are you?"));

// if / else if / else
if (isNaN(age) || age < 0) {
  console.log("Please a real write a number");
} else if (age < 18) {
  console.log("You are too young");
} else if (age >= 18 && age <= 50) {
  // && 는 AND => 둘다 ture 이어야 함
  // || 는 OR => 둘중 하나만 true이면 됨
  console.log("You can drink");
} else if (age > 50 && age <= 80) {
  console.log("You should exercise");
} else if (age > 80) {
  console.log("You can do whatever you want");
}
