/* question Whats the msg printed and why?

var lemein = “0”;
var lemeout = 0;
var msg = “”;
if (lemein) {
 msg += “hi”;
 }
if (lemeout) {
 msg += ‘Hello’;
}
console.log(msg); 
 */


let lemein = "0";
let lemeout = 0;
let msg = "";
if (lemein) {
 msg += "hi";
 }
if (lemeout) {
 msg += "Hello";
}
console.log(msg);

console.log(`Printed msg is ${msg}

Bacause when we check boolean value for string(except emty string) it'll return true.

and when we check 0, -0, and NaN turn into false; other numbers turn into true.`);

/* answer 
Printed msg is "hi"
Bacause when we check boolean value for string(except emty string) it'll return true.
and when we check 0, -0, and NaN turn into false; other numbers turn into true.
*/