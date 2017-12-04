function addNumbers(numbers) {
  return numbers.reduce((sum, number) => {
    return sum + number
  },0)
}

// In this case, we cannot handle the numbers that are not in an array

addNumbers([1,2,3,4,5]);// 15

//es6
const addNumbers1 = (...numbers) => {
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0)
}
addNumbers1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // 55
/*  what the rest operator does is that it temporarily takes a list of values 
to an array then go through the defined logic operations 
*/