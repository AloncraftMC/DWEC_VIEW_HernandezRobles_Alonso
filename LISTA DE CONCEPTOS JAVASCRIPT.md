# LISTA DE CONCEPTOS JAVASCRIPT
> Alonso Hernández Robles 2º DAW
> Ver. 17/11/2024 (_Ahora en Markdown!_)

---

## Comentarios
```
// Comentario de línea

/* Comentario
de
párrafo
*/
```

---

## Mensajes

Imprimir mensaje por consola

```
console.log("String");
console.log("String", mensaje2);
console.log("Gira" + "soles");

console.log(variable)
console.log(`${variable}`); // Ambos son lo mismo
```

Imprimir advertencia por consola

```
console.warn("Advertencia");
```

Imprimir error por consola

```
console.error("Error");
```

Imprimir objeto con más detalle

```
console.dir(objeto);
```

Pedir string al usuario con mensaje

```
prompt("Ingresa:");
```

Pedir string al usuario con mensaje y con placeholder

```
prompt("Ingresa:", "Placeholder");
```

Mostrar pop-up de confirmación (Aceptar / Cancelar)

```
confirm("¿Aceptas o cancelas?");
```

Mostrar alerta con mensaje

```
alert("String");
```

Limpiar consola

```
console.clear();
```

---

## Constantes y Variables

Declarar e inicializar constante

```
const constante = 5;
```

Declarar variable

```
let variable;
```

Declarar e inicializar variable

```
let variable = 100;
let var2 = "Hola mundo";
```

Declarar variable (global - en desuso)

```
var variable;
```

Declarar e inicializar (global - en desuso)

```
var variable = 5;
```

Establecer variable a valor

```
variable = 10;
variable = "Hola";
variable = true;
```

---

## Tipos de Datos

Número (Entero / Decimal)

```
12
3.14
```

Cadena

```
"Hola Mundo"
```

Booleano

```
true
false
```

Declarar objeto literal

```
let usuario = {
	nombre: "Eduardo",
	edad: 25,
	casado: true
};
```

Acceder a atributo de objeto

```
usuario.nombre
usuario.edad
```

Tipo de dato de una variable

```
typeof miVariable
```

Número con 5 decimales

```
numero.toFixed(5)
```

---

## Conversión de Tipos

Valor en string de una variable

```
String(miVariable);
```

Valor en número de una variable

```
Number(miVariable);
```

Valor en booleano de una variable

```
Boolean(miVariable);
```

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
```
++variable;
```

Incremento posterior
```
variable++;
```

Decremento anterior
```
--variable;
```

Decremento posterior
```
variable--;
```

Sumar valor a variable
```
variable += valor;
```

Restar valor a variable
```
variable -= valor;
```

Multiplicar valor a variable
```
variable *= valor;
```

Dividir valor a variable
```
variable /= valor;
```

Hacer módulo a variable
```
variable %= valor;
```

Hacer potencia con valor a variable
```
variable **= valor;
```

### Operadores Relacionales

`==` Igual (valores)

`===` Estrictamente igual (valores y tipo)

`!=` Distinto (valores)

`!==` Estrictamente Distinto (valores y tipo)

`>` Mayor

`>=` Mayor o igual

`<==>` Menor

`<=>=` Menor o igual

### Operadores Lógicos

`&&` AND

`||` OR

`!` NOT

`??` OR pero sin aplicar lógica (`0` es `true`)

---

## Condicionales

### Condicional `if else`

Si se da `condición`, realizar `instrucción`

```
if(condición) {
	// instrucción
}
if(condición) instruccion();
```

Si se da `condición`, realizar `1`, si no, `2`.

```
if(condición){
	// 1
}else{
	// 2
}
condición ? instruccion1() : instruccion2();
```

Múltiple condición

```
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

### Condicional `switch`

Realizar instrucción dependiendo del valor de `variable`

```
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

---

## Bucles

### Bucle `while`

Repetir `instrucción` mientras se cumpla `condición`

```
while(condición) {
	// Instrucción
}
```

### Bucle `do while`

Realizar `instrucción` y repetir mientras se cumpla `condición`

```
do{
	// Instrucción
}while(condición);
```

### Bucle `for`

Realizar `inicialización` y repetir `instrucción` mientras se cumpla `condición`, y realizar `iteración`

```
for(inicialización, condición, iteración){
	// Instrucción
}
```

Bucle For-Each (Valores de un iterable)

