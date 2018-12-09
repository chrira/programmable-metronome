"use strict";

//var achtel = 0;
var takt = 0;
var schlag = 0;
var achtelDieserSchlag=0;
var timestamp = (new Date()).getTime();
var achtelDauer = 200;

var bars;
var vorlauf=0;
var achtelZeigen = true;
var stopped= false;

var ersterBeep = true;

function wechsleTempo(id){
	var neueSatzNummer = document.getElementById("satz").value;
		
	if(neueSatzNummer==1){
		document.getElementById("tempo").value=176;
	}
	else if(neueSatzNummer==2){
		document.getElementById("tempo").value=60;
	}
	else if(neueSatzNummer==3){
		document.getElementById("tempo").value=140;
	}
}
function start(){
	ersterBeep = false;
	erstenBeepAusloesen();
	
	stopped=true;
	setVariables();
	//alert("start");
	stopTimer();
	stopped=false;
	run();
	//setTimeout(jetztstarten, 5);
}

function jetztstarten(){
	//alert("start");
	stopped=false;
	run();
}


function setVariables(){
	var tempo=document.getElementById("tempo").value;
	achtelDauer= (1000*60/2)/tempo;
	
	if(document.getElementById("achtelzeigen").checked) {
		achtelZeigen = true;
	}
	else {
		achtelZeigen = false;
	}
	
	var satzNr=document.getElementById("satz").value;
	if (satzNr == 1) {
		bars = barsSatz1.slice(0);
	}
	if (satzNr == 2) {
		bars = barsSatz2.slice(0);
	}
	if (satzNr == 3) {
		bars = barsSatz3.slice(0);
	}
	
	
	takt=document.getElementById("starttakt").value-1;
	
	vorlauf=document.getElementById("vorlauf").value;
	var startbar=bars[takt];
	for (var i = 0; i<vorlauf; i++){
		bars.splice(takt, 0, startbar);
	}
	
	document.getElementById("aktuellertakt").value = takt+1-vorlauf;
	
	// reset
	
	schlag = 0;
	achtelDieserSchlag=0;
	timestamp = (new Date()).getTime();
	
}

function run() {
	
	var now = (new Date()).getTime();

	if (now - timestamp >= achtelDauer) {
		if (schlag == 0 && achtelDieserSchlag==0){ // erster Achtel eines Taktes
			beep(10, 600, 50);
		}
		else if (achtelDieserSchlag==0){ // erster Achtel eines Schlages
			beep(10, 500, 50);
		}
		else if(achtelZeigen) { // irgendein Achtel
			beep(10, 400, 50);
		}
		timestamp = now;
		
		// hochzaehlen für nächsten Achtel
		achtelDieserSchlag++;
		if (achtelDieserSchlag >= bars[takt][schlag]) { // nicht mehr im schlag drin
			// neuer Schlag
			achtelDieserSchlag=0;
			schlag++;
			if(schlag >= bars[takt].length){// nicht mehr im takt drin
				schlag=0;
				takt++;
				
				document.getElementById("aktuellertakt").value = takt+1-vorlauf;
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

function stop() {
	stopped=true;
}


// https://forums.developer.apple.com/thread/48815#199210
// angepasst:
//document.addEventListener("DOMContentLoaded", function(event) {
    // Do we have Web Audio API?
//    try {
//      window.AudioContext = window.AudioContext || window.webkitAudioContext;
//    } catch (e) {
//      alert('Web Audio API is not supported in this browser');
//    }
//});



// https://stackoverflow.com/questions/20054273/recording-audio-in-chrome-for-android-using-web-audio-api-and-navigator-getuserm
//if (!window.AudioContext) {
//        window.AudioContext = window.webkitAudioContext;
//    }

// // https://stackoverflow.com/questions/22977033/audiocontext-doesnt-exist-on-some-phones#22996293
// var contextClass = (window.AudioContext || 
// window.webkitAudioContext || 
// window.mozAudioContext || 
// window.oAudioContext || 
// window.msAudioContext);
// if (contextClass) {
//     // Web Audio API is available.
//     var context = new contextClass();
// } else {
//     // Web Audio API is not available. Fallback
// }

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

// Summe in Array
// https://stackoverflow.com/questions/3762589/fastest-javascript-summation
function sumArray(myArray) {
	var count = 0;
	for (var i = myArray.length-1; i>0; i--) {
		count += myArray[i];
	}
	return count;
}

var barsSatz1 = [
[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2],[2,2,2,2]
];

var barsSatz2 = [
[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2],[2,2,2]
];

var barsSatz3 = [
	[2,2,2,2],[2,2,2,2],[2,2,2,3],[2,2,3],[2,2,3],[2,2,3],[2,2,2,3],[2,2,3],[2,2,2,3],[2,2,3],[2,2,2,3],[3,3,2],[3,3,2],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[2,2,3],[2,2,2,3],[2,2,3],[2,2,2,3],[2,2,3,3],[3],[3],[3],[3],[3],[3],[2,2,3],[2,2,3],[2,2,3],[3,3,2],[2,2,3],[2,2,3],[2,2,3],[3,3,2],[2,2,3],[2,2,3],[3,3,3],[3,3,3],[2,2,3],[2,2,2,3],[2,2,3],[2,2,2,3],[2,2,3],[2,2,2,2,3],[3],[3],[3],[3],[2,2,3],[2,2,3],[2,2,3,3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3,2],[3,2],[3,2],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[2,2,3],[2,2,2,3],[2,2,3],[2,2,2,3],[2,2,3],[2,2,2,2,3],[2,2,3],[2,2,2,3],[2,2,3],[2,2,2,3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[2,2,3],[3],[3],[3],[3]

];
