//Compare Two Objects have same properties without order
let person1 = {
    name : "John",
    age : 29,
}

let person2 = {
    age : 27,
    name : "joel"
}
//get objects keys and creat sorted array
let getKeysOfPerson1 = Object.keys(person1).sort();
let getKeysOfPerson2 = Object.keys(person2).sort();

//this function will check sorted keys arrays are equal or not
function compareObj (){
    if(getKeysOfPerson1.length!==getKeysOfPerson2.length){
        return false
    }else if(JSON.stringify(getKeysOfPerson1)===JSON.stringify(getKeysOfPerson2)){
        return true;
    }
}  
console.log(compareObj())


