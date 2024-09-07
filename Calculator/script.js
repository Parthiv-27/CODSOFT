// Get the input display by its ID
const display = document.getElementById('display');
// Get the button container by its ID
const buttons = document.getElementById('buttons');


// Click event listener for the buttons container
buttons.addEventListener('click', function(event) {
    const target = event.target;
    const value = target.value;

    // Check if a butto was clicked
    if (target.tagName === 'BUTTON') {
        if (value === 'AC') { // Will Clear the display
            clearDisplay();
        } else if (value === 'DE') {  // Delete the last character 
            deleteLastCharacter();
        } else if (value === '=') { // Do perform the calculation
            calculate();
        } else {    // add the button value to the display
            addInputToDisplay(value);
        }
    }
});

// TO clear the Display
function clearDisplay() {
    display.value = '';
}

// To delete the last character
function deleteLastCharacter() {
    display.value = display.value.slice(0, -1);
}

// To add input to the display 
function addInputToDisplay(value) {
    display.value += value;
}
// function to calculate the result
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}


