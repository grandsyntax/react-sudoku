/** @jsxImportSource @emotion/react */
import Button from './Button'
import { css } from '@emotion/react'

const actionsCss = css`
  display: flex;
  justify-content: center;
  margin: -1.5rem 0 0;

  > * {
    margin: 0 0.5rem;
  }
`

const GameActions = ({ cheat, reset, solve }) => {
  return (
    <div className='game-actions' css={actionsCss}>
      <Button action={solve}>
        Solve
      </Button>
      <Button action={reset}>New</Button>
      <Button action={cheat}>Cheat Mode</Button>
    </div>
  )
}

export default GameActions
