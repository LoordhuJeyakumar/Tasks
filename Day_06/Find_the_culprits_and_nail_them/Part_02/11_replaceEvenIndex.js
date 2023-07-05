/* Question
Write a code to replace the array value — If the index is even, replace it with ‘even’.

Output: [ [“even”, 2, “even”, 4, “even”], [6, “even”, 8, “even”, 10, …] ]

var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all=0;
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length;i++ )
      if(numsArr[i] %2 == 0 )
      {
         numsArr[i] = even
       }
}
console.log(numsArr);
*/

//fixed Code
let numsArr = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10, 11],
];
let innerArr1 = numsArr[0];
let innerArr2 = numsArr[1];

let inner_array = [...innerArr1, ...innerArr2];
for (let j = 0; j < inner_array.length; j++) {
  if (inner_array.indexOf(inner_array[j]) % 2 == 0) {
    inner_array[j] = "even";
  }
}
console.log(
  inner_array.splice(0, innerArr1.length),
  inner_array.splice(0, innerArr2.length)
);
