/** 
 ╭-----------------------------------------------------------------------------------------------╮
 | SGAEA - Sistema de Gestión Académica de Estudiantes y Asignaturas                             |
 | Alonso Hernández Robles 2º DAW AULA                                                           |
 |                                                                                               |
 | Github Pages: https://aloncraftmc.github.io/DWEC_VIEW_HernandezRobles_Alonso/SGAEA/index.html |
 | (Es necesario abrir la consola de las DevTools antes de cargar la página)                     |
 ╰-----------------------------------------------------------------------------------------------╯
 */

/**
 * 1. Redefinición de console.log() y console.groupCollapsed()
 * 
 * En esta sección se redefinen los métodos console.log() y console.groupCollapsed() para aplicar
 * estilos a los textos en función de su finalidad.
 * 
 * console.log() hace uso de estilos asemejados a botones, títulos y subtítulos.
 * console.groupCollapsed() hace uso de estilos asemejados a botones y subtítulos.
 * Este método muestra los elementos console.log() que tenga anidados dentro, similar a un <details>.
 * 
 * Por defecto, los métodos mostrarán un texto con la fuente 'Rubik', importada desde la etiqueta
 * <style> de index.html.
 */

const defaultConsoleLog = console.log;
console.log = (texto, estilos = "", otrosEstilos = "") => {
    
    texto = "%c" + texto;

    switch(estilos){

        case "boton":
            estilos = "padding: 10px;";
            estilos += "border: 5px solid gray;";
            estilos += "border-radius: 10px;";
            estilos += "background-color: white;";
            estilos += "color: black;";
            estilos += "font-size: 20px;";
            estilos += "margin: 5px;";
            break;

        case "titulo":
            estilos = "font-size: 50px;";
            estilos += "margin: 5px;";
            break;

        case "subtitulo":
            estilos = "font-size: 30px;"
            estilos += "color: #BBBBBB;";
            estilos += "padding: 2px;";
            break;

        default:
            estilos += "font-size: 20px;";
            estilos += "padding: 10px;";
            break;

    }

    estilos += "font-family: Rubik, sans-serif;" + otrosEstilos;
    defaultConsoleLog.call(console, texto, estilos);

};

const defaultConsoleGroupCollapsed = console.groupCollapsed;
console.groupCollapsed = (texto, estilos = "") => {
    
    texto = "%c" + texto;

    switch(estilos){

        case "boton":
            estilos = "padding: 10px;";
            estilos += "border: 5px solid gray;";
            estilos += "border-radius: 10px;";
            estilos += "background-color: white;";
            estilos += "color: black;";
            estilos += "font-size: 30px;";
            estilos += "margin: 5px;";
            break;

        case "subtitulo":
            estilos = "font-size: 30px;"
            estilos += "padding: 10px;";
            break;

        default:
            estilos += "font-size: 20px;";
            estilos += "padding: 10px;";
            break;

    }

    estilos += "font-family: 'Rubik', sans-serif; font-weight: normal;";
    defaultConsoleGroupCollapsed.call(console, texto, estilos);

};

/**
 * 2. Definición de Clases
 * 
 * En esta parte se definen las clases Direccion, Estudiante, Asignatura, ListaEstudiantes y ListaAsignaturas.
 */

/**
 * 2.1. Clase Direccion
 * 
 * La clase Direccion tiene los atributos calle, numero, piso, codigoPostal, provincia y localidad, todos son
 * tipo String y tienen getter. En el constructor se valida el código postal (5 números). Si no es válido, se
 * establecerá como "00000". Contiene un toString() que muestra todas las propiedades.
 */

class Direccion{

    #calle;
    #numero;
    #piso;
    #codigoPostal;
    #provincia;
    #localidad;

    constructor(calle, numero, piso, codigoPostal, provincia, localidad){

        this.#calle = calle;
        this.#numero = numero;
        this.#piso = piso;
        this.#codigoPostal = (new String(codigoPostal).match(/^[0-9]{5}$/)) ? codigoPostal : "00000";
        this.#provincia = provincia;
        this.#localidad = localidad;

    }

    get calle(){
        return this.#calle;
    }

    get numero(){
        return this.#numero;
    }

    get piso(){
        return this.#piso;
    }

    get codigoPostal(){
        return this.#codigoPostal;
    }

    get provincia(){
        return this.#provincia;
    }

    get localidad(){
        return this.#localidad;
    }

    toString(){
        return this.#calle + " " + this.#numero + ", " + this.#piso + " - " + this.#codigoPostal + " " + this.#localidad + " (" + this.#provincia + ")";
    }

}

/**
 * 2.2. Clase Estudiante
 * 
 * Atributos:
 * 
 * - id: String indentificador único del estudiante. Será "E" seguido del número siguiente posible que no esté
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

class Estudiante{

    #id;
    #nombre;
    #edad;
    #direccion;
    #asignaturas;
    #registros;

    static #numerosOcupados = [];

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

    get id(){
        return this.#id;
    }

    get nombre(){
        return this.#nombre;
    }

    get edad(){
        return this.#edad;
    }

    get direccion(){
        return this.#direccion;
    }

    get asignaturas(){
        return [...this.#asignaturas];
    }

    get registros(){

        const resultado = [];

        for(const registro of this.#registros){

            const asignatura = registro[0];
            const fecha = registro[1];
            const tipo = registro[2];

            const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
            const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
            const diaSemana = diasSemana[fecha.getDay()];
            const dia = fecha.getDate();
            const mes = meses[fecha.getMonth()]; 
            const anio = fecha.getFullYear();
            const horas = String(fecha.getHours()).padStart(2, '0');
            const minutos = String(fecha.getMinutes()).padStart(2, '0');
            const segundos = String(fecha.getSeconds()).padStart(2, '0');

            const fechaEspañol = diaSemana + ", " + dia + " de " + mes + " de " + anio + " a las " + horas + ":" + minutos + ":" + segundos;

            resultado.push("[\t" + tipo + "\t|\t" + asignatura + "\t|\t" + fechaEspañol + "\t]");

        }
        
        return resultado;

    }

    get promedio(){

        const asignaturasCalificadas = this.#asignaturas.filter(a => typeof a[1] != "string");
        
        if(asignaturasCalificadas.length == 0) return "Sin evaluar";
        
        const resultado = asignaturasCalificadas.reduce((suma, asignatura) => suma += asignatura[1], 0) / asignaturasCalificadas.length;
        
        return Number(resultado).toFixed(2);

    }

    toString(){
        return "[" + this.#id + "] " + this.#nombre + ", " + this.#edad;
    }

    matricular(...asignaturas){

        for(const asignatura of asignaturas){

            if(!this.#asignaturas.map(a => a[0].nombre).includes(asignatura.nombre)){

                this.#asignaturas.push([asignatura, "Sin evaluar"]);
                this.#registros.push([asignatura.nombre, new Date(), "Matriculación"]);

            }

        }

    }

    desmatricular(...asignaturas){
        
        for(const asignatura of asignaturas){

            if(this.#asignaturas.map(a => a[0].nombre).includes(asignatura.nombre)){

                this.#asignaturas = this.#asignaturas.filter(a => a[0].nombre != asignatura.nombre);
                this.#registros.push([asignatura.nombre, new Date(), "Desmatriculación"]);

            }

        }

    }

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

    static eliminarNumeroOcupado(numero){
        Estudiante.#numerosOcupados = Estudiante.#numerosOcupados.filter(n => n != numero);
    }

}

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

class Asignatura{

    #nombre;
    #calificaciones;

    constructor(nombre){
        
        this.#nombre = (nombre.match(/^[a-zA-ZáéíóúüÁÉÍÓÚÜ ]+$/)) ? nombre : "Asignatura";
        this.#calificaciones = [];

    }

    get nombre(){
        return this.#nombre;
    }

    get promedio(){

        if(this.#calificaciones.length == 0) return "Sin evaluar";
        
        const resultado = this.#calificaciones.reduce((suma, calificacion) => suma += Number.parseFloat(calificacion), 0) / this.#calificaciones.length;
    
        return Number(resultado).toFixed(2);

    }

    toString(){
        return this.#nombre;
    }

    añadirCalificacion(calificacion){
        this.#calificaciones.push(calificacion);
    }

    eliminarCalificacion(calificacion){

        const indiceCalificacion = this.#calificaciones.indexOf(calificacion);

        if(indiceCalificacion == -1) throw new Error("Ningún estudiante ha sacado dicha calificación.");

        this.#calificaciones.splice(indiceCalificacion, 1);

    }

}

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
 * + constructor(): Inicializa vacío el Array listaRef.
 * 
 * + get lista(): Array de objetos. Devuelve una copia del Array listaRef y no la referencia.
 *      Orientado para ser usado en la creación y uso de objetos ListaEstudiantes y/o ListaAsignaturas.
 */

