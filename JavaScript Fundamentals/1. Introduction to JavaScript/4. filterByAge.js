/*
Write a JS function that stores the name and age of two persons in objects and then filters them by minimum age.
The input comes as five arguments. The first element is the minimum age. 
The second and third elements are the name and age of the first person and the fourth and fifth elements 
    – the name and age of the second person. 
The three age parameters will be numbers, the names will be strings.
The output should be printed to the console.

Input: 12, 'Ivan', 15, 'Asen', 9
Output: {name: 'Ivan', age: 15}
*/

console.log("\n4. Filter By Age");

function filterByAge(minAge, firstName, firstAge, secondName, secondAge) {
    var person = [];
    var objFilter = {};

    if (firstAge > minAge && secondAge > minAge)
    {
        objFilter = {name1: firstName, age1: firstAge, name2: secondName, age2: secondAge};
        console.log(objFilter);
        return; //no exit in JS
    }
    if (firstAge > minAge)
    {
        objFilter = {name: firstName, age: firstAge};
    }
    else if (secondAge > minAge)
    {
        objFilter = {name: secondName, age: secondAge};
    }
    else
    {
        objFilter = {name: 'None', age: minAge};
    }
    console.log(objFilter);
}

filterByAge(12, 'Ivan', 15, 'Asen', 13);