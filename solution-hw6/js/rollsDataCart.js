let cart = []; // array to hold added/displayed rolls

function addRoll(rollType, currentGlazeName, currentPackSize, currentBasePrice) { //adding roll to cart when "add to cart" button is selected
    let newRoll = new Roll(rollType, currentGlazeName, currentPackSize, currentBasePrice);
    cart.push(newRoll);
    console.log(newRoll);
    console.log(cart);

    return newRoll
  
    // saveToLocalStorage(); // TODO maybe need this?
   
  };


updateTotal();



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

if (localStorage.getItem('storedRolls') != null) { // call to retreive rolls from storage if there are rolls there
    retrieveFromLocalStorage();
  }


function retrieveFromLocalStorage() { // function to retreive Cart JSON from storage and reassemble into array
    const cartArrayString = localStorage.getItem('storedRolls');
    const cartArray = JSON.parse(cartArrayString); // reassembling array

    for (const rollData of cartArray) { // loop to create elements based on the retreived data, add them to cart, and update the total price
      const roll = addRoll(rollData.type, rollData.glazing, rollData.size, rollData.basePrice);
        
      createElement(roll);

      updateTotal();
    }

  }

