

let newRequest = new XMLHttpRequest();

newRequest.open(
  "GET",
  "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json",
  true
);
newRequest.send();


/* ============================creat nessery elements below ====================================== */
/* h1 title */
let title = document.createElement("h1");
title.id = "title";
title.textContent = "Pagination Using DOM";
document.body.appendChild(title);

/* description para */
let description = document.createElement("p");
description.id = "description";
description.textContent = "This pagination was compleatly created using DOM";
document.body.appendChild(description);

/* table-responsive div */
let tableResponsive = document.createElement("div");
tableResponsive.className = "table-responsive";
document.body.appendChild(tableResponsive);

/* creat table element for showing dynamic datas */
let table = document.createElement("table");
table.id = "table";
table.className = "table table-bordered";

let thead = document.createElement("thead");
thead.id = "tHead";
let tbody = document.createElement("tbody");
table.append(thead, tbody);

let theadTableRow = document.createElement("tr");
let theadTableHead_ID = document.createElement("th");
theadTableHead_ID.textContent = "ID";
theadTableHead_ID.className = "tableHeadData";
theadTableHead_ID.id = "id";
let theadTableHead_Name = document.createElement("th");
theadTableHead_Name.textContent = "Name";
theadTableHead_Name.className = "tableHeadData";
theadTableHead_Name.id = "name";
let theadTableHead_Email = document.createElement("th");
theadTableHead_Email.textContent = "Email";
theadTableHead_Email.className = "tableHeadData";
theadTableHead_Email.id = "email";
thead.appendChild(theadTableRow);
theadTableRow.append(
  theadTableHead_ID,
  theadTableHead_Name,
  theadTableHead_Email
);

let tbodyTableRow = document.createElement("tr");
let tbodyTableData_ID = document.createElement("td");
tbodyTableData_ID.id = "tDataID";
tbodyTableData_ID.className = "tableRowData";
let tbodyTableData_Name = document.createElement("td");
tbodyTableData_Name.id = "tDataName";
tbodyTableData_Name.className = "tableRowData";
let tbodyTableData_Email = document.createElement("td");
tbodyTableData_Email.id = "tDataEmail";
tbodyTableData_Email.className = "tableRowData";

tbody.appendChild(tbodyTableRow);
tbodyTableRow.append(
  tbodyTableData_ID,
  tbodyTableData_Name,
  tbodyTableData_Email
);

tableResponsive.appendChild(table);

/* ----------------------------creat Buttons for pagination----------------------------------------- */
/* creat  dynamicBtns container for pagination data*/
let dynamicBtns = document.createElement("div");
dynamicBtns.id = "dynamicBtns";
document.body.appendChild(dynamicBtns);

//first Button this will use for get the first data
let firstButton = document.createElement("button");
firstButton.id = "firstButton";
firstButton.className = "firstButton";
firstButton.textContent = "First";
dynamicBtns.appendChild(firstButton);

// prevButton this will use for go to the privous data
let prevButton = document.createElement("button");
prevButton.id = "prevButton";
prevButton.className = "prevButton";
prevButton.textContent = "Prev";
dynamicBtns.appendChild(prevButton);

/* buttons this container will have all pagination page buttons */
let buttons = document.createElement("div");
buttons.id = "buttons";
buttons.className = "d-flex justify-content-center";
dynamicBtns.appendChild(buttons);

// nextButton this will use for go to the next data
let nextButton = document.createElement("button");
nextButton.id = "nextButton";
nextButton.className = "nextButton";
nextButton.textContent = "Next";
dynamicBtns.appendChild(nextButton);

// lastButton this will use for go to the last data
let lastButton = document.createElement("button");
lastButton.id = "lastButton";
lastButton.className = "lastButton";
lastButton.textContent = "Last";
dynamicBtns.appendChild(lastButton);

