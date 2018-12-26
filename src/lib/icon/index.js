import React from 'react'
import PropTypes from 'prop-types'
import {
  IconStyled,
} from './styled'

/*
==== PROPS ====

icon:         class of icon
spin:         set icon to spin
color:        set color of icon

================
*/

const Icon = props => (
  <IconStyled
    {...props}
    className={props.icon}
  />
)

Icon.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string.isRequired,
  spin: PropTypes.bool,
}

export default Icon
