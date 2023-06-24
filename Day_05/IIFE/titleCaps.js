//declear long string
let str =
  "life is like riding a bicycle. to keep your balance, you must keep moving.";
//convert into string array
let strArr = str.split(" ");

//this IIFE titleCaps() function will change all string's first letter to uppercase
((strArr) => {
  let res = strArr.map((val) => val.charAt(0).toUpperCase() + val.slice(1));
  console.log(res);
})(strArr);