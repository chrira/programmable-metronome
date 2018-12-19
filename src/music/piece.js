/**
 * music piece base class
 */
function Piece(name, parts) {
  this.name = name;
  this.parts = parts;
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

module.exports = Piece;
