//function to check validation (Required field)
function checkReqFields() {
  var returnValue;
  var name = document.getElementById("txtName").value;
  var last = document.getElementById("txtLast").value;
  var email = document.getElementById("txtEmail").value
  var code = document.getElementById("txtCode").value
  var info = document.getElementById("txtInfo").value

  returnValue = true;
  if (name.trim() == "") {
      document.getElementById("reqTxtName").innerHTML = "* First Name is required.";
      returnValue = false;
  }
  if (last.trim() == "") {
      document.getElementById("reqTxtLast").innerHTML = "* Last Name is required.";
      returnValue = false;
  }
  if (email.trim() == "") {
    document.getElementById("reqTxtEmail").innerHTML = "* E-mail is required.";
    returnValue = false;
  }
  if (code.trim() == "") {
  document.getElementById("reqTxtCode").innerHTML = "* Postal Code is required.";
  returnValue = false;
  }
  if (info.trim() == "") {
  document.getElementById("reqTxtInfo").innerHTML = "* This field is required.";
  returnValue = false;
  }
  return returnValue;
}