```
let iterable = [1, 2, 3, 4, 5];
for(let elemento of iterable){
	console.log(elemento);
}
```

Bucle For-Each (Claves de un objeto, iterable o no)

```
let objeto = {
	nombre: "Pepe",
	edad: 20
};
for(let elemento in objeto){
	console.log(elemento, objeto[elemento]);
}
```

### `break` y `continue`

Salir del bucle

```
while(condición){
	break;
}
```

Ejecutar siguiente iteración del bucle

```
while(condición){
	continue;
}
```

---

## Arrays

Declarar array unidimensional

```
let array = [0, 1, 2, "Casa", "Pelota", false];
```

Acceder a elemento por posición de array unidimensional

```
array[3]
array.at(3)
```

Acceder a elemento por posición de array unidimensional empezando por el final

```
array.at(-1)
```

Declarar array multidimensional

```
let array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
```

Acceder a elemento por posición de array multidimensional

```
array[5][2]
```

Declarar array unidimensional de tamaño `10` con constructor

```
let array = new Array(10);
```

Tamaño de array

```
array.length
```

(Sacar) primer elemento

```
array.shift();
```

Meter elemento como primero

```
array.unshift(elemento);
```

(Sacar) último elemento

```
array.pop();
```

Meter elemento como último

```
array.push(elemento);
```

Índice de la primera ocurrencia de elemento (devuelve `-1` si no hay)

```
array.indexOf(elemento)
```

Ordenar array

```
array.sort();
```

Ordenar array siguiendo un criterio

```
array.sort((elemento1, elemento2) => Instrucciones);
```

Poner array al revés

```
array.reverse();
```

Desglose de valores de un array

```
...array
```

Recorrer array (lee `elemento`, `indice` y `array` en ese orden) y aplicar instrucciones a cada elemento

```
array.forEach((elemento, indice, array) => Instrucciones);
```

Generar nuevo array a partir de original (lee `elemento`, `indice` y `array` en ese orden) con instrucciones aplicadas a cada elemento

```
array.map((elemento, indice, array) => Instrucciones);
```

Generar nuevo array a partir de original (lee elemento, indice y array en ese orden) de sólo los elementos que cumplan condición devuelta en las instrucciones

```
array.filter((elemento, indice, array) => Instrucciones);
```

Recorrer array (lee `acumulador`, `elemento`, `indice` y `array` en ese orden) iterando sobre un acumulador y devolver valor especificado en las instrucciones

```
array.reduce((acumulador, elemento, indice, array) => Instrucciones, valorInicialAcumulador);
```

¿Es la variable un array?

```
Array.isArray(variable)
```

Convertir a array

```
Array.from(coleccion)
Array.from(listaDeNodos)
Array.from(conjunto)
```

¿Contiene un elemento el array?

```
array.includes(elemento)
```

Extraer de un array los elementos en un rango (y sustituirlos por otros si hay. Funciona como añadir elementos a partir de inicio si `cantidad` es `0`)

```
array.splice(inicio, cantidad)
array.splice(inicio, cantidad, ...reemplazos)
```

Elementos en un rango de un array

```
array.slice(inicio, fin)
```

Array en cadena de texto

```
array.toString()
```

Devolver primera ocurrencia de elemento en array por condición

```
array.find((elemento, indice, array) => Instrucciones);
```

Posición de primera ocurrencia de elemento en array que cumpla condición

```
array.findIndex((elemento, indice, array) => Instrucciones)
```

Posición de última ocurrencia de elemento en array que cumpla condición

```
array.findLastIndex((elemento, indice, array) => Instrucciones)
```

Array con otro array concatenado

```
array.concat(otroArray);
```

Dividir en array una cadena por elementos entre `separador`

```
cadena.split(separador)
```

Crear cadena con strings de un array, separadas por una coma

```
array.join()
```

Crear cadena con strings de un array, separadas por subcadena (`a`, `b`, `c` pasa a ser `abc`)

```
array.join(subcadena)
```

Llenar un array de valores

```
array.fill(valor);
```

Llenar un array de valores a partir de una posición

```
array.fill(valor, inicio);
```

Llenar un array de valores sólo un rango (fin excluyente)

```
array.fill(valor, inicio, fin);
```

Desesctructuración de array en variables

```
let [a, b, c] = [1, 2, 3];
```

---

## Strings

Tamaño de cadena

```
cadena.length
```

