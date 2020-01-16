/**
 * Write a JS function that reads an 8-bit binary number and converts it to a decimal.
 * The input comes as one string element, representing a binary number.
 * The output should be printed to the console.
 * 
 * Input: 00001001
 * Output: 9
 * 
 * Input: 11110000
 * Output: 240
 */

console.log("11. Binary to Decimal");

function binaryToDecimal(binaryNumber)
{
    var decimalNumber = 0;
    var number = 0;
    var index = 7;
    var i = 0;

    while (index >= 0)
    {
        number = parseInt(binaryNumber[i]);
        decimalNumber += number * Math.pow(2, index);
        index--;
        i++;
    }
    console.log(decimalNumber);
}

binaryToDecimal("00001001");
binaryToDecimal("11110000");