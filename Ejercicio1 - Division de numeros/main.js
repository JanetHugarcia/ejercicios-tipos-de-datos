// Escribe aquí tu codigo Javascript

var num1=parseInt(prompt("Ingrese primer numero: "));
var num2=parseInt(prompt("Ingrese segundo numero: "));
var div=null;

div=num1/num2;

alert("El resultado es: " + div.toFixed(2) + "\n" +
	"Si se divide un texto entre otro text: NaN\n"+
	"Si el divisor es cero: Infinity");




