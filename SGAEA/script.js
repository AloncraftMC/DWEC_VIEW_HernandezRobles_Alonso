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
        this.#codigoPostal = codigoPostal;
        this.#provincia = provincia;
        this.#localidad = localidad;

    }

}

class Estudiante{

    #id;
    #nombre;
    #edad;
    #direccion;

    constructor(id, nombre, edad, direccion){

        this.#id = id;
        this.#edad = edad;
        this.#direccion = direccion;

        this.#nombre = (nombre.match(/[a-zA-Z ]+/)) ? nombre : "Nuevo estudiante";

    }

    get id(){
        return this.#id;
    }

}

class ListaEstudiantes{

    #lista;

    constructor(estudiantes){

        this.#lista = [];
        this.#lista.push(...estudiantes);

    }

    añadirEstudiante(estudiante){
        this.#lista.push(estudiante);
    }

    eliminarEstudiante(id){
        
        this.#lista = this.#lista.filter(estudiante => estudiante.id)

    }

}

class Asignatura{

    #nombre;
    #calificaciones;

    constructor(nombre){
        
        this.#nombre = (nombre.match(/[a-zA-Z[I|V|X|L|C|D|M] ]+/)) ? nombre : "Nueva asignatura";

    }

}