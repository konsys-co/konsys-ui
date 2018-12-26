import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../icon'
import {
  LoadingWrapper,
} from './styled'

/*
==== PROPS ====

text:         loading text
large/small:  size
vertical:

================
*/

const Loading = props => (
  <LoadingWrapper
    {...props}
  >
    <Icon spin icon='icon-reload' />{props.text ? props.text : 'loading'}
  </LoadingWrapper>
)

Loading.propTypes = {
  test: PropTypes.string,
  vertical: PropTypes.bool,
  large: PropTypes.bool,
  small: PropTypes.bool,
}

export default Loading
