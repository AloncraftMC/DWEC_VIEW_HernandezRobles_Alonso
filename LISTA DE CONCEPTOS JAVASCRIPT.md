# Lista de Conceptos JavaScript
> Alonso Hernández Robles 2º DAW
> Ver. 28/11/2024 (_Ahora en Markdown!_)

---

## Comentarios

```js
// Comentario de línea

/* Comentario
de
párrafo
*/
```

---

## Mensajes

Imprimir mensaje por consola

```js
console.log("String");
console.log("String", mensaje2);
console.log("Gira" + "soles");

console.log(variable)
console.log(`${variable}`); // Ambos son lo mismo
```

Imprimir advertencia por consola

```js
console.warn("Advertencia");
```

Imprimir error por consola

```js
console.error("Error");
```

Imprimir objeto con más detalle

```js
console.dir(objeto);
```

Pedir string al usuario con mensaje

```js
prompt("Ingresa:");
```

<details>
	<summary>Ejemplo</summary>

```js
const edad = prompt("Ingresa tu edad:");
```
</details>

Pedir string al usuario con mensaje y con placeholder

```js
prompt("Ingresa:", "Placeholder");
```

Mostrar pop-up de confirmación (Aceptar / Cancelar)

```js
confirm("¿Aceptas o cancelas?");
```

<details>
	<summary>Ejemplo</summary>

```js
const confirmacion = confirm("¿Entrar con estos datos?");
```
</details>

Mostrar alerta con mensaje

```js
alert("String");
```

Limpiar consola

```js
console.clear();
```

---

## Constantes y Variables

Declarar e inicializar constante

```js
const constante = 5;
```

Declarar variable

```js
let variable;
```

Declarar e inicializar variable

```js
let variable = 100;
let var2 = "Hola mundo";
```

Declarar variable (global - en desuso)

```js
var variable;
```

Declarar e inicializar (global - en desuso)

```js
var variable = 5;
```

Establecer variable a valor

```js
variable = 10;
variable = "Hola";
variable = true;
```

---

## Tipos de Datos

`number`

```js
12		// Entero
3.14		// Decimal
Infinity	// Infinito (+)
-Infinity	// Infinito (-)
NaN		// Not a Number
```

`string`

```js
"Hola Mundo"
'Hola Mundo'
`Hola, ${variable}`
```

`boolean`

```js
true
false
```

`undefined`

```js
undefined
```

`null`

```js
null
```

`object`

```js
{
	nombre: "Eduardo",
	edad: 25,
	casado: true
};
```

```js
[1, 2, 3];
```

`bigint`

```js
10n
9007199254740991n
```

Acceder a atributo de objeto

```js
usuario.nombre
usuario.edad
```

<details>
	<summary>Ejemplo</summary>

```js
const vacio = {};
const usuario = {
	nombre: "Jose",
	edad: 20
};

console.log(usuario.nombre);	// Imprime "Jose"
console.log(usuario.edad);	// Imprime 20
```
</details>

Tipo de dato de una variable

```js
typeof miVariable
```

<details>
	<summary>Ejemplo</summary>

```js
console.log(typeof 10);		// Imprime "number"
console.log(typeof "a");	// Imprime "string"
console.log(typeof true);	// Imprime "boolean"
console.log(typeof this);	// Imprime "object"
console.log(typeof prompt);	// Imprime "function"
console.log(typeof desconocido)	// Imprime "undefined"
console.log(typeof 10n);	// Imprime "bigint"
```
</details>

---

## Conversión de Tipos

Valor en string de una variable

```js
String(miVariable);
```

<details>
	<summary>Ejemplo</summary>

```js
console.log(String(123));		// "123"
console.log(String(3.14));		// "3.14"
console.log(String(NaN));		// "NaN"
console.log(String(Infinity));		// "Infinity"

console.log(String(true));		// "true"
console.log(String(false));		// "false"

console.log(String(null));		// "null"
console.log(String(undefined));		// "undefined"

console.log(String({}));		// "[object Object]"
console.log(String([]));		// ""
console.log(String([1, 2, 3]));		// "1,2,3"
console.log(String(function() {}));	// "function() {}"
```
</details>

Valor en número de una variable

```js
Number(miVariable);
```

<details>
	<summary>Ejemplo</summary>

```js
console.log(Number("42"));	// 42
console.log(Number("42.5"));	// 42.5
console.log(Number("abc"));	// NaN

console.log(Number(true));	// 1
console.log(Number(false));	// 0

console.log(Number(null));	// 0
console.log(Number(undefined));	// NaN

console.log(Number({}));	// NaN
console.log(Number([]));	// 0
console.log(Number([10]));	// 10
```
</details>

Valor en booleano de una variable

```js
Boolean(miVariable);
```

<details>
	<summary>Ejemplo</summary>

```js
console.log(Boolean(0));		// false
console.log(Boolean(""));		// false
console.log(Boolean(null));		// false
console.log(Boolean(undefined));	// false
console.log(Boolean(NaN));		// false

console.log(Boolean(1));		// true
console.log(Boolean(-42));		// true
console.log(Boolean("Hello"));		// true
console.log(Boolean([]));		// true (un array vacío)
console.log(Boolean({}));		// true (un objeto vacío)
console.log(Boolean(() => {}));		// true (una función)
```
</details>

---

## Operadores

### Operadores Aritméticos

`+`	Suma

`-` Resta

`*` Multiplicación

`/` División

`%` Módulo

`**` Potencia

Incremento anterior
```js
++variable;
```

Incremento posterior
```js
variable++;
```

Decremento anterior
```js
--variable;
```

Decremento posterior
```js
variable--;
```

Sumar valor a variable
```js
variable += valor;
```

Restar valor a variable
```js
variable -= valor;
```

Multiplicar valor a variable
```js
variable *= valor;
```

Dividir valor a variable
```js
variable /= valor;
```

Hacer módulo a variable
```js
variable %= valor;
```

Hacer potencia con valor a variable
```js
variable **= valor;
```

### Operadores Relacionales

`==` Igual (valores)

`===` Estrictamente igual (valores y tipo)

`!=` Distinto (valores)

`!==` Estrictamente Distinto (valores y tipo)

`>` Mayor

`>=` Mayor o igual

`<` Menor

`<=` Menor o igual

### Operadores Lógicos

`&&` AND

`||` OR

`!` NOT

`??` OR pero sin aplicar lógica (`0` es `true`)

---

## Condicionales

### Condicional `if else`

Si se da `condición`, realizar `instrucción`

```js
if(condición) {
	// instrucción
}
if(condición) instruccion();
```

<details>
	<summary>Ejemplo 1</summary>

```js
const edad = 18;

if(edad >= 18) {
	console.log("Eres mayor de edad.");
}
```
</details>

<details>
	<summary>Ejemplo 2</summary>

```js
const usuarioActivo = true;
if(usuarioActivo) console.log("Usuario activo.");
```
</details>

Si se da `condición`, realizar `1`, si no, `2`.

```js
if(condición){
	// 1
}else{
	// 2
}
condición ? instruccion1() : instruccion2();
```

<details>
	<summary>Ejemplo 1</summary>

```js
const hora = 10;

if(hora < 12) {
	console.log("Buenos días");	// Si la hora es antes de las 12
} else {
	console.log("Buenas tardes");	// Si la hora es 12 o después
}
```
</details>

<details>
	<summary>Ejemplo 2</summary>

```js
const usuarioAutenticado = false;

if(usuarioAutenticado) {
	console.log("Acceso concedido");	// Si el usuario está autenticado
} else {
	console.log("Acceso denegado");		// Si el usuario no está autenticado
}
```
</details>

<details>
	<summary>Ejemplo 3</summary>

```js
console.log(esAdmin ? "Bienvenido al sistema" : "Acceso denegado");
```
</details>

Múltiple condición

```js
if(condición1){
	// 1
}else if(condición2){
	// 2
}else if(condición3){
	// 3
}else{
	// Resto
}
```

<details>
	<summary>Ejemplo 1</summary>

```js
const hora = 14;

if(hora < 12) {
	console.log("Buenos días");	// Si la hora es antes de las 12
} else if(hora < 18) {
	console.log("Buenas tardes");	// Si la hora es entre las 12 y las 18
} else {
	console.log("Buenas noches");	// Si la hora es después de las 18
}
```
</details>

<details>
	<summary>Ejemplo 2</summary>

```js
const puntos = 85;

if(puntos >= 90) {
	console.log("Excelente");	// Si los puntos son 90 o más
} else if(puntos >= 70) {
	console.log("Bueno");		// Si los puntos son 70 o más pero menos de 90
} else if(puntos >= 50) {
	console.log("Regular");		// Si los puntos son 50 o más pero menos de 70
} else {
	console.log("Insuficiente");	// Si los puntos son menos de 50
}
```
</details>

### Condicional `switch`

Realizar instrucción dependiendo del valor de `variable`

```js
switch(variable){
	case 1:
		// 1
		break;
	case 2:
		// 2
		break;
	case 3:
		// 3
		break;
	default:
		// Resto
}
```

<details>
	<summary>Ejemplo 1</summary>

```js
let color = "rojo";

switch(color) {
	case "azul":
		console.log("Color azul");
		break;
	case "rojo":
		console.log("Color rojo");
		break;
	case "verde":
		console.log("Color verde");
		break;
	default:
		console.log("Color desconocido");
}
```
</details>

<details>
	<summary>Ejemplo 2</summary>

```js
let edad = 25;

switch(edad) {
	case 18:
		console.log("Tienes 18 años.");
		break;
	case 25:
		console.log("Tienes 25 años.");
		break;
	case 30:
		console.log("Tienes 30 años.");
		break;
	default:
		console.log("Edad no específica.");
}
```
</details>

---

## Bucles

### Bucle `while`

Repetir `instrucción` mientras se cumpla `condición`

```js
while(condición) {
	// Instrucción
}
```

<details>
	<summary>Ejemplo</summary>

```js
let contador = 1;

while(contador <= 5) {
	console.log(contador);
	contador++;	// Aumenta el contador en cada iteración
}
```

**Salida**

```
1
2
3
4
5
```
</details>

### Bucle `do while`

Realizar `instrucción` y repetir mientras se cumpla `condición`

```js
do{
	// Instrucción
}while(condición);
```

<details>
	<summary>Ejemplo</summary>

```js
let contador = 1;

do {
	console.log(contador);
	contador++;	// Aumenta el contador en cada iteración
}while(contador <= 5);
```

**Salida**

```
1
2
3
4
5
```
</details>

### Bucle `for`

Realizar `inicialización` y repetir `instrucción` mientras se cumpla `condición`, y realizar `iteración`

```js
for(inicialización, condición, iteración){
	// Instrucción
}
```

<details>
	<summary>Ejemplo 1</summary>

```js
for(let i = 0; i < 5; i++) {
	console.log(i);
}
```

**Salida**

```
0
1
2
3
4
```
</details>

<details>
	<summary>Ejemplo 2</summary>

```js
for(let i = 3; i > 0; i--) {
	console.log(i);
}
```

**Salida**

```
3
2
1
```
</details>

Bucle For-Each `of` (Valores de un iterable)

```js
for(let elemento of iterable){
	// Instrucción
}
```

<details>
	<summary>Ejemplo</summary>

```js
const iterable = [1, 2, 3, 4, 5];

for(let elemento of iterable){
	console.log(elemento);
}
```

**Salida**

```
1
2
3
4
5
```
</details>

Bucle For-Each `in` (Claves de un objeto, iterable o no)

```js
for(let elemento in objeto){
	// Instrucción
}
```

<details>
	<summary>Ejemplo</summary>

```js
const objeto = {
	nombre: "Pepe",
	edad: 20
};

for(let elemento in objeto){
	console.log(elemento, objeto[elemento]);
}
```

**Salida**

```
nombre Pepe
edad 20
```
</details>

### `break` y `continue`

Salir del bucle

```js
while(condición){
	break;
}
```

<details>
	<summary>Ejemplo</summary>

```js
let numero = 10;

while(numero > 0) {
	if(numero == 5) {
		break;	// Sale del bucle cuando numero es igual a 5
	}
	console.log(numero);
	numero--;
}
```
</details>

Ejecutar siguiente iteración del bucle

```js
while(condición){
	continue;
}
```

<details>
	<summary>Ejemplo</summary>

```js
let numero = 10;

while(numero > 0) {
	numero--;
	if(numero % 2 == 0) {
		continue;	// Salta la iteración cuando numero es par
	}
	echo "Número impar: " + numero + "\n";
}
```
</details>

---

## Funciones

Crear función

```js
function miFuncion() {
	// Instrucciones
}

function miFuncion(variable1, variable2) {
	// Instrucciones
	return variable3;
}

let miFuncion = function() {
	// Instrucciones
}
```

Crear función con valor por defecto en parámetro

```js
function miFuncion(valor = 2) {
	// Instrucciones
}
```

