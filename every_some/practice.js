var computers = [
  { name: "Apple", ram: 24},
  { name: 'Compaq', ram: 4},
  { name: "Acer", ram: 32 }
];

var allComputersCanRunProgram = true;
var onlySomeComputersCanRunProgram = false ;

for ( let i = 0; i < computers.length; i++) {
  var computer = computers[i];

  if (computer.ram < 16) {
    allComputersCanRunProgram = false;
  } else {
    onlySomeComputersCanRunProgram = true ;
  }
}

'==========='
allComputersCanRunProgram;
onlySomeComputersCanRunProgram;
'++++ every ++++'

computers.every( (computer) => {
  return computer.ram > 16;
}); ' false '

'====== some ========'

computers.some( (computer) => {
  return computer.ram > 16 ; 
}); 'true'

/* every and some helper

  every and some helper both return value of boolean 
  both will go through all the index of array, 
  
  every: 
    array = [ index1 , index2, index3 ]
    every =>  true &&  false && true  => false 
      as it combines all the boolean values before it returns 
        single boolean value and it combines with && operator, 
        if a single value is false, then eventually it will return false 

  some: 
    some it really similar to every the only difference is that 
      some combines the boolean values with || operator, 

      array = [ index1, index2, index3 ];
      some =>  false || false || true => true

*/