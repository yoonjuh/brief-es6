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
}

function* teamIterator(team) {
    yield team.lead;
    yield team.manager;
    yield team.engineer;
    yeild* team.testingTeam;
}

const name = []
for(let name of teamIterator(engineeringTeam)){
    names.push(name);
}
// for of loop is a perfect match with Generator
// [Symbol.iterator] is identical as just a key value of that  object
```




