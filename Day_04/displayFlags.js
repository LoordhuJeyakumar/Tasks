// create a new restCountryAPI object
let restCountryAPI = new XMLHttpRequest();

// open a connection
restCountryAPI.open("GET", "https://restcountries.com/v3.1/all", true);

// after the request is processed
restCountryAPI.onload = function () {
  let responseObject = JSON.parse(this.responseText);

  //console.log(responseObject.map(country => country.flag).join(' '));
  flagDisplay(responseObject);
};

function flagDisplay(responseObject) {
  for (let index in responseObject) {
    let flag = responseObject[index].flag;
    let flagUrl = responseObject[index].flags.png;
    let countryName = responseObject[index].name.common;

    console.log(`
    Country Name: ${countryName}, 
    Flag: ${flag},
    Flag Image URL: ${flagUrl}`);
  }
}

// send the request
restCountryAPI.send();
