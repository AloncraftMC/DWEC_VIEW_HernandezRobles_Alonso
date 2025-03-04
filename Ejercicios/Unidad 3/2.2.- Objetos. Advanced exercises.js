//Destructuring

//Exercise 1: Create a function that receives an object with the properties name and age, and uses destructuring to return a string that says "Hello, my name is [name] and I am [age] years old."

function ejercicio1(objeto){

    const {name, age} = objeto;
    return "Hello, my name is " + name + " and I am " + age + " years old";

}

//Exercise 2: Create an object representing a book with properties like title, author, and year. Use destructuring to print each of these properties to the console.

const ejercicio2 = {
    ejercicio2titulo: "LAL",
    ejercicio2autor: "Pepe",
    ejercicio2año: 2000
};

const {ejercicio2titulo, ejercicio2autor, ejercicio2año} = ejercicio2;
console.log(ejercicio2titulo, ejercicio2autor, ejercicio2año);

//Exercise 3: Create a function that receives an array of objects (each object representing a person with properties name and age) and uses destructuring to return a new array that contains only the names.

function ejercicio3(array){

    let nombres = [];

    for(let objeto of array){
        
        const {name} = objeto;
        nombres.push(name);

    }

    return nombres;

}

objetos = [
    {name: "Pepe", age: 2},
    {name: "Jose", age: 225},
    {name: "Mama", age: 2241}
];

//Exercise 4: Given a nested object that contains information about a city (name, population, country), use destructuring to access the country property and display it in the console.

const ejercicio4 = {
    name: "Xauxina",
    population: 2,
    country: {
        name: "Granada",
        population: 3
    }
};

const {country: ejercicio4country} = ejercicio4;
console.log(ejercicio4country.name);

//Advanced Usage of this

//Exercise 5: Create an object representing a car with a method showDetails that uses this to access its properties brand and model. Then, create a function that calls this method and demonstrates the correct use of this.

const ejercicio5 = {
    brand: "Texla",
    model: "Xuxa",
    showDetails: function(){
        return "El coche es un " + this.brand + " " + this.model;
    }
}

console.log(ejercicio5.showDetails());

//Exercise 6: Define an arrow function inside a method of an object that tries to access this and shows what happens. Then, fix the problem using a traditional function.

const ejercicio6 = {
    atributo: "valor",
    //metodo: () => "El valor es " + this.atributo,
    metodo: function(){
        return "El valor es " + this.atributo;
    }
}

console.log(ejercicio6.metodo());

//Exercise 7: Create an object representing a counter with methods to increment and show the value. Ensure that this works correctly in both methods.

const ejercicio7 = {
    valor: 0,
    increment: function(){
        this.valor++;
    },
    show: function(){
        console.log(this.valor);
    }
}

ejercicio7.increment();
ejercicio7.show(); // 1

//Exercise 8: Create a user object with a present method. Then, call this method from another context (outside the object) using call or apply to demonstrate how the context of this can be changed.

const ejercicio8 = {
    present: function(){
        return "Me presento";
    },
    listarFunciones: function(){
        return "Mis funciones son " + this.present();
    }
}

console.log(ejercicio8.listarFunciones());

//Optional Chaining

//Exercise 9: Create a nested object that represents a student with properties name and course. Use optional chaining to access a property that may not exist (e.g., student.course.name) and display a message in the console if the property exists.

const ejercicio9 = {
    name: "jose",
    course: {}
};

console.log(ejercicio9.course.name ? ejercicio9.course.name : "No existe");

//Exercise 10: Define an object representing a person with optional properties. Use optional chaining to access properties that may not be defined and return a default value if they do not exist.

const ejercicio10 = {
    name: null,
    age: null
}

console.log(ejercicio10.name ? ejercicio10.name : "No definida");

//Exercise 11: Create an object that contains information about a company and use optional chaining to access the company's address, displaying a message in the console if the address is not defined.

class Company {
    #address;
    constructor(address){
        this.#address = address;
    }
    get address(){
        return this.#address ? this.#address : "No está definido";
    }
    set address(address){
        this.#address = address;
    }
};

