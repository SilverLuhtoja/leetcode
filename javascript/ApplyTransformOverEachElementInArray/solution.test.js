const map = require('./solution');

describe('map', () => {
  test('The function increases each value in the array by one', () => {
    let fn = function plusone(n) {
      return n + 1;
    };
    let arr = [1, 2, 3];

    const newArray = map(arr, fn);
    expect(newArray).toStrictEqual([2, 3, 4]);
  });

  test('The function increases each value by the index it resides in.', () => {
    let fn = function plusI(n, i) {
      return n + i;
    };
    let arr = [1, 2, 3];

    const newArray = map(arr, fn);
    expect(newArray).toStrictEqual([1, 3, 5]);
  });

  test('The function always returns 42.', () => {
    let fn = function constant() {
      return 42;
    };
    let arr = [1, 2, 3];

    const newArray = map(arr, fn);
    expect(newArray).toStrictEqual([42, 42, 42]);
  });
});