Carácter en posición específica

```
cadena.charAt(posición)
```

Posición de la primera ocurrencia de cadena

```
cadena.indexOf(cadena)
```

Posición de la última ocurrencia de cadena

```
cadena.lastIndexOf(cadena)
```

Cadena con espacios regulados

```
cadena.trim()
```

Cadena en mayúscula

```
cadena.toUpperCase()
```

Cadena en minúscula

```
cadena.toLowerCase()
```

Cadena concatenada repetidamente `5` veces

```
cadena.repeat(5)
```

¿La cadena empieza con una cadena?

```
cadena.startsWith(otra);
```

¿La cadena termina con una cadena?

```
cadena.endsWith(otra);
```

¿La cadena contiene una cadena?

```
cadena.includes(otra);
```

Cadena con las `subcadena1` reemplazadas por `subcadena2`

```
cadena.replaceAll(cadena1, cadena2)
```

Subcadena entre la posición `1` (incluyente) y `2` (excluyente) de una cadena

```
cadena.slice(1, 2)
```

Dividir en array una cadena por elementos entre `separador`

```
cadena.split(separador)
```

Crear cadena con strings de un array, separadas por una coma

```
array.join()
```

Crear cadena con strings de un array, separadas por subcadena (`a`, `b`, `c` pasa a ser `abc`)

```
array.join(subcadena)
```

---

## Conversión Estándar JSON

String de `objeto`

```
JSON.stringify(objeto)
```

Objeto de `string`

```
JSON.parse(string)
```

---

## Funciones

Crear función

```
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

```
function miFuncion(valor = 2) {
	// Instrucciones
}
```

Crear función anónima

```
let funcion = () => {
	// Instrucciones
}

let suma = (a, b) => {
	return a + b;
}
```

Función con número variable de argumentos (Es un iterable, agrupación de elementos)

```
function sumarTodo(...numeros){
	let suma = 0;
	for(let numero of numeros){
		suma += numero;
	}
	return suma;
}
```

Objeto Argumentos (debe usarse dentro de un ámbito con parámetros)

```
function miFuncion(arg1, arg2){
	console.log(arguments);
}
```

Ejecutar función

```
miFuncion();
miFuncion(variable1, variable2);
```

Función anidada

```
function externa() {
	function interna() {
		// Instrucciones
	}
	interna();
}
```

Función autoejecutable

```
(function () {
	// Instrucción
}) ();
```

---

## Clase `Math`

Constante π

```
Math.PI
```

Constante e

```
Math.E
```

Redondeo de número

```
Math.round(numero)
```

Techo de número

```
Math.ceil(numero)
```

Suelo de número

```
Math.floor(numero)
```

Truncamiento de número

```
Math.trunc(numero)
```

Valor absoluto

```
Math.abs(numero)
```

Raíz cuadrada

```
Math.sqrt(numero)
```

Raíz cúbica

```
Math.cbrt(numero)
```

Potencia

```
Math.pow(base, exponente)
```

Mínimo de un array

```
Math.min(array)
```

Máximo de un array

```
Math.max(array)
```

Número aleatorio entre 0 y 1

```
Math.random()
```

Seno

```
Math.sin(numero)
```

Coseno

```
Math.cos(numero)
```

Tangente

```
Math.tan(numero)
```

Logaritmo natural

```
Math.log(numero)
```

Logaritmo decimal

```
Math.log10(numero)
```

---

## Clase `Object`

Array de propiedades del objeto

```
Object.keys(objeto)
```

Array de valores del objeto

```
Object.values(objeto)
```

Array de entradas del objeto

```
Object.entries(objeto)
```

Definir propiedad nueva de `objeto` especificando nombre y valor, si se pueden cambiar sus valores, iterable o no y configurable o no

```
Object.defineProperty(objeto, "propiedad", {
	value: "valor",
	writable: booleano,
	enumerable: booleano,
	configurable: booleano
});
```

Congelar objeto (No se pueden crear, eliminar o modificar sus propiedades)

```
Object.freeze(objeto);
```

Sellar objeto (No se pueden crear o eliminar propiedades nuevas)

```
Object.seal(objeto);
```

Preveer objeto de extenderse (No se pueden crear propiedades nuevas)

```
Object.preventExtensions(objeto);
```

Agregar a objeto propiedades de objetos sobreescribiendo las existentes

```
Object.assign(objeto, ...objetos)
```

Referencia a objeto, con propiedades adicionales opcionales de otros objetos

```
Object.create(objeto, ...objetos)
```

¿El objeto tiene la propiedad no heredada?

```
Object.hasOwn(objeto, "propiedad")
objeto.hasOwnProperty("propiedad")
```

¿El objeto tiene la propiedad?

```
"propiedad" in objeto
```

Prototipo de objeto

```
Object.getPrototypeOf(objeto)
Objeto.prototype
```

Eliminar propiedad

```
delete objeto.propiedad;
```

Copia del objeto

```
structuredClone(objeto)
```

Desestructuración de objeto (sus propiedades) en variable del mismo nombre

```
let {atributo1} = objeto;
```

Desestructuración de objeto (sus propiedades) en variable

```
let {atributo1: variable} = objeto;
```

Función en el contexto de objeto y con parámetros fijados opcionalmente

```
funcion.bind(objeto, ...params)
```

Ejecutar `funcion` en el contexto de `objeto`

```
funcion.call(objeto);
```

---

## Modo `strict`

Habilitar modo estricto de JavaScript

```
"use strict";
```

---

## Clases y Objetos

Declarar objeto literal o de clase anónima

```
let objeto = {
	atributo1: valor1,
	atributo2: valor2,
	metodo1: function(...) {...},
	metodo2(...) {...},
	metodo3: (...) => {...}
};
```

Declarar objeto con función constructor

```
function Objeto(atributo1, atributo2) {
	this.atributo1 = atributo1;
	this.atributo2 = atributo2;
	this.metodo1 = function(...) {...};
	this.metodo2 = function(...) {...};
}

