/**
 * Write a JS function that calculates the total accumulated value for a monetary deposit by given principal sum, 
 * interest rate, compounding frequency and overall length.
 * The input comes as an array of numbers. 
 * The first value is the principal sum, the second is the interest rate in percent, 
 * the third is the compounding period in months and the final value is the total timespan, given in years.
 * The output should be printed to the console, with two decimal places.
 * 
 * Input: [1500, 4.3, 3, 6]
 * Output: 1938.84
 * 
 * Input: [100000, 5, 12, 25]
 * Output: 338635.49
 */

console.log("6. Compound Interest");

function compoundInterest(numbers)
{
    let principalSum = numbers[0];
    let interestRate = numbers[1];
    let compoundingPeriodInMonths = numbers[2];
    let totalTimeSpanInYears = numbers[3];

    let compoundFrequency = 12 * 1.0 / compoundingPeriodInMonths;

    let result = principalSum * Math.pow(1 + ((interestRate / 100) / compoundFrequency), compoundFrequency * totalTimeSpanInYears);

    return result.toFixed(2);
}

console.log(compoundInterest([1500, 4.3, 3, 6]));
console.log(compoundInterest([100000, 5, 12, 25]));