// Loops Exercise 1
// Skills: Conditions and loops

// Use a for loop to log numbers from 1 to 10, then another for loop to count down, logging numbers from 10 to 1.

for (let i = 1; i < 11; i++) {
    console.log(i);  
}

for (let i = 10; i > 0; i--) {
    console.log(i);  
}

// Repeat with a do while.

let i = 1;
do {
    console.log(i)
    i++;
} while (i < 11);

i = 10;
do {
    console.log(i)
    i--;
} while (i > 0);

// Create this array: const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]. Use a for … of to loop
// through this array and log all the numbers. (Note: we’re not asking you to also count
//    down on this one.)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const num of numbers) {
    console.log(num);
}

// Extended challenge/Second Exercise:
// Given any string, use a loop to add padding (extra spaces) to the front to make the string ten
// characters long. For example, given the string “planet”, log “ planet” (add four spaces), and for
// the string “headlamp”, log “ headlamp” (add two spaces).

let planet = "planet";
let output = "";
let numberOfWhiteSpaces = 10 - planet.length;

for (let i = 0; i < numberOfWhiteSpaces; i++) {
    output = output + " ";
}

console.log(`The result is '${output}${planet}'`);