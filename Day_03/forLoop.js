
//Creat a new XHR object 
let restCountry_API_Request = new XMLHttpRequest();

//open connection for restcountry API using GET method & send request to server
restCountry_API_Request.open("GET", "https://restcountries.com/v3.1/all");


restCountry_API_Request.onload = function () {
    let responseObj = JSON.parse(this.responseText);
    apiDataForLoop(responseObj);
}

//using for loop for iterate JSON Data
// this function will print country name and population and Capital 
function apiDataForLoop(responseObj) {

    for (let i = 0; i < responseObj.length; i++) {

        //check whether API data has respective value or not
        if (responseObj[i].name.common !== undefined && responseObj[i].population !== 0 && responseObj[i].capital !== undefined) {
            let country = countryName = responseObj[i].name.common;
            let populationOfCountry = population = responseObj[i].population;
            let capitalOfCountry = responseObj[i].capital[0];

            console.log(`
            Country Name : ${country}
            Population : ${populationOfCountry}
            Capital : ${capitalOfCountry}`);
        }
    }
}

restCountry_API_Request.send();
