import test from '../src';

describe('test', () => {
  it('test测试', () => {
    const result = test(1, 2);
    expect(result).toBe(3);
  });
});
