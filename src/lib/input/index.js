import React from 'react'
import { string, element, bool, oneOf, shape, object } from 'prop-types'
import Icon from '../icon'
import { Label, P, SmallText } from '../text'
import {
	InputWrapper, InputWrapperElement, InputElement,
	InputWithLabelWrapper, LabelWrapper, MessageWrapper,
} from './styled'
import { theme } from '../../styles/_variables'

export const Input = props => (
	<InputWrapper width={props.width} large={props.large} small={props.small} margin={props.margin} padding={props.padding}>
		<InputWrapperElement>
			<InputElement {...props} />
			{props.prefix}
			{props.suffix}
		</InputWrapperElement>
		{
			props.message
			&& <MessageWrapper large={props.large} small={props.small}>
				<Label color={props.state === 'error' ? theme.color.error : props.state === 'success' ? theme.color.success : props.state === 'warning' ? theme.color.warning : theme.color.lightGray}>{props.message}</Label>
			</MessageWrapper>
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
	message: string,
}

export const InputWithLabel = props => (
	<InputWithLabelWrapper width={props.width && props.width} margin={props.margin} padding={props.padding} position={props.position}>
		<LabelWrapper color={props.title.color}>
			{
				props.title.icon &&
				<Icon margin='0 8px 0 0' icon={props.title.icon} />
			}
			<P bold={props.title.bold}>{props.title.text}</P>
		</LabelWrapper>
		<Input theme={props.theme} width={props.width && '100%'} {...props.input} />
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
