
//declear string array


//this palindromes() IIFE function will return all palindromes in array
(() => {
  arr = [
    "abc",
    "dca",
    "john",
    "nun",
    "Mom",
    "dad",
    "olive",
    "lime",
    "cat",
    "today",
    "Madam",
  ];
  palindromesArr = []; //this array will get only palindromes
  let toLow = arr.map((val) => val.toLowerCase()); // this will change all strings to lowerCase

  //this loop will iterat all strings to check palindromes
  for (let i = 0; i < arr.length; i++) {
    //select each string to reverse order
    let rev = toLow[i].split("").reverse().join("");
    if (rev === toLow[i]) {
      palindromesArr.push(arr[i]);
    }
  }

  //this condition will chack given array has palindromes or not
  if (palindromesArr.length === 0) {
    return "There are no palindromes ";
  } else {
    console.log(palindromesArr);
  }
})();
