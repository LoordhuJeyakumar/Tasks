
//Creat a new XHR object 
let apiObj = new XMLHttpRequest();

//open connection for dummyjson.com/quotes API using GET method & send request to server
apiObj.open("GET", "https://dummyjson.com/quotes");

apiObj.onload = function () {
    let responseObj = JSON.parse(this.responseText);
    apiDataForInLoop(responseObj);
}

//using for...in loop for iterate JSON Data
// this function will print author name and quote 
function apiDataForInLoop(responseObj) {
    for (let i in responseObj.quotes) {
        console.log(`
    Author Name : ${responseObj.quotes[i].author} 
    Quote : ${responseObj.quotes[i].quote}`);
    }
}
apiObj.send();


