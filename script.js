function appendToDisplay(value) {
  document.getElementById('display').value += value; // Appends the given value to the display element
}

function clearDisplay() {
  document.getElementById('display').value = ''; // Clears the display element
}

function calculate() {
  var displayValue = document.getElementById('display').value; // Retrieves the value from the display element
  var result = eval(displayValue); // Evaluates the expression in the display
  document.getElementById('display').value = result; // Updates the display with the calculated result
}


document.addEventListener('DOMContentLoaded', function() {
  const h1 = document.getElementsByTagName('h1')[0];
  h1.style.color = 'blue'; // Changes the color of the first h1 element to blue
})


