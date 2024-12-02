/**
 ╭-----------------------------------------------------------------------------------------------╮
 | SGAEA - Sistema de Gestión Académica de Estudiantes y Asignaturas                             |
 | Alonso Hernández Robles 2º DAW AULA                                                           |
 |                                                                                               |
 | Github Pages: https://aloncraftmc.github.io/DWEC_VIEW_HernandezRobles_Alonso/SGAEA/index.html |
 | (Necesario abrir la consola de las DevTools antes de cargar la página)                        |
 ╰-----------------------------------------------------------------------------------------------╯
 */

/** Nota: Todo lo que no suene familiar, como console.groupCollapsed(), se puede obviar sin problema.
  * Sobre todo el Punto 1, a continuación mostrado.
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
 * establecerá como "00000". Contiene un getter toString() que muestra todas las propiedades.
 */

class Direccion{

    

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
 * + get toString(): String con el id, nombre y edad del estudiante.
 * 
 * + matricular(...asignaturas): Introduce en el Array asignaturas Arrays de dos posiciones, tantos
 *      como asignaturas haya, y en la primera posición ([0]) de cada uno de estos, cada una de las instancias
 *      de dichas asignaturas. Introduce un nuevo registro generado en el Array registros por cada una de las asignaturas.
 * 
 * + desmatricular(...asignaturas): Elimina del Array asignaturas las asignaturas cuyo nombre coincida
 *      con los nombres de asignaturas e introduce un nuevo registro generado en el Array registros.
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

    

}

/**
 * 2.3. Clase ListaEstudiantes
 * 
 * Atributos:
 * 
 * - lista: Array de objetos Estudiante. Su getter devuelve una copia del Array y no la referencia.
 * 
 * Métodos:
 * 
 * + constructor(...estudiantes): Inicializa vacío el Array lista y añade los estudiantes mediante el método
 *      añadirEstudiante().
 * 
 * + get promedioGeneral(): Number del promedio de los promedios de todos los estudiantes del Array lista.
 *      Devuelve el String "Sin evaluar" si ningún promedio es un número.
 * 
 * + mostrarReporte(): Muestra mediante console.log(), console.groupCollapsed() y console.groupEnd() el reporte
 *      con la información de todos los estudiantes del Array lista. console.log() muestra por
 *      consola un mensaje. console.groupCollapsed() muestra por consola un mensaje cómo título de una
 *      carpeta colapsada de los mensajes que vayan a continuación. console.groupEnd() indica el final de
 *      dicha carpeta de mensajes.
 * 
 * + añadirEstudiante(estudiante): Si no existe el estudiante dentro del Array lista, lo añade y ordena dicho
 *      Array según los números de las ids de los estudiantes. De lo contrario, devuelve un Error.
 * 
 * + eliminarEstudiante(id): Elimina del Array lista el estudiante cuya id sea la misma que id y elimina el
 *      número ocupado de dicha id mediante el método estático eliminarNumeroOcupado().
 * 
 * + busquedaEstudiantes(exp): Array de los objetos Estudiante cuyos nombres incluyen el String exp.
 */

class ListaEstudiantes{

    

}

/**
 * 2.4. Clase Asignatura
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
 * + get toString(): Devuelve el nombre de la asignatura (Ya que el objeto Asignatura no contiene más
 *      atributos sobre la información de la instancia, el método es idéntico a get nombre(), pero se declarará
 *      y usará con propósitos semánticos);
 * 
 * + añadirCalificacion(calificacion): Añade calificacion al Array calificaciones.
 * 
 * + eliminarCalificacion(calificacion): Elimina una ocurrencia cualquiera de calificacion en el Array calificaciones.
 */

class Asignatura{

    

}

/**
 * 2.5. Clase ListaAsignaturas
 * 
 * Atributos:
 * 
 * - lista: Array de objetos Asignatura. Su getter devuelve una copia del Array y no la referencia.
 * 
 * Métodos:
 * 
 * + constructor(...asignatura): Inicializa vacío el Array lista y añade las asignaturas mediante el método
 *      añadirAsignatura().
 * 
 * + añadirAsignatura(asignatura): Si no existe la asignatura dentro del Array lista, la añade. De lo
 *      contrario, devuelve un Error.
 * 
 * + eliminarAsignatura(nombre): Si existe una asignatura cuyo nombre es nombre en el Array lista, elimina
 *      de dicho Array dicha asignatura. De lo contrario, devuelve un Error.
 * 
 * + busquedaAsignaturas(exp): Array de los objetos Asignatura cuyos nombres incluyen el String exp.
 */

class ListaAsignaturas{

    

}

