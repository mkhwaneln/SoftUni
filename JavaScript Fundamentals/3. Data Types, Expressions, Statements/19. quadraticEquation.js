/**
 * Write a JS function to solve a quadratic equation by given in 
 *  standard form as its coefficients: a, b, c.
 * The input comes as 3 numbers a, b and c. The value of a will be non-zero.
 * The output depends on the equation:
 *  - It holds two numbers x1 and x2 if the equation has two different solutions(roots): x1 and x2.
 *      -> First print the smaller root, then the greater.
 *  - It holds a single number x if the equation has only one solution (root): x.
 *  - It holds the text “No” if the equation has no solutions (no real roots).
 * 
 * Input: 6, 11, -35
 * Output: 3.5 1.66667
 * 
 * Input: 1, -12, 36
 * Output: 6
 * 
 * Input: 5, 2, 1
 * Output: No
 */

console.log("19. Quadratic Equation");

function quadraticEquation(a, b, c) {
    let x1, x2;
    var discriminant = (b * b) - (4 * a * c);

    if (discriminant > 0) {
        x1 = ((-b + Math.sqrt(discriminant)) / (2 * a));
        x2 = ((-b - Math.sqrt(discriminant)) / (2 * a));
        console.log(`1st root: ${x1}`);
        console.log(`2nd root: ${x2}`);
    } else if (discriminant == 0) {
        x1 = b / (2 * a);
        console.log(`root: ${x1}`);
    } else {
        console.log("No");
    }

    //sup() -> make text superscript
    //sub() -> make text subscript
}

quadraticEquation(6, 11, -35);
quadraticEquation(1, -12, 36);
quadraticEquation(5, 2, 1);