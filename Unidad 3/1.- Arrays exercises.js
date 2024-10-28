////////////////////////
////simple exercises////
////////////////////////

//1. Creating arrays

//Exercise 1: Create an empty array and then add numbers from 1 to 5.

let ejercicio1_1 = [];
ejercicio1_1.push(1, 2, 3, 4, 5);

//Exercise 2: Create an array with the names of five fruits and access the third element.

let ejercicio1_2 = ["Manzana", "Pera", "Limón", "Melón", "Sandía"];
ejercicio1_2[2];

//Exercise 3: Create an array with five elements, including numbers, strings, and a boolean.

let ejercicio1_3 = [10, "hola", 1, "H", true];

//Exercise 4: Create a 3x3 two-dimensional array that contains numbers from 1 to 9.

let ejercicio1_4 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

//2. Accessing elements

//Exercise 1: Create an array with the names of four cities. Access and display the first and last elements.

let ejercicio2_1 = ["Madrid", "Granada,", "Guadix", "Baza"];
console.log(ejercicio2_1[0] + " " + ejercicio2_1[ejercicio2_1.length - 1]);

//Exercise 2: Given the array [2, 4, 6, 8, 10], access the second and penultimate elements.

let ejercicio2_2 = [2, 4, 6, 8, 10];
ejercicio2_2[1];
ejercicio2_2[ejercicio2_2.length - 2];

//Exercise 3: Given an array of arrays [[1,2], [3,4], [5,6]], access the second element of the third array.

let ejercicio2_3 = [[1, 2], [3, 4], [5, 6]];
ejercicio2_3[2][1];

//Exercise 4: Create an array with the days of the week. Use a negative index to access the last day.

let ejercicio2_4 = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
ejercicio2_4.at(-1);

//3. Inserting and removing elements

//Exercise 1: Create an array with three colors. Add a new color at the end.

let ejercicio3_1 = ["Rojo", "Verde", "Azul"];
ejercicio3_1.push("Blanco");

//Exercise 2: Create an array with five numbers. Use pop() to remove the last element and push() to add a new one at the end.

let ejercicio3_2 = [1, 2, 3, 4, 5];
ejercicio3_2.pop();
ejercicio3_2.push(6);

//Exercise 3: Use splice() to remove the third element from a five-fruit array.

let ejercicio3_3 = ["Manzana", "Pera", "Limón", "Melón", "Sandía"];
ejercicio3_3.splice(2, 1);

//Exercise 4: Insert two elements at position 2 in a three-element array using splice().

let ejercicio3_4 = [1, 2, 3];
ejercicio3_4.splice(2, 2, "a", "b");

//4. Arrays behaving like stacks and queues

//Exercise 1: Create an empty array. Use push() to add three elements and pop() to remove the last one.

let ejercicio4_1 = [];
ejercicio4_1.push(1, 2, 3);
ejercicio4_1.pop();

//Exercise 2: Use an array as a queue. Add elements to the end using push() and remove the first element with shift().

let ejercicio4_2 = [];
ejercicio4_2.push(1, 2, 3);
ejercicio4_2.shift();

//Exercise 3: Simulate the behavior of a stack using push() and pop() with an array of numbers.

let ejercicio4_3 = [];
ejercicio3_4.push("base", "medio", "pico");
ejercicio3_4.pop();
ejercicio3_4.pop();
ejercicio3_4.pop();

//Exercise 4: Simulate the behavior of a queue using push() and shift() with an array of names.

let ejercicio4_4 = [];
ejercicio4_4.push("Pepe", "Domingo", "Pedro");
ejercicio4_4.shift();
ejercicio4_4.shift();
ejercicio4_4.shift();

// 5. Iterating over arrays

//Exercise 1: Given an array of numbers [1, 2, 3, 4, 5], use a for loop to display each number.

let ejercicio5_1 = [1, 2, 3, 4, 5];

ejercicio5_1.forEach(elemento => {
    console.log(elemento);
});

//Exercise 2: Use forEach() to iterate over an array of names and display each one in uppercase.

let ejercicio5_2 = ["Pepe", "Jose", "Mani", "Pili"];

ejercicio5_2.forEach(elemento => {
    console.log(elemento.toUpperCase());
});

//Exercise 3: Use a for...of loop to iterate over an array of fruits and display only those starting with "a."

let ejercicio5_3 = ["Manzana", "Pera", "Limón", "Melón", "Sandía", "Ananás"];

