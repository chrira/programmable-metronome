/**
 * time signature base class
 * 
 * The time signature (also known as meter signature, metre signature or measure signature)
 * is a notational convention used in Western musical notation to specify how many beats (pulses)
 * are contained in each measure (bar), and which note value is equivalent to a beat.
 * 
 * Simple time signatures consist of two numerals, one stacked above the other:
 * - The lower numeral indicates the note value that represents one beat (the beat unit).
 *   This number is typically a power of 2.
 * - The upper numeral indicates how many such beats constitute a bar.
 * eg. 3/4 -> three-four time
 */
function TimeSignature(beatNumber, beatUnit) {
  this.beatNumber = beatNumber;
  this.beatUnit = beatUnit;
}

/**
 * Number of beats inside one bar.
 */
TimeSignature.prototype.getBeatNumber = function() {
  return this.beatNumber;
}

/**
 * Note value that represents one beat.
 */
TimeSignature.prototype.getBeatUnit = function() {
  return this.parts.beatUnit;
};

module.exports = TimeSignature;
