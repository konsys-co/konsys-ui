import styled, { css } from 'styled-components'
import { theme, color, fonts, animate } from '../../styles/_variables'
import IconStyled from '../icon/styled'
import { Label } from '../text'

const defaultMinWidth = '210px'
const defaultLargeMinWidth = '300px'
const defaultSmallMinWidth = '210px'

export const InputWrapperElement = styled.div`
	display: inline-block;
	position: relative;
	width: 100%;
`

export const InputElement = styled.input`
	outline: 0 !important;
	font-family: ${fonts.style.extraLight};
	font-weight: normal;
	font-size: ${props => (props.theme.fonts ? props.theme.fonts.size.normal : fonts.size.normal)};
	line-height: 20px;
	color: ${theme.color.textColor};
	border: 1px solid ${color.paleGray};
	border-radius: ${props => (props.rectangle ? 0 : '4px')};
	transition: ${props => (props.theme.animate ? props.theme.animate.transition : animate.transition)};
	padding: 6px 8px;
	box-sizing: border-box;
	width: 100%;
	&::placeholder {
		color: ${color.paleGray};
	}
	&:focus,
	&:hover {
		border: 1px solid ${theme.color.primaryColor};
		~ ${IconStyled} {
			color: ${theme.color.primaryColor};
		}
	}
	~ ${IconStyled} {
		color: ${color.paleGray};
		font-size: ${props => (props.theme.fonts ? props.theme.fonts.size.small : fonts.size.small)};
		transition: ${props => (props.theme.animate ? props.theme.animate.transition : animate.transition)};
		position: absolute;
		top: 30%;
		&.prefix {
			left: 8px;
		}
		&.suffix {
			right: 8px;
		}
	}
	${props => css`
		${props.prefix && css`
			padding-left: 28px;
		`}
		${props.suffix && css`
			padding-right: 28px;
		`}
		${props.ghost && css`
			background-color: transparent;
		`}
		${props.large && css`
			font-size: ${props.theme.fonts ? props.theme.fonts.size.subTitle : fonts.size.subTitle};
			padding: 8px 16px;
			${props.prefix && css`
				padding-left: 48px;
			`}
			${props.suffix && css`
				padding-right: 48px;
			`}
			~ ${IconStyled} {
				font-size: ${props => (props.theme.fonts ? props.theme.fonts.size.normal : fonts.size.normal)};
				${props => props.suffix ? css`right: 16px` : css`left: 16px`}
				top: 35%;
			}
		`}
		${props.small && css`
			font-size: ${props.theme.fonts ? props.theme.fonts.size.label : fonts.size.label};
			padding: 4px 6px;
			${props.prefix && css`
				padding-left: 24px;
			`}
			${props.suffix && css`
				padding-right: 24px;
			`}
			~ ${IconStyled} {
				font-size: ${props => (props.theme.fonts ? props.theme.fonts.size.label : fonts.size.label)};
				${props => props.suffix ? css`right: 6px` : css`left: 6px`}
			}
		`}
		${props.state && css`
			border: 1px solid ${props.state === 'error' ? theme.color.error : props.state === 'success' ? theme.color.success : props.state === 'warning' && theme.color.warning} !important;
			~ ${IconStyled} {
				color: ${props.state === 'error' ? theme.color.error : props.state === 'success' ? theme.color.success : props.state === 'warning' && theme.color.warning} !important;
			}
		`}
		${props.padding && css`
			padding: ${props.padding};
		`
		}
		&:disabled {
			cursor: not-allowed;
			background-color: ${color.light};
			border: 1px solid ${color.paleGray};
			color: ${color.lightGray};
			~ ${IconStyled} {
				color: ${color.paleGray};
			}
		}
	`}
`

export const InputWrapper = styled.div`
	display: inline-block;
	${props => css`
		${props.margin && css`margin: ${props.margin};`}
		${props.width && css`width: ${props.width};`}
	`}
	> ${Label} {
		display: block;
		word-break: break-all;
		width: 100%;
		margin: 8px 0 0;
		text-align: right;
	}
`

export const LabelWrapper = styled.span`
	> * {
		color: ${theme.color.textColor};
	}
`

export const InputWithLabelWrapper = styled.div`
	display: flex;
	flex-direction: ${props => ((props.position === 'left' || props.position === 'right') ? 'row' : 'column')};
	align-items: ${props => ((props.position === 'left' || props.position === 'right') ? 'center' : 'left')};
	> ${LabelWrapper} {
		display: inline-flex;
		align-items: baseline;
		margin: ${props => (props.position === 'left' ? '0 24px 0 0' : props.position === 'right' ? '0 0 0 24px' : '0 0 16px')};
		white-space: nowrap;
		order: ${props => (props.position === 'right' ? 1 : 0)};
		font-family: ${props => (props.theme.fonts ? props.theme.fonts.style.extraLight : fonts.style.extraLight)};
		> ${IconStyled} {
			font-size: ${props => (props.theme.fonts ? props.theme.fonts.size.small : fonts.size.small)};
		}
	}
	${props => css`
		${props.margin && css`
			margin: ${props.margin};
		`}
		${props.padding && css`
			margin: ${props.padding};
		`}
	`}
`