for(fruta of ejercicio5_3){
    if(fruta.toLowerCase().startsWith("a")) console.log(fruta);
}

//Exercise 4: Iterate over a two-dimensional array and display each number in the console.

let ejercicio5_4 = [[1, 2], [3, 4], [5, 6]];

for(primerOrden of ejercicio5_4){
    for(segundoOrden of primerOrden){
        console.log(segundoOrden);
    }
}

//6. Returning the position of an element or checking if it exists

//Exercise 1: Given an array of fruits, use indexOf() to find the position of "mango."

let ejercicio6_1 = ["Manzana", "Mango", "Limón", "Melón", "Sandía"];
ejercicio6_1.indexOf("Mango");

//Exercise 2: Use includes() to check if the array [3, 5, 7, 9] contains the number 5.

let ejercicio6_2 = [3, 5, 7, 9];
ejercicio6_2.includes(5);

//Exercise 3: Given an array with repeated elements, use lastIndexOf() to find the last occurrence of "banana."

let ejercicio6_3 = ["Banana", "Manzana", "Banana"];
ejercicio6_3.lastIndexOf("Banana");

//Exercise 4: Given an array of names, use indexOf() to return the position of a name, or -1 if it doesn't exist.

let ejercicio6_4 = ["Pepe", "Jose"];
ejercicio6_4.indexOf("Pepe");
ejercicio6_4.lastIndexOf("María");

//7. Array comparison

//Exercise 1: Compare two arrays [1, 2, 3] and [1, 2, 3] using === and explain the result.

let ejercicio7_1_1 = [1, 2, 3];
let ejercicio7_1_2 = [1, 2, 3];

ejercicio7_1_1 === ejercicio7_1_2
// Devuelve falso porque el operador "===" compara punteros de arrays, no los arrays en sí, a diferencia de las variables, en las que el operador sí que compara los valores.

//Exercise 2: Write a function that compares two arrays and returns true if they are equal in content and length.

function ejercicio7_2(array1, array2){
    
    if(array1.length != array2.length) return false;

    for(let i = 0; i < array1.length; i++){

        if(array1[i] != array2[i]) return false;

    }

    return true;

}

//Exercise 3: Create two two-dimensional arrays and compare them element by element.

let array1 = [[1, 2], [3, 4], [5, 6]];
let array2 = [[1, 2], [3, 4], [5, 6]];

function ejercicio7_3(array1, array2){

    if(array1.length != array2.length) return false;
    
    for(let i = 0; i < array1.length; i++){

        if(array1[i].length != array2[i].length) return false;

        for(let j = 0; j < array1[i].length; j++){

            if(array1[i][j] != array2[i][j]) return false;

        }

    }

    return true;

}

//Exercise 4: Use JSON.stringify() to compare two arrays and check if they have the same content.

let ejercicio7_4_1 = [1, 2, 3];
let ejercicio7_4_2 = [1, 2, 3];

JSON.stringify(ejercicio7_4_1) == JSON.stringify(ejercicio7_4_2);

//8. Finding elements in arrays

//Exercise 1: Given an array of numbers, use find() to locate the first number greater than 10.

let ejercicio8_1 = [10, 20, 30];
ejercicio8_1.find(elemento => elemento > 10);

//Exercise 2: Use findIndex() to find the position of the first negative number in an array.

let ejercicio8_2 = [10, 0 -10];
ejercicio8_2.findIndex(elemento => elemento < 0);

//Exercise 3: Given an array with repeated elements, use findLastIndex() to find the last position of a number greater than 5.

let ejercicio8_3 = [4, 6, 5, 6, 4];
ejercicio8_3.findLastIndex(elemento => elemento > 5);

//Exercise 4: Given an array of objects representing people, use find() to locate the first person over 30 years old.

let ejercicio8_4 = [
    {nombre: "Jose", edad: 20, casado: false},
    {nombre: "Faustino", edad: 51, casado: true},
    {nombre: "???", edad: null, casado: null}
];

ejercicio8_4.find(elemento => elemento.edad > 30);

//9. Filtering elements

//Exercise 1: Given the array [1, 2, 3, 4, 5], use filter() to return a new array with numbers greater than 3.

let ejercicio9_1 = [1, 2, 3, 4, 5];
ejercicio9_1.filter(elemento => elemento > 3);

//Exercise 2: Filter an array of names to return only those that start with the letter "J."

