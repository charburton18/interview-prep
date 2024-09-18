// implement a calculator using JavaScript

/*
Restate:
Create the functionality of a calculator using only JavaScript.
What will the input be? Three variables: an operator, a number, a second number
What will the output be? A number like 3
What happens when the input contains something other than numbers, ., +, -, /, *, =? Return NaN if not numbers. Return 'Unable to compute, please refresh the page and try again.' if not operators or other errors.
What will the clear function do? Takes in anything, returns '' (if necessary)
If input includes '/0' make sure output says 'Cannot divide by zero.'
What to do when multiple inputs? Ex: '1+1+1+1=' ...decided to limit number of inputs to two numbers due to time constraint.
What to do when multiple operators? Ex: '1+1-1*1=' ...decided to limit number or operators to 1 operator due to time constraint.
****Should we RETURN, or ALERT, or CONSOLE.LOG the final value?
Are negative numbers acceptable inputs? Yes!
How do we turn a string with operations in it into an expression for the function to solve?
  - eval() - security risk!!, slow
  - use prompting to grab operation, and 2 numbers. If then statement (or switch case) to select what operation to use. Return result.

Examples:
'1+1' -> 2
'1-1' -> 0
'1*1' -> 1
'1/1' -> 1
'1/0' -> 'Cannot divide by zero.'
'-1+1' -> 0
'0.5 + 2' -> 2.5


Approach:
  - function promptOperation -> Prompt user for operation, store it as variable.
  - function promptNum1 -> Prompt user for num1, store it as a variable (use ParseFloat to convert valid string into number).
  - function promptNum2 -> Prompt user for num2, store it as a variable (use ParseFloat to convert valid string into number).
    - function calculate ->
      - If operation is +, then return num1+num2
      - If operation is -, then return num1-num2
      - If operation is *, then return num1*num2
      - If operation is /, then return num1/num2  (unless num2 === 0, then return 'Cannot divide by zero.')
      - else return 'Unable to compute, please refresh the page and try again.'
  - function runCalculator() ->
    - run promptOperation, promptNum1, promptNum2, and calculate.
    - Alert or console log or return result
  - run the runCalculator function
    - runCalculator();
Code: */
// Function prompts the user for an operation, and stores it in a variable called operation(+, -, *, or /).
const promptOperation = () => {
  const operation = prompt('Type one of the following operations: +, -, *, or /');
  return operation;
}

// Function prompts the user for a number, and stores it in a variable called num1.
const promptNum1 = () => {
  const num1 = parseFloat(prompt('Type a number'));
  return num1;
}

// Function prompts the user for another number, and stores it in a variable called num2.
const promptNum2 = () => {
  const num2 = parseFloat(prompt('Type a second number'));
  return num2;
}

// Function calculates the result of the operation applied to num1 and num2.
const calculate = (operation, num1, num2) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      // checks for divide by 0
      if (num2 === 0) {
        return 'Cannot divide by zero'
      } 
      return num1 / num2; 
    default:
      return 'Unable to compute, please refresh the page and try again.';
  }
}

const runCalculator = () => {
  const operation = promptOperation();
  const num1 = promptNum1();
  const num2 = promptNum2();
  const result = calculate(operation, num1, num2);
  alert(`Result: ${result}`)
  return result;
}

console.log(runCalculator());


/*
Testing:
Ran all test cases from "Examples" by the calculator.
  - Also included ++ or /* etc
  - Also included letters instead of numbers

Optimization:
- decided to use switch case instead of if else due to optimization.
*/