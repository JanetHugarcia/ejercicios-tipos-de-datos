// Escribe aquí tu codigo Javascript
function capitalise(string){
	return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

var name = prompt("¿Cuál es su nombre?");
var edad = parseInt(prompt("¿Cuál es tu edad?"));
var dias = null;

dias= edad * 365;

alert("Hola " + capitalise(name) + ",\n" + "En estos " + 
	edad + " has vivido " + dias + " días. Good Luck!")





