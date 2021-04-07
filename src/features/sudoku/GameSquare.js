/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import { sudokuVars } from './sudoku.styles'

const { $white, $gameSizeUnit, $lBlue } = sudokuVars

export const gameSquareCss = css`
  margin: 0;
  padding: 0;
  text-align: center;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${$white};

  span {
    margin-top: 0.4rem;
  }

  input[type='text'],
  input[type='number'] {
    border: none;
    width: ${$gameSizeUnit}rem;
    height: ${$gameSizeUnit}rem;
    text-align: center;
    font-size: calc(2vw + 10px);
    transition: all ease 1s;
    color: ${$lBlue};
    &:focus {
      outline: none;
    }
  }

  &:nth-of-type(3n) {
    border-right: solid 3px;
  }
  &:nth-of-type(9n) {
    border-right: 0;
  }

  &:nth-of-type(19),
  &:nth-of-type(20),
  &:nth-of-type(21),
  &:nth-of-type(22),
  &:nth-of-type(23),
  &:nth-of-type(24),
  &:nth-of-type(25),
  &:nth-of-type(26),
  &:nth-of-type(27),
  &:nth-of-type(46),
  &:nth-of-type(47),
  &:nth-of-type(48),
  &:nth-of-type(49),
  &:nth-of-type(50),
  &:nth-of-type(51),
  &:nth-of-type(52),
  &:nth-of-type(53),
  &:nth-of-type(54) {
    border-bottom: solid 3px;
  }
`

const GameSquare = ({ square, x, y, updatePuzzle }) => {
  return (
    <div className="game-square" css={gameSquareCss}>
      {square > 0 ? (
        <span>{square}</span>
      ) : (
        <input
          type='number'
          min={1}
          max={9}
          onChange={(e) => {
            updatePuzzle({ value: parseInt(e.target.value, 10), x, y })
          }}
        />
      )}
    </div>
  )
}

export default GameSquare
