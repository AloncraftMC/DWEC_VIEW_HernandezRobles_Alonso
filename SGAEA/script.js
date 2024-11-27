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

        if(nombre)

    }

}