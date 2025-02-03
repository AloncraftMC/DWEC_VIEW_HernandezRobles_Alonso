export class TraductorDOM{

    #titulo = document.getElementById("titulo");
    #subtitulo = document.getElementById("subtitulo");
    #menuActual;

    set titulo(titulo){
        this.#titulo.innerHTML = titulo;
    }

    set subtitulo(subtitulo){
        this.#subtitulo.innerHTML = subtitulo;
    }

    get menuActual(){
        return this.#menuActual;
    }

    set menuActual(menu){
        
        const elemento = document.getElementById(menu);

        if(!elemento) throw new Error("Error: No existe el menu con el id: " + menu);

        for(const section of document.getElementsByTagName("section")){
            section.style.display = "none";
        }

        elemento.style.display = "flex";

        this.#menuActual = menu;

    }

}