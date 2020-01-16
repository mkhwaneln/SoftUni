/**
 * Write a JS function that calculates the area of the figure on the right by given values for w, h, W and H.
 * The lower right corner is always common for the two rectangles.
 * The input comes as four number parameters w, h, W and H.
 * The output should be returned as a result of your function.
 * 
 * Input: 2, 4, 5, 3
 * Output: 17
 * 
 * Input: 13, 2, 5, 8
 * Output: 56
 */

console.log("\n6. Figure Area");

function figureArea(w, h, W, H)
{
    var area1 = w * h;
    var area2 = W * H;
    var area3 = Math.min(w, W) * Math.min(h, H);

    console.log((area1 + area2) - area3);
}

figureArea(5, 3, 2, 4);
figureArea(5, 8, 13, 2);