/* **********************************functions************************************************ */
newRequest.onload = function () {
  let data = JSON.parse(this.responseText);
  let totalPages = data.length;

  /* this pages function will genrate visble page numbers so that we can genrtae buttons for that */
  // it's take 4 arguments
  function pages(data, total, max, current) {
    let half = Math.floor(max / 2);
    let from = current - half;
    let to = current + half;

    if (current <= half) {
      return data.slice(0, max);
    } else if (current >= half) {
      if (half <= total - current) {
        return data.slice(from - 1, to);
      } else {
        return data.slice(-max);
      }
    }
  }

  //genrate array for get data
  let genratedData = pages(data, totalPages, 10, 1);

  //this genrateBtn function will genrate all page buttons
  function genrateBtn(arr) {
    if (buttons.textContent == "") {
      arr.forEach((data) => {
        dataBtn = `<button class="normal pageBtn" id="${data.id}" value="${data.id}">${data.id}</button>`;
        buttons.innerHTML += dataBtn;
      });
    } else {
      buttons.innerHTML = "";
      arr.forEach((data) => {
        dataBtn = `<button class="normal pageBtn" id="${data.id}" value="${data.id}">${data.id}</button>`;
        buttons.innerHTML += dataBtn;
      });
    }
  }
  genrateBtn(genratedData); //using genrated array and call genrateBtn

  //this markActive function will add active class elements
  function markActive(button) {
    button.classList.add("active");
  }
  //this removeActive function will remove active class elements
  function removeActive() {
    document.querySelectorAll("button").forEach((data) => {
      data.classList.remove("active");
    });
  }
  /* ===========================add event listeners and show datas on table=============================== */
  /* add event listeners */
  let buttonOne = document.getElementById("1"); //get first button
  document.body.onload = buttonOne.click(); //this will automaticaly show first data
  document.body.onload = buttonOne.className = "active pageBtn"; //adda first button to active class

  let activeElement; //get currunt active element

  //this showData function will show datas on table with event listners
  function showData(data) {
    let pageBtns = document.querySelectorAll(".pageBtn");
    for (let i = 0; i < pageBtns.length; i++) {
      document.body.onload = pageBtns[0].click();

      pageBtns[i].addEventListener("click", function () {
        removeActive();
        markActive(pageBtns[i]);
        activeElement = pageBtns[i];

        if (activeElement.id == 1) {
          prevButton.disabled = true;
          firstButton.disabled = true;
        } else {
          prevButton.disabled = false;
          firstButton.disabled = false;
        }
        if (+activeElement.id == totalPages) {
          nextButton.disabled = true;
          lastButton.disabled = true;
        } else {
          nextButton.disabled = false;
          lastButton.disabled = false;
        }

        data.forEach((node) => {
          if (activeElement.id == node.id) {
            tDataID.textContent = node.id;
            tDataName.textContent = node.name;
            tDataEmail.textContent = node.email;
          }
        });
      });
    }
  }
  showData(data);

  /* =========================addEventListener====================================================== */
  nextButton.addEventListener("click", () => {
    let nextElementID = +activeElement.id + 1;
    if (nextElementID <= 5) {
      let nextElement = document.getElementById(nextElementID);
      nextElement.click();
    } else {
      let genData = pages(data, totalPages, 10, nextElementID);
      genrateBtn(genData);

      showData(data);
      nextElement = document.getElementById(nextElementID);
      nextElement.click();
    }
  });

  prevButton.addEventListener("click", () => {
    let prevElementID = +activeElement.id - 1;
    let prevElement = document.getElementById(prevElementID);
    if (prevElement != null) {
      prevElement.click();
    } else {
      let genData = pages(data, totalPages, 10, prevElementID);
      genrateBtn(genData);

      showData(data);
      prevElement = document.getElementById(prevElementID);
      prevElement.click();
    }
  });

  firstButton.addEventListener("click", () => {
    let firstEle = document.getElementById("1");
    if (firstEle != null) {
      firstEle.click();
    } else {
      let genData = pages(data, totalPages, 10, 1);
      genrateBtn(genData);

      showData(data);
      let firstEle = document.getElementById("1");
      firstEle.click();
    }
  });

  lastButton.addEventListener("click", () => {
    let lastEle = document.getElementById(`${totalPages}`);

    if (lastEle != null) {
      lastEle.click();
    } else {
      let genData = pages(data, totalPages, 10, totalPages);
      genrateBtn(genData);

      showData(data);
      let lastEle = document.getElementById(`${totalPages}`);

      lastEle.click();
    }
  });
};
