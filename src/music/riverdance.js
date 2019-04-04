var Piece = require('../piece/piece');
var Bars = require('../piece/bars');

const barsSatz1 = [
  [3, 2, 2],
  new Bars(8, [3, 2, 2]),
  new Bars(3, [2, 2, 3], 'A'),  // bar 10
  [2, 2, 2, 2],
  [2, 2],
  [3, 3],
  [3],
  new Bars(4, [2, 2]),
  new Bars(1, [3, 2, 2], 'B'),  // bar 21
  [3, 3, 3],
  [2, 2, 2, 2, 2, 2],
  [3, 2, 2],
  [3, 3, 3],
  [2, 2, 2, 2, 2, 2],
  new Bars(3, [2, 2, 3], 'C'),  // bar 27
  [2, 2, 2, 2],
  [2, 2],
  [3, 3],
  [3],
  new Bars(4, [2, 2]),
  new Bars(3, [3, 2, 2, 2], 'D'),  // bar 38
  [3, 3, 3],
  new Bars(3, [3, 2, 2, 2]),
  [3, 3, 3],
  new Bars(4, [3, 2, 2, 2], 'E'),
  new Bars(4, [3, 2, 2, 2]), // repetition
  new Bars(8, [3, 2, 2, 2]),
  new Bars(4, [3, 3, 3], 'F'),
  new Bars(4, [3, 3, 3]), // repetition
  new Bars(8, [3, 3, 3]),
  new Bars(8, [2, 2], 'G'), // alla breve
  new Bars(8, [2, 2], 'H'),
  new Bars(8, [2, 2]), // repetition
  new Bars(8, [2, 2], 'I'),
  new Bars(8, [2, 2], 'J'),
  new Bars(8, [2, 2], 'K'),
  new Bars(1, [3, 3], 'L'),
  [2, 2, 2, 2]
  [3, 3],
  [2, 2, 2, 2]
  [3, 3],
  [2, 2, 2, 2],
  new Bars(2, [3, 3]),
  [2, 2],
  new Bars(1, [3, 3]), // repetition
  [2, 2, 2, 2]
  [3, 3],
  [2, 2, 2, 2]
  [3, 3],
  [2, 2, 2, 2],
  new Bars(2, [3, 3]),
  [2, 2],
  new Bars(1, [3, 3], 'M'),
  [2, 2, 2, 2]
  [3, 3],
  [2, 2, 2, 2]
  [3, 3],
  [2, 2, 2, 2],
  new Bars(2, [3, 3]),
  [2, 2],
  new Bars(1, [3, 3]), // repetition
  [2, 2, 2, 2]
  [3, 3],
  [2, 2, 2, 2]
  [3, 3],
  [2, 2, 2, 2],
  new Bars(2, [3, 3]),
  [2, 2],
  new Bars(1, [3, 3], 'N'),
  [2, 2, 2, 2]
  [3, 3],
  [2, 2, 2, 2]
  [3, 3],
  [2, 2, 2, 2],
  new Bars(2, [3, 3]),
  [2, 2],
  new Bars(1, [3, 3]), // repetition
  [2, 2, 2, 2]
  [3, 3],
  [2, 2, 2, 2]
  [3, 3],
  [2, 2, 2, 2],
  new Bars(2, [3, 3]),
  [2, 2],
  new Bars(1, [3, 3], 'O'),
  [2, 2, 2, 2]
  [3, 3],
  [2, 2, 2, 2]
  [3, 3],
  [2, 2, 2, 2],
  new Bars(2, [3, 3]),
  [2, 2],
  new Bars(1, [3, 3]), // repetition
  [2, 2, 2, 2]
  [3, 3],
  [2, 2, 2, 2]
  [3, 3],
  [2, 2, 2, 2],
  new Bars(2, [3, 3]),
  [2, 2],
  new Bars(8, [3, 3], 'P'),
  new Bars(8, [3, 3], 'Q'),
  new Bars(8, [3, 3]), // repetition
  new Bars(8, [3, 3], 'R'),
  new Bars(8, [3, 3]), // repetition
  new Bars(8, [3, 3], 'S'),
  new Bars(8, [3, 3]), // repetition
  new Bars(8, [3, 3], 'T'),
  new Bars(8, [3, 3]), // repetition
  new Bars(8, [3, 3], 'U')
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
