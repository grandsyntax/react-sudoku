import { configureStore } from '@reduxjs/toolkit'
import sudokuReducer from '../features/sudoku/SudokuSlice'

export const store = configureStore({
  reducer: {
    sudoku: sudokuReducer
  }
})
