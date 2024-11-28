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

        this.#nombre = (nombre != null) ? ((nombre.match(/^[a-zA-ZáéíóúüÁÉÍÓÚÜ ]+$/)) ? nombre : "Nuevo estudiante") : "Nuevo estudiante";

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

    get registros(){

        if(this.#registros.length == 0) return "No existen registros.";
        
        return this.#registros.reduce((resultado, registro) => {
            resultado += registro[0].nombre + "; " + registro[1] + "; " + registro[2] + "\n";
            return resultado;
        }, "");

    }

    get promedio(){

        if(this.#asignaturas.length == 0) return 0;

        return this.#asignaturas.reduce((suma, asignatura) => {
            suma += asignatura[1];
            return suma;
        }, 0) / this.#asignaturas.length;

    }

    get listaAsignaturas(){

        let resultado = [];

        for(let asignatura of this.#asignaturas){
            resultado.push(asignatura);
        }

        return resultado;

    }

    get toString(){
        return "[" + this.#id + "] " + this.#nombre + ", " + this.#edad;
    }

    calificacionAsignatura(asignatura){

        for (let asig of this.#asignaturas) {
            if (asig[0].nombre == asignatura.nombre) return asig[1];
        }

        throw new Error("El alumno no está cursando la asignatura.");

    }

    matricular(...asignaturas){

        for(let asignatura of asignaturas){

            if(!this.#asignaturas.map(a => a[0].nombre).includes(asignatura.nombre)){

                this.#asignaturas.push([asignatura, null]);
                this.#registros.push([asignatura.nombre, new Date(), "Matriculación"]);

            }

        }

    }

    desmatricular(...asignaturas){
        
        for(let asignatura of asignaturas){

            if(this.#asignaturas.map(a => a[0].nombre).includes(asignatura.nombre)){

                this.#asignaturas = this.#asignaturas.filter(a => a[0].nombre != asignatura.nombre);
                this.#registros.push([asignatura, new Date(), "Desmatriculación"]);

            }

        }

    }

    calificar(asignatura, nota){

        if(!this.#asignaturas.map(a => a[0].nombre).includes(asignatura.nombre)) throw new Error("El estudiante no está cursando la asignatura.");

        if(nota < 0 || nota > 10) throw new Error("La nota debe estar entre 0 y 10.");
        
        for (let asig of this.#asignaturas) {

            if (asig[0].nombre === asignatura.nombre) {

                asig[1] = nota;
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
        
        return this.#lista.reduce((suma, estudiante) => {
            suma += estudiante.promedio;
            return suma;
        }, 0) / this.#lista.length;

    }

    get reporte(){

        let resultado = "";

        for(let estudiante of this.#lista){

            resultado += "\n==========================\n\n";
            resultado += "[DATOS PERSONALES]\n";
            resultado += "ID: " + estudiante.id + "\n";
            resultado += "Nombre: " + estudiante.nombre + "\n";
            resultado += "Edad: " + estudiante.edad + "\n";
            resultado += "Dirección: \n";
            resultado += "\tCalle: " + estudiante.direccion.calle + "\n";
            resultado += "\tNúmero: " + estudiante.direccion.numero + "\n";
            resultado += "\tPiso: " + estudiante.direccion.piso + "\n";
            resultado += "\tCódigo Postal: " + estudiante.direccion.codigoPostal + "\n";
            resultado += "\tProvincia: " + estudiante.direccion.provincia + "\n";
            resultado += "\tLocalidad: " + estudiante.direccion.localidad + "\n";
            resultado += "\n--------------------------\n\n";
            resultado += "[CALIFICACIONES]\n";
            for(let asignatura of estudiante.listaAsignaturas){
                resultado += asignatura[0].nombre + ": " + asignatura[1] + "\n";
            }
            resultado += "PROMEDIO: " + estudiante.promedio.toFixed(2) + "\n";

        }

        return resultado;

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

        return this.#calificaciones.reduce((suma, calificacion) => {
            suma += calificacion;
            return suma;
        }, 0) / this.#calificaciones.length;

    }

    añadirCalificacion(calificacion){

        this.#calificaciones.push(calificacion);

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

    buscarAsignaturas(nombre){

        return this.#lista.filter(a => a.nombre == nombre);

    }

}

/////////////////////////////////////////////////////////////////////////////////////////

const listaEstudiantes = new ListaEstudiantes();
const listaAsignaturas = new ListaAsignaturas();
let listaDirecciones = [];

let eleccion;
console.clear();

//

