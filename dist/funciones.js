"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function helloWorld(nombre) {
    console.log("Hello, " + nombre);
}
function suma(num1, num2) {
    return num1 + num2;
}
var valor = function (x, y) {
    return x + y;
};
//ejecucion de las funciones
helloWorld("Diomer");
console.log(suma(1, 2)); // funcion normal
console.log(valor(3, 4)); // arrow function
//callbacks
var fs_1 = require("fs");
var fileName = "my_notes.txt";
var readFileSyncReturns = fs_1.readFileSync(fileName, "utf8");
console.log("readFileSync returns:\n" + readFileSyncReturns);
