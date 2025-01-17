// Actividad 1

let numero = prompt("Introduce número:");
x % 2 == 0 ? console.log("Par") : console.log("Impar");

// Actividad 2

let variable = 10;
typeof(variable) == 'number' ? console.log("Es un número") : console.log("No es un número");

// Actividad 3

let num1 = 2;
let num2 = 3;
num1 > num2 ? console.log(num1) : console.log(num2);

// Actividad 4

let numero1 = 1;
let numero2 = 2;
let numero3 = 3;

if (numero1 > numero2 && numero1 > numero3) console.log(numero1);
else (numero2 > numero3) ? console.log(numero2) : console.log(numero3);

(numero1 > numero2 && numero1 > numero3) ? console.log(numero1) : (numero2 > numero3) ? console.log(numero2) : console.log(numero3);

// Actividad 5

let lado1 = 2;
let lado2 = 2;
let lado3 = 3;

if (lado1 == lado2 && lado2 == lado3) console.log("Equilátero");
else (lado1 == lado2 || lado1 == lado3) ? console.log("Isósceles") : console.log("Escaleno");

// Actividad 6

let inicio = 1;
let final = 10;
let objetivo = 5;
(objetivo >= 1 && objetivo <= 10) ? console.log("Está dentro del rango") : console.log("No está dentro del rango");

// Actividad 7

let año = 2024;
(año % 400 == 0 || (año % 4 == 0 && año % 100 != 0)) ? console.log(año + " es bisiesto") : console.log(año + " no es bisiesto");

// Actividad 8

// Actividad 9

let mes = "Enero";
switch(mes){
    case "Enero":
        console.log(31);
        break;
    case "Febrero":
        console.log(28);
        break;
    case "Marzo":
        console.log(31);
        break;
    case "Abril":
        console.log(30);
        break;
    case "Mayo":
        console.log(31);
        break;
    case "Junio":
        console.log(30);
        break;
    case "Julio":
        console.log(31);
        break;
    case "Agosto":
        console.log(31);
        break;
    case "Septiembre":
        console.log(30);
        break;
    case "Octubre":
        console.log(31);
        break;
    case "Noviembre":
        console.log(30);
        break;
    case "Diciembre":
        console.log(31);
        break;
}

// Actividad 10

// Actividad 11

mes = "Febrero";
if (mes == "Enero" || mes == "Marzo" || mes == "Mayo" || mes == "Julio" || mes == "Agosto" || mes == "Octubre" || mes == "Diciembre") console.log(31);
else if (mes == "Febrero") console.log(28);
else console.log(30);

// Actividad 12
// Sí

// Actividad 13

let a = +prompt('a?', '');

switch(a){
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert('2,3');
        break;
}