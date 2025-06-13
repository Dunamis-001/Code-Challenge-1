// This code calculates a transaction fee based on the amount you want to send.

// It has a fee that's 1.5% of the amount,
// but it's never less than KES 10
// and never more than KES 70.

// The code makes sure you enter a valid number.

// It then figures out the fee, making sure it stays within the minimum and maximum limits.

// It tells you the amount you're sending, the fee, and the total amount that will be taken from your account.

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
    Total Amount Debited: KES ${totalDebitedAmount.toFixed(2)}`;
}


console.log(estimateTransactionFee(500)); 
console.log(estimateTransactionFee(8000));