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
# `every` and `some` Helpers
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

###The Keywords `const` and `let`
##### In the ES6 syntax, the `var` keyword is replaced by `const` and `let` 
##### We can do anything with `var` keyword but the simply reason why we use those new keywords is that 
##### the const variable cannot be change under any circumstances. On the other hand, `let` variable can be change
##### Therefore, javascript code can be more readable than the `var` keyword used be.
```js
const name = "Jane"; // name variable usually not changes
let title = "Software Engineer"; // title can be change
let hourlyWage = 40; // age will change
```




