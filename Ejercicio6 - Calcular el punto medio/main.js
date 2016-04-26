// Escribe aquí tu codigo Javascript
var x1 = parseInt(prompt("Ingrese primera coordenada Ej.(a,b)"+ "\n" + "a: "));
var y1= parseInt(prompt("b: "));
var x2 = parseInt(prompt("Ingrese segundo coordenada Ej.(c,d)\n c: "));
var y2= parseInt(prompt("d: "));
var m = null;

x1;
y1;
x2;
y2;

function medio(a,b){
	return (a+b)/2;
}

alert("El punto medio es:\n"+
	"("+x1+","+y1+") y " +"("+x2+","+y2+")" + " es " +
	 "("+ medio(x1,x2) + ","+medio(y1,y2)+ ")");



