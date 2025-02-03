// Clases

import { Direccion } from "./direccion.js";
import { Estudiante } from "./estudiante.js";
import { Asignatura } from "./asignatura.js";
import { ListaEstudiantes } from "./listaEstudiantes.js";
import { ListaAsignaturas } from "./listaAsignaturas.js";
import { TraductorBOM } from "./traductorBOM.js";
import { TraductorDOM } from "./traductorDOM.js";

/**
 * @global
 * @type {Direccion[]}
 * @description Lista de **direcciones**.
 * @see Direccion
 */
let listaDirecciones = [];

/**
 * @global
 * @constant
 * @type {ListaEstudiantes} 
 * @description **Lista** de **estudiantes**.
 * @see ListaEstudiantes
 */
const listaEstudiantes = new ListaEstudiantes();

/**
 * @global
 * @constant
 * @type {ListaAsignaturas} 
 * @description **Lista** de **asignaturas**.
 * @see ListaAsignaturas
 */
const listaAsignaturas = new ListaAsignaturas();

// Linkear listas con el traductorBOM

const traductorBOM = new TraductorBOM(listaDirecciones, listaEstudiantes, listaAsignaturas);

// Cargar datos

traductorBOM.cargarDatos();

// Guardar datos

document.body.addEventListener("click", () => {
    traductorBOM.guardarDatos();
});

// Traductor DOM

const traductorDOM = new TraductorDOM();
traductorDOM.menuActual = "menuPrincipal";

// Menú Principal - Declaramos botones

const crear = document.getElementById("crear");
const eliminar = document.getElementById("eliminar");
const matricular = document.getElementById("matricular");
const desmatricular = document.getElementById("desmatricular");
const auditoria = document.getElementById("auditoria");
const calificar = document.getElementById("calificar");
const buscar = document.getElementById("buscar");
const promedio = document.getElementById("promedio");
const reporte = document.getElementById("reporte");

