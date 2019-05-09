import B from '../../src/B.js';

//const B = require('../../src/B.js');

describe('Warrior Unit Test', () => {
  let warrior;
  beforeEach(() => {
    warrior = new B();
  });

  it('should return warrior weapon', () => {
    expect(warrior.getWeapon()).toBe('sword');
  });
  it('should decrease warrior health by 10', () => {
    expect(warrior.takeDamage(10)).toBe(90);
  });
});

