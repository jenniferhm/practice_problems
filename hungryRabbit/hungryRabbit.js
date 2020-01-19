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

  let center = 0;
  let centerCoordinates = [];

  // Odd # of rows &
  if (rows % 2 !== 0) {
    // Odd # of columns => only 1 starting point.
    if (cols % 2 !== 0) {
      const rowMidpoint = Math.floor(rows / 2);
      const colMidpoint = Math.floor(cols / 2);

      centerCoordinates = [rowMidpoint, colMidpoint];
      center = garden[rowMidpoint][colMidpoint];
    } else {
      // Even # of columns => 2 possible starting points.
      const leftMidpoint = garden[Math.floor(rows / 2)][Math.floor(cols / 2 - 1)];
      const rightMidpoint = garden[Math.floor(rows / 2)][Math.floor(cols / 2)];

      if (leftMidpoint > rightMidpoint) {
        centerCoordinates = [Math.floor(rows / 2), Math.floor(cols / 2 - 1)];
        center = leftMidpoint;
      } else {
        centerCoordinates = [Math.floor(rows / 2), Math.floor(cols / 2)];
        center = rightMidpoint;
      }
    }
  }

  // Even # of rows &
  if (rows % 2 === 0) {
    // Even # of columns => 4 possible starting points.
    if (cols % 2 === 0) {
      let possibleStarts = {};
      const topLeft = garden[rows / 2 - 1][cols / 2 - 1];
      const topRight = garden[rows / 2 - 1][cols / 2];
      const bottomLeft = garden[rows / 2][cols / 2 - 1];
      const bottomRight = garden[rows / 2][cols / 2];

      possibleStarts[topLeft] = [rows / 2 - 1, cols / 2 - 1];
      possibleStarts[topRight] = [rows / 2 - 1, cols / 2];
      possibleStarts[bottomLeft] = [rows / 2, cols / 2 - 1];
      possibleStarts[bottomRight] = [rows / 2, cols / 2];

      const highestVal = Math.max(topLeft, topRight, bottomLeft, bottomRight);
      centerCoordinates = possibleStarts[highestVal];
      center = highestVal;
    } else {
      // Odd # of columns => 2 possible starting points.
      const topMidpoint = garden[rows / 2 - 1][Math.floor(cols / 2)];
      const bottomMidpoint = garden[rows / 2][Math.floor(cols / 2)];

      if (topMidpoint > bottomMidpoint) {
        centerCoordinates = [rows / 2 - 1, Math.floor(cols / 2)];
        center = topMidpoint;
      } else {
        centerCoordinates = [rows / 2, Math.floor(cols / 2)];
        center = bottomMidpoint;
      }
    }
  }

  return [center, centerCoordinates];
}

module.exports = hungryRabbit;