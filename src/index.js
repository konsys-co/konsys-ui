import React from 'react'
import { ThemeProvider } from 'styled-components'
import Button, { ButtonTest } from './lib/button'
import Icon from './lib/icon'
import Loading, { LoadingIcon } from './lib/loading'
import { Radio, Checkbox, RadioGroup, CheckboxGroup } from './lib/choice'
import { H1, H2, H3, H4, P, SmallText, Label, TextLink } from './lib/text'
import { Input, InputWithLabel } from './lib/input'
import Select from './lib/select'
import Collapse from './lib/collapse'

class Document extends React.Component {
  render() {
    return (
      <div>
        <h3>ks-common-component document page</h3>
        <ButtonTest icon='icon-arrow-right' rightIcon margin='24px' text='test' />
        <Button icon='icon-refresh' onlyIcon spinIcon />
      </div>
    )
  }
}

export {
  Button, Icon, Loading, LoadingIcon, Radio, Checkbox, RadioGroup, CheckboxGroup,
  H1, H2, H3, H4, P, SmallText, Label,
  Input, InputWithLabel, TextLink,
  Select, Collapse,
}
export default Document;
