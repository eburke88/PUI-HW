const rolls = {    // array holding info to be used to populate the cart array when added
    "Original": {
        "Glazing": "Sugar Milk",
        "Pack Size": 1,
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
    }
};


let rollType = ["Original, Walnut, Raisin, Apple"]
let rollGlazing = [ 'Vanilla Milk', 'Sugar Milk', 'Double Chocolate', 'Original',]; // options for glazing select
let packSize = ['1', '12', '3', '3']; // options for pack size select
// let calculatedPrice = 


let cart = []; // array to hold added rolls


class Roll { //calls an object that has four fields (below) that will be added to the cart array as dimensions of each roll

    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}


for (let i = 0; i < rolls.length; i++) {   // creating a loop to push glazings from info arrays to glazing array
  // let newRoll = new Roll = (); // adding the objects      

  cart.push(newRoll);
  console.log(newRoll);
  console.log(cart);

}

function calc() {
  const price = (currentBasePrice + currentGlazingPrice) * currentPackPrice;  //calculating price

  glazeInfoElement.textContent = "$" + price.toFixed(2); //rounding and labeling price
}







// let glazePrices = [0, 0, 0.5, 1.5];
// let packPrices = [1, 3, 5, 10];

// let glazeInfoElement = document.querySelector('#glaze-info'); // creating an element tied to the price text


// let basePrice = 2.49;
