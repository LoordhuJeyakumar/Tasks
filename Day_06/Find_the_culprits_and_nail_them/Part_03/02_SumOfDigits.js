/* Question
Fix the code to Sum of the digits present in the number

Code:

let n = 123;
console.log(add(n));
function add(n)
{
let sum = 10;
for(var i=0;i<n.length;i++){
 sum+=n[i]
 }
 return sum;
}
*/

//fixed Code
let n = 123;
console.log(add(n));
function add(n)
{
let sum = 0;
let nToStr = n.toString()//convert number to string so that we can iterat each digits
for(var i=0;i<nToStr.length;i++){
 sum+=parseInt(nToStr[i])//convert that string to number so that we can get expected result
 }
 return sum;
}