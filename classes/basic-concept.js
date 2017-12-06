function Car(options) {
  this.title = options.title;
}

Car.prototype.drive = function() {
  return 'vroom';
}

const car = new Car({ title: "Focus" });
Car.drive; // vroom
car; // {"title": "Focus"};
