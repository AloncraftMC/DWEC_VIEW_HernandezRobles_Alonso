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

/////////////////////////////////////////////////////////////////////

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

    get toString(){
        return this.#calle + " " + this.#numero + ", " + this.#piso + " - " + this.#codigoPostal + " " + this.#localidad + " (" + this.#provincia + ")";
    }

}

class Estudiante{

    static #numerosOcupados = [];

    #id;
    #nombre;
    #edad;
    #direccion;
    #asignaturas;
    #registros;

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

        let resultado = [];

        for(let registro of this.#registros){

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
        
        let resultado = asignaturasCalificadas.reduce((suma, asignatura) => suma += asignatura[1], 0) / asignaturasCalificadas.length;
        
        return Number(resultado).toFixed(2);

    }

    get toString(){
        return "[" + this.#id + "] " + this.#nombre + ", " + this.#edad;
    }

    matricular(...asignaturas){

        for(let asignatura of asignaturas){

            if(!this.#asignaturas.map(a => a[0].nombre).includes(asignatura.nombre)){

                this.#asignaturas.push([asignatura, "Sin evaluar"]);
                this.#registros.push([asignatura.nombre, new Date(), "Matriculación"]);

            }

        }

    }

    desmatricular(...asignaturas){
        
        for(let asignatura of asignaturas){

            if(this.#asignaturas.map(a => a[0].nombre).includes(asignatura.nombre)){

                this.#asignaturas = this.#asignaturas.filter(a => a[0].nombre != asignatura.nombre);
                this.#registros.push([asignatura.nombre, new Date(), "Desmatriculación"]);

            }

        }

    }

    calificar(asignatura, nota){

        if(!this.#asignaturas.map(a => a[0].nombre).includes(asignatura.nombre)) throw new Error("El estudiante no está cursando la asignatura.");

        if(nota < 0 || nota > 10) throw new Error("La nota debe estar entre 0 y 10.");

        for (let asig of this.#asignaturas) {

            if (asig[0].nombre == asignatura.nombre) {

                asig[1] = parseFloat(nota);
                asignatura.añadirCalificacion(nota);
                return;

            }
            
        }

    }

    static eliminarNumeroOcupado(numero){

        Estudiante.#numerosOcupados = Estudiante.#numerosOcupados.filter(n => n != numero);

    }

}

class ListaEstudiantes{

    #lista;

    constructor(...estudiantes){

        this.#lista = [];
        
        for(let estudiante of estudiantes){

            this.añadirEstudiante(estudiante);

        }

    }

