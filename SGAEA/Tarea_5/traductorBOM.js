import { Direccion } from "./direccion.js";
import { Estudiante } from "./estudiante.js";
import { Asignatura } from "./asignatura.js";

export class TraductorBOM {

    #listaDirecciones;
    #listaEstudiantes;
    #listaAsignaturas;

    constructor(listaDirecciones, listaEstudiantes, listaAsignaturas) {
        this.#listaDirecciones = listaDirecciones;
        this.#listaEstudiantes = listaEstudiantes;
        this.#listaAsignaturas = listaAsignaturas;
    }

    cargarDatos() {
        
        const direccionesJSON = JSON.parse(localStorage.getItem("listaDirecciones")) || [];
        const estudiantesJSON = JSON.parse(localStorage.getItem("listaEstudiantes")) || [];
        const asignaturasJSON = JSON.parse(localStorage.getItem("listaAsignaturas")) || [];

        // Reconstrucción de las direcciones

        this.#listaDirecciones.length = 0;

        for (const d of direccionesJSON) {
            this.#listaDirecciones.push(new Direccion(d.calle, d.numero, d.piso, d.codigoPostal, d.provincia, d.localidad));
        }

        // Reconstrucción de las asignaturas

        this.#listaAsignaturas.listaRef.length = 0;

        for (const a of asignaturasJSON) {

            const asignatura = new Asignatura(a.nombre);
            
            for (const calificacion of a.calificaciones) {
                asignatura.añadirCalificacion(calificacion);
            }

            this.#listaAsignaturas.añadirAsignatura(asignatura);

        }

        // Reconstrucción de los estudiantes

        this.#listaEstudiantes.listaRef.length = 0;

        for (const e of estudiantesJSON) {

            const direccion = this.#listaDirecciones.find(d => 
                d.calle === e.direccion.calle &&
                d.numero === e.direccion.numero &&
                d.piso === e.direccion.piso &&
                d.codigoPostal === e.direccion.codigoPostal &&
                d.provincia === e.direccion.provincia &&
                d.localidad === e.direccion.localidad
            );
        
            const estudiante = new Estudiante(e.nombre, e.edad, direccion);
        
            for (const a of e.asignaturas) {

                const asignatura = this.#listaAsignaturas.lista.find(asig => asig.nombre === a.asignatura.nombre);

                if (asignatura) {

                    estudiante.matricular(asignatura);

                    if (a.calificacion !== "Sin evaluar") {
                        estudiante.calificar(asignatura, a.calificacion);
                    }

                }

            }
        
            for (const registro of e.registros) {
                estudiante.añadirRegistro(registro.asignatura, registro.fecha, registro.tipo);
            }
        
            this.#listaEstudiantes.añadirEstudiante(estudiante);
            
        }
        
    }

    guardarDatos() {
        localStorage.setItem("listaDirecciones", JSON.stringify(this.#listaDirecciones.map(d => d.toJSON())));
        localStorage.setItem("listaEstudiantes", JSON.stringify(this.#listaEstudiantes.toJSON()));
        localStorage.setItem("listaAsignaturas", JSON.stringify(this.#listaAsignaturas.toJSON()));
    }
}
