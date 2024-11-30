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

    get asignaturas(){
        return [...this.#asignaturas];
    }

    get registros(){

        if(this.#registros.length == 0) return "No existen registros.";

        let resultado = "";

        for(let registro of this.#registros){

            const asignatura = registro[0];
            let fecha = registro[1];
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

            fecha = diaSemana + ", " + dia + " de " + mes + " de " + anio + " a las " + horas + ":" + minutos + ":" + segundos;

            resultado += "| " + asignatura + " | " + fecha + " | " + tipo + " |\n";

        }
        
        return resultado;

    }

    get promedio(){

        const asignaturasCalificadas = this.#asignaturas.filter(a => typeof a[1] != "string");
        
        if(asignaturasCalificadas.length == 0) return "Sin evaluar";
        
        let resultado = asignaturasCalificadas.reduce((suma, asignatura) => suma += asignatura[1], 0) / asignaturasCalificadas.length;
        
        return Number(resultado).toFixed(2);

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

                this.#asignaturas.push([asignatura, "Sin evaluar"]);
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
            for(let asignatura of estudiante.asignaturas){
                resultado += asignatura[0].nombre + ": ";
                resultado += (typeof asignatura[1] == "string") ? asignatura[1] : Number(asignatura[1]).toFixed(2);
                resultado += "\n";
            }
            resultado += "PROMEDIO: " + estudiante.promedio + "\n";

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

    get toString(){
        return this.#nombre;
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

listaEstudiantes.lista[0].matricular(listaAsignaturas.lista[1]);
listaEstudiantes.lista[0].matricular(listaAsignaturas.lista[3]);

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

                            console.log((listaAsignaturas.lista.indexOf(asignatura) + 1) + ". " + asignatura.toString);

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

                            listaAsignaturas.eliminarAsignatura(listaAsignaturas.lista[eleccion - 1].toString);

                            console.clear();
                            console.log("< Eliminar Asignatura - Cambios Guardados >");

                            for(let asignatura of listaAsignaturas.lista){

                                if(listaAsignaturas.lista.length == 0){

                                    console.log("No existen asignaturas.");
                                    break;
        
                                }

                                console.log((listaAsignaturas.lista.indexOf(asignatura) + 1) + ". " + asignatura.toString);
    
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

            do{

                console.clear();
                console.log("< Matricular - Seleccionar Estudiante >");

                for(let estudiante of listaEstudiantes.lista){

                    if(estudiante.asignaturas.length != listaAsignaturas.lista.length){

                        console.log((listaEstudiantes.lista.indexOf(estudiante) + 1) + ". " + estudiante.toString);

                    }else{
                        
                        console.log("%c" + (listaEstudiantes.lista.indexOf(estudiante) + 1) + ". " + estudiante.toString, "text-decoration: line-through;");

                    }

                }

                console.log("0. Volver");

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
                    console.log("< Matricular - Seleccionar Asignaturas >");
                    
                    let textoSeleccionadas = "Seleccionadas (" + asignaturasSeleccionadas.length + ")";
                    if(asignaturasSeleccionadas.length > 0) textoSeleccionadas += ": " + asignaturasSeleccionadas.map(a => a.nombre).join(", ");
                    console.log(textoSeleccionadas);
                    
                    for(let asignatura of asignaturasDisponibles){

                        const seleccionada = asignaturasSeleccionadas.includes(asignatura) ? "X" : " ";
                        console.log("[" + seleccionada + "] " + (asignaturasDisponibles.indexOf(asignatura) + 1) + ". " + asignatura.toString);

                    }

                    console.log("0. Volver");

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
                            console.log("< Matricular - Matrícula Terminada >");
                            console.log("Estudiante: " + estudiante.toString);
                            console.log("Asignaturas: " + asignaturasSeleccionadas.map(a => a.toString).join(", "));
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
                                    
                    for(let asignatura of estudiante.asignaturas){

                        console.log((estudiante.asignaturas.indexOf(asignatura) + 1) + ". " + asignatura[0].toString);

                    }

                    console.log("0. Volver");

                    do{

                        eleccion = Number.parseInt(window.prompt("Escoja una asignatura:"));
                        if(Number.isNaN(eleccion)) eleccion = -1;

                    }while(eleccion < 0 || eleccion > estudiante.asignaturas.length)

                    if(eleccion == 0){
                        eleccion = -1;
                        break;
                    }
            
                    const asignatura = estudiante.asignaturas[eleccion - 1][0];

                    console.clear();
                    console.log("< Calificar - Poner Nota >");
                    console.log("Estudiante: " + estudiante.toString);
                    console.log("Asignatura: " + asignatura.toString);

                    do{

                        eleccion = Number.parseFloat(window.prompt("Nota:")).toFixed(2);
                        if(Number.isNaN(eleccion)) eleccion = -1;

                    }while(eleccion < 0 || eleccion > 10);

                    const nota = eleccion;

                    try{

                        estudiante.calificar(asignatura, nota);
                        console.log("Nota: " + nota);
                        window.alert("Estudiante calificado correctamente.");

                    }catch(error){

                        window.alert(error);

                    }

                }while(eleccion < 0 || eleccion > estudiante.asignaturas.length);

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