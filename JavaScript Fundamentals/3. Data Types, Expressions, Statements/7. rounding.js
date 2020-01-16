/**
 * Write a JS function that rounds numbers to specific precision.
 * The input comes as an array of two numbers. 
 * The first value is the number to be rounded and the second is the precision (significant decimal places). 
 * If a precision is passed, that is more than 15 it should automatically be reduced to 15.
 * The output should be printed to the console. 
 * Do not print insignificant decimals.
 * 
 * Input: [3.1415926535897932384626433832795, 2]
 * Output: 3.14
 * 
 * Input: [10.5, 3]
 * Output: 10.5
 */

console.log("7. Rounding");

function rounding(numbers)
{
    let number = numbers[0];
    let precision = numbers[1];

    var factor = Math.pow(10, precision);
    return Math.round(number * factor) / factor;
}

console.log(rounding([3.1415926535897932384626433832795, 2]));
console.log(rounding([10.5, 3]));