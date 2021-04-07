/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const headingCss = css`
  display: flex;
  justify-content: center;

  h1 {
    font-size: 3rem;
    font-family: 'Train One', cursive;
    margin: 0;
  }
`

const GameHeading = ({ children }) => {
  return (
    <div className='game-heading' css={headingCss}>
      <h1>{children}</h1>
    </div>
  )
}

export default GameHeading
