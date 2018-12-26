import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    font-family: 'kanit-extraLight', 'helvetica';
  }
  body {
    margin: 0;
    padding: 0;
  }
  * {
    outline: 0;
    box-sizing: border-box;
  }
`

export default GlobalStyle
