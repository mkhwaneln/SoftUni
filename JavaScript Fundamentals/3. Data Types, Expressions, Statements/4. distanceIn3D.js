/**
 * Write a JS function that calculates the distance between the two points in 3D by given coordinates.
 * The input comes as an array of numbers. 
 * The first three elements are the x, y and z coordinates for the first point and 
 *  the second set of arguments are the coordinates of the other point.
 * The output should be printed to the console.
 * 
 * Input: [1, 1, 0, 5, 4, 0]
 * Output: 5
 * 
 * Input: [3.5, 0, 1, 0, 2, -1]
 * Output: 4.5
 */

console.log("4. Distance in 3D");

function distanceIn3D(coordinates)
{
    var distance = 0;
    //Coordinates of first point
    var x = coordinates[0];
    var y = coordinates[1];
    var z = coordinates[2];
    //Coordinates of second point
    var a = coordinates[3];
    var b = coordinates[4];
    var c = coordinates[5];

    var d1 = Math.pow((x - a), 2);
    var d2 = Math.pow((y - b), 2);
    var d3 = Math.pow((z - c), 2);

    distance = Math.sqrt(d1 + d2 + d3);

    console.log(distance);
}

distanceIn3D([1, 1, 0, 5, 4, 0]);
distanceIn3D([3.5, 0, 1, 0, 2, -1]);