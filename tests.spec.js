const assert = require('assert');
const fib = require('./index.js');

describe('fib', function() {
  it('returns the base case fibonacci numbers', function() {
    assert.equal(fib(0), 1);
    assert.equal(fib(1), 1);
  });

  it('calculates the first few fibonacci numbers', function() {
    assert.equal(fib(2), 2);
    assert.equal(fib(3), 3);
    assert.equal(fib(4), 5);
    assert.equal(fib(5), 8);
  });

  it('throws an error for invalid input', function() {
    assert.throws(fib.bind(null, -1), Error);
    assert.throws(fib.bind(null, 'a'), Error);
  });
});
