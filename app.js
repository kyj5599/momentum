// 데이터 구조
// array 배열 []
const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";

// const daysOfWeek = mon + tue + wed + thu + fri + sat + sun;
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
console.log(daysOfWeek); // ["mon", "tue", "wed", "thu", "fri", "sat"]

// Get Item from Array
console.log(daysOfWeek[4]); // fri

// Add one more day to the array
daysOfWeek.push("sun");
console.log(daysOfWeek); // ["mon", "tue", "wed", "thu", "fri", "sat", "sun"]
