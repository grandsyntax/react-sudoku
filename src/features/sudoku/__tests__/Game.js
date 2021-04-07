import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../../../app/store'

import GameBoard from '../GameBoard'

describe('<GameBoard />', () => {
  const { container, getByText } = render(
    <Provider store={store}>
      <GameBoard />
    </Provider>
  )

  const heading = container.querySelector('h1')
  const scoreMessage = container.querySelector('.game-score')
  const squares = container.querySelectorAll('.game-square')
  const gameActions = container.querySelectorAll('.game-actions button')
  const solveAction = gameActions[0]
  const newAction = gameActions[1]
  const fillAction = gameActions[2]
  const filledSquares = container.querySelectorAll('span')

  describe('<GameBoard /> Elements', () => {
    beforeAll(() => {
      // initialize a new game
      fireEvent.click(newAction)
    })

    test('should have a title', () => {
      expect(heading).toBeInTheDocument()
      expect(heading.textContent).toEqual('Sudoku')
    })

    test('should have a score message', () => {
      expect(scoreMessage).toBeVisible()
      expect(scoreMessage.textContent).toEqual("Let's play!")
    })

    test('should have 81 squares', () => {
      expect(squares).toHaveLength(81)
    })

    test('should have 3 game actions: cheat(fill), new, solve', () => {
      expect(gameActions).toHaveLength(3)

      expect(solveAction).toBeVisible()
      expect(newAction).toBeVisible()
      expect(fillAction).toBeVisible()
    })

    test('should NOT have all of the 81 squares filled out', () => {
      expect(filledSquares).not.toHaveLength(81)
    })
  })

  describe('Correctly completed and solved game is updated as "solved"', () => {
    // Cheat mode
    fireEvent.click(fillAction)
    fireEvent.click(solveAction)

    const { sudoku } = store.getState()
    const filledSquares = container.querySelectorAll('span')

    test('should have ALL 81 squares filled out', () => {
      expect(filledSquares).toHaveLength(81)
    })

    test('should pass game validation', () => {
      expect(sudoku.isSolved).toBe(true)
    })
  })

  describe('Incorrectly completed game is NOT updated as "solved"', () => {
    // Click solve before filling all squares in.
    fireEvent.click(solveAction)

    const { sudoku } = store.getState()

    test('should NOT pass game validation', () => {
      expect(sudoku.isSolved).toBe(false)
    })
  })
})
