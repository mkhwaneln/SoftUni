/**
 * Write a JS function that calculates the distance between two points by given x and y coordinates. 
 * Use objects to store the two points.
 * The input comes as four number elements in the format x1, y1, x2, y2.
 * Each pair of elements are the coordinates of a point in 2D space.
 * The output should be returned as a result of your function.
 *
 * Input: 2, 4, 5, 0
 * Output: 5
 * 
 * Input: 2.34, 15.66, -13.55, -2.9985
 * Output: 24.50778901186315
 */

console.log("\n8. Distance between Points");

function distanceBetweenPoints(x1, y1, x2, y2)
{
    //Use Pythagoras' Theorem
    var dx = 0;
    var dy = 0;
    var distance = 0;
    //Calculate diff between x-coords
    dx = x1 - x2;
    //Calculate diff between y-coords
    dy = y1 - y2;

    //square the differences
    dx = Math.pow(dx, 2);
    dy = Math.pow(dy, 2);

    distance = Math.sqrt(dx + dy);

    console.log(distance);
}

distanceBetweenPoints(2, 4, 5, 0);
distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985);