    get lista(){
        return [...this.#lista];
    }

    get promedioGeneral(){

        const estudiantesCalificados = this.#lista.filter(e => !isNaN(Number(e.promedio)));
        
        if(estudiantesCalificados.length == 0) return "Sin evaluar";
        
        let resultado = estudiantesCalificados.reduce((suma, estudiante) => suma += Number.parseFloat(estudiante.promedio), 0) / estudiantesCalificados.length;
    
        return Number(resultado).toFixed(2);

    }

    mostrarReporte(){

        for(let estudiante of this.#lista){

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

                    for(let asignatura of estudiante.asignaturas){

                        const notaAsignatura = (typeof asignatura[1] == "string") ? asignatura[1] : Number(asignatura[1]).toFixed(2);
                        console.log("\t\t\t" + asignatura[0].nombre + ": " + notaAsignatura);

                    }

                    console.log("\t\t\tPromedio: " + estudiante.promedio, "font-weight: bold;");

                console.groupEnd();

            console.groupEnd();

        }

    }

    añadirEstudiante(estudiante){

        if(this.#lista.filter(e => e.id == estudiante.id).length != 0) throw new Error("Ya existe el estudiante.");

        this.#lista.push(estudiante);
        this.#lista.sort((e1, e2) => parseInt(e1.id.slice(1)) - parseInt(e2.id.slice(1)));

    }

    eliminarEstudiante(id){
        
        if(this.#lista.filter(e => e.id != id).length == this.#lista.length) throw new Error("El estudiante no se encuentra en la lista.");
        this.#lista = this.#lista.filter(e => e.id != id);

        Estudiante.eliminarNumeroOcupado(id.slice(1));

    }

    busquedaEstudiantes(exp){

        return this.#lista.filter(e => e.nombre.toLowerCase().includes(exp.toLowerCase()));

    }

}

class Asignatura{

    #nombre;
    #calificaciones;

    constructor(nombre){
        
        this.#nombre = (nombre.match(/[a-zA-ZáéíóúüÁÉÍÓÚÜ ]+/)) ? nombre : "Nueva asignatura";
        this.#calificaciones = [];

    }

    get nombre(){
        return this.#nombre;
    }

    get promedio(){

        if(this.#calificaciones.length == 0) return "Sin evaluar";
        
        let resultado = this.#calificaciones.reduce((suma, calificacion) => suma += Number.parseFloat(calificacion), 0) / this.#calificaciones.length;
    
        return Number(resultado).toFixed(2);

    }

    get toString(){
        return this.#nombre;
    }

    añadirCalificacion(calificacion){

        this.#calificaciones.push(calificacion);

    }

    eliminarCalificacion(calificacion){

        const indiceCalificacion = this.#calificaciones.indexOf(calificacion);

        if(indiceCalificacion == -1) throw new Error("La asignatura tiene la calificación.");

        this.#calificaciones.splice(indiceCalificacion, 1);

    }

}

class ListaAsignaturas{

    #lista;

    constructor(...asignaturas){

        this.#lista = [];
        
        for(let asignatura of asignaturas){

            this.añadirAsignatura(asignatura);

        }

    }

    get lista(){
        return [...this.#lista];
    }

    añadirAsignatura(asignatura){

        if(this.#lista.filter(a => a.nombre == asignatura.nombre).length != 0) throw new Error("Ya existe la asignatura.");
        this.#lista.push(asignatura);

    }

    eliminarAsignatura(nombre){

        if(this.#lista.filter(a => a.nombre == nombre).length == 0) throw new Error("La asignatura no se encuentra en la lista.");
        this.#lista = this.#lista.filter(a => a.nombre != nombre);

    }

    busquedaAsignaturas(exp){

        return this.#lista.filter(a => a.nombre.toLowerCase().includes(exp.toLowerCase()));

    }

}

/////////////////////////////////////////////////////////////////////////////////////////

const listaEstudiantes = new ListaEstudiantes();
const listaAsignaturas = new ListaAsignaturas();
let listaDirecciones = [];
let eleccion;

listaDirecciones.push(new Direccion("C/ Afán de Ribera", 15, "2ºA", 18005, "Granada", "Granada"));
listaDirecciones.push(new Direccion("C/ Aliatar", 17, "Piso Bajo", 18110, "Granada", "Híjar"));
listaDirecciones.push(new Direccion("C/ Canalejas", 5, "2ºB", 23790, "Jaén", "Porcuna"));
listaDirecciones.push(new Direccion("C/ Paraguay", 1, "Piso Bajo", 18210, "Granada", "Peligros"));
listaDirecciones.push(new Direccion("C/ Málaga", 23, "5ºC", 29770, "Málaga", "Torrox"));

listaEstudiantes.añadirEstudiante(new Estudiante("Alonso Hernández Robles", 21, listaDirecciones[0]));
listaEstudiantes.añadirEstudiante(new Estudiante("Álex Galán Varo", 20, listaDirecciones[1]));
listaEstudiantes.añadirEstudiante(new Estudiante("Ana Quero de La Rosa", 19, listaDirecciones[2]));
listaEstudiantes.añadirEstudiante(new Estudiante("Adrián Martín Vázquez", 19, listaDirecciones[3]));
listaEstudiantes.añadirEstudiante(new Estudiante("Javier Escobar Caseros", 22, listaDirecciones[4]));

listaAsignaturas.añadirAsignatura(new Asignatura("DWEC"));
listaAsignaturas.añadirAsignatura(new Asignatura("DWES"));
listaAsignaturas.añadirAsignatura(new Asignatura("DEAW"));
listaAsignaturas.añadirAsignatura(new Asignatura("DIW"));
listaAsignaturas.añadirAsignatura(new Asignatura("EIE"));

listaEstudiantes.lista[0].matricular(listaAsignaturas.lista[0]);
listaEstudiantes.lista[0].matricular(listaAsignaturas.lista[1]);
listaEstudiantes.lista[0].matricular(listaAsignaturas.lista[2]);
listaEstudiantes.lista[0].matricular(listaAsignaturas.lista[3]);
listaEstudiantes.lista[0].matricular(listaAsignaturas.lista[4]);

listaEstudiantes.lista[1].matricular(listaAsignaturas.lista[0]);
listaEstudiantes.lista[1].matricular(listaAsignaturas.lista[1]);
listaEstudiantes.lista[1].matricular(listaAsignaturas.lista[3]);

listaEstudiantes.lista[2].matricular(listaAsignaturas.lista[2]);
listaEstudiantes.lista[2].matricular(listaAsignaturas.lista[3]);

listaEstudiantes.lista[3].matricular(listaAsignaturas.lista[2]);
listaEstudiantes.lista[3].matricular(listaAsignaturas.lista[4]);

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

                    case 2:

                        console.log("Crear Estudiante ➕👨‍🎓", "titulo");

                        let direccion;

                        if(listaDirecciones.length > 0 && window.confirm("¿Desea elegir una dirección ya creada?")){

                            console.clear();
                            console.log("Crear Estudiante ➕👨‍🎓", "titulo");
                            console.log("Seleccionar Dirección 🏠", "subtitulo");

                            for(let direccion of listaDirecciones){

                                console.log((listaDirecciones.indexOf(direccion) + 1) + ". " + direccion.toString, "boton");

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

                        let edad = eleccion;
                        console.clear();
                        console.log("Crear Estudiante ➕👨‍🎓", "titulo");
                        

                        // try{

                            listaEstudiantes.añadirEstudiante(new Estudiante(nombreEstudiante, edad, direccion));
                            console.log("Estudiante Creado ✅", "subtitulo");
                            console.log("Nombre: " + nombreEstudiante);
                            console.log("Edad: " + edad);
                            console.log("Dirección: " + direccion.toString);
                            window.alert("Estudiante creado correctamente.");

                        /*}catch(error){

                            console.log("Estudiante No Creado ❌", "subtitulo");
                            console.log("Nombre: " + nombreEstudiante);
                            console.log("Edad: " + edad);
                            console.log("Dirección: " + direccion.toString);
                            window.alert(error);

                        }*/

                        eleccion = 0;
                        break;

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

                    case 1:

                        if(listaDirecciones.length == 0){

                            window.alert("No existen direcciones registradas.");
                            break;

                        }

                        console.clear();
                        console.log("Eliminar Dirección ➖🏠", "titulo");
                        
                        for(let direccion of listaDirecciones){

                            console.log((listaDirecciones.indexOf(direccion) + 1) + ". " + direccion.toString, "boton");

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
                        
                        for(let direccion of listaDirecciones){

                            if(listaDirecciones.length == 0){

                                console.log("No existen direcciones registradas.");
                                break;
    
                            }

                            console.log((listaDirecciones.indexOf(direccion) + 1) + ". " + direccion.toString, "boton");

                        }

                        window.alert("Dirección eliminada correctamente.");
                        eleccion = 0;
                        break;

                    case 2:

                        if(listaEstudiantes.lista.length == 0){

                            window.alert("No existen estudiantes registrados.");
                            break;

                        }

                        console.clear();
                        console.log("Eliminar Estudiante ➖👨‍🎓", "titulo");
                        
                        for(let estudiante of listaEstudiantes.lista){

                            console.log((listaEstudiantes.lista.indexOf(estudiante) + 1) + ". " + estudiante.toString, "boton");

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
                            
                            for(let estudiante of listaEstudiantes.lista){

                                if(listaEstudiantes.lista.length == 0){

                                    console.log("No existen estudiantes registrados.");
                                    break;
        
                                }

                                console.log((listaEstudiantes.lista.indexOf(estudiante) + 1) + ". " + estudiante.toString, "boton");
    
                            }

                            window.alert("Estudiante eliminado correctamente.");

                        }catch(error){

                            window.alert(error);

                        }

                        eleccion = 0;
                        break;

                    case 3:

                        if(listaAsignaturas.lista.length == 0){

                            window.alert("No existen asignaturas registradas.");
                            break;

                        }

                        console.clear();
                        console.log("Eliminar Asignatura ➖📕", "titulo");
                        
                        for(let asignatura of listaAsignaturas.lista){

                            console.log((listaAsignaturas.lista.indexOf(asignatura) + 1) + ". " + asignatura.toString, "boton");

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

                            listaAsignaturas.eliminarAsignatura(listaAsignaturas.lista[eleccion - 1].toString);

                            console.clear();
                            console.log("Eliminar Asignatura ➖📕", "titulo");
                            console.log("Asignatura Eliminada ✅", "subtitulo");

                            for(let asignatura of listaAsignaturas.lista){

                                if(listaAsignaturas.lista.length == 0){

                                    console.log("No existen asignaturas registradas.");
                                    break;
        
                                }

                                console.log((listaAsignaturas.lista.indexOf(asignatura) + 1) + ". " + asignatura.toString, "boton");
    
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

                for(let estudiante of listaEstudiantes.lista){

                    if(estudiante.asignaturas.length != listaAsignaturas.lista.length){

                        console.log((listaEstudiantes.lista.indexOf(estudiante) + 1) + ". " + estudiante.toString, "boton");

                    }else{
                        
                        console.log((listaEstudiantes.lista.indexOf(estudiante) + 1) + ". " + estudiante.toString, "boton", "text-decoration: line-through;");

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
                
                let asignaturasMatriculadas = estudiante.asignaturas.map(a => a[0].nombre);
                let asignaturasDisponibles = listaAsignaturas.lista.filter(a => !asignaturasMatriculadas.includes(a.nombre));

                do{

                    console.clear();
                    console.log("Matricular ✍", "titulo");
                    console.log("Estudiante: " + estudiante.toString);
                    console.log("Seleccionar Asignaturas 📚", "subtitulo");
                    
                    let textoSeleccionadas = "Seleccionadas (" + asignaturasSeleccionadas.length + ")";
                    if(asignaturasSeleccionadas.length > 0) textoSeleccionadas += ": " + asignaturasSeleccionadas.map(a => a.nombre).join(", ");
                    console.log(textoSeleccionadas);
                    
                    for(let asignatura of asignaturasDisponibles){

                        const seleccionada = asignaturasSeleccionadas.includes(asignatura) ? "❎" : "⬛";
                        console.log(seleccionada + " " + (asignaturasDisponibles.indexOf(asignatura) + 1) + ". " + asignatura.toString, "boton");

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
                            console.log("Estudiante: " + estudiante.toString);
                            console.log("Asignaturas (" + asignaturasSeleccionadas.length + "): " + asignaturasSeleccionadas.map(a => a.toString).join(", "));
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

            let listaMatriculados = listaEstudiantes.lista.filter(e => e.asignaturas.length > 0);

            do{

                console.clear();
                console.log("Desmatricular 📤", "titulo");
                console.log("Seleccionar Estudiante 👨‍🎓", "subtitulo");

                for(let estudiante of listaMatriculados){

                    console.log((listaMatriculados.indexOf(estudiante) + 1) + ". " + estudiante.toString, "boton");

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
                    
                    for(let asignatura of estudiante.asignaturas){

                        const seleccionada = asignaturasSeleccionadas.includes(asignatura[0]) ? "❎" : "⬛";
                        console.log(seleccionada + " " + (estudiante.asignaturas.indexOf(asignatura) + 1) + ". " + asignatura[0].toString, "boton");

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
                            console.log("Estudiante: " + estudiante.toString);
                            console.log("Asignaturas (" + asignaturasSeleccionadas.length + "): " + asignaturasSeleccionadas.map(a => a.toString).join(", "));
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
                                
                for(let estudiante of listaEstudiantes.lista){

                    console.log((listaEstudiantes.lista.indexOf(estudiante) + 1) + ". " + estudiante.toString, "boton");

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

                    for(let registro of estudiante.registros){

                        console.log(registro, estilo, "font-family: 'consolas', 'sans-serif';");
    
                    }

                }

                window.alert("Acepte para volver.");

            }while(eleccion != 0);

            break;

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

            let matriculados = listaEstudiantes.lista.filter(e => e.asignaturas.length > 0);

            do{

                console.clear();
                console.log("Calificar 🔢", "titulo");
                console.log("Seleccionar Estudiante 👨‍🎓", "subtitulo");
                                
                for(let estudiante of matriculados){

                    console.log((matriculados.indexOf(estudiante) + 1) + ". " + estudiante.toString, "boton");

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
                    console.log("Estudiante: " + estudiante.toString);
                    console.log("Seleccionar Asignatura 📕", "subtitulo");
                                    
                    for(let asignatura of estudiante.asignaturas){

                        let resultado = (estudiante.asignaturas.indexOf(asignatura) + 1) + ". " + asignatura[0].toString;
                        if(typeof asignatura[1] != "string") resultado += " (" + asignatura[1].toFixed(2) + ")";
                        console.log(resultado, "boton");

                    }

                    console.log("0. ⏪ Volver", "boton");

                    let valorNota;

                    do{

                        eleccion = Number.parseInt(window.prompt("Escoja una asignatura:"));
                        
                        if(Number.isNaN(eleccion)){
                            
                            eleccion = -1;

                        }else if(eleccion > 0 && eleccion < estudiante.asignaturas.length){

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
                    console.log("Estudiante: " + estudiante.toString);
                    console.log("Asignatura: " + asignatura.toString);
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
                        console.log("Estudiante: " + estudiante.toString);
                        console.log("Asignatura: " + asignatura.toString);
                        console.log("Nota: " + nota);
                        window.alert("Estudiante calificado correctamente.");
                        eleccion = 0;

                    }catch(error){

                        window.alert(error);

                    }

                }while(eleccion < 0 || eleccion > estudiante.asignaturas.length);

            }while(eleccion < 0 || eleccion > listaEstudiantes.lista.length);
            
            break;

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

                    case 1:

                        console.log("Buscar Estudiantes 🔎🎓", "titulo");
                        console.log("Nombre: ");

                        do{

                            eleccion = window.prompt("Introduzca el nombre del estudiante:");

                        }while(!eleccion || eleccion.trim() === "");

                        const resultadosEstudiantes = listaEstudiantes.busquedaEstudiantes(eleccion);

                        console.clear();
                        console.log("Buscar Estudiantes 🔎🎓", "titulo");
                        console.log("Resultados (" + resultadosEstudiantes.length + "): \"" + eleccion + "\"", "subtitulo");

                        if(resultadosEstudiantes.length == 0){

                            window.alert("No se ha encontrado ningún resultado.");
                            break;

                        }

                        for(let estudiante of resultadosEstudiantes){

                            console.log(estudiante.toString, "boton");

                        }

                        window.alert("Acepte para volver.");

                        eleccion = 0;
                        break;

                    case 2:

                        console.log("Buscar Asignaturas 🔎📚", "titulo");
                        console.log("Nombre: ");

                        do{

                            eleccion = window.prompt("Introduzca el nombre de la asignatura:");

                        }while(!eleccion || eleccion.trim() === "");

                        const resultadosAsignaturas = listaAsignaturas.busquedaAsignaturas(eleccion);

                        console.clear();
                        console.log("Buscar Asignaturas 🔎📚", "titulo");
                        console.log("Resultados (" + resultadosAsignaturas.length + "): \"" + eleccion + "\"", "subtitulo");

                        if(resultadosAsignaturas.length == 0){

                            window.alert("No se ha encontrado ninguna asignatura.");
                            break;

                        }

                        for(let estudiante of resultadosAsignaturas){

                            console.log(estudiante.toString, "boton");

                        }

                        window.alert("Acepte para volver.");

                        eleccion = 0;
                        break;

                }

            }while(eleccion != 0);

            break;

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

                    case 1:

                        console.log("Calcular Promedio 💰🌍", "titulo");
                        console.log("Promedio General: " + listaEstudiantes.promedioGeneral, "subtitulo");
                        
                        for(let estudiante of listaEstudiantes.lista){

                            console.log(estudiante.nombre + ": " + estudiante.promedio);

                        }

                        window.alert("Acepte para volver.");

                        eleccion = 0;
                        break;

                    case 2:

                        console.log("Calcular Promedio 💰", "titulo");
                        console.log("Lista de Asignaturas 📚", "subtitulo");
                        
                        for(let asignatura of listaAsignaturas.lista){

                            console.log(asignatura.nombre + ": " + asignatura.promedio);

                        }

                        window.alert("Acepte para volver.");

                        eleccion = 0;
                        break;

                }

            }while(eleccion != 0);

            break;

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