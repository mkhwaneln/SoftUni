/**
 * Write a JS function that receives a date as array of strings containing day, month and year in that order. 
 * Your task is to print the last day of previous month (the month BEFORE the given date).
 * Check the examples to better understand the problem.
 * The input comes as an array of numbers.
 * The output should be a single number representing the last day of the previous month.
 * 
 * Input: [17, 3, 2002]
 * Output: 28
 * 
 * Input: [13, 12, 2004]
 * Output: 30
 */

console.log("13. Last Month");

function lastMonth(givenDate)
{
    var year = givenDate[2];
    var month = givenDate[1];
    var day = givenDate[0];

    if (givenDate[1] == 1)
        month = 12;
    else
        month -= 1;

    var endDate = new Date(year, month, 0).getDate();
    console.log(endDate);
}

lastMonth([17, 3, 2002]);
lastMonth([3, 1, 1998]);
lastMonth([13, 12, 2004]);
lastMonth([25, 3, 2016]);