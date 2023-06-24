let numArr = [1, 2, 3, 4, 3, 2, 8, 9, 32, 5, 8, 65, 3, 5, 32, 5, 3];

//this removeDuplicates() IIFE function will remove dupicats value in array
(function (arr) {
  let res = arr.filter((value, index, array) => {
    return array.indexOf(value) != index;
  });
  console.log(res);
})(numArr);
