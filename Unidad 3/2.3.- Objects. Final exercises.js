//Exercise 1: Create a person object with properties name and age. Define a greet method that prints a greeting to the console. Then, create a function that changes the context of this to greet from another object.

class Person{

    #name;
    #age;

    constructor(name, age){

        this.#name = name;
        if(age > 0) this.#age = age;

    }

    greet = function(){

        console.log("Hola! Soy " + this.#name + " y tengo " + this.#age + " años.");

    }

}

const persona1 = new Person("Alonso", 20);
const persona2 = new Person("Alex", 21);

persona1.greet();

const greetNuevo = persona1.greet.bind(persona2);

persona2.greet();

//Exercise 2: Define a book object with properties title, author and year. Use destructuring to print each of these properties to the console.

class Book{

    #title;
    #author;
    #year;

    constructor(title, author, year){

        this.#title = title;
        this.#author = author;
        this.#year = year;

    }

    get title(){
        return this.#title;
    }

    get author(){
        return this.#author;
    }

    get year(){
        return this.#year;
    }

}

const book = new Book("Colmillo Blanco", "El pepe", 2000);

const {title, author, year} = book;
console.log("Título: " + title);
console.log("Autor: " + author);
console.log("Año: " + year);

//Exercise 3: Create a product object with properties name, price and discount. Implement a method that returns the final price after the discount and another method that validates that the price and discount are positive.

class Product{

    #name;
    #price;
    #discount;

    constructor(name, price, discount){

        this.#name = name;
        this.price = price;
        this.discount = discount;

    }

    set price(price){
        if(price > 0) this.#price = price;
    }

    set discount(discount){
        if(discount > 0 && discount < 100) this.#discount = discount;
    }

    getFinalPrice = function(){
        return this.#price * (1 - this.#discount / 100);
    }

}

const product = new Product("Aspiradora", 200, 10);
console.log(product.getFinalPrice());

//Exercise 4: Create a company object with an employee property, which is an array of person objects. Access the name property of a specific employee and display a message in the console if it exists.

class Company{

    #employees = [];

    constructor(...employees){

        this.#employees.push(...employees);

    }

    getEmployee(number){
        if(number < this.#employees.length) return this.#employees[number];
    }

}

const company = new Company("Alfredo", "Peco", "Pepe", "Renancio", "Burofacia");
console.log(company.getEmployee(1));

//Exercise 5: Define an animal object with a method makeSound. Create a cat object that inherits from animal and override the method to return ‘Meow’. Then, create a dog object that also inherits from animal and override the method to return ‘Woof’.

class Animal{

    constructor() {}
    makeSound = function(){

        console.log("Soy un animal y estoy haciendo ruido.");

    }

}

class Cat extends Animal{

    makeSound = function(){

        console.log("Meow");

    }

}

class Dog extends Animal{

    makeSound = function(){

        console.log("Woof");

    }

}

new Animal().makeSound();
new Cat().makeSound();
new Dog().makeSound();

//Exercise 6: Create a function that accepts two objects and returns true if they have at least one property in common, or false if they do not.

function ejercicio6(arg1, arg2){

    for(let propiedad in arg1){

        if(Object.keys(arg2).includes(propiedad)) return true;

    }

    return false;

}

const obj1 = {
    propiedad1: 0,
    propiedad2: 0
};

const obj2 = {
    propiedad2: 0
}

const obj3 = {
    propiedad3: 0
}

console.log(ejercicio6(obj1, obj2));
console.log(ejercicio6(obj1, obj3));

//Exercise 7: Create a car object with properties make and model. Define a method that uses these properties and displays a message on the console.

class Car{

    #make;
    #model;

    constructor(make, model){

        this.#make = make;
        this.#model = model;

    }

    metodo = function(){

        console.log("Este es el coche, su marca es " + this.#make + " y su modelo es " + this.#model + ".");

    }

}

new Car("Tesla", "Guapo").metodo();

//Exercise 8: Define a student object with properties name and grades. Implement a method that calculates and returns the average grade of the students.

class Student{

    #name;
    #grades = [];

    constructor(name, ...grades) {
        
        this.#name = name;
        this.#grades.push(...grades);

    }

    getAverageGrade(){

        let suma = 0;

        for(let grade of this.#grades){
            suma += grade;
        }

        return suma / this.#grades.length;

    }

}

console.log(new Student("Alonso", 4, 6, 7, 10).getAverageGrade());

//Exercise 9: Create a book object with a review property that can be null. Make sure to display the review in the console only if it exists.

class Book2{

    #review;

    constructor(review = null) {
        this.#review = review;
    }

    get review(){
        if(this.#review != null) return this.#review;
    }

}

console.log(new Book2().review);

//Exercise 10: Create a university object with a faculties property, which is an array of objects. Use the appropriate syntax to access a specific faculty and display its name in the console.

class University{

