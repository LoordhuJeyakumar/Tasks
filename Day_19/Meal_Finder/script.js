//get search box
let searchInput = document.getElementById("searchInput");
//get searchBtn
let searchBtn = document.getElementById("searchBtn");

//this randomMeal() function will return api fetech promise array
async function randomMeal() {
  //get promises
  let meals = [];

  //api call url for random meal
  const randomMealApiUrl = `https://www.themealdb.com/api/json/v1/1/random.php`;
  //api call
  let request = await fetch(randomMealApiUrl);
  //parse api response to json
  let requestResponse = await request.json();

  //push api response promises to array
  meals.push(requestResponse.meals[0]);

  //return array
  return meals;
}

//this function will genarate random meal data upto 10;
async function getTenRandomMeal() {
  //this will store generated promise data
  let random_10_meals = [];

  //this loop will run until random_10_meals array length reach 10
  while (random_10_meals.length < 10) {
    //call randomMeal() function for 10 time then push result into an array
    random_10_meals.push(randomMeal());
  }

  //get mealRandomBox element for display random meal content content
  let mealRandomBox = document.getElementById("mealRandomBox");

  //itreate each promise data in random_10_meals array
  random_10_meals.forEach((promise) => {
    //each promise run success and faild function for each promise in array
    promise.then(success).catch(faild);
  });

  //this function will run if api call successful
  function success(data) {
    //creat randomcard mox showing meal content
    let randomCard = document.createElement("div");
    randomCard.className = "card mb-3 border border-info-subtle";

    //creat randomCardContentBox
    let randomCardContentBox = document.createElement("div");
    randomCardContentBox.className = "row g-0";
    randomCard.appendChild(randomCardContentBox);

    //creat randomCard image box for showing mea image
    let randomCardImgBox = document.createElement("div");
    randomCardImgBox.className = "col-md-4 d-flex ps-md-2 align-items-center";
    randomCardContentBox.appendChild(randomCardImgBox);

    //craet image element for meal image
    let randomIMg = document.createElement("img");
    randomIMg.src = `${data[0].strMealThumb}`;
    randomIMg.className = "img-fluid rounded ";
    randomIMg.alt = `${data[0].strMeal}`;
    randomCardImgBox.appendChild(randomIMg);

    //creat card for showing meal details
    let randomMealDetailBox = document.createElement("div");
    randomMealDetailBox.className = "col-md-8 ";
    randomCardContentBox.appendChild(randomMealDetailBox);

    //cread card body
    let randomMealBody = document.createElement("div");
    randomMealBody.className = "card-body justify-content-center ";
    randomMealDetailBox.appendChild(randomMealBody);

    //creat card heading
    let randomMealHeading = document.createElement("h5");
    randomMealHeading.className = "card-title";
    randomMealHeading.textContent = `${data[0].strMeal}`;
    //meal area and catagory will show hear
    let randomMealArea = document.createElement("p");
    randomMealArea.className = "card-text";
    randomMealArea.textContent = `${data[0].strArea} ${data[0].strCategory}`;

    //meal related tags will show hear
    let randomMealTags = document.createElement("p");
    randomMealTags.className = "card-text";
    randomMealTags.textContent = `Tags: ${data[0].strTags}`;

    //button box
    let buttonbOX = document.createElement("div");
    buttonbOX.className = "d-flex justify-content-between ";

    //create button link for redirect to meal youtube page
    let randomMealYouTube = document.createElement("a");
    randomMealYouTube.href = `${data[0].strYoutube}`;
    randomMealYouTube.target = "_blank";
    randomMealYouTube.className = "btn btn-danger py-0 border-0 px-3";
    randomMealYouTube.innerHTML = `<p class="mb-0">Watch Video </p> <i class="fa-brands fa-youtube mb-0 p-0"></i>`;
    randomMealYouTube.style.height = "50px";

    //creat button for get meal incridient and instruction details
    let randomMealButton = document.createElement("button");
    randomMealButton.type = "button";
    randomMealButton.value = `${data[0].idMeal}`;
    randomMealButton.className = "getBtn btn btn-warning py-0 px-3 border-0 ";
    randomMealButton.name = "getDetails";
    randomMealButton.dataset.bsToggle = "modal";
    randomMealButton.dataset.bsTarget = `#meal${data[0].idMeal}`;
    randomMealButton.id = `${data[0].idMeal}`;
    randomMealButton.innerHTML = `<p class="text-black mb-0">Get Details</P> <span class="mb-0 p-0 material-symbols-outlined text-black">
    description
    </span>`;
    randomMealButton.style.height = "50px";
    buttonbOX.append(randomMealYouTube, randomMealButton);
    randomMealBody.append(
      randomMealHeading,
      randomMealArea,
      randomMealTags,
      buttonbOX
    );

    //append card element to cardBox
    randomCard.appendChild(randomCardContentBox);
    //append cardbox to mainMeal box
    mealRandomBox.appendChild(randomCard);

    //get ingredientDetailBox to show ingredient Details
    let ingredientDetailBox = document.getElementById("ingredientDetailBox");

    //create ingredientContentBox to show data;
    let ingredientContentBox = document.createElement("div");
    //add class name to it
    ingredientContentBox.className = "modal fade";

    //set id atrinute to ingredientContentBox
    ingredientContentBox.setAttribute("id", `meal${data[0].idMeal}`);
    //set dataset proberty bsbackdrop to true so that it will appear link a bootstrap backdrob
    ingredientContentBox.dataset.bsBackdrop = true;
    ingredientContentBox.tabIndex = -1;

    //set aria hidden to true so it will hidden until it's triggered
    ingredientContentBox.ariaHidden = true;
    ingredientDetailBox.appendChild(ingredientContentBox);

    //creat nessery elements to show the data
    ingredientContentBox.innerHTML = `

    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content ">
      
        <div class="modal-header ">
          <h1 class="modal-title  fs-5">Ingredient and Instructions Details</h1>
          <button  type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body" id="modalBody">
        <h4 class="text-center">ingredient List</h4>
          <ul class="list-group pb-4 " id="ingredientList${data[0].idMeal}">
          <li class="list-group-item d-flex justify-content-between align-items-center active ">
          Ingredient
          <span class="">Measure</span>
          </li>
          </ul>
          <h4 class="text-center mt-3 bg-primary ">Instructions Details</h4>
          <ol id="instructions${data[0].idMeal}" class="list-group list-group-flush list-group-numbered">
          
          </ol>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
    `;

    //get all getDetailsButton with id
    let getDetailsButton = document.getElementById(data[0].idMeal);

    //add EventListener to all buttons
    getDetailsButton.addEventListener("click", (event) => {
      //when click the buttion get that target value and use that value to call getIngredientDetail function
      getIngredientDetail(event.target.value);
    });

    return data;
  }
  function faild(error) {
    //if promise failes it will throw error
    console.log(`error fetching api ${error}`);
  }
}