listaDirecciones.push(new Direccion("Afán de Ribera", 15, "2ºA", 18005, "Granada", "Granada"));
listaDirecciones.push(new Direccion("Aliatar", 17, "Piso Bajo", 18110, "Granada", "Híjar"));
listaDirecciones.push(new Direccion("Cock and Ball", "s/n", "100º", 99999, "Madrid", "Valdemoro"));
listaDirecciones.push(new Direccion("Los gitanos", 0, "Piso Bajo", 18000, "Granada", "La Joya"));

listaEstudiantes.añadirEstudiante(new Estudiante("Alonso", 20, listaDirecciones[0]));
listaEstudiantes.añadirEstudiante(new Estudiante("Álex", 21, listaDirecciones[1]));
listaEstudiantes.añadirEstudiante(new Estudiante("Nachete Madridista", 15, listaDirecciones[2]));
listaEstudiantes.añadirEstudiante(new Estudiante("Armando", 26, listaDirecciones[3]));

listaAsignaturas.añadirAsignatura(new Asignatura("DWEC"));
listaAsignaturas.añadirAsignatura(new Asignatura("DWES"));
listaAsignaturas.añadirAsignatura(new Asignatura("DEAW"));
listaAsignaturas.añadirAsignatura(new Asignatura("DIW"));
listaAsignaturas.añadirAsignatura(new Asignatura("EIE"));

//

