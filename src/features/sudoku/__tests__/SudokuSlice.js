import sudokuReducer, {
  cheatPuzzle,
  resetPuzzle,
  solvePuzzle,
  updatePuzzle
} from '../SudokuSlice'
import { defaultSudokuMatrix, initPuzzle } from '../sudoku.utils'

// Initial puzzle, used for display
// scratchPad used for user answer state
const puzzle = initPuzzle(defaultSudokuMatrix)

describe('sudoku reducer', () => {
  const initialState = {
    isSolved: false,
    hasAllFilled: false,
    puzzle: puzzle,
    scratchPad: puzzle,
    scoreBoardMessage: "Let's play!"
  }

  const solvedState = {
    ...initialState,
    hasAllFilled: true,
    puzzle: defaultSudokuMatrix,
    scratchPad: defaultSudokuMatrix
  }

  it('should handle updatePuzzle', () => {
    const actual = sudokuReducer(
      initialState,
      updatePuzzle({ value: 3, x: 0, y: 0 })
    )
    expect(actual.scratchPad[0][0]).toEqual(3)
    expect(actual.hasAllFilled).toBe(false)
  })

  it('should handle resetPuzzle', () => {
    const actual = sudokuReducer(initialState, resetPuzzle())
    // New puzzle should not match initial puzzle
    expect(actual.puzzle).not.toEqual(initialState.puzzle)
    expect(actual.scoreBoardMessage).toEqual(initialState.scoreBoardMessage)
  })

  it('should handle cheatPuzzle', () => {
    const actual = sudokuReducer(initialState, cheatPuzzle())
    expect(actual.scratchPad).toEqual(defaultSudokuMatrix)
    expect(actual.puzzle).toEqual(defaultSudokuMatrix)
    expect(actual.scoreBoardMessage).toEqual(
      'Cheat mode enabled! Press "Solve".'
    )
    expect(actual.hasAllFilled).toBe(true)
  })

  it('should handle solvePuzzle', () => {
    const actual = sudokuReducer(solvedState, solvePuzzle())

    expect(actual.isSolved).toBe(true)
    expect(actual.scoreBoardMessage).toEqual('You win!')
  })
})
