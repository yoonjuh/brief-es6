// var name = "Jane";
// var title = "Software Engineer";
// var hourlyWage = 40;
"======== es5 ==================="

// const keyword variable is not expected to be change whatsoever

"ES6"

const name = "Jane";
let title = "Software Engineer";
let hourlyWage = 40;

// some time later....
title = "Sinior Software Engineer";
hourlyWage = 45;
"==================================="

// Reasons

function count (targetString) {
  var characters = ['a', 'e', 'i', 'o', 'u']; // const
  var number = 0; // let
  /* The simplest reason why we use const and let is that it is 
  very easy to read then the var keyword. by just looking at code, 
  developer can see that a variable that declared with const keyword is not 
  going to be change, whlie let is not expected to be */
  for (var i = 0; i < targetString.length; i++) {
    if (characters.includes(targetString[i])) {
      number++;
    }
  }
  return number;
};
count("awsiuiauiootrta");