getTenRandomMeal();
function getIngredientDetailList(data, idName) {
  //creat array for get ingredientkeys
  let ingredientkeys = [];
  //creat array for get ingredient measurement
  let ingredientMeskeys = [];
  //initiate ingredient
  let ingredient = 1;
  //initiate ingredient measurement
  let ingredientMes = 1;
  let apiData;

  if (data.meals === undefined) {
    apiData = data;
  } else {
    apiData = data.meals[0];
  }

  //create ingredientList to show the ingredients
  let ingredientList = document.getElementById(`${idName}${apiData.idMeal}`);

  //loop through data
  for (let key in apiData) {
    //Check if the current key is a valid ingredient or measure key.
    if ((apiData[key] == !!apiData.key) == " ") {
      //Check if the current key matches the format of an ingredient key.
      if (key === `strIngredient${ingredient}`) {
        ingredientkeys.push(key);
        ingredient += 1;
      }
      //Check if the current key matches the format of a measure key.
      if (key === `strMeasure${ingredientMes}`) {
        ingredientMeskeys.push(key);
        ingredientMes += 1;
      }
    }
  }

  //Iterate over the ingredientkeys array and create a list item for each ingredient.
  ingredientkeys.map((eachData, eachKey) => {
    //Create a list item element.
    let listItem = document.createElement("li");
    //Set the class name of the list item element.
    listItem.className = `list-group-item d-flex justify-content-between align-items-center `;
    //Set the text content of the list item element to the ingredient name.
    listItem.textContent = apiData[eachData];
    //Append the list item element to the ingredientList element.

    //Create a span element to display the measure.
    let listMeasure = document.createElement("span");
    //Set the class name of the span element.
    listMeasure.className = "badge bg-success rounded-pill fs-6";
    //Set the text content of the span element to the measure.
    listMeasure.textContent = apiData[ingredientMeskeys[eachKey]];
    // Append the span element to the list item element.
    listItem.appendChild(listMeasure);

    ingredientList.appendChild(listItem);
    outer = listItem.outerHTML;
  });
  return ingredientList;
}