crear.addEventListener("click", () => {
    traductorDOM.titulo = "Crear ➕";
    traductorDOM.subtitulo = "";
    traductorDOM.menuActual = "menuCrear";
});
eliminar.addEventListener("click", () => {
    traductorDOM.titulo = "Eliminar ➖";
    traductorDOM.subtitulo = "";
    traductorDOM.menuActual = (listaDirecciones.length == 0 && listaEstudiantes.lista.length == 0 && listaAsignaturas.lista.length == 0) ? "menuEliminarInaccesible" : "menuEliminar";
});
matricular.addEventListener("click", () => {

    traductorDOM.titulo = "Matricular ✍"
    traductorDOM.subtitulo = "Seleccionar Estudiante 👨‍🎓";

    if(listaEstudiantes.lista.length == 0 && listaAsignaturas.lista.length == 0) {
        traductorDOM.menuActual = "menuMatricularInaccesible";
    }else if(listaEstudiantes.lista.length == 0) {
        traductorDOM.menuActual = "menuMatricularInaccesibleEstudiantes";
    }else if(listaAsignaturas.lista.length == 0) {
        traductorDOM.menuActual = "menuMatricularInaccesibleAsignaturas";
    }else if(listaEstudiantes.lista.every(est => est.asignaturas.length == listaAsignaturas.lista.length)) {
        traductorDOM.menuActual = "menuMatricularInaccesibleTodos";
    }else{

        traductorDOM.menuActual = "menuMatricular";

        // Generar menú de estudiantes

        const menuMatricular = document.getElementById("menuMatricular");
        const volverMatricular = document.getElementById("volverMatricular");

        // Volver

        volverMatricular.addEventListener("click", () => {
            traductorDOM.titulo = "SGAEA";
            traductorDOM.subtitulo = "(Sistema de Gestión Académica de Estudiantes y Asignaturas)";
            traductorDOM.menuActual = "menuPrincipal";
        });

        // Borrar contenido antes que nada

        menuMatricular.innerHTML = "";

        // Obtener la lista de estudiantes que no estén matriculados de todas las asignaturas

        const estudiantesDisponibles = listaEstudiantes.lista.filter(est => est.asignaturas.length < listaAsignaturas.lista.length);

        // Añadir botones de estudiantes

        for(let est of estudiantesDisponibles) {

            // Creamos botón

            const botonEstudiante = document.createElement("button");

            botonEstudiante.classList.add("boton");
            botonEstudiante.textContent = (estudiantesDisponibles.indexOf(est) + 1) + ". " + est.toString();

            menuMatricular.appendChild(botonEstudiante);

            // Evento de click

            botonEstudiante.addEventListener("click", () => {

                // Cambiamos el menú

                traductorDOM.titulo = "Matricular ✍";
                traductorDOM.subtitulo = "Seleccionar Asignaturas 📚";
                traductorDOM.menuActual = "menuMatricularAsignaturas";

                // Guardamos estudiante

                const estudiante = listaEstudiantes.lista.indexOf(est);

                // Generar menú de asignaturas

                let asignaturasSeleccionadas = [];

                const menuMatricularAsignaturas = document.getElementById("menuMatricularAsignaturas");
                const estudianteMatricularAsignaturas = document.getElementById("estudianteMatricularAsignaturas");
                const divMatricularAsignaturas = document.getElementById("divMatricularAsignaturas");
                const continuarMatricularAsignaturas = document.getElementById("continuarMatricularAsignaturas");
                const volverMatricularAsignaturas = document.getElementById("volverMatricularAsignaturas");

                // Continuar

                continuarMatricularAsignaturas.addEventListener("click", () => {

                    if(asignaturasSeleccionadas.length > 0) {
                        
                        // Cambiamos menú

                        traductorDOM.titulo = "Matricular ✍";
                        traductorDOM.subtitulo = "Matrícula Terminada ✅";
                        traductorDOM.menuActual = "menuMatricularAsignaturasTerminado";

                        // Generar menú de asignaturas terminado

                        const menuMatricularAsignaturasTerminado = document.getElementById("menuMatricularAsignaturasTerminado");
                        const volverMatricularAsignaturasTerminado = document.getElementById("volverMatricularAsignaturasTerminado");

                        // Volver

                        volverMatricularAsignaturasTerminado.addEventListener("click", () => {
                            traductorDOM.titulo = "SGAEA";
                            traductorDOM.subtitulo = "(Sistema de Gestión Académica de Estudiantes y Asignaturas)";
                            traductorDOM.menuActual = "menuPrincipal";
                        });

                        // Parseamos datos

                        const estudiante = listaEstudiantes.lista.indexOf(est);
                        const asignaturas = asignaturasSeleccionadas.map(asig => asig.nombre);

                        // Matricular asignaturas

                        for(let asig of asignaturasSeleccionadas) {

                            listaEstudiantes.lista[estudiante].matricular(asig);

                        }

                        // Mostrar estudiante matriculado en el menú de estudiante terminado

                        const estudianteMatricularAsignaturasTerminado = document.getElementById("estudianteMatricularAsignaturasTerminado");
                        const asignaturasMatricularAsignaturasTerminado = document.getElementById("asignaturasMatricularAsignaturasTerminado");

                        estudianteMatricularAsignaturasTerminado.textContent = "Estudiante: " + listaEstudiantes.lista[estudiante].toString();
                        asignaturasMatricularAsignaturasTerminado.textContent = "Asignaturas (" + asignaturas.length + "): " + asignaturas.join(", ");

                        // Añadir botón de volver

                        menuMatricularAsignaturasTerminado.appendChild(volverMatricularAsignaturasTerminado);

                    }else{

                        traductorDOM.titulo = "Matricular ✍";
                        traductorDOM.subtitulo = "Seleccionar Asignaturas 📚";
                        traductorDOM.menuActual = "menuMatricularAsignaturasVacio";

                    }

                });

                // Volver

                volverMatricularAsignaturas.addEventListener("click", () => {
                    traductorDOM.titulo = "Matricular ✍";
                    traductorDOM.subtitulo = "Seleccionar Estudiante 👨‍🎓";
                    traductorDOM.menuActual = "menuMatricular";
                });

                // Borrar contenido antes que nada

                menuMatricularAsignaturas.innerHTML = "";

                // Mostrar estudiante seleccionado

                estudianteMatricularAsignaturas.textContent = "Estudiante: " + listaEstudiantes.lista[estudiante].toString();

                menuMatricularAsignaturas.appendChild(estudianteMatricularAsignaturas);

                // Obtenemos la lista de asignaturas de las cuales el estudiante no está matriculado

                const asignaturasDisponibles = listaAsignaturas.lista.filter(asig => !listaEstudiantes.lista[estudiante].asignaturas.map(asig => asig[0]).includes(asig));

                // Añadir botones de asignaturas

                for(let asig of asignaturasDisponibles) {

                    // Creamos botón

                    const botonAsignatura = document.createElement("button");

                    botonAsignatura.classList.add("boton");
                    botonAsignatura.textContent = (asignaturasDisponibles.indexOf(asig) + 1) + ". " + asig.toString();

                    menuMatricularAsignaturas.appendChild(botonAsignatura);

                    // Evento de click

                    botonAsignatura.addEventListener("click", () => {

                        // Añadir clase

                        botonAsignatura.classList.toggle("seleccionado");

                        // Añadir o quitar asignatura de la lista de asignaturas seleccionadas

                        if(asignaturasSeleccionadas.includes(asig)) {

                            asignaturasSeleccionadas = asignaturasSeleccionadas.filter(asignatura => asignatura !== asig);

                        }else{

                            asignaturasSeleccionadas.push(asig);

                        }

                    });

                }

                // Añadimos el contenedor con los botones al menuMatricularAsignaturas
                menuMatricularAsignaturas.appendChild(divMatricularAsignaturas);

            });

        }

        // Añadir botón de volver

        menuMatricular.appendChild(volverMatricular);

    }

});
desmatricular.addEventListener("click", () => {

    traductorDOM.titulo = "Desmatricular 📤";
    traductorDOM.subtitulo = "Seleccionar Estudiante 👨‍🎓";

    if(listaEstudiantes.lista.length == 0 && listaAsignaturas.lista.length == 0) {
        traductorDOM.menuActual = "menuDesmatricularInaccesible";
    }else if(listaEstudiantes.lista.length == 0) {
        traductorDOM.menuActual = "menuDesmatricularInaccesibleEstudiantes";
    }else if(listaAsignaturas.lista.length == 0) {
        traductorDOM.menuActual = "menuDesmatricularInaccesibleAsignaturas";
    }else if(listaEstudiantes.lista.every(e => e.asignaturas.length == 0)) {
        traductorDOM.menuActual = "menuDesmatricularInaccesibleNadie";
    }else{

        traductorDOM.menuActual = "menuDesmatricular";

        // Generar menú de estudiantes

        const menuDesmatricular = document.getElementById("menuDesmatricular");
        const volverDesmatricular = document.getElementById("volverDesmatricular");

        // Volver

        volverDesmatricular.addEventListener("click", () => {
            traductorDOM.titulo = "SGAEA";
            traductorDOM.subtitulo = "(Sistema de Gestión Académica de Estudiantes y Asignaturas)";
            traductorDOM.menuActual = "menuPrincipal";
        });

        // Borrar contenido antes que nada

        menuDesmatricular.innerHTML = "";

        // Obtener la lista de estudiantes que estén matriculados de alguna asignatura

        const estudiantesDisponibles = listaEstudiantes.lista.filter(est => est.asignaturas.length > 0);

        // Añadir botones de estudiantes

        for(let est of estudiantesDisponibles) {

            // Creamos botón

            const botonEstudiante = document.createElement("button");

            botonEstudiante.classList.add("boton");
            botonEstudiante.textContent = (estudiantesDisponibles.indexOf(est) + 1) + ". " + est.toString();

            menuDesmatricular.appendChild(botonEstudiante);

            // Evento de click

            botonEstudiante.addEventListener("click", () => {

                // Cambiamos el menú

                traductorDOM.titulo = "Desmatricular 📤";
                traductorDOM.subtitulo = "Seleccionar Asignaturas 📚";
                traductorDOM.menuActual = "menuDesmatricularAsignaturas";

                // Guardamos estudiante

                const estudiante = listaEstudiantes.lista.indexOf(est);

                // Generar menú de asignaturas

                let asignaturasSeleccionadas = [];

                const menuDesmatricularAsignaturas = document.getElementById("menuDesmatricularAsignaturas");
                const divDesmatricularAsignaturas = document.getElementById("divDesmatricularAsignaturas");
                const estudianteDesmatricularAsignaturas = document.getElementById("estudianteDesmatricularAsignaturas");
                const continuarDesmatricularAsignaturas = document.getElementById("continuarDesmatricularAsignaturas");
                const volverDesmatricularAsignaturas = document.getElementById("volverDesmatricularAsignaturas");

                // Continuar

                continuarDesmatricularAsignaturas.addEventListener("click", () => {

                    if(asignaturasSeleccionadas.length > 0) {
                        
                        // Cambiamos menú

                        traductorDOM.titulo = "Desmatricular 📤";
                        traductorDOM.subtitulo = "Desmatrícula Terminada ✅";
                        traductorDOM.menuActual = "menuDesmatricularAsignaturasTerminado";

                        // Generar menú de asignaturas terminado

                        const menuDesmatricularAsignaturasTerminado = document.getElementById("menuDesmatricularAsignaturasTerminado");
                        const volverDesmatricularAsignaturasTerminado = document.getElementById("volverDesmatricularAsignaturasTerminado");

                        // Volver

                        volverDesmatricularAsignaturasTerminado.addEventListener("click", () => {
                            traductorDOM.titulo = "SGAEA";
                            traductorDOM.subtitulo = "(Sistema de Gestión Académica de Estudiantes y Asignaturas)";
                            traductorDOM.menuActual = "menuPrincipal";
                        });

                        // Parseamos datos

                        const estudiante = listaEstudiantes.lista.indexOf(est);
                        const asignaturas = asignaturasSeleccionadas.map(asig => asig.nombre);

                        // Por cada asignatura de la que estaba matriculado el estudiante, se elimina la calificación internamente en el objeto Asignatura.
                        // También se desmatriculan de las asignaturas

                        for (let asig of asignaturasSeleccionadas) {

                            let calificacion = listaEstudiantes.lista[estudiante].asignaturas.find(a => a[0] === asig)?.[1]; // Obtener calificación del estudiante en la asignatura
                            
                            if (typeof calificacion === "number") { // Solo eliminar si la calificación es un número
                                asig.eliminarCalificacion(calificacion);
                            }
                            
                            listaEstudiantes.lista[estudiante].desmatricular(asig);
                        
                        }
                        

                        // Mostrar estudiante desmatriculado en el menú de estudiante terminado

                        const estudianteDesmatricularAsignaturasTerminado = document.getElementById("estudianteDesmatricularAsignaturasTerminado");
                        const asignaturasDesmatricularAsignaturasTerminado = document.getElementById("asignaturasDesmatricularAsignaturasTerminado");

                        estudianteDesmatricularAsignaturasTerminado.textContent = "Estudiante: " + listaEstudiantes.lista[estudiante].toString();
                        asignaturasDesmatricularAsignaturasTerminado.textContent = "Asignaturas (" + asignaturas.length + "): " + asignaturas.join(", ");

                        // Añadir botón de volver

                        menuDesmatricularAsignaturasTerminado.appendChild(volverDesmatricularAsignaturasTerminado);

                    }else{

                        traductorDOM.titulo = "Desmatricular 📤";
                        traductorDOM.subtitulo = "Seleccionar Asignaturas 📚";
                        traductorDOM.menuActual = "menuDesmatricularAsignaturasVacio";

                    }

                });

                // Volver

                volverDesmatricularAsignaturas.addEventListener("click", () => {
                    traductorDOM.titulo = "Desmatricular 📤";
                    traductorDOM.subtitulo = "Seleccionar Estudiante 👨‍🎓";
                    traductorDOM.menuActual = "menuDesmatricular";
                });

                // Borrar contenido antes que nada

                menuDesmatricularAsignaturas.innerHTML = "";

                // Mostrar estudiante seleccionado

                estudianteDesmatricularAsignaturas.textContent = "Estudiante: " + listaEstudiantes.lista[estudiante].toString();

                menuDesmatricularAsignaturas.appendChild(estudianteDesmatricularAsignaturas);

                // Obtenemos la lista de asignaturas de las cuales el estudiante sí está matriculado

                const asignaturasDisponibles = listaEstudiantes.lista[estudiante].asignaturas.map(asig => asig[0]);

                // Añadir botones de asignaturas

                for(let asig of asignaturasDisponibles) {

                    // Creamos botón

                    const botonAsignatura = document.createElement("button");

                    botonAsignatura.classList.add("boton");
                    botonAsignatura.textContent = (asignaturasDisponibles.indexOf(asig) + 1) + ". " + asig.toString();

                    menuDesmatricularAsignaturas.appendChild(botonAsignatura);

                    // Evento de click

                    botonAsignatura.addEventListener("click", () => {

                        // Añadir clase

                        botonAsignatura.classList.toggle("seleccionado");

                        // Añadir o quitar asignatura de la lista de asignaturas seleccionadas

                        if(asignaturasSeleccionadas.includes(asig)) {

                            asignaturasSeleccionadas = asignaturasSeleccionadas.filter(asignatura => asignatura !== asig);

                        }else{

                            asignaturasSeleccionadas.push(asig);

                        }

                    });

                }

                // Añadimos el contenedor con los botones al menuDesmatricularAsignaturas
                menuDesmatricularAsignaturas.appendChild(divDesmatricularAsignaturas);

            });

        }

        // Añadir botón de volver

        menuDesmatricular.appendChild(volverDesmatricular);

    }

});
auditoria.addEventListener("click", () => {

    traductorDOM.titulo = "Registro de Auditoría 📋";
    traductorDOM.subtitulo = "";

    if(listaEstudiantes.lista.length == 0 && listaAsignaturas.lista.length == 0) {
        traductorDOM.menuActual = "menuAuditoriaInaccesible";
    }else if(listaEstudiantes.lista.length == 0) {
        traductorDOM.menuActual = "menuAuditoriaInaccesibleEstudiantes";
    }else if(listaAsignaturas.lista.length == 0) {
        traductorDOM.menuActual = "menuAuditoriaInaccesibleAsignaturas";
    }else{

        traductorDOM.menuActual = "menuAuditoria";
        traductorDOM.subtitulo = "Seleccionar Estudiante 👨‍🎓";

        // Generar menú de estudiantes

        const menuAuditoria = document.getElementById("menuAuditoria");
        const volverAuditoria = document.getElementById("volverAuditoria");

        // Volver

        volverAuditoria.addEventListener("click", () => {
            traductorDOM.titulo = "SGAEA";
            traductorDOM.subtitulo = "(Sistema de Gestión Académica de Estudiantes y Asignaturas)";
            traductorDOM.menuActual = "menuPrincipal";
        });

        // Borrar contenido antes que nada

        menuAuditoria.innerHTML = "";

       // Añadir botones de todos los estudiantes

        for(let est of listaEstudiantes.lista) {

            // Creamos botón

            const botonEstudiante = document.createElement("button");

            botonEstudiante.classList.add("boton");
            botonEstudiante.textContent = (listaEstudiantes.lista.indexOf(est) + 1) + ". " + est.toString();

            menuAuditoria.appendChild(botonEstudiante);

            // Evento de click

            botonEstudiante.addEventListener("click", () => {

                // Cambiamos el menú de forma que el subtítulo sea el nombre del estudiante seleccionado

                traductorDOM.titulo = "Registro de Auditoría 📋";
                traductorDOM.subtitulo = est.nombre + " 👨‍🎓";
                traductorDOM.menuActual = "menuAuditoriaEstudiante";

                // Guardamos estudiante

                const estudiante = listaEstudiantes.lista.indexOf(est);

                // Generamos registros del estudiante

                const registros = listaEstudiantes.lista[estudiante].registros;

                // Generar menú de registros

                const menuAuditoriaEstudiante = document.getElementById("menuAuditoriaEstudiante");
                const volverAuditoriaEstudiante = document.getElementById("volverAuditoriaEstudiante");

                // Volver

                volverAuditoriaEstudiante.addEventListener("click", () => {
                    traductorDOM.titulo = "Registro de Auditoría 📋";
                    traductorDOM.subtitulo = "";
                    traductorDOM.menuActual = "menuAuditoria";
                });

                // Borrar contenido antes que nada

                menuAuditoriaEstudiante.innerHTML = "";

                // Añadir registros si existen o mensaje de que no existen registros

                if(registros.length == 0){
                    
                    const cajaRegistro = document.createElement("div");

                    cajaRegistro.classList.add("registro");
                    cajaRegistro.textContent = "No existen registros.";

                    menuAuditoriaEstudiante.appendChild(cajaRegistro);

                }else{

                    for(let reg of registros) {

                        // Creamos cajilla de registro

                        const cajaRegistro = document.createElement("div");

                        cajaRegistro.classList.add("registro");
                        cajaRegistro.textContent = reg;

                        menuAuditoriaEstudiante.appendChild(cajaRegistro);

                    }

                }

                // Añadir botón de volver

                menuAuditoriaEstudiante.appendChild(volverAuditoriaEstudiante);

            });

        }

        // Añadir botón de volver

        menuAuditoria.appendChild(volverAuditoria);

    }

});
calificar.addEventListener("click", () => {

    traductorDOM.titulo = "Calificar 🔢";
    traductorDOM.subtitulo = "Seleccionar Estudiante 👨‍🎓";
    
    if(listaEstudiantes.lista.length == 0 && listaAsignaturas.lista.length == 0) {
        traductorDOM.menuActual = "menuCalificarInaccesible";
    }else if(listaEstudiantes.lista.length == 0) {
        traductorDOM.menuActual = "menuCalificarInaccesibleEstudiantes";
    }else if(listaAsignaturas.lista.length == 0) {
        traductorDOM.menuActual = "menuCalificarInaccesibleAsignaturas";
    }else if(listaEstudiantes.lista.every(e => e.asignaturas.length == 0)) {
        traductorDOM.menuActual = "menuCalificarInaccesibleNadie";
    }else{

        traductorDOM.menuActual = "menuCalificar";
        traductorDOM.subtitulo = "Seleccionar Estudiante 👨‍🎓";

        // Generar menú de estudiantes

        const menuCalificar = document.getElementById("menuCalificar");
        const volverCalificar = document.getElementById("volverCalificar");

        // Volver

        volverCalificar.addEventListener("click", () => {
            traductorDOM.titulo = "SGAEA";
            traductorDOM.subtitulo = "(Sistema de Gestión Académica de Estudiantes y Asignaturas)";
            traductorDOM.menuActual = "menuPrincipal";
        });

        // Borrar contenido antes que nada

        menuCalificar.innerHTML = "";

        // Añadir botones de los estudiantes de los cuales estén matriculados de alguna asignatura

        const estudiantesDisponibles = listaEstudiantes.lista.filter(est => est.asignaturas.length > 0);

        for(let est of estudiantesDisponibles) {

            // Creamos botón

            const botonEstudiante = document.createElement("button");

            botonEstudiante.classList.add("boton");
            botonEstudiante.textContent = (estudiantesDisponibles.indexOf(est) + 1) + ". " + est.toString();

            menuCalificar.appendChild(botonEstudiante);

            // Evento de click

            botonEstudiante.addEventListener("click", () => {

                // Cambiamos el menú

                traductorDOM.titulo = "Calificar 🔢";
                traductorDOM.subtitulo = "Seleccionar Asignatura 📕";
                traductorDOM.menuActual = "menuCalificarAsignatura";

                // Guardamos estudiante

                const estudiante = listaEstudiantes.lista.indexOf(est);

                // Generar menú de asignaturas

                const menuCalificarAsignatura = document.getElementById("menuCalificarAsignatura");
                const estudianteCalificarAsignatura = document.getElementById("estudianteCalificarAsignatura");
                const volverCalificarAsignatura = document.getElementById("volverCalificarAsignatura");

                // Volver

                volverCalificarAsignatura.addEventListener("click", () => {
                    traductorDOM.titulo = "Calificar 🔢";
                    traductorDOM.subtitulo = "Seleccionar Estudiante 👨‍🎓";
                    traductorDOM.menuActual = "menuCalificar";
                });

                // Borrar contenido antes que nada

                menuCalificarAsignatura.innerHTML = "";

                // Mostrar estudiante seleccionado

                estudianteCalificarAsignatura.textContent = "Estudiante: " + listaEstudiantes.lista[estudiante].toString();

                menuCalificarAsignatura.appendChild(estudianteCalificarAsignatura);

                // Añadir botones de las asignaturas de las cuales está matriculado el estudiante, añadiendo (nota) si ya está calificado con ojo, un número. También con su índice.

                for(let asig of listaEstudiantes.lista[estudiante].asignaturas) {

                    // Creamos botón

                    const botonAsignatura = document.createElement("button");
                    
                    botonAsignatura.classList.add("boton");
                    botonAsignatura.textContent = (listaEstudiantes.lista[estudiante].asignaturas.indexOf(asig) + 1) + ". " + asig[0].toString() + (asig[1] != null && typeof(asig[1]) != "string" ? " (" + asig[1] + ")" : "");

                    menuCalificarAsignatura.appendChild(botonAsignatura);

                    // Evento de click

                    botonAsignatura.addEventListener("click", () => {

                        // Guardamos asignatura

                        const asignatura = asig[0];

                        // Cambiamos el menú

                        traductorDOM.titulo = "Calificar 🔢";
                        traductorDOM.subtitulo = "Poner Nota ✍";
                        traductorDOM.menuActual = "menuCalificarNota";

                        // Generar menú de nota
                        
                        const notaCalificarNota = document.getElementById("notaCalificarNota");
                        const formCalificarNota = document.getElementById("formCalificarNota");
                        const volverCalificarNota = document.getElementById("volverCalificarNota");

                        // Limpiar campos

                        notaCalificarNota.value = "";

                        // Volver

                        volverCalificarNota.addEventListener("click", () => {
                            traductorDOM.titulo = "Calificar 🔢";
                            traductorDOM.subtitulo = "Seleccionar Asignatura 📕";
                            traductorDOM.menuActual = "menuCalificarAsignatura";
                        });

                        // Mostrar estudiante y asignatura seleccionados

                        estudianteCalificarNota.textContent = "Estudiante: " + listaEstudiantes.lista[estudiante].toString();
                        asignaturaCalificarNota.textContent = "Asignatura: " + asignatura.toString();

                        // Evento de submit

                        formCalificarNota.addEventListener("submit", (event) => {

                            // Hacemos que el formulario no se envíe

                            event.preventDefault();

                            // Parseamos datos

                            const nota = parseFloat(notaCalificarNota.value);

                            // Si no existe una nota ya calificada, la calificamos. Si existe y no es un string, la modificamos. Si es un string, no hacemos nada.

                            if(listaEstudiantes.lista[estudiante].asignaturas.find(asig => asig[0] == asignatura)[1] != null && typeof(listaEstudiantes.lista[estudiante].asignaturas.find(asig => asig[0] == asignatura)[1]) != "string") {

                                // Cambiamos el menú

                                traductorDOM.titulo = "Calificar 🔢";
                                traductorDOM.subtitulo = "Poner Nota ✍";
                                traductorDOM.menuActual = "menuCalificarNotaSobreescritura";

                                // Generar menú de nota sobreescritura

                                const confirmacionCalificarNotaSobreescritura = document.getElementById("confirmacionCalificarNotaSobreescritura");
                                const siCalificarNotaSobreescritura = document.getElementById("siCalificarNotaSobreescritura");
                                const noCalificarNotaSobreescritura = document.getElementById("noCalificarNotaSobreescritura");

                                // Mostrar nota con riesgo de sobreescribir

                                confirmacionCalificarNotaSobreescritura.textContent = "¿Seguro que quiere sobreescribir la nota anterior (" + listaEstudiantes.lista[estudiante].asignaturas.find(asig => asig[0] == asignatura)[1] + ")?";

                                // Si

                                siCalificarNotaSobreescritura.addEventListener("click", () => {

                                    // Calificamos

                                    listaEstudiantes.lista[estudiante].calificar(asignatura, nota);

                                    // Cambiamos menú

                                    traductorDOM.titulo = "Calificar 🔢";
                                    traductorDOM.subtitulo = "Estudiante Calificado ✅";
                                    traductorDOM.menuActual = "menuCalificarNotaTerminado";

                                    // Generar menú de nota terminado

                                    const estudianteCalificarNotaTerminado = document.getElementById("estudianteCalificarNotaTerminado");
                                    const asignaturaCalificarNotaTerminado = document.getElementById("asignaturaCalificarNotaTerminado");
                                    const notaCalificarNotaTerminado = document.getElementById("notaCalificarNotaTerminado");
                                    const volverCalificarNotaTerminado = document.getElementById("volverCalificarNotaTerminado");

                                    // Volver

                                    volverCalificarNotaTerminado.addEventListener("click", () => {
                                        traductorDOM.titulo = "SGAEA";
                                        traductorDOM.subtitulo = "(Sistema de Gestión Académica de Estudiantes y Asignaturas)";
                                        traductorDOM.menuActual = "menuPrincipal";
                                    });

                                    // Mostrar estudiante, asignatura y nota seleccionados

                                    estudianteCalificarNotaTerminado.textContent = "Estudiante: " + listaEstudiantes.lista[estudiante].toString();
                                    asignaturaCalificarNotaTerminado.textContent = "Asignatura: " + asignatura.toString();
                                    notaCalificarNotaTerminado.textContent = "Nota: " + + nota.toFixed(2);

                                });

                                // No

                                noCalificarNotaSobreescritura.addEventListener("click", () => {
                                    traductorDOM.titulo = "Calificar 🔢";
                                    traductorDOM.subtitulo = "Poner Nota ✍";
                                    traductorDOM.menuActual = "menuCalificarNota";
                                });

                            }else{

                                // Calificamos

                                listaEstudiantes.lista[estudiante].calificar(asignatura, nota);

                                // Generar menú de nota terminado

                                const estudianteCalificarNotaTerminado = document.getElementById("estudianteCalificarNotaTerminado");
                                const asignaturaCalificarNotaTerminado = document.getElementById("asignaturaCalificarNotaTerminado");
                                const notaCalificarNotaTerminado = document.getElementById("notaCalificarNotaTerminado");
                                const volverCalificarNotaTerminado = document.getElementById("volverCalificarNotaTerminado");

                                // Volver

                                volverCalificarNotaTerminado.addEventListener("click", () => {
                                    traductorDOM.titulo = "SGAEA";
                                    traductorDOM.subtitulo = "(Sistema de Gestión Académica de Estudiantes y Asignaturas)";
                                    traductorDOM.menuActual = "menuPrincipal";
                                });

                                // Mostrar estudiante, asignatura y nota seleccionados

                                estudianteCalificarNotaTerminado.textContent = "Estudiante: " + listaEstudiantes.lista[estudiante].toString();
                                asignaturaCalificarNotaTerminado.textContent = "Asignatura: " + asignatura.toString();
                                notaCalificarNotaTerminado.textContent = "Nota: " + nota.toFixed(2);

                                // Cambiamos el menú

                                traductorDOM.titulo = "Calificar 🔢";
                                traductorDOM.subtitulo = "Estudiante Calificado ✅";
                                traductorDOM.menuActual = "menuCalificarNotaTerminado";

                            }

                        });

                    });

                }

                // Añadir botón de volver
                
                menuCalificarAsignatura.appendChild(volverCalificarAsignatura);

            });

        }

        // Añadir botón de volver

        menuCalificar.appendChild(volverCalificar);

    }
    
});

