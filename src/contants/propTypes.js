import { string, number, bool, shape, oneOfType, arrayOf } from 'prop-types'

const selectData = shape({
  value: oneOfType([
    string,
    number,
  ]).isRequired,
  text: string.isRequired,
  icon: string,
})

export const PROP_CHOICE = {
  id: string,
  name: string,
  margin: string,
  disabled: bool,
  data: selectData,
}

export const PROP_CHOICE_GROUP = {
  id: string,
  name: string,
  margin: string,
  disabled: bool,
  list: arrayOf(selectData.isRequired).isRequired,
  vertical: bool,
}
