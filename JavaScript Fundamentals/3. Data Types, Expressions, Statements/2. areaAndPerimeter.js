/**
 * Write a JS function that calculates the area and perimeter of a rectangle by given two sides.
 * The input comes as 2 numbers that are the lengths of the 2 sides of the rectangle (sideA and sideB).
 * The output should be printed to the console on two lines.
 * 
 * Input: 2 2
 * Output: 
 *  Area: 4
 *  Perimeter: 8
 * 
 * Input: 1 3
 * Output:
 *  Area: 3
 *  Perimeter: 8
 * 
 * Input: 2.5 3.14
 * Output:
 *  Area: 7.85
 *  Perimeter: 11.28
 */

console.log("2. Area and Perimter");

function areaAndPerimeter(sideA, sideB)
{
    console.log("Area: " + Math.round((sideA * sideB) * 100) / 100);
    console.log("Perimeter: " + Math.round((2 * (sideA + sideB)) * 100) / 100);
}

areaAndPerimeter(2, 2);
areaAndPerimeter(1, 3);
areaAndPerimeter(2.5, 3.14);