Crear función anónima

```js
let funcion = () => {
	// Instrucciones
}

let suma = (a, b) => {
	return a + b;
}
```

Función con número variable de argumentos (Es un iterable, agrupación de elementos)

```js
function sumarTodo(...numeros){
	let suma = 0;
	for(let numero of numeros){
		suma += numero;
	}
	return suma;
}
```

Objeto `arguments` (debe usarse dentro de un ámbito con parámetros)

```js
function miFuncion(arg1, arg2){
	console.log(arguments);
}
```

Ejecutar función

```js
miFuncion();
miFuncion(variable1, variable2);
```

Función anidada

```js
function externa() {
	function interna() {
		// Instrucciones
	}
	interna();
}
```

Función autoejecutable

```js
(function () {
	// Instrucción
}) ();
```

---

## Modo `strict`

Habilitar modo estricto de JavaScript

```js
"use strict";
```

---

## Clase `Array`

Declarar array unidimensional

```js
let array = [0, 1, 2, "Casa", "Pelota", false];
```

Declarar array unidimensional de tamaño `10` con constructor

```js
let array = new Array(10);
```

Acceder a elemento por posición de array unidimensional

```js
array[3]
array.at(3)
```

<details>
	<summary>Ejemplo</summary>

```js
const array = ["a", "b", "c", "d"];

console.log(array[2]);	// Imprime 'c'
```
</details>

Acceder a elemento por posición de array unidimensional empezando por el final

```js
array.at(-1)
```

<details>
	<summary>Ejemplo</summary>

```js
const array = ["a", "b", "c", "d"];

console.log(array.at(-1));	// Imprime 'd'
console.log(array.at(-2));	// Imprime 'c'
```
</details>

Declarar array multidimensional

```js
let array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
```

Acceder a elemento por posición de array multidimensional

```js
array[5][2]
```

<details>
	<summary>Ejemplo</summary>

```js
let array = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
];

console.log(array[1][2]);	// Imprime 6
```
</details>

Tamaño de array

```js
array.length
```

<details>
	<summary>Ejemplo</summary>

```js
const miArray = [1, 2, 3, 4];
console.log(miArray.length);	// Imprime 4
```
</details>

(Sacar) primer elemento

```js
array.shift();
```

<details>
	<summary>Ejemplo</summary>

```js
let array = [1, 2, 3, 4, 5];
const primerElemento = array.shift();

console.log("Elemento eliminado: " + primerElemento);
console.log("Array:");
for(let elemento of array){
	console.log(elemento);
}
```

**Salida**

```
Elemento eliminado: 1
Array:
2
3
4
5
```
</details>

Meter elemento como primero

```js
array.unshift(elemento);
```
<details>
	<summary>Ejemplo</summary>

```js
let array = [2, 3, 4];
array.unshift(0, 1);

for(let elemento of array){
	console.log(elemento);
}
```

**Salida**

```
0
1
2
3
4
```
</details>

(Sacar) último elemento

```js
array.pop();
```

<details>
	<summary>Ejemplo</summary>

```js
let array = [1, 2, 3, 4, 5];
const ultimoElemento = array.pop();

console.log("Elemento eliminado: " + ultimoElemento);
console.log("Array:");
for(let elemento of array){
	console.log(elemento);
}
```

**Salida**

```
Elemento eliminado: 5
Array:
1
2
3
4
```
</details>

Meter elemento como último

```js
array.push(elemento);
```

<details>
	<summary>Ejemplo</summary>

```js
let array = [1, 2, 3];
array.push(4, 5);

for(let elemento of array){
	console.log(elemento);
}
```

**Salida**
```
1
2
3
4
5
```
</details>

Índice de la primera ocurrencia de elemento (devuelve `-1` si no hay)

```js
array.indexOf(elemento)
```

<details>
	<summary>Ejemplo</summary>

```js
let array = ["manzana", "banana", "cereza"];
const clave = array.indexOf("banana");

console.log("La clave de 'banana' es: " + clave);	// Imprime 1
```
</details>

Ordenar array original alfabéticamente

```js
array.sort();
```

<details>
	<summary>Ejemplo</summary>

```js
let array = ["pepe", "maribel", "zanita"];
array.sort();

for(let elemento of array){
	console.log(elemento);
}
```

**Salida**

```
maribel
pepe
zanita
```
</details>

Ordenar array original siguiendo un criterio

```js
array.sort((elemento1, elemento2) => Instrucciones);
```

<details>
	<summary>Ejemplo</summary>

```js
let array = ["manzana", "kiwi", "banana", "cereza", "uva"];
array.sort((a, b) => {a.length - b.length});

for(let elemento of array){
	console.log(elemento);
}
```

**Salida**

```
uva
kiwi
banana
cereza
manzana
```
</details>

Poner array al revés

```js
array.reverse();
```

<details>
	<summary>Ejemplo </summary>

```js
let array = [1, 2, 3, 4, 5];
let invertido = array.reverse();

for(let elemento of invertido){
	console.log(elemento);
}
```

**Salida**

```
5
4
3
2
1
```
</details>

Desglose de valores de un array

```js
...array
```

<details>
	<summary>Ejemplo</summary>

```js
function mostrar(...valores){
	for(let valor of valores){
		console.log(valor);
	}
}

const numeros = [1, 2, 3, 4, 5];
mostrar(...numeros);	// mostrar(1, 2, 3, 4, 5);
```
</details>

Recorrer array (lee `elemento`, `indice` y `array` en ese orden) y aplicar instrucciones a cada elemento

```js
array.forEach((elemento, indice, array) => Instrucciones);
```

<details>
	<summary>Ejemplo 1</summary>

```js
let numeros = [1, 2, 3, 4, 5];
numeros.forEach(numero => console.log(numero));
```

**Salida**

```
1
2
3
4
5
```
</details>

<details>
	<summary>Ejemplo 2</summary>

```js
let numeros = [1, 2, 3, 4, 5];

numeros.forEach((numero, indice, numeros) => {
	numeros[indice] *= 2;
});

for(let numero of numeros){
	console.log(numero);
}
```

**Salida**

```
2
4
6
8
10
```
</details>

Generar nuevo array a partir de original (lee `elemento`, `indice` y `array` en ese orden) con instrucciones aplicadas a cada elemento

```js
array.map((elemento, indice, array) => Instrucciones);
```

<details>
	<summary>Ejemplo 1</summary>

```js
const numeros = [1, 2, 3, 4, 5];
const cuadrados = numeros.map(numero => numero ** 2);

for(let elemento of cuadrados){
	console.log(elemento);
}
```

**Salida**

```
1
4
9
16
25
```
</details>

<details>
	<summary>Ejemplo 2</summary>

```js
let personas = [
    { nombre: "Juan", edad: 25 },
    { nombre: "Ana", edad: 30 },
    { nombre: "Luis", edad: 22 }
];

let nombres = personas.map(persona => persona.nombre);

for(let nombre of nombres){
	console.log(nombre);
}
```

**Salida**

```
Juan
Ana
Luis
```
</details>

Generar nuevo array a partir de original (lee `elemento`, `indice` y `array` en ese orden) con sólo los elementos que cumplan condición devuelta en las instrucciones

```js
array.filter((elemento, indice, array) => Instrucciones);
```

<details>
	<summary>Ejemplo</summary>

```js
const numeros = [0, 1, 2, 3, 4];
const pares = numeros.filter(numero => numero % 2 == 0);

for(let elemento of pares){
	console.log(elemento);
}
```

**Salida**

```
0
2
4
```
</details>

Recorrer array (lee `acumulador`, `elemento`, `indice` y `array` en ese orden) iterando sobre un acumulador y devolver valor especificado en las instrucciones

```js
array.reduce((acumulador, elemento, indice, array) => Instrucciones, valorInicialAcumulador);
```

<details>
	<summary>Ejemplo</summary>

```js
const numeros = [1, 2, 3, 4, 5];

const suma = numeros.reduce((acumulador, numero) => {
	acumulador += numero;
	return acumulador;
}, 0);

console.log(suma);	// Imprime 15
```
</details>

¿Cumplen todos los elementos del array la condición devuelta en las instrucciones? (Recorre `elemento`, `indice` y `array` en ese orden)

```js
array.every((elemento, indice, array) => Instrucciones);
```

<details>
	<summary>Ejemplo</summary>

```js
const numeros = [1, 2, 3, 4, 5];

const todosPositivos = numeros.every(numero => numero > 0);
const todosPares = numeros.every(numero => numero % 2 == 0);

console.log(todosPositivos);	// true
console.log(todosPares);	// false
```
</details>

¿Cumplen algún elemento del array la condición devuelta en las instrucciones? (Recorre `elemento`, `indice` y `array` en ese orden)

```js
array.some((elemento, indice, array) => Instrucciones);
```

<details>
	<summary>Ejemplo</summary>

```js
const numeros = [1, 2, 3, 4, 5];

const hayNegativos = numeros.every(numero => numero < 0);
const hayPares = numeros.every(numero => numero % 2 == 0);
const hayImpares = numeros.some(numero => numero % 2 != 0);

console.log(hayNegativos);	// false
console.log(hayPares);		// true
console.log(hayImpares);	// true
```
</details>

¿Es la variable un array?

```js
Array.isArray(variable)
```

<details>
	<summary>Ejemplo</summary>

```js
const array = [1, 2, 3];
const objeto = {
	nombre: "Pepe",
	edad: 20
}

console.log(Array.isArray(array));	// true
console.log(Array.isArray(objeto));	// false
```
</details>

Convertir a array (con transformación opcional)

```js
Array.from(objeto)
Array.from(objeto, instrucciones)
```

<details>
	<summary>Ejemplo 1</summary>

```js
const palabra = "Hola";
const caracteres = Array.from(palabra);

for(let caracter of caracteres){
	console.log(caracter)
}
```

**Salida**

```
H
o
l
a
```
</details>

<details>
	<summary>Ejemplo 2</summary>

```js
const persona = {
	nombre: "Pepe",
	edad: 20
}

const info = Array.from(Object.entries(persona), ([clave, valor]) => {
    return clave + ": " + valor + "\n";
});

for(let elemento of info){
    console.log(elemento);
}
```

**Salida**

```
nombre: Pepe
edad: 20
```
</details>

¿Contiene un elemento el array?

```js
array.includes(elemento)
```

<details>
	<summary>Ejemplo</summary>

```js
const array = [1, 2, 3, 4, 5];
const valor = 3;

console.log(array.includes(valor));	// true
```
</details>

Extraer de un array los elementos en un rango (y sustituirlos por otros si hay. Funciona como añadir elementos a partir de inicio si `cantidad` es `0`)

```js
array.splice(inicio, cantidad)
array.splice(inicio, cantidad, ...reemplazos)
```

<details>
	<summary>Ejemplo 1</summary>

```js
const array = ["manzana", "banana", "cereza", "ciruela"];
array.splice(1, 2);

for(let elemento of array){
	console.log(elemento);
}
```

**Salida**

```
manzana
ciruela
```
</details>

<details>
	<summary>Ejemplo 2</summary>

```js
const array = ["manzana", "banana", "cereza", "ciruela"];
array.splice(1, 2, "pera", "kiwi", "naranja");

for(let elemento of array){
	console.log(elemento);
}
```

**Salida**

```
manzana
pera
kiwi
naranja
ciruela
```
</details>

<details>
	<summary>Ejemplo 3</summary>

```js
const array = ["manzana", "banana", "cereza", "ciruela"];
const eliminados = array.splice(-3, 2);

console.log("Eliminados: ");
for(let elemento of eliminados){
	console.log(elemento);
}

console.log("\nOriginales: ");
for(let elemento of array){
	console.log(elemento);
}
```

**Salida**

```
Eliminados: 
banana
cereza

Originales:
manzana
ciruela
```
</details>

<details>
	<summary>Ejemplo 4</summary>

```js
const array = ["manzana", "banana", "cereza"];
const eliminados = array.splice(1, 0, "naranja", "kiwi");

for(let elemento of array){
	console.log(elemento);
}
```

**Salida**

```
manzana
naranja
kiwi
banana
cereza
```
</details>

Elementos en un rango de un array (opcionalmente fin incluido)

```js
array.slice(inicio)
array.slice(inicio, fin)
```

<details>
	<summary>Ejemplo 1</summary>

```js
const array = ["manzana", "banana", "cereza", "ciruela"];
const porcion = array.slice(1);

for(let elemento of porcion){
	console.log(elemento);
}
```

**Salida**

```
banana
cereza
ciruela
```
</details>

<details>
	<summary>Ejemplo 2</summary>

```js
const array = ["manzana", "banana", "cereza", "ciruela"];
const porcion = array.slice(1, 3);

for(let elemento of porcion){
	console.log(elemento);
}
```

**Salida**

```
banana
cereza
```
</details>

Cadena de elementos de un array, separados por una coma

