let mainContainer = document.createElement("div");
mainContainer.className = "container";




let heading = document.createElement("h1");
heading.textContent = "DOM Manipulation with form";
heading.id = "title";

let description = document.createElement("p");
description.textContent =
  "This form is compleatly created with DOM Manipulation";
description.id = "description";

document.body.appendChild(mainContainer);
mainContainer.append(heading, description);

let formContainer = document.createElement("div");
formContainer.className = "formContainer";
let form = document.createElement("form");
form.id = "form";
mainContainer.appendChild(formContainer);
formContainer.appendChild(form);
/* form = document.getElementById("form"); */

let formGroub_1 = document.createElement("div");
let formGroub_2 = document.createElement("div");
formGroub_1.className = "form-group";
formGroub_2.className = "form-group";
form.append(formGroub_1, formGroub_2);
let firstNameLable = document.createElement("label");
firstNameLable.textContent = "First Name";
firstNameLable.htmlFor = "first-name";
let lasttNameLable = document.createElement("label");
lasttNameLable.textContent = "Last Name";
lasttNameLable.htmlFor = "last-name";
let addressLable = document.createElement("label");
addressLable.textContent = "Address";
addressLable.htmlFor = "address";
let pincodeLable = document.createElement("label");
pincodeLable.textContent = "Pincode";
pincodeLable.htmlFor = "pincode";

let first_name = document.createElement("input");
first_name.type = "text";
first_name.name = "firstName";
first_name.id = "first-name";
first_name.required = true;
first_name.placeholder = "Enter Your First Name";
/* first_name = document.getElementById("first-name"); */

let lastNameInput = document.createElement("input");
lastNameInput.type = "text";
lastNameInput.name = "lastName";
lastNameInput.id = "last-name";
lastNameInput.required = true;
lastNameInput.placeholder = "Enter Your Last Name";
/* lastNameInput = document.getElementById("last-name"); */

formGroub_1.append(firstNameLable, first_name, lasttNameLable, lastNameInput);

let address = document.createElement("textarea");
address.name = "address";
address.id = "address";
address.placeholder = "Address";
address.required = true;

let pincode = document.createElement("input");
pincode.type = "text";
pincode.name = "pincode";
pincode.id = "pincode";
pincode.required = true;
pincode.placeholder = "Enter Your Pincode";

formGroub_2.append(addressLable, address, pincodeLable, pincode);

let genderContainer = document.createElement("div");
genderContainer.className = "genderContainer";
form.appendChild(genderContainer);


let maleInput = document.createElement("input");
maleInput.type = "radio";
maleInput.id = "maleInput";
maleInput.value = "Male";
maleInput.name = "gender";

let maleInputLable = document.createElement("label");
maleInputLable.textContent = "Male";
maleInputLable.htmlFor = "maleInput";



let femaleInputLable = document.createElement("label");
femaleInputLable.textContent = "Female";
femaleInputLable.htmlFor = "feMaleInput";
let otherInputLable = document.createElement("label");
otherInputLable.textContent = "Others";
otherInputLable.htmlFor = "otherInput";




let femaleInput = document.createElement("input");
femaleInput.type = "radio";
femaleInput.id = "feMaleInput";
femaleInput.value = "Female";
femaleInput.name = "gender";

let otherInput = document.createElement("input");
otherInput.type = "radio";
otherInput.id = "otherInput";
otherInput.value = "Male";
otherInput.name = "gender";

genderContainer.append(maleInput,maleInputLable,femaleInput,femaleInputLable,otherInput,otherInputLable)

let foodContainer = document.createElement("div");
foodContainer.className = "foodContainer";
form.appendChild(foodContainer);

let foodDescription = document.createElement("p");
foodDescription.textContent = "You should select at least 2 foods";
foodContainer.appendChild(foodDescription);
let biriyaniCheckBox = document.createElement("input");
biriyaniCheckBox.type = "checkbox";
biriyaniCheckBox.name = "foods";
biriyaniCheckBox.id = "biriyaniCheckBox";
biriyaniCheckBox.value = "Biryani";


let biryaniLable = document.createElement("label");
biryaniLable.htmlFor = "biriyaniCheckBox";
biryaniLable.textContent = "Biryani";


let dosaCheckBox = document.createElement("input");
dosaCheckBox.type = "checkbox";
dosaCheckBox.name = "foods";
dosaCheckBox.id = "dosaCheckBox";
dosaCheckBox.value = "Dosa";

let dosaLable = document.createElement("label");
dosaLable.htmlFor = "dosaCheckBox";
dosaLable.textContent = "Dosa";

let idlyCheckBox = document.createElement("input");
idlyCheckBox.type = "checkbox";
idlyCheckBox.name = "foods";
idlyCheckBox.id = "idlyCheckBox";
idlyCheckBox.value = "Idly";
let idlyLable = document.createElement("label");
idlyLable.htmlFor = "idlyCheckBox";
idlyLable.textContent = "Idly";

