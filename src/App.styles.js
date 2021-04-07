import { css } from '@emotion/react'

const $lGray = '#dedede'
const $avenir = 'Avenir, Heveltica, sans-serif'

export const appContainerCss = css`
  font-family: ${$avenir};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: ${$lGray};
`
