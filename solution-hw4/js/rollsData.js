const rolls = {    // array holding info to be used to populate the cart array when added
    "Original": {
        "basePrice": 2.49,
        "imageFile": "original-cinnamon-roll.jpg",
    },
    "Apple": {
        "basePrice": 3.49,
        "imageFile": "apple-cinnamon-roll.jpg"
    },
    "Raisin": {
        "basePrice": 2.99,
        "imageFile": "raisin-cinnamon-roll.jpg"
    },
    "Walnut": {
        "basePrice": 3.49,
        "imageFile": "walnut-cinnamon-roll.jpg"
    },
    "Double-Chocolate": {
        "basePrice": 3.99,
        "imageFile": "double-chocolate-cinnamon-roll.jpg"
    },
    "Strawberry": {
        "basePrice": 3.99,
        "imageFile": "strawberry-cinnamon-roll.jpg"
    }    
};

let cart = []; // array to hold added rolls

const queryString = window.location.search;
const params = new URLSearchParams(queryString); 
const rollType = params.get('roll'); // getting roll name from URL

let currentRoll = rolls[rollType]; // setting the current roll as the one clicked

let currentBasePrice = currentRoll.basePrice; // retrieving the baseprice of the roll that was clicked from gallery

const headerElement = document.querySelector('#roll-title');
headerElement.innerText = rollType + " Cinnamon Roll"; // constructing the title of the page


const rollImage = document.querySelector('#roll-img');
rollImage.src = './products/' + rolls[rollType]["imageFile"]; // calling the corresponding image


let glazeNames = ['keep original', 'sugar milk', 'vanilla milk', 'Double Chocolate']; // options for glazing select
let glazePrices = [0, 0, 0.5, 1.5];
let newGlazing = {};

let packSizes = ['1', '3', '6', '12']; // options for pack size select
let packPrices = [1, 3, 5, 10];
let newPack = {};

let glazeInfoElement = document.querySelector('#glaze-info'); // creating an element tied to the price text




var option;

let basePrice = 2.49;

let allGlazings = [];  // the array to hold my glaze options

let allSizes = []; // the array to hold my pack size options



let selectElement = document.querySelector('#glaze-select'); // creating element for glaze select box

let selectElementPack = document.querySelector('#pack-select'); // creating element for pack size select box

let currentGlazingPrice = 0; // setting initial value so that default price is displayed
let currentPackPrice = 1;  // setting initial value so that default price is displayed

let currentGlazeName = "keep original";
let currentPackSize = "1";


function glazingChange(element) { // function for updating the price based on glaze selected
  const priceChangeIndex = element.value; //the index of the entry I want to get the price adaption of


  currentGlazeName = glazeNames[priceChangeIndex]; //retrieving the glazing for that entry
  currentGlazingPrice = glazePrices[priceChangeIndex]; //retrieving the price for that entry

  calc(); //updating displayed price

}

function packChange(element) { // function for updating the price based on pack size selected
  const priceChangeIndex = element.value;

  currentPackSize = packSizes[priceChangeIndex];
  currentPackPrice = packPrices[priceChangeIndex];

  calc();
}

function calc() {
  const price = (currentBasePrice + currentGlazingPrice) * currentPackPrice;  //calculating price

  glazeInfoElement.textContent = "$" + price.toFixed(2); //rounding and labeling price
}


for (let i = 0; i < glazeNames.length; i++) {   // creating a loop to push glazings from info arrays to glazing array
  allGlazings.push(newGlazing = { name: glazeNames[i], price: glazePrices[i] }); // adding the objects      

  option = document.createElement('option'); // creating options for those objects in the select
  option.text = newGlazing.name;
  option.value = allGlazings.length - 1;
  selectElement.add(option);
}

calc();   // display initial price


for (let i = 0; i < packSizes.length; i++) {
  allSizes.push(newPack = { name: packSizes[i], price: packPrices[i] });

  option = document.createElement('option');
  option.text = newPack.name;
  option.value = allSizes.length - 1;
  selectElementPack.add(option);
}





class Roll { //calls an object that has four fields (below) that will be added to the cart array as dimensions of each roll

    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

function addRoll() { //adding roll to cart when "add to cart" button is selected
    let newRoll = new Roll(rollType, currentGlazeName, currentPackSize, currentBasePrice);
    cart.push(newRoll);
    console.log(newRoll);
    console.log(cart);
   
};






