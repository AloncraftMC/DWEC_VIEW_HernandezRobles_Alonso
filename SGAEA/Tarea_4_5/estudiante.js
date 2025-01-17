/**
 * @file estudiante.js
 * @author Alonso Hernández Robles
 */

import { Direccion  } from "./direccion.js";
import { Asignatura } from "./asignatura.js";

/**
 * 2.2. Clase Estudiante
 * 
 * Atributos:
 * 
 * - id: String identificador único del estudiante. Será "E" seguido del número siguiente posible que no esté
 *      ocupado. Los números ocupados estarán almacenados en el atributo estático numerosOcupados, y será
 *      calculado en el constructor. Volviendo al id, tiene getter.
 * 
 * - nombre: String del nombre del estudiante. Sólo puede contener letras y espacios. De lo contrario, se
 *      inicializará como "Estudiante". Tiene getter.
 * 
 * - edad: Number de edad del estudiante. Sólo puede ser positiva. De lo contrario, se inicializará como 0.
 *      Tiene getter.
 * 
 * - direccion: Objeto Direccion con campos de la dirección del estudiante. Tiene getter.
 * 
 * - asignaturas: Array (matriz) de asignaturas de las cuales el estudiante está matriculado. Cada elemento
 *      es un Array con dos posiciones. La primera ([0]) es la instancia en sí del objeto Asignatura.
 *      La segunda ([1]) es la calificación que tiene el estudiante en dicha asignatura. Su getter devuelve
 *      una copia del Array y no la referencia.
 * 
 * - registros: Array (matriz) de registros de las matrículas y desmatrículas que se han aplicado al
 *      estudiante. Cada elemento es un Array con tres posiciones. La primera ([0]) es un String del nombre
 *      de la asignatura. La segunda ([1]) es la fecha y hora en la cual se hizo el trámite. La tercera ([2])
 *      es un String del tipo de trámite ("Matrícula" o "Desmatrícula"). Su getter devuelve un Array de
 *      Strings con la información de cada registro.
 * 
 * - numerosOcupados (estático): Array de los números de las ids usadas por los estudiantes creados en ese
 *      momento. Se actualizará dinámicamente en la creación y eliminación de estudiantes. No tiene getter.
 * 
 * Métodos:
 * 
 * + constructor(nombre, edad, direccion): Calcula el número de la id, empezando por 1 hasta que encuentre un número
 *      no ocupado, lo añade al Array estático numerosOcupados, y establece la id como el String "E" concatenado de
 *      dicho número. Si el nombre es null o contiene caracteres que no sean letras o espacios, se establece como
 *      "Estudiante". De lo contrario, se establece como tal. Si la edad es un número negativo, se establece como 0.
 *      De lo contrario, se establece como tal. Se inicializan vacíos los Arrays asignaturas y registros.
 * 
 * + get promedio(): Number del promedio de la nota de cada asignatura del estudiante. Devuelve el String
 *      "Sin evaluar" si ninguna nota es un número.
 * 
 * + toString(): String con el id, nombre y edad del estudiante.
 * 
 * + matricular(...asignaturas): Introduce en el Array asignaturas Arrays de dos posiciones, tantos
 *      como asignaturas haya, y en la primera posición ([0]) de cada uno de estos, cada una de las instancias
 *      de dichas asignaturas. Introduce un nuevo registro generado en el Array registros por cada una de las asignaturas.
 * 
 * + desmatricular(...asignaturas): Elimina del Array asignaturas las asignaturas cuyo nombre coincida
 *      con los nombres de ...asignaturas e introduce un nuevo registro generado en el Array registros por cada
 *      asignatura de la cual se ha desmatriculado el estudiante.
 * 
 * + calificar(asignatura, nota): Si la asignatura está presente en el Array asignaturas y la nota es un
 *      número entre 0 y 10 (incluidos), busca el Array que contiene la asignatura dentro del Array asignaturas
 *      y establece en la segunda posición ([1]) la nota. Además añade dicha calificación a la lista de
 *      calificaciones de la asignatura mediante el método añadirCalificacion(). De lo contrario,
 *      devuelve un Error correspondiente.
 * 
 * + eliminarNumeroOcupado(numero) (estático): Elimina numero del Array estático numerosOcupados.
 */

/**
 * @class
 * @classdesc Representa un **estudiante**.
 */
export class Estudiante{