buscar.addEventListener("click", () => {

    traductorDOM.titulo = "Buscar 🔎";
    traductorDOM.subtitulo = "";

    if(listaEstudiantes.lista.length == 0 && listaAsignaturas.lista.length == 0) {
        traductorDOM.menuActual = "menuBuscarInaccesible";
    }else{
        traductorDOM.menuActual = "menuBuscar";
    }

});
promedio.addEventListener("click", () => {

    traductorDOM.titulo = "Calcular Promedio 💰";
    traductorDOM.subtitulo = "";

    if(listaEstudiantes.lista.length == 0 && listaAsignaturas.lista.length == 0) {
        traductorDOM.menuActual = "menuPromedioInaccesible";
    }else if(listaEstudiantes.lista.length == 0) {
        traductorDOM.menuActual = "menuPromedioInaccesibleEstudiantes";
    }else if(listaAsignaturas.lista.length == 0) {
        traductorDOM.menuActual = "menuPromedioInaccesibleAsignaturas";
    }else{
        traductorDOM.menuActual = "menuPromedio";
    }

});
let vistaTabla = false;
reporte.addEventListener("click", () => {

    traductorDOM.titulo = "Mostrar Reporte 🧾";
    traductorDOM.subtitulo = "";

    if (listaEstudiantes.lista.length == 0) {
        
        traductorDOM.menuActual = "menuReporteInaccesibleEstudiantes";
    
    } else {

        traductorDOM.menuActual = "menuReporte";

        const menuReporte = document.getElementById("menuReporte");
        const volverReporte = document.getElementById("volverReporte");

        menuReporte.innerHTML = "";

        const botonVista = document.createElement("button");

        botonVista.classList.add("boton");
        botonVista.classList.add("boton-vista");

        botonVista.addEventListener("click", () => {

            vistaTabla = !vistaTabla;

            if (vistaTabla) {

                botonVista.textContent = "Vista de Lista 📃";
                traductorDOM.subtitulo = "Vista de Tabla 📊";
                mostrarVistaTabla();

            } else {

                botonVista.textContent = "Vista de Tabla 📊";
                traductorDOM.subtitulo = "Vista de Lista 📃";
                mostrarVistaLista();

            }

        });

        menuReporte.appendChild(botonVista);
        comprobarVisibilidadBotonVista();

        menuReporte.appendChild(volverReporte);

        if (vistaTabla) {

            botonVista.textContent = "Vista de Lista 📃";
            traductorDOM.subtitulo = "Vista de Tabla 📊";
            mostrarVistaTabla();

        } else {

            botonVista.textContent = "Vista de Tabla 📊";
            traductorDOM.subtitulo = "Vista de Lista 📃";
            mostrarVistaLista();

        }

        function mostrarVistaLista() {
            
            menuReporte.innerHTML = "";
            menuReporte.appendChild(botonVista);
            menuReporte.appendChild(volverReporte);

            for (let est of listaEstudiantes.lista) {

                const divEstudiante = document.createElement("div");
                divEstudiante.classList.add("estudiante");

                const h2Estudiante = document.createElement("h2");
                h2Estudiante.textContent = "[" + est.id + "] " + est.nombre;

                const detallesDatos = document.createElement("details");
                detallesDatos.open = false;

                const resumenDatos = document.createElement("summary");
                resumenDatos.textContent = "👤 Datos Personales";
                resumenDatos.classList.add("boton");
                detallesDatos.appendChild(resumenDatos);

                const divDatosPersonales = document.createElement("div");
                divDatosPersonales.innerHTML = `
                    <p class="grande"><b>Nombre:</b> ${est.nombre}</p>
                    <p class="grande"><b>Edad:</b> ${est.edad}</p>
                `;

                const detallesDireccion = document.createElement("details");
                detallesDireccion.open = false;

                const resumenDireccion = document.createElement("summary");
                resumenDireccion.textContent = "📍 Dirección";
                resumenDireccion.classList.add("boton");
                detallesDireccion.appendChild(resumenDireccion);

                const divDireccion = document.createElement("div");
                divDireccion.innerHTML = `
                    <p><b>Calle:</b> ${est.direccion.calle}</p>
                    <p><b>Número:</b> ${est.direccion.numero}</p>
                    <p><b>Piso:</b> ${est.direccion.piso}</p>
                    <p><b>Código Postal:</b> ${est.direccion.codigoPostal}</p>
                    <p><b>Provincia:</b> ${est.direccion.provincia}</p>
                    <p><b>Localidad:</b> ${est.direccion.localidad}</p>
                `;

                detallesDireccion.appendChild(divDireccion);
                divDatosPersonales.appendChild(detallesDireccion);
                detallesDatos.appendChild(divDatosPersonales);

                const detallesCalificaciones = document.createElement("details");
                const resumenCalificaciones = document.createElement("summary");
                resumenCalificaciones.textContent = "📚 Calificaciones";
                resumenCalificaciones.classList.add("boton");
                detallesCalificaciones.appendChild(resumenCalificaciones);

                const divCalificaciones = document.createElement("div");

                for (let asig of est.asignaturas) {
                    const notaAsignatura = (typeof asig[1] === "string") ? asig[1] : Number(asig[1]).toFixed(2);
                    const pAsignatura = document.createElement("p");
                    pAsignatura.innerHTML = `<b>${asig[0].nombre}:</b> ${notaAsignatura}`;
                    divCalificaciones.appendChild(pAsignatura);
                }

                const pPromedio = document.createElement("p");
                pPromedio.innerHTML = `<b>Promedio:</b> ${est.promedio}`;
                divCalificaciones.appendChild(pPromedio);
                detallesCalificaciones.appendChild(divCalificaciones);

                divEstudiante.appendChild(h2Estudiante);
                divEstudiante.appendChild(detallesDatos);
                divEstudiante.appendChild(detallesCalificaciones);

                menuReporte.appendChild(divEstudiante);
            }
        }

        function mostrarVistaTabla() {
            
            menuReporte.innerHTML = "";
            menuReporte.appendChild(botonVista);
            menuReporte.appendChild(volverReporte);

            const tabla = document.createElement("table");
            tabla.classList.add("tablaReporte");

            const thead = document.createElement("thead");
            const trHead = document.createElement("tr");
            trHead.innerHTML = `
                <th>ID</th>
                <th>Nombre</th>
                <th>Edad</th>
                <th>Dirección</th>
                <th>Calificaciones</th>
            `;
            thead.appendChild(trHead);
            tabla.appendChild(thead);

            const tbody = document.createElement("tbody");

            for (let est of listaEstudiantes.lista) {
                const trEstudiante = document.createElement("tr");

                const tdId = document.createElement("td");
                tdId.textContent = est.id;
                trEstudiante.appendChild(tdId);

                const tdNombre = document.createElement("td");
                tdNombre.textContent = est.nombre;
                trEstudiante.appendChild(tdNombre);

                const tdEdad = document.createElement("td");
                tdEdad.textContent = est.edad;
                trEstudiante.appendChild(tdEdad);

                const tdDireccion = document.createElement("td");
                tdDireccion.innerHTML = `
                    <b>Calle:</b> ${est.direccion.calle}<br>
                    <b>Número:</b> ${est.direccion.numero}<br>
                    <b>Piso:</b> ${est.direccion.piso}<br>
                    <b>Código Postal:</b> ${est.direccion.codigoPostal}<br>
                    <b>Provincia:</b> ${est.direccion.provincia}<br>
                    <b>Localidad:</b> ${est.direccion.localidad}
                `;
                trEstudiante.appendChild(tdDireccion);

                const tdCalificaciones = document.createElement("td");
                tdCalificaciones.innerHTML = `
                    ${est.asignaturas.map(asig => `
                        <b>${asig[0].nombre}:</b> ${typeof asig[1] === "string" ? asig[1] : Number(asig[1]).toFixed(2)}<br>
                    `).join('')}
                    <b>Promedio:</b> ${est.promedio}
                `;
                trEstudiante.appendChild(tdCalificaciones);

                tbody.appendChild(trEstudiante);
            }

            tabla.appendChild(tbody);

            menuReporte.appendChild(tabla);

        }

        // Media query para cambiar a vista de lista si la pantalla es pequeña

        window.addEventListener("resize", comprobarVisibilidadBotonVista);
        
        function comprobarVisibilidadBotonVista() {

            if(traductorDOM.menuActual === "menuReporte"){

                if (window.innerWidth < 750) {

                    vistaTabla = false;
                    traductorDOM.subtitulo = "Vista de Lista 📃";
                    botonVista.style.display = "none";
                    mostrarVistaLista();
    
                }else{
    
                    botonVista.style.display = "block";
                    botonVista.textContent = vistaTabla ? "Vista de Lista 📃" : "Vista de Tabla 📊";
                    traductorDOM.subtitulo = vistaTabla ? "Vista de Tabla 📊" : "Vista de Lista 📃";
    
                }

            }

        }

    }

});

