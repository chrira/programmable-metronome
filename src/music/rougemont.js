var Piece = require('../piece/piece');
var Bars = require('../piece/bars');

const barsSatz1 = [
  new Bars(30, [2, 2, 2, 2]),
  new Bars(2, [2, 2]),
  new Bars(3, [2, 2, 3]),  // bar 33
  new Bars(3, [2, 2, 3]),
  [2, 2, 2, 2],
  new Bars(3, [2, 2, 3]),
  [2, 2, 2, 2],
  new Bars(3, [2, 2, 3]),
  [2, 2, 2],
  new Bars(6, [2, 2, 3]),  // bar 45
  [2, 2, 2, 2],
  new Bars(5, [2, 2, 3]),
  [2, 2, 2, 3],
  [2, 2, 2, 2],
  new Bars(2, [2, 2, 3]),  // bar 61
  [2, 2, 2, 2],
  new Bars(2, [2, 2, 3]),
  [2, 2, 2, 2],
  new Bars(2, [2, 2, 3]),
  [2, 2, 2, 2],
  new Bars(7, [2, 2, 3]),
  [2, 2, 3],  // bar 77
  [2, 2, 2],
  [2, 2, 3],
  [2, 2, 2, 2],
  [2, 2, 3],
  new Bars(4, [2, 2, 2]),
  [3, 3, 3],  // bar 86
  [3, 3, 3, 3],
  [3, 3, 3],
  [3, 3, 3, 3],
  [3, 3, 3],
  [3, 3, 3, 3],
  [3, 3, 3],
  [2, 2],
  [2, 2, 3],
  new Bars(3, [2, 2, 2, 2]),
  new Bars(5, [2, 2, 3]),
  [3, 3, 3],
  new Bars(2, [2, 2, 2, 2]),
  new Bars(4, [2, 2, 2, 2]), // bar 104
  [2, 2, 2, 2, 2, 2],
  new Bars(4, [2, 2, 2, 2]),
  [2, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2],
  [2, 2, 2, 2, 2], // bar 118
  new Bars(2, [2, 2, 2, 2]),
  new Bars(2, [2, 2, 2, 2, 2 ,2]),
  new Bars(14, [2, 2, 2, 2]),
  new Bars(10, [2, 2, 2, 2]), // bar 137
  [2, 2, 2],
  [2, 2, 2, 2],
  [2, 2, 2],
  [2, 2, 2, 2],
  new Bars(4, [2, 2, 2, 2]), // bar 151
  [2, 2, 2],
  [2, 2, 2, 2],
  new Bars(2, [2, 2, 2, 2]), // bar 159
  [2, 2],
  [2, 2, 3],
  [2, 2, 2, 2],
  [2, 2, 3],
  [3, 3, 3],
  new Bars(9, [2, 2, 2, 2]),
  new Bars(15, [2, 2, 2, 2]), // bar 173
  new Bars(12, [2, 2, 2, 2]), // bar 188
  new Bars(8, [2, 2, 2, 2]), // bar 200
  new Bars(4, [2, 2]),
  [3],
  new Bars(2, [2, 2]),
  new Bars(7, [2, 2]), // bar 215
  [3],
  new Bars(6, [2, 2]),
  new Bars(7, [2, 2]), // bar 215
  new Bars(17, [2, 2, 2, 2]), // bar 229
  new Bars(3, [2, 2]), // bar 246
  new Bars(3, [2, 2, 2, 2]),
  new Bars(8, [2, 2, 2, 2]), // bar 252
  new Bars(14, [2, 2, 2, 2]), // bar 260
  new Bars(3, [2, 2]), // bar 274
  new Bars(12, [2, 2, 2, 2])
];

function Rougemont() {
  Piece.call(this, "Rougemont", [barsSatz1], [108]);
}

Rougemont.prototype = Object.create(Piece.prototype);
Rougemont.prototype.constructor = Rougemont;

Object.defineProperty(Rougemont.prototype, 'constructor', { 
  value: Rougemont, 
  enumerable: false,
  writable: true });

module.exports = Rougemont;
