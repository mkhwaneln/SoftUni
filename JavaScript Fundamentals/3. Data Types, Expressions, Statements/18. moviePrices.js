/**
 * Write a JS function that calculate the ticket price by movie title and day of week.
 * The input comes as array of 2 strings.
 * The first string holds the movie title.
 * The second string holds the day of week.
 * The output should hold the ticket price or “error” if the title or day of week is invalid.
 * 
 * Input: The Godfather Friday
 * Output: 15
 * 
 * Input: casablanca sunday
 * Output: 10
 * 
 * Input: Schindler's LIST monday
 * Output: 8.50
 * 
 * Input: SoftUni Nineday
 * Output: error
 * 
 * Hints:
 *      Turn all input values to lowercase to avoid character casing mistakes.
 *      Check the movie title in if-else-if
 *      For each movie title check the price in a switch-case.
 *      Beware of invalid movie titles and invalid days of week. Show “error” in such cases.
 */

console.log("18. Movie Prices");

function moviePrices(movieInfo) {
    let movieTitle, dayOfWeek, ticketPrice;

    [movieTitle, dayOfWeek] = movieInfo;

    if (movieTitle.toLowerCase() == "the godfather") {
        switch (dayOfWeek.toLowerCase()) {
            case "monday":
                ticketPrice = "12";
                break;
            case "tuesday":
                ticketPrice = "10";
                break;
            case "wednesday":
                ticketPrice = "15";
                break;
            case "thursday":
                ticketPrice = "12.50";
                break;
            case "friday":
                ticketPrice = "15";
                break;
            case "saturday":
                ticketPrice = "25";
                break;
            case "sunday":
                ticketPrice = "30";
                break;
            default:
                console.log("error");
                return;
        }
    } else if (movieTitle.toLowerCase() == "schindler's list") {
        switch (dayOfWeek.toLowerCase()) {
            case "monday":
                ticketPrice = "8.50";
                break;
            case "tuesday":
                ticketPrice = "8.50";
                break;
            case "wednesday":
                ticketPrice = "8.50";
                break;
            case "thursday":
                ticketPrice = "8.50";
                break;
            case "friday":
                ticketPrice = "8.50";
                break;
            case "saturday":
                ticketPrice = "15";
                break;
            case "sunday":
                ticketPrice = "15";
                break;
            default:
                console.log("error");
                return;
        }
    } else if (movieTitle.toLowerCase() == "casablanca") {
        switch (dayOfWeek.toLowerCase()) {
            case "monday":
                ticketPrice = "8";
                break;
            case "tuesday":
                ticketPrice = "8";
                break;
            case "wednesday":
                ticketPrice = "8";
                break;
            case "thursday":
                ticketPrice = "8";
                break;
            case "friday":
                ticketPrice = "8";
                break;
            case "saturday":
                ticketPrice = "10";
                break;
            case "sunday":
                ticketPrice = "10";
                break;
            default:
                console.log("error");
                return;
        }
    } else if (movieTitle.toLowerCase() == "the wizard of oz") {
        switch (dayOfWeek.toLowerCase()) {
            case "monday":
                ticketPrice = "10";
                break;
            case "tuesday":
                ticketPrice = "10";
                break;
            case "wednesday":
                ticketPrice = "10";
                break;
            case "thursday":
                ticketPrice = "10";
                break;
            case "friday":
                ticketPrice = "10";
                break;
            case "saturday":
                ticketPrice = "15";
                break;
            case "sunday":
                ticketPrice = "15";
                break;
            default:
                console.log("error");
                return;
        }
    } else {
        console.log("error");
        return;
    }

    console.log(ticketPrice);
}

moviePrices(["The Godfather", "Friday"]);
moviePrices(["casablanca", "sunday"]);
moviePrices(["tHe wIzArD oF OZ", "thATDAY"]);
moviePrices(["Schindler's LIST", "monday"]);
moviePrices(["SoftUni", "Nineday"]);