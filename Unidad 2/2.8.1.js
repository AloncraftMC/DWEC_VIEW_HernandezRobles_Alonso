// Actividad 1
// 1

// Actividad 2

let i = 0;
while(i < 3){
    console.log(`number ${i}!`);
    i++;
}

// Actividad 3

let respuesta;

do{

    respuesta = prompt("Ingresa un número:");
    if(respuesta == null) break;
    respuesta = Number(respuesta);
    if(respuesta > 100) break;

}while(true);

// Actividad 4

let even = [];
let odd = [];
let n = prompt("Introduce n:");
let j = 0;
let third = [];

while(j < n){
    (j % 2 == 0) ? even[even.length] = j : odd[odd.length] = j;
    j++;
}

for(let j = 0; j < n; j++){
    if(even[j] != null && odd[j] != null) third[third.length] = even[j] + odd[j];
}

console.log("Pares:", even);
console.log("Impares:", odd);
console.log("Suma:", third);

// Actividad 5

let primo1;
let m = prompt("Introduce m:");

for(let k = 2; k < m; k++){
    primo1 = true;
    for(let l = 2; l < k; l++){
        if(k % l == 0){
            primo1 = false;
            break;
        }
    }
    if(primo1){
        console.log(k);
    }
}

// Actividad 6

let primo;
let primos = [];
let p = prompt("Introduce p:");
let impares = [];

for(let k = 2; k < p; k++){
    primo = true;
    for(let l = 2; l < k; l++){
        if(k % l == 0){
            primo = false;
            break;
        }
    }
    if(primo){
        primos[primos.length] = k;
    }
}

let se_mete;

for(let a = 1; a < p; a += 2){
    se_mete = true;
    for(let b = 0; b < primos.length; b++){
        if(primos[b] == a){
            se_mete = false;
            break;
        }
    }
    if(se_mete) impares[impares.length] = a;
}

console.log(impares);

// Actividad 7

let numero = prompt("Introduce un número:");
let randomNumbers = [];
let mayor = 0;

for(let c = 0; c < numero; c++){
    randomNumbers[c] = Math.floor(Math.random() * 9999);
    if(randomNumbers[c] > mayor) mayor = randomNumbers[c];
}

console.log("Números Aleatorios", randomNumbers);
console.log("Mayor", mayor);

// Actividad 8

let cadena = prompt("Introduce una cadena");
let nueva = "";

for(let letra = cadena.length - 1; letra >= 0; letra --){
    nueva += cadena.charAt(letra);
}

console.log(nueva);

// Actividad 9

let niveles = prompt("Introduce un número:");
let triangulo = "";

// Primer Nivel

for(let i = 0; i < niveles - 1; i++){
    triangulo += " ";
}
triangulo += "*";
for(let i = 0; i < niveles - 1; i++){
    triangulo += " ";
}
triangulo += "\n";

// Resto de Niveles

for(let nivel = 1; nivel < niveles - 1; nivel++){

    for(let parte1 = 0; parte1 < niveles - nivel - 1; parte1++){
        triangulo += " ";
    }
    triangulo += "*";
    for(let parte2 = 0; parte2 < 2*nivel - 1; parte2++){
        triangulo += " ";
    }
    triangulo += "*";
    for(let parte3 = 0; parte3 < niveles - nivel - 1; parte3++){
        triangulo += " ";
    }
    triangulo += "\n";

}

// Último nivel

for(let i = 0; i < 2*niveles - 1; i++){
    triangulo += "*";
}

console.log(triangulo);

// Actividad 10

let factorial = prompt("Introduce un número:");

if(factorial < 3 || factorial > 25) console.log("Error. El número no está entre 3 y 25.");
else{

    for(let i = factorial - 1; i > 1; i--){
        factorial *= i;
    }
    console.log(factorial);

}

// Actividad 11

let cadenaUsuario = prompt("Introduce una cadena:");
let esPalindromo = true;

for(let i = 0; i < cadenaUsuario.length / 2; i++){
    if(cadenaUsuario.charAt(i) != cadenaUsuario.charAt(cadenaUsuario.length - i - 1)){
        esPalindromo = false;
        break;
    }
}

esPalindromo ? console.log(cadenaUsuario + " es palíndromo") : console.log(cadenaUsuario + " no es palíndromo");

// Actividad 12

let numeroAleatorio = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;

for(let intentos = 4; intentos > 0; intentos--){
    let intento = prompt("Adivina el número. Tienes " + intentos + " intentos.");
    if(intento == numeroAleatorio){
        console.log("Adivinado!");
        break;
    }else{
        if(intentos == 1) console.log("No lo has adivinado.")
    }
}