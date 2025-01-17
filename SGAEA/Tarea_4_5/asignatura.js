/**
 * @file asignatura.js
 * @author Alonso Hernández Robles
 */

/**
 * 2.3. Clase Asignatura
 * 
 * Atributos:
 * 
 * - nombre: String del nombre de la asignatura. Sólo puede contener letras y espacios. De lo contrario, se
 *      inicializará como "Asignatura". Tiene getter.
 * 
 * - calificaciones: Array de números de las calificaciones de todos los estudiantes en la asignatura. No tiene getter.
 * 
 * Métodos:
 * 
 * + constructor(nombre): Si el nombre contiene caracteres que no sean letras o espacios, se
 *      establece como "Asignatura". De lo contrario, se establece como tal. Se inicializa vacío el Array
 *      calificaciones.
 * 
 * + get promedio(): Number del promedio de los números del Array calificaciones. Devuelve el String
 *      "Sin evaluar" si dicho array está vacío.
 * 
 * + toString(): Devuelve el nombre de la asignatura (Ya que el objeto Asignatura no contiene más
 *      atributos sobre la información de la instancia, el método es idéntico a get nombre(), pero se declarará
 *      y usará con propósitos semánticos);
 * 
 * + añadirCalificacion(calificacion): Añade calificacion al Array calificaciones.
 * 
 * + eliminarCalificacion(calificacion): Elimina una ocurrencia cualquiera de calificacion en el Array calificaciones.
 */

/**
 * @class
 * @classdesc Representa una **asignatura**.
 */
export class Asignatura{

    /**
     * @type {String}
     * @private
     * @description **Nombre** de la asignatura. Tiene getter.
     * - Sólo puede contener letras y espacios. De lo contrario, se inicializará como `"Asignatura"`.
     */
    #nombre;

    /**
     * @type {Number[]}
     * @private
     * @description **Calificaciones** de los estudiantes en la asignatura. No tiene getter.
     */
    #calificaciones;

    /**
     * @constructor
     * @param {String} nombre Nombre de la asignatura
     * @description Crea una **asignatura** con los datos proporcionados.
     * - Si el nombre contiene caracteres que no sean letras o espacios, se establece como `"Asignatura"`. De lo contrario, se establece como tal.
     * - Se inicializa vacío el Array `#calificaciones`.
     * @see #nombre
     * @see #calificaciones
     */
    constructor(nombre){
        
        this.#nombre = (nombre.match(/^[a-zA-ZáéíóúüÁÉÍÓÚÜ ]+$/)) ? nombre : "Asignatura";
        this.#calificaciones = [];

    }

    /**
     * @type {String}
     * @description Getter del nombre de la asignatura.
     * @see #nombre
     */
    get nombre(){
        return this.#nombre;
    }

    /**
     * @type {Number}
     * @description **Promedio** de las calificaciones de los estudiantes en la asignatura.
     * - Devuelve `"Sin evaluar"` si no hay calificaciones.
     * @see #calificaciones
     */
    get promedio(){

        if(this.#calificaciones.length == 0) return "Sin evaluar";
        
        const resultado = this.#calificaciones.reduce((suma, calificacion) => suma += Number.parseFloat(calificacion), 0) / this.#calificaciones.length;
    
        return Number(resultado).toFixed(2);

    }

    /**
     * @function
     * @override
     * @returns {String} Nombre de la asignatura.
     * @description Devuelve el nombre de la asignatura.
     * > Ya que el objeto Asignatura no contiene más atributos sobre la información de la instancia, el método es idéntico a `get nombre()`, pero se declarará y usará con propósitos semánticos.
     * @example "DWEC"
     */
    toString(){
        return this.#nombre;
    }

    /**
     * @function
     * @param {Number} calificacion Calificación a añadir
     * @description **Añade** una calificación a la asignatura.
     * > Saber a qué estudiante está correspondida la calificación no es relevante, para ello dicha información ya se encuentra almacenada dentro de la propiedad privada [`#asignaturas`](Estudiante.html#asignaturas) de la clase [`Estudiante`](Estudiante.html).
     * @see #calificaciones
     */
    añadirCalificacion(calificacion){
        this.#calificaciones.push(calificacion);
    }

    /**
     * @function
     * @param {Number} calificacion Calificación a eliminar
     * @throws {Error} Si la calificación no está en el Array #calificaciones.
     * @description **Elimina** una ocurrencia cualquiera de `calificacion` en el Array `#calificaciones`.
     * > Saber a qué estudiante está correspondida la calificación no es relevante, para ello dicha información ya se encuentra almacenada dentro de la propiedad privada [`#asignaturas`](Estudiante.html#asignaturas) de la clase [`Estudiante`](Estudiante.html).
     * @see #calificaciones
     */
    eliminarCalificacion(calificacion){

        const indiceCalificacion = this.#calificaciones.indexOf(calificacion);

        if(indiceCalificacion == -1) throw new Error("Ningún estudiante ha sacado dicha calificación.");

        this.#calificaciones.splice(indiceCalificacion, 1);

    }

}