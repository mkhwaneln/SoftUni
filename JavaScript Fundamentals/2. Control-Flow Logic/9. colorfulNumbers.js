/**
 * Write a JS function to print the numbers from 1 to n. 
 * Return a string holding HTML list with the odd lines in blue and even lines in green. 
 * See the example for more information.
 * The input comes as a single number argument n.
 * The output should be returned as a result of your function in the form of a string.
 */

console.log("9. Colorful Numbers");

function colorfulNumbers(number)
{
    var result = "<ul>";

    for (let n = 0; n < number; n++)
    {
        result += "<li>";
        
        if ((n + 1) % 2 == 0)
            result += "<span style='color:blue'>" + (n + 1);
        else
            result += "<span style='color:green'>" + (n + 1);

        result += "</span></li>";
    }

    result += "</ul>";
    return result;
}

document.getElementById("output").innerHTML = colorfulNumbers(10);
//colorfulNumbers(10);