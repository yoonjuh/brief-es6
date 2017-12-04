// const add = function (a, b) {
//   return a + b;
// }

// add(1, 2);


const add = (a, b) =>  a + b;
// Whenever the function has only one javascript expression, 
// you can delete {} and return keyword 

"==============================================================="

const double =  number =>  2 * number

double(8); //16
/* whenever the function has single argument then we can even remove ()
  in this case, we don't need to ; after  the function body*/
const numbers = [1, 2, 3];

"===== es5 ====="
// numbers.map(function(number) {
//   return 2 * number;
// });
 "======= es6 ========"
// numbers.map((number) => {
//   return 2 * number;
// });
" ====== es6 even more simple========="
numbers.map(number =>  2 * number);

const add1 = number => number * 2
                    && number + 11;