function estimateTransactionFee(amountToSend) {
  const percentageFee = 0.015; 
  const minimumFee = 10; 
  const maximumFee = 70; 

  if (typeof amountToSend !== 'number' || isNaN(amountToSend) || amountToSend < 0) {
    return "Invalid input. Please enter a valid amount to send.";
  }

  let calculatedFee = amountToSend * percentageFee;

  
  let finalFee = Math.max(calculatedFee, minimumFee);

  
  finalFee = Math.min(finalFee, maximumFee);

  const totalDebitedAmount = amountToSend + finalFee;

  return `
    Transaction Details:
    Amount to Send: KES ${amountToSend.toFixed(2)}
    Transaction Fee: KES ${finalFee.toFixed(2)}
    Total Amount Debited: KES ${totalDebitedAmount.toFixed(2)}
  `;
}


console.log(estimateTransactionFee(500)); 
console.log(estimateTransactionFee(8000));