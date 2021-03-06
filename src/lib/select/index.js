import React, { PureComponent } from 'react'
import Downshift from 'downshift'
import {
  arrayOf, shape, string, object,
  boolean,
} from 'prop-types'
import Icon from './../icon'
import { Input } from './../input/'
import { H4 } from './../text/'
import Button from './../button'
import { theme } from './../../styles/_variables'
import {
	SelectListWrapper, SelectChoiceWrapper, CenterText, SelectWrapper,
} from './styled'
import Collapse from './../collapse'

class Select extends PureComponent {
	constructor() {
		super()
		this.state = {
			isOpen: false,
		}
	}

	render() {
		const {
      maxHeight, inputProps, color,
      tree, data, buttonProps, onlyDropdown,
		} = this.props
		const { isOpen } = this.state
		return (
			<Downshift
				itemToString={item => (item ? item.text : '')}
				isOpen={isOpen}
				onSelect={() => this.setState({ isOpen: false })}
				onOuterClick={() => this.setState({ isOpen: false })}
				{...this.props}
			>
				{({
					getInputProps,
					getItemProps,
					getMenuProps,
					isOpen,
					inputValue,
          getToggleButtonProps,
          getLabelProps,
				}) => (
					<span>
            <SelectWrapper collapse={this.props.collapse} width={this.props.width}>
              {
                onlyDropdown
                  ? <Button
                    spaceBetween
                    fullWidth
                    rightIcon
                    icon="fas fa-caret-down"
                    onClick={() => this.setState({ isOpen: true })}
                    text={inputValue ? inputValue : ''}
                    {...buttonProps}
                  />
                  : <Input
                    width='100%'
                    suffix={<Icon icon={`suffix fas ${ isOpen ? 'fa-caret-up' : 'fa-caret-down' }`} />}
                    onClick={() => this.setState({ isOpen: true })}
                    {...getInputProps()}
                    {...inputProps}
                  />
              }
              <SelectListWrapper
                maxHeight={maxHeight}
                className={isOpen ? 'show' : 'hide'}
                padding={tree && '8px 8px 8px 16px'}
                {...getMenuProps()}
              >
              {
                isOpen ? data &&
                  tree ? data.map(collapseData => (
                    <Collapse title={collapseData.parentTitle} color={collapseData.parentColor}>
                    {
                      collapseData.items.map(d => (
                        <SelectChoiceWrapper
                          {...getItemProps({
                            key: d.text,
                            item: d,
                          })}
                          color={color}
                        >
                        {
                          d.icon && <Icon fontSize='12px' icon={d.icon} margin='0 8px 0 0' />
                        }
                        {d.text}
                        </SelectChoiceWrapper>
                      ))
                    }
                    </Collapse>
                  ))
                  : onlyDropdown
                    ? data.map((item, index) => (
                      <SelectChoiceWrapper
                        {...getItemProps({
                          key: item.text,
                          index,
                          item,
                        })}
                        active={item.text === inputValue}
                        color={color}
                      >
                      {
                        item.icon && <Icon fontSize='12px' icon={item.icon} margin='0 8px 0 0' />
                      }
                        {item.text}
                      </SelectChoiceWrapper>
                    ))
                    : data.filter(item => !inputValue || item.text.includes(inputValue)).length > 0
                      ? data.filter(item => !inputValue || item.text.includes(inputValue)).map((item, index) => (
                          <SelectChoiceWrapper
                            {...getItemProps({
                              key: item.text,
                              index,
                              item,
                            })}
                            color={color}
                          >
                          {
                            item.icon && <Icon fontSize='12px' icon={item.icon} margin='0 8px 0 0' />
                          }
                            {item.text}
                          </SelectChoiceWrapper>))
                      : <CenterText><H4 color={theme.color.paleGray}>ไม่มีข้อมูล</H4></CenterText>
                : null
              }
              </SelectListWrapper>
            </SelectWrapper>
					</span>
				)}
			</Downshift>
		)
	}
}
Select.propTypes = {
	maxHeight: string,
  color: string,
  tree: boolean,
  collapse: boolean,
  width: string,
	data: arrayOf(
		shape({
			text: string.isRequired,
			value: string.isRequired,
			icon: string,
		})
  ).isRequired,
  inputProps: object,
}

export default Select
