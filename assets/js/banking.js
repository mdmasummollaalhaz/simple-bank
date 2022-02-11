// Handle deposite button event
document.getElementById('deposit-btn').addEventListener('click', function(){
    // console.log('clicked');

    // Get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
    // console.log(depositAmount);


    // Update deposit total
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositeAmountText = depositTotal.innerText;
    const previousDepositeAmount = parseFloat(previousDepositeAmountText);
    const newDepositeTotal = previousDepositeAmount + newDepositAmount;
    depositTotal.innerText = newDepositeTotal;


    // Update account balance total
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;
    

    // Clear inpur value
    depositInput.value = '';
    
});


// handle withdraw  event handler
document.getElementById('withdraw-btn').addEventListener('click', function(){
    // console.log('Withdraw clicked');

    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    // console.log(newWithdrawAmount);


    // Set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);
    
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;


    // Update balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;


    // Clear withdraw input
    withdrawInput.value = '';

})