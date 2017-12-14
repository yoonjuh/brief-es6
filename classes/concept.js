function Car (option) {
  this.title = option.title;
}
Car.prototype.drive = function () {
  return 'vroom';
}
const car = new Car({ title: "Focus" });
car; // Focus
car.drive(); // vroom
// =================== refactoring these code with ES6 class ======================

function Toyota(option) {
  
  this.color = option.color;
}

const toyota = new Toyota({ color: 'red', title: "Daily Driver" });
toyota; // {"color": "red"}

//es5
function Toyota(options) {
  Car.call(this,options)
  this.color = options.color;
}

Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota;
Toyota.prototype.honk - function () {
  return "beep";
}
const toyota = new Toyota({ color: 'red', title: "Daily Driver" });
toyota;  // {"title": "Daily Driver", "color": "red"}
toyota.drive(); //vroom
toyota.honk(); // beep

const { title, color } = car.

2 ** 2