import styled, { css } from 'styled-components'
import { color, animate } from '../../styles/_variables'

export const IconStyled = styled.i`
  display: inline-block;
  color: ${props => (props.color ? props.color : props.theme.color ? props.theme.color.primaryColor : color.dark)};
  ${props => css`
    ${props.margin && css`
      margin: ${props.margin};
    `}
    ${props.spin && css`
      animation: ${props.theme.animate
    ? css`${props.theme.animate.spin} ${props.theme.animate.time.loading} linear infinite !important`
    : css`${animate.spin} ${animate.time.loading} linear infinite !important`};
    `}
  `}
`

export default IconStyled
