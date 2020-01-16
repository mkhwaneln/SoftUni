/*
Write a JS function that counts how many times a specific letter occurs in a given string.
The input comes two string arguments. The first element is the string to check and the second element is the letter to count.
The output should be returned as a result of your function.

Input: 'hello', 'l'
Output: 2

Input: 'panther', 'n'
Output: 1
*/

console.log("\n3. Letter Occurences in String");

function letterOccurencesInString(strWord, cLetter) {
    var index = 0;
    var count = 0;

    while (index < strWord.length) {
        if (cLetter == strWord[index])
            count++;
        index++;
    }

    console.log("The number of " + cLetter + " occurences in " + strWord + ": " + count);
}

letterOccurencesInString('hello', 'l');
letterOccurencesInString('panther', 'n');
letterOccurencesInString('Nomathemba', 'a');
letterOccurencesInString('Missisipi', 's');