let imgContainerEl = document.getElementById("closet");
let changeColorContainer =document.getElementById('changeColor');
let iconPlace = document.getElementById("shirrt");

function placeIcon() {
  const iconImg = JSON.parse(localStorage.getItem('data')) || [];

    let newIcon = document.createElement("img");
    newIcon.setAttribute("src", "images/" + iconImg);
    newIcon.setAttribute("class", "icon");

    imgContainerEl.appendChild(newIcon);
  }

placeIcon();

let imgs=[];
let tsColor=[];
for (let i = 2; i < 15; i++) {
  imgs.push(`${i}.png`);
  tsColor.push(`${i}.png`);
}
console.log(tsColor);
let imgEl;

function render() {
  for (let i = 0; i < imgs.length; i++) {
    // liEl = document.createElement("li");
    imgEl2 = document.createElement("img");
    imgEl2.setAttribute("src", "images/" + imgs[i]);
    imgEl2.setAttribute("class", "circle");
    imgEl2.setAttribute("width", "40px");
    imgEl2.setAttribute("id", i);
    // liEl.appendChild(imgEl);
    changeColorContainer.appendChild(imgEl2);
    
  }
}
render();



let  imgTsEl;
changeColorContainer.addEventListener("click", changeColor);

function changeColor (event){
  
  let ColorIndex = event.target.id ;
  imgContainerEl.textContent='';
  imgTsEl = document.createElement("img");
  imgTsEl.setAttribute('class','shirrt')
  imgTsEl.setAttribute("src", "images/"+tsColor[ColorIndex]);
  imgContainerEl.appendChild(imgTsEl);
  placeIcon();
}
