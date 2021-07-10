'use strict';
let imgContainerEl = document.getElementById("closet");
let changeColorContainer =document.getElementById('changeColor');
let iconPlace = document.getElementById("shirrt");
let iconsContenierEl=document.getElementById("icons")
let icons ;
let  iconImg;
let  newIcon;
function placeIcon() {
  console.log(iconImg);
 iconImg = JSON.parse(localStorage.getItem('clickedicon')) || [];
 icons = JSON.parse(localStorage.getItem('icons')) || [];
     newIcon = document.createElement("img");
    newIcon.setAttribute("src", "images/" + iconImg);
    newIcon.setAttribute("class", "icon");

    imgContainerEl.appendChild(newIcon);
  }
  
placeIcon();

let imgs=[];
let tsColor=[];
for (let i = 2; i < 15; i++) {
  imgs.push(`${i}a.jpg`);
  tsColor.push(`${i}.png`);
}
console.log(tsColor);
let imgEl2;

function render(lengTh,imgFile,contenerName,changeClass) {
  for (let i = 0; i < lengTh; i++) {
    // liEl = document.createElement("li");
    imgEl2 = document.createElement("img");
    imgEl2.setAttribute("src", "images/" + imgFile[i]);
    imgEl2.setAttribute("class",changeClass );
    imgEl2.setAttribute("width", "40px");
    imgEl2.setAttribute("id", i);
    // liEl.appendChild(imgEl);
    contenerName.appendChild(imgEl2);
    
  }
}
console.log(icons);
render(imgs.length,imgs,changeColorContainer,'circle');
render(icons.length,icons,iconsContenierEl,'icons');


let  imgTsEl;
changeColorContainer.addEventListener("click", changeColor);

function changeColor (event){
  
  let ColorIndex = event.target.id ;
  imgContainerEl.textContent='';
  imgTsEl = document.createElement("img");
  imgTsEl.setAttribute('class','shirrt')
  imgTsEl.setAttribute("src", "images/"+tsColor[ColorIndex]);
  imgContainerEl.appendChild(imgTsEl);

  let tsColorInLlocal = JSON.stringify(tsColor[ColorIndex]);
  localStorage.setItem("tsColor", tsColorInLlocal);

  placeIcon();
}

iconsContenierEl.addEventListener("click",  changIcon);

function changIcon(event){
  let clickedicon= JSON.stringify(icons[event.target.id]);
  localStorage.setItem("clickedicon", clickedicon);
  newIcon.remove();
  placeIcon();
}

// *****************************************************************************************

const Cart = function(items) {
  this.items = items;
};

Cart.prototype.addItem = function(product, quantity) {

  const newCartItem = new CartItem(product, quantity);
  cart.items.push(newCartItem );

};


Cart.prototype.saveToLocalStorage = function() {
  

  let cartContent = JSON.stringify(cart.items);
  localStorage.setItem('cart',cartContent);
};

Cart.prototype.removeItem = function(item) {
  
  this.items.splice(item,1);




};

const CartItem = function(product, quantity) {
  this.product = product;
  this.quantity = quantity;
};


