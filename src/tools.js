const cuadriculeArray = [
  [0, 0, 0, 1, 1, 0],
  [1, 1, 1, 0, 1, 0],
  [0, 0, 0, 1, 1, 0],
  [1, 0, 0, 1, 1, 0],
  [0, 1, 0, 1, 1, 0],
  [1, 0, 1, 1, 1, 0],
];
console.table(cuadriculeArray);

const countAliveNeighbors = (array, x, y) => {
  let accAlive = 0;
  for (let i = x - 1; i <= x + 1; i++) {
    for (let j = y - 1; j <= y + 1; j++) {
      if (x !== i || y !== j) {
        if (
          i >= 0 &&
          i < cuadriculeArray.length &&
          j >= 0 &&
          j < cuadriculeArray[i].length
        ) {
          if (cuadriculeArray[i][j] === 1) {
            accAlive++;
          }
        }
      }
    }
  }

  return accAlive;
};

const modifyCells = (array) => {
  const newTable = structuredClone(array);

  for (let i = 0; i < newTable.length; i++) {
    for (let j = 0; j < newTable.length; j++) {
      const aliveNeighbors = countAliveNeighbors(array, i, j);

      if (array[i][j] === 0 && aliveNeighbors === 3) {
        newTable[i][j] = 1;
      } else if (
        (array[i][j] === 1 && aliveNeighbors > 3) ||
        aliveNeighbors < 2
      ) {
        newTable[i][j] = 0;
      }
    }
  }

  return newTable;
};

console.table(modifyCells(cuadriculeArray));