/**
 * 3. Programa Principal.
 * 
 * En esta sección se declara un objeto ListaEstudiantes, otro objeto ListaAsignaturas, y un Array de objetos
 * Direccion llamado listaDirecciones. Seguidamente, se entra en el bucle while.
 * 
 * Extra: Se inicializan y añaden 5 direcciones, 5 estudiantes y 5 asignaturas.
 *        Se matriculan a algunos estudiantes de algunas asignaturas.
 * 
 * Por siempre, se preguntará la elección principal de la acción a realizar.
 * La variable eleccion será la variable que siempre obtenga el valor de window.prompt().
 */

while(true){

    

    switch(""){

        /**
         * 3.1. Crear
         * 
         * Siempre se pueden crear direcciones, estudiantes y/o asignaturas.
         */

        case 1:

            do{



                switch(""){

                    /**
                     * 3.1.1. Crear Dirección
                     * 
                     * Se pedirá calle, número, piso, código postal, provincia y localidad.
                     * Al crearla, se guardará en el Array listaDirecciones.
                     */

                    case 1:

                    

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

                        

                        break;

                    /**
                     * 3.1.3. Crear Asignatura
                     * 
                     * Se pedirá nombre, y se creará la asignatura sólo si el listaAsignaturas no contiene
                     * una asignatura con el mismo nombre.
                     */

                    case 3:

                        

                        break;

                }

            }while(true);

            break;

        /**
         * 3.2. Eliminar
         * 
         * No se podrá acceder a Eliminar si no existe ningún dato, ya sea dirección, estudiante o asignatura.
         */

        case 2:

            do{

                

                switch(""){

                    /**
                     * 3.2.1. Eliminar Dirección
                     * 
                     * Si hay direcciones en el Array listaDirecciones, se escoge una de ellas para su
                     * eliminación.
                     */

                    case 1:

                        

                        break;

                    /**
                     * 3.2.2. Eliminar Estudiante
                     * 
                     * Si existen estudiantes en listaEstudiantes, se escoge un estudiante para su
                     * eliminación.
                     */

                    case 2:

                        

                        break;

                    /**
                     * 3.2.3. Eliminar Asignatura
                     * 
                     * Si hay asignaturas en listaAsignaturas, se escoge una asignatura para su eliminación.
                     */

                    case 3:

                        

                        break;

                }

            }while(true);

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

            

            break;

        /**
         * 3.4. Desmatricular
         * 
         * Si no existen datos, asignaturas, o estudiantes matriculados de al menos una asignatura, no se
         * puede acceder.
         * 
         * En primer lugar, se escoge un estudiante de entre los matriculados en al menos una asignatura.
         * Después, se seleccionan las asignaturas a desmatricular.
         */

        case 4:

            

            break;

        /**
         * 3.5. Registro de Auditoría
         * 
         * Si no existen datos, estudiantes o asignaturas, no se puede acceder.
         * 
         * Se escoge el estudiante para obtener sus registros y se muestran.
         */

        case 5:

            

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

            
            
            break;

        /**
         * 3.7. Buscar
         * 
         * Si no existen datos, estudiantes o asignaturas, no se puede acceder.
         */

        case 7:

            

            do{

                

                switch(""){

                    /**
                     * 3.7.1. Buscar Estudiantes
                     * 
                     * Al principio, se muestran todos los estudiantes de listaEstudiantes.
                     * Se introduce un texto y se muestran las coincidencias de los estudiantes cuyo nombre
                     * incluya dicho texto.
                     */

                    case 1:

                        

                        break;

                    /**
                     * 3.7.2. Buscar Asignaturas
                     * 
                     * Al principio, se muestran todos las asignaturas de listaAsignaturas.
                     * Se introduce un texto y se muestran las coincidencias de las asignaturas cuyo nombre
                     * incluya dicho texto.
                     */

                    case 2:

                        

                        break;

                }

            }while(true);

            break;

        /**
         * 3.8. Calcular Promedio
         * 
         * Si no existen datos, estudiantes o asignaturas, no se puede acceder.
         */

        case 8:

            

            do{

                

                switch(""){

                    /**
                     * 3.8.1. Promedio General
                     * 
                     * Muestra el promedio de los promedios de los estudiantes (promedio general) y una de los promedios
                     * de cada estudiante.
                     */

                    case 1:

                        

                        break;

                    /**
                     * 3.8.2. Promedio por Asignaturas
                     * 
                     * Muestra el promedio en una asignatura de las notas de todos los estudiantes matriculados en ella.
                     */

                    case 2:

                        

                        break;

                }

            }while(true);

            break;

        /**
         * 3.9. Mostrar Reporte
         * 
         * Muestra el reporte de todos los estudiantes y su información, tanto datos personales (nombre, edad y dirección)
         * como calificaciones (asignaturas y promedio).
         */

        case 9:

            

            break;
        
    }

}