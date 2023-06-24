let numArr = [1, 2, 3, 4, 5];
let k = 3;

//this IIFE rotatArray() function will rotate array by given times
((needRotationArr, rotationTime) => {
    //it'll get Shallow copy of original array
    const rotatedArr = [...needRotationArr];

    //this loop will roate array by given time
    for (let i = 0; i < rotationTime; i++) {
        let firstValue = rotatedArr.shift();
        rotatedArr.push(firstValue);
    }
    console.log(rotatedArr);
})(numArr, k);
