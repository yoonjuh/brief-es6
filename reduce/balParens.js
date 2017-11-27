function balanceParens (string) {
  return !string.split("").reduce(function(previous, char) {
    if (previous < 0) { return previous;}
    if (char === "(") {return ++previous;}
    if (char === ')') {return --previous;}

    return previous;
  }, 0)
}

balanceParens("()()()");

"===================================================="

const desks = [
  { type: 'sitting'},
  { type: 'standing'},
  { type: 'sitting'},
  { type: 'standing'},
  { type: 'sitting'}
];

const deskType = desks.reduce((counter, desk) => {
  if (desk.type === "sitting") {
    ++ counter.sitting;
  } else {
    ++ counter.standing;
  }

  return counter;

}, { sitting: 0, standing: 0})