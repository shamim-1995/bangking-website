
// Step-1: add event listener to the deposit button.
document.getElementById('btn-deposit').addEventListener('click', function(){
// console.log('deposit button clicked');


// Step-2: Get the deposit amount from the deposit input field.
// For input field use .value to the value inside the input field.

const depositField = document.getElementById('deposit field');
const depositAmount = depositField.value;

// console.log(depositAmount);

// Step-3: get the current deposit total.
// For non-input(element other than input, textarea) use innerText to get the text.
const depositTotalElement = document.getElementById('deposit total');
const depositTotal = depositTotalElement.innerText;
depositTotalElement.innerText = depositAmount;



});