
var TimeSignature = require('./time-signature.js');

/**
 * tempo definition class
 * 
 * The tempo of a piece of music is the speed of the underlying beat.
 * Like a heartbeat, it can also be thought of as the ‘pulse’ of the music.
 * 
 * Tempo is measured in BPM, or beats per minute. One beat every second is 60 BPM.
 * Sometimes the tempo is written at the beginning of the music and is called a metronome marking.
 */
function Tempo(bpm, timeSignature) {
  this.bpm = bpm;
  this.timeSignature = timeSignature;
}

Tempo.prototype.getBpm = function() {
  return this.bpm;
}

Tempo.prototype.getTimeSignature = function() {
  return this.timeSignature;
};

module.exports = Tempo;
