/**
 * Write a JS function that reads an integer n and prints all odd numbers from 1 to n.
 * The input comes as a single number n. 
 * The number n will be an integer in the range [1 … 100 000].
 * The output should hold the expected odd numbers, each at a separate line.
 * 
 * Input: 5
 * Output: 
 *  1
 *  3
 *  5
 * 
 * Input: 4
 * Output:
 *  1
 *  3
 * 
 * Input: 7
 * Output:
 *  1
 *  3
 *  5
 *  7
 */

console.log("16. Odd Numbers 1 to N");

function oddNumbers(number) {
    console.log("Number = " + number);

    for (let i = 0; i <= number; i++) {
        if (i % 2 != 0)
            console.log(i);
    }
}

oddNumbers(5);
oddNumbers(13);
oddNumbers(7);