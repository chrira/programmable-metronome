var Piece = require('../piece/piece');
var Bars = require('../piece/bars');

const barsSatz1 = new Bars(66, [2, 2, 2, 2]);

const barsSatz2 = new Bars(75, [2, 2, 2]);

const barsSatz3 = [
  new Bars(2, [2, 2, 2, 2]),
  [2, 2, 2, 3],
  new Bars(3, [2, 2, 3]),
  [2, 2, 2, 3], [2, 2, 3], [2, 2, 2, 3], [2, 2, 3], [2, 2, 2, 3],
  new Bars(2, [3, 3, 2]),
  new Bars(12, [3]),
  [2, 2, 3], [2, 2, 2, 3], [2, 2, 3], [2, 2, 2, 3], [2, 2, 3, 3],
  new Bars(6, [3]),
  new Bars(3, [2, 2, 3]),
  [3, 3, 2],
  new Bars(3, [2, 2, 3]),
  [3, 3, 2],
  new Bars(2, [2, 2, 3]),
  new Bars(2, [3, 3, 3]),
  [2, 2, 3], [2, 2, 2, 3], [2, 2, 3], [2, 2, 2, 3], [2, 2, 3], [2, 2, 2, 2, 3],
  new Bars(4, [3]),
  new Bars(2, [2, 2, 3]),
  [2, 2, 3, 3],
  new Bars(60, [3]),
  new Bars(3, [3, 2]),
  new Bars(62, [3]),
  [2, 2, 3], [2, 2, 2, 3], [2, 2, 3], [2, 2, 2, 3], [2, 2, 3], [2, 2, 2, 2, 3], [2, 2, 3], [2, 2, 2, 3], [2, 2, 3], [2, 2, 2, 3],
  new Bars(14, [3]),
  [2, 2, 3],
  new Bars(4, [3])
];

function Masquerade() {
  Piece.call(this, "Masquerade", [barsSatz1, barsSatz2, barsSatz3]);
}

Masquerade.prototype = Object.create(Piece.prototype);
Masquerade.prototype.constructor = Masquerade;

Object.defineProperty(Masquerade.prototype, 'constructor', { 
  value: Masquerade, 
  enumerable: false,
  writable: true });

module.exports = Masquerade;
