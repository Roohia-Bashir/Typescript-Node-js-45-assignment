"use strict";
//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
const message = "Welcome to Typescript class: ";
let names = ['Roohia', 'Shahana', 'Rabia', 'Sehrish'];
for (let i = 0; i < names.length; i++) {
    console.log(message + names[i]);
}
