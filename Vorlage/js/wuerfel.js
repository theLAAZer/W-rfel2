//Hinzufügen von 'Eventlisteners' beim Seitenstart
function init() {
	//wenn auf das DIV mit der ID 'rollButton' geklickt wird, soll die Funktion 'rollDice1' ausgeführt werden
	document.getElementById('rollButton').addEventListener("touchstart", rollDice1);
    document.getElementById('rollButton').addEventListener("click", rollDice1);
}

//Einfache Würfelfunktion
function rollDice1() {
	//In das DIV mit der ID 'dice' soll ein 'X' geschrieben werden
	document.getElementById('dice').innerHTML = Math.ceil(Math.random()*6)
}

//Mit Hilfe von 'setInterval' soll die Funktion 'animDice' mehrmals hintereinander (mit einer kurzen Pause) ausgeführt werden.

function rollDice2() { 
	setInterval.animDice 

	//damit während der "Animation" keine klicks die Funktion stören, wird der Eventlistener anfangs entfernt und zum Schluss wieder hinzugefügt.
	document.getElementById('rollButton').removeEventListener('click', rollDice2);
	
	

	var repeatedFunction = function(rollDice2){
		var X=0;
		X++;	
		// bei jedem Ausführen soll die Variable x um 1 erhöht werden.
		/* ... hier kommt dein Code */

		// bei jedem Ausführen soll eine Zufallszahl in das DIV mit der ID 'dice' geschrieben werden.
		/* ... hier kommt dein Code */

		
			if (X == 10) {
			clearInterval(timer);
			alert('1000ms=1s');
			document.getElementById('rollButton').addEventListener('click', rollDice2);
		}
	}
	timer = setInterval(repeatedFunction, 1000)
	
}


//(optional) Würfel SVG-Grafiken
/*
var num1 = '<circle cx="200" cy="200" r="40" fill="black"/>';
var num2 = '<circle cx="100" cy="100" r="40" fill="black"/><circle cx="300" cy="300" r="40" fill="black"/>';
var num3 = num1 + num2;
var num4 = num2 + '<circle cx="100" cy="300" r="40" fill="black"/><circle cx="300" cy="100" r="40" fill="black"/>';
var num5 = num4 + num1;
var num6 = num4 + '<circle cx="100" cy="200" r="40" fill="black"/><circle cx="300" cy="200" r="40" fill="black"/>';
var diceSVG = [num1, num2, num3, num4, num5, num6];
*/