class Lista{

    #listaRef;

    constructor(){
        this.#listaRef = [];
    }

    get lista(){
        return [...this.#listaRef];
    }

    get listaRef(){
        return this.#listaRef;
    }

    set listaRef(listaRef){
        this.#listaRef = listaRef;
    }

}

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

class ListaEstudiantes extends Lista{

    constructor(...estudiantes){

        super();
        
        for(const estudiante of estudiantes){

            this.añadirEstudiante(estudiante);

        }

    }

    get promedioGeneral(){

        const estudiantesCalificados = this.listaRef.filter(e => !isNaN(Number(e.promedio)));
        
        if(estudiantesCalificados.length == 0) return "Sin evaluar";
        
        const resultado = estudiantesCalificados.reduce((suma, estudiante) => suma += Number.parseFloat(estudiante.promedio), 0) / estudiantesCalificados.length;
    
        return Number(resultado).toFixed(2);

    }

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

    añadirEstudiante(estudiante){

        if(this.listaRef.filter(e => e.id == estudiante.id).length != 0) throw new Error("Ya existe el estudiante.");

        this.listaRef.push(estudiante);
        this.listaRef.sort((e1, e2) => parseInt(e1.id.slice(1)) - parseInt(e2.id.slice(1)));

    }

    eliminarEstudiante(id){
        
        if(this.listaRef.filter(e => e.id != id).length == this.listaRef.length) throw new Error("El estudiante no se encuentra en la lista.");
        
        this.listaRef = this.listaRef.filter(e => e.id != id);
        Estudiante.eliminarNumeroOcupado(id.slice(1));

    }

    busquedaEstudiantes(exp){
        return this.listaRef.filter(e => e.nombre.toLowerCase().includes(exp.toLowerCase()));
    }

}

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

class ListaAsignaturas extends Lista{

    constructor(...asignaturas){

        super();
        
        for(const asignatura of asignaturas){

            this.añadirAsignatura(asignatura);

        }

    }

    añadirAsignatura(asignatura){

        if(this.listaRef.filter(a => a.nombre == asignatura.nombre).length != 0) throw new Error("Ya existe la asignatura.");

        this.listaRef.push(asignatura);

    }

    eliminarAsignatura(nombre){

        if(this.listaRef.filter(a => a.nombre == nombre).length == 0) throw new Error("La asignatura no se encuentra en la lista.");

        this.listaRef = this.listaRef.filter(a => a.nombre != nombre);

    }

