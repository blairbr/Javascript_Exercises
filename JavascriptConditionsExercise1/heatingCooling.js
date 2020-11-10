// Heating/Cooling exercise:
// Define two variables: actualTemp and a desiredTemp. Write conditionals to tell the heating &
// cooling system what to do. Log one of these three things: Run A/C, Run heat, or Standby.
let actualTemp = 65;
let desiredTemp = 72;

if (actualTemp < desiredTemp) {
  console.log("Run heat");
} else if (actualTemp > desiredTemp) {
  console.log("Run A/C");
} else console.log("Standby");

// Extended Challenges second exercise:
// Start with two variables: tempCelsius (a number) and targetUnit (a string, either “C”, “F”, or
// “K”). Write a switch statement that checks the targetUnit and logs the temperature converted
// to that unit. Notes: K stands for Kelvin. C requires no conversion, print out the original temp.

let tempCelsius = 0;
let targetUnit = "C";

switch(targetUnit) {
    case "F":
      console.log(tempCelsius * (9/5) + 32);
      break;
    case "K":
      console.log(tempCelsius + 273.15);
      break;
    default:
        console.log(tempCelsius);
  }