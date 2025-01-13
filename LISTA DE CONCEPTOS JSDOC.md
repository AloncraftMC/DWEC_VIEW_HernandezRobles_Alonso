# Lista de Conceptos JSDoc
> Alonso Hernández Robles 2º DAW
> Ver. 12/01/2025

---

## Descripción Simple

Escribiendo un comentario con el siguiente formato encima de una parte del código indicará su descripción.

```js
/**
 * Esto es una descripción de lo que hace la variable nivel.
 */
let nivel;
```

## `@async`

Indica funciones asíncronas

```js
/**
 * @async
 */
async function fetchData() {
    ...
}
```

## `@author`

Indica el autor

```js
/**
 * @author Alonso Hernández
 */
let variable = 0;
```

```js
/**
 * @file script.js
 * @author Alonso Hernández
 */

...
```

## `@class`

Indica una clase

```js
/**
 * @class
 */
class Persona{
    ...
}
```

## `@classdesc`

Indica la descripción de la clase

```js
/**
 * @classdesc Representa una persona.
 */
class Persona{
    ...
}
```

## `@const` / `@constant`

Indica una constante.

```js
/**
 * @const
 */
const constante = 1;
```

```js
/**
 * @constant
 */
const constante = 1;
```

## `@constructor`

Indica un constructor en una clase

```js
class Persona{
    /**
     * @constructor
     */
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
```

## `@default`

Indica el valor por defecto de una constante o variable

```js
/**
 * @default
 */
let nivel = "fácil";
```

```js
/**
 * @default fácil
 */
let nivel;
nivel = "fácil";
```

## `@deprecated`

Indica que el código ha sido descontinuado.

```js
/**
 * @deprecated
 */
function oldSort(array){
    ...
}
```

```js
/**
 * @deprecated desde la versión 1.0
 */
function oldSort(array){
    ...
}
```

## `@description`

Indica una descripción

```js
/**
 * @description Ordena un array.
 */
function sort(array){
    ...
}
```

## `@example`

Indica un ejemplo de uso

```js
/**
 * @example
 * // Cómo usar la función sumar
 * const resultado = sumar(3, 5);
 * console.log(resultado);  // Salida: 8
 */
function sumar(a, b) {
    return a + b;
}
```

## `@exports`

No sé

```js
/**
 * @exports
 */

...
```

## `@extends`

Indica una subclase

```js
/**
 * @extends Persona
 */
class Estudiante{
    ...
}
```

## `@file`

Indica el título del archivo

```js
/**
 * @file script.js
 */

...
```

## `@fileoverview`

Indica la descripción del archivo

```js
/**
 * @fileoverview Esta es la descripción del archivo
 */

...
```

## `@func / @function / @method`

Indica una función

```js
/**
 * @func
 */
let funcion = () => {
    ...
};
```

```js
/**
 * @function
 */
let funcion = function(){
    ...
}
```

```js
/**
 * @method
 */
function miFuncion(){
    ...
}
```

## `@global`

Indica que es global

```js
/**
 * @global
 */
let eleccion;
```

## `@ignore`

Indica una función

```js
/**
 * @ignore
 */
let sinImportancia;
```

## `@implements`

Indica una clase que implementa una interfaz

```js
/**
 * @implements Animal
 */
class Perro implements Animal{
    ...
}
```

## `@import`

Nose

```js
/**
 * @imports
 */

...
```

## `@interface`

Indica una interfaz

```js
/**
 * @interface
 */
interface Animal{
    ...
}
```

## `@module`

Indica que el archivo es un módulo

```js
/**
 * @module
 */

...
```

```js
/**
 * @module nombreModulo
 */

...
```

## `@name`

Indica el título de un ítem

```js
/**
 * @name Ordenador
 */
const pc = new Maquina();
```

## `@override`

Indica sobrecarga

```js
class Clase{
    /**
     * @override
     */
    toString(){
        console.log("Hola");
    }
}
```

## `@param / @arg / @argument`

Indica un parámetro

```js
/**
 * @param parametro
 */
function miFuncion(parametro){
    ...
}
```

```js
/**
 * @param {String} nombre
 */
function saludar(nombre){
    ...
}
```

```js
/**
 * @param {Number[]} parametro - Descripción del parámetro
 */
function mostrar(numeros){
    ...
}
```

## `@private`

Indica que es privado

```js
class Clase{
    /**
     * @private
     */
    #privado;
}
```

## `@protected`

Indica que es privado

```js
class Clase{
    /**
     * @protected
     */
    _protegido;
}
```

## `@public`

Indica que es público

```js
class Clase{
    /**
     * @public
     */
    publico;
}
```

## `@returns`

Indica el tipo que devuelve

```js
/**
 * @returns {String}
 */
function saludo(){
    return "Hola";
}
```

## `@see`

Indica un enlace algo de interés

```js
class Clase{
    #atributo

    /**
     * @see #atributo
     */
    get atributo(){
        return this.atributo
    }
}
```

```js
/**
 * @see {@link https://github.com/numero1}
 */
let a = 1;
```

## `@static`

Indica algo estático

```js
class Clase{
    /**
     * @static
     */
    static estatica = 0;
}
```

## `@throws`

Indica que puede lanzar un error

```js
/**
 * @throws {Error} Este error siempre se lanzará.
 */
function cuidado(){
    throw new Error();
}
```

## `@todo`

Indica algo por implementar

```js
/**
 * @todo Es necesario realizar esta clase.
 */
class Clase{
}
```

## `@type`

Indica el tipo de una constante o variable

```js
/**
 * @type {String}
 */
const constante = "Hola";
```

```js
/**
 * @type {Persona}
 */
let persona = new Persona();
```

## `@typedef`

Indica un nuevo tipo de dato

```js
/**
 * @typedef {Object} Persona
 */
```