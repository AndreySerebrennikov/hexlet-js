const capitalize = require('../task/capitalize');

// Вариант №1 "Простой способ с 1 проверкой"
// test(
//   'test #1',
//   () => {
//     expect(capitalize('hello')).toBe('Hello');
//   },
// );

// Вариант №2 "Если проверок много"
describe(
  'Test',
  () => {
    const testCase = [
      {
        inString: 'hello',
        expected: 'Hello',
      },
      {
        inString: '',
        expected: '',
      },
    ];
    testCase.forEach((test) => {
      it(
        `Input: ${test.inString} Output: ${test.expected}`,
        () => {
          const res = capitalize(test.inString);
          expect(capitalize(res)).toBe(test.expected);
        },
      );
    });
  },
);
