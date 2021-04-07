import { createSlice } from '@reduxjs/toolkit'
import SudokuSolver from './solver'
import { defaultSudokuMatrix, initPuzzle } from './sudoku.utils'

// Initial puzzle, used for display
// scratchPad used for user answer state
const puzzle = initPuzzle(defaultSudokuMatrix)

export const initialState = {
  isSolved: false,
  hasAllFilled: false,
  puzzle,
  scratchPad: puzzle,
  scoreBoardMessage: "Let's play!"
}

export const sudokuSlice = createSlice({
  name: 'sudoku',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    updatePuzzle: (state, { payload }) => {
      const { value, x, y } = payload

      state.scratchPad[y][x] = value

      const completedSquares = state.scratchPad.flat().filter((s) => s > 0)
      state.hasAllFilled = completedSquares.length === 81
    },
    solvePuzzle: (state, action) => {
      const isValid = SudokuSolver.init(state.scratchPad).isValid()
      state.isSolved = isValid

      if (isValid && state.hasAllFilled) {
        state.scoreBoardMessage = 'You win!'
      } else if (!isValid && state.hasAllFilled) {
        state.scoreBoardMessage = 'Sorry! Please try again.'
      } else {
        state.scoreBoardMessage =
          'Sorry! Fill out all the squares and try again.'
      }
    },
    resetPuzzle: (state, action) => {
      state.puzzle = initPuzzle(defaultSudokuMatrix)
      state.hasAllFilled = false
      state.scoreBoardMessage = initialState.scoreBoardMessage
    },
    cheatPuzzle: (state, action) => {
      // display
      state.puzzle = defaultSudokuMatrix
      // user input state
      state.scratchPad = defaultSudokuMatrix
      state.hasAllFilled = true
      state.scoreBoardMessage = 'Cheat mode enabled! Press "Solve".'
    }
  }
})

export const {
  cheatPuzzle,
  resetPuzzle,
  solvePuzzle,
  updatePuzzle
} = sudokuSlice.actions

export const selectPuzzle = ({ sudoku }) => sudoku.puzzle
export const canSolve = ({ sudoku }) => sudoku.hasAllFilled
export const scoreBoardMessage = ({ sudoku }) => sudoku.scoreBoardMessage
export default sudokuSlice.reducer
