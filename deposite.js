document.getElementById('btn-deposite').addEventListener('click', function(){
    const depositeField = document.getElementById('deposite-field');
    const newDepositeAmount = depositeField.value;

    if(isNaN(parseFloat(newDepositeAmount)))
    {
        alert('please provide a valid number');
        return;
    }
    

    const depositeTotalElement = document.getElementById('deposite-total');
    const previousDepositeTotal = depositeTotalElement.innerText;

    const currentDepositeTotal = parseFloat(newDepositeAmount) + parseFloat(previousDepositeTotal);

    depositeTotalElement.innerText = currentDepositeTotal;


    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    balanceTotalElement.innerText = parseFloat(newDepositeAmount) + previousBalanceTotal;

    depositeField.value = '';
})

