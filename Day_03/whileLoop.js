
//Creat a new XHR object 
let restCountry_API_Request = new XMLHttpRequest();

//open connection for restcountry API using GET method & send request to server
restCountry_API_Request.open("GET", "https://restcountries.com/v3.1/all");



restCountry_API_Request.onload = function () {
    let responseObj = JSON.parse(this.responseText);
    apiDataWhileLoop(responseObj);
}

//using while loop for iterate JSON Data
// this function will print country official name and population
function apiDataWhileLoop(responseObj) {
    let i=0;
    while ( i < responseObj.length) {
        //check whether API data has respective value or not
        if (responseObj[i].name.official !== undefined && responseObj[i].population !== 0 ) {
            let countryOfficial = countryName = responseObj[i].name.official;
            let populationOfCountry = population = responseObj[i].population;
            
            console.log(`
            Country official Name : ${countryOfficial}
            Population : ${populationOfCountry}`);
        }
        i++;
    }
}
restCountry_API_Request.send();

