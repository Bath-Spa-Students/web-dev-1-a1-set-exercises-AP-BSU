window.onload = () => { //Calculator inputs
    const inputs = document.querySelectorAll("input");
    inputs.forEach(input => {
      input.addEventListener('change', calculate);
    });
  }
  //Overall total calculation
  function calculate() {
    const petrolPrice = document.getElementById("Petrol_Price").value;
    const liters = document.getElementById("Liters").value;
    const totalAmount = petrolPrice * liters;
    document.getElementById("totalAmount").innerText = totalAmount;
  }
  