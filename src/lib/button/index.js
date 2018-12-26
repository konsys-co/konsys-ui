import React from 'react'
import { string, bool, oneOf, object } from 'prop-types'
import { withTheme } from 'styled-components'
import Icon from '../icon'
import {
  Btn,
} from './styled'
import { theme } from './../../styles/_variables'

/*
==== PROPS ====

---- about button ----
inverse:      inverse to background color and set font color to white
fullWidth:    expand button width to 100%
large/small:  size
buttonStyle:  set style of button ( round / rectangle )
  round:      border full round button
  rectangle:  no border radius
ghost:        in normal mode ghost props will set background to trasparent
color:        color to use as a text and border in normal mode and as a background and border in inverse mode
--------------------

---- about icon ----
icon:         icon to place in button
rightIcon:    place icon right to text
onlyIcon:     show only icon in button
spinIcon:     set icon to spin
--------------------

text:         text in button

================
*/

const Button = props => (
  <Btn
    {...props}
  >
  {
    console.log(props)
  }
  {
    props.onlyIcon
      ? <Icon key='button-icon' spin={props.spinIcon} icon={props.icon} />
      : props.icon
        ? props.rightIcon
          ? [
            <span key='button-text'>{ props.text ? props.text : 'Button text here' }</span>,
            <Icon key='button-icon' spin={props.spinIcon} icon={props.icon} />,
          ]
          : [
            <Icon key='button-icon' spin={props.spinIcon} icon={props.icon} />,
            <span key='button-text'>{ props.text ? props.text : 'Button text here' }</span>,
          ]
        : <span key='button-text'>{ props.text ? props.text : 'Button text here' }</span>
  }
  </Btn>
)

Button.propTypes = {
  color: string,
  icon: string,
  text: string,
  inverse: bool,
  fullWidth: bool,
  large: bool,
  small: bool,
  buttonStyle: oneOf(['round', 'rectangle']),
  ghost: bool,
  rightIcon: bool,
  onlyIcon: bool,
  spinIcon: bool,
}

export const ButtonTest = withTheme(Button)
// ButtonTest.defaultProps = {
//   theme: theme
// }

export default Button
