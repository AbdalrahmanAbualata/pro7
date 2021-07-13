"use strict";

let table = document.getElementById("cart");
let tbodyEl = document.getElementById("body");
table.appendChild(tbodyEl);


let tshirt = {
  design: [],
};

function loadCart() {
  let tShirtItems = JSON.parse(localStorage.getItem("t-shirtInCart")) || [];
  tshirt.design = tShirtItems;
}

  //   console.log(tshirt);


function renderCart() {
  loadCart();
  clearCart();
  showCart();
};

function clearCart() {
  tbodyEl.textContent = "";
};

let trEl;
let tdEl;
let aEl;


function showCart() {

  for (let i in tshirt.design) {

    trEl = document.createElement("tr");
    tdEl = document.createElement("td");
    aEl = document.createElement("a");
    aEl.innerHTML = `<i id='${i}' class="far fa-trash-alt"></i>`;
    tdEl.addEventListener('click', removeItemFromCart);
    tdEl.appendChild(aEl);
    trEl.appendChild(tdEl);
    let tdEl1 = document.createElement("td");
    tdEl1.textContent = `${tshirt.design[i].quantity}`;
    trEl.appendChild(tdEl1);
    let tdEl2 = document.createElement("td");
    tdEl2.textContent = `${tshirt.design[i].icon.split(".")[0]}`;
    trEl.appendChild(tdEl2);
    // **************************************************************
    let tdEl4 = document.createElement("td");
    let img = document.createElement("img");
    img.setAttribute("src", "images/icon/" + tshirt.design[i].icon);
    img.setAttribute("width", "50px");
    img.setAttribute("height", "50px");
    tdEl4.appendChild(img);
    trEl.appendChild(tdEl4);
    // *******************************************************************
    let tdEl5 = document.createElement("td");
    let img2 = document.createElement("img");
    img2.setAttribute("src", "images/tshirt/"+tshirt.design[i].tsColor);
    img2.setAttribute("width", "60px");
    img2.setAttribute("height", "60px");
    tdEl5.appendChild(img2);
    trEl.appendChild(tdEl5);
    // ********************************************************************
    let tdEl3 = document.createElement("td");
    tdEl3.textContent = `${tshirt.design[i].tsColor.split(".")[0]}`;
    trEl.appendChild(tdEl3);
    tbodyEl.appendChild(trEl);
  }
}






function removeItemFromCart(event) {
  event.preventDefault();
  removeItem(event);
  saveToLocalStorage();
  renderCart();
};

function removeItem(event) {
  event.preventDefault();
  tshirt.design.splice(Number(event.target.id), 1);
}

function saveToLocalStorage() {
  let tShirtInCart = JSON.stringify(tshirt.design);
  localStorage.setItem("t-shirtInCart", tShirtInCart);
}

renderCart();

// ****************************************************************************************
let numOfItemInCart = JSON.parse(localStorage.getItem('numOfItemInCart')) || [];
// let cartNavEl = document.getElementById("ss");
// cartNavEl.textContent=`${numOfItemInCart}`;

function addToCounter() {

  numOfItemInCart[0]++

  let numOfItemInCartInLocal = JSON.stringify(numOfItemInCart);
  localStorage.setItem('numOfItemInCart', numOfItemInCartInLocal);

  cartNavEl.textContent=`${numOfItemInCart}`;
}

// ******************************************************************************************
// mone
let openEl = document.getElementById("openBtn");

openEl.addEventListener("click", showPop);

function showPop(event) {
  document.querySelector(".popUpForm").style.display = "flex";
  event.preventDefault();
}
// let closeForm=document.getElementById('closeBtn1')
//   closeForm.addEventListener("click",unShow)

//   function unShow(event){
//     event.preventDefault();
//     closeForm.querySelector(".popUpForm").style.display="none"
//   }

// *****************************************************************************************************