let objeto = new Objeto(valor1, valor2);
```

Declarar objeto con clase 😜👌

```
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

Acceder a propiedades del objeto

```
objeto.atributo
objeto["atributo"]
```

Añadir propiedad a objeto existente

```
objeto.nueva = valor;
objeto["nueva"] = valor;
objeto.metodoNuevo = () => {...};
objeto["metodoNuevo"] = () => {...};
```

Añadir propiedad a la clase del objeto

```
Objeto.prototype.nueva = valor;
Objeto.prototype.metodoNuevo = valor;
```

Propiedades Estáticas

```
class Objeto {
	static cantidad = 0;
	constructor() {
		Objeto.cantidad++;
	}
	static mostrarCantidad = () => console.log(Objeto.cantidad);
}
```

Acceder a propiedad con encadenamiento opcional (No lanza errores)

```
objeto?.propiedad
```

### Getters y Setters

- Si están definidos, los getters y setters son automáticamente invocados cuando se acceden o modifican propiedades.
- Todos los atributos que tengan getter se accederán mediante él para devolver valores de los mismos atributos privados.
	- `objeto.atributo` invoca al getter.
- Todos los atributos que tengan setter se modificarán mediante él para establecer los valores de los mismos atributos privados.
	- `objeto.atrituto = valor` invoca al setter.

```
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

```
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

- La clase hija tiene las propiedades de la clase padre
`super()` es el constructor del padre y `super` es el objeto padre

```
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

## Fechas

Crear objeto fecha de hoy

```
let fecha = new Date();
```

Crear objeto fecha con milisegundos desde `01/01/1970 01:00`

```
let fecha = new Date(1000000000000);
```

Crear objeto fecha especificada

```
let fecha = new Date("2024-01-01");
```

Año

```
fecha.getFullYear()
fecha.setFullYear(año)
```

Mes (número)

```
fecha.getMonth()
fecha.setMonth(mes)
```

Día (número)

```
fecha.getDate()
fecha.setDate(día);
```

Día (semana)

```
fecha.getDay()
```

Hora

```
fecha.getHours()
fecha.setHours(hora);
```

Minutos

```
fecha.getMinutes()
fecha.setMinutes(minutos);
```

Segundos

```
fecha.getSeconds()
fecha.setSeconds(segundos);
```

---

## Timeout

Ejecutar función con `1000` milisegundos de retraso (y devuelve un valor `id`)

```
setTimeout(funcion, 1000);
let id = setTimeout(funcion, 1000);
```

Cancelar Timeout con `id`

```
clearTimeout(id);
```

---

## Importación de Módulos

- Para importar módulos, debe hacerse en un servidor y el script principal tiene que tener en HTML:
<script type="module" src="main.js"></script>

Importar elementos de otro script

```
import {elemento1, elemento2} from "./script.js";
```

Importar de otro script todos los elementos como objeto

```
import * as objeto from "./script.js";
```



## Manejo de Errores

Manejar un error (`finally` es opcional)

```
try{
	// Código peligroso
}catch(error){
	// Manejo de errores
}finally{
	// Código final
}
```

Lanzar un error personalizado

```
throw new Error("Mensaje de error");
```

Mensaje del error

```
error.message
```

Tipo del error

```
error.name
```

---

## DOM

### Tipos de Datos del DOM

```
Node						// Nodo
	Element					// Elemento 
		HTMLElement			// Elemento HTML
		Document			// Documento
