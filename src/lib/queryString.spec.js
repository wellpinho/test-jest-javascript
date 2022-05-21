const { queryString } = require('./queryString');

describe.only('Object query string', () => {
  it('should', () => {
    const data = {
      name: 'well',
      profession: 'developer',
    };

    expect(queryString(data)).toBe('name=well&profession=developer');
  });

  it('should', () => {
    const data = {
      name: 'well',
      abilities: ['JS', 'TDD', 'TS'],
    };

    expect(queryString(data)).toBe('name=well&abilities=JS,TDD,TS');
  });

  it('should get an error', () => {
    const data = {
      name: 'well',
      abilities: {
        first: 'JS',
        second: 'TDD',
      },
    };

    expect(() => {
      queryString(data);
    }).toThrowError();
  });
});
