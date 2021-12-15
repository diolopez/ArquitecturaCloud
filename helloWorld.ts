console.log('Hello, World!');

// tipos de datos que puedo manejar
//let veryBig: bigint = BigInt(100); // BigInt constructor
let decimal: number = 123;
let hex: number = 0x7b;
let binary: number = 0b1111011;

let myNumber: number = 50;
let sentence: string = "The total comes to: ";
console.log(sentence + myNumber);

//OBJETOS
let person = { firstName: "Roy", lastName: "Trenneman" };
console.log( `el nombre de este man es:   ${person.firstName}`);
person.firstName = "Diomer";
//delete person.firstName;
console.log(person);

//ARRAYS
let numbers: number[]; // declares an array of numbers
let names: string[]; // declares an array of strings
let ages: Array<number> = [3, 4, 6, 1, 5, 5, 1];
ages.push(10); //add an element to the end of the array 
ages.unshift(11); //add an element to the beginning of an array
ages.pop(); //remove the last element using pop()
ages.shift();//You can remove the first element using shift()
let people: Array<string> = ["Roy", "Maurice", "Jen"];
let removed = people.splice(1, 1); //You can add & remove elements from an array using splice() method
let removed2 = people.splice(1,0,"Diomer"); //You can add a new element at a specific index.
//con el método sort() puedo ordenar los elementos del array de manera alfabética
console.log("last element: ", ages[ages.length - 1]); // find length of the array and subtract one






