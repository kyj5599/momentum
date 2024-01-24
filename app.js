// function 3
// object(player) + function(sayHello)
const player = {
  name: "yj",
  sayHello: function (otherPersonName) {
    console.log("hello! " + otherPersonName + " nice to meet you!");
  },
};

//
console.log(player.name); // yj
player.sayHello("lynn"); // hello! lynn nice to meet you!
player.sayHello("nico"); // hello! nico nice to meet you!