HTMLCollection					// Colección HTML (No tiene forEach() ni métodos similares)
NodeList					// Lista de Nodos (No se actualizan automáticamente y tiene forEach())
```



### Objeto DOM

Página completa

```
document
```

#### Atributos del DOM

URL de la página (String)

```
document.URL
```

Tipo del documento (Tipo de Documento, Ej. `<!DOCTYPE html>`)

```
document.doctype
```

Head de la página (Elemento HTML)

```
document.head
```

Título de la página; se puede modificar (String)

```
document.title
```

Body de la página (Elemento HTML)

```
document.body
```

Formularios de la página (Colección HTML)

```
document.forms
```

Links de la página (Colección HTML)

```
document.links
```

Imágenes de la página (Colección HTML)

```
document.images
```

Embedidos de la página (Colección HTML)

```
document.embeds
```

Hojas de estilo de la página (Lista de Hojas de Estilo)

```
document.styleSheets
```

Charset de la página (String, Ej. `"UTF-8"`)

```
document.characterSet
```

Tipo del contenido de la página (String, Ej. `"text/html"`)

```
document.contentType
```

El elemento del documento (Elemento HTML)

```
document.documentElement
```

#### Métodos del DOM

Seleccionar elemento por su id (Elemento HTML)

```
document.getElementById("id");
```

Seleccionar elementos por clase (Colección HTML)

```
document.getElementsByClassName("clase");
```

Seleccionar elementos por etiqueta HTML (Colección HTML)

```
document.getElementsByTagName("etiqueta");
```

Seleccionar elemento por primera ocurrencia de selector CSS (Elemento HTML)

```
document.querySelector("selector") 
```

Seleccionar elementos por selector CSS (Lista de Nodos)

```
document.querySelectorAll("selector")
```

Crear elemento en memoria

```
document.createElement("etiqueta");
```

Añadir escuchador de eventos (explicado en su sección)

```
document.addEventListener("event", function);
document.addEventListener("evento", event => {
	// Instrucciones
});
```

### Elementos HTML

#### Propiedades de Todos los Elementos HTML

Los elementos `document.head` y `document.body` son subinterfaces de Elemento HTML y tienen las mismas propiedades

`id` de elemento (String)

```
element.id
```

Clase de elemento (String)

```
element.className
```

Contenido HTML dentro de elemento (String)

```
element.innerHTML
```

Texto sin aplicar HTML dentro del elemento (String)

```
element.textContent
```

Estilo del elemento (Declaración de Estilos CSS)

```
element.style
```

Lista de clases del elemento (Lista)

```
element.classList
```

Siguiente elemento (Elemento HTML)

```
element.nextElementSibling
```

Siguiente elemento (Nodo)

```
element.nextSibling
```

Anterior elemento (Elemento HTML)

```
element.previousElementSibling
```

Anterior elemento (Nodo)

```
element.previousSibling
```

Padre del elemento (Elemento HTML)

```
element.parentElement
```

Padre del elemento (Nodo)

```
element.parentNode
```

Hijos del elemento (Colección HTML)

```
element.children
```

Hijos del elemento (Lista de Nodos)

```
element.childNodes
```

Primer hijo del elemento (Elemento HTML)

```
element.firstElementChild
```

Primer hijo del elemento (Nodo)

```
element.firstChild
```

Último hijo del elemento (Elemento HTML)

```
element.lastElementChild
```

Último hijo del elemento (Nodo)

```
element.lastChild
```

Agregar elemento (o nodo) después del último hijo del elemento (o nodo)

```
element.append(elemento);
node.append(nodo);
```

Agregar elemento (o nodo) antes del primer hijo del elemento (o nodo)

```
element.prepend(elemento);
node.prepend(nodo);
```

Agregar nodo después del último hijo del nodo

```
node.appendChild(nodo);
```

Agregar nodo antes de un hijo dentro de un nodo

```
node.insertBefore(nodo, hijo);
```

Eliminar nodo

```
nodo.remove();
```

Eliminar hijo dentro de un nodo

```
nodo.removeChild(hijo);
```

Eliminar hijo por otro dentro de un nodo

```
nodo.replaceChild(hijo, nuevo);
```

Copia de nodo (true con subnodos, false sólo él)

```
nodo.cloneNode(booleano)
```

Establecer atributo del elemento

```
element.setAttribute("atributo", "valor");
```

Valor de atributo del elemento

```
element.getAttribute("atributo");
```

Eliminar atributo del elemento

```
element.removeAttribute("atributo");
```

Añadir escuchador de eventos (Explicado en su sección)

```
element.addEventListener("event", function);
element.addEventListener("evento", event => {
	// Instrucciones
});
```

#### Propiedades de Elementos HTML Específicos

Las siguientes propiedades por cada tipo de elemento son unas cuantas, seguramente falten muchas.

##### Propiedades de Elementos de Entrada de Texto (`<input>`, `<select>`, `<textarea>`)

Tipo de input

```
element.type
```

Valor del campo

```
element.value
```

¿Está seleccionado? (sólo tipo `checkbox` / `radio`)

```
element.checked
```

¿Está desabilitado?

```
element.disabled
```

Texto de placeholder

```
element.placeholder
```

Máxima longitud de caracteres (sólo `<input type="text">`)

```
element.maxLength
```

Mínima longitud de caracteres (sólo `<input type="text">`)

```
element.minLength
```

Tamaño de longitud de caracteres

```
element.size
```

¿Es de sólo lectura?

```
element.readOnly
```

Opciones (sólo `<select>`)

```
element.options
```

##### Propiedades de Elementos de Imagen (`<img>`)

URL de imagen

```
element.src
```

Texto alternativo

```
element.alt
```

Ancho de imagen

```
element.width
```

Alto de imagen

```
element.height
```

##### Propiedades de Elementos de Enlace (`<a>`)

URL de enlace

```
element.href
```

Apertura en misma o distinta pestaña

```
element.target
```

¿Se descarga al hacer clic?

```
element.download
```

##### Propiedades de Elementos de Listado (`<ol>`, `<li>`)

Tipo de numeración (de `<ol>`)

```
element.type
```

Valor (de `<li>`)

```
element.value
```

##### Propiedades de Elementos de Table (`<table>`, `<tr>`, `<th>`, `<td>`)

Filas por celda

```
element.rowSpan
```

Columnas por celda

```
element.colSpan
```

Título (sólo `<table>`)

```
element.caption
```

##### Propiedades de Elementos de Formulario (`<form>`)

URL de destino del formulario

```
element.action
```

Método HTTP (`GET` | `POST`)

```
element.method
```

##### Propiedades de Elementos de Estilo (`<style>`)

Hoja de estilos

```
element.sheet
```

¿Está desabilitada?

```
element.disabled
```

##### Propiedades de Elementos de Script (`<script>`)

URL del script

```
element.src
```

¿Se ejecuta de forma asíncrona?

```
element.async
```

##### Propiedades de Elementos de Audio y Vídeo (`<audio>`, `<video>`)

URL de contenido

```
element.src
```

¿Se muestran los controles?

```
element.controls
```

¿Se reproducirá automáticamente?

```
element.autoplay
```

¿Se reproducirá en bucle?

```
element.loop
```

¿Se cargará antes de interactuar?

```
element.preload
```

¿Está silenciado?

```
element.muted
```

¿Está pausado?

```
element.paused
```

Posición actual de tiempo

```
element.currentTime
```

Duración

```
element.duration
```

Volumen

```
element.volume
```

Reproducir contenido

```
element.play();
```

Pausar contenido

```
element.pause();
```

##### Propiedades de Elementos de Iframe (`<iframe>`)

URL del contenido

```
element.src
```

#### Propiedad `style`: Estilo de Elemento (Repaso CSS)

- Esto es básicamente un repaso de CSS, nada de JavaScript.

Color de fondo

```
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

