function forInputField(inputId){
    const inputField = document.getElementById(inputId);
    const inputText = inputField.value;
    const inputAmount = parseFloat(inputText);
    // clear input Field
    inputField.value = '';
    return inputAmount
}

function forPreviousAmount(previousTextId,newInputAmount){
    const previousTotal = document.getElementById(previousTextId)
    const previousTotalText = previousTotal.innerText;
    const previousTotalTextAmount = parseFloat(previousTotalText)
    const previousAmount = previousTotalTextAmount + newInputAmount;
    // set the value
    previousTotal.innerText = previousAmount;
    return previousAmount;
}

function getCurrentBalanced(){
    const balancedId = document.getElementById('balanced-total')
    const balancedText = balancedId.innerText;
    const balancedTextAmount = parseFloat(balancedText);
    return balancedTextAmount
}

function forTotalAmount(newAmount,isAdd){
    const balancedId = document.getElementById('balanced-total')
    // const balancedText = balancedId.innerText;
    // const balancedTextAmount = parseFloat(balancedText);
    const previousbalancedTotal = getCurrentBalanced()
    if(isAdd == true){
       balancedId.innerText = previousbalancedTotal + newAmount;
    }
    else{
        balancedId.innerText = previousbalancedTotal - newAmount
    }
    
}

document.getElementById('deposit-button').addEventListener('click', function(){
    // console.log(forInputField('deposit-input'))
    
    const depositAmount = forInputField('deposit-input');
    if(depositAmount > 0){
        forPreviousAmount('deposit-total',depositAmount)
        forTotalAmount(depositAmount,true)
    }
    

})
document.getElementById('withdraw-button').addEventListener('click', function(){
    // console.log(forInputField('deposit-input'))
    const withdrawAmount = forInputField('withdraw-input');
    const currentBalanced = getCurrentBalanced()
    if(withdrawAmount > 0 && withdrawAmount < currentBalanced){
        forPreviousAmount('withdraw-total',withdrawAmount)
        forTotalAmount(withdrawAmount,false)
    }
    if(withdrawAmount > currentBalanced){
        alert('insuficiant found')
    }
})
