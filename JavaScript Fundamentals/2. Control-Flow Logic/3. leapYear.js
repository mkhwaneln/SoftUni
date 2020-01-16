/**
 * Write a JS function to check whether a year is leap. Leap years are either divisible by 4 but not by 100 or are divisible by 400.
 * The input comes as a single number argument.
 * The output should be printed to the console.
 * Print yes if the year is leap and no otherwise.
 * 
 * Input: 1999
 * Ouput: no
 * 
 * Input: 2000
 * Output: yes
 * 
 * Input: 1900
 * Output: no
 */

console.log("3. Leap Year");

function leapYear(year)
{
    if (year % 4 == 0)
    {
        if ((year % 100 != 0) || (year % 400 == 0))
            console.log(year + " is a leap year");
        else
            console.log(year + " is not a leap year");
    }
    else
        console.log(year + " is not a leap year");        
}

leapYear(2400);
leapYear(1999);
leapYear(2000);
leapYear(1800);
leapYear(2016);
leapYear(1900);
leapYear(2500);