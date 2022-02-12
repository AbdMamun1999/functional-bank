document.getElementById('deposit-button').addEventListener('click',function(){
    // Get Deposit Value
    const depsitInput = document.getElementById('deposit-input');
    const depositInputText = depsitInput.value
    const depositInputAmount = parseFloat(depositInputText);
    // console.log(depositInputAmount)


    //deposit Total
    const depositTotal = document.getElementById('deposit-total')
    const depositTotalText = depositTotal.innerText;
    const depositTotalTextAmount = parseFloat(depositTotalText);
    const depositTotalAmount = depositTotalTextAmount + depositInputAmount;
    depositTotal.innerText = depositTotalAmount;


    //Update Total Amount
    const balancedTotal = document.getElementById('balance-total');
    const balancedTotalText = balancedTotal.innerText;
    const balancedTotalAmount = parseFloat(balancedTotalText);
    const newTotalAmount = balancedTotalAmount + depositInputAmount;
    balancedTotal.innerText = newTotalAmount;

    // clear input field
    depsitInput.value = '';


})
document.getElementById('withdraw-button').addEventListener('click',function(){
    // get The withdraw input value
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawText = withdrawInput.value;
    const withdrawInputAmount = parseFloat(withdrawText);


    // withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const withdrawTotalTextAmount = parseFloat(withdrawTotalText);
    const withdrawTotalAmount = withdrawTotalTextAmount + withdrawInputAmount;
    withdrawTotal.innerText = withdrawTotalAmount;

    // set total amount
    const balancedTotal = document.getElementById('balance-total');
    const balancedTotalText = balancedTotal.innerText;
    const balancedTotalAmount = parseFloat(balancedTotalText);
    const newTotalAmount = balancedTotalAmount - withdrawInputAmount;
    balancedTotal.innerText = newTotalAmount
    // clear deposit input
    withdrawInput.value = ''

})