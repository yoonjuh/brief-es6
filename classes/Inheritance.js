// function Car (options) {
//   this.title = options.title;
// }

// Car.prototype.drive = function() {
//   return 'vroom';
// }

// function Toyota(options) {
//   Car.call(this, options);
//   this.color = options.color;
// }

// // Toyota.prototype = Object.create(Car.prototype);
// // Toyota.prototype.constructor = Toyota;

// // Toyota.prototype.honk = function() {
// //   return 'beep';
// // }

// const toyota = new Toyota({ color: 'red', title: 'Daily Driver'});
// toyota; // {"color": "red"};

'==========================before Class existance============================'

class Car {
  constructor(options) { //special method
    this.title = options.title;
  }
  drive() {
    return 'vroom';
  }
}

// const car = new Car({ title: 'Toyota' });
// car.drive(); //vroom;

class Toyota extends Car {
  constructor(options) {
    super(options); // Car.constructor();
    this.color = options.color;
  }

  honk() {
    return 'beep';
  }
}

const toyota = new Toyota({ color: 'red', title: 'Daily Driver' });
'---'
toyota.honk(); // beep
toyota;  //{ "color": "red"};