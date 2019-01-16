import React from 'react'
import PropTypes from 'prop-types'
import {
  IconStyled,
} from './styled'

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
  fontSize: PropTypes.string,
}

export default Icon
