import { createGlobalStyle } from 'styled-components'
import fontAwesome from 'fonts/fontAwesome/js/all.js'

const GlobalStyle = createGlobalStyle`
  html {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    font-family: kanit, 'helvetica';
  }
  p {
    border: 1px solid red !important;
  }
  body {
    margin: 0;
    padding: 0;
  }
  * {
    outline: 0;
    box-sizing: border-box;
  }
  ${fontAwesome}
`

export default GlobalStyle
