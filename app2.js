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

let imgs=['circle-32.jpg','circle-32 (1).jpg','whit.gif','y.jpg']
let tsColor=['redts.png','t-shirt-500x500.jpg','tshirt_PNG5429.png','yt.jpg']
let imgEl;

function render() {
  for (let i = 0; i < imgs.length; i++) {
    // liEl = document.createElement("li");
    imgEl = document.createElement("img");
    imgEl.setAttribute("src", "images/" + imgs[i]);
    imgEl.setAttribute("class", "circle");
    imgEl.setAttribute("width", "40px");
    imgEl.setAttribute("id", i);
    // liEl.appendChild(imgEl);
    changeColorContainer.appendChild(imgEl);
    
  }
}
render();



let  imgTsEl;
changeColorContainer.addEventListener("click", changeColor);

function changeColor (event){
  
  let ColorIndex = event.target.id ;
  console.log(event.target.id);
  imgContainerEl.textContent='';
  imgTsEl = document.createElement("img");
  imgTsEl.setAttribute('class','shirrt')
  imgTsEl.setAttribute("src", "images/"+tsColor[ColorIndex]);
  imgContainerEl.appendChild(imgTsEl);
  placeIcon();
}
