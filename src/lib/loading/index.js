import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../icon'
import {
  LoadingWrapper,
} from './styled'

const Loading = props => (
  <LoadingWrapper
    {...props}
  >
    <Icon spin icon='fal fa-spinner-third' />{props.text ? props.text : 'loading'}
  </LoadingWrapper>
)

Loading.propTypes = {
  text: PropTypes.string,
  vertical: PropTypes.bool,
  large: PropTypes.bool,
  small: PropTypes.bool,
}

export default Loading
