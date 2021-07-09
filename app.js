let imgContainer = document.getElementById("ob");

let imgFile = ["ballon.png", "bekind.png", "pizza.png","ltcu.jpg"];
let imgs = [];

function Img(name) {
  this.imgName = name.split(".")[0];
  this.filePath = name;
  imgs.push(this);
}

for (let i = 0; i < imgFile.length; i++) {
  // object maker
  new Img(imgFile[i]);
}

let imgEl;
function render() {
  for (let i = 0; i < imgs.length; i++) {
    let imgEl = document.createElement("img");
    imgEl.setAttribute("src", "images/" + imgs[i].filePath);
    imgEl.setAttribute("class", "item");
    imgEl.setAttribute("width", "100px");
    imgEl.setAttribute("id", i);

    imgContainer.appendChild(imgEl);
  }
  
}
render();

console.log(imgContainer);
// let imgEl = document.querySelector(".item");
imgContainer.addEventListener("click", goToCstmPage);

function goToCstmPage(event) {
console.log(event.target.id);
  let imgIndex = event.target.id
  let codedData = JSON.stringify(imgs[imgIndex].filePath);
  localStorage.setItem("data", codedData);
  window.location.href = "https://abdalrahmanabualata.github.io/pro7/shirt.html";
 
}


