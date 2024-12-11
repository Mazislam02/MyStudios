// MPG Calculator Functionality
function calculateMPG() {
    const milesTraveled = parseFloat(document.getElementById('miles').value);
    const gallonsOfGasUsed = parseFloat(document.getElementById('gallons').value);

    if (isNaN(milesTraveled) || isNaN(gallonsOfGasUsed) || gallonsOfGasUsed <= 0) {
        document.getElementById('result').innerText = "Please enter valid numbers for both fields.";
        return;
    }

    const milesPerGallon = milesTraveled / gallonsOfGasUsed;
    document.getElementById('result').innerText = `Your car's mileage is ${milesPerGallon.toFixed(2)} MPG.`;
}

// Mortgage Calculator Functionality
function calculateMortgage() {
    const loanAmount = parseFloat(document.getElementById('loan-amount').value);
    const interestRate = parseFloat(document.getElementById('interest-rate').value) / 100 / 12; // Monthly rate
    const loanTerm = parseInt(document.getElementById('loan-term').value) * 12; // Total months

    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm) || loanAmount <= 0 || loanTerm <= 0) {
        document.getElementById('mortgage-result').innerText = "Please enter valid values for all fields.";
        return;
    }

    const monthlyPayment = (loanAmount * interestRate * Math.pow(1 + interestRate, loanTerm)) / 
                           (Math.pow(1 + interestRate, loanTerm) - 1);

    const totalPayment = monthlyPayment * loanTerm;

    document.getElementById('mortgage-result').innerText = 
        `Monthly Payment: $${monthlyPayment.toFixed(2)}\nTotal Payment: $${totalPayment.toFixed(2)}`;
}