```js
array.toString()
```

<details>
	<summary>Ejemplo</summary>

```js
let numeros = [1, 2, 3, 4];
console.log(numeros.toString());	// Imprime "1,2,3,4"
```
</details>

Primer elemento en array que cumple condición (si no hay devuelve `undefined`)

```js
array.find((elemento, indice, array) => Instrucciones);
```

<details>
	<summary>Ejemplo</summary>

```js
let numeros = [1, 2, 3, 4, 5];
let encontrado = numeros.find(numero => numero > 3);

console.log(encontrado);	// Imprime 4
```
</details>

Posición de primera ocurrencia de elemento en array que cumpla condición (si no hay devuelve `-1`)

```js
array.findIndex((elemento, indice, array) => Instrucciones)
```

<details>
	<summary>Ejemplo</summary>

```js
const numeros = [4, 9, 16, 25];
const indice = numeros.findIndex(numero => numero > 10);

console.log(indice);	// Imprime 2
```
</details>

Posición de última ocurrencia de elemento en array que cumpla condición (si no hay devuelve `-1`)

```js
array.findLastIndex((elemento, indice, array) => Instrucciones)
```

<details>
	<summary>Ejemplo</summary>

```js
const numeros = [4, 9, 16, 25];
const indice = numeros.findLastIndex(numero => numero < 10);

console.log(indice);	// Imprime 1
```
</details>

Array con otro array concatenado

```js
array.concat(...arrays);
```

<details>
	<summary>Ejemplo 1</summary>

```js
const array1 = ["manzana", "banana"];
const array2 = ["cereza", "ciruela"];
const fusion = array1.concat(array2);

for(let elemento of fusion){
	console.log(elemento);
}
```

**Salida**

```
manzana
banana
cereza
ciruela
```
</details>

<details>
	<summary>Ejemplo 2</summary>

```js
const array1 = ["manzana"];
const array2 = ["banana"];
const array3 = ["cereza"];
const fusion = array1.concat(array2, array3);

for(let elemento of fusion){
	console.log(elemento);
}
```

**Salida**

```
manzana
banana
cereza
```
</details>

Dividir en array una cadena por elementos entre `separador`

```js
cadena.split(separador)
```

<details>
	<summary>Ejemplo</summary>

```js
const string = "manzana,banana,kiwi";
const array = string.split(",");

for(let elemento of array){
	console.log(elemento)
}
```

**Salida**

```
manzana
banana
kiwi
```
</details>

Crear cadena con strings de un array, separadas por una coma

```js
array.join()
```

<details>
	<summary>Ejemplo</summary>

```js
const array = ["manzana", "banana", "kiwi"];
const string = array.join();

console.log(string);	// Imprime "manzana,banana,kiwi"
```
</details>

Crear cadena con strings de un array, separadas por subcadena

```js
array.join(subcadena)
```

<details>
	<summary>Ejemplo</summary>

```js
const array = ["manzana", "banana", "kiwi"];
const string = array.join(" - ");

console.log(string);	// Imprime "manzana - banana - kiwi"
```
</details>

Llenar un array de valores

```js
array.fill(valor);
```

<details>
	<summary>Ejemplo</summary>

```js
const array = new Array(3);
array.fill(10);

for(let elemento of array){
	console.log(elemento);
}
```

**Salida**

```
10
10
10
```
</details>

Llenar un array de valores a partir de una posición

```js
array.fill(valor, inicio);
```

<details>
	<summary>Ejemplo</summary>

```js
const array = [1, 2, 3, 4, 5];
array.fill(0, 2);

for(let elemento of array){
	console.log(elemento);
}
```

**Salida**

```
1
2
0
0
0
```
</details>

Llenar un array de valores sólo un rango (fin excluyente)

```js
array.fill(valor, inicio, fin);
```

<details>
	<summary>Ejemplo</summary>

```js
const array = [1, 2, 3, 4, 5];
array.fill("x", 1, 4);

for(let elemento of array){
	console.log(elemento);
}
```

**Salida**

```
1
x
x
x
5
```
</details>

Desesctructuración de array en variables

```js
let [a, b, c] = [1, 2, 3];
```

<details>
	<summary>Ejemplo</summary>

```js
const [a, b, c, d] = [1, 2, 3, 4];

console.log(a)	// Imprime 1
console.log(b)	// Imprime 2
console.log(c)	// Imprime 3
console.log(d)	// Imprime 4
```
</details>

---

## Clase `Object`

Acceder a propiedades del objeto

```js
objeto.atributo
objeto["atributo"]
```

<details>
	<summary>Ejemplo</summary>

```js
let objeto = {
	atributo1: "valor 1",
	atributo2: "valor 2"
};

console.log(objeto.atributo1);		// Imprime "valor 1"
console.log(objeto["atributo2"]);	// Imprime "valor 2"
```
</details>

Añadir propiedad a objeto existente

```js
objeto.nueva = valor;
objeto["nueva"] = valor;
objeto.metodoNuevo = () => {...};
objeto["metodoNuevo"] = () => {...};
```

<details>
	<summary>Ejemplo</summary>

```js
let objeto = {
	atributo: "valor",
	metodo(){
		console.log("Esto es el método");
	}
};

objeto.atributo = "Otro valor";
objeto.metodo = () => console.log("El método ha cambiado");

console.log(objeto.atributo);	// Imprime "Otro valor"
objeto.metodo();		// Imprime "El método ha cambiado"
```
</details>

Prototipo de `objeto`

```js
Object.getPrototypeOf(objeto)
Objeto.prototype
```

Añadir propiedad al prototipo del objeto

```js
Objeto.prototype.nueva = valor;
Objeto.prototype.metodoNuevo = valor;

Object.getPrototypeOf(objeto).nueva = valor;
Object.getPrototypeOf(objeto).metodoNuevo = valor;
```

<details>
	<summary>Ejemplo</summary>

```js
function Objeto(){
	atributo1 = "valor por defecto";
	metodo1 = () => console.log("Método por defecto");
}

const objeto = new Objeto();

Objeto.prototype.atributo2 = "nuevo atributo";
Object.getPrototypeOf(objeto).metodo2 = () => console.log("El nuevo método");

console.log(objeto.atributo2);	// Imprime "nuevo atributo"
objeto.metodo2();		// Imprime "El nuevo método"
```
</details>

Acceder a propiedad con encadenamiento opcional (No lanza errores)

```js
objeto?.propiedad
```

<details>
	<summary>Ejemplo</summary>

```js

```
</details>

Array de propiedades del objeto

```js
Object.keys(objeto)
```

<details>
	<summary>Ejemplo</summary>

```js
const objeto = {
	propiedad1: "valor1",
	propiedad2: "valor2"
};

for(let propiedad of Object.keys(objeto)){
	console.log(propiedad);
}
```

**Salida**

```
propiedad1
propiedad2
```
</details>

Array de valores del objeto

```js
Object.values(objeto)
```

<details>
	<summary>Ejemplo</summary>

```js
const objeto = {
	propiedad1: "valor1",
	propiedad2: "valor2"
};

for(let valor of Object.values(objeto)){
	console.log(valor);
}
```

**Salida**

```
valor1
valor2
```
</details>

Array de entradas del objeto

```js
Object.entries(objeto)
```

<details>
	<summary>Ejemplo</summary>

```js
const objeto = {
	propiedad1: "valor1",
	propiedad2: "valor2"
};

for(let entrada of Object.entries(objeto)){
	console.log(entrada[0] + ": " + entrada[1]);
}
```

**Salida**

```
propiedad1: valor1
propiedad2: valor2
```
</details>

Eliminar propiedad

```js
delete objeto.propiedad;
```

<details>
	<summary>Ejemplo</summary>

```js
const objeto = {
	propiedad: "valor"
};

delete objeto.propiedad;
console.log(objeto.propiedad);	// Imprime undefined
```
</details>

Definir nueva propiedad de `objeto` especificando nombre, y opcionalmente valor, si es editable o no, iterable o no, configurable o no, getter y/o setter.

```js
Object.defineProperty(objeto, "propiedad", {
	value: "valor",
	writable: booleano,
	enumerable: booleano,
	configurable: booleano,
	get() {
		return this._propiedad;
	},
	set(propiedad) {
		this._propiedad = propiedad;
	}
});
```

<details>
	<summary>Ejemplo 1</summary>

```js
const objeto = {
	propiedad1: "valor1"
};

Object.defineProperty(objeto, "propiedad2", {
	value: "valor2",
	writable: true,
	enumerable: true,
	configurable: true
});

console.log(objeto.propiedad2);	// Imprime "valor2"
```
</details>

<details>
	<summary>Ejemplo 2</summary>

```js
const persona = {
	nombre: "Alonso"
};

Object.defineProperty(persona, "edad", {
	value: 20,
	writable: false,	// No se puede modificar
	enumerable: true,
	configurable: true
});

console.log(persona.edad);	// Imprime 20
persona.edad = 25;		// No tiene efecto
console.log(persona.edad);	// Imprime 20
```
</details>

<details>
	<summary>Ejemplo 3</summary>

```js
const libro = {
	titulo: "El Quijote",
	año: 1600
};

Object.defineProperty(libro, "autor", {
	value: "Miguelón",
	writable: true,
	enumerable: false,	// No aparecerá en bucles o al listar propiedades
	configurable: true
});

for(let propiedad of Object.keys(libro)){
	console.log(propiedad);
}
```

**Salida**

```
titulo
año
```
</details>

<details>
	<summary>Ejemplo 4</summary>

```js
const vehiculo = {
	marca: "Skoda"
};

Object.defineProperty(vehiculo, "modelo", {
	value: "Fabia",
	writable: true,
	enumerable: true,
	configurable: false	// No se puede eliminar
});

console.log("Intento de eliminar:");
delete vehiculo.modelo;
console.log(vehiculo.modelo);
```

**Salida**

```
Fabia
```
</details>

<details>
	<summary>Ejemplo 5</summary>

```js
const objeto = {
	_propiedad: "valor"
};

Object.defineProperty(objeto, "propiedad", {
	value: "valor",
	get() {
		return this._propiedad;
	},
	set(propiedad) {
		this._propiedad = propiedad;
	}
});

objeto.propiedad = "nuevo valor";
console.log(objeto.propiedad);	// Imprime "nuevo valor"
```
</details>

Congelar `objeto` (No se pueden crear, eliminar o modificar sus propiedades)

```js
Object.freeze(objeto);
```

<details>
	<summary>Ejemplo</summary>

```js
const objeto = {
	propiedad: "valor"
};

Object.freeze(objeto);

objeto.nueva = "nueva propiedad";
objeto.propiedad = "nuevo valor";
delete objeto.propiedad;

console.log(objeto.propiedad);	// Imprime "valor"
console.log(objeto.nueva);	// Imprime undefined
```
</details>

Sellar `objeto` (No se pueden crear o eliminar propiedades)

```js
Object.seal(objeto);
```

<details>
	<summary>Ejemplo</summary>

```js
const objeto = {
	propiedad: "valor"
};

Object.seal(objeto);

objeto.nueva = "nueva propiedad";
objeto.propiedad = "nuevo valor";
delete objeto.propiedad;

console.log(objeto.propiedad);	// Imprime undefined
console.log(objeto.nueva);	// Imprime undefined
```
</details>

Preveer `objeto` de extenderse (No se pueden crear propiedades nuevas)

```js
Object.preventExtensions(objeto);
```

<details>
	<summary>Ejemplo</summary>

```js
const objeto = {
	propiedad: "valor"
};

Object.preventExtensions(objeto);

objeto.nueva = "nueva propiedad";
objeto.propiedad = "nuevo valor";
delete objeto.propiedad;

console.log(objeto.propiedad);	// Imprime undefined
console.log(objeto.nueva);	// Imprime undefined
```
</details>

Agregar a `objeto` propiedades de `objetos` sobreescribiendo las ya existentes

```js
Object.assign(objeto, ...objetos)
```

<details>
	<summary>Ejemplo</summary>

```js
const objeto1 = {
	propiedad1: "valor1"
};

const objeto2 = {
	propiedad2: "valor2 antiguo"
};

const objeto3 = {
	propiedad2: "valor2 nuevo",
	propiedad3: "valor3"
};

Object.assign(objeto1, objeto2, objeto3);

for(let propiedad in objeto1){
	console.log(propiedad + ": " + objeto1[propiedad]);
}
```

**Salida**

```
propiedad1: valor1
propiedad2: valor2 nuevo
propiedad3: valor3
```
</details>

Nuevo objeto a partir de prototipo (se usa `objeto` como el prototipo en este caso), con propiedades adicionales opcionales

```js
Object.create(objeto)
Object.create(objeto, {...propiedades})
Object.create(objeto, {
	propiedad1: {
		value: "valor",
		writable: true,
		enumerable: true,
		configurable: true
	},
	propiedad2: {
		// ...
	}
})
```

