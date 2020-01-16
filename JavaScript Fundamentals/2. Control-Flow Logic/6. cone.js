/**
 * Write a JS function to calculate a cone’s volume and surface area by given height and radius at the base.
 * The input comes as two number arguments.
 * The first element is the cone’s radius and the second is its height.
 * The output should be printed to the console on a new line for every result.
 * 
 * Input: 3 5
 * Output:
 *  volume = 47.1239
 *  area = 83.2298
 * 
 * Input: 3.3 7.8
 * Output:
 *  volume = 88.9511
 *  area = 122.0159
 */

console.log("6. Cone");

function cone(radius, height)
{
    var volume = 0;
    var slant = 0;
    var area = 0;

    volume = (Math.PI * radius * radius * height);
    console.log("volume = " + (volume / 3).toFixed(4));

    slant = Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2));
    area = (Math.PI * radius * slant) + (Math.PI * radius * radius);
    console.log("area = " + area.toFixed(4));
}

cone(3, 5);
cone(3.3, 7.8);