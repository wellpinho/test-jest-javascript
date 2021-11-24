const { queryString, parse } = require("./queryString");

describe('Object to query string', () => {
  it('should create a valid query string when an object is provided', () => {
    const obj = {
      name: 'Wellington',
      profession: 'developer',
    }

    expect(queryString(obj)).toBe(

      'name=Wellington&profession=developer'
    )
  });

  it('should create a valid query string even when an array', () => {
    const obj = {
      name: 'Wellington',
      abilities: ['JS', 'TDD'],
    }

    expect(queryString(obj)).toBe(

      'name=Wellington&abilities=JS,TDD'
    )
  });

  it('should throw an error when an object is passed as value', () => {
    const obj = {
      name: 'Wellington',
      abilities: {
        first: 'JS',
        second: 'TDD'
      },
    }

    expect(() => {
      queryString(obj);
    }).toThrowError();
  });
});

describe.only('Query string to object', () => {
  it('should convert a query string to object', () => {
    const qs = `name=Wellington&profession=developer`

    expect(parse(qs)).toEqual({
      name: 'Wellington',
      profession: 'developer'
    })
  });

  it('should convert a query string of a single key=value', () => {
    const qs = `name=Wellington`

    expect(parse(qs)).toEqual({
      name: 'Wellington',
    })
  });
});