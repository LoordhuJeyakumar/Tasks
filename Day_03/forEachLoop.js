
//creat a new XHR object
let dummyAPIObj = new XMLHttpRequest();

//open connection for jsonplaceholder.typicode.com/users API using GET method & send request to server
dummyAPIObj.open("GET", "https://jsonplaceholder.typicode.com/users");


dummyAPIObj.onload = function(){
    let responseObj = JSON.parse(this.responseText);
    
    apiDataForEachLoop(responseObj);
}
//using forEach loop for iterate JSON Data
// this function will print Company Name and email 
function apiDataForEachLoop (responseObj){
    
    responseObj.forEach((value)=>{

        let company = value.company.name;
        let email = value.email;
        console.log(`Company Name: ${company}
        email: ${email}`);

    });
    
}
dummyAPIObj.send();