```
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

```
element.style.fontSize
element.style.fontSize = "10px";
element.style.fontSize = "2em";
element.style.fontSize = "1.5rem";
element.style.fontSize = "60%";
```

Peso de texto (entre otros, negrita)

```
element.style.fontWeight
element.style.fontWeight = 100;
element.style.fontWeight = "normal|bold|bolder|lighter";
```

Fuente de texto

```
element.style.fontFamily
element.style.fontFamily = "Helvetica, sans-serif";
```

Distancia a Top, Bottom, Left, Right

```
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

```
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

```
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

```
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

```
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

```
element.style.border
element.style.border = "10px";
element.style.border = "solid";
element.style.border = "black";
element.style.border = "10px solid black";
```

Borde Top, Bottom, Left, Right

```
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

```
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

```
element.style.borderStyle
element.style.borderStyle = "none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset";
element.style.borderStyle = "none hidden";			// Verticales y Horizontales
element.style.borderStyle = "none hidden dotted";		// Superior, Horizontales e Inferior
element.style.borderStyle = "none hidden dotted dashed";	// Superior, Derecho, Inferior e Izquierdo
```

Color de borde

```
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

```
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

```
element.style.borderRadius
element.style.borderRadius = "10px";
element.style.borderRadius = "10px 20px";		// Esquinas 1,4 y Esquinas 2,3
element.style.borderRadius = "10px 20px 30px";		// Esquina 1, Esquinas 2,3 y Esquina 4
element.style.borderRadius = "10px 20px 30px 40px";	// Esquina 1, Esquina 2, Esquina 3 y Esquina 4
element.style.borderRadius = "2em";
element.style.borderRadius = "1.5rem";
```

