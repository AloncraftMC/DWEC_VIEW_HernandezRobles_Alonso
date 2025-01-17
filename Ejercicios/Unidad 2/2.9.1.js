// Actividad 1

let actividad4 = function () {

    let actividad4even = [];
    let actividad4odd = [];
    let actividad4n = prompt("Introduce n:");
    let actividad4j = 0;
    let actividad4third = [];

    while(actividad4j < actividad4n){
        (actividad4j % 2 == 0) ? actividad4even[actividad4even.length] = actividad4j : actividad4odd[actividad4odd.length] = actividad4j;
        actividad4j++;
    }

    for(let actividad4j = 0; actividad4j < actividad4n; actividad4j++){
        if(actividad4even[actividad4j] != null && actividad4odd[actividad4j] != null) actividad4third[actividad4third.length] = actividad4even[actividad4j] + actividad4odd[actividad4j];
    }

    console.log("Pares:", actividad4even);
    console.log("Impares:", actividad4odd);
    console.log("Suma:", actividad4third);

}

// actividad4();

let actividad5 = function () {

    let actividad5primo1;
    let actividad5m = prompt("Introduce m:");

    for(let actividad5k = 2; actividad5k < actividad5m; actividad5k++){
        actividad5primo1 = true;
        for(let actividad5l = 2; actividad5l < actividad5k; actividad5l++){
            if(actividad5k % actividad5l == 0){
                actividad5primo1 = false;
                break;
            }
        }
        if(actividad5primo1){
            console.log(actividad5k);
        }
    }

}

// actividad5();

let actividad6 = function () {

    let actividad6primo;
    let actividad6primos = [];
    let actividad6p = prompt("Introduce p:");
    let actividad6impares = [];

    for(let actividad6k = 2; actividad6k < actividad6p; actividad6k++){
        actividad6primo = true;
        for(let actividad6l = 2; actividad6l < actividad6k; actividad6l++){
            if(actividad6k % actividad6l == 0){
                actividad6primo = false;
                break;
            }
        }
        if(actividad6primo){
            actividad6primos[actividad6primos.length] = actividad6k;
        }
    }

    let actividad6se_mete;

    for(let actividad6a = 1; actividad6a < actividad6p; actividad6a += 2){
        actividad6se_mete = true;
        for(let actividad6b = 0; actividad6b < actividad6primos.length; actividad6b++){
            if(actividad6primos[actividad6b] == actividad6a){
                actividad6se_mete = false;
                break;
            }
        }
        if(actividad6se_mete) actividad6impares[actividad6impares.length] = actividad6a;
    }

    console.log(actividad6impares);

}

// actividad6();

let actividad7 = function () {

    let actividad7numero = prompt("Introduce un número:");
    let actividad7randomNumbers = [];
    let actividad7mayor = 0;

    for(let actividad7c = 0; actividad7c < actividad7numero; actividad7c++){
        actividad7randomNumbers[actividad7c] = Math.floor(Math.random() * 9999);
        if(actividad7randomNumbers[actividad7c] > actividad7mayor) actividad7mayor = actividad7randomNumbers[actividad7c];
    }

    console.log("Números Aleatorios", actividad7randomNumbers);
    console.log("Mayor", actividad7mayor);

}

// actividad7();

let actividad8 = function () {

    let actividad8cadena = prompt("Introduce una cadena");
    let actividad8nueva = "";

    for(let actividad8letra = actividad8cadena.length - 1; actividad8letra >= 0; actividad8letra --){
        actividad8nueva += actividad8cadena.charAt(actividad8letra);
    }

    console.log(actividad8nueva);

}

// actividad8();

