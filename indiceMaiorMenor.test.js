const { encontrarIndices } = require('./indiceMaiorMenor');

test('Índice do maior e menor valor em [10, 3, 25, -4, 8]', () => {
  expect(encontrarIndices([10, 3, 25, -4, 8])).toEqual({
    indiceMaior: 2,
    indiceMenor: 3
  });
});
