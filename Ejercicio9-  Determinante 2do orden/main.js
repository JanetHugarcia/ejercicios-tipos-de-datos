// Escribe aquí tu codigo Javascript
var a11 = parseInt(prompt("Determinante A: \nIngrese a11: "));
var a12 = parseInt(prompt("Ingrese a12: "));
var a21 = parseInt(prompt("Ingrese a21 "));
var a22 = parseInt(prompt("Ingrese a22: "));
var D = null;

a11;
a12;
a21;
a22;

D=(a11*a22)-(a12*a21);

alert("La Determinante de A:\n"+
	"["+a11+","+a12+"]" +"\n"+"["+a21+","+a22+"]" + "\n es " + D);




