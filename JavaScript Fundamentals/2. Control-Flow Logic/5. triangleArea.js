/**
 * Write a JS function that calculates a triangle’s area by its 3 sides.
 * The input comes as three number arguments, representing one side of a triangle.
 * The output should be printed to the console.
 * 
 * Input: 2 3.5 4
 * Output: 3.4994419198
 */

console.log("5. Triangle Area");

function triangleArea(a, b, c)
{
    //Use Heron's formula
    var s = 0;
    var area = 0;

    //Calculate semi-perimeter
    s = (a + b + c) / 2;
    //Calculate area
    area = s * (s - a) * (s - b) * (s - c);
    //Find square root
    console.log(Math.sqrt(area).toFixed(10));

}

triangleArea(2, 3.5, 4);