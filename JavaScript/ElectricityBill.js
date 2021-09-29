/* Write a program to input electricity unit charges and calculate total electricity bill according to the given condition:
For first 50 units Rs. 0.50/unit
For next 100 units Rs. 0.75/unit
For next 100 units Rs. 1.20/unit
For unit above 250 Rs. 1.50/unit
An additional surcharge of 20% is added to the bill */

function electricityBill() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
      });

      readline.question('Enter the number of units: ', units => {
        console.log(`The number of units is ${units}!`);
        readline.close();
      });
}

electricityBill();