<details>
	<summary>Ejemplo 1</summary>

```js
const objeto = {
	propiedad: "valor",
	metodo: () => console.log("Método")
};

const nuevo = Object.create(objeto);

console.log(nuevo.propiedad);	// Imprime "valor"
nuevo.metodo();			// Imprime "Método"
```
</details>

<details>
	<summary>Ejemplo 2</summary>

```js
const objeto = {
	propiedad: "valor"
};

const nuevo = Object.create(objeto, {
	otra: {
		value: "otro valor",
		writable: true,
		enumerable: true,
		configurable: true
	},
	otroMetodo: {
		value: function(){
			console.log("Otro método");
		}
	}
});

console.log(nuevo.propiedad);	// Imprime "valor"
console.log(nuevo.otra);	// Imprime "otro valor"
nuevo.otroMetodo();		// Imprime "Otro método"
```
</details>

¿El objeto tiene la propiedad no heredada?

```js
Object.hasOwn(objeto, "propiedad")
objeto.hasOwnProperty("propiedad")
```

<details>
	<summary>Ejemplo</summary>

```js
const objeto = {
	propiedad1: "valor1"
};

console.log(objeto.hasOwnProperty("propiedad1"));	// true
console.log(Object.hasOwn(objeto, "propiedad1"));	// true

console.log(objeto.hasOwnProperty("toString"));	// false (no es no heredado)
console.log(Object.hasOwn(objeto, "toString"));	// false (no es no heredado)
```
</details>

¿El objeto tiene la propiedad?

```js
"propiedad" in objeto
```

<details>
	<summary>Ejemplo</summary>

```js
const persona = {
	nombre: "Alonso"
}

console.log("nombre" in persona);	// true
console.log("edad" in persona);	// false
```
</details>

Copia anidada de `objeto`

```js
structuredClone(objeto)
```

<details>
	<summary>Ejemplo</summary>

```js
const objeto = {
	propiedad: "valor"
}

const copia = structuredClone(objeto);

console.log(copia.propiedad);	// Imprime "valor"
```
</details>

Desestructuración de `objeto` (sus propiedades) en variable del mismo nombre

```js
let {propiedad} = objeto;
```

<details>
	<summary>Ejemplo 1</summary>

```js
const objeto = {
	atributo1: "valor 1",
	atributo2: "valor 2"
}

const {atributo1} = objeto;
console.log(atributo1);	// Imprime "valor 1"
```
</details>

<details>
	<summary>Ejemplo 2</summary>

```js
const objeto = {
	atributo1: "valor 1",
	atributo2: "valor 2"
}

const {atributo1, atributo2, atributo3} = objeto;
console.log(atributo1);	// Imprime "valor 1"
console.log(atributo2);	// Imprime "valor 2"
console.log(atributo3);	// Imprime undefined
```
</details>

Desestructuración de `objeto` (sus propiedades) en variable

```js
let {propiedad: variable} = objeto;
```

<details>
	<summary>Ejemplo 1</summary>

```js
const persona = {
	atributo1: "Alonso",
	atributo2: 20,
	atributo3: "masculino"
};

const {atributo1: nombre, atributo2: edad, atributo3: sexo} = persona;

console.log(nombre);	// Imprime "Alonso"
console.log(edad);	// Imprime 20
console.log(sexo);	// Imprime "masculino"
```
</details>

<details>
	<summary>Ejemplo 2</summary>

```js
const persona = {
	atributo1: "Alonso",
	atributo2: 20,
	atributo3: "masculino"
};

const {atributo1: nombre, atributo2: edad, atributo3, atributo4} = persona;

console.log(atributo1);	// Imprime "Alonso"
console.log(atributo2);	// Imprime 20
console.log(atributo3);	// Imprime "masculino"
console.log(atributo4);	// Imprime undefined
```
</details>

Función en el contexto de `objeto` y con parámetros fijados opcionalmente

```js
funcion.bind(objeto)
funcion.bind(objeto, ...params)
```

<details>
	<summary>Ejemplo 1</summary>

```js
function saludar() {
	console.log("Soy " + this.nombre);
}

const persona = {
	nombre: "Juan"
};

const saludarJuan = saludar.bind(persona);	// Devuelve una nueva función
saludarJuan();					// Imprime "Soy Juan"
```
</details>

<details>
	<summary>Ejemplo 2</summary>

```js
function saludar(hora) {
	console.log("Soy " + this.nombre);
	console.log("Son las " + hora);
}

const persona = {
	nombre: "Juan"
};

const saludarJuanNoche = saludar.bind(persona, "3 AM");	// Devuelve una nueva función
saludarJuanNoche();						// Imprime "Soy Juan" "Son las 3 AM"
```
</details>

Ejecutar `funcion` en el contexto de `objeto`

```js
funcion.call(objeto);
funcion.call(objeto, ...params);
```

<details>
	<summary>Ejemplo 1</summary>

```js
function saludar() {
	console.log("Soy " + this.nombre);
}

const persona = {
	nombre: "Juan"
};

saludar.call(persona);	// Imprime "Soy Juan"
```
</details>

<details>
	<summary>Ejemplo 2</summary>

```js
function saludar(hora) {
	console.log("Soy " + this.nombre);
	console.log("Son las " + hora);
}

const persona = {
	nombre: "Juan"
};

saludar.call(persona, "3 AM");	// Imprime "Soy Juan" "Son las 3 AM"
```
</details>

---

## Clase `Number`

Declarar número con constructor

```js
let numero = new Number(10);
```

<details>
	<summary>Ejemplo</summary>

```js
const numero1 = new Number(10);		// 10
const numero2 = new Number("14");	// 14
const numero3 = new Number(true);	// 1
const numero4 = new Number(null);	// 0
const numero5 = new Number("hola");	// NaN
const numero6 = new Number(undefined);	// NaN
```
</details>

Valor primitivo de objeto `Number`

```js
numero.valueOf()
```

<details>
	<summary>Ejemplo</summary>

```js
const numero = new Number(5);
console.log(numero.valueOf());	// Imprime 5
```
</details>

Número con `n` decimales

```js
numero.toFixed(n)
```

<details>
	<summary>Ejemplo</summary>

```js
let numero = 123.456;
console.log(numero.toFixed(2));	// "123.46"
```
</details>

Número con `n` dígitos de precisión

```js
numero.toPrecision(n)
```

<details>
	<summary>Ejemplo</summary>

```js
let numero = 123.456;
console.log(numero.toPrecision(4));	// "123.5"
```
</details>

Valor exponencial de número

```js
numero.toExponential()
numero.toExponential(precisión)
```

<details>
	<summary>Ejemplo</summary>

```js
let num = 12345;

console.log(numero.toExponential());	// "1.2345e+4"
console.log(numero.toExponential(2));	// "1.23e+4"
```
</details>

String de número (y conversión de bases)

```js
numero.toString()
numero.toString(base)
```

<details>
	<summary>Ejemplo</summary>

```js
let numero = 42;

console.log(numero.toString());	// "42"
console.log(numero.toString(16));	// "2a" (hexadecimal)
```
</details>

¿Es finito el número?

```js
Number.isFinite(numero);
```

<details>
	<summary>Ejemplo</summary>

```js
console.log(Number.isFinite(42));	// true
console.log(Number.isFinite(Infinity));	// false
console.log(Number.isFinite("123"));	// false
console.log(Number.isFinite(NaN));	// false
console.log(Number.isFinite(null));	// false
```
</details>

¿Es entero el número?

```js
Number.isInteger(numero);
```

<details>
	<summary>Ejemplo</summary>

```js
console.log(Number.isInteger(42));		// true
console.log(Number.isInteger(42.0));		// true
console.log(Number.isInteger(42.5));		// false
console.log(Number.isInteger("42"));		// false
console.log(Number.isInteger(NaN));		// false
console.log(Number.isInteger(Infinity));	// false
console.log(Number.isInteger(-Infinity));	// false
```
</details>

¿Es `NaN` el número?

```js
Number.isNaN(numero);
```

<details>
	<summary>Ejemplo</summary>

```js
console.log(Number.isNaN(NaN));		// true
console.log(Number.isNaN("hola"));	// false
console.log(Number.isNaN(undefined));	// false
console.log(Number.isNaN(null));	// false
console.log(Number.isNaN(true));	// false
```
</details>

¿Es un entero seguro? (Da `false` para decimales y números enormes)

```js
Number.isSafeInteger(numero);
```

<details>
	<summary>Ejemplo</summary>

```js
console.log(Number.isSafeInteger(42));			// true
console.log(Number.isSafeInteger(3.14));		// false
console.log(Number.isSafeInteger(9007199254740991));	// true
console.log(Number.isSafeInteger(9007199254740992));	// false
console.log(Number.isSafeInteger("42"));		// false
console.log(Number.isSafeInteger(NaN));			// false
console.log(Number.isSafeInteger(Infinity));		// false
```
</details>

Convertir a entero (y conversión de bases)

```js
Number.parseInt(numero);
Number.parseInt(numero, base);
```

<details>
	<summary>Ejemplo 1</summary>

```js
console.log(Number.parseInt("42"));	// 42
console.log(Number.parseInt("3.14"));	// 3
console.log(Number.parseInt("Hello"));	// NaN
console.log(Number.parseInt("42px"));	// 42
```
</details>

<details>
	<summary>Ejemplo 2</summary>

```js
console.log(Number.parseInt("10", 2));	// 2
console.log(Number.parseInt("10", 8));	// 8
console.log(Number.parseInt("10", 16));	// 16
```
</details>

Convertir a decimal

```js
Number.parseFloat(numero);
Number.parseFloat(numero, base);
```

<details>
	<summary>Ejemplo</summary>

```js
console.log(Number.parseFloat("3.14"));		// 3.14
console.log(Number.parseFloat("42"));		// 42
console.log(Number.parseFloat("0.001"));	// 0.001
console.log(Number.parseFloat(".5"));		// 0.5
console.log(Number.parseFloat("3.14abc"));	// 3.14
console.log(Number.parseFloat("abc"));		// NaN
```
</details>

Valores especiales de clase `Number`

| Valor | Descripción | `console.log(Number.VALOR);` |
| - | - | - |
| `Number.MAX_VALUE` | Número máximo representable en JavaScript | `1.7976931348623157e+308` |
| `Number.MIN_VALUE` | Número positivo más pequeño representable en JavaScript | `5e-324` |
| `Number.NaN` | Not a Number | `NaN` |
| `Number.POSITIVE_INFINITY` | Infinito Positivo | `Infinity` |
| `Number.NEGATIVE_INFINITY` | Infinito Negativo | `-Infinity` |
| `Number.MAX_SAFE_INTEGER` | Entero máximo seguro que se puede representar en JavaScript sin pérdida de precisión. | `9007199254740991` |
| `Number.MIN_SAFE_INTEGER` | Entero mínimo seguro que se puede representar en JavaScript sin pérdida de precisión. | `9007199254740991` |

---

## Clase `BigInt`

Declarar entero grande

```js
let grande = 10n;
let grande = 9007199254740991n;
```

Declarar entero grande con constructor

```js
let grande = BigInt(10);
let grande = BigInt(9007199254740991);
```

String de entero grande (y conversión de bases)

```js
grande.toString()
grande.toString(base)
```

<details>
	<summary>Ejemplo</summary>

```js
let grande = 42;
console.log(grande.toString());		// "42"
console.log(grande.toString(16));	// "2a" (hexadecimal)
```
</details>

---

## Clase `Math`

Constante $\\pi$

```js
Math.PI
```
$$\pi \approx 3.141592653589793$$

Constante $e$

```js
Math.E
```
$$e \approx 2.718281828459045$$

Constante $\ln(10)$

```js
Math.LN10
```
$$\ln(10) \approx 2.302585092994046$$

Constante $\ln(2)$

```js
Math.LN2
```
$$\ln(2) \approx 0.6931471805599453$$

Constante $\log_{10}(e)$

```js
Math.LOG10E
```
$$\log_{10}(e) \approx 0.4342944819032518$$

Constante $\log_{2}(e)$

```js
Math.LOG2E
```
$$\log_{2}(e) \approx 1.4426950408889634$$

Constante $\sqrt{2}$

```js
Math.SQRT2
```
$$\sqrt{2} \approx 1.4142135623730951$$

Constante $\frac{1}{\sqrt{2}}$

```js
Math.SQRT1_2
```
$$\frac{1}{\sqrt{2}} \approx 0.7071067811865476$$

Redondeo de número

```js
Math.round(numero)
```

Techo de número

```js
Math.ceil(numero)
```

Suelo de número

```js
Math.floor(numero)
```

Truncamiento de número

```js
Math.trunc(numero)
```

Valor absoluto

```js
Math.abs(numero)
```

Raíz cuadrada

```js
Math.sqrt(numero)
```

Raíz cúbica

```js
Math.cbrt(numero)
```

Potencia

