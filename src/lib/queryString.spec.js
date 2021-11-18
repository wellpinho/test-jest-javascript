const {
  queryString
} = require("./queryString");

describe('Object to query string', () => {
  it('should create a valid query string when an object is provided', () => {
    const obj = {
      name: 'Wellington',
      profession: 'developer'
    }

    // usado para comparar numero inteiro ou string
    expect(queryString(obj)).toBe(
      
      // isso é uma query string passado na barra de endereço
      'name=Wellington&profession=developer'
    )
  });
});

// describe('Query string to Object', () => {
//   it('should ', () => {
//     expect()
//   });
// });