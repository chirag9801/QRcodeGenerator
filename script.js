const qrtext = document.getElementById("qrtext");
const size = document.getElementById("size");
const generatebtn = document.getElementById("genbutton");
const downloadbtn = document.getElementById("dwnbutton");
const qrContainer = document.querySelector(".qrbody");

let sizevalues = size.value;

generatebtn.addEventListener("click", function (e) {
  e.preventDefault();
  isinputEmpty();
});

function isinputEmpty() {
  if (qrtext.value.length > 0) {
    generateQRcode();
  } else {
    alert("Enter a text or URL");
  }
}

size.addEventListener("change", function (e) {
  sizevalues = e.target.value;
  isinputEmpty();
  generateQRcode();
});


downloadbtn.addEventListener("click", function () {
  let emptybox = document.querySelector("canvas").toDataURL();
  let img = document.querySelector(".qrbody img");
  if (img !== null) {
    let imgAttr = img.getAttribute("src");
    downloadbtn.setAttribute("href", imgAttr);
  } else {
    downloadbtn.setAttribute("href", `${emptybox}`);
  }
});

function generateQRcode() {
  qrContainer.innerHTML = "";
  new QRCode(qrContainer, {
    text: qrtext.value,
    height: sizevalues,
    width: sizevalues,
    colorlight: "#fff",
    colordark: "#000",
  });
}
