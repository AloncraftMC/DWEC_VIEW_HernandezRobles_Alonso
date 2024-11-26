const texto = "abc123";
const regex = /\d/g;

console.log(regex.exec(texto)[0]);	// Imprime 1
console.log(regex.exec(texto)[0]);	// Imprime 2
console.log(regex.exec(texto)[0]);	// Imprime 3
console.log(regex.exec(texto));	// Imprime null