while(true){

    console.clear();
    console.log("< Sistema de Gestión Académica (SGAEA) >");
    console.log("1. Crear...");
    console.log("2. Eliminar...");
    console.log("3. Matricular...");
    console.log("4. Desmatricular...");
    console.log("5. Registro de Auditoría");
    console.log("6. Calificar...");
    console.log("7. Buscar...");
    console.log("8. Calcular Promedio...");
    console.log("9. Mostrar Reporte");
    

    eleccion = Number.parseInt(window.prompt("Elección:"));

    switch(eleccion){

        case 1:

            do{

                console.clear();
                console.log("< Crear >");
                console.log("1. Dirección");
                console.log("2. Estudiante");
                console.log("3. Asignatura");
                console.log("0. Volver");

                eleccion = Number.parseInt(window.prompt("Elección:"));
                console.clear();

                switch(eleccion){

                    case 1:

                        console.log("< Crear Dirección >");
                        
                        do{

                            eleccion = window.prompt("Calle:");

                        }while(!eleccion || eleccion.trim() === "");

                        const calle = eleccion;
                        console.log("Calle: " + calle);

                        do{

                            eleccion = window.prompt("Número:");

                        }while(!eleccion || eleccion.trim() === "");

                        const numero = eleccion;
                        console.log("Número: " + numero);

                        do{

                            eleccion = window.prompt("Piso:");

                        }while(!eleccion || eleccion.trim() === "");

                        const piso = eleccion;
                        console.log("Piso: " + piso);

                        do{

                            eleccion = window.prompt("Código Postal:");

                        }while(!eleccion || eleccion.trim() === "");

                        const codigoPostal = eleccion;
                        console.log("Código Postal: " + codigoPostal);

                        do{

                            eleccion = window.prompt("Provincia:");

                        }while(!eleccion || eleccion.trim() === "");

                        const provincia = eleccion;
                        console.log("Provincia: " + provincia);

                        do{

                            eleccion = window.prompt("Localidad:");

                        }while(!eleccion || eleccion.trim() === "");

                        const localidad = eleccion;
                        console.log("Localidad: " + localidad);

                        window.alert("Dirección creada correctamente.");
                        listaDirecciones.push(new Direccion(calle, numero, piso, codigoPostal, provincia, localidad));

                        eleccion = 0;
                        break;

                    case 2:

                        console.log("< Crear Estudiante >");

                        let direccion;

                        if(listaEstudiantes.lista.length > 0 && window.confirm("¿Desea elegir una dirección ya creada?")){

                            console.clear();
                            console.log("< Crear Estudiante - Seleccionar Dirección >");

                            for(let direccion of listaDirecciones){

                                console.log((listaDirecciones.indexOf(direccion) + 1) + ". " + direccion.toString);

                            }

                            console.log("0. Volver");

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
                            console.log("< Crear Estudiante - Establecer Dirección >");
                            
                            do{

                                eleccion = window.prompt("Calle:");

                            }while(!eleccion || eleccion.trim() === "");

                            const calle = eleccion;
                            console.log("Calle: " + calle);
    
                            do{

                                eleccion = window.prompt("Número:");

                            }while(!eleccion || eleccion.trim() === "");

                            const numero = eleccion;
                            console.log("Número: " + numero);
    
                            do{

                                eleccion = window.prompt("Piso:");

                            }while(!eleccion || eleccion.trim() === "");

                            const piso = eleccion;
                            console.log("Piso: " + piso);
    
                            do{

                                eleccion = window.prompt("Código Postal:");

                            }while(!eleccion || eleccion.trim() === "");

                            const codigoPostal = eleccion;
                            console.log("Código Postal: " + codigoPostal);
    
                            do{

                                eleccion = window.prompt("Provincia:");

                            }while(!eleccion || eleccion.trim() === "");

                            const provincia = eleccion;
                            console.log("Provincia: " + provincia);
    
                            do{

                                eleccion = window.prompt("Localidad:");

                            }while(!eleccion || eleccion.trim() === "");

                            const localidad = eleccion;
                            console.log("Localidad: " + localidad);

                            direccion = new Direccion(calle, numero, piso, codigoPostal, provincia, localidad);

                            if(window.confirm("¿Desea guardar esta dirección?")) listaDirecciones.push(direccion);

                        }

                        console.clear();
                        console.log("< Crear Estudiante >");

                        do{

                            eleccion = window.prompt("Nombre:");

                        }while(!eleccion || eleccion.trim() === "");

                        const nombreEstudiante = eleccion;
                        console.log("Nombre: " + nombreEstudiante);

                        do{

                            eleccion = Number.parseInt(window.prompt("Edad:"));
                            if(Number.isNaN(eleccion)) eleccion = -1;
                            
                        }while(eleccion < 0);

                        let edad = eleccion;
                        console.log("Edad: " + edad);

                        console.log("Dirección: " + direccion.toString);

                        try{

                            listaEstudiantes.añadirEstudiante(new Estudiante(nombreEstudiante, edad, direccion));
                            window.alert("Estudiante creado correctamente.");

                        }catch(error){

                            window.alert(error);

                        }

                        eleccion = 0;
                        break;

                    case 3:

                        console.log("< Crear Asignatura >");

                        do{

                            eleccion = window.prompt("Nombre:");

                        }while(!eleccion || eleccion.trim() === "");

                        const nombreAsignatura = eleccion;
                        console.log("Nombre: " + nombreAsignatura);

                        try{

                            listaAsignaturas.añadirAsignatura(new Asignatura(nombreAsignatura));
                            window.alert("Asignatura creada correctamente.");

                        }catch(error){

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
                    
                    window.alert("No existe ningún dato registrado.");
                    break;

                }

                console.clear();
                console.log("< Eliminar >");
                console.log("1. Dirección");
                console.log("2. Estudiante");
                console.log("3. Asignatura");
                console.log("0. Volver");

                eleccion = Number.parseInt(window.prompt("Elección:"));

                switch(eleccion){

                    case 1:

                        if(listaDirecciones.length == 0){

                            window.alert("No existen direcciones.");
                            break;

                        }

                        console.clear();
                        console.log("< Eliminar Dirección >");
                        
                        for(let direccion of listaDirecciones){

                            console.log((listaDirecciones.indexOf(direccion) + 1) + ". " + direccion.toString);

                        }

                        console.log("0. Volver");

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
                        console.log("< Eliminar Dirección - Cambios Guardados >");
                        
                        for(let direccion of listaDirecciones){

                            if(listaDirecciones.length == 0){

                                console.log("No existen direcciones.");
                                break;
    
                            }

                            console.log((listaDirecciones.indexOf(direccion) + 1) + ". " + direccion.toString);

                        }

                        window.alert("Dirección eliminada correctamente.");
                        eleccion = 0;
                        break;

                    case 2:

                        if(listaEstudiantes.lista.length == 0){

                            window.alert("No existen estudiantes.");
                            break;

                        }

                        console.clear();
                        console.log("< Eliminar Estudiante >");
                        
                        for(let estudiante of listaEstudiantes.lista){

                            console.log((listaEstudiantes.lista.indexOf(estudiante) + 1) + ". " + estudiante.toString);

                        }

                        console.log("0. Volver");

                        do{

                            eleccion = Number.parseInt(window.prompt("Escoja un estudiante:"));
                            if(Number.isNaN(eleccion)) eleccion = -1;

                        }while(eleccion < 0 || eleccion > listaEstudiantes.lista.length);

                        if(eleccion == 0){
                            eleccion = -1;
                            break;
                        }

                        try{

                            listaEstudiantes.eliminarEstudiante("E".concat(eleccion));

                            console.clear();
                            console.log("< Eliminar Estudiante - Cambios Guardados >");
                            
                            for(let estudiante of listaEstudiantes.lista){

                                if(listaEstudiantes.lista.length == 0){

                                    console.log("No existen estudiantes.");
                                    break;
        
                                }

                                console.log((listaEstudiantes.lista.indexOf(estudiante) + 1) + ". " + estudiante.toString);
    
                            }

                            window.alert("Estudiante eliminado correctamente.");

                        }catch(error){

                            window.alert(error);

                        }

                        eleccion = 0;
                        break;

                    case 3:

                        if(listaAsignaturas.lista.length == 0){

                            window.alert("No existen asignaturas.");
                            break;

                        }

                        console.clear();
                        console.log("< Eliminar Asignatura >");
                        
                        for(let asignatura of listaAsignaturas.lista){

                            console.log((listaAsignaturas.lista.indexOf(asignatura) + 1) + ". " + asignatura.nombre);

                        }

                        console.log("0. Volver");

                        do{

                            eleccion = Number.parseInt(window.prompt("Escoja una asignatura:"));
                            if(Number.isNaN(eleccion)) eleccion = -1;

                        }while(eleccion < 0 || eleccion > listaAsignaturas.lista.length);

                        if(eleccion == 0){
                            eleccion = -1;
                            break;
                        }

                        try{

                            listaAsignaturas.eliminarAsignatura(listaAsignaturas.lista[eleccion - 1].nombre);

                            console.clear();
                            console.log("< Eliminar Asignatura - Cambios Guardados >");

                            for(let asignatura of listaAsignaturas.lista){

                                if(listaAsignaturas.lista.length == 0){

                                    console.log("No existen asignaturas.");
                                    break;
        
                                }

                                console.log((listaAsignaturas.lista.indexOf(asignatura) + 1) + ". " + asignatura.nombre);
    
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



            break;

        case 4:

            

            break;

        case 5:

            do{

                console.clear();
                console.log("< Registro de Auditoría - Seleccionar Estudiante >");
                                
                for(let estudiante of listaEstudiantes.lista){

                    console.log((listaEstudiantes.lista.indexOf(estudiante) + 1) + ". " + estudiante.toString);

                }

                console.log("0. Volver");

                do{

                    eleccion = Number.parseInt(window.prompt("Escoja un estudiante:"));
                    if(Number.isNaN(eleccion)) eleccion = -1;

                }while(eleccion < 0 || eleccion > listaEstudiantes.lista.length);

                if(eleccion == 0) break;

                const estudiante = listaEstudiantes.lista[eleccion - 1];

                console.clear();
                console.log("< Registro de Auditoría - " + estudiante.nombre + " >");
                console.log(estudiante.registros);
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

            do{

                console.clear();
                console.log("< Calificar - Seleccionar Estudiante >");
                                
                for(let estudiante of listaEstudiantes.lista){

                    console.log((listaEstudiantes.lista.indexOf(estudiante) + 1) + ". " + estudiante.toString);

                }

                console.log("0. Volver");

                do{

                    eleccion = Number.parseInt(window.prompt("Escoja un estudiante:"));
                    if(Number.isNaN(eleccion)) eleccion = -1;

                }while(eleccion < 0 || eleccion > listaEstudiantes.lista.length);

                if(eleccion == 0) break;

                const estudiante = listaEstudiantes.lista[eleccion - 1];

                do{

                    console.clear();
                    console.log("< Calificar - Seleccionar Asignatura >");
                    console.log("Estudiante: " + estudiante.toString);
                                    
                    for(let asignatura of listaAsignaturas.lista){

                        console.log((listaAsignaturas.lista.indexOf(asignatura) + 1) + ". " + asignatura.nombre);

                    }

                    console.log("0. Volver");

                    do{

                        eleccion = Number.parseInt(window.prompt("Escoja una asignatura:"));
                        if(Number.isNaN(eleccion)) eleccion = -1;

                    }while(eleccion < 0 || eleccion > listaAsignaturas.lista.length)

                    if(eleccion == 0){
                        eleccion = -1;
                        break;
                    }
            
                    const asignatura = listaAsignaturas.lista[eleccion - 1];

                    console.clear();
                    console.log("< Calificar - Poner Nota >");
                    console.log("Estudiante: " + estudiante.toString);
                    console.log("Asignatura: " + asignatura.nombre);

                    do{

                        eleccion = Number.parseInt(window.prompt("Nota:"));
                        if(Number.isNaN(eleccion)) eleccion = -1;

                    }while(eleccion < 0 || eleccion > 10);

                    const nota = eleccion;
                    console.log("Nota: " + nota);

                    try{

                        estudiante.calificar(asignatura, nota);
                        window.alert("Estudiante calificado correctamente.");

                    }catch(error){

                        window.alert(error);

                    }

                }while(eleccion < 0 || eleccion > listaAsignaturas.lista.length);

            }while(eleccion < 0 || eleccion > listaEstudiantes.lista.length);
            
            break;

        case 7:


        
            break;

        case 8:



            break;

        case 9:

            console.clear();
            console.log("< Reporte de Estudiantes (" + listaEstudiantes.lista.length + ") >");
            console.log(listaEstudiantes.reporte);
            window.alert("Acepte para volver.");

            break;
        
    }

}