// Randomly erase 2 from each row of the grid.
export const initPuzzle = (puzzle) => {
  const size = puzzle.length
  const matrix = puzzle.map((rows, i) => {
    const randomColumnIndex1 = Math.floor(Math.random() * size)
    const randomColumnIndex2 = Math.floor(Math.random() * size)

    return rows.map((col, i) => {
      if (i === randomColumnIndex1 || i === randomColumnIndex2) {
        return 0
      } else {
        return col
      }
    })
  })

  return matrix
}

export const defaultSudokuMatrix = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
  ]