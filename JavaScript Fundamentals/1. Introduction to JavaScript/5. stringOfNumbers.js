/**
 * Write a JS function that read a number n as input and prints all numbers from 1 to n, 
 * concatenated as a single string.
 * The input comes as one string element that needs to be parsed as a number.
 * The output should be returned as a result of your function.
 * 
 * Input: '11'
 * Output: '1234567891011'
 */


console.log("\n5. String of Numbers 1..N");

function stringOfNumbers(number)
{
    var num = parseInt(number);
    var count = 0;
    var output = "";
    
    if (num < 1)
    {
        console.log("Please enter a value greater than 1");
        return;
    }

    while (count < num)
    {
        ++count;
        output += count;
    }
    console.log(output);
}

stringOfNumbers('14');