let riceCheckBox = document.createElement("input");
riceCheckBox.type = "checkbox";
riceCheckBox.name = "foods";
riceCheckBox.id = "riceCheckBox";
riceCheckBox.value = "Rice";
let riceLable = document.createElement("label");
riceLable.htmlFor = "riceCheckBox";
riceLable.textContent = "Rice";

let parottaCheckBox = document.createElement("input");
parottaCheckBox.type = "checkbox";
parottaCheckBox.name = "foods";
parottaCheckBox.id = "parottaCheckBox";
parottaCheckBox.value = "Parotta";
let parottaLable = document.createElement("label");
parottaLable.htmlFor = "parottaCheckBox";
parottaLable.textContent = "Parotta";

let naanCheckBox = document.createElement("input");
naanCheckBox.type = "checkbox";
naanCheckBox.name = "foods";
naanCheckBox.id = "naanCheckBox";
naanCheckBox.value = "Naan";
let naanLable = document.createElement("label");
naanLable.htmlFor = "naanCheckBox";
naanLable.textContent = "Naan";

foodContainer.append(
  biriyaniCheckBox,
  biryaniLable,
  dosaCheckBox,
  dosaLable,
  idlyCheckBox,
  idlyLable,
  riceCheckBox,
  riceLable,
  parottaCheckBox,
  parottaLable,
  naanCheckBox,
  naanLable
);

let country_state = document.createElement("div");
country_state.className = "country_state";
form.appendChild(country_state);

let countriesLable = document.createElement("label");
countriesLable.htmlFor = "countries";
countriesLable.textContent = "Select Country";
//get country select tag using id
let countryInput = document.createElement("select");
countryInput.id = "countries";
countryInput.name = "countries";
let countryOptionDefault = document.createElement("option");
countryOptionDefault.className = "country";
countryOptionDefault.selected = true;
countryOptionDefault.disabled = true;
countryOptionDefault.textContent =
  "----------------Select-Country----------------";
countryInput.appendChild(countryOptionDefault);

let stateLable = document.createElement("label");
stateLable.htmlFor = "state";
stateLable.textContent = "Select State";
let stateSelect = document.createElement("select");
stateSelect.id = "state";
stateSelect.name = "state";
let stateOptionDefault = document.createElement("option");
stateOptionDefault.className = "state";
stateOptionDefault.selected = true;
stateOptionDefault.disabled = true;
stateOptionDefault.textContent = "----------------Select-State----------------";
stateSelect.appendChild(stateOptionDefault);

country_state.append(countriesLable, countryInput, stateLable, stateSelect);

let resetBtn = document.createElement("input");
resetBtn.type = "reset";
resetBtn.id = "reset";
resetBtn.hidden = true;
form.appendChild(resetBtn);

let submitBtn = document.createElement("button");
submitBtn.id = "submit";
submitBtn.className = "btn btn-primary";
submitBtn.value = "submit";
submitBtn.textContent = "Submit";
form.appendChild(submitBtn);

let dataContainer = document.createElement("div");
mainContainer.appendChild(dataContainer);
dataContainer.className = "dataContainer";

let table = document.createElement("table");
table.className = "table table-striped table-responsive table-bordered";
dataContainer.appendChild(table);
let tableThead = document.createElement("thead");
table.appendChild(tableThead);
let tableRowDefaultData = `
<tr>
<th >S.NO</th>
<th >First Name</th>
<th >Last Name</th>
<th>Address</th>
<th>Pincode</th>
<th>Gender</th>
<th>Food</th>
<th>State</th>
<th>Country</th>
</tr>`;
tableThead.innerHTML = tableRowDefaultData;

let tableBody = document.createElement("tbody");
tableBody.id = "tableBody";
table.appendChild(tableBody);
let tBodyRow = document.createElement("tr");
tBodyRow.id = "row_1";
tableBody.appendChild(tBodyRow);

//creating XHR object for geting country value
let countryXHRObj = new XMLHttpRequest();

//open API connection
countryXHRObj.open("GET", "https://api.countrystatecity.in/v1/countries", true);
//set authontication
countryXHRObj.setRequestHeader(
  "X-CSCAPI-KEY",
  "ZG0zdWpHMGc2VURJWjhyc3h5OHpmbE9LVGd4NUV1bDBvZlJUZThyaQ=="
);
//send request to the server
countryXHRObj.send();

//country API object load
countryXHRObj.onload = function () {
  let data = JSON.parse(this.responseText);

  data.forEach((countryData) => {
    let countryOption = document.createElement("option");
    countryOption.className = "country";
    countryOption.id = countryData.iso2;
    countryOption.value = countryData.name;
    countryOption.textContent = countryData.name;
    countryInput.appendChild(countryOption);
  });

  //add event listeners select input tag
  countryInput.addEventListener("change", () => {
    let countries = document.getElementsByClassName("country");

    let selectedCountry;
    countries.forEach((data) => {
      if (data.selected) {
        selectedCountry = data;
        let countryISO = data.id;
        if (selectedCountry.id != "") {
          let statXHRObj = new XMLHttpRequest();
          statXHRObj.open(
            "GET",
            `https://api.countrystatecity.in/v1/countries/${countryISO}/states`
          );
          statXHRObj.setRequestHeader(
            "X-CSCAPI-KEY",
            "ZG0zdWpHMGc2VURJWjhyc3h5OHpmbE9LVGd4NUV1bDBvZlJUZThyaQ=="
          );
          statXHRObj.send();
          statXHRObj.onload = () => {
            let stateData = JSON.parse(statXHRObj.responseText);

            stateSelect.innerHTML = "";

            stateData.forEach((state) => {
              let stateOptions = document.createElement("option");
              stateOptions.value = state.name;
              stateOptions.textContent = state.name;
              stateOptions.className = "state";
              stateSelect.appendChild(stateOptions);
            });
          };
        } else {
          document.getElementById(
            "state"
          ).innerHTML = `<option selected disabled>----------------Select-State----------------</option> `;
        }
      }
    });
  });
};

