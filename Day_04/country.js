// create a new restCountryAPIObjObj object
let restCountryAPIObj = new XMLHttpRequest();

// open a connection
restCountryAPIObj.open("GET", "https://restcountries.com/v3.1/all", true);

// after the request is processed
restCountryAPIObj.onload = function () {
  let responseObject = JSON.parse(this.responseText);
  countryName(responseObject);
};
//this function will print country name, region, sub_region, population.
function countryName(responseObject) {
  for (let index in responseObject) {
    let countryName = responseObject[index].name.common;
    let regions = responseObject[index].region;
    let sub_region = responseObject[index].subregion;
    let population = responseObject[index].population;

    console.log(`
    Country Name: ${countryName},
    Region: ${regions},
    Sub_Region: ${sub_region},
    Population: ${population}`);
  }
}

// send the request
restCountryAPIObj.send();
