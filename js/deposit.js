
// Step-1: add event listener to the deposit button.
document.getElementById('btn-deposit').addEventListener('click', function () {
    // console.log('deposit button clicked');


    // Step-2: Get the deposit amount from the deposit input field.
    // For input field use .value to the value inside the input field.

    const depositField = document.getElementById('deposit field');

    const newDepositAmountString = depositField.value;

    const newDepositAmount = parseFloat(newDepositAmountString);
    // Step-7: Clear the deposit field.

    depositField.value = '';
    if (isNaN(newDepositAmount)) {
        alert('Please provide a valid number.');
        return;
    }

    // console.log(depositAmount);

    // Step-3: get the current deposit total.
    // For non-input(element other than input, textarea) use innerText to get the text.
    const depositTotalElement = document.getElementById('deposit total');

    const previousDepositTotalString = depositTotalElement.innerText;

    const previousDepositTotal = parseFloat(previousDepositTotalString);


    // step-4: add numbers to set the total deposit.
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    // set the deposit total.
    depositTotalElement.innerText = currentDepositTotal;

    // Step-5: get balance current total.
    const balanceTotalElement = document.getElementById('balance total');

    const previousBalanceTotalString = balanceTotalElement.innerText;

    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // Step-6:Calculate current total balance.
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    // set the balance total.
    balanceTotalElement.innerText = currentBalanceTotal;



});