// Escribe aquí tu codigo Javascript
var name = prompt("¿Cuál es tu nombre?");
var surname = prompt("¿Cuál es tu primer apellido?");
var poblacion = prompt("¿En qué población vives?");

function Capitalise(string){
	return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

alert("==============================\n" +
	"Hola "  + Capitalise(name) + " " + Capitalise(surname) +"\n"+
	"Adiós habitante de " + Capitalise(poblacion) + "\n" +
	"=============================="

);