//this function will generate all Ingredient and instruction Detail get parameter from button value
async function getIngredientDetail(targetValue) {
  let outer = "";
  //get mealId
  let mealId = targetValue;
  //api call url with mealId
  let apiIDUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
  //api fetch response
  let response = await fetch(apiIDUrl);
  //parse response data into json
  let data = await response.json();

  getIngredientDetailList(data, "ingredientList");

  //Check if the strInstructions property exists on data or not.
  if (data.meals[0].strInstructions) {
    //Split the instructions into an array of strings using the split() method.
    let instructionsArray = data.meals[0].strInstructions
      .split(".")
      .slice(0, -1);
    //Get the orderList element from the DOM using the getElementById() method.
    let orderList = document.getElementById(
      `instructions${data.meals[0].idMeal}`
    );
    //Iterate over the instructions array and create a list item element for each instruction.
    instructionsArray.map((str) => {
      //Create a list item element.
      let instructionsList = document.createElement("li");
      //Set the class name of the list item element
      instructionsList.className = "list-group-item";
      //Set the text content of the list item element
      instructionsList.textContent = str;
      //Append the list item element to the orderList element.
      orderList.appendChild(instructionsList);
    });
  }
}

async function getMeals() {
  // Declare a variable to store the API URL.
  let apiUrl = ``;
  
  // If the search input value is 1 character long and is not empty,
  // use the `f` query parameter to search for meals by the first letter of their name.
  if (searchInput.value.length === 1 && searchInput.value !== "") {
    apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchInput.value}`;

    // Otherwise, use the `s` query parameter to search for meals by their name.
  } else if (searchInput.value !== "") {
    apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput.value}`;
  }else if(apiUrl===''){
    alert("Enter food name to search");
  }
  
  // Make a fetch request to the API URL and wait for the response.
  let mealRequest = await fetch(apiUrl);
  // Convert the response to JSON and wait for the conversion.
  let mealRequestData = await mealRequest.json();

  // Check if the meals property of the meal request data is not null.
  if (mealRequestData.meals != null) {
    // Get the search result box element.
    let searchResultBox = document.getElementById("searchResultBox");

    // Clear the search result box.
    searchResultBox.innerHTML = "";

    // Get the input value display element.
    let inputValueDisplay = document.getElementById("inputValueDisplay");
    // Set the input value display element to show the search count and the total number of results found.
    inputValueDisplay.innerHTML = `<h2 class="searchCount">Search Result for : ${searchInput.value}</h2>
      <p class="searchCount">Total Result found : ${mealRequestData.meals.length}</p>
      `;

    // Clear the search input.
    searchInput.value = "";

    // Get an array of the response meals.
    let responseArray = mealRequestData.meals;

    for (let key in responseArray) {
      // Make a fresh element for the search card.
      let searchCard = document.createElement("div");

      //Extract the meal's YouTube embed URL.
      let youtubeUrl = `${responseArray[key].strYoutube.slice(
        0,
        23
      )}/embed/${responseArray[key].strYoutube.slice(32)}`;

      // Assign the search card element's class name.
      searchCard.className = "card mb-3 border border-info-subtle";

      //Create inner html element to show meal data
      searchCard.innerHTML = `
            
            <div class="imageAndName card-header d-inline-flex  justify-content-start ps-3 pt-3 align-items-center ">
                <div class="">
                    <img
                      src="${responseArray[key].strMealThumb}"
                      class="img-thumbnail rounded"
                      alt="${responseArray[key].strMeal}"
                    />
                </div>
                <div
                    class="w-70 text-center ps-3 d-flex justify-content-center flex-column align-items-center w-100"
                  >
                    <h3 class="card-title">${responseArray[key].strMeal}</h3>
                    <p class="card-text">Type : ${responseArray[key].strArea}  ${responseArray[key].strCategory}</p>
                </div>
            </div>
    
            <div class="card-body w-100 row youtubeAndList align-items-center">
                  <div class="card-body justify-content-center col-md-6">
                    <iframe
                      src="${youtubeUrl}"
                      frameborder="0"
                      
                      width="100%"
                      height="300"
                    ></iframe>
                  </div>
                  <div class="col-md-6">
                  <h5 class="card-content text-center text-bg-success rounded-pill">Ingredient Details</h5>
                    <ul class="list-group searchListUl" id="searchList${responseArray[key].idMeal}">
                      
                    </ul>
                  </div>
                  
                </div>
                <div class="card-footer" id="instructionFooter${responseArray[key].idMeal}">
                
              </div>
              
                `;

      // Create a new search list item element.
      let searchListItem = document.createElement("li");
      // Set the class name of the search list item element.
      searchListItem.className =
        "list-group-item d-flex justify-content-between align-items-center";
      // Create a new search list item badge element.
      let searchListItemBadge = document.createElement("span");

      // Set the class name of the search list item badge element.
      searchListItemBadge.className = "badge bg-primary rounded-pill";

      // Append the search list item badge element to the search list item element.
      searchListItem.appendChild(searchListItemBadge);

      // Append the search card element to the search result box element.
      searchResultBox.appendChild(searchCard);

      // Get the ingredient detail list for the current meal.
      getIngredientDetailList(responseArray[key], "searchList");

      // Get the instruction footer element for the current meal.
      let instructionFooter = document.getElementById(
        `instructionFooter${responseArray[key].idMeal}`
      );

      // Set the innerHTML of the instruction footer element to show the instruction details for the current meal.
      instructionFooter.innerHTML = `
          <h5 class="card-footer rounded-pill text-center text-bg-success">Instruction Details</h5>
          <p>&#x2023; ${responseArray[key].strInstructions
            .split(". ")
            .join(` <br> &#x2023; `)}</p>`;
    }
  } else {
    // If no meals were found matching the search query, display an alert message to the user.
    alert("no food found please try another");
  }
}

// Add an event listener to the search button.
searchBtn.addEventListener("click",  () => {
  // Try to get the meals for the search query.
  try {
     getMeals();

    // If there is an error, catch it and display an alert message to the user.
  } catch (error) {
    console.error("Error");
    console.error(error);
    alert("Enter food name to search");
  }
});

// Add an event listener to the search input field.
searchInput.addEventListener("keyup",  (event) => {
  // Try to get the meals for the search query if the user pressed the Enter key.
  try {
    if (event.code === "Enter") {
       getMeals();
    }
    // If there is an error, catch it and display an alert message to the user.
  } catch (error) {
    alert("Enter food name to search");
    console.error("Error");
    console.error(error);
  }
});
