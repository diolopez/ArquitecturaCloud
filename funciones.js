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
