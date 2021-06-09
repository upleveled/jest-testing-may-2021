// export function add
module.exports.add = function add(a, b) {
  if (typeof a === 'string') {
    a = parseInt(a);
  }

  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Please pass only numbers');
  }

  return a + b;
};
