// Write a program to check whether year is leap year or not using conditional operator.

function isLeapYear(year) {
    (year % 4 == 0) ? (year % 100 == 0 ? (year % 400 == 0) ? 
    console.log(`${year} is a leap year`) : console.log(`${year} is not a leap year`) : 
    console.log(`${year} is a leap year`) ) : console.log(`${year} is not a leap year`);
}

isLeapYear(2020);
isLeapYear(1968);
isLeapYear(2021);