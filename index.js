class Calculator {
  constructor() {
    this.textArea = document.getElementById("display");
    this.clear();
  }

  clear() {
    this.textArea.value = "";
    this.operation = undefined;
  }

  appendNumber(number) {
    this.textArea.value += number;
  }

  updateDisplay() {
    this.textArea.value = this.textArea.value;
  }
}

const calculator = new Calculator();

const numberbuttons = document.querySelectorAll("input[type=button]");
/*const operationButtons = document.querySelectorAll("input[operator-sign]")
const equalbutton = document.querySelector("input[equal-sign]")
const deletebutton = document.querySelector("input[delete-sign]")
const clearbutton =  document.querySelector("input[clear-sign]")
*/

numberbuttons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.value);
    calculator.updateDisplay();
  });
});

/*
 delete() {

    }
    
    chooseOperation() {

    }
    
    compute() {

    }
*/
/*
let input1 = "";
let operator = "";
let input2 = "";

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

function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
            throw new Error('Invalid operator');
    }
}
*/

/*
//selects all buttons inside the calculator
const buttons = document.querySelectorAll('.calculator input[type="button"]');


//get reference to the display element 
const display = document.querySelector('input[name="display"]');
//inside the button click event listener

display.value += value;
// performing calculation ............
// handling error cases


const buttons = document.querySelectorAll("input[type= 'buttons']");
buttons.forEach(button => {
    button.addEventListener("click", handleClick);
});
*/