let ejercicio9_2 = ["Pepe", "Jose", "María"];
ejercicio9_2.filter(elemento => elemento.startsWith("J"));

//Exercise 3: Given an array of objects {name: "John", age: 25}, use filter() to return an array of people over 18.

let ejercicio9_3 = [
    {nombre: "John", edad: 25},
    {nombre: "joseillo", edad: 2}
];
ejercicio9_3.filter(elemento => elemento.edad > 18);

//Exercise 4: Use filter() and map() to filter numbers greater than 10 and return a new array with the numbers multiplied by 2.

let ejercicio9_4 = [5, 10, 15, 20];
ejercicio9_4.filter(elemento => elemento > 10);
let ejercicio9_4_doble = ejercicio9_4.map(elemento => elemento * 2);

//10. Operations with elements (map, reduce)

//Exercise 1: Use map() to create a new array containing the squares of the numbers [1, 2, 3, 4].

let ejercicio10_1 = [1, 2, 3, 4].map(elemento => elemento ** 2);

//Exercise 2: Use reduce() to sum all the numbers in the array [5, 10, 15, 20].

let ejercicio10_2 = [5, 10, 15, 20].reduce((suma = 0, elemento) => suma += elemento);

//Exercise 3: Given an array of names, use map() to return a new array where each name is in lowercase.

let ejercicio10_3 = ["Pepe", "jose", "Ana"];
let ejercicio10_3_low = ejercicio10_3.map(elemento => elemento.charAt(0) == elemento.charAt(0).toLowerCase());

//Exercise 4: Use filter() followed by reduce() to filter numbers greater than 5 and then sum them.

let ejercicio10_4 = [2, 4, 6, 8, 10].filter(elemento => elemento > 5).reduce((suma = 0, elemento) => suma += elemento);

//11. Array concatenation

//Exercise 1: Use concat() to join two arrays of numbers [1, 2, 3] and [4, 5, 6].

let ejercicio11_1_1 = [1, 2, 3];
let ejercicio11_1_2 = [4, 5, 6];

ejercicio11_1_1.concat(ejercicio11_1_2);

//Exercise 2: Concatenate two arrays of strings and display the length of the new concatenated array.

let ejercicio11_2_1 = ["Hola", "Adiós"];
let ejercicio11_2_2 = ["Odio", "La informática"];
let ejercicio11_2_3 = ejercicio11_2_1.concat(ejercicio11_2_2);
console.log(ejercicio11_2_3.length);

//Exercise 3: Concatenate three arrays of fruits and use join() to convert the new array into a string.

let ejercicio11_3_1 = ["Manzana", "Pera"];
let ejercicio11_3_2 = ["Sandía", "Melón"];
let ejercicio11_3_3 = ["Yo que se", "ya no quiero"];

let ejercicio11_3_4 = ejercicio11_3_1.concat(ejercicio11_3_2.concat(ejercicio11_3_3));

//Exercise 4: Use concat() to join two-dimensional arrays and then access one of their elements.

let ejercicio11_4_1 = [[1, 2], [3, 4]];
let ejercicio11_4_2 = [[5, 6], [7, 8]];
let ejercicio11_4_3 = ejercicio11_4_1.concat(ejercicio11_4_2);
ejercicio11_4_3[2][1];

//12. Sorting arrays

//Exercise 1: Use sort() to sort an array of numbers [3, 1, 4, 1, 5, 9] in ascending order.

let ejercicio12_1 = [3, 1, 4, 1, 5, 9].sort();

//Exercise 2: Alphabetically sort an array of names using sort().

let ejercicio12_2 = ["pepe", "jose"].sort();

//Exercise 3: Use sort() with a comparison function to sort an array of numbers from largest to smallest.

let ejercicio12_3 = [6, 2, 8, 3, 6].sort((e1, e2) => e2 - e1);

//Exercise 4: Sort an array of objects {name: "John", age: 25} by the age property using sort().

let ejercicio12_4 = [
    {nombre: "John", edad: 25},
    {nombre: "joseillo", edad: 2}
].sort((p1, p2) => p1.edad - p2.edad);

//13. Reversing arrays

//Exercise 1: Use reverse() to reverse an array of numbers [1, 2, 3, 4, 5].

let ejercicio13_1 = [1, 2, 3, 4, 5].reverse();

//Exercise 2: Reverse an array of strings and use join() to create a string with the words in reverse order.

let ejercicio13_2 = ["Jose", "Alonso", "Zixi"].reverse().join();

