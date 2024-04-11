const assert = require('assert');
const Rooster = require('../index');

describe('Rooster', () => {
  describe('.announceDawn', () => {
    it('returns a rooster call', () => {
      const expected = 'cock-a-doodle-doo!';
      const actual = Rooster.announceDawn();
      assert.equal(actual, expected);
    });
  });

  describe('.timeAtDawn', () => {
    it('returns its argument as a string', () => {
      const inputNumber = 20;
      const expected = '20';
      const actual = Rooster.timeAtDawn(inputNumber);
      assert.strictEqual(actual, expected);
    });

    it('throws a RangeError if passed a number less than 0 or more than 23', () => {
      // Test case for input less than 0
      const inputNumberNegative = -1;
      assert.throws(() => Rooster.timeAtDawn(inputNumberNegative), RangeError);

      // Test case for input greater than 23
      const inputNumberGreaterThan23 = 24;
      assert.throws(() => Rooster.timeAtDawn(inputNumberGreaterThan23), RangeError);
    });
  });
});
