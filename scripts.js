var a = prompt("podaj a");
var b = prompt("podaj b");
var value = (a*a) + (2 * a * b) - (b*b);
document.write("Wynik to: " + value + "  jest");

if (value < 0) {
	document.write(" ujemny");

} else if (value > 0) {
	document.write(" dodatni");
}

if (value == 0) {
	document.write(" zerowy")
}