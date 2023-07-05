/* Question
Write a code to replace the array value — If the number is odd, replace it with "odd".

Output:['odd', 2, 'odd', 4, 'odd', 6, 'odd', 8, 'odd', 10, 'odd']

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 if(numsArr[i] %2 == 0 )
 {
 numsArr[i] = odd
 }
}
console.log(numsArr);
*/

//Fixed Code
let numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (let i = 0; i <= 10; i++) {
    if (numsArr[i] % 2 != 0) {
        numsArr[i] = "odd";
    }
}
console.log(numsArr);

//Output:['odd', 2, 'odd', 4, 'odd', 6, 'odd', 8, 'odd', 10, 'odd']