let inputRadio = document.getElementsByName("gender");

let foodsInput = document.getElementsByName("foods");

let sNoData = document.createElement("td");
sNoData.id = "sNo";
let firstName = document.createElement("td");
firstName.id = "firstName";
let lastName = document.createElement("td");
lastName.id = "lastName";
let addressData = document.createElement("td");
addressData.id = "addressData";
let pincodeData = document.createElement("td");
pincodeData.id = "pincodeData";
let gender = document.createElement("td");
gender.id = "gender";
let foods = document.createElement("td");
foods.id = "foods";
let countryName = document.createElement("td");
countryName.id = "countryName";
let stateName = document.createElement("td");
stateName.id = "stateName";

tableBody.appendChild(tBodyRow);
tBodyRow.append(
  sNoData,
  firstName,
  lastName,
  addressData,
  pincodeData,
  gender,
  foods,
  countryName,
  stateName
);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let rolNo = (+tableBody.lastChild.firstChild.textContent);
  
  if (tBodyRow.firstChild.innerText == "") {
    let sNO = 1;
    tBodyRow.append(
      sNoData,
      firstName,
      lastName,
      addressData,
      pincodeData,
      gender,
      foods,
      countryName,
      stateName
    );
    sNoData.textContent = sNO;
    firstName.textContent = first_name.value;
    lastName.textContent = lastNameInput.value;
    addressData.textContent = address.value;
    pincodeData.textContent = pincode.value;

    gender.textContent = getCheckedRadioValue(inputRadio);
    foods.textContent = getCheckedBoxValue(foodsInput);
    countryName.textContent = getSelectedCountry(countriesData);
    stateName.textContent = getSelectedState(statesAllData);
  } else {
    

    rolNo = +rolNo+1;
    

    let tBodyRow = document.createElement("tr");
    tBodyRow.id = `row_${rolNo}`;
    tableBody.appendChild(tBodyRow);
    let sNoData = document.createElement("td");
    sNoData.id = "sNo";
    let firstName = document.createElement("td");
    firstName.id = "firstName";
    let lastName = document.createElement("td");
    lastName.id = "lastName";
    let addressData = document.createElement("td");
    addressData.id = "addressData";
    let pincodeData = document.createElement("td");
    pincodeData.id = "pincodeData";
    let gender = document.createElement("td");
    gender.id = "gender";
    let foods = document.createElement("td");
    foods.id = "foods";
    let countryName = document.createElement("td");
    countryName.id = "countryName";
    let stateName = document.createElement("td");
    stateName.id = "stateName";

  

    sNoData.textContent = rolNo;
    firstName.textContent = first_name.value;
    lastName.textContent = lastNameInput.value;
    addressData.textContent = address.value;
    pincodeData.textContent = pincode.value;

    gender.textContent = getCheckedRadioValue(inputRadio);
    foods.textContent = getCheckedBoxValue(foodsInput);
    countryName.textContent = getSelectedCountry(countriesData);
    stateName.textContent = getSelectedState(statesAllData);
    tBodyRow.append(
      sNoData,
      firstName,
      lastName,
      addressData,
      pincodeData,
      gender,
      foods,
      countryName,
      stateName
    );
  }

  resetBtn.click();
  document.getElementById(
    "state"
  ).innerHTML = `<option selected disabled>----------------Select-State----------------</option> `;
  countryOptionDefault.selected = true;
});

let countriesData = document.getElementsByClassName("country");
function getSelectedCountry(arr) {
  let result;
  arr.forEach((element) => {
    if (element.selected) {
      result = element.value;
    }
  });

  return result;
}

let statesAllData = document.getElementsByClassName("state");
function getSelectedState(arr) {
  let result;
  arr.forEach((element) => {
    if (element.selected) {
      result = element.value;
    }
  });
  return result;
}

function getCheckedRadioValue(arr) {
  let result;
  arr.forEach((radioBtn) => {
    if (radioBtn.checked) {
      result = radioBtn.value;
    }
  });
  return result;
}

function getCheckedBoxValue(arr) {
  let result = [];
  arr.forEach((checkBox) => {
    if (checkBox.checked) {
      result.push(checkBox.value);
    }
  });

  if(result.length<2){
    alert('You should select at least 2 foods ')
  }else{
    return result
  }

}