```js
Math.pow(base, exponente)
```

Mínimo de un array

```js
Math.min(array)
```

Máximo de un array

```js
Math.max(array)
```

Número aleatorio entre `0` y `1`

```js
Math.random()
```

Seno

```js
Math.sin(numero)
```

Coseno

```js
Math.cos(numero)
```

Tangente

```js
Math.tan(numero)
```

Logaritmo natural

```js
Math.log(numero)
```

Logaritmo decimal

```js
Math.log10(numero)
```

---

## Clase `RegExp`

Expresión regular literal

```js
const regex = /patron/;
```

```js
const regex = /patron/flags;
```

<details>
	<summary>Ejemplo</summary>

```js
const regex1 = /0/;
const regex2 = /a/y;
```
</details>

Expresión regular con constructor

```js
const regex = new RegExp("patron");
```

```js
const regex = new RegExp("patron", "flags");
```

<details>
	<summary>Ejemplo</summary>

```js
const regex1 = new RegExp("0");
const regex2 = new RegExp("a", "i");
```
</details>

¿Cadena cumple con expresión regular?

```js
regex.test(cadena)
```

<details>
	<summary>Ejemplo</summary>

```js
const texto = "Hola Mundo!";
const regex1 = /u/;
const regex2 = /[a-z]/;

console.log(regex1.test(texto));	// true
console.log(regex2.test(texto));	// true
```
</details>

Array con coincidencia(s) de expresión regular en cadena

```js
cadena.match(regex)
cadena.match(regex/g)
```

<details>
	<summary>Ejemplo</summary>

```js
const cadena = "Hoy es un buen día";
console.log(cadena.match(/es/g));
```
</details>

Array de coincidencias (se incrementa `lastIndex` cada vez, y devuelve `null` cuando `lastIndex` llega al final)

```js
regex.exec(cadena)
```

<details>
	<summary>Ejemplo 1</summary>

```js
const texto = "abc123";
const regex = /\d/g;

console.log(regex.exec(texto)[0]);	// Imprime 1
console.log(regex.exec(texto)[0]);	// Imprime 2
console.log(regex.exec(texto)[0]);	// Imprime 3
console.log(regex.exec(texto));	// Imprime null
```
</details>

<details>
	<summary>Ejemplo 2</summary>

```js
const texto = "abababa";
const regex = /a/g;

while ((resultado = regex.exec(texto)) !== null) {
	console.log("Encontrado" + resultado[0] + " en índice " + regex.lastIndex - 1);
}
```

**Salida**

```
Encontrado 'a' en índice 0
Encontrado 'a' en índice 2
Encontrado 'a' en índice 4
Encontrado 'a' en índice 6
```
</details>

Último índice encontrado (se incrementa por cada vez que `exec()` se ejecuta)

```js
regex.lastIndex
```

<details>
	<summary>Ejemplo</summary>

```js
const string = "hello hello";
const regex = /hello/y;

regex.lastIndex = 0;
console.log(regex.exec(string));	// ["hello"]

regex.lastIndex = 6;
console.log(regex.exec(string));	// ["hello"]

regex.lastIndex = 5;
console.log(regex.exec(string));	// Imprime null
```
</details>

Patrón que contenga la letra `a`

```js
/a/
```

Patrón que contenga la letra `a` o `b`

```js
/a|b/
```

Patrón que contenga una letra de `a`, `b` o `c`

```js
/[abc]/
```

Patrón que sea solamente un número

```js
/^[0-9]$/
```

Patrón que sean solamente `3` números

```js
/^[0-9]{3}$/
```

Patrón que contenga `3` números

```js
/[0-9]{3}/
```

Patrón que empiece por `3` números

```js
/^[0-9]{3}/
```

Patrón que acabe por `3` números

```js
/[0-9]{3}$/
```

Patrón que contenga mayúsculas

```js
/[A-Z]/
```

Patrón que contenga minúsculas

```js
/[a-z]/
```

Patrón que no contenga minúsculas

```js
/[^a-z]/
```

Patrón que contenga `3` o más minúsculas

```js
/[a-z]{3,}/
```

Patrón que contenga `1` o más minúsculas

```js
/[a-z]+/
```

Patrón que contenga `0` o más minúsculas

```js
/[a-z]*/
```

Patrón que contenga `0` o `1` minúscula

```js
/[a-z]?/
```

Patrón que contenga un número o minúscula o mayúscula

```js
/[0-9A-Za-z]/
```

### Anexo 1. Literales y Conjuntos específicos y de Rango

| Expresión         | Descripción                   |
|-------------------|-------------------------------|
| `a`               | Literal                       |
| `[abc]`           | Conjunto específico           |
| `[A-Z]`           | Conjunto de Rango             |
| `[A-Za-z0-9]`     | Conjunto Agrupado de Rango    |
| `[A-Zabc]`        | Conjunto Agrupado Mixto       |

### Anexo 2. Delimitación de cadena

| Expresión | Descripción |
|-----------|-------------|
| `^`       | Inicio      |
| `$`       | Fin         |
| `\|`      | OR          |
| `[^...]`  | NOT         |

### Anexo 3. Apéndice de Cuantificadores

| Expresión   | Descripción            |
|-------------|------------------------|
| `?`         | `0` o `1` veces        |
| `*`         | `0` o más veces        |
| `+`         | `1` o más veces        |
| `{5}`       | `5` veces              |
| `{3,}`      | Más de `3` veces       |
| `{3,9}`     | Entre `3` y `9` veces  |

### Anexo 4. Apéndice de Metacaracteres y Equivalencias

| Expresión | Descripción                  | Equivalencia                        |
|-----------|------------------------------|-------------------------------------|
| `\d`      | Dígito                       | `[0-9]`                             |
| `\D`      | No dígito                    | `[^0-9]`                            |
| `\w`      | Carácter Alfanumérico        | `[A-Za-z0-9]`                       |
| `\W`      | Carácter No Alfanumérico     | `[^A-Za-z0-9]`                      |
| `\s`      | Espacio Invisible            | `[ \t\n\r\f\v]`                     |
| `\S`      | Carácter No Invisible        | `[^ \t\n\r\f\v]`                    |
| `\b`      | Límite de Palabra            | Posición entre palabra y no palabra |
| `\B`      | No Límite de Palabra         | Posición dentro de una palabra      |
| `.`       | Comodín (Excepto `\n`)       | No tiene                            |

### Anexo 5. Flags (Modificadores)

| Modificador | Descripción |
|-------------|----------------|
| `g` | Búsqueda global (No se detiene tras primera ocurrencia) |
| `i` | Búsqueda insensible a mayúsculas / minúsculas |
| `m` | Búsqueda multilínea |
| `s` | Permite que `.` incluya saltos de línea |
| `u` | Habilita unicode |
| `y` | Búsqueda desde `lastIndex` |

---

## Clase `String`

Crear cadena literal

```js
const cadena1 = "cadena";
const cadena2 = 'cadena';
const cadena3 = `cadena`;
```

Crear cadena con constructor

```js
const cadena = new String("cadena");
```

Valor de cadena

```js
cadena.valueOf()
```

<details>
	<summary>Ejemplo</summary>

```js
const cadena = new String("cadena");
console.log(cadena.valueOf());	// Imprime "cadena"
```
</details>

Tamaño de cadena

```js
cadena.length
```

<details>
	<summary>Ejemplo</summary>

```js
const string = "Hola Mundo";
console.log(string.length);	// Imprime 10
```
</details>

Carácter en posición específica

```js
cadena.charAt(posición)
```

<details>
	<summary>Ejemplo</summary>

```js
const string = "abcd";
console.log(string.charAt(2));	// Imprime 'c'
```
</details>

Posición de la primera ocurrencia de `subcadena` (devuelve `-1` si no encuentra)

```js
cadena.indexOf(cadena)
```

<details>
	<summary>Ejemplo</summary>

```js
const string = "manzana";

console.log(string.indexOf("a"));	// Imprime 1
console.log(string.indexOf("n"));	// Imprime 2
console.log(string.indexOf("x"));	// Imprime -1
```
</details>

Posición de la última ocurrencia de `subcadena` (devuelve `-1` si no encuentra)

```js
cadena.lastIndexOf(cadena)
```

<details>
	<summary>Ejemplo</summary>

```js
const string = "manzana";

console.log(string.lastIndexOf("a"));	// Imprime 6
console.log(string.lastIndexOf("n"));	// Imprime 5
console.log(string.lastIndexOf("x"));	// Imprime -1
```
</details>

Posición de la primera ocurrencia de expresión regular (devuelve `-1` si no encuentra)

```js
cadena.search(regex)
```

<details>
	<summary>Ejemplo</summary>

```js
const cadena = "Hoy es un buen día";

console.log(cadena.search(/buen/));	// Imprime 10
console.log(cadena.search(/mal/));	// Imprime -1
```
</details>

Cadena con espacios regulados

```js
cadena.trim()
```

<details>
	<summary>Ejemplo</summary>

```js
const texto = "   Hola mundo   ";
console.log(texto.trim());	// Imprime "Hola mundo"
```
</details>

Cadena en minúscula

```js
cadena.toLowerCase()
```

<details>
	<summary>Ejemplo</summary>

```js
const string = "Hola Mundo";
console.log(string.toUpperCase());	// Imprime "hola mundo"
```
</details>

Cadena en mayúscula

```js
cadena.toUpperCase()
```

<details>
	<summary>Ejemplo</summary>

```js
const string = "Hola Mundo";
console.log(string.toUpperCase());	// Imprime "HOLA MUNDO"
```
</details>

Cadenas concatenadas

```js
cadena.concat(...cadenas)
```

<details>
	<summary>Ejemplo 1</summary>

```js
const cadena = "Hola ";
const nueva = cadena.concat("mundo");

console.log(nueva);	// Imprime "Hola mundo"
```
</details>

<details>
	<summary>Ejemplo 2</summary>

```js
const cadena = "Hola ";
const nueva = cadena.concat("mundo", " cruel");

console.log(nueva);	// Imprime "Hola mundo cruel"
```
</details>

Cadena concatenada repetidamente `n` veces

```js
cadena.repeat(n)
```

<details>
	<summary>Ejemplo</summary>

```js
const string = "Hola";
console.log(string.repeat(3));	// Imprime "HolaHolaHola"
```
</details>

¿La cadena empieza con una cadena?

```js
cadena.startsWith(otra);
```

<details>
	<summary>Ejemplo</summary>

```js
const string1 = "Hola Mundo";
const string2 = "Hola";
const string3 = "Mundo";

console.log(string1.startsWith(string2) ? "Sí" : "No");	// Imprime "Sí", porque "Hola Mundo" empieza con "Hola"
console.log(string1.startsWith(string3) ? "Sí" : "No");	// Imprime "No", porque "Hola Mundo" no empieza con "Mundo"
```
</details>

¿La cadena termina con una cadena?

```js
cadena.endsWith(otra);
```

<details>
	<summary>Ejemplo</summary>

```js
const string1 = "Hola Mundo";
const string2 = "Hola";
const string3 = "Mundo";

console.log(string1.endsWith(string2) ? "Sí" : "No");	// Imprime "No", porque "Hola Mundo" no termina con "Hola"
console.log(string1.endsWith(string3) ? "Sí" : "No");	// Imprime "Sí", porque "Hola Mundo" termina con "Mundo"
```
</details>

¿La cadena contiene una cadena?

```js
cadena.includes(otra);
```

<details>
	<summary>Ejemplo</summary>

```js
const string1 = "Hola Mundo";
const string2 = "Mundo";

console.log(string1.includes(string2) ? "Sí contiene" : "No contiene");	// Imprime "Sí contiene"

const string3 = "JS es raro";
const string4 = "Java";

console.log(string3.includes(string4) ? "Sí contiene" : "No contiene");	// Imprime "No contiene"
```
</details>

Cadena con la primera ocurrencia de `subcadena1` o expresión regular reemplazada por `subcadena2`

```js
cadena.replace(subcadena1, subcadena2)
cadena.replace(regex, subcadena2)
```

<details>
	<summary>Ejemplo 1</summary>

```js
const string = "Hola gente";
const nuevo = string.replace("gente", "amigos");

console.log(nuevo);	// Imprime "Hola amigos"
```
</details>

<details>
	<summary>Ejemplo 2</summary>

```js
const string = "Hay lentejas y comeré lentejas";
const nuevo = string.replace("lentejas", "pasta");

console.log(nuevo);	// Imprime "Hay pasta y comeré lentejas"
```
</details>

<details>
	<summary>Ejemplo 3</summary>

```js
const string = "no puedo correr";
const nuevo = string.replace(/no/, "");

console.log(nuevo);	// Imprime " puedo correr"
```
</details>

Cadena con todas las ocurrencias de `subcadena1` o `regex` reemplazadas por `subcadena2`

