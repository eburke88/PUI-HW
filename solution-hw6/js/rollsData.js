
let currentGlazeName = "Keep Original";
let currentPackSize = "1";

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
  "Keep Original": 0,
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


class Roll { //calls an object that has four fields (below) that will be added to the cart array as dimensions of each roll

  constructor(rollType, rollGlazing, packSize, basePrice) {
      this.imageURL = "./products/" + rolls[rollType]["imageFile"]
      this.type = rollType;
      this.glazing =  rollGlazing;
      this.size = packSize;
      this.basePrice = basePrice;
      this.calculatedPrice = (this.basePrice + glazePrices[rollGlazing]) * packPrices[packSize];  //calculating price of the added roll
      
      this.element = null;
  }
}    


