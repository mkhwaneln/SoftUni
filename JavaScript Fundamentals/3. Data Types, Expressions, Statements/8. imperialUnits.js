/**
 * Imperial units are confusing, but still in use in some backwards countries 
 *  (Myanmar, Liberia and the United States are the only countries still using them).
 * They are so confusing in fact, that native users struggle to convert between them.
 * Write a JS function that converts from inches to feet and inches. 
 * There are 12 inches in a foot. See the example for formatting details.
 * The input comes as a single number.
 * The output should be printed to the console.
 * 
 * Input: 36
 * Output: 3'-0"
 * 
 * Input: 55
 * Output: 4'-7"
 * 
 * Input: 11
 * Output: 0'-11"
 */

console.log("8. Imperial Units");

function imperialUnits(number)
{
    //12 inches in a foot
    var feet = Math.floor(number / 12);
    var inches = number % 12;

    console.log(feet + '\'-' + inches + '"');
}

imperialUnits(36);
imperialUnits(55);
imperialUnits(11);