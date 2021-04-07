/** @jsxImportSource @emotion/react */

import SudokuGame from './features/sudoku'
import { appContainerCss } from './App.styles'

function App() {
  return (
    <div css={appContainerCss}>
      <SudokuGame />
    </div>
  )
}

export default App
