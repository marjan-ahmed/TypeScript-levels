"use strict";
let fruits = ['mango', 'orange', 'apple'];
//                         0       1        2
// Adding item to the end of the array
fruits.push('banana');
// console.log(fruits);
// Removing item from the end of the array
fruits.pop();
// console.log(fruits);
// Adding item starting of the array
fruits.unshift('apple');
// console.log(fruits);
// Removing item from the start of the array
fruits.shift();
// console.log(fruits);
// Adding item at a specific index
fruits.splice(1, 0, "watermelon");
// console.log(fruits);
// Removing item at a specific index
fruits.splice(0, 1);
// console.log(fruits);
// Creating a new array from existing array (fruits)
const new_fruits = fruits.slice(1, 3);
// console.log(new_fruits);
