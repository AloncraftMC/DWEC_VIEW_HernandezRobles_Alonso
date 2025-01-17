/**
 * @file lista.js
 * @author Alonso Hernández Robles
 */

/**
 * 2.4. Clase Lista
 * 
 * Atributos:
 * 
 * - listaRef: Array de objetos. Su getter devuelve la referencia original al Array. También tiene setter.
 *      Orientado para ser usado en la definición de las clases hijas ListaEstudiantes y ListaAsignaturas.
 * 
 * Métodos:
 * 
 * + constructor(): Inicializa vacío el Array #listaRef.
 * 
 * + get lista(): Array de objetos. Devuelve una copia del Array #listaRef y no la referencia.
 *      Orientado para ser usado en la creación y uso de objetos ListaEstudiantes y/o ListaAsignaturas.
 */

/**
 * @class
 * @classdesc Representa una **lista** de objetos.
 */
export class Lista{

    /**
     * @type {Object[]}
     * @private
     * @description Array de objetos.
     * - Su getter devuelve la referencia original al Array. También tiene setter.
     * > Orientado para ser usado en la definición de las clases hijas [`ListaEstudiantes`](ListaEstudiantes.html) y [`ListaAsignaturas`](ListaAsignaturas.html).
     */
    #listaRef;

    /**
     * @constructor
     * @description Crea una **lista**.
     * - Inicializa vacío el Array `#listaRef`.
     * @see #listaRef
     */
    constructor(){
        this.#listaRef = [];
    }

    /**
     * @type {Object[]}
     * @description Array de objetos.
     * - Devuelve una copia del Array `#listaRef` y no la referencia.
     * > Orientado para ser usado en la creación y uso de objetos [`ListaEstudiantes`](ListaEstudiantes.html) y/o [`ListaAsignaturas`](ListaAsignaturas.html).
     * @see #listaRef
     */
    get lista(){
        return [...this.#listaRef];
    }

    /**
     * @type {Object[]}
     * @description Getter del Array `#listaRef`.
     * @see #listaRef
     */
    get listaRef(){
        return this.#listaRef;
    }

    set listaRef(listaRef){
        this.#listaRef = listaRef;
    }

}