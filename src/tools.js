// Const cuadriculeArray = [
//   [0, 0, 0, 1, 1, 0],
//   [1, 1, 1, 0, 1, 0],
//   [0, 0, 0, 1, 1, 0],
//   [1, 0, 0, 1, 1, 0],
//   [0, 1, 0, 1, 1, 0],
//   [1, 0, 1, 1, 1, 0],
// ];
// Console.table(cuadriculeArray);

const generateRandomCuadricule = (arrayLength) => {
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

console.table(generateRandomCuadricule(6));

// Const generateRandomCuadricule = (arrayLength) => {
//   const emptyCuadricule = Array.from({ length: arrayLength });
//   const randomCuadricule = emptyCuadricule.map(
//     generateRandom0and1Array(arrayLength)
//   );
//   return randomCuadricule;
// };

// console.log(generateRandomCuadricule(6));

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

// Console.table(modifyCells(cuadriculeArray));
