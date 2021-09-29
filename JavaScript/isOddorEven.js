// Write a program to check whether a number is even or odd using conditional operator.

function evenOrOdd(number) {
    (number % 2 == 0) ? console.log(`${number} is even`) : console.log(`${number} is odd`);
}

evenOrOdd(3);
evenOrOdd(90);