```js
cadena.replaceAll(subcadena1, subcadena2)
cadena.replaceAll(regex/g, subcadena2)
```

<details>
	<summary>Ejemplo 1</summary>

```js
const string = "Hay lentejas y comeré lentejas";
const nuevo = string.replaceAll("lentejas", "pasta");

console.log(nuevo);	// Imprime "Hay pasta y comeré pasta"
```
</details>

<details>
	<summary>Ejemplo 2</summary>

```js
const string = "no puedo correr, no puedo comer, no puedo hacer cosas";
const nuevo = string.replaceAll(/no[ ]*/g, "");

console.log(nuevo);	// Imprime "puedo correr, puedo comer, puedo hacer cosas"
```
</details>

Subcadena a partir de la posición `n` (incluyente)

```js
cadena.slice(n)
```

<details>
	<summary>Ejemplo</summary>

```js
const string = "Hola mundo";
console.log(string.slice(5));	// Imprime "mundo"
```
</details>

Subcadena entre la posición `n` (incluyente) y `m` (excluyente) de una cadena

```js
cadena.slice(n, m)
```

<details>
	<summary>Ejemplo</summary>

```js
const string = "Hola mundo";
console.log(string.slice(2, 4));	// Imprime "la"
```
</details>

Cadena rellenada hasta el principio, de una subcadena repetidamente

```js
cadena.padStart(longitud, subcadena)
```

<details>
	<summary>Ejemplo</summary>

```js
const cadena = "hola";
console.log(cadena.padStart(10, "X")); // Imprime "XXXXXXhola"
```
</details>

Cadena rellenada desde el final, de una subcadena repetidamente

```js
cadena.padEnd(longitud, subcadena)
```

<details>
	<summary>Ejemplo</summary>

```js
const cadena = "hola";
console.log(cadena.padEnd(10, "X")); // Imprime "holaXXXXXX"
```
</details>

Subcadena desde `inicio` hasta `fin`

```js
cadena.substring(inicio, fin)
```

<details>
	<summary>Ejemplo</summary>

```js
const cadena = "Esto es una frase";
console.log(cadena.substring(5, 11));	// Imprime "es una"
```
</details>

Array con coincidencia(s) de expresión regular en cadena

```js
cadena.match(regex)
cadena.match(regex/g)
```

<details>
	<summary>Ejemplo</summary>

```js
const cadena = "Hoy es un buen día";
console.log(cadena.match(/es/g));
```
</details>

Dividir en array una cadena por elementos entre `separador`

```js
cadena.split(separador)
```

<details>
	<summary>Ejemplo</summary>

```js
const string = "manzana,banana,kiwi";
const array = string.split(",");

for(let elemento of array){
	console.log(elemento);
}
```

**Salida**

```
manzana
banana
kiwi
```
</details>

Crear cadena con strings de un array, separadas por una coma

```js
array.join()
```

<details>
	<summary>Ejemplo</summary>

```js
const array = ["manzana", "banana", "kiwi"];
const string = array.join();

console.log(string);	// Imprime "manzana,banana,kiwi"
```
</details>

Crear cadena con strings de un array, separadas por subcadena

```js
array.join(subcadena)
```

<details>
	<summary>Ejemplo</summary>

```js
const array = ["manzana", "banana", "kiwi"];
const string = array.join(" - ");

console.log(string);	// Imprime "manzana - banana - kiwi"
```
</details>

---

## Clase `Date`

Fecha de hoy

```js
Date.now()
```

Crear objeto fecha de hoy

```js
const fecha = new Date();
const fecha = Date.now();
```

Crear objeto fecha con milisegundos, empezando desde `01/01/1970 01:00`

```js
const fecha = new Date(1000000000000);
```

Crear objeto fecha especificada

```js
const fecha = new Date("2024-12-01");
const fecha = new Date("2024-12-01T09:30:00");

const fecha = new Date(2024, 11, 1);
const fecha = new Date(2024, 11, 1, 9, 30, 0);
```

Formatos de fecha

| Método | Formato | Ejemplo |
|-|-|-|
| `fecha.toString()` | Legible | `"Wed Dec 04 2024 14:35:00 GMT+0100 (CET)"` |
| `fecha.toISOString()` | ISO 8601 (UTC) | `"2024-12-04T13:35:00.000Z"` |
| `fecha.toLocaleDateString()` | Fecha Local | `"04/12/2024"` |
| `fecha.toLocaleTimeString()` | Hora Local | `"14:35:00"` |
| `fecha.toUTCString()` | UTC Legible | `"Wed, 04 Dec 2024 13:35:00 GMT"` |

Año

```js
fecha.getFullYear()
fecha.setFullYear(año);
```

Mes (número)

```js
fecha.getMonth()
fecha.setMonth(mes);
```

Día (número)

```js
fecha.getDate()
fecha.setDate(día);
```

Día (semana)

```js
fecha.getDay()
```

Hora

```js
fecha.getHours()
fecha.setHours(hora);
```

Minutos

```js
fecha.getMinutes()
fecha.setMinutes(minutos);
```

Segundos

```js
fecha.getSeconds()
fecha.setSeconds(segundos);
```

Miliegundos

```js
fecha.getMilliseconds()
fecha.setMilliseconds(milisegundos);
```

---

## Clase `JSON`

String de `objeto`

```js
JSON.stringify(objeto)
```

<details>
	<summary>Ejemplo</summary>

```js
const persona = {
	nombre: "Alonso",
	edad: 20,
	ciudad: "Madrid"
};

const string = JSON.stringify(persona);
console.log(string);	// Imprime "{"nombre":"Alonso","edad":20,"ciudad":"Madrid"}"
```
</details>

Objeto de `string`

```js
JSON.parse(string)
```

<details>
	<summary>Ejemplo 1</summary>

```js
const string = '{"nombre":"Alonso","edad":20,"ciudad":"Madrid"}';
const objeto = JSON.parse(string);

for(let propiedad in objeto){
	console.log(propiedad + ": " + objeto[propiedad]);
}
```

**Salida**

```
nombre: Alonso
edad: 20
ciudad: Madrid
```
</details>

<details>
	<summary>Ejemplo 2</summary>

```js
const string = "x";
const objeto = JSON.parse(string);	// Error
```
</details>

Objeto de `string` manejando clave y valor

```js
JSON.parse(string, (clave, valor) => {
	// Instrucciones
})
```

<details>
	<summary>Ejemplo</summary>

```js
const string = '{"nombre": "Alonso", "edad": 20}';

const objeto = JSON.parse(string, (clave, value) => {
	if (clave == "edad") return value + 1;
	return value;
});

console.log(objeto.edad);	// Imprime 21
```
</details>

---

## Clases y Objetos

Declarar objeto literal o de clase anónima

```js
let objeto = {
	atributo1: valor1,
	atributo2: valor2,
	metodo1: function(...) {...},
	metodo2(...) {...},
	metodo3: (...) => {...}
};
```

Declarar objeto con función constructor

```js
function Objeto(atributo1, atributo2) {
	this.atributo1 = atributo1;
	this.atributo2 = atributo2;
	this.metodo1 = function(...) {...};
	this.metodo2 = function(...) {...};
}

let objeto = new Objeto(valor1, valor2);
```

Declarar clase e instanciar objeto

```js
class Objeto {
	constructor(atributo1, atributo2) {
		this.atributo1 = atributo1;
		this.atributo2 = atributo2;
	}
	metodo() {
		...
	}
}

let objeto = new Objeto(valor1, valor2);
```

Propiedades Estáticas

```js
class Objeto {
	static cantidad = 0;
	constructor() {
		Objeto.cantidad++;
	}
	static mostrarCantidad = () => console.log(Objeto.cantidad);
}
```

### Getters y Setters

- Si están definidos, los getters y setters son automáticamente invocados cuando se acceden o modifican propiedades.
- Todos los atributos que tengan getter se accederán mediante él para devolver valores de los mismos atributos privados.
	- `objeto.atributo` invoca al getter.
- Todos los atributos que tengan setter se modificarán mediante él para establecer los valores de los mismos atributos privados.
	- `objeto.atrituto = valor` invoca al setter.

```js
class Objeto {
	#atributo;
	constructor(atributo){
		this.#atributo = atributo;
	}
	get atributo(){
		return this.#atributo;
	}
	set atributo(atributo){
		this.#atributo = atributo;
	}
}
```

- Usando `_` se especifica que la propiedad es falsamente privada; se sigue pudiendo acceder pero no se debería usar. En su lugar, se debe acceder sin `_` o, si estamos dentro del objeto, con `#`.

```js
class Objeto {
	_atributo;
	constructor(atributo){
		this._atributo = atributo;
	}
	get atributo(){
		return this._atributo;
	}
	set atributo(atributo){
		this._atributo = atributo;
	}
}
```

### Herencia

- La clase hija tiene las propiedades de la clase padre.
- `super()` es el constructor del padre y `super` es el objeto padre.

```js
class Padre {
	#atributo1;
	constructor(atributo1){
		this.#atributo1 = atributo1;
	}
	metodo(){
		console.log("Metodo");
	}
}

class Hijo extends Padre {
	#atributo2;
	constructor(atributo1, atributo2){
		super(atributo1);
		this.#atributo2 = atributo2;
	}
	metodoHijo(){
		console.log("Metodo del hijo");
	}
}
```

---

## Timeout

Ejecutar función con `1000` milisegundos de retraso (y devuelve un valor `id`)

```js
setTimeout(funcion, 1000);
let id = setTimeout(funcion, 1000);
```

Cancelar Timeout con `id`

```js
clearTimeout(id);
```

---

## Importación de Módulos

- Para importar módulos (otros scripts), debe hacerse en un servidor y el script principal tiene que tener en HTML:
```html
<script type="module" src="main.js"></script>
```

Importar elementos de otro script

```js
import {elemento1, elemento2} from "./script.js";
```

Importar de otro script todos los elementos como objeto

```js
import * as objeto from "./script.js";
```



## Manejo de Errores

Manejar un error (`finally` es opcional)

```js
try{
	// Código peligroso
}catch(error){
	// Manejo de errores
}finally{
	// Código final
}
```

Lanzar un error personalizado

```js
throw new Error("Mensaje de error");
```

Mensaje del error

```js
error.message
```

Tipo del error

```js
error.name
```

---

## DOM

### Tipos de Datos del DOM

```js
Node						// Nodo
	Element					// Elemento 
		HTMLElement			// Elemento HTML
		Document			// Documento
HTMLCollection					// Colección HTML (No tiene forEach() ni métodos similares)
NodeList					// Lista de Nodos (No se actualizan automáticamente y tiene forEach())
```



### Objeto DOM

Página completa

```js
document
```

#### Atributos del DOM

URL de la página (String)

```js
document.URL
```

Tipo del documento (Tipo de Documento, Ej. `<!DOCTYPE html>`)

```js
document.doctype
```

Head de la página (Elemento HTML)

```js
document.head
```

Título de la página; se puede modificar (String)

```js
document.title
```

Body de la página (Elemento HTML)

```js
document.body
```

Formularios de la página (Colección HTML)

```js
document.forms
```

Links de la página (Colección HTML)

```js
document.links
```

Imágenes de la página (Colección HTML)

```js
document.images
```

Embedidos de la página (Colección HTML)

```js
document.embeds
```

Hojas de estilo de la página (Lista de Hojas de Estilo)

```js
document.styleSheets
```

Charset de la página (String, Ej. `"UTF-8"`)

```js
document.characterSet
```

Tipo del contenido de la página (String, Ej. `"text/html"`)

```js
document.contentType
```

El elemento del documento (Elemento HTML)

```js
document.documentElement
```

#### Métodos del DOM

Seleccionar elemento por su id (Elemento HTML)

```js
document.getElementById("id");
```

Seleccionar elementos por clase (Colección HTML)

```js
document.getElementsByClassName("clase");
```

Seleccionar elementos por etiqueta HTML (Colección HTML)

```js
document.getElementsByTagName("etiqueta");
```

Seleccionar elemento por primera ocurrencia de selector CSS (Elemento HTML)

```js
document.querySelector("selector") 
```

Seleccionar elementos por selector CSS (Lista de Nodos)

```js
document.querySelectorAll("selector")
```

Crear elemento en memoria

```js
document.createElement("etiqueta");
```

Añadir escuchador de eventos (explicado en su sección)

```js
document.addEventListener("event", function);
document.addEventListener("evento", event => {
	// Instrucciones
});
```

### Elementos HTML

#### Propiedades de Todos los Elementos HTML

Los elementos `document.head` y `document.body` son subinterfaces de Elemento HTML y tienen las mismas propiedades

`id` de elemento (String)

```js
element.id
```

Clase de elemento (String)

```js
element.className
```

Contenido HTML dentro de elemento (String)

```js
element.innerHTML
```

Texto sin aplicar HTML dentro del elemento (String)

```js
element.textContent
```

Estilo del elemento (Declaración de Estilos CSS)

