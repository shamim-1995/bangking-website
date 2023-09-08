// Step-1: add click event handler with the submit button.

document.getElementById('btn-submit').addEventListener('click', function(){
// console.log('submit button clicked');

// Step-2: get the email address inside the email input field.
//Always remember to use .value to get text from an input field.
const emailField = document.getElementById('user email');

const email = emailField.value;
// console.log(email);


// Step-3: Get password.
// set id on the html element.
// get the element .
// get the value from the element.
const passwordField = document.getElementById('user password');
const password = passwordField.value;
console.log(email, password);




// DANGER:Do Not Verify email password on the client side.

// Step-4:verify email amd password.

if(email == 'sashamim987@gmail.com' && password == 'secret'){
    console.log('valid user');
}
else{
    console.log('Invalid user');
}


});