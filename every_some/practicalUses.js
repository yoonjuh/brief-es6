function Field(value) {
  this.value = value;
}

Field.prototype.validate = function() {
  return this.value.length > 0;
}

var username = new Field("2cool");
var password = new Field('my_password');
var birthdate = new Field('10/10/2010');

/* username.validate() && password.validate() && birthd......
  instead of using these long line of codes, we can simply use every helper
*/
//==========================================

// {
var fields = [username, password, birthdate];

var formIsValid = fields.every( (field) => {
  return field.validate();
});
/* this codes  on 21,22th line will go through all over fields variable
 to check if every single value is validate or not   */

if ( formIsValid) {
  // allow user to submit;
} else { 
  // alert some errors;
}

// };
