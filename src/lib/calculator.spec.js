const sum = require('./calculator')

describe('Calculator function sum', () => {

  it('should be sum a + b', () => {
    expect(sum(2,2)).toBe(4);
  });

  it('should be sum 2 and 2 even if one of them is a string', () => {
    /*
      neste caso tive que faze tratamento na
      função convertendo string em numero
    */
    expect(sum('2','2')).toBe(4)
  })

  it('returns an error if the correct params are not passed in the function', () => {
    // retorna erro se não for passado dois numeros inteiros para a soma
    expect(() => sum('', '2')).toThrowError();
    expect(() => sum([2, 2])).toThrowError();
    expect(() => sum({})).toThrowError();
    expect(() => sum()).toThrowError();
    expect(() => sum()).toThrowError();
  })
});
