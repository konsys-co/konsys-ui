import styled, { css } from 'styled-components'
import { animate } from './../../styles/_variables'
import IconStyled from './../icon/styled'

export const CollapseWrapper = styled.div`
  padding: 8px 0;
`
export const TitleWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  transition: ${animate.transition};
  ${props => css`
    ${props.rotateIcon && css`
      > ${IconStyled} {
        transform: rotate(90deg);
      }
    `}
  `}
`
export const ContentWrapper = styled.div`
  max-height: 0;
  overflow: hidden;
  transition: ${animate.transition};
  margin-left: 22px;
  &.show {
    max-height: 250px;
    overflow: scroll;
    margin-top: 8px;
  }
`

export default CollapseWrapper
