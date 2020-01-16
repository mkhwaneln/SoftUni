/**
 * Write a JS function to print a chessboard of size n X n. 
 * See the example for more information.
 * The input comes as a single number argument n.
 * The output should be returned as a result of your function in the form of a string.
 */

console.log("10. Chess Board");

function chessBoard(size)
{
    var board = '<div class="chessboard">\n';
    var color = "";

    for (let i = 0; i < size; i++)
    {
        board += "\t<div>\n";
        for (let j = 0; j < size; j++)
        {
            if ((i + j) % 2 == 0)
                color = "black";
            else
                color = "white";
            board += '\t\t<span class="' + color + '"></span>\n';
        }
        board += "\t</div>\n";
    }

    board += "</div>";
    console.log(board);
}

chessBoard(3);