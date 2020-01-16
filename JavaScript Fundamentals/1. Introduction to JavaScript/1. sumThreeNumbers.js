/*
Write a JS function that takes three numbers as input and outputs their sum.
The input comes as three number arguments passed to your function.
The output should be printed to the console.

Input: 2, 3, 4
Output: 9

Input: 1.5, 1.5, -1
Output: 2
*/

console.log("1. Sum 3 Numbers:");

function sumThreeNumbers(firstNum, secondNum, thirdNum) {
    console.log(firstNum + " + " + secondNum + " + " + thirdNum + " = " + (firstNum + secondNum + thirdNum));
}

sumThreeNumbers(2, 3, 4);
sumThreeNumbers(1.5, 1.5, -1);