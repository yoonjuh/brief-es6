var users = [

  { name: "Jill"},
  { name: 'Alex'},
  { name: 'Bill'}
];

let user ;

// for ( let i = 0; i < users.length; i++) {
//   if (users[i].name === 'Alex') {
//     user = users[i]; 
//     break;
//   }
// }
// user;

// =================== es5 => es6 =========================


users.find((user) => {
  // if (user.name === 'Alex') {
  //   return true;
  // }
  // this if statement is not necessary to write, it works the same as blow though
  return user.name === "Alex"; 
});

/* 1 thing I should remember with this find helper is that 
  in case there are more than 1 recode that matchs with return statement 
    in the array, this .find helper is not the perfect method 
      because even if there are several redocdes match to the statement, 
        it will return the first matching recode and it does not care rest of it
          thus if there are more than 1 recode that possiblly match with the 
            statement, then don't use this find helper! 

*/