// 1. Menú Crear - Declaramos botones

const crearDireccion = document.getElementById("crearDireccion");
const crearEstudiante = document.getElementById("crearEstudiante");
const crearAsignatura = document.getElementById("crearAsignatura");
const volverCrear = document.getElementById("volverCrear");

crearDireccion.addEventListener("click", () => {

    // Parseamos datos

    const calleCrearDireccion = document.getElementById("calleCrearDireccion");
    const numeroCrearDireccion = document.getElementById("numeroCrearDireccion");
    const pisoCrearDireccion = document.getElementById("pisoCrearDireccion");
    const codigoPostalCrearDireccion = document.getElementById("codigoPostalCrearDireccion");
    const provinciaCrearDireccion = document.getElementById("provinciaCrearDireccion");
    const localidadCrearDireccion = document.getElementById("localidadCrearDireccion");

   // Limpiamos campos del formulario

    calleCrearDireccion.value = "";
    numeroCrearDireccion.value = "";
    pisoCrearDireccion.value = "";
    codigoPostalCrearDireccion.value = "";
    provinciaCrearDireccion.value = "";
    localidadCrearDireccion.value = "";

    // Cambiamos el menú

    traductorDOM.titulo = "Crear Dirección ➕🏠";
    traductorDOM.subtitulo = "";
    traductorDOM.menuActual = "menuCrearDireccion";

});

    // 1.1. Crear Dirección - Declaramos botones

    const formCrearDireccion = document.getElementById("formCrearDireccion");
    const volverCrearDireccion = document.getElementById("volverCrearDireccion");

    formCrearDireccion.addEventListener("submit", (event) => {

        // Hacemos que el formulario no se envíe

        event.preventDefault();

        // Parseamos datos

        const calle = calleCrearDireccion.value;
        const numero = numeroCrearDireccion.value;
        const piso = pisoCrearDireccion.value;
        const codigoPostal = codigoPostalCrearDireccion.value;
        const provincia = provinciaCrearDireccion.value;
        const localidad = localidadCrearDireccion.value;

        // Añadimos dirección a la lista

        listaDirecciones.push(new Direccion(calle, numero, piso, codigoPostal, provincia, localidad));

        // Mostramos dirección creada en el menú de dirección terminado

        const calleCrearDireccionTerminado = document.getElementById("calleCrearDireccionTerminado");
        const numeroCrearDireccionTerminado = document.getElementById("numeroCrearDireccionTerminado");
        const pisoCrearDireccionTerminado = document.getElementById("pisoCrearDireccionTerminado");
        const codigoPostalCrearDireccionTerminado = document.getElementById("codigoPostalCrearDireccionTerminado");
        const provinciaCrearDireccionTerminado = document.getElementById("provinciaCrearDireccionTerminado");
        const localidadCrearDireccionTerminado = document.getElementById("localidadCrearDireccionTerminado");

        calleCrearDireccionTerminado.textContent = calleCrearDireccionTerminado.textContent + calle;
        numeroCrearDireccionTerminado.textContent = numeroCrearDireccionTerminado.textContent + numero;
        pisoCrearDireccionTerminado.textContent = pisoCrearDireccionTerminado.textContent + piso;
        codigoPostalCrearDireccionTerminado.textContent = codigoPostalCrearDireccionTerminado.textContent + codigoPostal;
        provinciaCrearDireccionTerminado.textContent = provinciaCrearDireccionTerminado.textContent + provincia;
        localidadCrearDireccionTerminado.textContent = localidadCrearDireccionTerminado.textContent + localidad;

        // Cambiamos el menú

        traductorDOM.titulo = "Crear Dirección ➕🏠";
        traductorDOM.subtitulo = "Dirección Creada ✅";
        traductorDOM.menuActual = "menuCrearDireccionTerminado";

    });
    volverCrearDireccion.addEventListener("click", () => {
        traductorDOM.titulo = "Crear ➕";
        traductorDOM.subtitulo = "";
        traductorDOM.menuActual = "menuCrear";
    });

        // 1.1.1. Crear Dirección Terminado

        const volverCrearDireccionTerminado = document.getElementById("volverCrearDireccionTerminado");

        volverCrearDireccionTerminado.addEventListener("click", () => {

            calleCrearDireccionTerminado.textContent = "Calle: ";
            numeroCrearDireccionTerminado.textContent = "Número: ";
            pisoCrearDireccionTerminado.textContent = "Piso: ";
            codigoPostalCrearDireccionTerminado.textContent = "Código Postal: ";
            provinciaCrearDireccionTerminado.textContent = "Provincia: ";
            localidadCrearDireccionTerminado.textContent = "Localidad: ";

            traductorDOM.titulo = "SGAEA";
            traductorDOM.subtitulo = "(Sistema de Gestión Académica de Estudiantes y Asignaturas)";
            traductorDOM.menuActual = "menuPrincipal";

        });

