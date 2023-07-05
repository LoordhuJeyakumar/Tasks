/*Question Change the code to print 1 to 10 in 4 lines
let num = 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num) 
 */


//fixed code
let num = 1
let arr = [];
while(num<=10){
    arr.push(++num-1);
}
let i=0
while(i<4){
    console.log(...arr);
    i++;
}
