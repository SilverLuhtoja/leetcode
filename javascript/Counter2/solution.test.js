const createCounter = require('./solution');

describe('createCounter', () => {
  test('when counter increment, returns value + 1 ', () => {
    const counter = createCounter(5);
    counter.increment();
    counter.increment();
    let val = counter.increment();
    expect(val).toBe(8);
  });

  test('when counter decrement, returns value - 1 ', () => {
    const counter = createCounter(5);
    counter.decrement();
    counter.decrement();
    let val = counter.decrement();
    expect(val).toBe(2);
  });

  test('when counter reset, returns initial after function calls', () => {
    const counter = createCounter(5);
    counter.decrement();
    counter.decrement();
    let val = counter.reset();
    expect(val).toBe(5);
  });
});
