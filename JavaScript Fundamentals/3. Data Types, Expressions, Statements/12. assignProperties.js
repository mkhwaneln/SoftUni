/**
 * Write a JS function that composes an object by given properties. 
 * There will be 3 sets of property-value pairs (a total of 6 elements). 
 * Assign each value to its respective property of an object and return the object as a result of the function.
 * The input comes as an array of string elements.
 * The output should be returned as a value.
 * 
 * Input: ['name', 'Pesho', 'age', '23', 'gender', 'male']
 * Output: 
 *  {
        name: 'Pesho',
        age: '23',
        gender: 'male'
    }
 * 
 * Input: ['ssid', '90127461', 'status', 'admin', 'expires', '600']
 * Output: 
 *  {
        ssid: '90127461',
        status: 'admin',
        expires: '600'
    }
 */

console.log("12. Assign Properties");

function assignProperties(propertyValue)
{
    var obj = {};

    for (let i = 0; i < propertyValue.length; i += 2)
    {
        var property = propertyValue[i];
        var value = propertyValue[i + 1];

        obj[property] = value;
    }

    console.log(obj);
}

assignProperties(['name', 'Pesho', 'age', '23', 'gender', 'male']);
assignProperties(['ssid', '90127461', 'status', 'admin', 'expires', '600']);