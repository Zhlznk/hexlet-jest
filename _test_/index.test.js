import reverse from '../scr/index.js'

test('reverse', () => {
  const str = 'hello';
  expect(reverse(str)).toEqual('olleeh');
  expect(reverse('')).toEqual('');
});
