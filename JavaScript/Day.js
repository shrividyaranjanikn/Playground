// Write a program to print day of week name using switch case.

function dayOfTheWeek(day) {

    switch(day) {

        case 0:
        case 7:
            console.log(`${day} is a Sunday!`);
            break;
        
        case 1:
            console.log(`${day} is a Monday!`);
            break;

        case 2:
            console.log(`${day} is a Tuesday!`);
            break;

        case 3:
            console.log(`${day} is a Wednesday!`);
            break;

        case 4:
            console.log(`${day} is a Thursday!`);
            break;

        case 5:
            console.log(`${day} is a Friday!`);
            break;

        case 6:
            console.log(`${day} is a Saturday!`);
            break;

        default:
            console.log("Enter a valid day number!");
    }

}

dayOfTheWeek(7);
dayOfTheWeek(5);
dayOfTheWeek(1);