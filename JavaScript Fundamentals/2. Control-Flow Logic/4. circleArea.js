/**
 * Write a JS function that calculates circle area by given radius. 
 * Print the area as it is calculated and then print it rounded to two decimal places.
 * The input comes as a single number argument.
 * The output should be printed to the console on a new line for each result.
 * 
 * Input: 5
 * Output:
 *  78.53981633974483
 *  78.54
 */

console.log("4. Circle Area");

function circleArea(radius)
{
    var area = Math.PI * radius * radius;
    console.log(area);
    console.log(Math.round(area * 100) / 100);
}

circleArea(5);
circleArea(3);
circleArea(10);