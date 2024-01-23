const { test, expect } = require('@jest/globals');
const take = require('../task/take');

test(
  'Test take #1',
  () => {
    expect(take([1, 2, 3], 2)).toEqual([1, 2]);
  },
);

test(
  'Test take #2',
  () => {
    expect(take([], 2)).toEqual([]);
  },
);

test(
  'Test take #3',
  () => {
    expect(take([1, 2, 3])).toEqual([1]);
  },
);

test(
  'Test take #4',
  () => {
    expect(take([4, 9], 9)).toEqual([4, 9]);
  },
);

test(
  'Test take #5',
  () => {
    expect(take([1, 2, 3], -1)).toEqual([]);
  },
);
