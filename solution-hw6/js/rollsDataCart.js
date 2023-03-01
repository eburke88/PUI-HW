

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

    constructor(imageURL, rollType, rollGlazing, packSize, basePrice) {
        this.imageURL = imageURL
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
        this.calculatedPrice = (this.basePrice + glazePrices[rollGlazing]) * packPrices[packSize];  //calculating price of the added roll
    }
}


// cart.push(new Roll(rolls.Original.imageURL, "Original", "Sugar Milk", "1", rolls.Original.basePrice)); // adding the objects      
// cart.push(new Roll(rolls.Walnut.imageURL, "Walnut", "Vanilla Milk", "12", rolls.Walnut.basePrice));
// cart.push(new Roll(rolls.Raisin.imageURL,"Raisin", "Sugar Milk", "3", rolls.Raisin.basePrice));
// cart.push(new Roll(rolls.Apple.imageURL, "Apple", "Original", "3", rolls.Apple.basePrice));


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

    saveToLocalStorage();
}


function deleteRoll(roll) {
    roll.element.remove();
    cart.delete(roll);

    updateTotal();

}

function updateTotal() {

    const rollTotalPriceElement = document.querySelector('#total-price')

    var total = 0;
    for (var i = 0; i < cart.length; i++) {
        total = total + cart[i].calculatedPrice;
    }

    rollTotalPriceElement.textContent = "$" + total
};


