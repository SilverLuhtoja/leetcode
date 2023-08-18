const reduce = require('./solution');

describe('map', () => {
  test('test 1', () => {
    fn = function sum(accum, curr) {
      return accum + curr;
    };
    let nums = [1, 2, 3, 4];
    init = 0;

    const newArray = reduce(nums, fn, init);
    expect(newArray).toStrictEqual(10);
  });

  test('test 2', () => {
    fn = function sum(accum, curr) {
      return accum + curr * curr;
    };
    let nums = [1, 2, 3, 4];
    init = 100;

    const newArray = reduce(nums, fn, init);
    expect(newArray).toStrictEqual(130);
  });

  test('test 3', () => {
    fn = function sum(accum, curr) {
      return 0;
    };
    let nums = [];
    init = 25;

    const newArray = reduce(nums, fn, init);
    expect(newArray).toStrictEqual(25);
  });
});
