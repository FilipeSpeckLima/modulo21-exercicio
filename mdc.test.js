const { calcularMDC } = require('./mdc');

test('MDC de 48 e 18 deve ser 6', () => {
  expect(calcularMDC(48, 18)).toBe(6);
});

test('MDC de 24 e 9 deve ser 3', () => {
  expect(calcularMDC(24, 9)).toBe(3);
});