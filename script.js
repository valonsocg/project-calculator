let operand1 = 0;
let operand2 = 0;
let operator = "";

function operate() {
  switch (operator) {
    case "+":
      operand1 = +operand1 + +operand2;
      break;
    case "-":
      operand1 = operand1 - operand2;
      break;
    case "*":
      operand1 = operand1 * operand2;
      break;
    case "/":
      operand1 = operand1 / operand2;
      break;
  }
  operator = "";
  operand2 = 0;
  updateUi();
}

function operation(op) {
  if (operator) {
    operate();
  }
  operator = op;
  operand1 = operand2 === 0 ? operand1 : operand2;
  operand2 = 0;

  updateUi();
}

function clear() {
  operand1 = 0;
  operand2 = 0;
  operator = "";
  updateUi();
}

function updateUi() {
  operand1Element.textContent = operand1 + operator;
  operand2Element.textContent = operand2;
}

function appendNumber(num) {
  if (num === "." && operand2.includes(".")) return;
  operand2 = operand2 === 0 ? num : operand2 + num;
  updateUi();
}

function minusOperand() {
  operand2 = operand2 * -1;
  updateUi();
}

function percent() {
  operand2 = operand2 / 100;
  updateUi();
}

const operand1Element = document.querySelector(".numbers");
const operand2Element = document.querySelector(".numbers2");
const dataClear = document.querySelector("#ac");
const numberButton = document.querySelectorAll(".number");
const minus = document.querySelector("#minus");
const percentil = document.querySelector("#percent");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector("#equals");

dataClear.addEventListener("click", () => {
  clear();
});

numberButton.forEach((button) => {
  button.addEventListener("click", () => {
    appendNumber(button.getAttribute("value"));
  });
});

minus.addEventListener("click", () => {
  minusOperand();
});

percentil.addEventListener("click", () => {
  percent();
});

operators.forEach((button) => {
  button.addEventListener("click", () => {
    operation(button.getAttribute("value"));
  });
});

equals.addEventListener("click", () => {
  operate();
});
