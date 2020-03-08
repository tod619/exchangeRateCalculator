// Variables
const currencyEL_one = document.getElementById("currencey-one");
const amountEl_one = document.getElementById("amount-one");
const currencyEL_two = document.getElementById("currency-two");
const amountEl_two = document.getElementById("amount-two");

const rateEl = document.getElementById("rate");
const swap = document.getElementById("swap");

// fetch Exchange Rates and Update DOM
function calculate() {
  console.log("RAN");
}

// Add EventListners
currencyEL_one.addEventListener("change", calculate);
amountEl_one.addEventListener("input", calculate);
currencyEL_two.addEventListener("change", calculate);
amountEl_two.addEventListener("input", calculate);

calculate();
