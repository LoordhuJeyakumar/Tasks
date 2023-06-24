//declear number array
let numberArray = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

//use IIFE function to filter Odd numbers in array
(function (arr) {
  let result = arr.filter((val) => val % 2 !== 0);
  console.log(result);
})(numberArray)
