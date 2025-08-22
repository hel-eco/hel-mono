import { hello } from '@ml/utils';

test('hello', () => {
  expect(hello().includes('hello')).toBeTruthy();
});
