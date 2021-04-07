/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const scoreCss = css`
  display: flex;
  justify-content: center;
  margin-bottom: -2rem;
`

const GameScore = ({ children }) => {
  return (
    <div className='game-score' css={scoreCss}>
      <div>{children}</div>
    </div>
  )
}

export default GameScore
