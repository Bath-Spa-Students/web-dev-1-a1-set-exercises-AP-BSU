function calculateTotal() {
    // To receive inputed floats from per price liters and liters amount
    var petrolPrice = parseFloat(document.getElementById("petrolPrice").value);
    var liters = parseFloat(document.getElementById("liters").value);
    
    // Overall calculation
    var totalCost = petrolPrice * liters;
    
    // To display total cost value
    document.getElementById("totalCost").textContent = "Total Cost: " + totalCost.toFixed(2);
  }
  