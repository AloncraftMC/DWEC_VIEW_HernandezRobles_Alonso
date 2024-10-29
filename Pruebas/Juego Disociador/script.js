const myBox = document.getElementById("myBox");

myBox.addEventListener("click", (event) => {

    let color = "rgb(" +
    (Math.random() * 255).toFixed(0) + ", " +
    (Math.random() * 255).toFixed(0) + ", " +
    (Math.random() * 255).toFixed(0) + ")";

    event.target.style.backgroundColor = color;

    let randomTop = Math.random() * (window.innerHeight - event.target.offsetHeight);
    let randomLeft = Math.random() * (window.innerWidth - event.target.offsetWidth);

    event.target.style.top = `${randomTop}px`;
    event.target.style.left = `${randomLeft}px`;

});