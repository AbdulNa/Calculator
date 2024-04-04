let first_input = 1;
let operator = '+';
let second_input = 2;

function operate (operator, first_input, second_input) {
    switch (operator) {
        case '+':
            return add(first_input, second_input);
        case '-':
            return subtract(first_input, second_input);
        case '*':
            return multiply(first_input, second_input);
        case '/':
            return divide(first_input, second_input);
            throw new Error('Invalid operator');
    }
}
function add(a,b) {
    return a + b;
}
function subtract(a,b) {
    return a - b;
}
function multiply(a,b) {
    return a * b;
}
function divide(a,b) {
    if ( b == 0) {
        throw new Error('Division by zero is not allowed');
    }
    return a / b;
}

console.log(operate(operator, first_input, second_input));

/*
//selects all buttons inside the calculator
const buttons = document.querySelectorAll('.calculator input[type="button"]');

//add event listeners to each button
buttons.forEach(button => {
    button.addEventListener('click', function() {
//code to handle button click goes here
    });
});
//get reference to the display element 
const display = document.querySelector('input[name="display"]');
//inside the button click event listener

display.value += value;
// performing calculation ............
// handling error cases
*/
