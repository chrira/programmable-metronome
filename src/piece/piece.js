/**
 * music piece base class
 */

var Bars = require('./bars');

function Piece(name, parts, tempi) {
  this.name = name;
  this.parts = [parts.length];
  this.addParts(parts);
  this.tempi = tempi;
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

Piece.prototype.getTempi = function() {
  return this.tempi;
}

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
            part2[part2.length] = subPart2.content;
          }
        } else {
          part2[part2.length] = subPart2;
        }
      }

      this.parts[i] = part2;
    }
  }
}

module.exports = Piece;
