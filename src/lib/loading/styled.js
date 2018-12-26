import styled, { css } from 'styled-components'
import { color, fonts } from '../../styles/_variables'
import { IconStyled } from '../icon/styled'

const mainColor = props => (props.color ? props.color : props.theme.color ? props.theme.color.primaryColor : color.primaryColor)

export const LoadingWrapper = styled.div`
  display: inline-block;
  font-size: ${props => (props.theme.fonts ? props.theme.fonts.size.normal : fonts.size.normal)};
  color: ${mainColor};
  > ${IconStyled} {
    margin: 0 0.5em 0 0;
    font-size: ${props => (props.theme.fonts ? props.theme.fonts.size.small : fonts.size.small)};
  }
  ${props => props.vertical && css`
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    > ${IconStyled} {
      margin: 0 0 0.5em 0;
    }
  `}
  ${props => props.large && css`
    font-size: ${props.theme.fonts ? props.theme.fonts.size.title : fonts.size.title};
    font-family: ${fonts.style.light};
    > ${IconStyled} {
      margin: ${props.vertical ? '0 0 0.5em 0' : '0 0.5em 0 0'};
      font-size: ${props.theme.fonts ? props.theme.fonts.size.normal : fonts.size.normal} !important;
    }
  `}
  ${props => props.small && css`
    font-size: ${props.theme.fonts ? props.theme.fonts.size.small : fonts.size.small};
    > ${IconStyled} {
      margin: ${props.vertical ? '0 0 0.5em 0' : '0 1em 0 0'};
      font-size: ${props.theme.fonts ? props.theme.fonts.size.label : fonts.size.label};
    }
  `}
`

export default LoadingWrapper
