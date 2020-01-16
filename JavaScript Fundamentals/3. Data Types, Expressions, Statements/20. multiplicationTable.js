/**
 * Write a JS function to print a math multiplication table of size n, formatted as HTML table.
 * The input comes as a single number n (0 < n < 100).
 * The output consists of n+3 text lines like shown below.
 * 
 * Input: 5
 * Output:
*   <table border="1">
        <tr>
            <th>x</th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
        </tr>
        <tr>
            <th>1</th>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
        </tr>
        <tr>
            <th>2</th>
            <td>2</td>
            <td>4</td>
            <td>6</td>
            <td>8</td>
            <td>10</td>
        </tr>
        <tr>
            <th>3</th>
            <td>3</td>
            <td>6</td>
            <td>9</td>
            <td>12</td>
            <td>15</td>
        </tr>
        <tr>
            <th>4</th>
            <td>4</td>
            <td>8</td>
            <td>12</td>
            <td>16</td>
            <td>20</td>
        </tr>
        <tr>
            <th>5</th>
            <td>5</td>
            <td>10</td>
            <td>15</td>
            <td>20</td>
            <td>25</td>
        </tr>
    </table>
 */

console.log("20. Multiplication Table");

function multiplicationTable(n) {
    var table = "<table border='1'>";

    if (n > 0 && n < 100) {
        //console.log(n);
        for (var i = 0; i <= n; i++) {
            table += "<tr>";
            if (i == 0) {
                for (var j = 0; j <= n; j++) {
                    if (j == 0) {
                        table += `<th>x</th>`;
                    } else
                        table += `<th>${j}</th>`;
                }
            } else {
                for (var j = 0; j <= n; j++) {
                    if (j == 0) {
                        table += `<th>${i}</th>`;
                    } else
                        table += `<td>${j * i}</td>`;
                }
            }
            table += "</tr>";
        }
        table += "</table>";
        console.log(table);
        return table;
    } else
        return "Please enter a value between 0 and 100";
}

document.getElementById("output").innerHTML = multiplicationTable(5);