/** @jsxImportSource @emotion/react */
import React from 'react'
import GameSquare from './GameSquare'
import GameActions from './GameActions'
import GameHeading from './GameHeading'
import GameScore from './GameScore'
import { useSelector, useDispatch } from 'react-redux'
import {
  cheatPuzzle,
  resetPuzzle,
  selectPuzzle,
  updatePuzzle,
  scoreBoardMessage,
  solvePuzzle
} from './SudokuSlice'
import { css } from '@emotion/react'
import { sudokuVars } from './sudoku.styles'

const { $boardSize, $gameSizeUnit } = sudokuVars

export const gameBoardCss = css`
  display: grid;
  grid-template-columns: repeat(${$boardSize}, 5vw);
  grid-template-rows: repeat(${$gameSizeUnit ^ 2}, 5vw);
  justify-content: center;
  align-content: center;
  grid-gap: 0rem;
  list-style: none;
  margin: 3rem;
  padding: 0;
  font-size: calc(2vw + 10px);
  border: solid ${$gameSizeUnit}px;
`

const renderSquares = (puzzle = [], onPuzzleChange) => {
  return puzzle.map((row, i) => {
    return (
      <React.Fragment key={`row-${i}`}>
        {row.map((square, j) => {
          return (
            <GameSquare
              key={`square-${j}`}
              square={square}
              x={j}
              y={i}
              updatePuzzle={onPuzzleChange}
            />
          )
        })}
      </React.Fragment>
    )
  })
}

const GameBoard = () => {
  const dispatch = useDispatch()
  const onPuzzleSolve = () => {
    dispatch(solvePuzzle())
  }
  const onPuzzleChange = (payload = {}) => {
    dispatch(updatePuzzle(payload))
  }
  const onResetPuzzle = () => {
    dispatch(resetPuzzle())
  }

  const onCheatPuzzle = () => {
    dispatch(cheatPuzzle())
  }

  const puzzle = useSelector(selectPuzzle)
  const scoreMessage = useSelector(scoreBoardMessage)

  return (
    <div className='game-board'>
      <GameHeading>Sudoku</GameHeading>
      <GameScore>{scoreMessage}</GameScore>
      <div css={gameBoardCss}>{renderSquares(puzzle, onPuzzleChange)}</div>
      <GameActions
        solve={onPuzzleSolve}
        reset={onResetPuzzle}
        cheat={onCheatPuzzle}
      />
    </div>
  )
}

export default GameBoard
