/*
 * mainFunc() должна возвращать результат работы переданной ей возвратной функции, например:
 * mainFunc(2, 5, cbRandom) → случайно от 2 до 5 включительно
 * mainFunc(10, 30, cbRandom) → случайно 10..30 включительно
 * mainFunc(2, 5, cbPow) → 32
 * mainFunc(2, 5, cbAdd) → 7
 * mainFunc(2, 5, 'not a func') → false
 */

describe('test of 8-th task', () => {
  it('mainFunc() test', () => {
    expect(mainFunc(2, 5, cbRandom)).not.toBeLessThan(2);
    expect(mainFunc(2, 5, cbRandom)).not.toBeGreaterThan(5);

    expect(mainFunc(2, 5, cbPow)).toBe(32);
    expect(mainFunc(2, 5, cbAdd)).toBe(7);
    expect(mainFunc(2, 5, 'not a func')).toBe(false);
  });
});