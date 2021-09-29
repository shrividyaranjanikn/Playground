// Write a program to input week number and print week day.

function weekDay(weekNumber) {
    if(weekNumber >= 1 && weekNumber <= 7){

        if(weekNumber == 1){
            console.log(`${weekNumber} is a Monday!`);
        }
        else if(weekNumber == 2){
            console.log(`${weekNumber} is a Tuesday!`);
        }
        else if(weekNumber == 3){
            console.log(`${weekNumber} is a Wednesday!`);
        }
        else if(weekNumber == 4){
            console.log(`${weekNumber} is a Thursday!`);
        }
        else if(weekNumber == 5){
            console.log(`${weekNumber} is a Friday!`);
        }
        else if(weekNumber == 6){
            console.log(`${weekNumber} is a Saturday!`)
        }
        else{
            console.log(`${weekNumber} is a Sunday!`);
        }
    }
    else{
        console.log("Enter a valid week number!");
    }
}

weekDay(3);
weekDay(30);
weekDay(6);
