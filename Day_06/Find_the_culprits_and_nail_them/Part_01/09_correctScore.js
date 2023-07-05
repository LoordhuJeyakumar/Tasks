/* Question How to get the correct score in console.


let value = prompt('How many runs you scored in this ball');
if (value === 4) {
      console.log("You hit a Four");
} else if (value === 6) {
      console.log("You hit a Six");
} else {
      console.log("I couldn't figure out");
}
 */

let value = prompt('How many runs you scored in this ball');
if (+value === 4) {//need to convert string to number
      console.log("You hit a Four");
} else if (+value === 6) {//need to convert string to number
      console.log("You hit a Six");
} else {
      console.log("I couldn't figure out");
}