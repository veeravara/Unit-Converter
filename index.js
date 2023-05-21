// GRABBING ELEMENTS
const inputElement = document.getElementById("rectangle");
const inputButton = document.getElementById("button");
const lengthConversion = document.getElementById("group1");
const volumeConversion = document.getElementById("group2");
const massConversion = document.getElementById("group3");

// EVENT LISTENERS
inputButton.addEventListener("click", inputButtonFunction);

// FUNCTIONS
function length() {
  // Clear previous values
  lengthConversion.innerHTML = "";

  let value = inputElement.value;
  let feet = (value * 3.281).toFixed(3);
  let meter = (value / 3.281).toFixed(3);

  let lengthElement = document.createElement("h2");
  lengthElement.innerText = `Meters=${meter} and Feet=${feet}`;
  lengthConversion.appendChild(lengthElement);
}

function volume() {
  // Clear previous values
  volumeConversion.innerHTML = "";

  let value = inputElement.value;
  let liters = (value * 0.264).toFixed(3);
  let gallons = (value / 0.264).toFixed(3);

  let volumeElement = document.createElement("h2");
  volumeElement.innerText = `Liters=${liters} and Gallons=${gallons}`;
  volumeConversion.appendChild(volumeElement);
}

function mass() {
  // Clear previous values
  massConversion.innerHTML = "";

  let value = inputElement.value;
  let kilograms = (value * 2.204).toFixed(3);
  let pounds = (value / 2.204).toFixed(3);

  let massElement = document.createElement("h2");
  massElement.innerText = `Kilograms=${kilograms} and Pounds=${pounds}`;
  massConversion.appendChild(massElement);
}

function inputButtonFunction() {
  length();
  volume();
  mass();
}