```js
element.style
```

Lista de clases del elemento (Lista)

```js
element.classList
```

Siguiente elemento (Elemento HTML)

```js
element.nextElementSibling
```

Siguiente elemento (Nodo)

```js
element.nextSibling
```

Anterior elemento (Elemento HTML)

```js
element.previousElementSibling
```

Anterior elemento (Nodo)

```js
element.previousSibling
```

Padre del elemento (Elemento HTML)

```js
element.parentElement
```

Padre del elemento (Nodo)

```js
element.parentNode
```

Hijos del elemento (Colección HTML)

```js
element.children
```

Hijos del elemento (Lista de Nodos)

```js
element.childNodes
```

Primer hijo del elemento (Elemento HTML)

```js
element.firstElementChild
```

Primer hijo del elemento (Nodo)

```js
element.firstChild
```

Último hijo del elemento (Elemento HTML)

```js
element.lastElementChild
```

Último hijo del elemento (Nodo)

```js
element.lastChild
```

Agregar elemento (o nodo) después del último hijo del elemento (o nodo)

```js
element.append(elemento);
node.append(nodo);
```

Agregar elemento (o nodo) antes del primer hijo del elemento (o nodo)

```js
element.prepend(elemento);
node.prepend(nodo);
```

Agregar nodo después del último hijo del nodo

```js
node.appendChild(nodo);
```

Agregar nodo antes de un hijo dentro de un nodo

```js
node.insertBefore(nodo, hijo);
```

Eliminar nodo

```js
nodo.remove();
```

Eliminar hijo dentro de un nodo

```js
nodo.removeChild(hijo);
```

Eliminar hijo por otro dentro de un nodo

```js
nodo.replaceChild(hijo, nuevo);
```

Copia de nodo (true con subnodos, false sólo él)

```js
nodo.cloneNode(booleano)
```

Establecer atributo del elemento

```js
element.setAttribute("atributo", "valor");
```

Valor de atributo del elemento

```js
element.getAttribute("atributo");
```

Eliminar atributo del elemento

```js
element.removeAttribute("atributo");
```

Añadir escuchador de eventos (Explicado en su sección)

```js
element.addEventListener("event", function);
element.addEventListener("evento", event => {
	// Instrucciones
});
```

#### Propiedades de Elementos HTML Específicos

Las siguientes propiedades por cada tipo de elemento son unas cuantas, seguramente falten muchas.

##### Propiedades de Elementos de Entrada de Texto (`<input>`, `<select>`, `<textarea>`)

Tipo de input

```js
element.type
```

Valor del campo

```js
element.value
```

¿Está seleccionado? (sólo tipo `checkbox` / `radio`)

```js
element.checked
```

¿Está desabilitado?

```js
element.disabled
```

Texto de placeholder

```js
element.placeholder
```

Máxima longitud de caracteres (sólo `<input type="text">`)

```js
element.maxLength
```

Mínima longitud de caracteres (sólo `<input type="text">`)

```js
element.minLength
```

Tamaño de longitud de caracteres

```js
element.size
```

¿Es de sólo lectura?

```js
element.readOnly
```

Opciones (sólo `<select>`)

```js
element.options
```

##### Propiedades de Elementos de Imagen (`<img>`)

URL de imagen

```js
element.src
```

Texto alternativo

```js
element.alt
```

Ancho de imagen

```js
element.width
```

Alto de imagen

```js
element.height
```

##### Propiedades de Elementos de Enlace (`<a>`)

URL de enlace

```js
element.href
```

Apertura en misma o distinta pestaña

```js
element.target
```

¿Se descarga al hacer clic?

```js
element.download
```

##### Propiedades de Elementos de Listado (`<ol>`, `<li>`)

Tipo de numeración (de `<ol>`)

```js
element.type
```

Valor (de `<li>`)

```js
element.value
```

##### Propiedades de Elementos de Table (`<table>`, `<tr>`, `<th>`, `<td>`)

Filas por celda

```js
element.rowSpan
```

Columnas por celda

```js
element.colSpan
```

Título (sólo `<table>`)

```js
element.caption
```

##### Propiedades de Elementos de Formulario (`<form>`)

URL de destino del formulario

```js
element.action
```

Método HTTP (`GET` | `POST`)

```js
element.method
```

##### Propiedades de Elementos de Estilo (`<style>`)

Hoja de estilos

```js
element.sheet
```

¿Está desabilitada?

```js
element.disabled
```

##### Propiedades de Elementos de Script (`<script>`)

URL del script

```js
element.src
```

¿Se ejecuta de forma asíncrona?

```js
element.async
```

##### Propiedades de Elementos de Audio y Vídeo (`<audio>`, `<video>`)

URL de contenido

```js
element.src
```

¿Se muestran los controles?

```js
element.controls
```

¿Se reproducirá automáticamente?

```js
element.autoplay
```

¿Se reproducirá en bucle?

```js
element.loop
```

¿Se cargará antes de interactuar?

```js
element.preload
```

¿Está silenciado?

```js
element.muted
```

¿Está pausado?

```js
element.paused
```

Posición actual de tiempo

```js
element.currentTime
```

Duración

```js
element.duration
```

Volumen

```js
element.volume
```

Reproducir contenido

```js
element.play();
```

Pausar contenido

```js
element.pause();
```

##### Propiedades de Elementos de Iframe (`<iframe>`)

URL del contenido

```js
element.src
```

#### Propiedad `style`: Estilo de Elemento (Repaso CSS)

- Esto es básicamente un repaso de CSS, nada de JavaScript.

Color de fondo

```js
element.style.backgroundColor
element.style.backgroundColor = "red";
element.style.backgroundColor = "#ABCDEF";
element.style.backgroundColor = "#ABCDEF00";
element.style.backgroundColor = "rgb(100, 150, 250)";
element.style.backgroundColor = "rgba(100, 150, 250, 0.5)";
element.style.backgroundColor = "hsl(210, 60%, 70%)";
element.style.backgroundColor = "hsla(210, 60%, 70%, 0.5)";
```

Color

```js
element.style.color
element.style.color = "red";
element.style.color = "#ABCDEF";
element.style.color = "#ABCDEF00";
element.style.color = "rgb(100, 150, 250)";
element.style.color = "rgba(100, 150, 250, 0.5)";
element.style.color = "hsl(210, 60%, 70%)";
element.style.color = "hsla(210, 60%, 70%, 0.5)";
```

Tamaño de texto

```js
element.style.fontSize
element.style.fontSize = "10px";
element.style.fontSize = "2em";
element.style.fontSize = "1.5rem";
element.style.fontSize = "60%";
```

Peso de texto (entre otros, negrita)

```js
element.style.fontWeight
element.style.fontWeight = 100;
element.style.fontWeight = "normal|bold|bolder|lighter";
```

Fuente de texto

```js
element.style.fontFamily
element.style.fontFamily = "Helvetica, sans-serif";
```

Distancia a Top, Bottom, Left, Right

```js
element.style.top
element.style.bottom
element.style.left
element.style.right

element.style.top = "10px";
element.style.bottom = "10px";
element.style.left = "10px";
element.style.right = "10px";

element.style.top = "2em";
element.style.top = "1.5rem";
element.style.top = "auto";
...
```

Margen

```js
element.style.margin
element.style.margin = "10px";
element.style.margin = "10px 20px";		// Verticales y Horizontales
element.style.margin = "10px 20px 30px";	// Superior, Horizontales e Inferior
element.style.margin = "10px 20px 30px 40px";	// Superior, Derecho, Inferior e Izquierdo
element.style.margin = "2em";
element.style.margin = "1.5rem";
element.style.margin = "auto";
```

Margen Top, Bottom, Left, Right

```js
element.style.marginTop
element.style.marginBottom
element.style.marginLeft
element.style.marginRight

element.style.marginTop = "10px";
element.style.marginBottom = "10px";
element.style.marginLeft = "10px";
element.style.marginRight = "10px";

element.style.marginTop = "2em";
element.style.marginTop = "1.5rem";
element.style.marginTop = "auto";
...
```

Padding

```js
element.style.padding
element.style.padding = "10px";
element.style.padding = "10px 20px";		// Verticales y Horizontales
element.style.padding = "10px 20px 30px";	// Superior, Horizontales e Inferior
element.style.padding = "10px 20px 30px 40px";	// Superior, Derecho, Inferior e Izquierdo
element.style.padding = "2em";
element.style.padding = "1.5rem";
element.style.padding = "auto";
```

Padding Top, Bottom, Left, Right

```js
element.style.paddingTop
element.style.paddingBottom
element.style.paddingLeft
element.style.paddingRight

element.style.paddingTop = "10px";
element.style.paddingBottom = "10px";
element.style.paddingLeft = "10px";
element.style.paddingRight = "10px";

element.style.paddingTop = "2em";
element.style.paddingTop = "1.5rem";
element.style.paddingTop = "auto";
...
```

Borde

```js
element.style.border
element.style.border = "10px";
element.style.border = "solid";
element.style.border = "black";
element.style.border = "10px solid black";
```

Borde Top, Bottom, Left, Right

```js
element.style.borderTop
element.style.borderBottom
element.style.borderLeft
element.style.borderRight

element.style.borderTop = "10px solid black";
element.style.borderBottom = "10px solid black";
element.style.borderLeft = "10px solid black";
element.style.borderRight = "10px solid black";

element.style.borderTop = "2em";
element.style.borderTop = "1.5rem";
...
```

Ancho de borde

```js
element.style.borderWidth
element.style.borderWidth = "medium|thin|thick";
element.style.borderWidth = "10px";
element.style.borderWidth = "10px 20px";		// Verticales y Horizontales
element.style.borderWidth = "10px 20px 30px";		// Superior, Horizontales e Inferior
element.style.borderWidth = "10px 20px 30px 40px";	// Superior, Derecho, Inferior e Izquierdo
element.style.borderWidth = "2em";
element.style.borderWidth = "1.5rem";
```

Estilo de borde

```js
element.style.borderStyle
element.style.borderStyle = "none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset";
element.style.borderStyle = "none hidden";			// Verticales y Horizontales
element.style.borderStyle = "none hidden dotted";		// Superior, Horizontales e Inferior
element.style.borderStyle = "none hidden dotted dashed";	// Superior, Derecho, Inferior e Izquierdo
```

Color de borde

```js
element.style.borderColor
element.style.borderColor = "red";
element.style.borderColor = "red green";		// Verticales y Horizontales
element.style.borderColor = "red green blue";		// Superior, Horizontales e Inferior
element.style.borderColor = "red green blue yellow";	// Superior, Derecho, Inferior e Izquierdo
element.style.borderColor = "#ABCDEF";
element.style.borderColor = "#ABCDEF00";
element.style.borderColor = "rgb(100, 150, 250)";
element.style.borderColor = "rgba(100, 150, 250, 0.5)";
element.style.borderColor = "hsl(210, 60%, 70%)";
element.style.borderColor = "hsla(210, 60%, 70%, 0.5)";
```

- También existen las siguientes propiedades específicas de bordes:

```js
element.style.borderTopWidth
element.style.borderTopStyle
element.style.borderTopColor
element.style.borderBottomWidth
element.style.borderBottomStyle
element.style.borderBottomColor
element.style.borderLeftWidth
element.style.borderLeftStyle
element.style.borderLeftColor
element.style.borderRightWidth
element.style.borderRightStyle
element.style.borderRightColor
```

Radio de borde

```js
element.style.borderRadius
element.style.borderRadius = "10px";
element.style.borderRadius = "10px 20px";		// Esquinas 1,4 y Esquinas 2,3
element.style.borderRadius = "10px 20px 30px";		// Esquina 1, Esquinas 2,3 y Esquina 4
element.style.borderRadius = "10px 20px 30px 40px";	// Esquina 1, Esquina 2, Esquina 3 y Esquina 4
element.style.borderRadius = "2em";
element.style.borderRadius = "1.5rem";
```

Ancho

```js
element.style.width
element.style.width = "10px";
element.style.width = "50%";
element.style.width = "2em";
element.style.width = "1.5rem";
element.style.width = "auto";
```

Alto

```js
element.style.height
element.style.height = "10px";
element.style.height = "50%";
element.style.height = "2em";
element.style.height = "1.5rem";
element.style.height = "auto";
```

Posición

```js
element.style.position
element.style.position = "static|absolute|fixed|relative|sticky";
```

Flotar

```js
element.style.float
element.style.float = "none|left|right";
```

Display

```js
element.style.display
element.style.display = "none|inline|block|flex|grid|table|inline-block|inline-grid|inline-table|...";
```

Visibilidad

```js
element.style.visibility
element.style.visibility = "visible|hidden|collapse";
```

Opacidad

```js
element.style.opacity
element.style.opacity = 0.5;
```

Overflow

```js
element.style.overflow
element.style.overflow = "visible|hidden|clip|scroll|auto";
```

