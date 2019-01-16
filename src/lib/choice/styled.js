import styled, { css } from 'styled-components'
import { P } from '../text'
import { color, fonts } from '../../styles/_variables'
import { IconStyled } from '../icon/styled'

export const SelectInput = styled.input`
  display: none;
`

export const Label = styled.label`
  display: flex;
  align-items: center;
`

export const RadioInputLabel = styled.span`
  width: 16px;
  height: 16px;
  display: inline-block;
  position: relative;
  border: 1px solid ${color.paleGray};
  border-radius: 50%;
  cursor: pointer;
  &::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${props => (props.color ? props.color : props.theme.color ? props.theme.color.secondaryColor : color.secondaryColor)};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
  }
`

export const CheckboxLabel = styled(RadioInputLabel)`
  border-radius: 2px;
  &::before {
    content: "\f00c";
    font-family: 'fontAwesome';
    width: auto;
    height: auto;
    background: none;
    font-size: ${props => (props.theme.fonts ? props.theme.fonts.size.small : fonts.size.small)};
    color: ${props => (props.color ? props.color : props.theme.color ? props.theme.color.secondaryColor : color.secondaryColor)};
  }
`

export const Text = styled(P)`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  padding: 0 0 0 8px;
  > ${IconStyled} {
    font-size: ${props => (props.theme.fonts ? props.theme.fonts.size.label : fonts.size.label)} !important;
    margin-right: 8px;
  }
`

export const Wrapper = styled.div`
  display: inline-block;
  ${props => props.margin && css`
    margin: ${props.margin};
  `}
  > ${SelectInput} {
    &:checked + ${Label} > ${CheckboxLabel}::before,
    &:checked + ${Label} > ${RadioInputLabel}::before {
      opacity: 1;
    }
    &:disabled + ${Label},
    &:disabled + ${Label} {
      ${Text} {
        cursor: not-allowed;
        color: ${color.lightGray};
        > ${IconStyled} {
          color: ${color.lightGray};
        }
      }
      > ${CheckboxLabel},
      > ${RadioInputLabel} {
        cursor: not-allowed;
        background-color: ${color.light};
      }
    }
  }
`

export const WrapperGroup = styled.div`
  display: inline-flex;
  ${props => props.margin && css`
    margin: ${props.margin};
  `}
  ${props => props.vertical && css`
    flex-direction: column;
  `}
`

export default SelectInput
