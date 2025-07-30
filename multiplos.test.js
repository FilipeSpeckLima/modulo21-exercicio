const { somarMultiplos } = require('./multiplos');

test('Soma de múltiplos de 5 ou 7 abaixo de 10 deve ser 12', () => {
  expect(somarMultiplos(10)).toBe(12); // 5 + 7
});

test('Soma de múltiplos de 5 ou 7 abaixo de 20 deve ser 51', () => {
  expect(somarMultiplos(20)).toBe(51); // 5 + 7 + 10 + 14 + 15
});
