/**
 * @file listaAsignaturas.js
 * @author Alonso Hernández Robles
 */

import { Lista } from "./lista.js";
import { Asignatura } from "./asignatura.js";

/**
 * 2.6. Clase ListaAsignaturas
 * 
 * Métodos:
 * 
 * + constructor(...asignatura): Llama al constructor padre y añade las asignaturas mediante el método
 *      añadirAsignatura().
 * 
 * + añadirAsignatura(asignatura): Si no existe la asignatura dentro del Array listaRef, la añade. De lo
 *      contrario, devuelve un Error.
 * 
 * + eliminarAsignatura(nombre): Si existe una asignatura cuyo nombre coincide con alguno de los nombres de las
 *      asignaturas del Array listaRef, elimina de dicho Array dicha asignatura. De lo contrario, devuelve un Error.
 * 
 * + busquedaAsignaturas(exp): Array de los objetos Asignatura cuyos nombres incluyen el String exp.
 */

/**
 * @class
 * @classdesc Representa una **lista de asignaturas**.
 * @extends Lista
 * @see Lista
 */
export class ListaAsignaturas extends Lista{

    /**
     * @constructor
     * @param {...Asignatura} asignaturas Asignaturas a añadir
     * @description Crea una **lista de asignaturas**.
     * - Llama al constructor padre y añade las asignaturas mediante el método `añadirAsignatura()`.
     */
    constructor(...asignaturas){

        super();
        
        for(const asignatura of asignaturas){

            this.añadirAsignatura(asignatura);

        }

    }

    /**
     * @function
     * @param {Asignatura} asignatura Asignatura a añadir
     * @throws {Error} Si la asignatura ya está en el Array `listaRef`.
     * @description **Añade** una asignatura a la lista.
     * @see #listaRef
     */
    añadirAsignatura(asignatura){

        if(this.listaRef.filter(a => a.nombre == asignatura.nombre).length != 0) throw new Error("Ya existe la asignatura.");

        this.listaRef.push(asignatura);

    }

    /**
     * @function
     * @param {String} nombre Nombre de la asignatura a eliminar
     * @throws {Error} Si la asignatura no está en el Array `listaRef`.
     * @description **Elimina** una asignatura de la lista.
     * @see #listaRef
     */
    eliminarAsignatura(nombre){

        if(this.listaRef.filter(a => a.nombre == nombre).length == 0) throw new Error("La asignatura no se encuentra en la lista.");

        this.listaRef = this.listaRef.filter(a => a.nombre != nombre);

    }

    /**
     * @function
     * @param {String} exp Expresión a buscar
     * @returns {Asignatura[]} Asignaturas cuyos nombres incluyen el String `exp`.
     * @description **Busca** asignaturas cuyos nombres incluyen el String `exp`.
     * @see #listaRef
     */
    busquedaAsignaturas(exp){
        return this.listaRef.filter(a => a.nombre.toLowerCase().includes(exp.toLowerCase()));
    }

    /**
     * @function
     * @returns {Object[]} Array de objetos JSON de las asignaturas.
     * @description **Convierte** la lista de asignaturas en un Array de objetos JSON.
     */
    toJSON(){
        return this.listaRef.map(a => a.toJSON());
    }

}