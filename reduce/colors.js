var primaryColors = [
  { color: 'red'},
  { colol: 'yellow'},
  { color: 'blue'}
  
];

primaryColors.reduce(function(previous, primaryColor) {
  previous.push(primaryColors.color);

  return previous;
}, [] );

/* Turned out, the initial value of the first argument of reduce helper
  can be anything, and I can take advantages of it. */

  primayColors.reduce(function(previous, primaryColor) {
    previous.push(primayCOlors.color);

    return previous;
  }, [])