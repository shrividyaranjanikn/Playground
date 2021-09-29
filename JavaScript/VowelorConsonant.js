// Write a program to input any alphabet and check whether it is vowel or consonant.

function isVowelOrConsonant(character) {

    if(character == 'a' || character == 'A' || character == 'e' || character == 'E' || character == 'i' || character == 'I' || character == 'o' || character == 'O' || character == 'u' || character == 'U') {

        console.log(`${character} is a vowel!`);

    }

    else{

        console.log(`${character} is a consonant!`);

    }
}

isVowelOrConsonant('a');
isVowelOrConsonant('r');
isVowelOrConsonant("I");