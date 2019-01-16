import styled, { css } from 'styled-components'
import { IconStyled } from './../icon/styled'
import { color, theme, animate } from './../../styles/_variables' 

export const SelectListWrapper = styled.ul`
	margin: 8px 0 0;
	border-radius: 4px;
	background-color: ${color.offWhite};
	transition: max-height ${animate.time.maxHeight} ease;
	&.hide {
		max-height: 0;
	}
	&.show {
		height: auto;
		padding: ${props => (props.padding ? props.padding : '8px')};
		box-shadow: ${theme.shadow.selectShadow} rgba(${theme.color.primaryColorRGB}, 0.15)};
		max-height: ${props => (props.maxHeight ? props.maxHeight : '190px')};
		overflow: scroll;
  }
`

export const SelectChoiceWrapper = styled.li`
	margin: 0;
	padding: 8px 16px;
	border-radius: 4px;
	list-style-type: none;
	cursor: pointer;
	display: flex;
  align-items: center;
  ${props => props.color && css`
    color: ${props.color};
    > ${IconStyled} {
      color: ${props.color};
    }
  `}
	&:hover {
    color: ${color.offWhite};
		background-color: ${theme.color.primaryColor};
		> ${IconStyled} {
			color: ${color.offWhite};
		}
	}
`

export const CenterText = styled.div`
	padding: 16px;
	text-align: center;
`
