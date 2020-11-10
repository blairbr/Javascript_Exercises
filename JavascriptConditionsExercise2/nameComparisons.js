// Conditions Exercise 2

// Start with three variables name1, name2, and name3 which hold three names.

// The code should output the longest of the three names. e.g., "Ada Lovelace has the longest
// name.". If there is a tie between any two, list both. e.g., “Charles and Brendan tie for the longest
// name.”. Or if all three names are the same length, output “All three names, Dorothy, Charles,
// and Brendan, are the same length.”

const name1 = "5";
const name2 = "4";
const name3 = "3";

let longestName = '';

if (name1.length > name2.length && name1.length > name3.length ) {
    longestName = name1;
}
if (name2.length > name1.length && name2.length > name3.length ) {
    longestName = name2;
}
if (name3.length > name1.length && name3.length > name3.length ) {
    longestName = name3;
}
if (name1.length === name2.length && name1.length > name3.length) {
    longestName = name1 + " " + name2;
}
if (name1.length === name2.length && name3.length > name1.length) {
    longestName = name3;
}
if (name2.length === name3.length && name2.length > name1.length) {
    longestName = name2 + " " + name3;
}
if (name2.length === name3.length && name1.length > name2.length) {
    longestName = name1;
}
if (name1.length === name2.length && name2.length === name3.length) {
    longestName = name1 + " " + name2 + " " + name3;
}

console.log(`${longestName} is/are the longest name(s)`);

// As you can see, this isn't the most efficient way of doing this. 
// This would be a great exercise to redo by creating a function or loop now that you know about them!