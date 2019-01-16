import React, { PureComponent } from 'react'
import {
  string, boolean,
} from 'prop-types'
import {
  CollapseWrapper, ContentWrapper, TitleWrapper,
} from './styled'
import { P } from '../text'
import Icon from '../icon'
import { theme } from '../../styles/_variables'

// size
// style

class Collapse extends PureComponent {
  constructor() {
    super()
    this.state = {
      show: false,
    }
  }

  render() {
    const { show } = this.state
    const {
      children, title, color, bold,
    } = this.props
    return (
      <CollapseWrapper>
        <TitleWrapper rotateIcon={show}>
          <Icon color={color ? color : theme.color.primaryColor} margin='0 16px 0 0' icon="fas fa-caret-right" />
          <P color={color ? color : theme.color.primaryColor} bold={bold} onClick={() => this.setState({ show: !show })}>{title}</P>
        </TitleWrapper>
        <ContentWrapper className={show && 'show'}>
          {children}
        </ContentWrapper>
      </CollapseWrapper>
    )
  }
}
Collapse.propTypes = {
  title: string.isRequired,
  color: string,
  bold: boolean,
}

export default Collapse
