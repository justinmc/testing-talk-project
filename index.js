module.exports = function fib(number) {
  if (typeof number !== 'number' || number < 0) {
    throw new Error('Invalid input');
  }
  if (typeof number !== 'number' || number < 2) {
    return 1;
  }
  return fib(number - 1) + fib(number - 2);
};
