import styled, { css } from 'styled-components'
import {
  SelectListWrapper, SelectChoiceWrapper,
} from '../select/styled'

export const DropdownWrapper = styled.div`
  position: relative;
  ${props => props.margin && css`
    margin: ${props.margin};
  `}
  ${props => props.collapse && css`
    > ${SelectListWrapper} {
      position: relative;
    }
  `}
`

export default DropdownWrapper