crearEstudiante.addEventListener("click", () => {

    traductorDOM.titulo = "Crear Estudiante ➕👨‍🎓";
    traductorDOM.subtitulo = (listaDirecciones.length > 0) ? "" : "Establecer Dirección 🏠";    
    traductorDOM.menuActual = (listaDirecciones.length > 0) ? "menuCrearEstudiantePreguntarDireccion" : "menuCrearEstudianteCrearDireccion";

    // Si no hay direcciones, creamos una

    if(traductorDOM.menuActual === "menuCrearEstudianteCrearDireccion") {

        // Parseamos datos

        const calleCrearEstudianteCrearDireccion = document.getElementById("calleCrearEstudianteCrearDireccion");
        const numeroCrearEstudianteCrearDireccion = document.getElementById("numeroCrearEstudianteCrearDireccion");
        const pisoCrearEstudianteCrearDireccion = document.getElementById("pisoCrearEstudianteCrearDireccion");
        const codigoPostalCrearEstudianteCrearDireccion = document.getElementById("codigoPostalCrearEstudianteCrearDireccion");
        const provinciaCrearEstudianteCrearDireccion = document.getElementById("provinciaCrearEstudianteCrearDireccion");
        const localidadCrearEstudianteCrearDireccion = document.getElementById("localidadCrearEstudianteCrearDireccion");

        // Limpiamos campos del formulario

        calleCrearEstudianteCrearDireccion.value = "";
        numeroCrearEstudianteCrearDireccion.value = "";
        pisoCrearEstudianteCrearDireccion.value = "";
        codigoPostalCrearEstudianteCrearDireccion.value = "";
        provinciaCrearEstudianteCrearDireccion.value = "";
        localidadCrearEstudianteCrearDireccion.value = "";

    }

});

    // 1.2. Crear Estudiante

    let direccionCrearEstudiante;

    // 1.2.0. Crear Estudiante Crear Dirección - Declaramos botones

    const formCrearEstudianteCrearDireccion = document.getElementById("formCrearEstudianteCrearDireccion");

    formCrearEstudianteCrearDireccion.addEventListener("submit", (event) => {

        // Hacemos que el formulario no se envíe

        event.preventDefault();

        // Parseamos datos

        const calle = calleCrearEstudianteCrearDireccion.value;
        const numero = numeroCrearEstudianteCrearDireccion.value;
        const piso = pisoCrearEstudianteCrearDireccion.value;
        const codigoPostal = codigoPostalCrearEstudianteCrearDireccion.value;
        const provincia = provinciaCrearEstudianteCrearDireccion.value;
        const localidad = localidadCrearEstudianteCrearDireccion.value;

        direccionCrearEstudiante = new Direccion(calle, numero, piso, codigoPostal, provincia, localidad);

        // Mostramos dirección creada en el menú de dirección terminado

        const calleCrearEstudianteCrearDireccionTerminado = document.getElementById("calleCrearEstudianteCrearDireccionTerminado");
        const numeroCrearEstudianteCrearDireccionTerminado = document.getElementById("numeroCrearEstudianteCrearDireccionTerminado");
        const pisoCrearEstudianteCrearDireccionTerminado = document.getElementById("pisoCrearEstudianteCrearDireccionTerminado");
        const codigoPostalCrearEstudianteCrearDireccionTerminado = document.getElementById("codigoPostalCrearEstudianteCrearDireccionTerminado");
        const provinciaCrearEstudianteCrearDireccionTerminado = document.getElementById("provinciaCrearEstudianteCrearDireccionTerminado");
        const localidadCrearEstudianteCrearDireccionTerminado = document.getElementById("localidadCrearEstudianteCrearDireccionTerminado");

        calleCrearEstudianteCrearDireccionTerminado.textContent = "Calle: ";
        numeroCrearEstudianteCrearDireccionTerminado.textContent = "Número: ";
        pisoCrearEstudianteCrearDireccionTerminado.textContent = "Piso: ";
        codigoPostalCrearEstudianteCrearDireccionTerminado.textContent = "Código Postal: ";
        provinciaCrearEstudianteCrearDireccionTerminado.textContent = "Provincia: ";
        localidadCrearEstudianteCrearDireccionTerminado.textContent = "Localidad: ";

        calleCrearEstudianteCrearDireccionTerminado.textContent = calleCrearEstudianteCrearDireccionTerminado.textContent + calle;
        numeroCrearEstudianteCrearDireccionTerminado.textContent = numeroCrearEstudianteCrearDireccionTerminado.textContent + numero;
        pisoCrearEstudianteCrearDireccionTerminado.textContent = pisoCrearEstudianteCrearDireccionTerminado.textContent + piso;
        codigoPostalCrearEstudianteCrearDireccionTerminado.textContent = codigoPostalCrearEstudianteCrearDireccionTerminado.textContent + codigoPostal;
        provinciaCrearEstudianteCrearDireccionTerminado.textContent = provinciaCrearEstudianteCrearDireccionTerminado.textContent + provincia;
        localidadCrearEstudianteCrearDireccionTerminado.textContent = localidadCrearEstudianteCrearDireccionTerminado.textContent + localidad;

        // Cambiamos el menú

        traductorDOM.titulo = "Crear Dirección ➕🏠";
        traductorDOM.subtitulo = "Dirección Establecida ✅";
        traductorDOM.menuActual = "menuCrearEstudianteCrearDireccionPreguntar";

    });
    volverCrearEstudianteCrearDireccion.addEventListener("click", () => {
        traductorDOM.titulo = "Crear ➕";
        traductorDOM.subtitulo = "";
        traductorDOM.menuActual = "menuCrear";
    });

    // 1.2.1. Crear Estudiante Preguntar Guardar Dirección - Declaramos botones

    const siCrearEstudianteGuardarDireccion = document.getElementById("siCrearEstudianteGuardarDireccion");
    const noCrearEstudianteGuardarDireccion = document.getElementById("noCrearEstudianteGuardarDireccion");

    siCrearEstudianteGuardarDireccion.addEventListener("click", () => {

        // Parseamos datos

        const calle = calleCrearEstudianteCrearDireccion.value;
        const numero = numeroCrearEstudianteCrearDireccion.value;
        const piso = pisoCrearEstudianteCrearDireccion.value;
        const codigoPostal = codigoPostalCrearEstudianteCrearDireccion.value;
        const provincia = provinciaCrearEstudianteCrearDireccion.value;
        const localidad = localidadCrearEstudianteCrearDireccion.value;

        // Guardamos dirección en la lista

        listaDirecciones.push(direccionCrearEstudiante);

        // Mostramos dirección guardada en el menú de dirección terminado

        const calleCrearEstudianteCrearDireccionGuardada = document.getElementById("calleCrearEstudianteCrearDireccionGuardada");
        const numeroCrearEstudianteCrearDireccionGuardada = document.getElementById("numeroCrearEstudianteCrearDireccionGuardada");
        const pisoCrearEstudianteCrearDireccionGuardada = document.getElementById("pisoCrearEstudianteCrearDireccionGuardada");
        const codigoPostalCrearEstudianteCrearDireccionGuardada = document.getElementById("codigoPostalCrearEstudianteCrearDireccionGuardada"); 
        const provinciaCrearEstudianteCrearDireccionGuardada = document.getElementById("provinciaCrearEstudianteCrearDireccionGuardada");
        const localidadCrearEstudianteCrearDireccionGuardada = document.getElementById("localidadCrearEstudianteCrearDireccionGuardada");

        calleCrearEstudianteCrearDireccionGuardada.textContent = calleCrearEstudianteCrearDireccionGuardada.textContent + calle;
        numeroCrearEstudianteCrearDireccionGuardada.textContent = numeroCrearEstudianteCrearDireccionGuardada.textContent + numero;
        pisoCrearEstudianteCrearDireccionGuardada.textContent = pisoCrearEstudianteCrearDireccionGuardada.textContent + piso;
        codigoPostalCrearEstudianteCrearDireccionGuardada.textContent = codigoPostalCrearEstudianteCrearDireccionGuardada.textContent + codigoPostal;
        provinciaCrearEstudianteCrearDireccionGuardada.textContent = provinciaCrearEstudianteCrearDireccionGuardada.textContent + provincia;
        localidadCrearEstudianteCrearDireccionGuardada.textContent = localidadCrearEstudianteCrearDireccionGuardada.textContent + localidad;

        // Cambiamos el menú

        traductorDOM.titulo = "Crear Estudiante ➕👨‍🎓";
        traductorDOM.subtitulo = "Dirección Guardada ✅";
        traductorDOM.menuActual = "menuCrearEstudianteCrearDireccionGuardada";
    
    });
    noCrearEstudianteGuardarDireccion.addEventListener("click", () => {
        traductorDOM.titulo = "Crear Estudiante ➕👨‍🎓";
        traductorDOM.subtitulo = "";
        traductorDOM.menuActual = "menuCrearEstudiante";
    });

    // 1.2.1.b Crear Estudiante Crear Dirección Guardada

    const continuarCrearEstudianteCrearDireccionGuardada = document.getElementById("continuarCrearEstudianteCrearDireccionGuardada");

    continuarCrearEstudianteCrearDireccionGuardada.addEventListener("click", () => {

        traductorDOM.titulo = "Crear Estudiante ➕👨‍🎓";
        traductorDOM.subtitulo = "";
        traductorDOM.menuActual = "menuCrearEstudiante";

    });

    // 1.2.2. Crear Estudiante Preguntar para Usar Dirección - Declaramos botones

    const siDireccionCrearEstudiante = document.getElementById("siDireccionCrearEstudiante");
    const noDireccionCrearEstudiante = document.getElementById("noDireccionCrearEstudiante");

    siDireccionCrearEstudiante.addEventListener("click", () => {

        // Generar menú de direcciones

        const menuCrearEstudianteSeleccionarDireccion = document.getElementById("menuCrearEstudianteSeleccionarDireccion");
        const volverCrearEstudianteSeleccionarDireccion = document.getElementById("volverCrearEstudianteSeleccionarDireccion");

        // Borrar contenido antes que nada

        menuCrearEstudianteSeleccionarDireccion.innerHTML = "";

        // Añadir botones de direcciones

        for(let dir of listaDirecciones) {

            const botonDireccion = document.createElement("button");

            botonDireccion.classList.add("boton");
            botonDireccion.textContent = (listaDirecciones.indexOf(dir) + 1) + ". " + dir.toString();

            menuCrearEstudianteSeleccionarDireccion.appendChild(botonDireccion);

            // Evento de click

            botonDireccion.addEventListener("click", () => {
                
                // Guardamos dirección

                direccionCrearEstudiante = dir;

                // Cambiamos de menú

                traductorDOM.titulo = "Crear Estudiante ➕👨‍🎓";
                traductorDOM.subtitulo = "";
                traductorDOM.menuActual = "menuCrearEstudiante";

            });

        }

        // Añadir botón de volver

        menuCrearEstudianteSeleccionarDireccion.appendChild(volverCrearEstudianteSeleccionarDireccion);

        // Cambiamos el menú

        traductorDOM.titulo = "Crear Estudiante ➕👨‍🎓";
        traductorDOM.subtitulo = "Seleccionar Dirección 🏠";
        traductorDOM.menuActual = "menuCrearEstudianteSeleccionarDireccion";

    });
    noDireccionCrearEstudiante.addEventListener("click", () => {

        traductorDOM.titulo = "Crear Estudiante ➕👨‍🎓";
        traductorDOM.subtitulo = "Establecer Dirección 🏠";
        traductorDOM.menuActual = "menuCrearEstudianteCrearDireccion";

        // Parseamos datos

        const calleCrearEstudianteCrearDireccion = document.getElementById("calleCrearEstudianteCrearDireccion");
        const numeroCrearEstudianteCrearDireccion = document.getElementById("numeroCrearEstudianteCrearDireccion");
        const pisoCrearEstudianteCrearDireccion = document.getElementById("pisoCrearEstudianteCrearDireccion");
        const codigoPostalCrearEstudianteCrearDireccion = document.getElementById("codigoPostalCrearEstudianteCrearDireccion");
        const provinciaCrearEstudianteCrearDireccion = document.getElementById("provinciaCrearEstudianteCrearDireccion");
        const localidadCrearEstudianteCrearDireccion = document.getElementById("localidadCrearEstudianteCrearDireccion");

        // Limpiamos campos del formulario

        calleCrearEstudianteCrearDireccion.value = "";
        numeroCrearEstudianteCrearDireccion.value = "";
        pisoCrearEstudianteCrearDireccion.value = "";
        codigoPostalCrearEstudianteCrearDireccion.value = "";
        provinciaCrearEstudianteCrearDireccion.value = "";
        localidadCrearEstudianteCrearDireccion.value = "";

    });
    volverCrearEstudiantePreguntarDireccion.addEventListener("click", () => {
        traductorDOM.titulo = "Crear ➕";
        traductorDOM.subtitulo = "";
        traductorDOM.menuActual = "menuCrear";
    });

    // 1.2.3. Crear Estudiante Seleccionar Dirección - Declaramos botones

    volverCrearEstudianteSeleccionarDireccion.addEventListener("click", () => {
        traductorDOM.titulo = "Crear ➕";
        traductorDOM.subtitulo = "";
        traductorDOM.menuActual = "menuCrear";
    });

    // 1.2.4. Crear Estudiante Tal Cual

    const formCrearEstudiante = document.getElementById("formCrearEstudiante");
    const volverCrearEstudiante = document.getElementById("volverCrearEstudiante");

    formCrearEstudiante.addEventListener("submit", (event) => {

        // Hacemos que el formulario no se envíe

        event.preventDefault();

        // Parseamos datos

        const nombre = document.getElementById("nombreCrearEstudiante").value;
        const edad = Number(document.getElementById("edadCrearEstudiante").value);

        // Añadimos estudiante a la lista

        listaEstudiantes.añadirEstudiante(new Estudiante(nombre, edad, direccionCrearEstudiante));

        // Mostramos estudiante creado en el menú de estudiante terminado

        traductorDOM.titulo = "Crear Estudiante ➕👨‍🎓";
        traductorDOM.subtitulo = "Estudiante Creado ✅";
        traductorDOM.menuActual = "menuCrearEstudianteTerminado";

        // Parseamos datos

        const nombreCrearEstudianteTerminado = document.getElementById("nombreCrearEstudianteTerminado");
        const edadCrearEstudianteTerminado = document.getElementById("edadCrearEstudianteTerminado");
        const direccionCrearEstudianteTerminado = document.getElementById("direccionCrearEstudianteTerminado");

        nombreCrearEstudianteTerminado.textContent = "Nombre: " + nombre;
        edadCrearEstudianteTerminado.textContent = "Edad: " + edad;
        direccionCrearEstudianteTerminado.textContent = "Dirección: " + direccionCrearEstudiante.toString();

    });
    volverCrearEstudiante.addEventListener("click", () => {
        traductorDOM.titulo = "Crear ➕";
        traductorDOM.subtitulo = "";
        traductorDOM.menuActual = "menuCrear";
    });

    // 1.2.5. Crear Estudiante Terminado

    const volverCrearEstudianteTerminado = document.getElementById("volverCrearEstudianteTerminado");

    volverCrearEstudianteTerminado.addEventListener("click", () => {
        traductorDOM.titulo = "SGAEA";
        traductorDOM.subtitulo = "(Sistema de Gestión Académica de Estudiantes y Asignaturas)";
        traductorDOM.menuActual = "menuPrincipal";
    });

