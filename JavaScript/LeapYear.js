// Write a program to check whether a year is leap year or not.

function isLeapYear(year) {
    if(year % 4 == 0){
        if(year % 100 == 0){
            if( year % 400 == 0){
                console.log(`${year} is a leap year!`);
            }
        } 
        console.log(`${year} is a leap year!`);    
    }
    else{
       console.log(`${year} is not a leap year!`);
    }
}

isLeapYear(2020);
isLeapYear(1964);
isLeapYear(1968);
isLeapYear(2021);