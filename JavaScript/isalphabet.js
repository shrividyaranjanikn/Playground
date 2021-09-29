// Write a program to check whether character is an alphabet or not using conditional operator.

function isAlphabet(character) {
    (character >= 'a' && character <= 'z' || character >= 'A' && character <= 'Z') ? console.log(`${character} is an alphabet`) : console.log(`${character} is not an alphabet`);
}

isAlphabet("#");
isAlphabet("a");
isAlphabet("A");