//es5
const defaultColors = ['red', 'green'];
const userFavoriteColors = [ 'orange', 'yellow'];
const fallColors = ['fire red', 'fall orange'];
defaultColors.concat(userFavoriteColors);

//es6 (spread operator)
['blue','green',...fallColors, ...defaultColors, ...userFavoriteColors];

//rest && spread
const validateShoppingList = (...items) => {
  if (items.indexOf('milk') < 0) {
    return ['milk', ...items ];
  }
  return items;
}
validateShoppingList('orange', 'bread', 'eggs');

/* In normal cases, the concat method will works just fine cause it works just
  just fine, but (...)speard operator is more convenience */