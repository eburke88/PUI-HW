    
if (localStorage.getItem('storedRolls') != null) {
    retrieveFromLocalStorage();
  }

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

const glazePrices = { // object holding prices for each glaze
        "Original": 0,
        "Sugar Milk": 0,
        "Vanilla Milk": 0.5,
        "Double Chocolate":1.5
}

const packPrices = { // object holding prices for each pack size
        "1": 1,
        "3": 3,
        "6": 5,
        "12":10
}


let cart = []; // array to hold added/displayed rolls


class Roll { //calls an object that has four fields (below) that will be added to the cart array as dimensions of each roll

    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.imageURL = "products/" + rolls[rollType]["imageFile"]
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
        this.calculatedPrice = (this.basePrice + glazePrices[rollGlazing]) * packPrices[packSize];  //calculating price of the added roll
    }
}

function addRoll(imageURL, rollType, currentGlazeName, currentPackSize, currentBasePrice) { //adding roll to cart when "add to cart" button is selected
    let newRoll = new Roll(imageURL, rollType, currentGlazeName, currentPackSize, currentBasePrice);
    cart.push(newRoll);
    console.log(newRoll);
    console.log(cart);
  
    saveToLocalStorage();
   
  };


updateTotal();


for (const roll of cart) { 
    console.log(roll);
    createElement(roll);
  }


function createElement(roll) { // creating a template based on one entry, and cloning it each time a roll is added 
    const template = document.querySelector('#cart-entry'); 
    const clone = template.content.cloneNode(true);
    roll.element = clone.querySelector('.cart-entry');

    const btnDelete = roll.element.querySelector('.remove');

    btnDelete.addEventListener('click', () => { // remove roll on click
        deleteRoll(roll);
    });

    const rollListElement = document.querySelector('#roll-list');
    rollListElement.prepend(roll.element);  // adding the cloned entry to the DOM

    updateElement(roll);
}

function updateElement(roll) { // assigning corresponding values to the empty fields for each roll created
    const rollImageElement = roll.element.querySelector('.roll-img');
	const rollTitleElement = roll.element.querySelector('.roll-type');
    const rollGlazeElement = roll.element.querySelector('.glaze-type');
	const rollPackSizeElement = roll.element.querySelector('.pack-size');
    const rollPriceElement = roll.element.querySelector('.roll-price')

    rollImageElement.src = roll.imageURL;
    rollTitleElement.innerText = roll.type;
    rollGlazeElement.innerText = roll.glazing;
    rollPackSizeElement.innerText = roll.size;
    rollPriceElement.textContent = "$" + roll.calculatedPrice.toFixed(2);
}


function deleteRoll(roll) {
    roll.element.remove(); // remove roll from DOM
    cart.splice(cart.indexOf(roll), 1); // remove roll from cart

    updateTotal(); // update total price

}

function updateTotal() { // function for updating total price based on updated cart

    const rollTotalPriceElement = document.querySelector('#total-price')

    var total = 0; // loop through array and add together the calculated prices
    for (var i = 0; i < cart.length; i++) {
        total = total + cart[i].calculatedPrice;
    }

    rollTotalPriceElement.textContent = "$" + total.toFixed(2);
};

function retrieveFromLocalStorage() {
    const cartArrayString = localStorage.getItem('storedRolls');
    const cartArray = JSON.parse(cartArrayString);
    
    for (const rollData of cartArray) {
      const roll = addRoll(rollData.imageURL, rollData.rollType,
        rollData.rollGlazing, rollData.packSize, rollData.basePrice);
        
      createElement(roll);
    }

  }