crearAsignatura.addEventListener("click", () => {

    // Parseamos datos

    const nombreCrearAsignatura = document.getElementById("nombreCrearAsignatura");

    // Limpiamos campos del formulario

    nombreCrearAsignatura.value = "";

    // Cambiamos el menú

    traductorDOM.titulo = "Crear Asignatura ➕📕";
    traductorDOM.subtitulo = "";
    traductorDOM.menuActual = "menuCrearAsignatura";

});

    // 1.3. Crear Asignatura

    const formCrearAsignatura = document.getElementById("formCrearAsignatura");
    const volverCrearAsignatura = document.getElementById("volverCrearAsignatura");

    formCrearAsignatura.addEventListener("submit", (event) => {
        
        // Hacemos que el formulario no se envíe

        event.preventDefault();

        // Parseamos datos

        const nombre = document.getElementById("nombreCrearAsignatura").value;

        // Añadimos asignatura a la lista

        try{
            
            listaAsignaturas.añadirAsignatura(new Asignatura(nombre));

            // Mostramos asignatura creada en el menú de asignatura guardada

            const nombreCrearAsignaturaGuardada = document.getElementById("nombreCrearAsignaturaGuardada");

            nombreCrearAsignaturaGuardada.textContent = "Nombre: " + nombre;

            // Cambiamos el menú

            traductorDOM.titulo = "Crear Asignatura ➕📕";
            traductorDOM.subtitulo = "Asignatura Creada ✅";
            traductorDOM.menuActual = "menuCrearAsignaturaGuardada";

        }catch(error){

            traductorDOM.titulo = "Crear Asignatura ➕📕";
            traductorDOM.subtitulo = "Asignatura No Creada ❌";
            traductorDOM.menuActual = "menuCrearAsignaturaError";

            // Volver

            const volverCrearAsignaturaError = document.getElementById("volverCrearAsignaturaError");

            volverCrearAsignaturaError.addEventListener("click", () => {
                traductorDOM.titulo = "Crear Asignatura ➕📕";
                traductorDOM.subtitulo = "";
                traductorDOM.menuActual = "menuCrearAsignatura";
            });

        };

    });
    volverCrearAsignatura.addEventListener("click", () => {
        traductorDOM.titulo = "Crear ➕";
        traductorDOM.subtitulo = "";
        traductorDOM.menuActual = "menuCrear";
    });

    // 1.3.1. Crear Asignatura Guardada

    const volverCrearAsignaturaGuardada = document.getElementById("volverCrearAsignaturaGuardada");

    volverCrearAsignaturaGuardada.addEventListener("click", () => {
        traductorDOM.titulo = "SGAEA";
        traductorDOM.subtitulo = "(Sistema de Gestión Académica de Estudiantes y Asignaturas)";
        traductorDOM.menuActual = "menuPrincipal";
    });

volverCrear.addEventListener("click", () => {
    traductorDOM.titulo = "SGAEA";
    traductorDOM.subtitulo = "(Sistema de Gestión Académica de Estudiantes y Asignaturas)";
    traductorDOM.menuActual = "menuPrincipal";
});

// 2.0 Menú Eliminar no se puede entrar

const volverEliminarInaccesible = document.getElementById("volverEliminarInaccesible");

volverEliminarInaccesible.addEventListener("click", () => {
    traductorDOM.titulo = "SGAEA";
    traductorDOM.subtitulo = "(Sistema de Gestión Académica de Estudiantes y Asignaturas)";
    traductorDOM.menuActual = "menuPrincipal";
});

// 2.1 Menú Eliminar

const eliminarDireccion = document.getElementById("eliminarDireccion");
const eliminarEstudiante = document.getElementById("eliminarEstudiante");
const eliminarAsignatura = document.getElementById("eliminarAsignatura");
const volverEliminar = document.getElementById("volverEliminar");

eliminarDireccion.addEventListener("click", () => {

    traductorDOM.titulo = "Eliminar Dirección ➖🏠";
    traductorDOM.subtitulo = "";
    traductorDOM.menuActual = (listaDirecciones.length == 0) ? "menuEliminarDireccionInaccesible" : "menuEliminarDireccion";

    if(listaDirecciones.length > 0) {
        
        // Generar menú de direcciones

        const menuEliminarDireccion = document.getElementById("menuEliminarDireccion");
        const volverEliminarDireccion = document.getElementById("volverEliminarDireccion");

        // Volver

        volverEliminarDireccion.addEventListener("click", () => {
            traductorDOM.titulo = "Eliminar ➖";
            traductorDOM.subtitulo = "";
            traductorDOM.menuActual = "menuEliminar";
        });

        // Borrar contenido antes que nada

        menuEliminarDireccion.innerHTML = "";

        // Añadir botones de direcciones
        
        for(let dir of listaDirecciones) {

            const botonDireccion = document.createElement("button");

            botonDireccion.classList.add("boton");
            botonDireccion.textContent = (listaDirecciones.indexOf(dir) + 1) + ". " + dir.toString();

            menuEliminarDireccion.appendChild(botonDireccion);

            // Evento de click

            botonDireccion.addEventListener("click", () => {
                
                // Eliminamos dirección

                listaDirecciones.splice(listaDirecciones.indexOf(dir), 1);

                // Declaramos botones

                const menuEliminarDireccionTerminado = document.getElementById("menuEliminarDireccionTerminado");
                const volverEliminarDireccionTerminado = document.getElementById("volverEliminarDireccionTerminado");

                // Volver

                volverEliminarDireccionTerminado.addEventListener("click", () => {
                    traductorDOM.titulo = "SGAEA";
                    traductorDOM.subtitulo = "(Sistema de Gestión Académica de Estudiantes y Asignaturas)";
                    traductorDOM.menuActual = "menuPrincipal";
                });

                // Borrar contenido antes que nada

                menuEliminarDireccionTerminado.innerHTML = "";

                // Añadir lista actualizada de direcciones

                for(let dir of listaDirecciones) {

                    const direccion = document.createElement("h2");

                    direccion.textContent = (listaDirecciones.indexOf(dir) + 1) + ". " + dir.toString();

                    menuEliminarDireccionTerminado.appendChild(direccion);

                }

                // Añaadir botón de volver

                menuEliminarDireccionTerminado.appendChild(volverEliminarDireccionTerminado);

                // Cambiamos el menú

                traductorDOM.titulo = "Eliminar Dirección ➖🏠";
                traductorDOM.subtitulo = "Dirección Eliminada ✅";
                traductorDOM.menuActual = "menuEliminarDireccionTerminado";

            });

        }

        // Añadir botón de volver

        menuEliminarDireccion.appendChild(volverEliminarDireccion);

    }

});
eliminarEstudiante.addEventListener("click", () => {

    traductorDOM.titulo = "Eliminar Estudiante ➖👨‍🎓";
    traductorDOM.subtitulo = "";
    traductorDOM.menuActual = (listaEstudiantes.lista.length == 0) ? "menuEliminarEstudianteInaccesible" : "menuEliminarEstudiante";

    if(listaEstudiantes.lista.length > 0) {
        
        // Generar menú de estudiantes

        const menuEliminarEstudiante = document.getElementById("menuEliminarEstudiante");
        const volverEliminarEstudiante = document.getElementById("volverEliminarEstudiante");

        // Volver

        volverEliminarEstudiante.addEventListener("click", () => {
            traductorDOM.titulo = "Eliminar ➖";
            traductorDOM.subtitulo = "";
            traductorDOM.menuActual = "menuEliminar";
        });

        // Borrar contenido antes que nada

        menuEliminarEstudiante.innerHTML = "";

        // Añadir botones de direcciones
        
        for(let est of listaEstudiantes.lista) {

            const botonEstudiante = document.createElement("button");

            botonEstudiante.classList.add("boton");
            botonEstudiante.textContent = (listaEstudiantes.lista.indexOf(est) + 1) + ". " + est.toString();

            menuEliminarEstudiante.appendChild(botonEstudiante);

            // Evento de click

            botonEstudiante.addEventListener("click", () => {
                
                // Eliminamos estudiante

                listaEstudiantes.eliminarEstudiante(est.id);

                // Declaramos las cosas

                const menuEliminarEstudianteTerminado = document.getElementById("menuEliminarEstudianteTerminado");
                const volverEliminarEstudianteTerminado = document.getElementById("volverEliminarEstudianteTerminado");

                // Volver

                volverEliminarEstudianteTerminado.addEventListener("click", () => {
                    traductorDOM.titulo = "SGAEA";
                    traductorDOM.subtitulo = "(Sistema de Gestión Académica de Estudiantes y Asignaturas)";
                    traductorDOM.menuActual = "menuPrincipal";
                });

                // Borrar contenido antes que nada

                menuEliminarEstudianteTerminado.innerHTML = "";

                // Añadir lista actualizada de estudiantes

                for(let est of listaEstudiantes.lista) {

                    const estudiante = document.createElement("h2");

                    estudiante.textContent = (listaEstudiantes.lista.indexOf(est) + 1) + ". " + est.toString();

                    menuEliminarEstudianteTerminado.appendChild(estudiante);

                }

                // Añadir botón de volver

                menuEliminarEstudianteTerminado.appendChild(volverEliminarEstudianteTerminado);

                // Cambiamos el menú

                traductorDOM.titulo = "Eliminar Estudiante ➖👨‍🎓";
                traductorDOM.subtitulo = "Estudiante Eliminado ✅";
                traductorDOM.menuActual = "menuEliminarEstudianteTerminado";

            });

        }

        // Añadir botón de volver

        menuEliminarEstudiante.appendChild(volverEliminarEstudiante);

    }

});
eliminarAsignatura.addEventListener("click", () => {

    traductorDOM.titulo = "Eliminar Asignatura ➖📕";
    traductorDOM.subtitulo = "";
    traductorDOM.menuActual = (listaAsignaturas.lista.length == 0) ? "menuEliminarAsignaturaInaccesible" : "menuEliminarAsignatura";

    if(listaAsignaturas.lista.length > 0) {
        
        // Generar menú de asignaturas

        const menuEliminarAsignatura = document.getElementById("menuEliminarAsignatura");
        const volverEliminarAsignatura = document.getElementById("volverEliminarAsignatura");

        // Volver

        volverEliminarAsignatura.addEventListener("click", () => {
            traductorDOM.titulo = "Eliminar ➖";
            traductorDOM.subtitulo = "";
            traductorDOM.menuActual = "menuEliminar";
        });

        // Borrar contenido antes que nada

        menuEliminarAsignatura.innerHTML = "";

        // Añadir botones de asignaturas
        
        for(let asig of listaAsignaturas.lista) {

            const botonAsignatura = document.createElement("button");

            botonAsignatura.classList.add("boton");
            botonAsignatura.textContent = (listaAsignaturas.lista.indexOf(asig) + 1) + ". " + asig.toString();

            menuEliminarAsignatura.appendChild(botonAsignatura);

            // Evento de click

            botonAsignatura.addEventListener("click", () => {
                
                // Eliminamos asignatura y desmatriculamos a los estudiantes

                listaAsignaturas.eliminarAsignatura(asig.nombre);

                for(let est of listaEstudiantes.lista) {
                    est.desmatricular(asig);
                }

                // Declaramos las cosas

                const menuEliminarAsignaturaTerminado = document.getElementById("menuEliminarAsignaturaTerminado");
                const volverEliminarAsignaturaTerminado = document.getElementById("volverEliminarAsignaturaTerminado");

                // Volver

                volverEliminarAsignaturaTerminado.addEventListener("click", () => {
                    traductorDOM.titulo = "SGAEA";
                    traductorDOM.subtitulo = "(Sistema de Gestión Académica de Estudiantes y Asignaturas)";
                    traductorDOM.menuActual = "menuPrincipal";
                });

                // Borrar contenido antes que nada

                menuEliminarAsignaturaTerminado.innerHTML = "";

                // Añadir lista actualizada de asignaturas

                for(let asig of listaAsignaturas.lista) {

                    const asignatura = document.createElement("h2");

                    asignatura.textContent = (listaAsignaturas.lista.indexOf(asig) + 1) + ". " + asig.toString();

                    menuEliminarAsignaturaTerminado.appendChild(asignatura);

                }

                // Añaadir botón de volver

                menuEliminarAsignaturaTerminado.appendChild(volverEliminarAsignaturaTerminado);

                // Cambiamos el menú

                traductorDOM.titulo = "Eliminar Asignatura ➖📕";
                traductorDOM.subtitulo = "Asignatura Eliminada ✅";
                traductorDOM.menuActual = "menuEliminarAsignaturaTerminado";

            });

        }

        // Añadir botón de volver

        menuEliminarAsignatura.appendChild(volverEliminarAsignatura);

    }

});
volverEliminar.addEventListener("click", () => {
    traductorDOM.titulo = "SGAEA";
    traductorDOM.subtitulo = "(Sistema de Gestión Académica de Estudiantes y Asignaturas)";
    traductorDOM.menuActual = "menuPrincipal";
});

    // 2.1.1.0 Eliminar Dirección no se puede entrar

    const volverEliminarDireccionInaccesible = document.getElementById("volverEliminarDireccionInaccesible");

    volverEliminarDireccionInaccesible.addEventListener("click", () => {
        traductorDOM.titulo = "Eliminar ➖";
        traductorDOM.subtitulo = "";
        traductorDOM.menuActual = "menuEliminar";
    });

    // 2.1.2.0 Eliminar Estudiante no se puede entrar

    const volverEliminarEstudianteInaccesible = document.getElementById("volverEliminarEstudianteInaccesible");

    volverEliminarEstudianteInaccesible.addEventListener("click", () => {
        traductorDOM.titulo = "Eliminar ➖";
        traductorDOM.subtitulo = "";
        traductorDOM.menuActual = "menuEliminar";
    });

    // 2.1.3.0 Eliminar Asignatura no se puede entrar

    const volverEliminarAsignaturaInaccesible = document.getElementById("volverEliminarAsignaturaInaccesible");

    volverEliminarAsignaturaInaccesible.addEventListener("click", () => {
        traductorDOM.titulo = "Eliminar ➖";
        traductorDOM.subtitulo = "";
        traductorDOM.menuActual = "menuEliminar";
    });


