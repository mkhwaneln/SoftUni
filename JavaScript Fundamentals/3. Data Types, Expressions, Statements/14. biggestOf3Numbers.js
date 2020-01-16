/**
 * Write a JS function that finds the biggest of 3 numbers.
 * The input comes as array of 3 numbers.
 * The output is the biggest from the input numbers.
 * 
 * Input: 5 -2 7
 * Output: 7
 * 
 * Input: 130 5 99
 * Output: 130
 * 
 * Input: 43 43.2 43.1
 * Output: 43.2
 * 
 * Input: -10 -20 -30
 * Output: -10
 */

console.log("14. Biggest of 3 Numbers");

function biggestOf3Numbers(numbers) {
    var firstNum = numbers[0];
    var secondNum = numbers[1];
    var thirdNum = numbers[2];

    var biggest = Math.max(firstNum, secondNum, thirdNum);
    console.log(biggest);
    /*
    if (numbers[0] > numbers[1] && numbers[0] > numbers[2]) {
        console.log(numbers[0]);
        return;
    } else if (numbers[1] > numbers[0] && numbers[1] > numbers[2]) {
        console.log(numbers[1]);
        return;
    } else
        console.log(numbers[2]);
    */
}

biggestOf3Numbers([5, -2, 7]);
biggestOf3Numbers([130, 5, 99]);
biggestOf3Numbers([43, 43.2, 43.1]);
biggestOf3Numbers([-10, -20, -30]);