Capa en el eje Z

```js
element.style.zIndex
element.style.zIndex = 10;
```

Alineación del texto

```js
element.style.textAlign
element.style.textAlign = "left|right|center|justify";
```

Altura de línea de texto

```js
element.style.lineHeight
element.style.lineHeight = 1.5;
element.style.lineHeight = "80%";
element.style.lineHeight = "normal";
```

Tipo de Línea de Decoración de texto

```js
element.style.textDecorationLine
element.style.textDecorationLine = "none|underline|overline|line-through"; // Pueden ser varias
```

Color de Línea de Decoración de texto

```js
element.style.textDecorationColor
element.style.textDecorationColor = "red";
element.style.textDecorationColor = "#ABCDEF";
element.style.textDecorationColor = "#ABCDEF00";
element.style.textDecorationColor = "rgb(100, 150, 250)";
element.style.textDecorationColor = "rgba(100, 150, 250, 0.5)";
element.style.textDecorationColor = "hsl(210, 60%, 70%)";
element.style.textDecorationColor = "hsla(210, 60%, 70%, 0.5)";
```

Estilo de Línea de Decoración de texto

```js
element.style.textDecorationStyle
element.style.textDecorationStyle = "solid|double|dotted|dashed|wavy";
```

Grosor de Línea de Decoración de texto

```js
element.style.textDecorationThickness
element.style.textDecorationThickness = "5px";
element.style.textDecorationThickness = "80%";
element.style.textDecorationThickness = "2em";
element.style.textDecorationThickness = "1.5rem";
element.style.textDecorationThickness = "auto";
```

Línea de Decoración de texto

```js
element.style.textDecoration
element.style.textDecoration = "línea color estilo grosor"; // Da igual el orden
element.style.textDecoration = "underline overline dotted red";
```

Transformación de texto

```js
element.style.textTransform
element.style.textTransform = "none|capitalize|uppercase|lowercase";
```

Espaciado entre letras

```js
element.style.letterSpacing
element.style.letterSpacing = 10px;
element.style.letterSpacing = "2em";
element.style.letterSpacing = "1.5rem";
```

Espaciado entre palabras

```js
element.style.wordSpacing
element.style.wordSpacing = 10px;
element.style.wordSpacing = "2em";
element.style.wordSpacing = "1.5rem";
```

Imagen de fondo

```js
element.style.backgroundImage
element.style.backgroundImage = 'url("imagen.jpg")';
```

Tamaño de imagen de fondo

```js
element.style.backgroundSize
element.style.backgroundSize = "auto|cover|contain";
element.style.backgroundSize = "300px 120px";
element.style.backgroundSize = "100% 100%";
element.style.backgroundSize = "2em 2em";
element.style.backgroundSize = "1.5rem 1.5rem";
```

Repetición de imagen de fondo

```js
element.style.backgroundRepeat
element.style.backgroundRepeat = "repeat|repeat-x|repeat-y|no-repeat";
```

Sombra

```js
element.style.boxShadow
element.style.boxShadow = "none|horizontal vertical difuminado tamaño color |inset";
element.style.boxShadow = "5px 4px";
element.style.boxShadow = "2em 2em 2em";
element.style.boxShadow = "1.5rem 1.5rem 1.5rem 1.5rem";
element.style.boxShadow = "5px 4px 3px 6px red inset";
```

Cursor

```js
element.style.cursor
element.style.cursor = "none";			// Ninguno
element.style.cursor = "default";		// Por defecto
element.style.cursor = "auto";			// Automático
element.style.cursor = "all-scroll";		// 4 flechas
element.style.cursor = "move";			// 4 flechas
element.style.cursor = "ns-resize";		// Flecha Vertical
element.style.cursor = "ew-resize";		// Flecha Horizontal
element.style.cursor = "n-resize";		// Flecha Norte
element.style.cursor = "ne-resize";		// Flecha Nordeste
element.style.cursor = "e-resize";		// Flecha Este
element.style.cursor = "se-resize";		// Flecha Sureste
element.style.cursor = "s-resize";		// Flecha Sur
element.style.cursor = "sw-resize";		// Flecha Suroeste
element.style.cursor = "w-resize";		// Flecha Oeste
element.style.cursor = "nw-resize";		// Flecha Noroeste
element.style.cursor = "cell";			// Celda
element.style.cursor = "crosshair";		// Cruz
element.style.cursor = "help";			// Interrogación
element.style.cursor = "no-drop";		// Prohibido
element.style.cursor = "pointer";		// Mano
element.style.cursor = "progress";		// Progreso
element.style.cursor = "grab";			// Agarrar
element.style.cursor = "grabbing";		// Agarrando
element.style.cursor = "text";			// Sobre texto
element.style.cursor = "wait";			// Rueda
element.style.cursor = "zoom-in";		// Lupa +
element.style.cursor = "zoom-out";		// Lupa -
element.style.cursor = 'url("cursor.png")';	// Favicon de URL
```

Línea exterior

```js
element.style.outline
element.style.outline = "solid";
element.style.outline = "10px solid black";
```

Ancho de Línea exterior

```js
element.style.outlineWidth
element.style.outlineWidth = "medium|thin|thick";
element.style.outlineWidth = "10px";
element.style.outlineWidth = "2em";
element.style.outlineWidth = "1.5rem";
```

Estilo de Línea exterior

```js
element.style.outlineStyle
element.style.outlineStyle = "none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset";
```

Color de Línea exterior

```js
element.style.outlineColor
element.style.outlineColor = "red";
element.style.outlineColor = "#ABCDEF";
element.style.outlineColor = "#ABCDEF00";
element.style.outlineColor = "rgb(100, 150, 250)";
element.style.outlineColor = "rgba(100, 150, 250, 0.5)";
element.style.outlineColor = "hsl(210, 60%, 70%)";
element.style.outlineColor = "hsla(210, 60%, 70%, 0.5)";
```

Espacio adicional de Línea exterior

```js
element.style.outlineOffset
element.style.outlineOffset = "10px";
element.style.outlineOffset = "2em";
element.style.outlineOffset = "1.5rem";
```

Transformación

```js
element.style.transform
element.style.transform = "none";			// Ninguno
element.style.transform = "translate(x, y)";		// Mover en ejes X e Y
element.style.transform = "translate3d(x, y, z)";	// Mover en los ejes X, Y y Z
element.style.transform = "translateX(x)";		// Mover en el eje X
element.style.transform = "translateY(y)";		// Mover en el eje Y
element.style.transform = "translateZ(z)";		// Mover en el eje Z
element.style.transform = "scale(x, y)";		// Escalar en los ejes X e Y
element.style.transform = "scale3d(x, y, z)";		// Escalar en los ejes X, Y y Z
element.style.transform = "scaleX(x)";			// Escalar en el eje X
element.style.transform = "scaleY(y)";			// Escalar en el eje Y
element.style.transform = "scaleZ(z)";			// Escalar en el eje Z
element.style.transform = "rotate(angle)";		// Rotar en el plano 2D
element.style.transform = "rotate3d(x, y, z, angle)";	// Rotar en los ejes X, Y y Z
element.style.transform = "rotateX(angle)";		// Rotar en el eje X
element.style.transform = "rotateY(angle)";		// Rotar en el eje Y
element.style.transform = "rotateZ(angle)";		// Rotar en el eje Z
element.style.transform = "skew(x-angle, y-angle)";	// Inclinar en los ejes X e Y
element.style.transform = "skewX(angle)";		// Inclinar en el eje X
element.style.transform = "skewY(angle)";		// Inclinar en el eje Y
element.style.transform = "perspective(n)";		// Profundidad de perspectiva 3D

element.style.transform = "translate(20px, 30px)";
element.style.transform = "translate3d(10px, 20px, 30px)";
element.style.transform = "translateX(50px)";
element.style.transform = "translateY(50px)";
element.style.transform = "translateZ(50px)";
element.style.transform = "scale(2, 5)";
element.style.transform = "scale3d(3, 2, 5)";
element.style.transform = "scaleX(5)";
element.style.transform = "scaleY(5)";
element.style.transform = "scaleZ(5)";
element.style.transform = "rotate(30deg)";
element.style.transform = "rotate3d(2, 3, 3, 30deg)";
element.style.transform = "rotateX(30deg)";
element.style.transform = "rotateY(30deg)";
element.style.transform = "rotateZ(30deg)";
element.style.transform = "skew(30deg, 80deg)";
element.style.transform = "skewX(30deg)";
element.style.transform = "skewY(30deg)";
element.style.transform = "perspective(500px)";
```

Origen de Transformación

```js
element.style.transformOrigin
element.style.transformOrigin = "ejeX ejeY ejeZ";
element.style.transformOrigin = "left|center|right left|center|right 0";
element.style.transformOrigin = "20px 40px";
element.style.transformOrigin = "50% 50% 5";
```

Estilo de Transformación

```js
element.style.transformStyle
element.style.transformStyle = "flat|preserve-3d";
```

Transición

```js
element.style.transition
element.style.transition = "propiedad duracion funcion delay, ...";
element.style.transition = "width 1s linear 2s, height 2s ease, color 0.2s";
```

Propiedad de Transición

```js
element.style.transitionProperty
element.style.transitionProperty = "none|all";
element.style.transitionProperty = width, height, color;
```

Duración de Transición

```js
element.style.transitionDuration
element.style.transitionDuration = "3s";
```

Función de Transición

```js
element.style.transitionTimingFunction
element.style.transitionTimingFunction = "linear|ease|ease-in|ease-out|ease-in-out|step-start|step-end|steps(int,start|end)|cubic-bezier(n,n,n,n)";
```

Delay de Transición

```js
element.style.transitionDelay
element.style.transitionDelay = "3s";
```

Animación

```js
element.style.animation
element.style.animation = "nombre duracion funcion delay iteraciones direccion aparienciaInactiva estado";
```

Nombre de Animación

```js
element.style.animationName
element.style.animationName = "animacion";
element.style.animationName = "none";
```

Duración de Animación

```js
element.style.animationDuration
element.style.animationDuration = "3s";
```

Función de Animación

```js
element.style.animationTimingFunction
element.style.animationTimingFunction = "linear|ease|ease-in|ease-out|ease-in-out|step-start|step-end|steps(int,start|end)|cubic-bezier(n,n,n,n)";
```

Delay de Animación

```js
element.style.animationDelay
element.style.animationDelay = "3s";
```

Iteraciones de Animación

```js
element.style.animationIterationCount
element.style.animationIterationCount = 5;
element.style.animationIterationCount = infinite;
```

Dirección de Animación

```js
element.style.animationDirection
element.style.animationDirection = "normal|reverse|alternate|alternate-reverse";
```

Apariencia inactiva de Animación

```js
element.style.animationFillMode
element.style.animationFillMode = "none|forwards|backwards|both";
```

Estado de Animación

```js
element.style.animationPlayState
element.style.animationPlayState = "paused|running";
```



#### Propiedad `classList`: Clases del Elemento

Añadir clase al elemento

```js
element.classList.add("clase");
```

Eliminar clase al elemento

```js
element.classList.remove("clase");
```

Añadir / Eliminar clase al elemento si no está / está

```js
element.classList.toogle("clase");
```

¿El elemento tiene la clase?

```js
element.classList.contains("clase")
```



### Event Listener

Añadir escuchador de eventos (`document` / `element`)

```js
objeto.addEventListener("evento", event => {
	// Instrucciones
})
```

Lista de eventos destacables

```js
animationstart		// Animación empieza
animationiteration	// Animación ejecuta siguiente iteración
animationend		// Animación termina
change			// Cambio
click			// Clic
dblclick		// Doble clic
copy			// Algo copiado
cut			// Algo cortado
paste			// Algo pegado
dragstart		// Empezar a arrastrar
drag			// Arrastrando
dragend			// Terminar de arrastrar
dragenter		// Entrar arrastrando
dragleave		// Salir arrastrando
focus			// Seleccionado
input			// Entrada de usuario
keydown			// Tecla presionada
keyup			// Tecla soltada
mousedown		// Ratón presionado
mouseup			// Ratón soltado
mouseenter		// Cursor entra
mouseleave		// Cursor sale
mouseover		// Cursor entra (incluye hijos)
mouseout		// Cursor sale (incluye hijos)
mousemove		// Cursor se mueve
wheel			// Rueda de ratón
play			// Multimedia empieza a reproducirse
playing			// Mutilmedia reproduciéndose
pause			// Multimedia se pausa
waiting			// Multimedia pausada
ended			// Multimedia termina
timeupdate		// Posición temporal cambia
volumechange		// Volumen cambia
scroll			// Scrolleando
select			// Texto seleccionado
reset			// Formulario reseteado
submit			// Formulario enviado
toggle			// <details> desplegado
touchstart		// Dedo pulsado
touchend		// Dedo levantado
touchmove		// Dedo se mueve
touchcancel		// Dedo interrumpido
```