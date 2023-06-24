let numberArray = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

//this sumOfArr() function will return sum of array numbers
let sumOfArr = function (numArr) {
    let sum = 0;
    numArr.forEach((val) => (sum += val));
    return sum;
};
console.log(sumOfArr(numberArray));
