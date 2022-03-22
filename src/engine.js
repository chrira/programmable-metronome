// Polyfills
import 'babel-polyfill';

// Styles
import './assets/styles/index.scss';

"use strict";

/**
 * Engine class
 */
function Engine() {
}

var Metronom = require('./metronom');
var Masquerade = require('./music/masquerade');
var Riverdance = require('./music/riverdance');
var Rougemont = require('./music/rougemont');


var metronom = new Metronom();

var piece = new Riverdance();

var barsSatz1 = piece.getPart(1);
var barsSatz2 = piece.getPart(2);
var barsSatz3 = piece.getPart(3);

var tempi = piece.getTempi();

// event listener

getStartButton().addEventListener("click", start);
getStopButton().addEventListener("click", stop);
getPieceSelection().addEventListener("change", pieceChanged);
getElementById("satz").addEventListener("change", wechsleSatz);

function start() {
  metronom.start();
}

function stop() {
  metronom.stop();
}

function pieceChanged() {
	var sel = getPieceSelection();
	var text = sel.options[sel.selectedIndex].text;
	getPieceTitle().innerHTML = text;

	if (sel.selectedIndex === 0) {
		piece = new Riverdance();
	}
	if (sel.selectedIndex === 1) {
		piece = new Rougemont();
	}
	if (sel.selectedIndex === 2) {
		piece = new Masquerade();
	}

	metronom.pieceChanged(piece);

	getElementById("tempo").value = piece.getTempi()[0];
	getElementById("satz").value = 1;
	getElementById("satz").max = piece.getParts();
}

function wechsleSatz() {
	var neueSatzNummer = document.getElementById("satz").value;
	document.getElementById("tempo").value = tempi[neueSatzNummer - 1];

	metronom.partChanged(neueSatzNummer);
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



// Beep erstellen
// https://stackoverflow.com/questions/35497243/how-to-make-a-short-beep-in-javascript-that-can-be-called-repeatedly-on-a-page#35498316
//var a = new AudioContext();
//var a = new webkitAudioContext();

var a;
var v;
var u;

function erstenBeepAusloesen() {
	// Do we have Audio API
	try {
		window.AudioContext = window.AudioContext || window.webkitAudioContext;
	} catch (e) {
		alert('Web Audio API is not supported in this browser');
	}

	a = new AudioContext();
	//v = a.createOscillator();
	//u = a.createGain();
	//v.connect(u);
	//v.type = "square";
	//u.connect(a.destination);
	beep(1, 100, 1);
}

function beep(loud, freq, dur) {
	//var a = new AudioContext();
	//console.log(loud+x+y)

	// notwendig?
	v = a.createOscillator();
	u = a.createGain();
	v.connect(u);
	v.type = "square";
	u.connect(a.destination);

	v.frequency.value = freq;
	u.gain.value = loud * 0.01;
	v.start(a.currentTime);
	v.stop(a.currentTime + dur * 0.001);
}

// helpers

function getElementById(id) {
	return document.getElementById(id);
}

function getStartButton() {
	return getElementById("startButton");
}

function getStopButton() {
	return getElementById("stopButton");
}

function getPieceSelection() {
	return getElementById("pieceSelection");
}

function getPieceTitle() {
	return getElementById("pieceTitle");
}

// update ui fields with piece infos
pieceChanged();


// module.exports = Engine;
// export const erstenBeepAusloesen = Engine.prototype.erstenBeepAusloesen;

//export class Engine {}

export { beep, erstenBeepAusloesen };
