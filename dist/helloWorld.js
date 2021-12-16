"use strict";
console.log('Hello, World!');
// tipos de datos que puedo manejar
//let veryBig: bigint = BigInt(100); // BigInt constructor
var decimal = 123;
var hex = 0x7b;
var binary = 123;
var myNumber = 50;
var sentence = "The total comes to: ";
console.log(sentence + myNumber);
//OBJETOS
var person = { firstName: "Roy", lastName: "Trenneman" };
console.log("el nombre de este man es:   " + person.firstName);
person.firstName = "Diomer";
//delete person.firstName;
console.log(person);
//ARRAYS
var numbers; // declares an array of numbers
var names; // declares an array of strings
var ages = [3, 4, 6, 1, 5, 5, 1];
ages.push(10); //add an element to the end of the array 
ages.unshift(11); //add an element to the beginning of an array
ages.pop(); //remove the last element using pop()
ages.shift(); //You can remove the first element using shift()
var people = ["Roy", "Maurice", "Jen"];
var removed = people.splice(1, 1); //You can add & remove elements from an array using splice() method
var removed2 = people.splice(1, 0, "Diomer"); //You can add a new element at a specific index.
//con el método sort() puedo ordenar los elementos del array de manera alfabética
console.log("last element: ", ages[ages.length - 1]); // find length of the array and subtract one
