/* eslint-disable no-undef */
import {
  modifyCells,
  countAliveNeighbors,
  generateRandomCuadricule,
} from './tools.js';

describe('Given modifyCells', () => {
  describe('When is received a random 3x3 cuadricule', () => {
    test('Then it should return an array that follow all the rules', () => {
      const testData = [
        [0, 0, 0],
        [1, 1, 1],
        [0, 0, 0],
      ];
      const expected = [
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0],
      ];
      const result = modifyCells(testData);
      expect(result).toStrictEqual(expected);
    });
  });
  describe('When is received a 3x3 cuadricule with three live cells', () => {
    test('Then it should return an array that follow the first mutation rule: Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction. And in this case then stay static', () => {
      const testData = [
        [0, 1, 0],
        [1, 1, 0],
        [0, 0, 0],
      ];
      const expected = [
        [1, 1, 0],
        [1, 1, 0],
        [0, 0, 0],
      ];
      const result = modifyCells(testData);
      expect(result).toStrictEqual(expected);
    });
  });
  describe('When is received a 3x3 cuadricule with two live cells', () => {
    test('Then it should return an array that follow the second mutation rule: Any live cell with fewer than two live neighbours dies, as if by underpopulation', () => {
      const testData = [
        [0, 1, 0],
        [0, 1, 0],
        [0, 0, 0],
      ];
      const expected = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ];
      const result = modifyCells(testData);
      expect(result).toStrictEqual(expected);
    });
  });
  describe('When is received a random 4x4 cuadricule ', () => {
    test('Then it should return an array that follow the third mutation rule: Any live cell with more than three live neighbours dies, as if by overpopulation', () => {
      const testData = [
        [1, 0, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 0],
      ];
      const expected = [
        [0, 0, 1, 0],
        [0, 0, 1, 1],
        [0, 1, 1, 0],
        [0, 0, 0, 0],
      ];
      const result = modifyCells(testData);
      expect(result).toStrictEqual(expected);
    });
  });
  describe('When is received a random 4x4 cuadricule ', () => {
    test('Then it should return an array that follow the rule: Any live cell with two or three live neighbours lives on to the next generation', () => {
      const testData = [
        [0, 0, 1, 0],
        [0, 1, 1, 1],
        [1, 0, 1, 0],
        [0, 1, 0, 0],
      ];
      const expected = [
        [0, 1, 1, 1],
        [0, 0, 0, 1],
        [1, 0, 0, 1],
        [0, 1, 0, 0],
      ];
      const result = modifyCells(testData);
      expect(result).toStrictEqual(expected);
    });
  });
});

describe('Given countAliveNeighbors', () => {
  describe('When is received a random 3x3 cuadricule and a specified position', () => {
    test('Then it should return a number that counts all the live neighbors of that specified cell. In this case it should be 2', () => {
      const testData = [
        [0, 0, 0],
        [1, 1, 1],
        [0, 0, 0],
      ];
      const expected = 2;
      const result = countAliveNeighbors(testData, 1, 1);
      expect(result).toBe(expected);
    });
  });
  describe('When is received a random 4x4 cuadricule and a specified position', () => {
    test('Then it should return a number that counts all the live neighbors of that specified cell. In this case it should be 4', () => {
      const testData = [
        [0, 1, 0, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 1],
        [0, 1, 0, 0],
      ];
      const expected = 4;
      const result = countAliveNeighbors(testData, 2, 2);
      expect(result).toBe(expected);
    });
  });
});

describe('Given generateRandomCuadricule', () => {
  describe('When is received that function with the parameter, should create a random Array and it only can be tested the length of that array', () => {
    test('Then it should return the length of the random array created. In this case should be 4', () => {
      const testData = generateRandomCuadricule(4);
      const arrayLength = testData.length;
      const expected = 4;
      const result = arrayLength;
      expect(result).toBe(expected);
    });
  });
});
