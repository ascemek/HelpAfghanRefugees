function ValidateEmail(inputText){

  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var el_email = document.getElementByClass('email');   

  if(inputText.value.match(mailformat)){
    alert("Valid email address!");
    document.el_email.focus();
    return true;
    } else {
    alert("You have entered an invalid email address!");
    document.el_email.focus();
    return false;
  }
}
