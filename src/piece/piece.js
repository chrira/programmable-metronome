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
      // this.parts.concat(part);
    } else {
      this.parts[i] = part;
    }
  }
}

module.exports = Piece;