//Exercise 3: Given a two-dimensional array, use reverse() to reverse the order of the rows.

let ejercicio13_3 = [[1, 2], [3, 4]].reverse();

//Exercise 4: Use sort() and then reverse() to sort and then reverse an array of numbers.

let ejercicio13_4 = [6, 2, 6, 3, 4, 5].sort().reverse();

//14. Filling arrays with values (fill)

//Exercise 1: Use fill() to fill an empty array of length 5 with the number 0.

let ejercicio14_1 = new Array(5).fill(0);

//Exercise 2: Fill part of an array of numbers [1, 2, 3, 4, 5] with the value 9 starting from index 2.

let ejercicio14_2 = [1, 2, 3, 4, 5].fill(9, 2);

//Exercise 3: Create an array of length 10 and fill it with the value "x" in the last 5 elements.

let ejercicio14_3 = new Array(10);
ejercicio14_3.fill("x", ejercicio14_3.length - 5, ejercicio14_3.length);

//Exercise 4: Use fill() to replace the first 3 elements of an array with the value "A."

let ejercicio14_4 = ["X", "X", "X", "X", "X"].fill("A", 0, 3);

//15. Destructuring

//Exercise 1: Destructure a two-element array [10, 20] into two variables.

let [ejercicio15_1_1, ejercicio15_1_2] = [10, 20];

//Exercise 2: Destructure the first two elements of an array and store the rest in another variable using the spread operator.

let [ejercicio15_2_1, ejercicio15_2_2, ...ejercicio15_2_3] = [1, 2, 3, 4, 5];

//Exercise 3: Given a two-dimensional array, destructure the first row into three variables.

let [ejercicio15_3_1, ejercicio15_3_2, ejercicio15_3_3] = [[1, 2, 3], [4, 5, 6]][0];

//Exercise 4: Destructure an array of objects {name: "John", age: 25} to get the name and age properties from the first object.

let ejercicio15_4 = [
    {nombre: "joen", edad: 2},
    {nombre: "yuli", edad: 15}
];

[ejercicio15_4[0].nombre, ejercicio15_4[0].edad];

/////////////////////////////
////final array exercises////
/////////////////////////////

//Exercise 1: Given an array of numbers, remove all negative numbers, reverse the order of the array, and then sum the remaining even numbers. Return the result.

let final1 = [1, 10, 2, -6, 23, 4].filter(elemento => elemento >= 0).reverse().reduce((suma = 0, elemento) => {
    if(elemento % 2 == 0) suma += elemento;
    return suma;
});

console.log(final1);

//Exercise 2: You have an array of objects representing people, where each object has the properties name, age, and profession. Filter out people older than 30 who work as "engineers." Then, sort the filtered people by age in descending order and return a new array with just their names.

let final2 = [
    {nombre: "Juan", edad: 20, profesion: "Estudiante"},
    {nombre: "Jose Alférez", edad: 40, profesion: "Ingeniero"},
    {nombre: "Lizana", edad: 50, profesion: "Ingeniero"},
    {nombre: "Guille", edad: 25, profesion: "Ingeniero"}
];

let final2array = final2.filter(elemento => elemento.edad > 30 && elemento.profesion == "Ingeniero").sort((e1, e2) => e2.edad - e1.edad).map(elemento => elemento.nombre);
console.log(final2array);

//Exercise 3:Given an array of words, remove words that are less than 5 letters long, convert them all to uppercase, sort them alphabetically, and join them into a single string separated by dashes (-). Return the resulting string.

let final3 = ["alonso", "Pepe", "Josefran", "loli"].filter(palabra => palabra.length >= 5).map(palabra => palabra.toUpperCase()).sort().join("-");
console.log(final3);

//Exercise 4:You have two arrays of numbers. First, combine both arrays, removing any duplicates. Then, find the highest and lowest numbers and return a new array containing only the numbers between the second lowest and the second highest values (inclusive).

let final4_1 = [1, 6, 2, 4, 3];
let final4_2 = [10, 9, 5, 4, 8];

final4_1 = final4_1.concat(final4_2);
final4_1 = final4_1.filter(numero => {
    let cont = 0;
    for(num of final4_1){
        if(num == numero) cont++;
    }
    if(cont > 1) return false;
    return true;
});
final4_min = final4_1.reduce((e1, e2) => Math.min(e1, e2));
final4_max = final4_1.reduce((e1, e2) => Math.max(e1, e2));
final4_1 = final4_1.filter(numero => numero != final4_min && numero!= final4_max);

