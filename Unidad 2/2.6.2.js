// Actividad 1

console.log( null || 2 || undefined ); // 2
console.log( 1 && null && 2 ); // null
console.log( null || 2 && 3 || 4 ); // 3
let x = 3;
console.log((x < 5) && (x > 0)); // true
console.log((x < 5) && (x > 6)); // false
console.log((x > 2) || (x > 5)); // true
console.log((x > 3) || (x < 0)); // false
console.log(!(x == 3)); // false
console.log(!(x < 2)); // true

// Actividad 2

const numOne = 5;
const numTwo = 6;
console.log(numOne != numTwo);

// Actividad 3

let edad = prompt("Ingresa tu edad:");
console.log(!(edad >= 14 && edad <= 90));
console.log(edad < 14 || edad > 90);

// Actividad 4

(-1 || 0) && ( 'first' ); // first
(-1 && 0) || ( 'second' ); // second
(null || -1 && 1) && ( 'third' ); // third