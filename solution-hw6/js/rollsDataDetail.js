let cart = []; // array to hold added/displayed rolls

const queryString = window.location.search;
const params = new URLSearchParams(queryString); 
const rollType = params.get('roll'); // getting roll name from URL

let currentRoll = rolls[rollType]; // setting the current roll as the one clicked

let currentBasePrice = currentRoll.basePrice; // retrieving the baseprice of the roll that was clicked from gallery

const headerElement = document.querySelector('#roll-title');
headerElement.innerText = rollType + " Cinnamon Roll"; // constructing the title of the page


const rollImage = document.querySelector('#roll-img');
rollImage.src = "./products/" + rolls[rollType]["imageFile"]; // calling the corresponding image


let glazeInfoElement = document.querySelector('#glaze-info'); // creating an element tied to the price text


var option;

let basePrice = 2.49;


let selectElementGlaze = document.querySelector('#glaze-select'); // creating element for glaze select box
let selectElementPack = document.querySelector('#pack-select'); // creating element for pack size select box

let currentGlazingPrice = 0; // setting initial value so that default price is displayed
let currentPackPrice = 1;  // setting initial value so that default price is displayed



function glazingChange(element) { // function for updating the price based on glaze selected
  currentGlazingPrice = parseFloat(element.value); // get value from selected option
  currentGlazeName = element.options[element.selectedIndex].text; // get text content from selected option
 
  calc(); //updating displayed price

}

function packChange(element) { // function for updating the price based on pack size selected
  currentPackPrice = parseFloat(element.value); 
  currentPackSize =  element.options[element.selectedIndex].text; 

  calc();
}

function calc() {
const price = (currentBasePrice + currentGlazingPrice) * currentPackPrice;  //calculating price

glazeInfoElement.textContent = "$" + price.toFixed(2); //rounding and labeling price
}


for (const [glazing, price]  of Object.entries(glazePrices)){   // creating a loop to push glazings and their prices to the select box
  
option = document.createElement('option'); // creating options for those objects in the select
option.textContent = glazing;
option.value = price;
selectElementGlaze.appendChild(option);
}



for (const [packSize, price]  of Object.entries(packPrices)){   // creating a loop to push pack sizes and their prices o the select box
  
  option = document.createElement('option'); // creating options for those objects in the select
  option.textContent = packSize;
  option.value = price;
  selectElementPack.appendChild(option);
  }
  



function addRoll() { //adding roll to cart when "add to cart" button is selected
  let newRoll = new Roll(rollType, currentGlazeName, currentPackSize, currentBasePrice);
  cart.push(newRoll);
  console.log(newRoll);
  console.log(cart);

  saveToLocalStorage(); // when a roll is added to cart, save it to local storage
 
};

calc();   // display initial price


function saveToLocalStorage() {
  const cartArray = Array.from(cart);  // retrieve cart array with it's items
  console.log(cartArray);

  const cartArrayString = JSON.stringify(cartArray); // turn the array into a JSON string

  localStorage.setItem('storedRolls', cartArrayString);  // save the string

}

// price Nan When empty












