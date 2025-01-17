// Exercises on Objects in JavaScript

// Exercise 1: Create an object with properties that describe a car (brand, model, year).

let ejercicio1 = {
    marca: "Seat",
    modelo: "Ibiza",
    año: 2004
};

// Exercise 2: Create a constructor function for a Person and instantiate two objects from it.

function PersonEjercicio2(nombre){
    this.nombre = nombre;
}

let ejercicio2_1 = new PersonEjercicio2("pepe");
let ejercicio2_2 = new PersonEjercicio2("jose");

// Exercise 3: Access properties of a book object using both dot notation and bracket notation.

let ejercicio3 = {
    titulo: "LAL",
    año: 2000
}

ejercicio3.titulo;
ejercicio3["año"];

// Exercise 4: Modify the year published property of the book object.

ejercicio3.año = 1000;

// Exercise 5: Add a new property (color) to the car object.

ejercicio1.color = "blanco";

// Exercise 6: Remove the model property from the car object.

delete ejercicio1.modelo;

// Exercise 7: Create an object and freeze it. Try to change one of its properties.

let ejercicio7 = {
    propiedad: "valor"
};

Object.freeze(ejercicio7);
ejercicio7.propiedad = "intento de cambiar";

// Exercise 8: Create an object and prevent it from having new properties added. Try to add a new property.

let ejercicio8 = {
    propiedad: "valor"
};

Object.preventExtensions(ejercicio8);
ejercicio8.nueva = "intento de añadir";

// Exercise 9: Use Object.keys() to get the keys of a student object and print them.

let ejercicio9 = {
    nombre: "Pepe",
    asignatura: "Lengua"
};

console.log(Object.keys(ejercicio9));

// Exercise 10: Use Object.values() to get the values of a student object and print them.

let ejercicio10 = {
    nombre: "Jose",
    asignatura: "Mates"
};

console.log(Object.values(ejercicio10));

// Exercise 11: Iterate through the properties of a pet object and print each property with its value.

let ejercicio11 = {
    tipoAnimal: "Perro",
    peligroso: true
};

for(let propiedad in ejercicio11){
    console.log(propiedad, ejercicio11[propiedad]);
}

// Exercise 12: Write a function that checks if two objects have at least one property in common.

let ejercicio12_1 = {
    p1: "valor",
    p2: "valor"
};

let ejercicio12_2 = {
    p2: "valor",
    p3: "valor"
};

function ejercicio12(ejercicio12_obj1, ejercicio12_obj2){
    
    for(let propiedad1 in ejercicio12_obj1){

        if(Object.keys(ejercicio12_2).includes(propiedad1)) return true;

    }

    return false;

}

// Exercise 13: Create a function that returns a new object that merges two given objects.

let ejercicio13_1 = {
    p1: "A",
    p2: "B"
};

let ejercicio13_2 = {
    p2: "C",
    p3: "D"
};

function ejercicio13(ejercicio13_obj1, ejercicio13_obj2){

    let objeto = {};
    Object.assign(objeto, ejercicio13_obj1, ejercicio13_obj2);
    return objeto;

}

// Exercise 14: Create a function that clones a given object.

let ejercicio14_1 = {
    propiedad: "valor"
};

function ejercicio14(ejercicio14_obj){

    return structuredClone(ejercicio14_obj);
    
}

// Exercise 15: Create a function that compares two objects and returns true if they are equal, false otherwise.

let ejercicio15_1 = {
    propiedad: 1
};

let ejercicio15_2 = {
    propiedad: 1
};

function ejercicio15(ejercicio15_obj1, ejercicio15_obj2){

    if(Object.keys(ejercicio15_obj1).length != Object.keys(ejercicio15_obj2).length) return false;

    for(let propiedad in ejercicio15_obj1){

        if(ejercicio15_obj1[propiedad] !== ejercicio15_obj2[propiedad]) return false;

    }

    return true;

}

// Exercise 16: Write a function that destructures an object and returns its properties as variables.

let ejercicio16_1 = {
    propiedad1: "val1",
    propiedad2: "val2"
};

function ejercicio16(ejercicio16_obj){

    let {...propiedades} = ejercicio16_obj;
    return propiedades;

}

// Exercise 17: Create an object that uses 'this' in a method and show how to call it correctly.

function Ejercicio17(propiedad){

    this.propiedad = propiedad;

    this.metodo = function(){
        console.log("Esto es el método y la propiedad es: " + this.propiedad);
    }

}

new Ejercicio17("Valor").metodo();