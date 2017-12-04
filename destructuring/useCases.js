var expense = {
  type: "Business",
  amount: '$45 USD'
};
//ES5
//var type = expense.type; // Business
//var amount = expense.amount; // $45 USD

// ES6
const { type, amount } = expense;
// by doing this, you will be able to reduce duplicates
type; //Business
amount; // $45 USD