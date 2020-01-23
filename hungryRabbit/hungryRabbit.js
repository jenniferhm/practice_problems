// This problem is from a coding challenge I received.

/** Key Assumptions:
 * Rabbit will never have to choose between 2 squares with the same # of carrots.
 * Garden is a rectangular matrix (NxM).
 * Matrix always has at least 1 row and column.
 * Integers are non-negative.
*/

/** Strategy:
 * Create a helper function to find the start.
 * Use another helper to find the next square recursively.
 * Sum # of carrots with each square until there are no more adjacent carrots.
 * Replace visited square with 0.
 * Return # of carrots eaten.
*/

function hungryRabbit(garden) {
  // Get the starting point.
  const [start, startCoordinates] = _findStartingSquare(garden);
  let carrotsEaten = start;

  // Make a copy of the garden and replace start with 0.
  const gardenCopy = [...garden];
  gardenCopy[startCoordinates[0]][startCoordinates[1]] = 0;

  // Helper function to find the next square.
  function _findNextSquare(coordinates, garden) {
    const [row, col] = coordinates;
    let possiblePaths = {};
    let up, down, left, right;

    // If row or col is first or last, then assign null value to nonexistant square.
    if (row === 0) up = null;
    if (row === garden.length - 1) down = null;
    if (col === 0) left = null;
    if (col === garden[0].length - 1) right = null;

    // If square exists, assign value to variable and add coordinates to possiblePaths.
    if (up !== null) {
      up = garden[row - 1][col]
      possiblePaths[up] = [row - 1, col];
    }
    if (down !== null) {
      down = garden[row + 1][col];
      possiblePaths[down] = [row + 1, col];
    }
    if (left !== null) {
      left = garden[row][col - 1];
      possiblePaths[left] = [row, col - 1];
    }
    if (right !== null) {
      right = garden[row][col + 1];
      possiblePaths[right] = [row, col + 1];
    }
  
    const highest = Math.max(up, down, left, right);
    carrotsEaten += highest;

    let copy = [...garden];
    copy[possiblePaths[highest][0]][possiblePaths[highest][1]] = 0;
    
    // Base case is 0; otherwise, keep recursing.
    return highest === 0 ? 0 : _findNextSquare(possiblePaths[highest], copy);
  }
  _findNextSquare(startCoordinates, gardenCopy);

  return carrotsEaten;
}

function _findStartingSquare(garden) {
  const rows = garden.length;
  const cols = garden[0].length;

  let rowMidpoint = rows / 2;
  let colMidpoint = cols / 2;

  let center = 0;
  let centerCoordinates = [];

  // Odd # of rows &
  if (rows % 2 !== 0) {
    // Odd # of columns => only 1 starting point.
    if (cols % 2 !== 0) {
      centerCoordinates = [Math.floor(rowMidpoint), Math.floor(colMidpoint)];
      center = garden[Math.floor(rowMidpoint)][Math.floor(colMidpoint)];
    } else {
      // Even # of columns => 2 possible starting points.
      const leftMidpoint = garden[Math.floor(rowMidpoint)][Math.floor(colMidpoint - 1)];
      const rightMidpoint = garden[Math.floor(rowMidpoint)][Math.floor(colMidpoint)];

      if (leftMidpoint > rightMidpoint) {
        centerCoordinates = [Math.floor(rowMidpoint), Math.floor(colMidpoint - 1)];
        center = leftMidpoint;
      } else {
        centerCoordinates = [Math.floor(rowMidpoint), Math.floor(colMidpoint)];
        center = rightMidpoint;
      }
    }
  }

  // Even # of rows &
  if (rows % 2 === 0) {
    // Even # of columns => 4 possible starting points.
    if (cols % 2 === 0) {
      let possibleStarts = {};
      const topLeft = garden[rowMidpoint - 1][colMidpoint - 1];
      const topRight = garden[rowMidpoint - 1][colMidpoint];
      const bottomLeft = garden[rowMidpoint][colMidpoint - 1];
      const bottomRight = garden[rowMidpoint][colMidpoint];

      possibleStarts[topLeft] = [rowMidpoint - 1, colMidpoint - 1];
      possibleStarts[topRight] = [rowMidpoint - 1, colMidpoint];
      possibleStarts[bottomLeft] = [rowMidpoint, colMidpoint - 1];
      possibleStarts[bottomRight] = [rowMidpoint, colMidpoint];

      const highestVal = Math.max(topLeft, topRight, bottomLeft, bottomRight);
      centerCoordinates = possibleStarts[highestVal];
      center = highestVal;
    } else {
      // Odd # of columns => 2 possible starting points.
      const topMidpoint = garden[rowMidpoint - 1][Math.floor(colMidpoint)];
      const bottomMidpoint = garden[rowMidpoint][Math.floor(colMidpoint)];

      if (topMidpoint > bottomMidpoint) {
        centerCoordinates = [rowMidpoint - 1, Math.floor(colMidpoint)];
        center = topMidpoint;
      } else {
        centerCoordinates = [rowMidpoint, Math.floor(colMidpoint)];
        center = bottomMidpoint;
      }
    }
  }

  return [center, centerCoordinates];
}

module.exports = hungryRabbit;