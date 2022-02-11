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

    // Clear inpur value
    depositInput.value = '';



    // Update account balance total
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;
    
    
    
})