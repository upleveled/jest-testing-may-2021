// import { add } from '../';
const { add } = require('../');

test('adds two numbers together', () => {
  expect(add(1, 1)).toBe(2);
  expect(add(50, 120)).toBe(170);
});

test('throws when arguments not numbers', () => {
  expect(() => add('1', 1)).toThrow();
  expect(() => add(25, false)).toThrow();
});
