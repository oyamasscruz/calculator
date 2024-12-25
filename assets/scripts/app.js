const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// we also can make this code more usable. lets condensign the code that reapeat

function getUserNumberInput() {
    return parseInt(userInput.value);
    // where we have ENTEREDNUMBER WE CAN CHANGE FOR THIS FUNCTION;
}
// we also can create a function to write our spring tamplate more efficient.
function createAndWriteOutPut(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function writeLog(
    operationId, 
    prevResult, 
    operationNumber, 
    newResult
) {
    const logEntry = {
        operation: operationId,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

// function calculateResult(calculationType) {
//     const enteredNumber = getUserNumberInput();
//     if (
//         calculationType !== 'ADD' &&
//         calculationType !== 'SUBTRACT' &&
//         calculationType !== 'MULTIPLY' &&
//         calculationType !== 'DIVIDE' ||
//         !enteredNumber
//     ) {
//         return;
//     }

//     const initialResult = currentResult;
//     let mathOperator;
//     if (calculationType === 'ADD'){
//         currentResult += enteredNumber;
//         mathOperator = '+';
//     } else if (calculationType === 'SUBTRACT') {
//         currentResult -= enteredNumber;
//         mathOperator = '-';
//     } else if (calculationType === 'MULTIPLY') {
//         currentResult *= enteredNumber;
//         mathOperator = '*';
//     } else if (calculationType === 'DIVIDE') {
//         currentResult /= enteredNumber;
//         mathOperator = '/';
//     }
//     createAndWriteOutPut(mathOperator, initialResult, enteredNumber);
//     writeLog(calculationType, initialResult, enteredNumber, currentResult);    
// }

// function add() {
//     // const enteredNumber = parseInt(userInput.value);
//     // const enteredNumber = getUserNumberInput();
//     // const initialResult = currentResult;
//     // currentResult = currentResult + enteredNumber;
//     calculateResult('ADD');
// }

// function subtract() {
//     // const enteredNumber = parseInt(userInput.value);
//     const enteredNumber = getUserNumberInput();
//     const calcDescription = `${currentResult} - ${enteredNumber}`;
//     currentResult = currentResult - enteredNumber;
//     outputResult(currentResult, calcDescription);
// }

// function multiply() {
//     // const enteredNumber = parseInt(userInput.value);
//     const enteredNumber = getUserNumberInput();
//     const calcDescription = `${currentResult} * ${enteredNumber}`;
//     currentResult = currentResult * enteredNumber;
//     outputResult(currentResult, calcDescription);
// }

// function divide() {
//     // const enteredNumber = parseInt(userInput.value);
//     const enteredNumber = getUserNumberInput();
//     const calcDescription = `${currentResult} / ${enteredNumber}`;
//     currentResult = currentResult / enteredNumber;
//     outputResult(currentResult, calcDescription);
// }

// instead of this we can wrote like this: 

// function subtract() {
//     // const enteredNumber = parseInt(userInput.value);
//     // const enteredNumber = getUserNumberInput();
//     // const initialResult = currentResult;
//     // currentResult = currentResult - enteredNumber;
//     // createAndWriteOutPut('-', initialResult, enteredNumber);
//     // writeLog('SUBTRACT', initialResult, enteredNumber, currentResult);
//     calculateResult('SUBTRACT');
// }

// function multiply() {
//     // // const enteredNumber = parseInt(userInput.value);
//     // const enteredNumber = getUserNumberInput();
//     // const initialResult = currentResult;
//     // currentResult = currentResult * enteredNumber;
//     // createAndWriteOutPut('*', initialResult, enteredNumber);
//     // writeLog('MULTIPLY', initialResult, enteredNumber, currentResult);
//     calculateResult('MULTIPLY');
// }

// function divide() {
//     // const enteredNumber = parseInt(userInput.value);
//     // const enteredNumber = getUserNumberInput();
//     // const initialResult = currentResult;
//     // currentResult = currentResult / enteredNumber;
//     // createAndWriteOutPut('/', initialResult, enteredNumber);
//     // writeLog('DIVIDE', initialResult, enteredNumber, currentResult);
//     calculateResult('DIVIDE');
// }

// addBtn.addEventListener('click', add);
// subtractBtn.addEventListener('click', subtract);
// multiplyBtn.addEventListener('click', multiply);
// divideBtn.addEventListener('click', divide);

// after we`ve learned bind(), we also can simplify our code like this below:
function calculate(operation) {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    let operator;
    if (operation === 'ADD') {
        currentResult += enteredNumber;
        operator = '+';
    } else if (operation === 'SUBTRACT') {
        currentResult -= enteredNumber;
        operator = '-';
    } else if (operation === 'MULTIPLY') {
        currentResult *= enteredNumber;
        operator = '*';
    } else {
        currentResult /= enteredNumber;
        operator = '/';
    }
    createAndWriteOutPut(operator, initialResult, enteredNumber);
    writeLog(operation, initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', calculate.bind(this, 'ADD'));
subtractBtn.addEventListener('click', calculate.bind(this, 'SUBTRACT'));
multiplyBtn.addEventListener('click', calculate.bind(this, 'MULTIPLY'));
divideBtn.addEventListener('click', calculate.bind(this, 'DIVIDE'));