    busquedaAsignaturas(exp){
        return this.listaRef.filter(a => a.nombre.toLowerCase().includes(exp.toLowerCase()));
    }

}

/**
 * 3. Programa Principal.
 * 
 * En esta sección se declara un objeto ListaEstudiantes, otro objeto ListaAsignaturas, y un Array de objetos
 * Direccion llamado listaDirecciones. Seguidamente, se entra en el bucle while.
 * 
 * Extra: Se inicializan y añaden 5 direcciones, 5 estudiantes y 5 asignaturas.
 *        Se matriculan a algunos estudiantes de algunas asignaturas.
 *        Se desmatriculan a algunos estudiantes de algunas asignaturas.
 *        Se califican a algunos estudiantes en algunas asignaturas.
 * 
 * Por siempre, se preguntará la elección principal de la acción a realizar.
 * La variable eleccion será la variable que siempre obtenga el valor de window.prompt().
 */

const listaEstudiantes = new ListaEstudiantes();
const listaAsignaturas = new ListaAsignaturas();
let listaDirecciones = [];
let eleccion;

// Creación de Direcciones

listaDirecciones.push(new Direccion("C/ Afán de Ribera", 15, "2ºA", 18005, "Granada", "Granada"));
listaDirecciones.push(new Direccion("C/ Aliatar", 17, "Piso Bajo", 18110, "Granada", "Híjar"));
listaDirecciones.push(new Direccion("C/ Canalejas", 5, "2ºB", 23790, "Jaén", "Porcuna"));
listaDirecciones.push(new Direccion("C/ Paraguay", 1, "Piso Bajo", 18210, "Granada", "Peligros"));
listaDirecciones.push(new Direccion("C/ Málaga", 23, "5ºC", 29770, "Málaga", "Torrox"));

// Creación de Estudiantes

listaEstudiantes.añadirEstudiante(new Estudiante("Alonso Hernández Robles", 21, listaDirecciones[0]));
listaEstudiantes.añadirEstudiante(new Estudiante("Álex Galán Varo", 20, listaDirecciones[1]));
listaEstudiantes.añadirEstudiante(new Estudiante("Ana Quero de La Rosa", 19, listaDirecciones[2]));
listaEstudiantes.añadirEstudiante(new Estudiante("Adrián Martín Vázquez", 19, listaDirecciones[3]));
listaEstudiantes.añadirEstudiante(new Estudiante("Javier Escobar Vela", 22, listaDirecciones[4]));

// Creación de Asignaturas

listaAsignaturas.añadirAsignatura(new Asignatura("DWEC"));
listaAsignaturas.añadirAsignatura(new Asignatura("DWES"));
listaAsignaturas.añadirAsignatura(new Asignatura("DEAW"));
listaAsignaturas.añadirAsignatura(new Asignatura("DIW"));
listaAsignaturas.añadirAsignatura(new Asignatura("EIE"));

// Matriculación de Estudiantes

listaEstudiantes.lista[0].matricular(listaAsignaturas.lista[0]);
listaEstudiantes.lista[0].matricular(listaAsignaturas.lista[1]);
listaEstudiantes.lista[0].matricular(listaAsignaturas.lista[2]);
listaEstudiantes.lista[0].matricular(listaAsignaturas.lista[3]);
listaEstudiantes.lista[0].matricular(listaAsignaturas.lista[4]);

listaEstudiantes.lista[1].matricular(listaAsignaturas.lista[0]);
listaEstudiantes.lista[1].matricular(listaAsignaturas.lista[1]);
listaEstudiantes.lista[1].matricular(listaAsignaturas.lista[2]);
listaEstudiantes.lista[1].matricular(listaAsignaturas.lista[3]);

listaEstudiantes.lista[2].matricular(listaAsignaturas.lista[1]);
listaEstudiantes.lista[2].matricular(listaAsignaturas.lista[2]);
listaEstudiantes.lista[2].matricular(listaAsignaturas.lista[3]);

listaEstudiantes.lista[3].matricular(listaAsignaturas.lista[2]);
listaEstudiantes.lista[3].matricular(listaAsignaturas.lista[3]);
listaEstudiantes.lista[3].matricular(listaAsignaturas.lista[4]);

// Desmatriculaciones de Estudiantes

listaEstudiantes.lista[0].desmatricular(listaAsignaturas.lista[4]);
listaEstudiantes.lista[1].desmatricular(listaAsignaturas.lista[2]);
listaEstudiantes.lista[2].desmatricular(listaAsignaturas.lista[1]);
listaEstudiantes.lista[3].desmatricular(listaAsignaturas.lista[3]);

// Calificación de Estudiantes

listaEstudiantes.lista[0].calificar(listaAsignaturas.lista[0], 10);
listaEstudiantes.lista[0].calificar(listaAsignaturas.lista[1], 9.3);
listaEstudiantes.lista[0].calificar(listaAsignaturas.lista[3], 9);

listaEstudiantes.lista[1].calificar(listaAsignaturas.lista[1], 9.4);

listaEstudiantes.lista[2].calificar(listaAsignaturas.lista[2], 8.3);
listaEstudiantes.lista[2].calificar(listaAsignaturas.lista[3], 8.85);

// Bucle while

while(true){

    console.clear();
    console.log("SGAEA", "titulo");
    console.log("(Sistema de Gestión Académica de Estudiantes y Asignaturas)", "subtitulo");
    console.log("1. ➕ Crear...", "boton");
    console.log("2. ➖ Eliminar...", "boton");
    console.log("3. ✍ Matricular...", "boton");
    console.log("4. 📤 Desmatricular...", "boton");
    console.log("5. 📋 Registro de Auditoría", "boton");
    console.log("6. 🔢 Calificar...", "boton");
    console.log("7. 🔎 Buscar...", "boton");
    console.log("8. 💰 Calcular Promedio...", "boton");
    console.log("9. 🧾 Mostrar Reporte", "boton");

    eleccion = Number.parseInt(window.prompt("Elección:"));
    
    switch(eleccion){

        /**
         * 3.1. Crear
         * 
         * Siempre se pueden crear direcciones, estudiantes y/o asignaturas.
         */

        case 1:

            do{

                console.clear();
                console.log("Crear ➕", "titulo");
                console.log("1. 🏠 Dirección", "boton");
                console.log("2. 👨‍🎓 Estudiante", "boton");
                console.log("3. 📕 Asignatura", "boton");
                console.log("0. ⏪ Volver", "boton");

                eleccion = Number.parseInt(window.prompt("Elección:"));

                console.clear();

                switch(eleccion){

                    /**
                     * 3.1.1. Crear Dirección
                     * 
                     * Se pedirá calle, número, piso, código postal, provincia y localidad.
                     * Al crearla, se guardará en el Array listaDirecciones.
                     */

                    case 1:

                        console.log("Crear Dirección ➕🏠", "titulo");
                        console.log("Calle: ");
                        
                        do{

                            eleccion = window.prompt("Calle:");

                        }while(!eleccion || eleccion.trim() === "");

                        const calle = eleccion;

                        console.clear();
                        console.log("Crear Dirección ➕🏠", "titulo");
                        console.log("Calle: " + calle);
                        console.log("Número: ");

                        do{

                            eleccion = window.prompt("Número:");

                        }while(!eleccion || eleccion.trim() === "");

                        const numero = eleccion;

                        console.clear();
                        console.log("Crear Dirección ➕🏠", "titulo");
                        console.log("Calle: " + calle);
                        console.log("Número: " + numero);
                        console.log("Piso: ");

                        do{

                            eleccion = window.prompt("Piso:");

                        }while(!eleccion || eleccion.trim() === "");

                        const piso = eleccion;

                        console.clear();
                        console.log("Crear Dirección ➕🏠", "titulo");
                        console.log("Calle: " + calle);
                        console.log("Número: " + numero);
                        console.log("Piso: " + piso);
                        console.log("Código Postal: ");

                        do{

                            eleccion = window.prompt("Código Postal:");

                        }while(!eleccion || eleccion.trim() === "");

                        const codigoPostal = eleccion;

                        console.clear();
                        console.log("Crear Dirección ➕🏠", "titulo");
                        console.log("Calle: " + calle);
                        console.log("Número: " + numero);
                        console.log("Piso: " + piso);
                        console.log("Código Postal: " + codigoPostal);
                        console.log("Provincia: ");

                        do{

                            eleccion = window.prompt("Provincia:");

                        }while(!eleccion || eleccion.trim() === "");

                        const provincia = eleccion;

                        console.clear();
                        console.log("Crear Dirección ➕🏠", "titulo");
                        console.log("Calle: " + calle);
                        console.log("Número: " + numero);
                        console.log("Piso: " + piso);
                        console.log("Código Postal: " + codigoPostal);
                        console.log("Provincia: " + provincia);
                        console.log("Localidad: ");

                        do{

                            eleccion = window.prompt("Localidad:");

                        }while(!eleccion || eleccion.trim() === "");

                        const localidad = eleccion;

                        console.clear();
                        console.log("Crear Dirección ➕🏠", "titulo");
                        console.log("Dirección Creada ✅", "subtitulo");
                        console.log("Calle: " + calle);
                        console.log("Número: " + numero);
                        console.log("Piso: " + piso);
                        console.log("Código Postal: " + codigoPostal);
                        console.log("Provincia: " + provincia);
                        console.log("Localidad: " + localidad);

                        window.alert("Dirección creada correctamente.");

                        listaDirecciones.push(new Direccion(calle, numero, piso, codigoPostal, provincia, localidad));

                        eleccion = 0;
                        break;

                    /**
                     * 3.1.2. Crear Estudiante
                     * 
                     * Si el Array listaDirecciones no está vacío, se pedirá si se quiere usar una dirección.
                     * Si no, se pedirá calle, número, piso, código postal, provincia y localidad y se
                     * preguntará si se quiere guardar la dirección en el Array listaDirecciones.
                     * 
                     * Se pedirá nombre y edad, y se creará el estudiante.
                     */

                    case 2:

                        console.log("Crear Estudiante ➕👨‍🎓", "titulo");

                        let direccion;

                        if(listaDirecciones.length > 0 && window.confirm("¿Desea elegir una dirección ya creada?")){

                            console.clear();
                            console.log("Crear Estudiante ➕👨‍🎓", "titulo");
                            console.log("Seleccionar Dirección 🏠", "subtitulo");

                            for(const dir of listaDirecciones){

                                console.log((listaDirecciones.indexOf(dir) + 1) + ". " + dir.toString(), "boton");

                            }

                            console.log("0. ⏪ Volver", "boton");

                            do{

                                eleccion = Number.parseInt(window.prompt("Escoja una dirección:"));
                                
                                if(Number.isNaN(eleccion)) eleccion = -1;

                            }while(eleccion < 0 || eleccion > listaDirecciones.length);

                            if(eleccion == 0){
                                eleccion = -1;
                                break;
                            }

                            direccion = listaDirecciones[eleccion - 1];

                        }else{

                            console.clear();
                            console.log("Crear Estudiante ➕👨‍🎓", "titulo");
                            console.log("Establecer Dirección 🏠", "subtitulo");
                            console.log("Calle: ");
                            
                            do{

                                eleccion = window.prompt("Calle:");

                            }while(!eleccion || eleccion.trim() === "");

                            const calle = eleccion;

                            console.clear();
                            console.log("Crear Estudiante ➕👨‍🎓", "titulo");
                            console.log("Establecer Dirección 🏠", "subtitulo");
                            console.log("Calle: " + calle);
                            console.log("Número: ");
    
                            do{

                                eleccion = window.prompt("Número:");

                            }while(!eleccion || eleccion.trim() === "");

                            const numero = eleccion;

                            console.clear();
                            console.log("Crear Estudiante ➕👨‍🎓", "titulo");
                            console.log("Establecer Dirección 🏠", "subtitulo");
                            console.log("Calle: " + calle);
                            console.log("Número: " + numero);
                            console.log("Piso: ");
    
                            do{

                                eleccion = window.prompt("Piso:");

                            }while(!eleccion || eleccion.trim() === "");

                            const piso = eleccion;

                            console.clear();
                            console.log("Crear Estudiante ➕👨‍🎓", "titulo");
                            console.log("Establecer Dirección 🏠", "subtitulo");
                            console.log("Calle: " + calle);
                            console.log("Número: " + numero);
                            console.log("Piso: " + piso);
                            console.log("Código Postal: ");
    
                            do{

                                eleccion = window.prompt("Código Postal:");

                            }while(!eleccion || eleccion.trim() === "");

                            const codigoPostal = eleccion;

                            console.clear();
                            console.log("Crear Estudiante ➕👨‍🎓", "titulo");
                            console.log("Establecer Dirección 🏠", "subtitulo");
                            console.log("Calle: " + calle);
                            console.log("Número: " + numero);
                            console.log("Piso: " + piso);
                            console.log("Código Postal: " + codigoPostal);
                            console.log("Provincia: ");
    
                            do{

                                eleccion = window.prompt("Provincia:");

                            }while(!eleccion || eleccion.trim() === "");

                            const provincia = eleccion;

                            console.clear();
                            console.log("Crear Estudiante ➕👨‍🎓", "titulo");
                            console.log("Establecer Dirección 🏠", "subtitulo");
                            console.log("Calle: " + calle);
                            console.log("Número: " + numero);
                            console.log("Piso: " + piso);
                            console.log("Código Postal: " + codigoPostal);
                            console.log("Provincia: " + provincia);
                            console.log("Localidad: ");
    
                            do{

                                eleccion = window.prompt("Localidad:");

                            }while(!eleccion || eleccion.trim() === "");

                            const localidad = eleccion;

                            console.clear();
                            console.log("Crear Estudiante ➕👨‍🎓", "titulo");
                            console.log("Dirección Establecida ✅", "subtitulo");
                            console.log("Calle: " + calle);
                            console.log("Número: " + numero);
                            console.log("Piso: " + piso);
                            console.log("Código Postal: " + codigoPostal);
                            console.log("Provincia: " + provincia);
                            console.log("Localidad: " + localidad);

                            direccion = new Direccion(calle, numero, piso, codigoPostal, provincia, localidad);

                            if(window.confirm("¿Desea guardar esta dirección?")){
                                
                                listaDirecciones.push(direccion);

                                console.clear();
                                console.log("Crear Estudiante ➕👨‍🎓", "titulo");
                                console.log("Dirección Guardada ✅", "subtitulo");
                                console.log("Calle: " + calle);
                                console.log("Número: " + numero);
                                console.log("Piso: " + piso);
                                console.log("Código Postal: " + codigoPostal);
                                console.log("Provincia: " + provincia);
                                console.log("Localidad: " + localidad);

                                window.alert("Dirección guardada correctamente.");

                            }

                        }

                        console.clear();
                        console.log("Crear Estudiante ➕👨‍🎓", "titulo");
                        console.log("Nombre: ");

                        do{

                            eleccion = window.prompt("Nombre:");

                        }while(!eleccion || eleccion.trim() === "");

                        const nombreEstudiante = eleccion;

                        console.clear();
                        console.log("Crear Estudiante ➕👨‍🎓", "titulo");
                        console.log("Nombre: " + nombreEstudiante);
                        console.log("Edad: ");

                        do{

                            eleccion = Number.parseInt(window.prompt("Edad:"));
                            if(Number.isNaN(eleccion)) eleccion = -1;
                            
                        }while(eleccion < 0);

                        const edad = eleccion;

                        console.clear();
                        console.log("Crear Estudiante ➕👨‍🎓", "titulo");
                        
                        try{

                            listaEstudiantes.añadirEstudiante(new Estudiante(nombreEstudiante, edad, direccion));

                            console.log("Estudiante Creado ✅", "subtitulo");
                            console.log("Nombre: " + nombreEstudiante);
                            console.log("Edad: " + edad);
                            console.log("Dirección: " + direccion.toString());

                            window.alert("Estudiante creado correctamente.");

                        }catch(error){

                            console.log("Estudiante No Creado ❌", "subtitulo");
                            console.log("Nombre: " + nombreEstudiante);
                            console.log("Edad: " + edad);
                            console.log("Dirección: " + direccion.toString());

                            window.alert(error);

                        }

                        eleccion = 0;
                        break;

                    /**
                     * 3.1.3. Crear Asignatura
                     * 
                     * Se pedirá nombre, y se creará la asignatura sólo si el listaAsignaturas no contiene
                     * una asignatura con el mismo nombre.
                     */

                    case 3:

                        console.log("Crear Asignatura ➕📕", "titulo");
                        console.log("Nombre: ");

                        do{

                            eleccion = window.prompt("Nombre:");

                        }while(!eleccion || eleccion.trim() === "");

                        const nombreAsignatura = eleccion;

                        console.clear();
                        console.log("Crear Asignatura ➕📕", "titulo");

                        try{

                            listaAsignaturas.añadirAsignatura(new Asignatura(nombreAsignatura));

                            console.log("Asignatura Creada ✅", "subtitulo");
                            console.log("Nombre: " + nombreAsignatura);

                            window.alert("Asignatura creada correctamente.");

                        }catch(error){

                            console.log("Asignatura No Creada ❌", "subtitulo");
                            console.log("Nombre: " + nombreAsignatura);

                            window.alert(error);

                        }

                        eleccion = 0;
                        break;

                }

            }while(eleccion != 0);

            break;

        /**
         * 3.2. Eliminar
         * 
         * No se podrá acceder a Eliminar si no existe ningún dato, ya sea dirección, estudiante o asignatura.
         */

        case 2:

            do{

                if(listaDirecciones.length == 0 && listaEstudiantes.lista.length == 0 && listaAsignaturas.lista.length == 0){
                    
                    window.alert("No existen datos registrados.");
                    break;

                }

                console.clear();
                console.log("Eliminar ➖", "titulo");
                console.log("1. 🏠 Dirección", "boton");
                console.log("2. 👨‍🎓 Estudiante", "boton");
                console.log("3. 📕 Asignatura", "boton");
                console.log("0. ⏪ Volver", "boton");

                eleccion = Number.parseInt(window.prompt("Elección:"));

                switch(eleccion){

                    /**
                     * 3.2.1. Eliminar Dirección
                     * 
                     * Si hay direcciones en el Array listaDirecciones, se escoge una de ellas para su
                     * eliminación.
                     */

                    case 1:

                        if(listaDirecciones.length == 0){

                            window.alert("No existen direcciones registradas.");
                            break;

                        }

                        console.clear();
                        console.log("Eliminar Dirección ➖🏠", "titulo");
                        
                        for(const direccion of listaDirecciones){

                            console.log((listaDirecciones.indexOf(direccion) + 1) + ". " + direccion.toString(), "boton");

                        }

                        console.log("0. ⏪ Volver", "boton");

                        do{

                            eleccion = Number.parseInt(window.prompt("Escoja una dirección:"));

                            if(Number.isNaN(eleccion)) eleccion = -1;

                        }while(eleccion < 0 || eleccion > listaDirecciones.length);

                        if(eleccion == 0){
                            eleccion = -1;
                            break;
                        }

                        listaDirecciones = listaDirecciones.filter((d, indice) => indice != eleccion - 1);

                        console.clear();
                        console.log("Eliminar Dirección ➖🏠", "titulo");
                        console.log("Dirección Eliminada ✅", "subtitulo");
                        
                        for(const direccion of listaDirecciones){

                            if(listaDirecciones.length == 0){

                                console.log("No existen direcciones registradas.");
                                break;
    
                            }

                            console.log((listaDirecciones.indexOf(direccion) + 1) + ". " + direccion.toString(), "boton");

                        }

                        window.alert("Dirección eliminada correctamente.");

                        eleccion = 0;
                        break;

                    /**
                     * 3.2.2. Eliminar Estudiante
                     * 
                     * Si existen estudiantes en listaEstudiantes, se escoge un estudiante para su
                     * eliminación.
                     */

                    case 2:

                        if(listaEstudiantes.lista.length == 0){

                            window.alert("No existen estudiantes registrados.");
                            break;

                        }

                        console.clear();
                        console.log("Eliminar Estudiante ➖👨‍🎓", "titulo");
                        
                        for(const estudiante of listaEstudiantes.lista){

                            console.log((listaEstudiantes.lista.indexOf(estudiante) + 1) + ". " + estudiante.toString(), "boton");

                        }

                        console.log("0. ⏪ Volver", "boton");

                        do{

                            eleccion = Number.parseInt(window.prompt("Escoja un estudiante:"));

                            if(Number.isNaN(eleccion)) eleccion = -1;

                        }while(eleccion < 0 || eleccion > listaEstudiantes.lista.length);

                        if(eleccion == 0){
                            eleccion = -1;
                            break;
                        }

                        try{

                            listaEstudiantes.eliminarEstudiante(listaEstudiantes.lista[eleccion - 1].id);

                            console.clear();
                            console.log("Eliminar Estudiante ➖👨‍🎓", "titulo");
                            console.log("Estudiante Eliminado ✅", "subtitulo");
                            
                            for(const estudiante of listaEstudiantes.lista){

                                if(listaEstudiantes.lista.length == 0){

                                    console.log("No existen estudiantes registrados.");
                                    break;
        
                                }

                                console.log((listaEstudiantes.lista.indexOf(estudiante) + 1) + ". " + estudiante.toString(), "boton");
    
                            }

                            window.alert("Estudiante eliminado correctamente.");

                        }catch(error){

                            window.alert(error);

                        }

                        eleccion = 0;
                        break;

                    /**
                     * 3.2.3. Eliminar Asignatura
                     * 
                     * Si hay asignaturas en listaAsignaturas, se escoge una asignatura para su eliminación.
                     */

                    case 3:

                        if(listaAsignaturas.lista.length == 0){

                            window.alert("No existen asignaturas registradas.");
                            break;

                        }

                        console.clear();
                        console.log("Eliminar Asignatura ➖📕", "titulo");
                        
                        for(const asignatura of listaAsignaturas.lista){

                            console.log((listaAsignaturas.lista.indexOf(asignatura) + 1) + ". " + asignatura.toString(), "boton");

                        }

                        console.log("0. ⏪ Volver", "boton");

                        do{

                            eleccion = Number.parseInt(window.prompt("Escoja una asignatura:"));

                            if(Number.isNaN(eleccion)) eleccion = -1;

                        }while(eleccion < 0 || eleccion > listaAsignaturas.lista.length);

                        if(eleccion == 0){
                            eleccion = -1;
                            break;
                        }

                        try{

                            listaAsignaturas.eliminarAsignatura(listaAsignaturas.lista[eleccion - 1].toString());

                            console.clear();
                            console.log("Eliminar Asignatura ➖📕", "titulo");
                            console.log("Asignatura Eliminada ✅", "subtitulo");

                            for(const asignatura of listaAsignaturas.lista){

                                if(listaAsignaturas.lista.length == 0){

                                    console.log("No existen asignaturas registradas.");
                                    break;
        
                                }

                                console.log((listaAsignaturas.lista.indexOf(asignatura) + 1) + ". " + asignatura.toString(), "boton");
    
                            }

                            window.alert("Asignatura eliminada correctamente.");

                        }catch(error){

                            window.alert(error);

                        }

                        eleccion = 0;
                        break;

                }

            }while(eleccion != 0);

            break;

        /**
         * 3.3. Matricular
         * 
         * Si no hay datos registrados, o no hay estudiantes, o no hay asignaturas, no se puede acceder.
         * 
         * En primer lugar se escoge un estudiante de listaEstudiantes. Sólo se podrán escoger aquellos que
         * no estén matriculados de todas las asignaturas.
         * Después, se escogen las asignaturas a matricular.
         */

        case 3:

            if(listaEstudiantes.lista.length == 0 && listaAsignaturas.lista.length == 0){
                window.alert("No existen datos registrados.");
                break;
            }

            if(listaEstudiantes.lista.length == 0){
                window.alert("No existen estudiantes registrados.");
                break;
            }

            if(listaAsignaturas.lista.length == 0){
                window.alert("No existen asignaturas registradas.");
                break;
            }

            do{

                console.clear();
                console.log("Matricular ✍", "titulo");
                console.log("Seleccionar Estudiante 👨‍🎓", "subtitulo");

                for(const estudiante of listaEstudiantes.lista){

                    if(estudiante.asignaturas.length != listaAsignaturas.lista.length){

                        console.log((listaEstudiantes.lista.indexOf(estudiante) + 1) + ". " + estudiante.toString(), "boton");

                    }else{
                        
                        console.log((listaEstudiantes.lista.indexOf(estudiante) + 1) + ". " + estudiante.toString(), "boton", "text-decoration: line-through;");

                    }

                }

                console.log("0. ⏪ Volver", "boton");

                do{

                    eleccion = Number.parseInt(window.prompt("Escoja un estudiante:"));

                    if(Number.isNaN(eleccion)) eleccion = -1;

                }while(eleccion < 0 || eleccion > listaEstudiantes.lista.length);

                if(eleccion == 0) break;

                const estudiante = listaEstudiantes.lista[eleccion - 1];

                if(estudiante.asignaturas.length == listaAsignaturas.lista.length){

                    window.alert("El estudiante ya está cursando todas las asignaturas.");
                    eleccion = -1;
                    continue;

                }

                let asignaturasSeleccionadas = [];
                let volverMenuEstudiantes = false;
                
                const asignaturasMatriculadas = estudiante.asignaturas.map(a => a[0].nombre);
                const asignaturasDisponibles = listaAsignaturas.lista.filter(a => !asignaturasMatriculadas.includes(a.nombre));

                do{

                    console.clear();
                    console.log("Matricular ✍", "titulo");
                    console.log("Estudiante: " + estudiante.toString());
                    console.log("Seleccionar Asignaturas 📚", "subtitulo");
                    
                    let textoSeleccionadas = "Seleccionadas (" + asignaturasSeleccionadas.length + ")";
                    
                    if(asignaturasSeleccionadas.length > 0) textoSeleccionadas += ": " + asignaturasSeleccionadas.map(a => a.nombre).join(", ");
                    
                    console.log(textoSeleccionadas);
                    
                    for(const asignatura of asignaturasDisponibles){

                        const seleccionada = asignaturasSeleccionadas.includes(asignatura) ? "❎" : "⬛";
                        console.log(seleccionada + " " + (asignaturasDisponibles.indexOf(asignatura) + 1) + ". " + asignatura.toString(), "boton");

                    }

                    console.log("0. ⏪ Volver", "boton");

                    eleccion = window.prompt("Escoja una o más asignaturas:\n(Pulse solamente Enter para finalizar)");
                    eleccion = Number.parseInt(eleccion);

                    if(Number.isNaN(eleccion)) eleccion = -1;

                    if(eleccion == 0){

                        volverMenuEstudiantes = true;
                        eleccion = -1;
                        break;

                    }else if(eleccion > 0 && eleccion <= asignaturasDisponibles.length){

                        const asignatura = asignaturasDisponibles[eleccion - 1];

                        if(asignaturasSeleccionadas.includes(asignatura)){

                            asignaturasSeleccionadas = asignaturasSeleccionadas.filter(a => a != asignatura);

                        }else{

                            asignaturasSeleccionadas.push(asignatura);

                        }

                    }else{

                        if(asignaturasSeleccionadas.length > 0 && !volverMenuEstudiantes){
                    
                            estudiante.matricular(...asignaturasSeleccionadas);
        
                            console.clear();
                            console.log("Matricular ✍", "titulo");
                            console.log("Matrícula Terminada ✅", "subtitulo");
                            console.log("Estudiante: " + estudiante.toString());
                            console.log("Asignaturas (" + asignaturasSeleccionadas.length + "): " + asignaturasSeleccionadas.map(a => a.toString()).join(", "));
                            
                            window.alert("Estudiante matriculado correctamente");
    
                            eleccion = 0;
                            break;
        
                        }else{

                            window.alert("Debe seleccionar al menos una asignatura.");

                        }

                    }

                }while(true);

            }while(eleccion < 0 || eleccion > listaEstudiantes.lista.length);

            break;

        /**
         * 3.4. Desmatricular
         * 
         * Si no existen datos, asignaturas, o estudiantes matriculados de al menos una asignatura, no se
         * puede acceder.
         * 
         * En primer lugar, se escoge un estudiante de entre los matriculados en al menos una asignatura.
         * Después,
         * se seleccionan las asignaturas a desmatricular.
         */

        case 4:

            if(listaEstudiantes.lista.length == 0 && listaAsignaturas.lista.length == 0){
                window.alert("No existen datos registrados.");
                break;
            }

            if(listaEstudiantes.lista.length == 0){
                window.alert("No existen estudiantes registrados.");
                break;
            }

            if(listaAsignaturas.lista.length == 0){
                window.alert("No existen asignaturas registradas.");
                break;
            }

            if(listaEstudiantes.lista.every(e => e.asignaturas.length == 0)){
                window.alert("No existen estudiantes matriculados.");
                break;
            }

            const listaMatriculados = listaEstudiantes.lista.filter(e => e.asignaturas.length > 0);

            do{

                console.clear();
                console.log("Desmatricular 📤", "titulo");
                console.log("Seleccionar Estudiante 👨‍🎓", "subtitulo");

                for(const estudiante of listaMatriculados){

                    console.log((listaMatriculados.indexOf(estudiante) + 1) + ". " + estudiante.toString(), "boton");

                }

                console.log("0. ⏪ Volver", "boton");

                do{

                    eleccion = Number.parseInt(window.prompt("Escoja un estudiante:"));

                    if(Number.isNaN(eleccion)) eleccion = -1;

                }while(eleccion < 0 || eleccion > listaMatriculados.length);

                if(eleccion == 0) break;

                const estudiante = listaMatriculados[eleccion - 1];

                let asignaturasSeleccionadas = [];
                let volverMenuEstudiantes = false;
                
                do{

                    console.clear();
                    console.log("Desmatricular 📤", "titulo");
                    console.log("Seleccionar Asignaturas 📚", "subtitulo");
                    
                    let textoSeleccionadas = "Seleccionadas (" + asignaturasSeleccionadas.length + ")";

                    if(asignaturasSeleccionadas.length > 0) textoSeleccionadas += ": " + asignaturasSeleccionadas.map(a => a.nombre).join(", ");
                    
                    console.log(textoSeleccionadas);
                    
                    for(const asignatura of estudiante.asignaturas){

                        const seleccionada = asignaturasSeleccionadas.includes(asignatura[0]) ? "❎" : "⬛";
                        console.log(seleccionada + " " + (estudiante.asignaturas.indexOf(asignatura) + 1) + ". " + asignatura[0].toString(), "boton");

                    }

                    console.log("0. ⏪ Volver", "boton");

                    eleccion = window.prompt("Escoja una o más asignaturas:\n(Pulse solamente Enter para finalizar)");
                    eleccion = Number.parseInt(eleccion);

                    if(Number.isNaN(eleccion)) eleccion = -1;

                    if(eleccion == 0){

                        volverMenuEstudiantes = true;
                        eleccion = -1;
                        break;

                    }else if(eleccion > 0 && eleccion <= estudiante.asignaturas.length){

                        const asignatura = estudiante.asignaturas[eleccion - 1][0];

                        if(asignaturasSeleccionadas.includes(asignatura)){

                            asignaturasSeleccionadas = asignaturasSeleccionadas.filter(a => a != asignatura);

                        }else{

                            asignaturasSeleccionadas.push(asignatura);

                        }

                    }else{

                        if(asignaturasSeleccionadas.length > 0 && !volverMenuEstudiantes){
                    
                            estudiante.desmatricular(...asignaturasSeleccionadas);
        
                            console.clear();
                            console.log("Desmatricular 📤", "titulo");
                            console.log("Desmatrícula Terminada ✅", "subtitulo");
                            console.log("Estudiante: " + estudiante.toString());
                            console.log("Asignaturas (" + asignaturasSeleccionadas.length + "): " + asignaturasSeleccionadas.map(a => a.toString()).join(", "));
                            
                            window.alert("Estudiante desmatriculado correctamente.");

                            eleccion = 0;
                            break;
        
                        }else{

                            window.alert("Debe seleccionar al menos una asignatura.");

                        }

                    }

                }while(true);

            }while(eleccion < 0 || eleccion > listaMatriculados.length);

            break;

        /**
         * 3.5. Registro de Auditoría
         * 
         * Si no existen datos, estudiantes o asignaturas, no se puede acceder.
         * 
         * Se escoge el estudiante para obtener sus registros y se muestran.
         */

        case 5:

            if(listaEstudiantes.lista.length == 0 && listaAsignaturas.lista.length == 0){
                window.alert("No existen datos registrados.");
                break;
            }

            if(listaEstudiantes.lista.length == 0){
                window.alert("No existen estudiantes registrados.");
                break;
            }

            if(listaAsignaturas.lista.length == 0){
                window.alert("No existen asignaturas registradas.");
                break;
            }

            do{

                console.clear();
                console.log("Registro de Auditoría 📋", "titulo");
                console.log("Seleccionar Estudiante 👨‍🎓", "subtitulo");
                                
                for(const estudiante of listaEstudiantes.lista){

                    console.log((listaEstudiantes.lista.indexOf(estudiante) + 1) + ". " + estudiante.toString(), "boton");

                }

                console.log("0. ⏪ Volver", "boton");

                do{

                    eleccion = Number.parseInt(window.prompt("Escoja un estudiante:"));

                    if(Number.isNaN(eleccion)) eleccion = -1;

                }while(eleccion < 0 || eleccion > listaEstudiantes.lista.length);

                if(eleccion == 0) break;

                const estudiante = listaEstudiantes.lista[eleccion - 1];

                console.clear();
                console.log("Registro de Auditoría 📋", "titulo");
                console.log(estudiante.nombre + " 👨‍🎓", "subtitulo");
                
                let estilo = "border-radius: 5px;";
                estilo += "margin: 5px;";
                estilo += "border: 2px solid lightgray;";
                estilo += "background-color: black;";
                estilo += "color: white;";

                if(estudiante.registros.length == 0){
                    
                    console.log("No existen registros.", estilo, "font-family: 'consolas', 'sans-serif';");

                }else{

                    for(const registro of estudiante.registros){

                        console.log(registro, estilo, "font-family: 'consolas', 'sans-serif';");
    
                    }

                }

                window.alert("Acepte para volver.");

            }while(eleccion != 0);

            break;

        /**
         * 3.6. Calificar
         * 
         * Si no existen datos, asignaturas, o estudiantes matriculados de al menos una asignatura, no se 
         * puede acceder.
         * 
         * En primer lugar, se escoge entre los estudiantes matriculados de al menos una asignatura.
         * Después, se escoge la asignatura a calificar entre las asignaturas de las cuales el estudiante
         * está matriculado. Si dicha asignatura ya está calificada, se emitirá una advertencia sobre la
         * sobreescritura de la nota.
         * Finalmente, se pide una nota entre 0 y 10 y se califica al estudiante con dichos parámetros.
         */

        case 6:

            if(listaEstudiantes.lista.length == 0 && listaAsignaturas.lista.length == 0){
                window.alert("No existen datos registrados.");
                break;
            }

            if(listaEstudiantes.lista.length == 0){
                window.alert("No existen estudiantes registrados.");
                break;
            }

            if(listaAsignaturas.lista.length == 0){
                window.alert("No existen asignaturas registradas.");
                break;
            }

            if(listaEstudiantes.lista.every(e => e.asignaturas.length == 0)){
                window.alert("No existen estudiantes matriculados.");
                break;
            }

            const matriculados = listaEstudiantes.lista.filter(e => e.asignaturas.length > 0);

            do{

                console.clear();
                console.log("Calificar 🔢", "titulo");
                console.log("Seleccionar Estudiante 👨‍🎓", "subtitulo");
                                
                for(const estudiante of matriculados){

                    console.log((matriculados.indexOf(estudiante) + 1) + ". " + estudiante.toString(), "boton");

                }

                console.log("0. ⏪ Volver", "boton");

                do{

                    eleccion = Number.parseInt(window.prompt("Escoja un estudiante:"));

                    if(Number.isNaN(eleccion)) eleccion = -1;

                }while(eleccion < 0 || eleccion > matriculados.length);

                if(eleccion == 0) break;

                const estudiante = matriculados[eleccion - 1];

                do{

                    console.clear();
                    console.log("Calificar 🔢", "titulo");
                    console.log("Estudiante: " + estudiante.toString());
                    console.log("Seleccionar Asignatura 📕", "subtitulo");
                                    
                    for(const asignatura of estudiante.asignaturas){

                        let resultado = (estudiante.asignaturas.indexOf(asignatura) + 1) + ". " + asignatura[0].toString();
                        
                        if(typeof asignatura[1] != "string") resultado += " (" + asignatura[1].toFixed(2) + ")";
                        console.log(resultado, "boton");

                    }

                    console.log("0. ⏪ Volver", "boton");

                    let valorNota;

                    do{

                        eleccion = Number.parseInt(window.prompt("Escoja una asignatura:"));
                        
                        if(Number.isNaN(eleccion)){
                            
                            eleccion = -1;

                        }else if(eleccion > 0 && eleccion <= estudiante.asignaturas.length){

                            valorNota = estudiante.asignaturas[eleccion - 1][1];

                            if(typeof valorNota != "string"){

                                if(!window.confirm("¿Seguro que quiere sobreescribir la nota anterior (" + valorNota.toFixed(2) + ")?")) eleccion = -1;

                            }

                        }

                    }while(eleccion < 0 || eleccion > estudiante.asignaturas.length);

                    if(eleccion == 0){
                        eleccion = -1;
                        break;
                    }

                    const asignatura = estudiante.asignaturas[eleccion - 1][0];

                    console.clear();
                    console.log("Calificar 🔢", "titulo");
                    console.log("Poner Nota ✍", "subtitulo");
                    console.log("Estudiante: " + estudiante.toString());
                    console.log("Asignatura: " + asignatura.toString());
                    console.log("Nota: ");

                    do{

                        eleccion = Number.parseFloat(window.prompt("Nota:"));
                        
                        if (Number.isNaN(eleccion) || eleccion < 0 || eleccion > 10) {

                            eleccion = -1;
                        
                        } else {
                        
                            eleccion = eleccion.toFixed(2);
                        
                        }

                    }while(eleccion < 0 || eleccion > 10);

                    const nota = eleccion;

                    try{

                        if(typeof valorNota != "string") asignatura.eliminarCalificacion(valorNota.toFixed(2));

                        estudiante.calificar(asignatura, nota);

                        console.clear();
                        console.log("Calificar 🔢", "titulo");
                        console.log("Estudiante Calificado ✅", "subtitulo");
                        console.log("Estudiante: " + estudiante.toString());
                        console.log("Asignatura: " + asignatura.toString());
                        console.log("Nota: " + nota);

                        window.alert("Estudiante calificado correctamente.");

                        eleccion = 0;

                    }catch(error){

                        window.alert(error);

                    }

                }while(eleccion < 0 || eleccion > estudiante.asignaturas.length);

            }while(eleccion < 0 || eleccion > listaEstudiantes.lista.length);
            
            break;

        /**
         * 3.7. Buscar
         * 
         * Si no existen datos, estudiantes o asignaturas, no se puede acceder.
         */

        case 7:

            if(listaEstudiantes.lista.length == 0 && listaAsignaturas.lista.length == 0){
                window.alert("No existen datos registrados.");
                break;
            }

            if(listaEstudiantes.lista.length == 0){
                window.alert("No existen estudiantes registrados.");
                break;
            }

            if(listaAsignaturas.lista.length == 0){
                window.alert("No existen asignaturas registradas.");
                break;
            }

            do{

                console.clear();
                console.log("Buscar 🔎", "titulo");
                console.log("1. 🎓 Estudiantes", "boton");
                console.log("2. 📚 Asignaturas", "boton");
                console.log("0. ⏪ Volver", "boton");

                eleccion = Number.parseInt(window.prompt("Elección:"));

                console.clear();

                switch(eleccion){

                    /**
                     * 3.7.1. Buscar Estudiantes
                     * 
                     * Al principio, se muestran todos los estudiantes de listaEstudiantes.
                     * Se introduce un texto y se muestran las coincidencias de los estudiantes cuyo nombre
                     * incluya dicho texto.
                     */

                    case 1:

                        console.log("Buscar Estudiantes 🔎🎓", "titulo");
                        console.log("Lista de Estudiantes", "subtitulo");

                        for(const estudiante of listaEstudiantes.lista){

                            console.log(estudiante.toString(), "boton");

                        }

                        do{

                            eleccion = window.prompt("Introduzca el nombre del estudiante:");

                        }while(!eleccion || eleccion.trim() == "" || !eleccion.match(/^[a-zA-ZáéíóúüÁÉÍÓÚÜ ]+$/));

                        const resultadosEstudiantes = listaEstudiantes.busquedaEstudiantes(eleccion);

                        console.clear();
                        console.log("Buscar Estudiantes 🔎🎓", "titulo");
                        console.log("Resultados (" + resultadosEstudiantes.length + "): \"" + eleccion + "\"", "subtitulo");

                        if(resultadosEstudiantes.length == 0){

                            window.alert("No se ha encontrado ningún resultado.");
                            break;

                        }

                        for(const estudiante of resultadosEstudiantes){

                            console.log(estudiante.toString(), "boton");

                        }

                        window.alert("Acepte para volver.");

                        eleccion = 0;
                        break;

                    /**
                     * 3.7.2. Buscar Asignaturas
                     *
                     * Al principio, se muestran todos las asignaturas de listaAsignaturas.
                     * Se introduce un texto y se muestran las coincidencias de las asignaturas cuyo nombre
                     * incluya dicho texto.
                     */

                    case 2:

                        console.log("Buscar Asignaturas 🔎📚", "titulo");
                        console.log("Lista de Asignaturas", "subtitulo");

                        for(const estudiante of listaAsignaturas.lista){

                            console.log(asignatura.toString(), "boton");

                        }

                        do{

                            eleccion = window.prompt("Introduzca el nombre de la asignatura:");

                        }while(!eleccion || eleccion.trim() == "" || !eleccion.match(/^[a-zA-ZáéíóúüÁÉÍÓÚÜ ]+$/));

                        const resultadosAsignaturas = listaAsignaturas.busquedaAsignaturas(eleccion);

                        console.clear();
                        console.log("Buscar Asignaturas 🔎📚", "titulo");
                        console.log("Resultados (" + resultadosAsignaturas.length + "): \"" + eleccion + "\"", "subtitulo");

                        if(resultadosAsignaturas.length == 0){

                            window.alert("No se ha encontrado ninguna asignatura.");
                            break;

                        }

                        for(const estudiante of resultadosAsignaturas){

                            console.log(estudiante.toString(), "boton");

                        }

                        window.alert("Acepte para volver.");

                        eleccion = 0;
                        break;

                }

            }while(eleccion != 0);

            break;

        /**
         * 3.8. Calcular Promedio
         * 
         * Si no existen datos, estudiantes o asignaturas, no se puede acceder.
         */

        case 8:

            if(listaEstudiantes.lista.length == 0 && listaAsignaturas.lista.length == 0){
                window.alert("No existen datos registrados.");
                break;
            }

            if(listaEstudiantes.lista.length == 0){
                window.alert("No existen estudiantes registrados.");
                break;
            }

            if(listaAsignaturas.lista.length == 0){
                window.alert("No existen asignaturas registradas.");
                break;
            }

            do{

                console.clear();
                console.log("Calcular Promedio 💰", "titulo");
                console.log("1. 🌍 General", "boton");
                console.log("2. 📚 Asignaturas", "boton");
                console.log("0. ⏪ Volver", "boton");

                eleccion = Number.parseInt(window.prompt("Elección:"));

                console.clear();

                switch(eleccion){

                    /**
                     * 3.8.1. Promedio General
                     * 
                     * Muestra el promedio de los promedios de los estudiantes (promedio general) y una de los promedios
                     * de cada estudiante.
                     */

                    case 1:

                        console.log("Calcular Promedio 💰🌍", "titulo");
                        console.log("Promedio General: " + listaEstudiantes.promedioGeneral, "subtitulo");
                        
                        for(const estudiante of listaEstudiantes.lista){

                            console.log(estudiante.nombre + ": " + estudiante.promedio);

                        }

                        window.alert("Acepte para volver.");

                        eleccion = 0;
                        break;

                    /**
                     * 3.8.2. Promedio por Asignaturas
                     * 
                     * Muestra el promedio en una asignatura de las notas de todos los estudiantes matriculados en ella.
                     */

                    case 2:

                        console.log("Calcular Promedio 💰", "titulo");
                        console.log("Lista de Asignaturas 📚", "subtitulo");
                        
                        for(const asignatura of listaAsignaturas.lista){

                            console.log(asignatura.nombre + ": " + asignatura.promedio);

                        }

                        window.alert("Acepte para volver.");

                        eleccion = 0;
                        break;

                }

            }while(eleccion != 0);

            break;

        /**
         * 3.9. Mostrar Reporte
         * 
         * Muestra el reporte de todos los estudiantes y su información, tanto datos personales (nombre, edad y dirección)
         * como calificaciones (asignaturas y promedio).
         */

        case 9:

            if(listaEstudiantes.lista.length == 0){
                window.alert("No existen estudiantes registrados.");
                break;
            }

            console.clear();
            console.log("Reporte de Estudiantes (" + listaEstudiantes.lista.length + ") 🧾", "titulo");

            listaEstudiantes.mostrarReporte();
            
            window.alert("Acepte para volver.");

            break;
        
    }

}