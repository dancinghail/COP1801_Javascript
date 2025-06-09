// Function to validate the service quality input
function validateServiceQuality(quality) {
  const validQualities = ["great", "ok", "poor"];
  return validQualities.includes(quality.toLowerCase());
}

// Function to validate the service amount
function validateServiceAmount(amount) {
  return amount >= 5 && amount <= 500;
}

// Function to calculate the tip
function calculateTip(amount, quality) {
  let tipRate;

  switch (quality.toLowerCase()) {
    case "great":
      tipRate = 0.20;
      break;
    case "ok":
      tipRate = 0.15;
      break;
    case "poor":
      tipRate = 0.10;
      break;
  }

  return amount * tipRate;
}

// Start of script execution
const serviceAmountInput = prompt("Enter the service amount in dollars (e.g., 45.00):");
const serviceAmount = parseFloat(serviceAmountInput);

if (!validateServiceAmount(serviceAmount)) {
  alert("Invalid amount. Please enter a value between $5.00 and $500.00.");
} else {
  const qualityInput = prompt("Was the service great, ok, or poor?");
  
  if (!validateServiceQuality(qualityInput)) {
    alert("Invalid service quality. Please enter 'great', 'ok', or 'poor'.");
  } else {
    const tip = calculateTip(serviceAmount, qualityInput);
    alert(
      `Service amount: $${serviceAmount.toFixed(2)}\n` +
      `Service quality: ${qualityInput}\n` +
      `Recommended tip: $${tip.toFixed(2)}`
    );
  }
}
