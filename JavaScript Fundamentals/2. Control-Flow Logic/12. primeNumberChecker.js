/**
 * Write a JS function to check if a number is prime (only wholly divisible by itself and one).
 * The input comes as a single number argument.
 * The output should be the return value of your function. 
 * Return true for prime number and false otherwise.
 * 
 * Input: 7
 * Output: True
 * Input: 8
 * Output: false
 * Input: 81
 * Output: false
 * Input: 59
 * Output: True
 */

console.log("12. Prime Number Checker");

function primeNumberChecker(number)
{
    if (number == 1)
    {
        console.log("false");
        return;
    }
    else if (number == 2)
    {
        console.log("true");
        return;
    }
    else
    {
        for (var i = 2; i < number; i++)
        {
            if (number % i == 0)
            {
                console.log("false");
                return;
            }
        }
        console.log("true");
    }
}

primeNumberChecker(7);
primeNumberChecker(8);
primeNumberChecker(81);
primeNumberChecker(59);
