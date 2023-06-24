let numArr = [1, 2, 3, 4, 3, 2, 8, 9, 32, 5, 8, 65, 3, 5, 32, 5, 3];

//this removeDuplicates() function will remove dupicats value in array
let removeDuplicates = function (arr) {
    let res = arr.filter((value, index, array) => {
        return array.indexOf(value) != index;
    });
    return res;
};
console.log(removeDuplicates(numArr));
