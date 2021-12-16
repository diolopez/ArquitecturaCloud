function helloWorld(nombre: string): void {
  console.log(`Hello, ${nombre}`);
}

function suma (num1: number, num2:number): number {
    return num1 + num2;
}

let valor = (x:number, y:number): number => {
    return x+y;
}

//ejecucion de las funciones
helloWorld("Diomer");
console.log(suma(1,2));   // funcion normal
console.log(valor(3,4));  // arrow function

//callbacks
import {readFileSync} from "fs";
const fileName = "my_notes.txt";

const readFileSyncReturns = readFileSync(fileName, "utf8");
console.log(`readFileSync returns:\n${readFileSyncReturns}`);
