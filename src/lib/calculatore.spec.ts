const { sum } = require("./calculator");

it('should sum 2 and 2 the result must be 4', async () => {
  expect(sum(2,2)).toBe(4)
});