    /**
     * @type {String}
     * @private
     * @description **Identificador** único del estudiante. Tiene getter.
     * - Será `"E"` seguido del número siguiente posible que no esté ocupado.
     * - Los números ocupados estarán almacenados en el atributo estático `#numerosOcupados`, y será calculado en el constructor.
     */
    #id;

    /**
     * @type {String}
     * @private
     * @description **Nombre** del estudiante. Tiene getter.
     * - Sólo puede contener letras y espacios. De lo contrario, se inicializará como `"Estudiante"`.
     */
    #nombre;

    /**
     * @type {Number}
     * @private
     * @description **Edad** del estudiante. Tiene getter.
     * - Sólo puede ser positiva. De lo contrario, se inicializará como `0`.
     */
    #edad;

    /**
     * @type {Direccion}
     * @private
     * @description **Dirección** del estudiante. Tiene getter.
     */
    #direccion;

    /**
     * @type {Array[]}
     * @private
     * @description **Asignaturas** de las cuales el estudiante está matriculado y sus correspondientes **calificaciones**.
     * - Cada elemento es un Array con dos posiciones.
     *      - La primera (`[0]`) es la instancia en sí del objeto `Asignatura`.
     *      - La segunda (`[1]`) es la calificación que tiene el estudiante en dicha asignatura.
     * - Su getter devuelve una copia del Array y no la referencia.
     */
    #asignaturas;

    /**
     * @type {String[]}
     * @private
     * @description **Registros** de matriculaciones y desmatriculaciones que se han aplicado al estudiante.
     * - Cada elemento es un Array con tres posiciones.
     *      - La primera (`[0]`) es un String del nombre de la asignatura.
     *      - La segunda (`[1]`) es la fecha y hora en la cual se hizo el trámite.
     *      - La tercera (`[2]`) es un String del tipo de trámite (`"Matriculación"` o `"Desmatriculación"`).
     * - Su getter devuelve un Array de Strings con la información de cada registro.
     */
    #registros;
    
    /**
     * @type {Number[]}
     * @private
     * @static
     * @description **Números** de las ids usadas por los estudiantes creados en ese momento. No tiene getter.
     * - Se actualizará dinámicamente en la creación y eliminación de estudiantes.
     */
    static #numerosOcupados = [];

    /**
     * @constructor
     * @param {String} nombre Nombre del estudiante
     * @param {String} edad Edad del estudiante
     * @param {Direccion} direccion Dirección del estudiante
     * @description Crea un **estudiante** con los datos proporcionados.
     * - Calcula el número de la id, empezando por `1` hasta que encuentre un número no ocupado, lo añade al Array estático `#numerosOcupados`, y establece la id como el String `"E"` concatenado de dicho número.
     * - Si el nombre es `null` o contiene caracteres que no sean letras o espacios, se establece como `"Estudiante"`. De lo contrario, se establece como tal.
     * - Si la edad es un número negativo, se establece como `0`. De lo contrario, se establece como tal.
     * - Se inicializan vacíos los Arrays `#asignaturas` y `#registros`.
     * @see #id
     * @see #nombre
     * @see #edad
     * @see #direccion
     * @see #asignaturas
     * @see #registros
     */
    constructor(nombre, edad, direccion){

        let numeroId = 1;

        while (Estudiante.#numerosOcupados.includes(numeroId)) {
            numeroId++;
        }

        Estudiante.#numerosOcupados.push(numeroId);
        this.#id = "E" + numeroId;

        this.#nombre = (nombre != null) ? ((nombre.match(/^[a-zA-ZáéíóúüÁÉÍÓÚÜ ]+$/)) ? nombre : "Estudiante") : "Estudiante";

        this.#edad = (!Number.isNaN(edad) && Number.isInteger(edad) && edad > 0) ? edad : 0;

        this.#direccion = direccion;
        this.#asignaturas = [];
        this.#registros = [];

    }

    /**
     * @type {String}
     * @description Getter del identificador del estudiante.
     * @see #id
     */
    get id(){
        return this.#id;
    }

    /**
     * @type {String}
     * @description Getter del nombre del estudiante.
     * @see #nombre
     */
    get nombre(){
        return this.#nombre;
    }

    /**
     * @type {Number}
     * @description Getter de la edad del estudiante.
     * @see #edad
     */
    get edad(){
        return this.#edad;
    }

