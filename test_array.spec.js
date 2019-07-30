var assert = require('assert');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });

    it('should the first index when the value is present at multiple indices', function() {
      assert.equal([1, 2, 3, 1].indexOf(1), 0);
    });
  });

  describe('#reverse', () => {
    it('modifies the original array in place', () => {
      const array = [1, 2, 3];
      assert.equal(array, array.reverse());
    });
  });

  describe('#length', () => {
    it('gives 1 for an empty array', () => {
      assert([].length, 1);
    });
  });
});
