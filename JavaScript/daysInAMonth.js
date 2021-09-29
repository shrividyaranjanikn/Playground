// Write a program print total number of days in a month using switch case.

function noOfDays(month) {
    switch(month) {

        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            console.log("You have 31 days in this month");
            break;
        
        case 4:
        case 6:
        case 9:
        case 11:
            console.log("You have 30 days in this month");
            break;

        case 2:
            console.log("You have 28 days in this month if it is not a leap year. If it is a leap year, you have 29 days this month");
            break;

        default:
            console.log("Enter a valid month number!");
    }

}

noOfDays(9);
noOfDays(2);
noOfDays(3);