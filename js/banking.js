//handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function () {
    //console.log('deposit button clicked');

    //get the ammount deposited
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmmountText = depositInput.value;
    const newDepositAmmount = parseFloat(newDepositAmmountText);
    //console.log(newDepositAmmount);
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositAmountText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountText);
    //console.log(depositTotal.innerText);

    // update deposite amount
    const newDepositTotal = previousDepositAmount + newDepositAmmount;
    depositTotal.innerText = newDepositTotal;

    //update balance amount 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmmount;
    balanceTotal.innerText = newBalanceTotal;
    // clear the deposit input field
    depositInput.value = '';

});


//handle withdraw handler

document.getElementById('withdraw-button').addEventListener('click', function () {
    // console.log('withdraw button clicked');
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    // console.log(newWithdrawAmount);

    //set withdraw Total

    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);
    //console.log(previousWithdrawTotal);
    const newwithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newwithdrawTotal;

    //Update balance amount

    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;


    //clear withdraw Input field

    withdrawInput.value = '';

});