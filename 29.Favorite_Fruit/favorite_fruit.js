"use strict";
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!  
const favorite_fruits = ["Banana", "Apple", "Strawberry"];
if (favorite_fruits.includes("Banana")) {
    console.log("I Really like Bananas!");
}
if (favorite_fruits.includes("Apple")) {
    console.log("I Really like Apples!");
}
if (favorite_fruits.includes("Strawberry")) {
    console.log("I Really like Strawberries!");
}
if (favorite_fruits.includes("Orange")) {
    console.log("I like Oranges!");
}
if (favorite_fruits.includes("Mango")) {
    console.log("I Really like Mango!");
}
//last two fruits will not be printed Because last two fruits is not in our array
