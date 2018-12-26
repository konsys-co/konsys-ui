import styled, { css } from 'styled-components'
import { IconStyled } from '../icon/styled'
import { color, fonts, animate } from '../../styles/_variables'

const buttonMainColor = props => (props.color ? props.color : props.theme.color ? props.theme.color.primaryColor : color.primaryColor)
const buttonHoverColor = props => (props.color ? `${props.color}CC` : props.theme.color ? `${props.theme.color.primaryColor}CC` : `${color.primaryColor}CC`)
const buttonDisabledColor = props => (props.color ? `${props.color}1A` : props.theme.color ? `${props.theme.color.primaryColor}1A` : `${color.primaryColor}1A`)
const buttonDisabledTextColor = props => (props.color ? `${props.color}33` : props.theme.color ? `${props.theme.color.primaryColor}33` : `${color.primaryColor}33`)

export const Btn = styled.button`
  padding: 8px 24px;
  border-radius: 4px;
  border: 1px solid ${buttonMainColor};
  color: ${buttonMainColor};
  background-color: ${props => (props.ghost ? 'transparent' : color.offWhite)};
  cursor: pointer;
  font-size: ${props => (props.theme.fonts ? props.theme.fonts.size.normal : fonts.size.normal)};
  transition: ${props => (props.theme.animate ? props.theme.animate.transition : animate.transition)};
  font-family: ${fonts.style.extraLight};
  ${props => props.margin && css`
    margin: ${props.margin};
  `}
  outline: 0 !important;
  > ${IconStyled} {
    font-size: ${fonts.size.label};
    margin: ${props => (props.rightIcon ? '0 0 0 8px' : '0 8px 0 0')};
    color: ${buttonMainColor};
  }
  &:hover {
    border: 1px solid ${buttonHoverColor};
    color: ${buttonHoverColor};
  }
  &:disabled {
    cursor: not-allowed;
    background-color: ${buttonDisabledColor} !important;
    border: 1px solid ${buttonDisabledColor} !important;
    color: ${buttonDisabledTextColor} !important;
  }
  ${props => props.onlyIcon && css`
    padding: 0;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    > ${IconStyled} {
      margin: 0;
    }
  `}
  ${props => props.inverse && css`
    border: 1px solid ${buttonMainColor};
    background-color: ${buttonMainColor};
    color: ${color.offWhite};
    > ${IconStyled} {
      color: ${color.offWhite};
    }
    &:hover {
      background-color: ${buttonHoverColor};
      color: ${color.offWhite};
    }
  `}
  ${props => props.fullWidth && css`
    width: 100%;
  `}
  ${props => props.large && css`
    font-size: ${props.theme.fonts ? props.theme.fonts.size.subTitle : fonts.size.subTitle};
    padding: 16px 48px;
    > ${IconStyled} {
      font-size: ${fonts.size.label};
      margin: ${props.rightIcon ? '0 0 0 16px' : '0 16px 0 0'};
    }
  `}
  ${props => props.small && css`
    font-size: ${props.theme.fonts ? props.theme.fonts.size.label : fonts.size.label};
    padding: 4px 16px;
    border-radius: 2px;
    > ${IconStyled} {
      font-size: 0.5em;
      margin: ${props.rightIcon ? '0 0 0 6px' : '0 6px 0 0'};
    }
  `}
  ${props => css`
    ${props.buttonStyle === 'round' && css`
      border-radius: 40px;
    `}
    ${props.buttonStyle === 'rectangle' && css`
      border-radius: 0px;
    `}
  `}
`

export default Btn
