/*Question Write a code to print the numbers in the array 
Output: 1234567891011
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
 
for (var i = 1; i < 11; i--) {
 new_string += numsArr[i] 
}
console.log(new_string); 

*/


//fixed code
let numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let new_string = "";
 
for (let i = 0; i < 11; i++) {
 new_string += numsArr[i] 
}
console.log(new_string);

//Output: 1234567891011