    /**
     * @type {Direccion}
     * @description Getter de la dirección del estudiante.
     * @see #direccion
     */
    get direccion(){
        return this.#direccion;
    }

    /**
     * @type {Array[]}
     * @description Getter de las asignaturas del estudiante con sus correspondientes calificaciones.
     * @see #asignaturas
     */
    get asignaturas(){
        return [...this.#asignaturas];
    }

    /**
     * @type {String[]}
     * @description Getter de los registros del estudiante.
     * @see #registros
     */
    get registros(){

        const resultado = [];
        
        for(const registro of this.#registros){
            
            const asignatura = registro[0];
            const fecha = registro[1].toLocaleDateString("es-ES", {weekday: "long", year: "numeric", month: "short", day: "numeric"});
            const hora = registro[1].toLocaleTimeString("es-ES");
            const tipo = registro[2];

            resultado.push("[\t" + tipo + "\t|\t" + asignatura + "\t|\t" + fecha + " a las " + hora + "\t]");

        }
        
        return resultado;

    }

    /**
     * @type {String | Number}
     * @description **Promedio** de las calificaciones de las asignaturas del estudiante.
     * @see #asignaturas
     */
    get promedio(){

        const asignaturasCalificadas = this.#asignaturas.filter(a => typeof a[1] != "string");
        
        if(asignaturasCalificadas.length == 0) return "Sin evaluar";
        
        const resultado = asignaturasCalificadas.reduce((suma, asignatura) => suma += asignatura[1], 0) / asignaturasCalificadas.length;
        
        return Number(resultado).toFixed(2);

    }

    /**
     * @function
     * @override
     * @returns {String} Id, nombre y edad del estudiante.
     * @description Devuelve el id, nombre y edad del estudiante.
     * @example "[E1] Alonso Hernández Robles, 20"
     */
    toString(){
        return "[" + this.#id + "] " + this.#nombre + ", " + this.#edad;
    }

    /**
     * @function
     * @param  {...Asignatura} asignaturas Asignaturas a matricular
     * @description **Matricula** al estudiante de las asignaturas proporcionadas y genera un registro con dicha información.
     * @see #asignaturas
     * @see #registros
     */
    matricular(...asignaturas){

        for(const asignatura of asignaturas){

            if(this.#asignaturas.filter(a => a[0].nombre == asignatura.nombre).length == 0){

                this.#asignaturas.push([asignatura, "Sin evaluar"]);
                this.#registros.push([asignatura.nombre, new Date(), "Matriculación"]);

            }

        }

    }

    /**
     * @function
     * @param  {...Asignatura} asignaturas Asignaturas a desmatricular
     * @description **Desmatricula** al estudiante de las asignaturas proporcionadas y genera un registro con dicha información.
     * @see #asignaturas
     * @see #registros
     */
    desmatricular(...asignaturas){
        
        for(const asignatura of asignaturas){

            if(this.#asignaturas.map(a => a[0].nombre).includes(asignatura.nombre)){

                this.#asignaturas = this.#asignaturas.filter(a => a[0].nombre != asignatura.nombre);
                this.#registros.push([asignatura.nombre, new Date(), "Desmatriculación"]);

            }

        }

    }

    /**
     * @function
     * @param {Asignatura} asignatura Asignatura a calificar
     * @param {Number} nota Nota a asignar
     * @throws {Error} Si la asignatura no está en el Array `#asignaturas`.
     * @throws {Error} Si la nota no está entre `0` y `10`.
     * @description **Califica** al estudiante en la asignatura proporcionada con la nota proporcionada.
     * @see #asignaturas
     */
    calificar(asignatura, nota){

        if(!this.#asignaturas.map(a => a[0].nombre).includes(asignatura.nombre)) throw new Error("El estudiante no está cursando la asignatura.");

        if(nota < 0 || nota > 10) throw new Error("La nota debe estar entre 0 y 10.");

        for (const asig of this.#asignaturas) {

            if (asig[0].nombre == asignatura.nombre) {

                asig[1] = parseFloat(nota);
                asignatura.añadirCalificacion(nota);
                break;

            }
            
        }

    }

    /**
     * @function
     * @param {Number} numero Número de la id a eliminar
     * @static
     * @description **Elimina** un número de la lista de números ocupados.
     * @see #numerosOcupados
     */
    static eliminarNumeroOcupado(numero){
        Estudiante.#numerosOcupados = Estudiante.#numerosOcupados.filter(n => n != numero);
    }

}