// MPG Calculator Functionality
function calculateMPG() {
    const milesTraveled = parseFloat(document.getElementById('miles').value);
    const gallonsOfGasUsed = parseFloat(document.getElementById('gallons').value);

    if (isNaN(milesTraveled) || isNaN(gallonsOfGasUsed) || gallonsOfGasUsed <= 0) {
        document.getElementById('result').innerText = "Please enter valid numbers.";
        return;
    }

    const milesPerGallon = milesTraveled / gallonsOfGasUsed;
    document.getElementById('result').innerText = `Your car's mileage is ${milesPerGallon.toFixed(2)} MPG.`;
}

// Mortgage Calculator
function calculateMortgage() {
    const loanAmount = parseFloat(document.getElementById('loan-amount').value);
    const interestRate = parseFloat(document.getElementById('interest-rate').value) / 100 / 12; 
    const loanTerm = parseInt(document.getElementById('loan-term').value) * 12;

    const monthlyPayment = (loanAmount * interestRate * Math.pow(1 + interestRate, loanTerm)) /
                           (Math.pow(1 + interestRate, loanTerm) - 1);

    const totalPayment = monthlyPayment * loanTerm;
    document.getElementById('mortgage-result').innerText = 
        `Monthly Payment: $${monthlyPayment.toFixed(2)}\nTotal Payment: $${totalPayment.toFixed(2)}`;
}

// Invoice Calculation
function calculateInvoice() {
    const productCost = parseFloat(document.getElementById('product').value);
    const serviceCost = parseFloat(document.getElementById('services').value);
    const quantity = parseInt(document.getElementById('quantity').value);

    if (isNaN(quantity) || quantity <= 0) {
        document.getElementById('invoice-result').innerText = "Please enter a valid quantity.";
        return;
    }

    const total = (productCost + serviceCost) * quantity;
    document.getElementById('invoice-result').innerText = `Total Invoice: $${total}`;
}
