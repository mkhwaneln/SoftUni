/**
 * Write a JS function that prints the binary logarithm (log2 x) for each number in the input.
 * The input comes as an array of number elements.
 * The output should be printed to the console, on a new line for each number.
 */

console.log("11. Binary Logarithm");

function binaryLogarithm(numbers)
{
    for (let i = 0; i < numbers.length; i++)
    {
        console.log(Math.log2(numbers[i]));
    }
}

binaryLogarithm([1, 3, 4, 5, 2]);