Ancho

```
element.style.width
element.style.width = "10px";
element.style.width = "50%";
element.style.width = "2em";
element.style.width = "1.5rem";
element.style.width = "auto";
```

Alto

```
element.style.height
element.style.height = "10px";
element.style.height = "50%";
element.style.height = "2em";
element.style.height = "1.5rem";
element.style.height = "auto";
```

Posición

```
element.style.position
element.style.position = "static|absolute|fixed|relative|sticky";
```

Flotar

```
element.style.float
element.style.float = "none|left|right";
```

Display

```
element.style.display
element.style.display = "none|inline|block|flex|grid|table|inline-block|inline-grid|inline-table|...";
```

Visibilidad

```
element.style.visibility
element.style.visibility = "visible|hidden|collapse";
```

Opacidad

```
element.style.opacity
element.style.opacity = 0.5;
```

Overflow

```
element.style.overflow
element.style.overflow = "visible|hidden|clip|scroll|auto";
```

Capa en el eje Z

```
element.style.zIndex
element.style.zIndex = 10;
```

Alineación del texto

```
element.style.textAlign
element.style.textAlign = "left|right|center|justify";
```

Altura de línea de texto

```
element.style.lineHeight
element.style.lineHeight = 1.5;
element.style.lineHeight = "80%";
element.style.lineHeight = "normal";
```

Tipo de Línea de Decoración de texto

```
element.style.textDecorationLine
element.style.textDecorationLine = "none|underline|overline|line-through"; // Pueden ser varias
```

Color de Línea de Decoración de texto

```
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

```
element.style.textDecorationStyle
element.style.textDecorationStyle = "solid|double|dotted|dashed|wavy";
```

Grosor de Línea de Decoración de texto

```
element.style.textDecorationThickness
element.style.textDecorationThickness = "5px";
element.style.textDecorationThickness = "80%";
element.style.textDecorationThickness = "2em";
element.style.textDecorationThickness = "1.5rem";
element.style.textDecorationThickness = "auto";
```

Línea de Decoración de texto

```
element.style.textDecoration
element.style.textDecoration = "línea color estilo grosor"; // Da igual el orden
element.style.textDecoration = "underline overline dotted red";
```

Transformación de texto

```
element.style.textTransform
element.style.textTransform = "none|capitalize|uppercase|lowercase";
```

Espaciado entre letras

```
element.style.letterSpacing
element.style.letterSpacing = 10px;
element.style.letterSpacing = "2em";
element.style.letterSpacing = "1.5rem";
```

Espaciado entre palabras

```
element.style.wordSpacing
element.style.wordSpacing = 10px;
element.style.wordSpacing = "2em";
element.style.wordSpacing = "1.5rem";
```

Imagen de fondo

```
element.style.backgroundImage
element.style.backgroundImage = 'url("imagen.jpg")';
```

Tamaño de imagen de fondo

```
element.style.backgroundSize
element.style.backgroundSize = "auto|cover|contain";
element.style.backgroundSize = "300px 120px";
element.style.backgroundSize = "100% 100%";
element.style.backgroundSize = "2em 2em";
element.style.backgroundSize = "1.5rem 1.5rem";
```

Repetición de imagen de fondo

```
element.style.backgroundRepeat
element.style.backgroundRepeat = "repeat|repeat-x|repeat-y|no-repeat";
```

Sombra

```
element.style.boxShadow
element.style.boxShadow = "none|horizontal vertical difuminado tamaño color |inset";
element.style.boxShadow = "5px 4px";
element.style.boxShadow = "2em 2em 2em";
element.style.boxShadow = "1.5rem 1.5rem 1.5rem 1.5rem";
element.style.boxShadow = "5px 4px 3px 6px red inset";
```

Cursor

```
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

