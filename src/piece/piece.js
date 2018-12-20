/**
 * music piece base class
 */

var Bars = require('./bars');

function Piece(name, parts) {
  this.name = name;
  this.parts = [parts.length];
  this.addParts(parts);
}

Piece.prototype.getName = function() {
  return this.name;
}

Piece.prototype.getParts = function() {
  return this.parts.length;
};

Piece.prototype.getPart = function(number) {
  return this.parts[number - 1];
};

Piece.prototype.addParts = function(parts) {
  const size = parts.length;
  var part;
  for (var i = 0; i < size; i++) {
    part = parts[i];

    if (part instanceof Bars) {
      // whole part is defined by Bars config
      var barsPart = [part.amount];
      for (var j = 0; j < part.amount; j++) {
        barsPart[j] = part.content;
      }
      this.parts[i] = barsPart;
    } else {
      // part is an array
      var part2 = [];
      var subPart2;

      for (var k = 0; k < part.length; k++) {
        subPart2 = part[k];

        if (subPart2 instanceof Bars) {
          var barsSubPart2 = [subPart2.amount];
          for (var l = 0; l < subPart2.amount; l++) {
            barsSubPart2[l] = subPart2.content;
          }
          part2.concat(barsSubPart2);
        } else {
          part2[k] = subPart2;
        }
      }

      this.parts[i] = part2;
    }
  }
}

module.exports = Piece;
