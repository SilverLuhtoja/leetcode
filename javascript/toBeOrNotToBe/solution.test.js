const solutionFunction = require('./solution');

// Tests for the expect function
describe('custom expect function', () => {
  test('ToBe should pass if values are equal', () => {
    const result = solutionFunction(5).toBe(5);
    expect(result).toBe(true);
  });

  test('ToBe should fail if values are not equal', () => {
    const f = () => solutionFunction(5).toBe(10);
    expect(f).toThrow('Not Equal');

  });

  test('notToBe should pass if values are not equal', () => {
    const result = solutionFunction(5).notToBe(10);
    expect(result).toBe(true);
  });

  test('notToBe should fail if values are equal', () => {
    const f = () => solutionFunction(5).notToBe(5);
    expect(f).toThrow('Equal');
  });
});