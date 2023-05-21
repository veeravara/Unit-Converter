/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
// GRABBING ELEMENTS
const inputElement = document.getElementById("rectangle");
const inputButton = document.getElementById("button");
const lengthConversion = document.getElementById("group1");

// EVENT LISTENERS
inputButton.addEventListener("click", inputButtonFunction);

// FUNCTIONS
function inputButtonFunction() {
  // Clear previous values
  lengthConversion.innerHTML = "";

  const inputValue = inputElement.value;

  function length() {
    let value = inputValue;
    let feet = (value * 3.281).toFixed(3);
    let meter = (value / 3.281).toFixed(3);
    console.log(feet);
    console.log(meter);

    let lengthElement = document.createElement("h2");
    lengthElement.innerText = `Meters=${meter} and Feet=${feet}`;
    lengthConversion.appendChild(lengthElement);
  }

  length();
}





function volume(){
    let value=1;
    let liters=value*0.264;
    let gallons=value/0.264;
    console.log(liters)
    console.log(gallons)
}

function mass(){
    let value=1;
    let kilograms=value*2.204;
    let pounds=value/2.204;
    console.log(kilograms)
    console.log(pounds)
}


/*
const inputElement=document.getElementById("rectangle")
const inputButton=document.getElementById("button")

//EVENT LISTNERS
inputButton.addEventListener("click",inputButtonfunction)

//FUNCTIONS
function inputButtonfunction(){
    lengthElement.innerText=""
    const inputValue=inputElement.value
    function length(){
        
        let value=inputValue;
        let feet=value*3.281;
        feet=feet.toFixed(3)
        let meter=value/3.281;
        meter=meter.toFixed(3)
        console.log(feet)
        console.log(meter)
        let lengthConversion=document.getElementById("group1")
        lengthConversion.classList.add("lengthclass")
        let lengthElement=document.createElement("h2")
        lengthElement.innerText=`Meters=${feet} and Feet=${meter}`
        lengthConversion.appendChild(lengthElement)
            
    }
    length()
    
}
*/