    #faculties = [];

    constructor(...faculties) {
        this.#faculties.push(...faculties);
    }

    getFaculty(number){
        return this.#faculties[number];
    }

}

console.log(new University("Informática", "Telecomunicaciones", "Literatura").getFaculty(2));

//Exercise 11: Define a house object with properties colour and number of rooms. Use a getter to return a description of the house and a setter to validate the colour before assigning it.

class House{

    #colour;
    #roomsNumber;

    constructor(colour, roomsNumber) {
        this.colour = colour;
        this.#roomsNumber = roomsNumber;
    }

    get description(){
        console.log("La casa es de color " + this.#colour + " y tiene " + this.#roomsNumber + " habitaciones.");
    }

    set colour(colour){
        if(["Amarillo", "Verde", "Azul", "Rojo"].includes(colour)) this.#colour = colour;
    }

}

const house = new House("Amarillo", 20);
console.log(house.description);

//Exercise 12: Create a counter object with methods to increment and display the value. Make sure the value is updated correctly.

class Counter{

    #value;

    constructor(){
        this.#value = 0;
    }

    increment(){
        this.#value++;
    }

    decrement(){
        this.#value--;
    }

    get value(){
        return this.#value;
    }

}

const counter = new Counter();
counter.increment();
console.log(counter.value);

//Exercise 13: Create a game object that contains information about a board game. Implement a method that displays the description of the game and its number of players.

class Game{

    #info;
    #players;

    constructor(info, players) {
        this.#info = info;
        this.#players = players;
    }

    showDescription(){
        console.log("El juego tiene " + this.#players + " y su información es: " + this.#info);
    }

}

new Game("Este juego es la leche", 2).showDescription();

//Exercise 14: Define an employee object with properties name, age and position. Implement a getter that returns a description of the employee.

class Employee{

    #name;
    #age;
    #position;

    constructor(name, age, position) {
        this.#name = name;
        this.#age = age;
        this.#position = position;
    }

    get description(){
        console.log("El empleado se llama " + this.#name + ", tiene " + this.#age + " años y ejerce de " + this.#position);
    }

}

new Employee("Alonso", 20, "programador :(").description;

//Exercise 15: Create a food object with properties name and calories. Implement a method that determines if the food is healthy based on its calorie count.

class Food{

    #name;
    #calories;

    constructor(name, calories) {
        this.#name = name;
        this.#calories = calories;
    }

    isHealthy(){
        return this.#calories < 2000;
    }

}

console.log(new Food("Hamburguesa Vegana", 1999).isHealthy());

//Exercise 16: Create a user object with properties name, email and a method to display the user's information in the console.

class User{

    #name;
    #email;

    constructor(name, email) {
        this.#name = name;
        this.#email = email;
    }

    showInfo(){
        console.log("El usuario se llama " + this.#name + " y su e-mail es: " + this.#email);
    }

}

new User("Alonso", "alox@lol.com").showInfo();

//Exercise 17: Define a movie object with properties title, director and year. Implement a method to return the synopsis of the movie.

class Movie{

    #title;
    #director;
    #year;

    constructor(title, director, year) {
        this.#title = title;
        this.#director = director;
        this.#year = year;
    }

    get synopsis(){
        console.log("La película se titula " + this.#title + ", es dirigida por " + this.#director + " y del año " + this.#year);
    }

}

new Movie("Interstellar", "No me acuerdo", 2015).synopsis;

//Exercise 18: Create a vehicle object with properties make, model and year. Implement a method that returns a string describing the vehicle.

class Vehicle{

    #make;
    #model;
    #year;

    constructor(make, model, year) {
        this.#make = make;
        this.#model = model;
        this.#year = year;
    }

    toString(){
        return "Make: " + this.#make + "\nModel: " + this.#model + "\nYear: " + this.#year;
    }

}

console.log(new Vehicle("Tesla", "Capux", 2054).toString());

//Exercise 19: Define a fruit object with properties name and colour. Implement a method that returns a message about the fruit.

class Fruit{

    #name;
    #colour;

    constructor(name, colour) {
        this.#name = name;
        this.#colour = colour;
    }

    about(){

        console.log("El nombre de la fruta es " + this.#name + " y es de color " + this.#colour);

    }

}

new Fruit("Naranja", 2024).about();

//Exercise 20: Create a device object with properties type, make and model. Implement a method that prints the device information to the console.

class Device{

    #type;
    #make;
    #model;

    constructor(type, make, model) {
        this.#type = type;
        this.#make = make;
        this.#model = model;
    }

    information(){

        console.log("El tipo de dispostivo es " + this.#type + ", su marca es " + this.#make + " y el modelo es " + this.#model);

    }

}

new Device("Telefono", "Apple", "pro max").information();