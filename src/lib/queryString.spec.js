const queryString = require('./queryString');

describe.only('Object query string', () => {
  it('should create a valode string when an object...', () => {
    const data = {
      name: 'well',
      profession: 'developer',
    };

    expect(queryString(data)).toBe('name=well&profession=developer');
  });
});
