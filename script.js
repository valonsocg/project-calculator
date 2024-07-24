function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(num1, operator, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
    default:
      return null;
  }
}

let currentInput = "";
let num1 = null;
let operator = null;
let num2 = null;

const buttons = document.querySelectorAll(".button");
const screen = document.querySelector(".numbers");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("value");

    if (value === "AC") {
      currentInput = "";
      num1 = null;
      num2 = null;
      operator = null;
      screen.textContent = "";
      return;
    }
    if (value === "+/-") {
      currentInput = currentInput
        ? (parseFloat(currentInput) * -1).toString()
        : "";
      screen.textContent = currentInput;
      return;
    }
    if (value === "%") {
      currentInput = currentInput
        ? parseFloat(currentInput).toString() / 100
        : "";
      screen.textContent = currentInput;
      return;
    }
    if (["/", "*", "-", "+"].includes(value)) {
      if (num1 === null && currentInput !== "") {
        num1 = parseFloat(currentInput);
        operator = value;
        currentInput = "";
        screen.textContent = `${num1} ${operator}`;
      } else if (num1 !== null && currentInput !== "") {
        num2 = parseFloat(currentInput);
        const result = operate(num1, operator, num2);
        num1 = result;
        operator = value;
        currentInput = "";
        screen.textContent = `${num1} ${operator}`;
      }
      return;
    }
    if (value === "=") {
      if (num1 !== null && operator !== null && currentInput !== "") {
        num2 = parseFloat(currentInput);
        const result = operate(num1, operator, num2);
        screen.textContent = `${result}`;
        num1 = result;
        operator = null;
        currentInput = "";
      }
      return;
    }
    currentInput += value;
    if (operator === null) {
      screen.textContent = currentInput;
    } else {
      screen.textContent = `${num1} ${operator} ${currentInput}`;
    }
  });
});
