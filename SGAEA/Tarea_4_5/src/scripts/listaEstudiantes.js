/**
 * @file listaEstudiantes.js
 * @author Alonso Hernández Robles
 */

import { Lista } from "./lista.js";
import { Estudiante } from "./estudiante.js";

/**
 * 2.5. Clase ListaEstudiantes
 * 
 * Métodos:
 * 
 * + constructor(...estudiantes): Llama al constructor padre y añade los estudiantes mediante el método
 *      añadirEstudiante().
 * 
 * + get promedioGeneral(): Number del promedio de los promedios de todos los estudiantes del Array listaRef.
 *      Devuelve el String "Sin evaluar" si ningún promedio es un número.
 * 
 * + mostrarReporte(): Muestra mediante console.log(), console.groupCollapsed() y console.groupEnd() el reporte
 *      con la información de todos los estudiantes del Array listaRef. console.log() muestra por
 *      consola un mensaje. console.groupCollapsed() muestra por consola un mensaje cómo título de una
 *      carpeta colapsada de los mensajes que vayan a continuación. console.groupEnd() indica el final de
 *      dicha carpeta de mensajes.
 * 
 * + añadirEstudiante(estudiante): Si no existe el estudiante dentro del Array listaRef, lo añade y ordena dicho
 *      Array según los números de las ids de los estudiantes. De lo contrario, devuelve un Error.
 * 
 * + eliminarEstudiante(id): Elimina del Array listaRef el estudiante cuya id sea la misma que id y elimina el
 *      número ocupado de dicha id mediante el método estático eliminarNumeroOcupado().
 * 
 * + busquedaEstudiantes(exp): Array de los objetos Estudiante cuyos nombres incluyen el String exp.
 */

/**
 * @class
 * @classdesc Representa una **lista de estudiantes**.
 * @extends Lista
 * @see Lista
 */
export class ListaEstudiantes extends Lista{

    /**
     * @constructor
     * @param {...Estudiante} estudiantes Estudiantes a añadir
     * @description Crea una **lista de estudiantes**.
     * - Llama al constructor padre y añade los estudiantes mediante el método `añadirEstudiante()`.
     */
    constructor(...estudiantes){

        super();
        
        for(const estudiante of estudiantes){

            this.añadirEstudiante(estudiante);

        }

    }

    /**
     * @type {String | Number}
     * @description **Promedio general**, de los promedios de los estudiantes.
     * - Devuelve `"Sin evaluar"` si ningún promedio es un número.
     * @see #listaRef
     */
    get promedioGeneral(){

        const estudiantesCalificados = this.listaRef.filter(e => !isNaN(Number(e.promedio)));
        
        if(estudiantesCalificados.length == 0) return "Sin evaluar";
        
        const resultado = estudiantesCalificados.reduce((suma, estudiante) => suma += Number.parseFloat(estudiante.promedio), 0) / estudiantesCalificados.length;
    
        return Number(resultado).toFixed(2);

    }
    
    /**
     * @function
     * @description **Muestra**, mediante `console.log()`, `console.groupCollapsed()` y `console.groupEnd()`, el reporte con la información de todos los estudiantes del Array `listaRef`.
     * 
     * > `console.log()` muestra por consola un mensaje.
     * >
     * > `console.groupCollapsed()` muestra por consola un mensaje cómo título de una carpeta colapsada de los mensajes que vayan a continuación.
     * >
     * > `console.groupEnd()` indica el final de dicha carpeta de mensajes.
     * @see #listaRef
     */
    mostrarReporte(){

        for(const estudiante of this.listaRef){

            console.groupCollapsed("[" + estudiante.id + "] " + estudiante.nombre, "boton");

                console.groupCollapsed("\tDatos Personales", "subtitulo");

                    console.log("\t\t\tNombre: " + estudiante.nombre);
                    console.log("\t\t\tEdad: " + estudiante.edad);

                    console.groupCollapsed("\t\t\tDirección");

                        console.log("\t\t\t\t\tCalle: " + estudiante.direccion.calle);
                        console.log("\t\t\t\t\tNúmero: " + estudiante.direccion.numero);
                        console.log("\t\t\t\t\tPiso: " + estudiante.direccion.piso);
                        console.log("\t\t\t\t\tCódigo Postal: " + estudiante.direccion.codigoPostal);
                        console.log("\t\t\t\t\tProvincia: " + estudiante.direccion.provincia);
                        console.log("\t\t\t\t\tLocalidad: " + estudiante.direccion.localidad);

                    console.groupEnd();

                console.groupEnd();

                console.groupCollapsed("\tCalificaciones", "subtitulo");

                    for(const asignatura of estudiante.asignaturas){

                        const notaAsignatura = (typeof asignatura[1] == "string") ? asignatura[1] : Number(asignatura[1]).toFixed(2);
                        console.log("\t\t\t" + asignatura[0].nombre + ": " + notaAsignatura);

                    }

                    console.log("\t\t\tPromedio: " + estudiante.promedio, "font-weight: bold;");

                console.groupEnd();

            console.groupEnd();

        }

    }

    /**
     * @function
     * @param {Estudiante} estudiante Estudiante a añadir
     * @throws {Error} Si el estudiante ya está en el Array `listaRef`.
     * @description **Añade** un estudiante a la lista.
     * - Ordena el Array según los números de las ids de los estudiantes.
     * @see #listaRef
     */
    añadirEstudiante(estudiante){

        if(this.listaRef.filter(e => e.id == estudiante.id).length != 0) throw new Error("Ya existe el estudiante.");

        this.listaRef.push(estudiante);
        this.listaRef.sort((e1, e2) => parseInt(e1.id.slice(1)) - parseInt(e2.id.slice(1)));

    }

    /**
     * @function
     * @param {String} id Id del estudiante a eliminar
     * @throws {Error} Si el estudiante no está en el Array `listaRef`.
     * @description **Elimina** un estudiante de la lista.
     * - Elimina el número ocupado de la id del estudiante.
     * @see #listaRef
     */
    eliminarEstudiante(id){
        
        if(this.listaRef.filter(e => e.id != id).length == this.listaRef.length) throw new Error("El estudiante no se encuentra en la lista.");
        
        this.listaRef = this.listaRef.filter(e => e.id != id);
        Estudiante.eliminarNumeroOcupado(id.slice(1));

    }

    /**
     * @function
     * @param {String} exp Expresión a buscar
     * @returns {Estudiante[]} Estudiantes cuyos nombres incluyen el String `exp`.
     * @description **Busca** estudiantes cuyos nombres incluyen el String `exp`.
     * @see #listaRef
     */
    busquedaEstudiantes(exp){
        return this.listaRef.filter(e => e.nombre.toLowerCase().includes(exp.toLowerCase()));
    }

}