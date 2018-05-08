import React from 'react'


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
