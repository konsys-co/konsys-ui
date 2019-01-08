import React from 'react'
import { string, bool, oneOf } from 'prop-types'
import { withTheme } from 'styled-components'
import Icon from '../icon'
import {
  Btn,
} from './styled'

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

export default Button
