const caracteres = "abcdefghijklmnñopqrstuvwxyz0123456789";
const tecla = document.getElementById("tecla");
const contador = document.getElementById("contador");

let puntos = 0;
let record = 0;

function generarTecla(){

    const letra = caracteres.at(Math.random() * caracteres.length);
    tecla.textContent = letra.toUpperCase();

    tecla.style.left = Math.random() * (window.innerWidth - 500) + 250 + "px";
    tecla.style.top = Math.random() * (window.innerHeight - 500) + 250 + "px";

    document.body.style.backgroundColor =
    "rgb(" + (Math.random() * 100 + 155) +
    "," + (Math.random() * 100 + 155) +
    "," + (Math.random() * 100 + 155) + ")";

}

document.addEventListener("keydown", event => {
    
    if(event.key.toUpperCase() == tecla.textContent){

        new Audio("pop.mp3").play();
        puntos++;

    }else{

        new Audio("error.mp3").play();
        puntos = 0;

    }

    if(puntos > record) record = puntos;

    contador.innerHTML = "Puntos: " + puntos + "<br>Récord: " + record;
    generarTecla();

});

tecla.style.display = "flex";
generarTecla();