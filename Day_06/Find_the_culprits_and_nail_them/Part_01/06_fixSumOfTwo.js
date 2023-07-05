/* Question Fix the below to alert sum of two numbers
let a = prompt("First number?");
let b = prompt("Second number?");
alert(a + b); */

let a = prompt("First number?");
let b = prompt("Second number?");//input value will string type so we need to convert to number

alert(parseInt(a) + parseInt(b));