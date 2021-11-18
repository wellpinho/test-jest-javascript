const { sum, subtract, mult, division } = require('./calculator')

describe('Calculator', () => {

  it('should be sum a + b', () => {
    expect(sum(2,2)).toBe(4);
  });

  it('should be subtract a - b', () => {
    expect(subtract(2,1)).toBe(1)
  });

  it('should be multiply a * b', () => {
    expect(mult(50, 5)).toBe(250)
  });

  it('should be division a / b', () => {
    expect(division(100, 10)).toBe(10)
  });
});