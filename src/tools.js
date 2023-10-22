/* eslint-disable max-depth */
export const generateRandomCuadricule = (arrayLength) => {
  const emptyArray = Array.from({ length: arrayLength });
  const emptyCuadricule = [];

  for (let i = 0; i < emptyArray.length; i++) {
    const random0And1Array = emptyArray.map(() =>
      Math.trunc(Math.random() * 2)
    );
    emptyCuadricule[i] = random0And1Array;
  }

  return emptyCuadricule;
};

export const randomCuadricule = generateRandomCuadricule(6);

export const countAliveNeighbors = (arrayToModify, x, y) => {
  let accAlive = 0;
  for (let i = x - 1; i <= x + 1; i++) {
    for (let j = y - 1; j <= y + 1; j++) {
      if (x !== i || y !== j) {
        if (
          i >= 0 &&
          i < arrayToModify.length &&
          j >= 0 &&
          j < arrayToModify[i].length
        ) {
          if (arrayToModify[i][j] === 1) {
            accAlive++;
          }
        }
      }
    }
  }

  return accAlive;
};

export const modifyCells = (array) => {
  const newTable = structuredClone(array);

  for (let i = 0; i < newTable.length; i++) {
    for (let j = 0; j < newTable[i].length; j++) {
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

export const initializeGame = (array, playTimes) => {
  console.clear();
  const modifiedCuadricule = modifyCells(array);
  console.table(array);

  if (playTimes > 0) {
    setTimeout(() => {
      initializeGame(modifiedCuadricule, playTimes - 1);
    }, 2000);
  }
};