let actividad9 = function () {

    let actividad9niveles = prompt("Introduce un número:");
    let actividad9triangulo = "";

    // Primer Nivel

    for(let actividad9i = 0; actividad9i < actividad9niveles - 1; actividad9i++){
        actividad9triangulo += " ";
    }
    actividad9triangulo += "*";
    for(let actividad9i = 0; actividad9i < actividad9niveles - 1; actividad9i++){
        actividad9triangulo += " ";
    }
    actividad9triangulo += "\n";

    // Resto de Niveles

    for(let actividad9nivel = 1; actividad9nivel < actividad9niveles - 1; actividad9nivel++){

        for(let actividad9parte1 = 0; actividad9parte1 < actividad9niveles - actividad9nivel - 1; actividad9parte1++){
            actividad9triangulo += " ";
        }
        actividad9triangulo += "*";
        for(let actividad9parte2 = 0; actividad9parte2 < 2*actividad9nivel - 1; actividad9parte2++){
            actividad9triangulo += " ";
        }
        actividad9triangulo += "*";
        for(let actividad9parte3 = 0; actividad9parte3 < actividad9niveles - actividad9nivel - 1; actividad9parte3++){
            actividad9triangulo += " ";
        }
        actividad9triangulo += "\n";

    }

    // Último nivel

    for(let actividad9i = 0; actividad9i < 2*actividad9niveles - 1; actividad9i++){
        actividad9triangulo += "*";
    }

    console.log(actividad9triangulo);

}

// actividad9();

let actividad10 = function() {

    let actividad10factorial = prompt("Introduce un número:");

    if(actividad10factorial < 3 || actividad10factorial > 25) console.log("Error. El número no está entre 3 y 25.");
    else{

        for(let actividad10i = actividad10factorial - 1; actividad10i > 1; actividad10i--){
            actividad10factorial *= actividad10i;
        }
        console.log(actividad10factorial);

    }

}

// actividad10();

let actividad11 = function () {

    let actividad11cadenaUsuario = prompt("Introduce una cadena:");
    let actividad11esPalindromo = true;

    for(let actividad11i = 0; actividad11i < actividad11cadenaUsuario.length / 2; actividad11i++){
        if(actividad11cadenaUsuario.charAt(actividad11i) != actividad11cadenaUsuario.charAt(actividad11cadenaUsuario.length - actividad11i - 1)){
            actividad11esPalindromo = false;
            break;
        }
    }

    actividad11esPalindromo ? console.log(actividad11cadenaUsuario + " es palíndromo") : console.log(actividad11cadenaUsuario + " no es palíndromo");

}

// actividad11();

let actividad12 = function () {

    let actividad12numeroAleatorio = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;

    for(let actividad12intentos = 4; actividad12intentos > 0; actividad12intentos--){
        let actividad12intento = prompt("Adivina el número. Tienes " + actividad12intentos + " intentos.");
        if(actividad12intento == actividad12numeroAleatorio){
            console.log("Adivinado!");
            break;
        }else{
            if(actividad12intentos == 1) console.log("No lo has adivinado.")
        }
    }

}

// actividad12();

// Actividad 2

function cuadrado(numero){
    return numero ** 2;
}

// Actividad 3

function min3(a, b){
    return (a < b) ? a : b;
}

// Actividad 4

let min4 = function (a, b){
    return (a < b) ? a : b;
}

// Actividad 5

let min5 = (a, b) => (a < b) ? a : b;

// Actividad 6

function pow6(x, n) {
    return x ** n;
}

// Actividad 7

let pow7 = function (x, n) {
    return x ** n;
}

// Actividad 8

let pow8 = (x, n) => (x ** n);

// Actividad 9

let ask = (question9, yes9, no9) => (confirm(question9) ? yes9() : no9());

ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
);

// Actividad 10

let calculateSupply = (age, amount) => {

    let maxAge = 100;
    let rest = amount / (365 * (maxAge - age));
    console.log("You will need " + rest + " to last you until the ripe old age of " + maxAge);

}

calculateSupply(20, 10000);

// Actividad 11

function saludo(momento){

    switch(momento){

        case "mañana":
            return "Buenos días ";
            break;
        case "tarde":
            return "Buenas tardes ";
            break;
        case "noche":
            return "Buenas noches ";
            break;
        default:
            return "Buenas ";

    }

}

function greets(name, mensaje){
    
    console.log(saludo(mensaje) + name);

}

// Actividad 12

function calculadora(a, b, operacion){

    switch(operacion){

        case "suma":
            return a + b;
            break;
        case "resta":
            return a - b;
            break;
        case "multiplicacion":
            return a * b;
            break;
        case "division":
            return a / b;
            break;
        default:
            return 0;
            break;

    }

}