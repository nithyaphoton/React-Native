import React from 'react'

// Assignment 1 - first question

var list = [
    { text: 'ES6 is awesome', type: 'p' },
    { text: 'ES6 is significant update in JS history', type: 'li' },
    { text: 'const creates immutable variables', type: 'li' },
    { text: 'Block scoping via let and const', type: 'li' },
    { text: 'ES6 was released in 2015', type: 'h3' }
];

for (item of list) {
    if (item.type == "li") {
        console.log(`Element type is  ${item.type} with text ${item.text}`);
    }

}
// Assignment 1 - Second question

function calculatePrice(price,tax,discount=10){
    taxablePrice = price - (price * (discount / 100))
    priceWithTax =  taxablePrice + (taxablePrice * (tax / 100));
    return priceWithTax;
  }
  
  var price = calculatePrice(100,5);
  console.log(price);

// Assignment 1 - Seventh question

var value = new Map();
value.set('name','zeo');
value.set('Age',20);
value.set('grade','A');

for( [key,value] of value.entries()){
console.log(`${key} -> ${value}`);
  
}

