// object
const player = {
  name: "yj",
  points: 10,
  fat: true,
};
console.log(player.name); // yj
console.log(player["name"]); // yj

console.log(player); // {name: "yj", points: 10, fat: true}
player.lastName = "potato";
player.points = player.points + 15;
console.log(player); // {name: "yj", points: 25, fat: true, lastName: "potato"}
