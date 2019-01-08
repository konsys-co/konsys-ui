import React from 'react'
import { string, element, bool, oneOf, shape, object } from 'prop-types'
import Icon from '../icon'
import { Label, P } from '../text'
import {
	InputWrapper, InputWrapperElement, InputElement,
	InputWithLabelWrapper, LabelWrapper,
} from './styled'
import { color } from '../../styles/_variables'

export const Input = props => (
	<InputWrapper width={props.width} large={props.large} small={props.small} margin={props.margin} padding={props.padding}>
		<InputWrapperElement>
			<InputElement {...props} />
			{props.prefix}
			{props.suffix}
		</InputWrapperElement>
		{
			props.message && <Label color={props.error ? color.error : props.success ? color.success : props.warning ? color.warning : color.lightGray}>{props.message}</Label>
		}
	</InputWrapper>
)

Input.propTypes = {
	color: string,
	width: string,
	padding: string,
	margin: string,
	prefix: element,
	suffix: element,
	rectangle: bool,
	state: oneOf(['error', 'success', 'warning']),
	ghost: bool,
	disabled: bool,
	large: bool,
	small: bool,
}

export const InputWithLabel = props => (
	<InputWithLabelWrapper margin={props.margin} padding={props.padding} position={props.position}>
		<LabelWrapper color={props.title.color}>
			{
				props.title.icon &&
				<Icon margin='0 8px 0 0' icon={props.title.icon} />
			}
			<P bold={props.title.bold}>{props.title.text}</P>
		</LabelWrapper>
		<Input width={props.width && props.width} {...props.input} />
	</InputWithLabelWrapper>
)
InputWithLabel.propTypes = {
	position: oneOf(['left', 'right']),
	width: string,
	margin: string,
	padding: string,
	title: shape({
		text: string.isRequired,
		icon: string,
		color: string,
		bold: bool,
	}).isRequired,
	input: object,
}


export default Input
