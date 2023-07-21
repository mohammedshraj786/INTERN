const numberButtons = document.querySelectorAll('.number');
    const operatorButtons = document.querySelectorAll('.operator');
    const clearButton = document.getElementById('clear');
    const equalsButton = document.getElementById('equals');
    const resultField = document.getElementById('result');
​
    // Add event listeners to number buttons
    numberButtons.forEach(button => {
      button.addEventListener('click', () => {
        resultField.value += button.value;
      });
    });
​
    // Add event listeners to operator buttons
    operatorButtons.forEach(button => {
      button.addEventListener('click', () => {
        resultField.value += button.value;
      });
    });
​
    // Add event listener to clear button
    clearButton.addEventListener('click', () => {
      resultField.value = '';
    });
​
    // Add event listener to equals button
    equalsButton.addEventListener('click', () => {
      try {
        const result = eval(resultField.value);
        resultField.value = result;
      } catch (error) {
        resultField.value = 'Error';
      }
    });