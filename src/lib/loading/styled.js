import styled, { css } from 'styled-components'
import { theme } from '../../styles/_variables'
import { IconStyled } from '../icon/styled'

export const LoadingWrapper = styled.div`
  display: inline-block;
  font-size: ${theme.fonts.size.normal};
  font-family: ${theme.fonts.family.normal}
  color: ${props => props.color ? props.color : theme.color.primaryColor};
  > ${IconStyled} {
    margin: 0 0.5em 0 0;
    font-size: ${theme.fonts.size.small};
    color: ${props => props.color ? props.color : theme.color.primaryColor};
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
    font-size: ${theme.fonts.size.title};
    font-weight: ${theme.fonts.style.light};
    > ${IconStyled} {
      margin: ${props.vertical ? '0 0 0.5em 0' : '0 0.5em 0 0'};
      font-size: ${theme.fonts.size.subTitle} !important;
    }
  `}
  ${props => props.small && css`
    font-size: ${theme.fonts.size.small};
    > ${IconStyled} {
      margin: ${props.vertical ? '0 0 0.5em 0' : '0 1em 0 0'};
      font-size: ${theme.fonts.size.labell};
    }
  `}
`

export default LoadingWrapper
