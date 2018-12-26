import React from 'react'
import { string, number, bool, shape, oneOfType } from 'prop-types'
import { PROP_SELECT, PROP_SELECT_GROUP } from '../../contants/propTypes'
import Icon from '../icon'
import {
  RadioInputLabel, Label, SelectInput, Text, Wrapper,
  WrapperGroup, CheckboxLabel,
} from './styled'

/*
==== PROPS ====

id:           set id of radio/checkbox input
name:         set name of radio/checkbox input
margin:       set margin of radio/checkbox wrapper
disabled:     disable radio/checkbox
data:         data of radio/checkbox value
  - value:    radio/checkbox value
  - text:     redio/checkbox text
  - icon:     icon in front of radio/checkbox text

*/

export const Radio = props => (
  <Wrapper {...props}>
    <SelectInput disabled={props.disabled} value={props.data.value} type='radio' id={props.id ? props.id : props.data.value ? props.data.value : 'radio'} name={props.name ? props.name : 'radio'} />
    <Label htmlFor={props.id ? props.id : props.data.value ? props.data.value : 'radio'}>
      <RadioInputLabel />
      <Text>{props.data.icon && <Icon icon={props.data.icon} />}{props.data.text}</Text>
    </Label>
  </Wrapper>
)
Radio.propTypes = PROP_SELECT

export const Checkbox = props => (
  <Wrapper {...props}>
    <SelectInput disabled={props.disabled} value={props.data.value} type='checkbox' id={props.id ? props.id : props.data.value ? props.data.value : 'checkbox'} name={props.name ? props.name : 'checkbox'} />
    <Label htmlFor={props.id ? props.id : props.data.value ? props.data.value : 'checkbox'}>
      <CheckboxLabel />
      <Text>{props.data.icon && <Icon icon={props.data.icon} />}{props.data.text}</Text>
    </Label>
  </Wrapper>
)
Checkbox.propTypes = PROP_SELECT

/*
==== PROPS ====

id:           set id of radio/checkbox input
name:         set name of radio/checkbox input
margin:       set margin of radio/checkbox wrapper
list:         array of Data [value, text, icon]
vertical:     change default, horizontal, to vertical

*/

export const RadioGroup = props => (
  <WrapperGroup {...props}>
    {
      props.list.map((v, i) => <Radio margin={i === props.list.length - 1 ? '0' : props.vertical ? '0 0 8px 0' : '0 16px 0 0'} key={v.value} data={v} id={props.id} name={props.name} disabled={props.disabled} />)
    }
  </WrapperGroup>
)
RadioGroup.propTypes = PROP_SELECT_GROUP

export const CheckboxGroup = props => (
  <WrapperGroup {...props}>
    {
      props.list.map((v, i) => <Checkbox margin={i === props.list.length - 1 ? '0' : props.vertical ? '0 0 8px 0' : '0 16px 0 0'} key={v.value} data={v} id={props.id} name={props.name} disabled={props.disabled} />)
    }
  </WrapperGroup>
)
CheckboxGroup.propTypes = PROP_SELECT_GROUP

export default Radio
