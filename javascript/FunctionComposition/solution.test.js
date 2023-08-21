const compose = require('./solution');

describe('map', () => {
  test('test 1', () => {
    functions = [x => x + 1, x => 2 * x];
    x = 4;

    const fn = compose(functions);
    expect(fn(x)).toEqual(9);
  });

  test('test 2', () => {
    functions = [x => 10 * x, x => 10 * x, x => 10 * x];
    x = 1;

    const fn = compose(functions);
    expect(fn(x)).toEqual(1000);
  });

  test('test 3', () => {
    functions = [];
    x = 42;

    const fn = compose(functions);
    expect(fn(x)).toEqual(42);
  });
});
