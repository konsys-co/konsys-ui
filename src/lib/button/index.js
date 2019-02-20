import React from 'react'
import { string, bool, oneOf, object } from 'prop-types'
import { theme } from './../../styles/_variables'
import Icon from '../icon'
import { P } from '../text'
import {
  Btn,
} from './styled'

const Button = props => (
  <Btn {...props}>
  {
    props.onlyIcon
      ? <Icon key='button-icon' spin={props.spinIcon} icon={props.icon} />
      : props.loading
        ? [
          <Icon key='button-icon' spin icon="fal fa-spinner-third" />,
          <span key='button-text'>{ props.loadingText ? props.loadingText : props.text ? props.text : 'Button text here' }</span>,
        ]
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
          : <P key='button-text'>{ props.text ? props.text : 'Button text here' }</P>
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
  loading: bool,
  loadingText: string,
}

export default Button
