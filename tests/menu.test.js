
const menu = require('../lib/menu');

describe('menu', function() {
  test('menu is a function', () => {
    expect(typeof(menu())).toBe('function');
  });
});

// function sum(a, b) {
//   return a + b;
// }
//
// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });
