let sortedArray_1 = [1, 3, 5, 7, 9];
let sortedArray_2 = [2, 4, 6, 8, 10];

//this medianOfSortedArray() function will return median value of compaind sorted array
//this function only give prober result on sorted array
let medianOfSortedArray = function (arr1, arr2) {
    let arr1Len = arr1.length;
    let arr2Len = arr2.length;
    let sortedArr = [];
    let i = 0;
    let j = 0;
    let k = 0;
    //this loop will check each array small value
    while (i < arr1Len && j < arr2Len) {
        if (arr1[i] < arr2[j]) {
            sortedArr[k] = arr1[i];
            k++;
            i++;
        } else {
            sortedArr[k] = arr2[j];
            k++;
            j++;
        }
    }
    //this loop will sort if array lenth is long
    while (j < arr2Len) {
        sortedArr[k] = arr2[j];
        k++;
        j++;
    }
    while (i < arr1Len) {
        sortedArr[k] = arr1[i];
        k++;
        i++;
    }

    //this function will return median value
    function findMedian(array) {
        let median = 0;
        let sortedArrLength = array.length;
        if (sortedArrLength % 2 === 0) {
            median =
                (array[sortedArrLength / 2 - 1] + array[sortedArrLength / 2]) / 2;
        } else {
            median = array[Math.floor(sortedArrLength / 2)];
        }
        return median;
    }
    return findMedian(sortedArr);
};
console.log(medianOfSortedArray(sortedArray_1, sortedArray_2));
