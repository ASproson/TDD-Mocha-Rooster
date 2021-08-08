const assert = require('assert');
const rooster = require('../index')

describe('Rooster function', () => {
  describe('.announceDawn', () => {
    it('returns a rooster call', () =>{
      // Setup
      const expected = 'cock-a-doodle-do!';

      // Exercise
      let returned = Rooster.announceDawn();

      // Verify
      assert.equal(expected, returned);
    })
  })
});

describe('.timeAtDawn', () => {
  it('returns its argument as a string', () => {
    // Setup
    const expected = '12';
    const inputNumber = 12;
    // Exercise
    const returned = Rooster.timeAtDawn(inputNumber);
    // Verify
    assert.strictEqual(expected, returned);
  })
});


describe('.timeAtDawn', () => {
  it('thows an error if passed a number less than 0', () => {
    // Setup
    const expected = RangeError;
    const inputNumber = -1;
    // Exercise
    const returned = RangeError;
    // Verify
    assert.throws(() => {
      Rooster.timeAtDawn(inputNumber);
    }, expected)
  })
});

describe('.timeAtDawn', () => {
  it('thows an error if passed a number greater than 23', () => {
    // Setup
    const expected = RangeError;
    const inputNumber = 24;
    // Exercise
    const returned = RangeError;
    // Verify
    assert.throws(() => {
      Rooster.timeAtDawn(inputNumber);
    }, expected)
  })
});
