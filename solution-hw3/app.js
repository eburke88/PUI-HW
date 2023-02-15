let glazeName = ['keep original', 'sugar milk', 'vanilla milk', 'Double Chocolate'];
let glazePrice = [0, 0, 0.5, 1.5];
let newGlazing = {};

let packName = ['1', '3', '6', '12'];
let packPrice = [1, 3, 5, 10];
let newPack = {};

let glazeInfoElement = document.querySelector('#glaze-info'); // creating an element tied to the price text




var option;

let basePrice = 2.49;

let allGlazings = [];  // the array to hold my glaze options

let allSizes = []; // the array to hold my pack size options




// function displayGlazing(glaze) { // function to display the price

//     glazeInfoElement.innerText = glaze.price+basePrice; // setting the element's text to a calculated value

//   }

let selectElement = document.querySelector('#glaze-select'); // creating element for glaze select box

let selectElementPack = document.querySelector('#pack-select'); // creating element for pack size select box

let currentGlazingPrice = 0; // setting initial value so that default price is displayed
let currentPackPrice = 1;  // setting initial value so that default price is displayed


function glazingChange(element) { // function for updating the price based on glaze selected
  const priceChangeIndex = element.value; //the index of the entry I want to get the price adaption of
  currentGlazingPrice = glazePrice[priceChangeIndex]; //retrieving the price for that entry

  calc(); //updating displayed price

}

function packChange(element) { // function for updating the price based on pack size selected
  const priceChangeIndex = element.value;
  currentPackPrice = packPrice[priceChangeIndex];

  calc();
}

function calc() {
  const price = (basePrice + currentGlazingPrice) * currentPackPrice;  //calculating price

  glazeInfoElement.textContent = "$" + price.toFixed(2);
}


for (let i = 0; i < glazeName.length; i++) {   // creating a loop to push glazings from info arrays to glazing array
  allGlazings.push(newGlazing = { name: glazeName[i], price: glazePrice[i] }); // adding the objects      

  option = document.createElement('option'); // creating options for those objects in the select
  option.text = newGlazing.name;
  option.value = allGlazings.length - 1;
  selectElement.add(option);
}

calc();   // display initial price


for (let i = 0; i < packName.length; i++) {
  allSizes.push(newPack = { name: packName[i], price: packPrice[i] });

  option = document.createElement('option');
  option.text = newPack.name;
  option.value = allSizes.length - 1;
  selectElementPack.add(option);
}


  // shouldn't it just be 3*baseprice for the two 0 glazes


