const filter = require('./solution');

describe('map', () => {
  test('Returns value greater than 10', () => {
    fn = function greaterThan10(n) {
      return n > 10;
    };
    let arr = [0, 10, 20, 30];

    const newArray = filter(arr, fn);
    expect(newArray).toStrictEqual([20, 30]);
  });

  test('Returns values egual to 0', () => {
    fn = function firstIndex(n, i) {
      return i === 0;
    };
    let arr = [1, 2, 3];

    const newArray = filter(arr, fn);
    expect(newArray).toStrictEqual([1]);
  });

  test('test 3', () => {
    fn = function plusOne(n) {
      return n + 1;
    };
    let arr = [-2, -1, 0, 1, 2];

    const newArray = filter(arr, fn);
    expect(newArray).toStrictEqual([-2, 0, 1, 2]);
  });
});
