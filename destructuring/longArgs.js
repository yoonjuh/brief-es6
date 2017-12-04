function signup(username, password, email, dateOfBirth, city) {
  //Create new user
}
// other code
// other code
// other code
// other code
// other code
// other code
// other code
// other code
// other code
signup('myName', 'mypassword', 'myemail@example.com', '1/1/1990', "New York");
// In this case the order of arguments are matter, hard to remember
//========================================================================
function signedup({ email, password, dateOfBirth, city, username }) {
  //Create new user
}
const user = {
  username: 'myname',
  password: 'mypassword',
  email: 'myemail@example.com',
  dateOfBirth: '1/1/1900',
  city: 'New York'
};
signedup(user)