// 3.Pre. Menú Matricular No Existen Datos

const volverMatricularInaccesible = document.getElementById("volverMatricularInaccesible");

volverMatricularInaccesible.addEventListener("click", () => {
    traductorDOM.titulo = "SGAEA";
    traductorDOM.subtitulo = "(Sistema de Gestión Académica de Estudiantes y Asignaturas)";
    traductorDOM.menuActual = "menuPrincipal";
});

// 3.Pre.1. Menú Matricular No Existen Estudiantes

const volverMatricularInaccesibleEstudiantes = document.getElementById("volverMatricularInaccesibleEstudiantes");

volverMatricularInaccesibleEstudiantes.addEventListener("click", () => {
    traductorDOM.titulo = "SGAEA";
    traductorDOM.subtitulo = "(Sistema de Gestión Académica de Estudiantes y Asignaturas)";
    traductorDOM.menuActual = "menuPrincipal";
});

// 3.Pre.2. Menú Matricular No Existen Asignaturas

const volverMatricularInaccesibleAsignaturas = document.getElementById("volverMatricularInaccesibleAsignaturas");

volverMatricularInaccesibleAsignaturas.addEventListener("click", () => {
    traductorDOM.titulo = "SGAEA";
    traductorDOM.subtitulo = "(Sistema de Gestión Académica de Estudiantes y Asignaturas)";
    traductorDOM.menuActual = "menuPrincipal";
});

// 3.Pre.3. Menú Matricular Todo el mundo matriculado de todo

const volverMatricularInaccesibleTodos = document.getElementById("volverMatricularInaccesibleTodos");

volverMatricularInaccesibleTodos.addEventListener("click", () => {
    traductorDOM.titulo = "SGAEA";
    traductorDOM.subtitulo = "(Sistema de Gestión Académica de Estudiantes y Asignaturas)";
    traductorDOM.menuActual = "menuPrincipal";
});

// 3. Menú Matricular

const volverMatricular = document.getElementById("volverMatricular");

volverMatricular.addEventListener("click", () => {
    traductorDOM.titulo = "SGAEA";
    traductorDOM.subtitulo = "(Sistema de Gestión Académica de Estudiantes y Asignaturas)";
    traductorDOM.menuActual = "menuPrincipal";
});

// 3.1. Menú Matricular Asignaturas Vacío

const volverMatricularAsignaturasVacio = document.getElementById("volverMatricularAsignaturasVacio");

volverMatricularAsignaturasVacio.addEventListener("click", () => {
    traductorDOM.titulo = "Matricular ✍";
    traductorDOM.subtitulo = "Seleccionar Asignaturas 📚";
    traductorDOM.menuActual = "menuMatricularAsignaturas";
});

// 4.Pre. Menú Desmatricular No Existen Datos

const volverDesmatricularInaccesible = document.getElementById("volverDesmatricularInaccesible");

volverDesmatricularInaccesible.addEventListener("click", () => {
    traductorDOM.titulo = "SGAEA";
    traductorDOM.subtitulo = "(Sistema de Gestión Académica de Estudiantes y Asignaturas)";
    traductorDOM.menuActual = "menuPrincipal";
});

// 4.Pre.1. Menú Desmatricular No Existen Estudiantes

const volverDesmatricularInaccesibleEstudiantes = document.getElementById("volverDesmatricularInaccesibleEstudiantes");

volverDesmatricularInaccesibleEstudiantes.addEventListener("click", () => {
    traductorDOM.titulo = "SGAEA";
    traductorDOM.subtitulo = "(Sistema de Gestión Académica de Estudiantes y Asignaturas)";
    traductorDOM.menuActual = "menuPrincipal";
});

// 4.Pre.2. Menú Desmatricular No Existen Asignaturas

const volverDesmatricularInaccesibleAsignaturas = document.getElementById("volverDesmatricularInaccesibleAsignaturas");

volverDesmatricularInaccesibleAsignaturas.addEventListener("click", () => {
    traductorDOM.titulo = "SGAEA";
    traductorDOM.subtitulo = "(Sistema de Gestión Académica de Estudiantes y Asignaturas)";
    traductorDOM.menuActual = "menuPrincipal";
});

// 4.Pre.3. Menú Desmatricular Nadie está matriculado

const volverDesmatricularInaccesibleNadie = document.getElementById("volverDesmatricularInaccesibleNadie");

volverDesmatricularInaccesibleNadie.addEventListener("click", () => {
    traductorDOM.titulo = "SGAEA";
    traductorDOM.subtitulo = "(Sistema de Gestión Académica de Estudiantes y Asignaturas)";
    traductorDOM.menuActual = "menuPrincipal";
});

// 4. Menú Desmatricular

const volverDesmatricular = document.getElementById("volverDesmatricular");

volverDesmatricular.addEventListener("click", () => {
    traductorDOM.titulo = "SGAEA";
    traductorDOM.subtitulo = "(Sistema de Gestión Académica de Estudiantes y Asignaturas)";
    traductorDOM.menuActual = "menuPrincipal";
});

// 4.1. Menú Desmatricular Asignaturas Vacío

const volverDesmatricularAsignaturasVacio = document.getElementById("volverDesmatricularAsignaturasVacio");

volverDesmatricularAsignaturasVacio.addEventListener("click", () => {
    traductorDOM.titulo = "Desmatricular ✍";
    traductorDOM.subtitulo = "Seleccionar Asignaturas 📚";
    traductorDOM.menuActual = "menuDesmatricularAsignaturas";
});

// 5.Pre. Menú Auditoría No Existen Datos

const volverAuditoriaInaccesible = document.getElementById("volverAuditoriaInaccesible");

volverAuditoriaInaccesible.addEventListener("click", () => {
    traductorDOM.titulo = "SGAEA";
    traductorDOM.subtitulo = "(Sistema de Gestión Académica de Estudiantes y Asignaturas)";
    traductorDOM.menuActual = "menuPrincipal";
});

// 5.Pre.1. Menú Auditoría No Existen Estudiantes

const volverAuditoriaInaccesibleEstudiantes = document.getElementById("volverAuditoriaInaccesibleEstudiantes");

volverAuditoriaInaccesibleEstudiantes.addEventListener("click", () => {
    traductorDOM.titulo = "SGAEA";
    traductorDOM.subtitulo = "(Sistema de Gestión Académica de Estudiantes y Asignaturas)";
    traductorDOM.menuActual = "menuPrincipal";
});

// 5.Pre.2. Menú Auditoría No Existen Asignaturas

const volverAuditoriaInaccesibleAsignaturas = document.getElementById("volverAuditoriaInaccesibleAsignaturas");

volverAuditoriaInaccesibleAsignaturas.addEventListener("click", () => {
    traductorDOM.titulo = "SGAEA";
    traductorDOM.subtitulo = "(Sistema de Gestión Académica de Estudiantes y Asignaturas)";
    traductorDOM.menuActual = "menuPrincipal";
});

// 5. Menú Auditoría

const volverAuditoria = document.getElementById("volverAuditoria");

volverAuditoria.addEventListener("click", () => {
    traductorDOM.titulo = "SGAEA";
    traductorDOM.subtitulo = "(Sistema de Gestión Académica de Estudiantes y Asignaturas)";
    traductorDOM.menuActual = "menuPrincipal";
});

// 6.Pre. Menú Calificar No Existen Datos

const volverCalificarInaccesible = document.getElementById("volverCalificarInaccesible");

volverCalificarInaccesible.addEventListener("click", () => {
    traductorDOM.titulo = "SGAEA";
    traductorDOM.subtitulo = "(Sistema de Gestión Académica de Estudiantes y Asignaturas)";
    traductorDOM.menuActual = "menuPrincipal";
});

// 6.Pre.1. Menú Calificar No Existen Estudiantes

const volverCalificarInaccesibleEstudiantes = document.getElementById("volverCalificarInaccesibleEstudiantes");

volverCalificarInaccesibleEstudiantes.addEventListener("click", () => {
    traductorDOM.titulo = "SGAEA";
    traductorDOM.subtitulo = "(Sistema de Gestión Académica de Estudiantes y Asignaturas)";
    traductorDOM.menuActual = "menuPrincipal";
});

// 6.Pre.2. Menú Calificar No Existen Asignaturas

const volverCalificarInaccesibleAsignaturas = document.getElementById("volverCalificarInaccesibleAsignaturas");

volverCalificarInaccesibleAsignaturas.addEventListener("click", () => {
    traductorDOM.titulo = "SGAEA";
    traductorDOM.subtitulo = "(Sistema de Gestión Académica de Estudiantes y Asignaturas)";
    traductorDOM.menuActual = "menuPrincipal";
});

// 6.Pre.3. Menú Calificar Nadie está matriculado

const volverCalificarInaccesibleNadie = document.getElementById("volverCalificarInaccesibleNadie");

volverCalificarInaccesibleNadie.addEventListener("click", () => {
    traductorDOM.titulo = "SGAEA";
    traductorDOM.subtitulo = "(Sistema de Gestión Académica de Estudiantes y Asignaturas)";
    traductorDOM.menuActual = "menuPrincipal";
});

// 6. Menú Calificar

const volverCalificar = document.getElementById("volverCalificar");

volverCalificar.addEventListener("click", () => {
    traductorDOM.titulo = "SGAEA";
    traductorDOM.subtitulo = "(Sistema de Gestión Académica de Estudiantes y Asignaturas)";
    traductorDOM.menuActual = "menuPrincipal";
});

// 7.Pre. Menú Buscar No Existen Datos

const volverBuscarInaccesible = document.getElementById("volverBuscarInaccesible");

volverBuscarInaccesible.addEventListener("click", () => {
    traductorDOM.titulo = "SGAEA";
    traductorDOM.subtitulo = "(Sistema de Gestión Académica de Estudiantes y Asignaturas)";
    traductorDOM.menuActual = "menuPrincipal";
});

// 7.Pre.1. Menú Buscar No Existen Estudiantes

const volverBuscarInaccesibleEstudiantes = document.getElementById("volverBuscarInaccesibleEstudiantes");

volverBuscarInaccesibleEstudiantes.addEventListener("click", () => {
    traductorDOM.titulo = "Buscar 🔎";
    traductorDOM.subtitulo = "";
    traductorDOM.menuActual = "menuBuscar";
});

// 7.Pre.2. Menú Buscar No Existen Asignaturas

const volverBuscarInaccesibleAsignaturas = document.getElementById("volverBuscarInaccesibleAsignaturas");

