const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const addBtn = document.getElementById('add-btn');
const subtractBtn = document.getElementById('subtract-btn');
const multiplyBtn = document.getElementById('multiply-btn');
const divideBtn = document.getElementById('divide-btn');
const resultSpan = document.getElementById('result');

addBtn.addEventListener('click', () => calculate(add));
subtractBtn.addEventListener('click', () => calculate(subtract));
multiplyBtn.addEventListener('click', () => calculate(multiply));
divideBtn.addEventListener('click', () => calculate(divide));

function calculate(operation) {
  const num1 = Number(document.getElementById('num1').value);
  const num2 = Number(document.getElementById('num2').value);
  
  if (isNaN(num1) || isNaN(num2)) {
    resultSpan.textContent = 'Invalid input';
    return;
  }
  
  const result = operation(num1, num2);
  resultSpan.textContent = `${result}`;
}
