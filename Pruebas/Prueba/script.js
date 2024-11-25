function saludar(hora) {
	console.log("Soy " + this.nombre);
	console.log("Son las " + hora);
}

const persona = {
	nombre: "Juan"
};

saludar.call(persona, "3 AM");	// Imprime "Soy Juan" "Son las 3 AM"