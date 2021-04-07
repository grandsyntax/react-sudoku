/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

// Inpsired by https://codepen.io/ahart814/pen/yLNMZGa
const buttonCss = css`
  --backgroundColor: rgba(246, 241, 209);
  --colorShadeA: rgb(106, 163, 137);
  --colorShadeB: rgb(121, 186, 156);
  --colorShadeC: rgb(150, 232, 195);
  --colorShadeD: rgb(187, 232, 211);
  --colorShadeE: rgb(205, 255, 232);

  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  font-size: 1.5rem;
  color: var(--colorShadeA);
  font-weight: 700;
  text-transform: uppercase;
  font-family: inherit;

  padding: 0.25em 1.5em;
  border: 2px solid var(--colorShadeA);
  border-radius: 1em;
  background: var(--colorShadeE);
  transform-style: preserve-3d;
  transition: all 175ms cubic-bezier(0, 0, 1, 1);

  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--colorShadeC);
    border-radius: inherit;
    box-shadow: 0 0 0 2px var(--colorShadeB), 0 0.5rem 0 0 var(--colorShadeA);
    transform: translate3d(0, 0.75rem, -1rem);
    transition: all 175ms cubic-bezier(0, 0, 1, 1);
  }

  &:hover {
    background: var(--colorShadeD);
    transform: translate(0, 0.375rem);
  }

  &:hover::before {
    transform: translate3d(0, 0.75rem, -1rem);
  }

  &:active {
    transform: translate(0, 0.75rem);
  }

  &:active::before {
    transform: translate3d(0, 0, -1rem);

    box-shadow: 0 0 0 2px var(--colorShadeB), 0 0.25rem 0 0 var(--colorShadeB);
  }
`

const Button = ({ children, disabled, action }) => {
  return (
    <button
      css={buttonCss}
      onClick={() => {
        action()
      }}
    >
      {children}
    </button>
  )
}

export default Button
