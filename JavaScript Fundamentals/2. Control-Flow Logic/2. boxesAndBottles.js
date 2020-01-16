/**
 * Write a JS function to calculate how many boxes will be needed to fit n bottles if each box fits k bottles.
 * The input comes as two number arguments. 
 * The first element is the number of bottles and the second is the capacity of a single box.
 * The output should be printed to the console.
 * 
 * Input: 20 5
 * Output: 4
 * 
 * Input: 15 7
 * Output: 3
 * 
 * Input: 5 10
 * Output: 1
 */

console.log("2. Boxes and Bottles");

function boxesAndBottles(bottles, boxes)
{
    if (bottles % boxes == 0)
        console.log(bottles / boxes);
    else
        console.log(Math.trunc(bottles / boxes) + 1);
}

boxesAndBottles(20, 5);
boxesAndBottles(15, 7);
boxesAndBottles(5, 10);