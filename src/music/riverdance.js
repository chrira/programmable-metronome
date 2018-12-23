var Piece = require('../piece/piece');
var Bars = require('../piece/bars');

const barsSatz1 = [
  [3, 2, 2],
  new Bars(8, [3, 2, 2]),
  new Bars(2, [2, 2, 3], 'A'),
  [2, 2, 2, 2],
  [2, 2],
  [3, 3],
  [3],
  new Bars(4, [2, 2]),
];

function Riverdance() {
  Piece.call(this, "Riverdance", [barsSatz1], [108]);
}

Riverdance.prototype = Object.create(Piece.prototype);
Riverdance.prototype.constructor = Riverdance;

Object.defineProperty(Riverdance.prototype, 'constructor', { 
  value: Riverdance, 
  enumerable: false,
  writable: true });

module.exports = Riverdance;
