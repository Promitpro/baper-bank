document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const withdraw = withdrawField.value;

    if(isNaN(parseFloat(withdraw))){
        alert('please provide a valid number');
        return;
    }

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotal = withdrawTotalElement.innerText;

    

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;

    withdrawField.value = '';

    if(previousBalanceTotalString < parseFloat(withdraw))
    {
        alert('what the fuckkkkkkkkkkkkkk you do not have that much money to withdraw');
        return;
    }

    withdrawTotalElement.innerText = parseFloat(previousWithdrawTotal) + parseFloat(withdraw);
    

    balanceTotalElement.innerText = parseFloat(previousBalanceTotalString) - parseFloat(withdraw);

    
})