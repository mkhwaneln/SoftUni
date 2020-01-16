/**
 * Write a JS function that prints a triangle of n lines of “$” characters like shown in the examples.
 * The input comes as a single number n (0 < n < 100).
 * The output consists of n text lines like shown below.
 * 
 * Input: 3
 * Output:
 *  $
 *  $$
 *  $$$
 * 
 * Input: 2
 * Output:
 *  $
 *  $$
 * 
 * Input: 4
 * Output:
 *  $
 *  $$
 *  $$$
 *  $$$$
 */

console.log("17. Triangle of Dollars");

function triangleOfDollars(number) {
    var triangle = '';
    var space = '';

    console.log("No. of lines: " + number);
    for (var i = 1; i <= number; i++) {
        //console.log("i = " + i);
        triangle = '';
        for (var j = 1; j <= i; j++) {
            //console.log("j = " + j);

            triangle += "$";
        }
        console.log(triangle);
    }
}

triangleOfDollars(3);
triangleOfDollars(8);
triangleOfDollars(5);