import React, { PureComponent } from 'react'
import Button from './../button'
import {
  SelectListWrapper, SelectChoiceWrapper,
} from '../select/styled'
import {
  DropdownWrapper,
} from './styled'

class Dropdown extends PureComponent {
  constructor() {
    super()
    this.state = {
      isOpen: false,
    }
  }

  toggleList() {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    const { isOpen } = this.state
    return (
      <DropdownWrapper collapse={this.props.collapse} {...this.props}>
        <Button
          spaceBetween
          fullWidth
          rightIcon
          icon="fas fa-caret-down"
          onClick={() => this.toggleList()}
          {...this.props.buttonProps}
        />
        <SelectListWrapper className={isOpen ? 'show' : 'hide'}>
          {this.props.children}
        </SelectListWrapper>
      </DropdownWrapper>
    )
  }
}

export default Dropdown
