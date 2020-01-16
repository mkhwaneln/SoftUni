/**
 * Write a JS function to check if a number is odd or even or invalid (fractions are neither odd nor even).
 * The input comes as a single number argument.
 * The output should be printed to the console. 
 * Print odd for odd numbers, even for even number and invalid for numbers that contain decimal fractions.
 * 
 * Input: 5
 * Ouptut: odd
 * 
 * Input: 8
 * Ouptut: even
 * 
 * Input: 1.5
 * Ouptut: invalid
 */

console.log("7. Odd / Even");

function oddEven(number)
{
    if (number % 2 == 0)
        console.log("even");
    else
    {
        if (number % 1 != 0)
            console.log("invalid");
        else
            console.log("odd");
    }
}

oddEven(5);
oddEven(8);
oddEven(1.5);
oddEven(1.0);