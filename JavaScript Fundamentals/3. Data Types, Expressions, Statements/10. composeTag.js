/**
 * Write a JS function that composes an HTML image tag.
 * The input comes as an array of string elements.
 * The first element is the location of the file and the second is the alternate text.
 * The output should be printed to the console in the following format:
 *      <img src="{file location}" alt="{alternate text}">
 * 
 * Input: ['smiley.gif', 'Smiley Face']
 * Output: <img src="smiley.gif" alt="Smiley Face">
 */

console.log("10. Compose Tag");

function composeTag(htmlTag)
{
    console.log('<img src="' + htmlTag[0] + '" alt="' + htmlTag[1] + '">');
}

composeTag(['smiley.gif', 'Smiley Face']);
composeTag(['bin.jpg', 'Delete Item']);