//Exercise 5:Given a two-dimensional array representing a warehouse table of products (each subarray contains the product name, quantity in stock, and price per unit), do the following:

    //Find the product with the highest quantity in stock.
    //Calculate the total value of that product based on its quantity and price.
    //Return an object with the product name and the total value calculated.

let final5 = [
    ["martillo", 4, 15.2],
    ["destornillador", 7, 5.1],
    ["mesa", 45, 250.64],
    ["silla", 2, 52.23]
];

const final5masStock = final5.reduce((elementoMax, elemento) => {
    return (elemento[1] > elementoMax[1]) ? elemento : elementoMax;
}, final5[0]);

const final5totalValue = final5masStock[1] * final5masStock[2];

const final5objeto = {
    name: final5masStock[0],
    total: final5totalValue
};

//Exercise 6:Given an array of numbers, separate the odd numbers from the even ones. Then, multiply the even numbers by 2 and the odd numbers by 3. Finally, combine both sets of numbers into a single array sorted from lowest to highest and return the result.

let final6 = [3, 2, 7, 5, 4, 1];
let final6odd = final6.filter(elemento => elemento % 2 != 0);
let final6even = final6.filter(elemento => elemento % 2 == 0);

final6even.forEach(elemento => elemento * 2);
final6odd.forEach(elemento => elemento * 3);

let final6final = final6odd.concat(final6even).sort();
console.log(final6final);

//Exercise 7:You have an array of objects representing different books, where each object has the properties title, author, and year of publication. Filter out books published after the year 2000, group them by author, and return an object where each key is the author’s name, and the value is an array with the titles of their books.

let final7 = [
    {titulo: "Dios y yo", autor: "Pilar", anio: 1900},
    {titulo: "Colmillo Blanco", autor: "Yo", anio: 2010},
    {titulo: "Jose Pérez y su historia", autor: "Yo", anio: 2005},
    {titulo: "El futuro", autor: "Pilar", anio: 2105}
];

final7 = final7.filter(libro => libro.anio > 2000);

let autores = [];

for(libro of final7){
    
    if(!autores.includes(libro.autor)) autores.push(libro.autor);

}

let final7objeto = {};

for(autor of autores){
    final7objeto[autor] = [];
    for(libro of final7){
        if(libro.autor == autor) final7objeto[autor].push(libro.titulo);
    }
}

console.log(final7objeto);

//Exercise 8:Given an array of numbers, return a new array where the numbers are squared if they are odd and cubed if they are even. Then, remove any number greater than 500 and return the result.

let final8 = [15, 6, 35, 40, 55, 60];
let final8new = final8.map(numero => 
    (numero % 2 != 0) ? numero ** 2 : numero ** 3
)
.filter(numero => numero <= 500);
console.log(final8new);

//Exercise 9:You have an array of strings representing usernames. You must perform the following actions:

    //Remove duplicate names.
    //Filter names that start with a vowel.
    //Sort the remaining names in descending order by length.
    //Return a string where each name is separated by a comma and a space.

let final9 = ["jose", "pepe", "jose", "agueda", "ernesto", "agueda", "alejandra", "alejandro"];
let final9usernames = [];

for(let username of final9){
    if(!final9usernames.includes(username)) final9usernames.push(username);
}

final9usernames = final9usernames.filter(username => ["a", "e", "i", "o", "u"].includes(username.charAt(0)));
final9usernames.sort((u1, u2) => u2.length - u1.length);

let final9string = final9usernames.join(", ");

//Exercise 10: Given a two-dimensional array representing a grid of colors (each subarray is a row of colors), do the following:

    //Reverse the order of the rows and columns of the array (matrix transposition).
    //Replace all colors containing the letter "a" with "black."
    //Return the new grid.

let final10 = [["amarillo", "verde", "azul"], ["rojo", "magenta", "naranja"], ["blanco", "gris", "ambar"]];
let final10t = [];

for(let i = 0; i < final10.length; i++){

    final10t[i] = [];
    for(let j = 0; j < final10[i].length; j++){

        final10t[i][j] = final10[j][i];

    }

}

final10 = final10t;

for(let i = 0; i < final10.length; i++){

    for(let j = 0; j < final10[i].length; j++){

        if(final10[i][j].includes("a")) final10[i][j] = "black";

    }

}

console.log(final10);