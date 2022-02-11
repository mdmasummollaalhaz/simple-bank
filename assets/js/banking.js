// Handle deposite button event
document.getElementById('deposit-btn').addEventListener('click', function(){
    // console.log('clicked');

    // Get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const depositAmount = depositInput.value;
    // console.log(depositAmount);

    const depositTotal = document.getElementById('deposit-total');
    depositTotal.innerText = depositAmount;

    // Clear inpur value
    depositInput.value = '';
    
    
    
})