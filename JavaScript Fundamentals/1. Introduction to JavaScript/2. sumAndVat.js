/*
Write a JS function that sums a variable number of prices and calculates their VAT (Value Add Tax, 20%).
The input comes as an array of numbers. The number of elements will be different every time.
The output should be printed to the console on a new line for every entry.

Input: [1.20, 2.60, 3.50]
Output:
    sum = 7.3
    VAT = 1.46
    total = 8.76

Input: [3.12, 5, 18, 19.24, 1953.2262, 0.001564, 1.1445]
Output:
    sum = 1999.732264
    VAT = 399.94645280000003
    total = 2399.6787168
*/

console.log("\n2. Sum And VAT");

function sumAndVat(arrValues) {
    var index = 0;
    var sum = 0;
    var vat = 0;

    while (index < arrValues.length)
    {
        sum += arrValues[index];
        index++;
    }
    
    vat = sum * 0.2;

    console.log("sum = " + sum + "\n");
    console.log("VAT = " + vat + "\n");
    console.log("total = " + (vat + sum));
}

sumAndVat([1.20, 2.60, 3.50]);
sumAndVat([3.12, 5, 18, 19.24, 1953.2262, 0.001564, 1.1445]);