const ejercicio11 = new Company();
console.log(ejercicio11.address);

//Exercise 12: Define an object representing a book with a review property that can be null. Use optional chaining to display the review in the console only if it exists.

// Acabo de entender que optional chaining es ?. y yo haciendo los ejercicios distinto

//Getters and Setters

//Exercise 13: Create an object representing an employee with properties name and salary. Define a getter for salary that returns the salary in currency format and a setter that validates if the salary is a positive number.

class Employee {
    #name;
    #salary;
    constructor(name, salary){
        this.#name = name;
        this.#salary = salary;
    };
    get salary(){
        return this.#salary.toFixed(2);
    }
    set salary(salary){
        if(salary >= 0) this.#salary = salary;
    }
}

//Exercise 14: Define an object representing a circle with a radius property. Create a getter that calculates and returns the area of the circle and a setter that validates the value of the radius.

class Circle{
    #radius;
    get area(){
        return Math.PI * this.#radius ** 2;
    }
    set radius(radius){
        return this.#radius;
    }
}

//Exercise 15: Create an object representing a student with properties name and grades. Define a getter that returns the average grade and a setter that adds a new grade.

class Student{
    #name;
    #grades = [];
    get averageGrade() {
        return this.#grades.reduce((media, nota) => media += nota) / this.#grades.length; 
    }
    set newGrade(grade){
        this.#grades.push(grade);
    }
}

const estudiante = new Student();
estudiante.newGrade = 4;
estudiante.newGrade = 6.5;
console.log(estudiante.averageGrade);

//Exercise 16: Define an object representing a product with properties name, price, and discount. Create a getter that returns the final price after the discount and a setter that validates that the price and discount are positive.

class Product {

    #name;
    #price;
    #discount; // %
    
    get finalPrice(){
        return this.#price * (1 - 0.01 * this.#discount);
    }

    set price(price){
        if(price > 0) this.#price = price;
    }

    set discount(discount){
        if(discount > 0 && discount < 100) this.#discount = discount;
    }

}

//Prototypical Inheritance and Method Overriding

//Exercise 17: Create an object animal with a method makeSound. Then, create a dog object that inherits from animal and overrides the makeSound method to return "Woof".

class Animal {
    constructor(){
        
    }
    makeSound() {
        console.log("aniLAL");
    }
}

class Dog extends Animal {
    constructor(){
        super();
    }
    makeSound(){
        console.log("Woof");
    }
}

Dog.prototype.makeSound();

//Exercise 18: Define a vehicle object with a type property and an info method. Create a motorcycle object that inherits from vehicle and overrides the info method to include specific information about the motorcycle.

class Vehicle {
    #type;
    constructor(type){
        this.#type = type;
    }
    get info(){
        return "Tipo: " + this.#type;
    }
}

class Motorcycle extends Vehicle {
    constructor(type){
        super(type);
    }
    get info(){
        return super.info + " y es una moto";
    }
}

const moto = new Motorcycle("vespa");

console.log(moto.info);

//Exercise 19: Create a base person object with properties name and age. Then, create a teacher object that inherits from person and adds a subject property, overriding the method that presents the information.

class Person {
    #name;
    #age;
    constructor(name, age){
        this.#name = name;
        this.#age = age;
    }
    get info() {
        return "Nombre: " + this.#name + "\nEdad: " + this.#age;
    }
}

class Teacher extends Person {
    #subject;
    constructor(name, age, subject){
        super(name, age);
        this.#subject = subject;
    }
    get info() {
        return super.info + "\nAsignatura: " + this.#subject;
    }
}

const profe = new Teacher("Alejandro Viana Ríos", 37, "sistemas");
console.log(profe.info);

//Exercise 20: Define a book object with a description method. Then, create a novel object that inherits from book and overrides the description method to include additional information specific to a novel.

class Book {

    #description;

    constructor(description){
        this.#description = description;
    }

    get description() {
        return this.#description;
    }

}

class Novel extends Book {

    constructor(description){
        super(description);
    }

    get description() {
        return super.description + " y es una novela";
    }

}

const novela = new Novel("Esta es la descripción magnífica xd LOL");
console.log(novela.description);
