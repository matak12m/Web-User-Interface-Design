signUpForm = document.getElementById("signUpForm")




function validateForm() {
    let email = document.forms["signUpForm"]["email-input"].value;
    let nickname = document.forms["signUpForm"]["nickname-input"].value;
    let password = document.forms["signUpForm"]["password-input"].value;
    let passwordCheck = document.forms["signUpForm"]["password-confirm"].value;
   
    if (email == "" || nickname == "" || password == "" || passwordCheck == "") {
        alert("some field has been left empty, please fill them out.")
        return false;
        
    }
    else if (passwordCheck != password) {
        alert("the passwords do not match. Please re-enter them.")
        return false;
    }
    else {
        return true;
    }


}