```
element.style.outline
element.style.outline = "solid";
element.style.outline = "10px solid black";
```

Ancho de Línea exterior

```
element.style.outlineWidth
element.style.outlineWidth = "medium|thin|thick";
element.style.outlineWidth = "10px";
element.style.outlineWidth = "2em";
element.style.outlineWidth = "1.5rem";
```

Estilo de Línea exterior

```
element.style.outlineStyle
element.style.outlineStyle = "none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset";
```

Color de Línea exterior

```
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

```
element.style.outlineOffset
element.style.outlineOffset = "10px";
element.style.outlineOffset = "2em";
element.style.outlineOffset = "1.5rem";
```

Transformación

```
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

```
element.style.transformOrigin
element.style.transformOrigin = "ejeX ejeY ejeZ";
element.style.transformOrigin = "left|center|right left|center|right 0";
element.style.transformOrigin = "20px 40px";
element.style.transformOrigin = "50% 50% 5";
```

Estilo de Transformación

```
element.style.transformStyle
element.style.transformStyle = "flat|preserve-3d";
```

Transición

```
element.style.transition
element.style.transition = "propiedad duracion funcion delay, ...";
element.style.transition = "width 1s linear 2s, height 2s ease, color 0.2s";
```

Propiedad de Transición

```
element.style.transitionProperty
element.style.transitionProperty = "none|all";
element.style.transitionProperty = width, height, color;
```

Duración de Transición

```
element.style.transitionDuration
element.style.transitionDuration = "3s";
```

Función de Transición

```
element.style.transitionTimingFunction
element.style.transitionTimingFunction = "linear|ease|ease-in|ease-out|ease-in-out|step-start|step-end|steps(int,start|end)|cubic-bezier(n,n,n,n)";
```

Delay de Transición

```
element.style.transitionDelay
element.style.transitionDelay = "3s";
```

Animación

```
element.style.animation
element.style.animation = "nombre duracion funcion delay iteraciones direccion aparienciaInactiva estado";
```

Nombre de Animación

```
element.style.animationName
element.style.animationName = "animacion";
element.style.animationName = "none";
```

Duración de Animación

```
element.style.animationDuration
element.style.animationDuration = "3s";
```

Función de Animación

```
element.style.animationTimingFunction
element.style.animationTimingFunction = "linear|ease|ease-in|ease-out|ease-in-out|step-start|step-end|steps(int,start|end)|cubic-bezier(n,n,n,n)";
```

Delay de Animación

```
element.style.animationDelay
element.style.animationDelay = "3s";
```

Iteraciones de Animación

```
element.style.animationIterationCount
element.style.animationIterationCount = 5;
element.style.animationIterationCount = infinite;
```

Dirección de Animación

```
element.style.animationDirection
element.style.animationDirection = "normal|reverse|alternate|alternate-reverse";
```

Apariencia inactiva de Animación

```
element.style.animationFillMode
element.style.animationFillMode = "none|forwards|backwards|both";
```

Estado de Animación

```
element.style.animationPlayState
element.style.animationPlayState = "paused|running";
```



#### Propiedad `classList`: Clases del Elemento

Añadir clase al elemento

```
element.classList.add("clase");
```

Eliminar clase al elemento

```
element.classList.remove("clase");
```

Añadir / Eliminar clase al elemento si no está / está

```
element.classList.toogle("clase");
```

¿El elemento tiene la clase?

```
element.classList.contains("clase")
```



### Event Listener

Añadir escuchador de eventos (`document` / `element`)

```
objeto.addEventListener("evento", event => {
	// Instrucciones
})
```

Lista de eventos destacables

```
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