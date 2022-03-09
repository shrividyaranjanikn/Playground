// Write a program to input month number and print number of days in that month.

function noOfDays(month) {
    if(month >= 1 && month <= 12){
        if(month == 1 || month == 3 || month == 5 ||  month == 7 ||  month == 8 ||  month == 10 ||  month == 12 ){
            console.log("You have 31 days in this month!");
        }
        else if(month == 4 || month == 6 || month == 9 || month == 11){
            console.log("You have 30 days in this month!");
        }
        else if(month == 2){
            console.log("You have 28 days in this month if the year is not a leap year. If the year is a leap year, you have 29 days in this month");
        }
    }
    else {
        console.log("Enter a valid month number!");
    }
}

noOfDays(9);
noOfDays(2);
noOfDays(3);