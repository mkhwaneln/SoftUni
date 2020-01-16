/**
 * Write a JS function that calculates the date of the next day by given year, month and day.
 * The input comes as three number parameters. 
 * The first element is the year, the second is the month and the third is the day.
 * The output should be returned as a result of your function.
 * 
 * Input: 2016,9,30
 * Output: 2016-10-1
 */

console.log("\n7. Next Day");

function nextDay(year, month, day)
{
    var endDate = new Date(year, month, 0).getDate();

    //Check year-end
    if (month == 12)
    {
        if (day == 31)
        {
            console.log((year + 1) + '-' + 1 + '-' + 1);
            return;
        }
        else
        {
            console.log(year + '-' + month + '-' + (day + 1));
            return;
        }

    }
    else {
        if (day == endDate)
        {
            //Check February month end
            if (endDate == 29 && month == 2)
            {
                console.log(year + '-' + (month + 1) + '-' + 1);
                return;
            }
            else if (endDate == 28 && month == 2)
            {
                console.log(year + '-' + (month + 1) + '-' + 1);
                return;
            }
            //Check month end
            if (day == 30 || day == 31)
            {
                console.log(year + '-' + (month + 1) + '-' + 1);
                return;
            }
        }
    }

    //Get date
    console.log(year + '-' + month + '-' + (day + 1));
}

nextDay(1993, 3, 31);
