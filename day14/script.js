let currentInput = '';
let operation = null;
let firstOperand = null;

function appendNumber(number) {
    currentInput += number.toString();
    document.getElementById('result').value = currentInput;
}

function setOperation(op) {
    if (currentInput === '') return;
    
    if (firstOperand === null) {
        firstOperand = parseFloat(currentInput);
    } else if (operation) {
        firstOperand = performCalculation(firstOperand, parseFloat(currentInput), operation);
    }

    operation = op;
    currentInput = '';
}

function performCalculation(first, second, operation) {
    switch (operation) {
        case '+':
            return first + second;
        case '-':
            return first - second;
        case '*':
            return first * second;
        case '/':
            if (second !== 0) {
                return first / second;
            } else {
                alert('Cannot divide by zero');
                return first;
            }
        default:
            return second;
    }
}

function calculateResult() {
    if (currentInput === '') return;
    
    if (operation) {
        currentInput = performCalculation(firstOperand, parseFloat(currentInput), operation).toString();
        document.getElementById('result').value = currentInput;
        operation = null;
        firstOperand = null;
    }
}

function clearResult() {
    currentInput = '';
    firstOperand = null;
    operation = null;
    document.getElementById('result').value = '';
}
