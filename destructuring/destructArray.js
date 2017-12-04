// pulling off individual property form array

const companies = [
  'Google',
  'Facebook',
  'Uber'
];

const [ name,name2, ...rest] = companies;
// companies[1]
name
name2
rest;