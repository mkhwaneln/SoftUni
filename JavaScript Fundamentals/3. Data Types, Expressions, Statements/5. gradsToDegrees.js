/**
 * Land surveyors use grads (also known as gon, 400 grads in a full turn) in their documents. 
 * Grads are rather unwieldy though, so you need to write a JS function that converts from grads to degrees. 
 * In addition, your program needs to constrain the results within the range , so if you arrive at a value like -15°,
 *  it needs to be converted to 345° and 420° becomes 60°.
 * The input comes as single number.
 * The output should be printed to the console.
 * 
 * Input: 100
 * Output: 90
 * 
 * Input: 400
 * Output: 0
 * 
 * Input: 850
 * Output: 45
 * 
 * Input: -50
 * Output: 315
 */

console.log("5. Grads to Degrees");

function gradsToDegrees(grads)
{
    grads = grads % 400;
    if (grads < 0)
        grads += 400;

    let degrees = grads / 400 * 360;
    console.log(degrees);
}

gradsToDegrees(100);
gradsToDegrees(400);
gradsToDegrees(850);
gradsToDegrees(-50);