volverBuscarInaccesibleAsignaturas.addEventListener("click", () => {
    traductorDOM.titulo = "Buscar 🔎";
    traductorDOM.subtitulo = "";
    traductorDOM.menuActual = "menuBuscar";
});

// 7. Menú Buscar

const buscarEstudiantes = document.getElementById("buscarEstudiantes");
const buscarAsignaturas = document.getElementById("buscarAsignaturas");
const volverBuscar = document.getElementById("volverBuscar");

buscarEstudiantes.addEventListener("click", () => {

    traductorDOM.titulo = "Buscar Estudiantes 🔎🎓";

    if(listaEstudiantes.lista.length > 0) {

        traductorDOM.subtitulo = "Lista de Estudiantes";
        traductorDOM.menuActual = "menuBuscarEstudiantes";

        const formBuscarEstudiantes = document.getElementById("formBuscarEstudiantes");
        const inputBuscarEstudiantes = document.getElementById("inputBuscarEstudiantes");
        const volverBuscarEstudiantes = document.getElementById("volverBuscarEstudiantes");
        const resultadosBuscarEstudiantes = document.getElementById("resultadosBuscarEstudiantes");

        // Formulario de buscar

        formBuscarEstudiantes.addEventListener("submit", (event) => {

            // Hacemos que el formulario no se envíe

            event.preventDefault();

        });

        // Evento de cambio en el input

        inputBuscarEstudiantes.addEventListener("input", () => {

            // Buscar estudiantes

            const estudiantes = listaEstudiantes.busquedaEstudiantes(inputBuscarEstudiantes.value);

            // Si el prompt de búsqueda es "", cambiar el subtítulo a "Lista de Estudiantes". Si no, cambiar el subtítulo a "Resultados (numero): "(prompt)"".

            traductorDOM.subtitulo = (inputBuscarEstudiantes.value == "") ? "Lista de Estudiantes" : "Resultados (" + estudiantes.length + "): \"" + inputBuscarEstudiantes.value + "\"";

            // Borrar contenido antes que nada

            resultadosBuscarEstudiantes.innerHTML = "";

            // Añadir coincidencias de estudiantes

            for(let est of estudiantes) {

                const botonEstudiante = document.createElement("h2");

                botonEstudiante.textContent = (estudiantes.indexOf(est) + 1) + ". " + est.toString();

                resultadosBuscarEstudiantes.appendChild(botonEstudiante);

            }

        });
        
        // Volver

        volverBuscarEstudiantes.addEventListener("click", () => {
            traductorDOM.titulo = "Buscar 🔎";
            traductorDOM.subtitulo = "";
            traductorDOM.menuActual = "menuBuscar";
        });

        // Buscar estudiantes

        const estudiantes = listaEstudiantes.busquedaEstudiantes(inputBuscarEstudiantes.value);

        // Si el prompt de búsqueda es "", cambiar el subtítulo a "Lista de Estudiantes". Si no, cambiar el subtítulo a "Resultados (numero): "(prompt)"".

        traductorDOM.subtitulo = (inputBuscarEstudiantes.value == "") ? "Lista de Estudiantes" : "Resultados (" + estudiantes.length + "): \"" + inputBuscarEstudiantes.value + "\"";

        // Borrar contenido antes que nada

        resultadosBuscarEstudiantes.innerHTML = "";

        // Añadir coincidencias de estudiantes

        for(let est of estudiantes) {

            const botonEstudiante = document.createElement("h2");

            botonEstudiante.textContent = (estudiantes.indexOf(est) + 1) + ". " + est.toString();

            resultadosBuscarEstudiantes.appendChild(botonEstudiante);

        }

    }else{

        traductorDOM.subtitulo = "";
        traductorDOM.menuActual = "menuBuscarInaccesibleEstudiantes";

    }

});
buscarAsignaturas.addEventListener("click", () => {

    traductorDOM.titulo = "Buscar Asignaturas 🔎📚";

    if(listaAsignaturas.lista.length > 0) {

        traductorDOM.subtitulo = "Lista de Asignaturas";
        traductorDOM.menuActual = "menuBuscarAsignaturas";

        const formBuscarAsignaturas = document.getElementById("formBuscarAsignaturas");
        const inputBuscarAsignaturas = document.getElementById("inputBuscarAsignaturas");
        const volverBuscarAsignaturas = document.getElementById("volverBuscarAsignaturas");
        const resultadosBuscarAsignaturas = document.getElementById("resultadosBuscarAsignaturas");

        // Formulario de buscar

        formBuscarAsignaturas.addEventListener("submit", (event) => {

            // Hacemos que el formulario no se envíe

            event.preventDefault();

        });

        // Evento de cambio en el input

        inputBuscarAsignaturas.addEventListener("input", () => {

            // Buscar asignaturas

            const asignaturas = listaAsignaturas.busquedaAsignaturas(inputBuscarAsignaturas.value);

            // Si el prompt de búsqueda es "", cambiar el subtítulo a "Lista de Asignaturas". Si no, cambiar el subtítulo a "Resultados (numero): "(prompt)"".

            traductorDOM.subtitulo = (inputBuscarAsignaturas.value == "") ? "Lista de Asignaturas" : "Resultados (" + asignaturas.length + "): \"" + inputBuscarAsignaturas.value + "\"";

            // Borrar contenido antes que nada

            resultadosBuscarAsignaturas.innerHTML = "";

            // Añadir coincidencias de asignaturas

            for(let asig of asignaturas) {

                const botonAsignatura = document.createElement("h2");

                botonAsignatura.textContent = (asignaturas.indexOf(asig) + 1) + ". " + asig.toString();

                resultadosBuscarAsignaturas.appendChild(botonAsignatura);

            }

        });
        
        // Volver

        volverBuscarAsignaturas.addEventListener("click", () => {
            traductorDOM.titulo = "Buscar 🔎";
            traductorDOM.subtitulo = "";
            traductorDOM.menuActual = "menuBuscar";
        });

        // Buscar asignaturas

        const asignaturas = listaAsignaturas.busquedaAsignaturas(inputBuscarAsignaturas.value);

        // Si el prompt de búsqueda es "", cambiar el subtítulo a "Lista de Asignaturas". Si no, cambiar el subtítulo a "Resultados (numero): "(prompt)"".

        traductorDOM.subtitulo = (inputBuscarAsignaturas.value == "") ? "Lista de Asignaturas" : "Resultados (" + asignaturas.length + "): \"" + inputBuscarAsignaturas.value + "\"";

        // Borrar contenido antes que nada

        resultadosBuscarAsignaturas.innerHTML = "";

        // Añadir coincidencias de asignaturas

        for(let asig of asignaturas) {

            const botonAsignatura = document.createElement("h2");

            botonAsignatura.textContent = (asignaturas.indexOf(asig) + 1) + ". " + asig.toString();

            resultadosBuscarAsignaturas.appendChild(botonAsignatura);

        }

    }else{

        traductorDOM.subtitulo = "";
        traductorDOM.menuActual = "menuBuscarInaccesibleAsignaturas";

    }

});
volverBuscar.addEventListener("click", () => {
    traductorDOM.titulo = "SGAEA";
    traductorDOM.subtitulo = "(Sistema de Gestión Académica de Estudiantes y Asignaturas)";
    traductorDOM.menuActual = "menuPrincipal";
});

// 8.Pre. Menú Promedio No Existen Datos

const volverPromedioInaccesible = document.getElementById("volverPromedioInaccesible");

volverPromedioInaccesible.addEventListener("click", () => {
    traductorDOM.titulo = "SGAEA";
    traductorDOM.subtitulo = "(Sistema de Gestión Académica de Estudiantes y Asignaturas)";
    traductorDOM.menuActual = "menuPrincipal";
});

// 8.Pre.1. Menú Promedio No Existen Estudiantes

const volverPromedioInaccesibleEstudiantes = document.getElementById("volverPromedioInaccesibleEstudiantes");

volverPromedioInaccesibleEstudiantes.addEventListener("click", () => {
    traductorDOM.titulo = "SGAEA";
    traductorDOM.subtitulo = "(Sistema de Gestión Académica de Estudiantes y Asignaturas)";
    traductorDOM.menuActual = "menuPrincipal";
});

// 8.Pre.2. Menú Promedio No Existen Asignaturas

const volverPromedioInaccesibleAsignaturas = document.getElementById("volverPromedioInaccesibleAsignaturas");

volverPromedioInaccesibleAsignaturas.addEventListener("click", () => {
    traductorDOM.titulo = "SGAEA";
    traductorDOM.subtitulo = "(Sistema de Gestión Académica de Estudiantes y Asignaturas)";
    traductorDOM.menuActual = "menuPrincipal";
});

// 8. Menú Promedio

const promedioGeneral = document.getElementById("promedioGeneral");
const promedioAsignaturas = document.getElementById("promedioAsignaturas");
const volverPromedio = document.getElementById("volverPromedio");

promedioGeneral.addEventListener("click", () => {

    traductorDOM.titulo = "Calcular Promedio 💰🌍";
    traductorDOM.menuActual = "menuPromedioGeneral";

    const menuPromedioGeneral = document.getElementById("menuPromedioGeneral");
    const volverPromedioGeneral = document.getElementById("volverPromedioGeneral");

    // Volver

    volverPromedioGeneral.addEventListener("click", () => {
        traductorDOM.titulo = "Calcular Promedio 💰";
        traductorDOM.subtitulo = "";
        traductorDOM.menuActual = "menuPromedio";
    });

    // Calcular promedio general

    const promedio = listaEstudiantes.promedioGeneral;

    // Cambiar subtítulo

    traductorDOM.subtitulo = "Promedio General: " + promedio;

    // Borrar todo antes que nada

    menuPromedioGeneral.innerHTML = "";

    // Mostrar promedios de estudiantes en lista

    for(let est of listaEstudiantes.lista) {

        const estudiante = document.createElement("h2");

        estudiante.textContent = est.nombre + ": " + est.promedio;

        menuPromedioGeneral.appendChild(estudiante);

    }

    // Añadir botón de volver

    menuPromedioGeneral.appendChild(volverPromedioGeneral);

});
promedioAsignaturas.addEventListener("click", () => {

    traductorDOM.titulo = "Calcular Promedio 💰";
    traductorDOM.subtitulo = "Lista de Asignaturas 📚";
    traductorDOM.menuActual = "menuPromedioAsignaturas";

    const menuPromedioAsignaturas = document.getElementById("menuPromedioAsignaturas");
    const volverPromedioAsignaturas = document.getElementById("volverPromedioAsignaturas");

    // Volver

    volverPromedioAsignaturas.addEventListener("click", () => {
        traductorDOM.titulo = "Calcular Promedio 💰";
        traductorDOM.subtitulo = "";
        traductorDOM.menuActual = "menuPromedio";
    });

    // Borrar contenido antes que nada

    menuPromedioAsignaturas.innerHTML = "";

    // Añadir promedios de asignaturas

    for(let asig of listaAsignaturas.lista) {

        const asignatura = document.createElement("h2");

        asignatura.textContent = asig.nombre + ": " + asig.promedio;

        menuPromedioAsignaturas.appendChild(asignatura);

    }

    // Añadir botón de volver

    menuPromedioAsignaturas.appendChild(volverPromedioAsignaturas);

});
volverPromedio.addEventListener("click", () => {
    traductorDOM.titulo = "SGAEA";
    traductorDOM.subtitulo = "(Sistema de Gestión Académica de Estudiantes y Asignaturas)";
    traductorDOM.menuActual = "menuPrincipal";
});

// 9.Pre. Menú Reporte No Existen Estudiantes

const volverReporteInaccesibleEstudiantes = document.getElementById("volverReporteInaccesibleEstudiantes");

volverReporteInaccesibleEstudiantes.addEventListener("click", () => {
    traductorDOM.titulo = "SGAEA";
    traductorDOM.subtitulo = "(Sistema de Gestión Académica de Estudiantes y Asignaturas)";
    traductorDOM.menuActual = "menuPrincipal";
});

// 9. Menú Reporte

const volverReporte = document.getElementById("volverReporte");

volverReporte.addEventListener("click", () => {
    traductorDOM.titulo = "SGAEA";
    traductorDOM.subtitulo = "(Sistema de Gestión Académica de Estudiantes y Asignaturas)";
    traductorDOM.menuActual = "menuPrincipal";
});