let arr = [1, 2, 3, 4, 5];
let rotate = 4;


//this rotatArray() function will rotate array by given times
let rotatArray = function (needRotationArr, rotationTime) {
    //it'll get Shallow copy of original array
    const rotatedArr = [...needRotationArr];

    //this loop will roate array by given time
    for (let i = 0; i < rotationTime; i++) {
        let firstValue = rotatedArr.shift();
        rotatedArr.push(firstValue);
    }
    return rotatedArr;
};
console.log(rotatArray(arr, rotate));
