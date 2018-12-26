import React from 'react'
import { string, element, bool, oneOf, shape, object } from 'prop-types'
import Icon from '../icon'
import { Label, P } from '../text'
import {
	InputWrapper, InputWrapperElement, InputElement,
	InputWithLabelWrapper, LabelWrapper,
} from './styled'
import { color, fonts, animate } from '../../styles/_variables'

/*
==== PROPS ====

large/small:         		size
margin:									margin of input
padding:								padding of input
rectangle:							set input border radius to 0
color:									set color of input
prefix/suffix:					send prefix/suffix set in input (only Icon)
width:									set width of input
state:									set state of input ( error / success / warning )
ghost:									set background of input to transparent
disabled:								set input to disabled

================
*/

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

/*
==== PROPS ====

position:         			set position of text ( top / left / right )
width:									set width of input
margin:									set margin of wrapper
padding:								set padding of wrapper
title:									object with color / icon / text to set title props
input:									object with props of input

================
*/

export const InputWithLabel = props => (
	<InputWithLabelWrapper margin={props.margin} padding={props.padding} position={props.position}>
		<LabelWrapper color={props.title.color}>
			{
				props.title.icon &&
				<Icon margin='0 8px 0 0' icon={props.title.icon} />
			}
			<P>{props.title.text}</P>
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
	}).isRequired,
	input: object,
}


export default Input
