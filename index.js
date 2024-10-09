function seterror(id, error) {
  element = document.getElementById(id);
  element.getElementsByClassName("formerror")[0].innerHTML = error;
}

function validateForm() {
  var returnval = true;
  var name = document.forms["myForm"]["fname"].value;
  if (name.length < 5) {
    seterror("name", "*Length of name is too short");
    returnval = false;
  }
  var number = document.forms["myForm"]["fnumber"].value;
  if (number.length !== 8 && number.length != 10) {
    seterror("number", "*number should be 8 or 10 digit");
    returnval = false;
  }
  var email = document.forms["myForm"]["femail"].value;
  if (email.length > 15) {
    seterror("email", "*Length of email is too long");
    returnval = false;
  }
  var pass = document.forms["myForm"]["fpass"].value;
  if (pass.length > 8) {
    seterror("pass", "*Length of password is too long");
    returnval = false;
  }
  var pass2 = document.forms["myForm"]["fpass2"].value;
  if (pass2.length !=== pass) {
    seterror("pass2", "*wrong password");
    returnval = false;
  }
  

  return returnval;
}
