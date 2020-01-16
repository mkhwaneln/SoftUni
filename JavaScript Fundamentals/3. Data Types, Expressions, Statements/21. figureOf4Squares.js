/**
 * Write a JS function to print a figure of 4 squares of size n like shown in the examples below.
 * The input is an integer number n in the range [2 … 200].
 * The output consists of n lines for odd n and n-1 lines for even n. 
 * Each line holds 2*n-1 characters (+ or | or space) as shown in the examples.
 * The figure is fully symmetric (horizontally and vertically).
 * 
 * Input: 4
 * Output:
    +--+--+
    +--+--+
    +--+--+
 * 
 * Input: 5
 * Output:
    +---+---+
    |   |   |
    +---+---+
    |   |   |
    +---+---+
 * 
 * Input: 6
 * Output:
    +----+----+
    |    |    |
    +----+----+
    |    |    |
    +----+----+
 * 
 * Input: 7
 * Output:
    +-----+-----+
    |     |     |
    |     |     |
    +-----+-----+
    |     |     |
    |     |     |
    +-----+-----+
 */

console.log("21. Figure of 4 Squares");

function figureOfSqaures(size) {
    let square = '';
    let linesCount = size % 2 == 0 ? size - 1 : size;
    let middle = Math.ceil(linesCount * 1.0 / 2);
    let innerCharsCount = size - 2;

    if (size > 2 && size < 200) {
        for (let i = 1; i <= linesCount; i++) {
            let isBorder = i == 1 || i == linesCount || i == middle;
            let divisor = isBorder ? '+' : '|';
            let fillingChars = isBorder ? '-' : ' ';

            square += divisor + fillingChars.repeat(innerCharsCount) + divisor + fillingChars.repeat(innerCharsCount) + divisor + '\n';
        }
        console.log(square);
    } else
        console.log("Please enter a number in the range of 2...200");
}

figureOfSqaures(2);
figureOfSqaures(4);
figureOfSqaures(5);
figureOfSqaures(6);
figureOfSqaures(7);
figureOfSqaures(9);