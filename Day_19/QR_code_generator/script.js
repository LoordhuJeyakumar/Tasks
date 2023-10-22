// Get the input data  element
const inputData = document.getElementById("floatingTextarea");

// Get the QR code width input element
const qrWidth = document.getElementById("width");

// Get the QR code height input element
const qrhight = document.getElementById("hight");

// Get the QR code color input element
const qrColor = document.getElementById("qrColorInput");

// Get the QR code background color input element
const qrBgColor = document.getElementById("qrBackGroundColorInput");

// Get the QR code format input element
const format = document.getElementById("format");

// Get the generate button  element
const generateBtn = document.getElementById("generateBtn");

// this function will generate a QR code image URL
const generateQRImageUrl = () => {
  // Get the default QR code format from format Option element
  let defaultformat = format.selectedOptions[0].value;

  // Construct the QR code image URL
  let url = `https://api.qrserver.com/v1/create-qr-code/?data=${
    inputData.value
  }&amp;size=${+qrWidth.value}x${+qrhight.value}&color=${qrColor.value.slice(
    1
  )}&bgcolor=${qrBgColor.value.slice(1)}&format=${defaultformat}`;
   
  // Fetch the QR code image URL
  fetch(url)
    .then((response) => {
      // Generate the QR code image
      generateQRImage(response.url);
    })
    .catch((error) => {
      // If the input data is missing, display an error message
      if (inputData.validity.valueMissing) {
        inputData.reportValidity();
      }
      // Log the error to the console
      console.error(error);
    });
};

// Add an event listener to the generate button to generate a QR code when it is clicked
generateBtn.addEventListener("click", generateQRImageUrl);

let qrDownloadBox = document.getElementById("qrDownloadBox");

let qrImage = document.getElementById("qrImage");
let qrContent = document.getElementById("qrContent");
let downloadBtn = document.getElementById("downloadBtn");

let formEl = document.querySelector("form");

let imageUrl = document.createElement("a");

function generateQRImage(url) {
  
  qrDownloadBox.style.display = "block";
  qrContent.textContent = inputData.value;

  let downloadLink = document.createElement("a");
  downloadLink.href = url + "&download=1";
  downloadLink.id = "downloadLink";
  qrDownloadBox.appendChild(downloadLink);

  qrImage.src = url;
  qrImage.alt = inputData.value;

  
downloadLink.addEventListener('click',refresPage)

  
}
downloadBtn.addEventListener("click", async (event) => {
  
  let link = document.getElementById('downloadLink') 
  
  link.click();

  
});




function refresPage(){
  setInterval(()=>{
    window.location.reload()
  },5000)
} 