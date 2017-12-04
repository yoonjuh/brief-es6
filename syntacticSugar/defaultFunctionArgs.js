// es5
/*function makeAjaxRequest(url, method) {
  if (!method) {
    method = "GET";
  }
  // logic to make the request
} */

//es6
const makeAjaxRequest = (url, method = "GET") => {
  return method;
  // logic to make the request
}

makeAjaxRequest("google.com");
makeAjaxRequest("google.com", "POST");