# brief-es6

### `find` Helper
##### find helper will return the exact the item after the function
``` js 
const posts = [
    {id: 1, title: "New Post"},
    {id: 2, title: "Old Post"}
]
let comment = { postId: 1, content: "Good Post"}
const postForComment = (posts, comment) => {
    return posts.find((post) => {
        return post.id == comment.postId;  
    })
 }
 postForComment(posts, comment);
//{id: 1, title: "New Post"};

```

### `reduce` Helper
##### reduce helper takes function as an argument. Also it will takes the default vaule of the function's argument 
#####  the data type can be anything ex) 0, [], {}

``` js
let numbers = [10, 20, 30];
let sum = 0;

numbers.reduce((sum, number) => {
    return sum + number;
}, 0);
// 60
```
### `every` and `some` Helpers
##### every and some helpers have very sumilar functionality. The both helpers will return a boolean value. 
##### The both helpers will loop over the array but the only difference is that how they combind the results.
``` js
let veggies = [ 
    { name: 'Carrot' price: 15},
    { name: 'Onion' price: 20},
    { name: 'Cucumber' price: 25}
];

veggies.every((veggy) => {
    return veggy.price > 17;
});
// (Carrot = false && Onion = true && Cucumber = true) === false;

veggies.some((veggy) => {
    return veggy.price > 17;
});
// (Carrot = false || Onion = true || Cucumber = true) === true;
```

### `const` and `let`
##### In the ES6 syntax, the `var` keyword is replaced by `const` and `let` 
##### We can do anything with `var` keyword but the simple reason why we use those new keywords is that 
##### the const variable cannot be change under any circumstances. On the other hand, `let` variable can be change.
##### Therefore, javascript code can be more readable than the `var` keyword used be.
```js
const name = "John"; // name variable usually not changes
let title = "Software Engineer"; // title can be change
let age = 30; // age will change
```

### Syntactic Sugar 
##### The Syntax is not changed but we can use arrow function instead of function keyword.
##### `Arrow Function`
```js
//es5
var add = function(a) {
    return a * 2;
}
//es6 
const add = (a) => {
    return a * 2
}
// more simple
const add = a => a * 2
/* when there is only 1 argument then we don't have to write "()" 
        in this case, we don't put the ";" after the function body. 
        Also, when there is only one line of function body, we don't  user "{}" */
```
##### `templateString`
##### Now we don't have to write bunch of ", ' and + 
##### we can use ``(backtick) and ${}
```js
//Simple es5 concatenation
function getMessage() {
    var yaer = new Date().getFullYear();
    return 'The year is' + year;
};
// TemplateString
const getMessage = () => {    
    const year = new Date().getFullYear();
    return `The year is ${year}`;
};
```
##### `Enhanced Object Literals`
##### Just a bit of syntactic sugar here.
```js
const color = 'red';

const Car = {
  color, 
 /* this line of code refers to " color: color," 
 if the name and value pair share the same name, you can just simply write one of it */
  drive() {
    return 'Vroom!';
  },
  getColor() {
    return this.color;
  }
  /*drive() and getColor() used to be  "drive: function()",
  "getColor: function ()" but in es6, you get reduce it like the above */
};
```

### `Default Function Arguments`
#### In es6, you can simply set the default value of function arguments.
```js
// es5
/*function makeAjaxRequest(url, method) {
  if (!method) {
    method = "GET";
  }
} */

//es6
const makeAjaxRequest = (url, method = "GET") => {
  return method;
} 
```
### `rest` and `spread` Operators
##### The both operator have the exact same appearance.
##### what the `rest` operator does that it temporarily takes a list of values 
##### to an array then go through the defined logic operations 
```js
//rest
//es5
function addNumbers(numbers) {
  return numbers.reduce((sum, number) => {
    return sum + number
  },0)
}
addNumbers([1,2,3,4,5]);// 15
// In this case, we cannot handle the numbers that are not in an array.
//es6
const addNumbers1 = (...numbers) => {
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0)
}
addNumbers1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

//speard
const defaultColors = ['red', 'green'];
const userFavoriteColors = [ 'orange', 'yellow'];
const fallColors = ['fire red', 'fall orange'];
//es5
defaultColors.concat(userFavoriteColors);
//es6 (spread operator)
['blue','green',...fallColors, ...defaultColors, ...userFavoriteColors];
```

=========================================================================
### `Object Destructuring`

##### This syntax will enable us to impove our application performances by reduce execution! 

```js
const person = {
    name: Edwin,
    age: 27,
    location: {
        city: Toronto,
        current: Mississauga,
    },
}

const { name, age } = person; 
// this is exactly identical as (person.name) and (person.age)

const { city, current } = person.location;
// person.location.city and person.location.current

const { homeTown } = person.location;
// In case of homeTown, because the object does not contain a value named homeTown, 
// It will generate a name property of homeTown but it is undefined now 
const { homeTown = 'Ulsan' } = person.location;
// We can also assign a default value. if there is a name value pair of homeTown inside of the object,
// it will use the value, but other than that It will use this default value
const { city: homeTown = 'Ulsan' }
// We can also do something like this 
// What this doing right now is assign homeTown with default value to exiting property "city"
// It is kind of alias effect if somebody call homeTown property, It will automatically reference the city property
// One thing you should keep in mind that after assign a exiting property as another name, you can only access it with 
//assigned name 

//ex
const { city: homeTown = 'Ulsan' } = person.location;
console.log(city) // not working 
console.log(homeTown) // Toronto Because city is already assigned value
// if city does not assigned than the default value 'Ulsan' will be display

/* Object Destructuring is quite impotant feature of ES6. Every time we say person.location.city or .something, 
    because the values are in depth of the object, it takes more time to grasp those values and it will result in 
    low performance. However, if we use this efficient syntax, it is already navigated until right before the actual value,
    as a result of that, Javascript will get the value what it needs to grasp from the beggining, it will end up with high 
    performance!*/
   
```

### `Generator`

##### Generator is  allow developers to control functionality in Javascript manually in custom way...

```js
const testingTeam = {
    lead: 'vem',
    tester: 'watt'
    [Symbol.iterator]: function* (){
        yield lead;
        yield tester;
    },
}
const engineeringTeam = {
    testingTeam,
    lead: 'Jill',
    manager: 'amanda',
    engineer: 'hugo',
    [Symbol.iterator]: function* () {
        yield this.lead;
        yield this.manager;
        yield this.engineer;
        yield* this.testingTeam;
    }
}

const name = [];
for(let name of engineeringTeam){
    names.push(name);
}

// for of loop is a perfect match with Generator
// Generator is commonly used for the background processing
// [Symbol.iterator] is identical as just a key value of that  object
```




