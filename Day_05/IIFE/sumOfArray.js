let numberArray = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

//this IIFE sumOfArr() function will return sum of array numbers
(function (numArr) {
  let sum = 0;
  numArr.forEach((val) => (sum += val));
  console.log(sum);
})(numberArray);

