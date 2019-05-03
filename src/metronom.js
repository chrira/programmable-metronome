import { beep, erstenBeepAusloesen } from './engine';

/**
 * Metronom class
 */
function Metronom() {
	var piece;
	var barsSatz1;
	var barsSatz2;
	var barsSatz3;
	var tempi;
}

Metronom.prototype.getName = function() {
  return this.name;
}

Metronom.prototype.pieceChanged = function(piece) {

	this.piece = piece;
	this.barsSatz1 = piece.getPart(1);
	this.barsSatz2 = piece.getPart(2);
	this.barsSatz3 = piece.getPart(3);
	this.tempi = piece.getTempi();
}

Metronom.prototype.start = function() {
	ersterBeep = false;
	erstenBeepAusloesen();

	stopped = true;
	this.setVariables();
	stopTimer();
	stopped = false;
	run();
}

Metronom.prototype.stop = function() {
	stopped = true;
}

Metronom.prototype.partChanged = function(partNumber) {
	stopped = true;
}

Metronom.prototype.setVariables = function() {
	var tempo = document.getElementById("tempo").value;
	achtelDauer = (1000 * 60 / 2) / tempo;

	if (document.getElementById("achtelzeigen").checked) {
		achtelZeigen = true;
	}
	else {
		achtelZeigen = false;
	}

	var satzNr = document.getElementById("satz").value;
	if (satzNr == 1) {
		bars = this.barsSatz1.slice(0);
	}
	if (satzNr == 2) {
		bars = this.barsSatz2.slice(0);
	}
	if (satzNr == 3) {
		bars = this.barsSatz3.slice(0);
	}


	takt = document.getElementById("starttakt").value - 1;

	vorlauf = document.getElementById("vorlauf").value;
	var startbar = bars[takt];
	for (var i = 0; i < vorlauf; i++) {
		bars.splice(takt, 0, startbar);
	}

	document.getElementById("aktuellertakt").value = takt + 1 - vorlauf;

	// reset

	schlag = 0;
	achtelDieserSchlag = 0;
	timestamp = (new Date()).getTime();
}


//var achtel = 0;
var takt = 0;
var schlag = 0;
var achtelDieserSchlag = 0;
var timestamp = (new Date()).getTime();
var achtelDauer = 200;

var bars;
var vorlauf = 0;
var achtelZeigen = true;
var stopped = false;

var ersterBeep = true;

function wechsleTempo(id) {
	var neueSatzNummer = document.getElementById("satz").value;
	document.getElementById("tempo").value = tempi[neueSatzNummer - 1];
}

function jetztstarten() {
	stopped = false;
	run();
}

function run() {

	var now = (new Date()).getTime();

	if (now - timestamp >= achtelDauer) {
		if (schlag == 0 && achtelDieserSchlag == 0) { // erster Achtel eines Taktes
			beep(10, 600, 50);
		}
		else if (achtelDieserSchlag == 0) { // erster Achtel eines Schlages
			beep(10, 500, 50);
		}
		else if (achtelZeigen) { // irgendein Achtel
			beep(10, 400, 50);
		}
		timestamp = now;

		// hochzaehlen für nächsten Achtel
		achtelDieserSchlag++;
		if (achtelDieserSchlag >= bars[takt][schlag]) { // nicht mehr im schlag drin
			// neuer Schlag
			achtelDieserSchlag = 0;
			schlag++;
			if (schlag >= bars[takt].length) {// nicht mehr im takt drin
				schlag = 0;
				takt++;

				document.getElementById("aktuellertakt").value = takt + 1 - vorlauf;
			}
		}
	}

	if (takt < bars.length && !stopped) {
		setTimeout(run, 1);
	}
}

// Timer stoppen
function stopTimer() {
	for (var i = 1; i < 99999; i++) {
		//window.clearInterval(i);
		window.clearTimeout(i);
	}
}

// Summe in Array
// https://stackoverflow.com/questions/3762589/fastest-javascript-summation
function sumArray(myArray) {
	var count = 0;
	for (var i = myArray.length - 1; i > 0; i--) {
		count += myArray[i];
	}
	return count;
}

module.exports = Metronom;
