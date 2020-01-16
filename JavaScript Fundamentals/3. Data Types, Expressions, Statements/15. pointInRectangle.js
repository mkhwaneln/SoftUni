/**
 * Write a JS function that takes as input 6 numbers x, y, xMin, xMax, yMin, yMax 
 *    and prints whether the point {x, y} is inside the rectangle or outside of it. 
 * If the point is at the rectangle border, it is considered inside.
 * The input comes as array of numbers. 
 * Its holds the representations of x, y, xMin, xMax, yMin, yMax. 
 * All numbers will in the range [-1 000 000 … 1 000 000]. 
 * It is guaranteed that xMin < xMax and yMin < yMax.
 * The output is a single line holding “inside” or “outside”.
 * 
 * Input: 8 -1 2 12 -3 3
 * Output: inside
 * 
 * Input: 12.5 -1 2 12 -3 3
 * Output: outside
 */

console.log("15. Point in Rectangle");

function pointInRectangle(numbers) {
    let x, y, xMin, xMax, yMin, yMax;

    //destructuring assignment
    [x, y, xMin, xMax, yMin, yMax] = numbers;
    if (x > xMin && x < xMax) {
        if (y > yMin && y < yMax) {
            console.log("inside");
            return;
        }
    }
    console.log("outside");
}

pointInRectangle([8, -1, 2, 12, -3, 3]);
pointInRectangle([12.5, -1, 2, 12, -3, 3]);