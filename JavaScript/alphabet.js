// Write a program to check whether a character is alphabet or not.

function isalphbet(character) {

    if(character >= 'a' && character <= 'z' || character >= 'A' && character <= 'Z') {

        console.log(`${character} is an alphabet!`);

    }

    else {

        console.log(`${character} is not an alphabet!`);

    }
}

isalphbet("$");
isalphbet("A");
isalphbet("b");