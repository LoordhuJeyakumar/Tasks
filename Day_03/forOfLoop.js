
//creat a new XHR object
let dummyUsersAPIObj = new XMLHttpRequest();

//open connection for jsonplaceholder.typicode.com/users API using GET method & send request to server
dummyUsersAPIObj.open("GET", "https://jsonplaceholder.typicode.com/users");


dummyUsersAPIObj.onload = function(){
    let responseObj = JSON.parse(this.responseText);
    
    apiDataForOfLoop(responseObj);
}
//using for...OF loop for iterate JSON Data
// this function will print name and PHONENUMBER 
function apiDataForOfLoop (responseObj){
    for(let value of responseObj){
        console.log(`        
        Name:           ${value.name}
        Phone Number:   ${value.phone}`)
    }
}
dummyUsersAPIObj.send();