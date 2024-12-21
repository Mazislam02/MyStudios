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

    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm) || loanAmount <= 0 || loanTerm <= 0) {
        document.getElementById('mortgage-result').innerText = "Please enter valid numbers.";
        return;
    }

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

    if (isNaN(quantity) || quantity <= 0 || isNaN(productCost) || isNaN(serviceCost)) {
        document.getElementById('invoice-result').innerText = "Please enter valid numbers.";
        return;
    }

    const total = (productCost + serviceCost) * quantity;
    document.getElementById('invoice-result').innerText = `Total Invoice: $${total}`;
}

// Social News Program

// Array to store the list of links
const links = [];

// Function to display the menu and handle user actions
function showMenu() {
    let choice;
    do {
        choice = prompt(
            "Welcome to the Social News Program!\n" +
            "What would you like to do?\n" +
            "1. Show the list of links\n" +
            "2. Add a new link\n" +
            "3. Remove an existing link\n" +
            "4. Quit the program\n\n" +
            "Enter the number of your choice:"
        );

        switch (choice) {
            case "1":
                showLinks();
                break;
            case "2":
                addLink();
                break;
            case "3":
                removeLink();
                break;
            case "4":
                alert("Thank you for using the Social News Program. Goodbye!");
                break;
            default:
                alert("Please enter a valid option (1, 2, 3, or 4).");
        }
    } while (choice !== "4");
}

// Function to display the list of links
function showLinks() {
    if (links.length === 0) {
        alert("No links available.");
    } else {
        let message = "List of Links:\n";
        links.forEach((link, index) => {
            message += `${index + 1}. Title: ${link.title}, URL: ${link.url}, Author: ${link.author}\n`;
        });
        alert(message);
    }
}

// Function to add a new link
function addLink() {
    const title = prompt("Enter the title of the link:");
    const urlInput = prompt("Enter the URL of the link:");
    const author = prompt("Enter the author of the link:");

    // Ensure the URL starts with "http://" or "https://"
    const url = urlInput.startsWith("http://") || urlInput.startsWith("https://")
        ? urlInput
        : `http://${urlInput}`;

    links.push({ title, url, author });
    alert("Link added successfully!");
}

// Function to remove an existing link
function removeLink() {
    if (links.length === 0) {
        alert("No links available to remove.");
        return;
    }

    let index;
    do {
        index = parseInt(prompt("Enter the index of the link to remove (1 to " + links.length + "):"), 10);
    } while (isNaN(index) || index < 1 || index > links.length);

    // Remove the selected link
    links.splice(index - 1, 1);
    alert("Link removed successfully!");
}

// Start the Social News Program on demand
function startSocialNewsProgram() {
    showMenu();
}
