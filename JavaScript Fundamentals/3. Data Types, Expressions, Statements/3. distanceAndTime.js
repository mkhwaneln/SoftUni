/**
 * Two objects start from point A and travel in the same direction at constant speeds V1 and V2 for a period T.
 * Write a JS function that calculates the distance between the two object at the end of the period.
 * The input comes as array of numbers.
 * The first two elements are the speeds to the two objects in km/h and the third element is the time in seconds.
 * The output should be printed to the console. Calculate the distance in meters.
 * 
 * Input: [0, 60, 3600]
 * Output: 60000
 * 
 * Input: [11, 10, 120]
 * Output: 33.33333333333337
 * 
 * Input: [5, -5, 40]
 * Output: 111.11111111111111
 */

console.log("3. Distance and Time");

function distanceAndTime(numbers)
{
    var speed1 = numbers[0];
    var speed2 = numbers[1];
    var timeInHours = numbers[2] / 60 / 60;

    var distance1 = speed1 * timeInHours;
    var distance2 = speed2 * timeInHours;

    //Convert to metres
    //Math.abs ensures that it returns a positive value
    console.log(Math.abs(distance1 - distance2) * 1000);
}

distanceAndTime([0, 60, 3600]);
distanceAndTime([11, 10, 120]);
distanceAndTime([5, -5, 40]);