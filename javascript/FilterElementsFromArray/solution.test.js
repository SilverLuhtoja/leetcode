const filter = require('./solution');

describe('map', () => {
  test('The function increases each value in the array by one', () => {
    fn = function greaterThan10(n) {
      return n > 10;
    };
    let arr = [0, 10, 20, 30];

    const newArray = filter(arr, fn);
    expect(newArray).toStrictEqual([20, 30]);
  });

  test('The function increases each value by the index it resides in.', () => {
    fn = function firstIndex(n, i) {
      return i === 0;
    };
    let arr = [1, 2, 3];

    const newArray = filter(arr, fn);
    expect(newArray).toStrictEqual([1]);
  });

  test('The function always returns 42.', () => {
    fn = function plusOne(n) {
      return n + 1;
    };
    let arr = [-2, -1, 0, 1, 2];

    const newArray = filter(arr, fn);
    expect(newArray).toStrictEqual([-2, 0, 1, 2]);
  });
});
