import React from 'react';

import '@storybook/addon-notes/register';
import '@storybook/addon-actions/register'
import '@storybook/addon-links/register'

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withNotes } from '@storybook/addon-notes';

import { Welcome } from '@storybook/react/demo';

import { ThemeProvider } from 'styled-components'

import {
  Button, Input, InputWithLabel, Icon,
  Radio, RadioGroup, Checkbox, CheckboxGroup,
  H1, H2, H3, H4, P, SmallText, Label, TextLink,
  Loading, LoadingIcon, Select, Collapse, Dropdown,
  SelectChoiceWrapper,
} from '../src/'

addDecorator(withNotes);

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

const coralColor = '#FD7065'

const DisplayCode = ({ children, title, code }) => (
  <div style={{ padding: '20px' }}>
    <h2 style={{ fontFamily: 'helvetica', margin: '0 0 40px' }}>{title}</h2>
    {children}
    <div style={{ fontFamily: 'monospace', backgroundColor: '#f4f4f4', padding: '15px', margin: '20px 0', whiteSpace: 'pre-line' }}>
    {code}
    </div>
  </div>
)

/* ======================== TEXT ======================== */
storiesOf('Text', module)
  .add('Header text', () => <DisplayCode title='Header text' code={`
  <H1>H1 - Konsys Company</H1>

  <H2>H2 - www.konsys.co</H2>

  <H3>H3 - Ari 4, Phaya Thai</H3>
  <H3 bold>H3 -  bold - Ari 4, Phaya Thai</H3>

  <H4>H4 - support@konsys.co</H4>
  <H4 bold>H4 - bold - support@konsys.co</H4>
  `}>
    <H1>H1 - Konsys Company</H1>
    <H2>H2 - www.konsys.co</H2>
    <H3>H3 - Ari 4, Phaya Thai</H3>
    <H3 bold>H3 -  bold - Ari 4, Phaya Thai</H3>
    <H4>H4 - support@konsys.co</H4>
    <H4 bold>H4 - bold - support@konsys.co</H4>
  </DisplayCode>)
  .add('Normal text', () => <DisplayCode title='Normal text' code={`
  <P>P - Konsys Company</P>
  <P bold>P -  bold - Konsys Company</P>

  <SmallText>H4 - Konsys Company</SmallText>
  <SmallText bold> - bold - Konsys Company</SmallText

  <Label>Label - Konsys Company</Label>
  <Label bold> - bold - Konsys Company</Label>
  `}>
    <P>P - Konsys Company</P>
    <P bold>P -  bold - Konsys Company</P><br/>
    <SmallText>H4 - Konsys Company</SmallText>
    <SmallText bold> - bold - Konsys Company</SmallText><br/><br/>
    <Label>Label - Konsys Company</Label>
    <Label bold> - bold - Konsys Company</Label>
  </DisplayCode>)
  .add('with custom color', () => <DisplayCode title='with custom color' code={`
  <H2 color={coralColor}>H2 - www.konsys.co</H2>

  <P color={coralColor}>P - Konsys Company</P>
  `}>
    <H2 color={coralColor}>H2 - www.konsys.co</H2>
    <P color={coralColor}>P - Konsys Company</P>
  </DisplayCode>)
  .add('with margin', () => <DisplayCode title='with margin' code={`
  <H2 margin='0 24px'>H2 - www.konsys.co</H2>
  
  <P margin='0 16px'>P - Konsys Company</P>
  `}>
    <H2 margin='0 24px'>H2 - www.konsys.co</H2>
    <P margin='0 16px'>P - Konsys Company</P>
  </DisplayCode>)
  .add('with padding', () => <DisplayCode title='with padding' code={`
  <H2 padding='0 24px'>H2 - www.konsys.co</H2>
  
  <P padding='0 16px'>P - Konsys Company</P>
  `}>
    <H2 padding='0 24px'>H2 - www.konsys.co</H2>
    <P padding='0 16px'>P - Konsys Company</P>
  </DisplayCode>)
  .add('with custom display', () => <DisplayCode title='with custom display' code={`
    <P display='block'>P - คอนซิส คอมปานี</P>
    <P>P - คอนซิส คอมปานี</P>
  `}>
    <P display='block'>P - คอนซิส คอมปานี</P>
    <P>P - คอนซิส คอมปานี</P>
  </DisplayCode>)
  .add('with custom textAlign', () => <DisplayCode title='with custom text align' code="<P display='block' textAlign='center'>P - คอนซิส คอมปานี</P>">
    <P display='block' textAlign='center'>P - คอนซิส คอมปานี</P>
  </DisplayCode>)
  .add('with custom font', () => <DisplayCode title='with custom font' code={`
  <H2 font='Sarabun-semibold'>H2 - คอนซิส คอมปานี</H2><br/>

  <P font='Sarabun'>P - คอนซิส คอมปานี</P>
  `}>
    <H2 font='Sarabun-semibold'>H2 - คอนซิส คอมปานี</H2><br/>
    <P font='Sarabun'>P - คอนซิส คอมปานี</P>
  </DisplayCode>)

/* */
storiesOf('Link', module)
  .add('text link', () => <DisplayCode title='text link' code={`<TextLink href=''>werqwerqwe</TextLink>`}>
    <TextLink href=''>werqwerqwe</TextLink>
  </DisplayCode>)

/* ======================== ICON ======================== */
storiesOf('Icon', module)
  .add('with icon class', () => <DisplayCode title='with icon class' code={`<Icon icon='fal fa-bug' />`}>
    <Icon icon='fal fa-bug' />
  </DisplayCode>)
  .add('with custom color', () => <DisplayCode title='with icon class' code={`<Icon icon='fal fa-bug' color={coralColor} />`}>
    <Icon icon='fal fa-bug' color={coralColor} />
  </DisplayCode>)
  .add('with spin icon', () => <DisplayCode title='with icon class' code={`<Icon spin icon='fal fa-bug' color={coralColor} />`}>
    <Icon spin icon='fal fa-bug' color={coralColor} />
  </DisplayCode>)


/* ======================== BUTTON ======================== */
storiesOf('Button', module)
  .add('button default', () => <DisplayCode title='Normal Button' code='<Button />'>
    <Button />
  </DisplayCode>)
  .add('button with text', () => <DisplayCode title='Button with text' code='<Button text="Custom text button 😎" />'>
    <Button text="Custom text button 😎" />
  </DisplayCode>)
  .add('button with text and icon', () => <DisplayCode title='Button with text' code='<Button icon="icon-refresh" text="Custom text button 😎" />'>
    <Button icon='icon-refresh' text="Custom text button 😎" />
  </DisplayCode>)
  .add('button with text and spin icon', () => <DisplayCode title='Button with text' code='<Button spinIcon icon="icon-refresh" text="Custom text button 😎" />'>
    <Button spinIcon icon='icon-refresh' text="Custom text button 😎" />
  </DisplayCode>)
  .add('button with text and set position right of icon', () => <DisplayCode title='Button with text' code='<Button rightIcon icon="icon-refresh" text="Custom text button 😎" />'>
    <Button rightIcon icon='icon-refresh' text="Custom text button 😎" />
  </DisplayCode>)
  .add('button with only icon', () => <DisplayCode title='Button with text' code='<Button onlyIcon icon="icon-refresh" />'>
    <Button onlyIcon icon='icon-refresh' />
  </DisplayCode>)
  .add('button with custom button style', () => <DisplayCode title='button with custom button style' code={`<Button text="Custom text button 😎" />
  
  <Button buttonStyle="round" text="Custom text button 😎" />
  
  <Button buttonStyle="rectangle" text="Custom text button 😎" />`}>
    <Button text="Custom text button 😎" /><br/><br/>
    <Button buttonStyle='round' text="Custom text button 😎" /><br/><br/>
    <Button buttonStyle='rectangle' text="Custom text button 😎" />
  </DisplayCode>)
  .add('button with custom color', () => <DisplayCode title='button with custom color' code='<Button color={coralColor} text="Custom text button 😎" />'>
    <Button color={coralColor} text="Custom text button 😎" />
  </DisplayCode>)
  .add('button with custom color and inverse style', () => <DisplayCode title='button with custom color and inverse style' code='<Button inverse color={coralColor} text="Custom text button 😎" />'>
    <Button color={coralColor} inverse text="Custom text button 😎" />
  </DisplayCode>)
  .add('button with transparent background style', () => <DisplayCode title='button with transparent background style' code='<Button ghost text="Custom text button 😎" />'>
    <Button ghost text="Custom text button 😎" />
  </DisplayCode>)
  .add('button with full width', () => <DisplayCode title='button with full width style' code='<Button fullWidth text="Custom text button 😎" />'>
    <Button fullWidth text="Custom text button 😎" />
  </DisplayCode>)
  .add('button with full width and space between', () => <DisplayCode title='button with full width and space between' code='<Button spaceBetween fullWidth icon="fas fa-caret-down" rightIcon text="Custom text button 😎" />'>
    <Button spaceBetween fullWidth icon="fas fa-caret-down" rightIcon text="Custom text button 😎" />
  </DisplayCode>)
  .add('button with button size', () => <DisplayCode title='button with button size' code={`<Button large text="Custom text button 😎" />
  
  <Button small text="Custom text button 😎" />`}>
    <Button large text="Custom text button 😎" /><br/><br/>
    <Button small text="Custom text button 😎" />
  </DisplayCode>)
  .add('button with loading state and loading text', () => <DisplayCode title='button with loading state and customize loading text' code={`<Button loading text='Submit' />
    <Button loading loadingText='รอหน่อยน้า กำลังโหลด 😅' />`}>
    <Button loading text='Submit' /><br/><br/>
    <Button loading loadingText='รอหน่อยน้า กำลังโหลด 😅' />
  </DisplayCode>)


/* ======================== INPUT ======================== */  
storiesOf('Input', module)
  .add('default', () => <DisplayCode title='default' code={`<Input placeholder='กรอกชื่อ - นามสกุล' />`}>
    <Input placeholder='กรอกชื่อ - นามสกุล' />
  </DisplayCode>)
  .add('with custom icon prefix/suffix', () => <DisplayCode title='with custom icon prefix/suffix' code={`<Input prefix={<Icon icon='prefix fas fa-tree-decorated' />} />

  <Input suffix={<Icon icon='suffix fas fa-tree-decorated' />} />`}>
    <Input color='pink' prefix={<Icon icon='prefix fas fa-tree-decorated' />} /><br/><br/>
    <Input suffix={<Icon icon='suffix fas fa-tree-decorated' />} />
  </DisplayCode>)
  .add('with custom text color', () => <DisplayCode title='with custom text color' code='<Input color={coralColor} />'>
    <Input color={coralColor} />
  </DisplayCode>)
  .add('with custom width', () => <DisplayCode title='with custom width' code='<Input width="50%" suffix={<Icon icon="suffix fas fa-tree-decorated" />} />'>
    <Input width='50%' suffix={<Icon icon='suffix fas fa-tree-decorated' />} />
  </DisplayCode>)
  .add('with input style', () => <DisplayCode title='with custom input style' code='<Input rectangle />'>
    <Input rectangle />
  </DisplayCode>)
  .add('with transparent background style', () => <DisplayCode title='with transparent background style' code='<Input ghost />'>
    <Input ghost />
  </DisplayCode>)
  .add('with input size', () => <DisplayCode title='with input size' code={`<Input large />
  
  <Input small />`}>
    <Input large /><br/><br/>
    <Input small />
  </DisplayCode>)
  .add('with custom margin and padding', () => <DisplayCode title='with custom margin and padding' code={`<Input margin='24px' />
  
  <Input padding='16px' />`}>
    <Input margin='24px' /><br/><br/>
    <Input padding='16px' />
  </DisplayCode>)
  .add('with custom state', () => <DisplayCode title='with custom state' code={`<Input state='success' />
  
  <Input state='error' />
  
  <Input state='warning' />`}>
    <Input state='success' /><br/><br/>
    <Input state='error' /><br/><br/>
    <Input state='warning' />
  </DisplayCode>)
  .add('with custom state and message', () => <DisplayCode title='with custom state and message' code={`<Input state='success' message='รหัสผ่านไม่ถูกต้อง รหัสผ่านต้องประกอบด้วย ตัวอักษรใหญ่ ตัวอักษรเล็ก และตัวเลข' />
  
  <Input state='error' message='รหัสผ่านไม่ถูกต้อง รหัสผ่านต้องประกอบด้วย ตัวอักษรใหญ่ ตัวอักษรเล็ก และตัวเลข' />
  
  <Input state='warning' message='รหัสผ่านไม่ถูกต้อง รหัสผ่านต้องประกอบด้วย ตัวอักษรใหญ่ ตัวอักษรเล็ก และตัวเลข' />`}>
    <Input state='success' message='รหัสผ่านไม่ถูกต้อง รหัสผ่านต้องประกอบด้วย ตัวอักษรใหญ่ ตัวอักษรเล็ก และตัวเลข' /><br/><br/>
    <Input state='error' message='รหัสผ่านไม่ถูกต้อง รหัสผ่านต้องประกอบด้วย ตัวอักษรใหญ่ ตัวอักษรเล็ก และตัวเลข' /><br/><br/>
    <Input state='warning' message='รหัสผ่านไม่ถูกต้อง รหัสผ่านต้องประกอบด้วย ตัวอักษรใหญ่ ตัวอักษรเล็ก และตัวเลข' />
  </DisplayCode>)
  .add('with disabled', () => <DisplayCode title='with disabled' code='<Input disabled />'>
    <Input disabled />
  </DisplayCode>)

/* ======================== INPUT WITH LABEL ======================== */  
storiesOf('Input with label', module)
  .add('with title data', () => <DisplayCode title='with title data' code="<InputWithLabel title={{ text: 'กรุณากรอกชื่อ' }} />">
    <InputWithLabel title={{ text: 'กรุณากรอกชื่อ'  }} />
  </DisplayCode>)
  .add('with custom title data', () => <DisplayCode title='with custom margin and padding' code={`<InputWithLabel title={{ text: 'กรุณากรอกชื่อ', bold: true }} />
  
  <InputWithLabel title={{ text: 'กรุณากรอกชื่อ', color: coralColor }} />`}>
    <InputWithLabel title={{ text: 'กรุณากรอกชื่อ', bold: true }} /><br/><br/>
    <InputWithLabel title={{ text: 'กรุณากรอกชื่อ', color: coralColor }} />
  </DisplayCode>)
  .add('with custom margin and padding', () => <DisplayCode title='with custom margin and padding' code={`<InputWithLabel margin='24px' title={{ text: 'กรุณากรอกชื่อ' }} />
  
  <InputWithLabel padding='16px' title={{ text: 'กรุณากรอกชื่อ' }} />`}>
    <InputWithLabel margin='0 24px' title={{ text: 'กรุณากรอกชื่อ' }} /><br/><br/>
    <InputWithLabel padding='0 16px' title={{ text: 'กรุณากรอกชื่อ' }} />
  </DisplayCode>)
  .add('with custom width', () => <DisplayCode title='with custom width' code="<InputWithLabel width='70%' title={{ text: 'กรุณากรอกชื่อ' }} />">
    <InputWithLabel width='70%' title={{ text: 'กรุณากรอกชื่อ'  }} />
  </DisplayCode>)
  .add('with custom position', () => <DisplayCode title='with custom position' code={`<InputWithLabel position='left' title={{ text: 'กรุณากรอกชื่อ' }} />
  
  <InputWithLabel position='right' title={{ text: 'บาท' }} />`}>
    <InputWithLabel position='left' title={{ text: 'กรุณากรอกชื่อ' }} /><br/><br/>
    <InputWithLabel position='right' title={{ text: 'บาท' }} />
  </DisplayCode>)
  .add('with custom input', () => <DisplayCode title='with custom input' code={`<InputWithLabel title={{ text: 'กรุณากรอกชื่อ' }} input={{ color: coralColor }} />
  
  <InputWithLabel width="80%" title={{ text: 'ที่อยู่' }} input={{ state: 'warning', large: true, message: "กรอกที่อยู๋ไม่ครบถ้วน" }} />`}>
    <InputWithLabel title={{ text: 'กรุณากรอกชื่อ' }} input={{ color: coralColor }} /><br/><br/>
    <InputWithLabel width="80%" title={{ text: 'ที่อยู่' }} input={{ state: 'warning', large: true, message: "กรอกที่อยู่ไม่ครบถ้วน" }} />
  </DisplayCode>)


/* ======================== RADIO ======================== */
storiesOf('Radio', module)
  .add('with data, name, and id', () => <DisplayCode title='with title data' code="<Radio data={{ value: 'yes', text: 'Are you a crown 🤡 ?' }} />">
    <Radio data={{ value: 'yes', text: 'Are you a crown 🤡 ?' }} />
  </DisplayCode>)
  .add('with disabled', () => <DisplayCode title='with title data' code="<Radio disabled name='gender' data={{ value: 'female', text: 'เพศหญิง' }} />">
    <Radio disabled name='gender' data={{ value: 'female', text: 'เพศหญิง', }} />
  </DisplayCode>)
  .add('with margin', () => <DisplayCode title='with title data' code={`<Radio name='gender' data={{ value: 'female', text: 'เพศหญิง' }} />
  <Radio margin='0 0 0 16px' name='gender' data={{ value: 'male', text: 'เพศชาย' }} />`}>
    <Radio name='gender' data={{ value: 'female', text: 'เพศหญิง' }} />
    <Radio margin='0 0 0 16px' name='gender' data={{ value: 'male', text: 'เพศชาย' }} />
  </DisplayCode>)
  .add('with default checked', () => <DisplayCode title='with default checked' code="<Radio defaultChecked data={{ value: 'yes', text: 'Are you a crown 🤡 ?' }} />">
    <Radio defaultChecked data={{ value: 'yes', text: 'Are you a crown 🤡 ?' }} />
  </DisplayCode>)
  .add('with controll checked', () => <DisplayCode title='with controll checked by state' code="<Radio defaultChecked data={{ value: 'yes', text: 'Are you a crown 🤡 ?' }} />">
    <Radio checked data={{ value: 'yes', text: 'Are you a crown 🤡 ?' }} />
  </DisplayCode>)

/* ======================== RADIO GROUP ======================== */
storiesOf('Radio Group', module)
  .add('with data, name, and id', () => <DisplayCode title='with title data' code={`<RadioGroup list={[
    { value: 'male', text: 'Male', },
    { value: 'female', text: 'Female', },
  ]} />`}>
    <RadioGroup list={[
      {
        value: 'male',
        text: 'Male',
      }, {
        value: 'female',
        text: 'Female',
      },
    ]} />
  </DisplayCode>)
  .add('with disabled', () => <DisplayCode title='with title data' code={`<RadioGroup disabled list={[
    { value: 'male', text: 'Male', },
    { value: 'female', text: 'Female', },
  ]} />`}>
    <RadioGroup disabled list={[
      {
        value: 'male',
        text: 'Male',
      }, {
        value: 'female',
        text: 'Female',
      },
    ]} />
  </DisplayCode>)
  .add('with margin', () => <DisplayCode title='with margin' code={`<RadioGroup margin='0 16px' list={[
    { value: 'male', text: 'Male', },
    { value: 'female', text: 'Female', },
  ]} />`}>
    <RadioGroup margin='0 16px' list={[
      {
        value: 'male',
        text: 'Male',
      }, {
        value: 'female',
        text: 'Female',
      },
    ]} />
  </DisplayCode>)
  .add('with default checked', () => <DisplayCode title='with default checked' code={`<RadioGroup defaultCheckedValue='female' list={[
    { value: 'male', text: 'Male', },
    { value: 'female', text: 'Female', },
  ]} />`}>
    <RadioGroup defaultCheckedValue='female' list={[
      {
        value: 'male',
        text: 'Male',
      }, {
        value: 'female',
        text: 'Female',
      },
    ]} />
  </DisplayCode>)


/* ======================== CHECKBOX ======================== */
storiesOf('Checkbox', module)
  .add('with data, name, and id', () => <DisplayCode title='with data, name, and id' code="<Checkbox data={{ value: 'c', text: '🤡' }} />">
    <Checkbox data={{ value: 'c', text: '🤡', }} />
  </DisplayCode>)
  .add('with disabled', () => <DisplayCode title='with disabled' code="<Checkbox disabled name='gender' data={{ value: 'female', text: 'เพศหญิง', icon: 'icon-user', }} />">
    <Checkbox disabled name='gender' data={{ value: 'female', text: 'เพศหญิง', icon: 'icon-user', }} />
  </DisplayCode>)
  .add('with margin', () => <DisplayCode title='with margin' code={`<Checkbox margin='0 16px' data={{ value: 'accept', text: 'ยอมรับ' }} />`}>
    <Checkbox margin='0 16px' data={{ value: 'accept', text: 'ยอมรับ' }} />
  </DisplayCode>)
  .add('with default checked', () => <DisplayCode title='with default checked' code="<Checkbox defaultChecked data={{ value: 'c', text: '🤡' }} />">
    <Checkbox defaultChecked data={{ value: 'c', text: '🤡', }} />
  </DisplayCode>)
  .add('with controll checked', () => <DisplayCode title='with controll checked by state' code="<Checkbox checked data={{ value: 'c', text: '🤡' }} />">
    <Checkbox checked data={{ value: 'c', text: '🤡', }} />
  </DisplayCode>)

/* ======================== CHECKBOX GROUP ======================== */
storiesOf('Checkbox Group', module)
  .add('with data, name, and id', () => <DisplayCode title='with title data' code={`<CheckboxGroup list={[
    { value: 'male', text: 'Male', icon: 'icon-user', },
    { value: 'female', text: 'Female', icon: 'icon-user-female', },
  ]} />`}>
    <CheckboxGroup defaultCheckedValue list={[
      {
        value: 'male',
        text: 'Male',
        icon: 'icon-user',
      }, {
        value: 'female',
        text: 'Female',
        icon: 'icon-user-female',
      },
    ]} />
  </DisplayCode>)
  .add('with disabled', () => <DisplayCode title='with title data' code={`<CheckboxGroup disabled list={[
    { value: 'male', text: 'Male', },
    { value: 'female', text: 'Female', },
  ]} />`}>
    <CheckboxGroup disabled list={[
      {
        value: 'male',
        text: 'Male',
      }, {
        value: 'female',
        text: 'Female',
      },
    ]} />
  </DisplayCode>)
  .add('with margin', () => <DisplayCode title='with margin' code={`<CheckboxGroup margin='0 16px' list={[
    { value: 'male', text: 'Male', },
    { value: 'female', text: 'Female', },
  ]} />`}>
    <CheckboxGroup margin='0 16px' list={[
      {
        value: 'male',
        text: 'Male',
      }, {
        value: 'female',
        text: 'Female',
      },
    ]} />
  </DisplayCode>)
  .add('with default checked value', () => <DisplayCode title='with default checked' code={`<CheckboxGroup defaultCheckedValue='male' list={[
    { value: 'male', text: 'Male', icon: 'icon-user', },
    { value: 'female', text: 'Female', icon: 'icon-user-female', },
  ]} />`}>
    <CheckboxGroup defaultCheckedValue='male' list={[
      {
        value: 'male',
        text: 'Male',
        icon: 'icon-user',
      }, {
        value: 'female',
        text: 'Female',
        icon: 'icon-user-female',
      },
    ]} />
  </DisplayCode>)
  .add('with controll checked', () => <DisplayCode title='with controll checked by state' code={`<CheckboxGroup checkedValue='female' list={[
    { value: 'male', text: 'Male', icon: 'icon-user', },
    { value: 'female', text: 'Female', icon: 'icon-user-female', },
  ]} />`}>
    <CheckboxGroup checkedValue='female' list={[
      {
        value: 'male',
        text: 'Male',
        icon: 'icon-user',
      }, {
        value: 'female',
        text: 'Female',
        icon: 'icon-user-female',
      },
    ]} />
  </DisplayCode>)

/* ======================== Dropdown ======================== */
storiesOf('Dropdown', module)
  .add('normal dropdown', () => <DisplayCode title='normal dropdown' code={`<Dropdown>
      <SelectChoiceWrapper>apple</SelectChoiceWrapper>
      <SelectChoiceWrapper>pear</SelectChoiceWrapper>
    </Dropdown>`}>
    <Dropdown>
      <SelectChoiceWrapper>apple</SelectChoiceWrapper>
      <SelectChoiceWrapper>pear</SelectChoiceWrapper>
    </Dropdown>
  </DisplayCode>)
  .add('with button props', () => <DisplayCode title='with button props' code={`<Dropdown
      buttonProps={{
        text: 'Select one of fruit',
      }}
    >
      <SelectChoiceWrapper>apple</SelectChoiceWrapper>
      <SelectChoiceWrapper>pear</SelectChoiceWrapper>
    </Dropdown>`}>
    <Dropdown
      buttonProps={{
        text: 'Select one of fruit',
      }}
    >
      <SelectChoiceWrapper>apple</SelectChoiceWrapper>
      <SelectChoiceWrapper>pear</SelectChoiceWrapper>
    </Dropdown>
  </DisplayCode>)
  .add('with collapse style', () => <DisplayCode title='with collapse style' code={`<Dropdown
      collapse
    >
      <SelectChoiceWrapper>apple</SelectChoiceWrapper>
      <SelectChoiceWrapper>pear</SelectChoiceWrapper>
    </Dropdown>`}>
    <Dropdown
      collapse
    >
      <SelectChoiceWrapper>apple</SelectChoiceWrapper>
      <SelectChoiceWrapper>pear</SelectChoiceWrapper>
    </Dropdown>
  </DisplayCode>)
  .add('with margin', () => <DisplayCode title='with margin' code={`<Dropdown
      buttonProps={{
        text: 'Select one of fruit',
      }}
      margin='40px'
    >
      <SelectChoiceWrapper>apple</SelectChoiceWrapper>
      <SelectChoiceWrapper>pear</SelectChoiceWrapper>
    </Dropdown>`}>
    <Dropdown
      buttonProps={{
        text: 'Select one of fruit',
      }}
      margin='40px'
    >
      <SelectChoiceWrapper>apple</SelectChoiceWrapper>
      <SelectChoiceWrapper>pear</SelectChoiceWrapper>
    </Dropdown>
  </DisplayCode>)

/* ======================== Select ======================== */
storiesOf('Select', module)
  .add('with items', () => <DisplayCode title='send props data' code={`<Select
    data={[
      {value: 'apple', text: 'แอปเปิ้ล', icon: 'fas fa-apple-alt'},
      {value: 'pear', text: 'แพร์'},
      {value: 'orange', text: 'ส้ม'},
      {value: 'grape', text: 'องุ่น'},
      {value: 'banana', text: 'กล้วย'},
    ]}
  />`}>
    <Select
      onlyDropdown={true}
      data={[
        {value: 'apple', text: 'แอปเปิ้ล', icon: 'fas fa-apple-alt'},
        {value: 'pear', text: 'แพร์'},
        {value: 'orange', text: 'ส้ม'},
        {value: 'grape', text: 'องุ่น'},
        {value: 'banana', text: 'กล้วย'},
      ]}
    />
  </DisplayCode>)
  .add('with collapse items', () => <DisplayCode title='send props tree and data' code={`<Select
    tree
    data={[
      {
        parentTitle: 'หัวข้อรายละเอียด 1',
        parentColor: '#F2A840',
        items: [
          {value: 'apple', text: 'แอปเปิ้ล1', icon: 'fas fa-apple-alt'},
          {value: 'pear', text: 'แพร์1'},
        ],
      }, {
        parentTitle: 'หัวข้อรายละเอียด 2',
        items: [
          {value: 'orange', text: 'ส้ม2'},
          {value: 'grape', text: 'องุ่น2'},
        ],
      }, {
        parentTitle: 'หัวข้อรายละเอียด 3',
        items: [
          {value: 'banana', text: 'กล้วย3'},
        ],
      },
    ]}
  />`}>
    <Select
      tree
      data={[
        {
          parentTitle: 'หัวข้อรายละเอียด 1',
          parentColor: '#F2A840',
          items: [
            {value: 'apple', text: 'แอปเปิ้ล1', icon: 'fas fa-apple-alt'},
            {value: 'pear', text: 'แพร์1'},
          ],
        }, {
          parentTitle: 'หัวข้อรายละเอียด 2',
          items: [
            {value: 'orange', text: 'ส้ม2'},
            {value: 'grape', text: 'องุ่น2'},
          ],
        }, {
          parentTitle: 'หัวข้อรายละเอียด 3',
          items: [
            {value: 'banana', text: 'กล้วย3'},
          ],
        },
      ]}
    />
  </DisplayCode>)
  .add('with color', () => <DisplayCode title='with color to set color of dropdown text' code={`<Select
    color={coralColor}
    data={[
      {value: 'apple', text: 'แอปเปิ้ล', icon: 'fas fa-apple-alt'},
      {value: 'pear', text: 'แพร์'},
      {value: 'orange', text: 'ส้ม'},
      {value: 'grape', text: 'องุ่น'},
      {value: 'banana', text: 'กล้วย'},
    ]}
  />`}>
    <Select
      color={coralColor}
      data={[
        {value: 'apple', text: 'แอปเปิ้ล', icon: 'fas fa-apple-alt'},
        {value: 'pear', text: 'แพร์'},
        {value: 'orange', text: 'ส้ม'},
        {value: 'grape', text: 'องุ่น'},
        {value: 'banana', text: 'กล้วย'},
      ]}
    />
  </DisplayCode>)
  .add('with maxHeight', () => <DisplayCode title='with maxHeight to set height of dropdown' code={`<Select
    maxHeight="80px"
    data={[
      {value: 'apple', text: 'แอปเปิ้ล', icon: 'fas fa-apple-alt'},
      {value: 'pear', text: 'แพร์'},
      {value: 'orange', text: 'ส้ม'},
      {value: 'grape', text: 'องุ่น'},
      {value: 'banana', text: 'กล้วย'},
    ]}
  />`}>
    <Select
      maxHeight='80px'
      data={[
        {value: 'apple', text: 'แอปเปิ้ล', icon: 'fas fa-apple-alt'},
        {value: 'pear', text: 'แพร์'},
        {value: 'orange', text: 'ส้ม'},
        {value: 'grape', text: 'องุ่น'},
        {value: 'banana', text: 'กล้วย'},
      ]}
    />
  </DisplayCode>)
  .add('with collapse', () => <DisplayCode title='set collapse props when you want to show select list as collapse to other element' code={`<Select
    collapse
    data={[
      {value: 'apple', text: 'แอปเปิ้ล', icon: 'fas fa-apple-alt'},
      {value: 'pear', text: 'แพร์'},
      {value: 'orange', text: 'ส้ม'},
      {value: 'grape', text: 'องุ่น'},
      {value: 'banana', text: 'กล้วย'},
    ]}
  />`}>
    <Select
      collapse
      data={[
        {value: 'apple', text: 'แอปเปิ้ล', icon: 'fas fa-apple-alt'},
        {value: 'pear', text: 'แพร์'},
        {value: 'orange', text: 'ส้ม'},
        {value: 'grape', text: 'องุ่น'},
        {value: 'banana', text: 'กล้วย'},
      ]}
    />
  </DisplayCode>)
  .add('with width', () => <DisplayCode title='set width' code={`<Select
    width='150px'
    data={[
      {value: 'apple', text: 'แอปเปิ้ล', icon: 'fas fa-apple-alt'},
      {value: 'pear', text: 'แพร์'},
      {value: 'orange', text: 'ส้ม'},
      {value: 'grape', text: 'องุ่น'},
      {value: 'banana', text: 'กล้วย'},
    ]}
  />`}>
    <Select
      width='150px'
      data={[
        {value: 'apple', text: 'แอปเปิ้ล', icon: 'fas fa-apple-alt'},
        {value: 'pear', text: 'แพร์'},
        {value: 'orange', text: 'ส้ม'},
        {value: 'grape', text: 'องุ่น'},
        {value: 'banana', text: 'กล้วย'},
      ]}
    />
  </DisplayCode>)
  .add('with inputProps', () => <DisplayCode title='with inputProps to set props of input' code={`<Select
    inputProps={{
      color: coralColor,
      large: true,
    }}
    data={[
      {value: 'apple', text: 'แอปเปิ้ล', icon: 'fas fa-apple-alt'},
      {value: 'pear', text: 'แพร์'},
      {value: 'orange', text: 'ส้ม'},
      {value: 'grape', text: 'องุ่น'},
      {value: 'banana', text: 'กล้วย'},
    ]}
  />`}>
    <Select
      inputProps={{
        color: coralColor
      }}
      data={[
        {value: 'apple', text: 'แอปเปิ้ล', icon: 'fas fa-apple-alt'},
        {value: 'pear', text: 'แพร์'},
        {value: 'orange', text: 'ส้ม'},
        {value: 'grape', text: 'องุ่น'},
        {value: 'banana', text: 'กล้วย'},
      ]}
    />
  </DisplayCode>)

/* ======================== Collapse ======================== */
storiesOf('Collapse', module)
  .add('with required title and children', () => <DisplayCode title='with required title and children' code={`<Collapse title='หัวข้อรายละเอียด'>
    <P>content</P>
  </Collapse>`}>
    <Collapse title='หัวข้อรายละเอียด'>
      <P>โนติสเบนโลอัลบัมรามเทพ ศิรินทร์สตรอเบอรีโพลารอยด์ คัตเอาต์ดีกรีติ่มซำ แพตเทิร์นอัลบัม เบนโตะลอร์ดไทม์กระดี๊กระด๊ามาราธอน หลวงปู่เซี้ยวตื้บ โหงว คัตเอาต์ยะเยือกโปลิศสามแยก</P>
    </Collapse>
  </DisplayCode>)
  .add('with required title and children and maxHeight', () => <DisplayCode title='with required title and children and maxHeight' code={`<Collapse maxHeight='100px' title='หัวข้อรายละเอียด'>
    <P>content</P>
  </Collapse>`}>
    <Collapse title='หัวข้อรายละเอียด' maxHeight='100px'>
      <P>โนติสเบนโลอัลบัมรามเทพ ศิรินทร์สตรอเบอรีโพลารอยด์ คัตเอาต์ดีกรีติ่มซำ แพตเทิร์นอัลบัม เบนโตะลอร์ดไทม์กระดี๊กระด๊ามาราธอน หลวงปู่เซี้ยวตื้บ โหงว คัตเอาต์ยะเยือกโปลิศสามแยก แทคติค รามาธิบดีอิสรชน คอมเมนท์ไฮไลท์คัตเอาต์นายแบบกระดี๊กระด๊า กู๋นิรันดร์โฟมกรุ๊ปคอนเฟิร์ม โฮสเตสเมจิคแคนู ไฮเปอร์ สตาร์ทอินเตอร์เปปเปอร์มินต์ ดีไซน์เนอร์ไฟต์เบลอสะบึม

      โมหจริตง่าวเพียบแปร้ อีโรติก เรต บลูเบอร์รีธัมโมแซวซาตานอัลบั้ม ซิงแฟกซ์ ไฮเอนด์ เซ็นทรัลเจ็ตเพรียวบางจุ๊ยโหลยโท่ย เคอร์ฟิว เฟอร์รี่แพทยสภาโค้ชดีไซน์เนอร์ไฮกุ เทรลเล่อร์น็อคบ๊อกซ์ พาร์ทเนอร์วโรกาสออสซี่แฟรีพริตตี้ ติวเตอร์วอร์รูมธรรมาวอลนัท บลอนด์มะกันยาวี เยอบีร่าลิสต์ปิกอัพ เฟรชชี่ โซลาร์โมหจริต
      
      บอยคอตต์กุมภาพันธ์ม็อบไบเบิลเสกสรรค์ สุนทรีย์ คูลเลอร์เกรย์โหงวน็อค สแตนดาร์ดอันตรกิริยา เซ็นเซอร์เวอร์ว้าวโทรโข่งปิกอัพ ลาเต้ผลไม้ ฮัมป่าไม้พันธุวิศวกรรม สามแยกสโลว์จตุคามไอติม อีแต๋น เตี๊ยมกรุ๊ปมาเฟียจูน ฮิ ไมค์มยุราภิรมย์คอลัมนิสต์โอเวอร์ อัตลักษณ์อัลไซเมอร์คอลัมน์ อุปนายกเอาต์เทอร์โบฟอยล์ สจ๊วตโดมิโนโหลยโท่ย บูมดยุก
      
      เซอร์ช็อตโชห่วย ฮิตซีนไฮไลท์เพนตากอน มาร์ตโครนาป๊อปแพ็คโอเพ่น ครัวซองแมคเคอเรลเสกสรรค์ดยุคแทงกั๊ก เนอะช็อปปิ้งพรีเมียมสกายโมหจริต แจ๊กเก็ตวอลล์ แบล็กสโลว์เอ๋ พุทธศตวรรษผู้นำรีพอร์ท โรแมนติค แมคเคอเรลซะนิว กระดี๊กระด๊าคาวบอยหลวงปู่แซลมอน รัมลอจิสติกส์อริยสงฆ์คอนแท็ค ไคลแม็กซ์เซอร์วิสตุ๊กตุ๊กแจ็กพ็อตอัลไซเมอร์ ฟาสต์ฟู้ดเยนแจ๊สอิออนมินท์ แชมเปี้ยนเฟรชชี่ ควิกยิวไคลแม็กซ์
      
      แอปเปิลความหมายโค้ชภควัมปติ ว่ะราชานุญาตเจไดผลักดัน แชมพูบ๋อยซะรายชื่อโปรโมท เนอะบิลเทคโนแครตพาวเวอร์รีทัช ดีพาร์ทเมนต์ ควิกติงต๊องเซอร์ไพรส์ คอปเตอร์เบิร์นแฮปปี้ฉลุยเกรย์ เฟรชชี่แฟ็กซ์คัตเอาต์โบรชัวร์ดีพาร์ตเมนต์ สารขัณฑ์รีโมต วาซาบิคอมพ์อุปัทวเหตุเพียบแปร้ ไฮไลท์ฟลุคป๊อป สแตนดาร์ดป๋าอัตลักษณ์ ราเมนโฮลวีตฮาร์ด โอ้ยแฟนตาซี เบบี้แซ็กโซโฟนซามูไร ซิ้มแคปคาราโอเกะสหรัฐแคมเปญ</P>
    </Collapse>
  </DisplayCode>)
  .add('with required title and children and color', () => <DisplayCode title='with required title and children and color' code={`<Collapse color={coralColor} title='หัวข้อรายละเอียด'>
    <P>content</P>
  </Collapse>`}>
    <Collapse title='หัวข้อรายละเอียด' color={coralColor}>
      <P>โนติสเบนโลอัลบัมรามเทพ ศิรินทร์สตรอเบอรีโพลารอยด์ คัตเอาต์ดีกรีติ่มซำ แพตเทิร์นอัลบัม เบนโตะลอร์ดไทม์กระดี๊กระด๊ามาราธอน หลวงปู่เซี้ยวตื้บ โหงว คัตเอาต์ยะเยือกโปลิศสามแยก</P>
    </Collapse>
  </DisplayCode>)
  .add('with required title and children and bold', () => <DisplayCode title='with required title and children and bold' code={`<Collapse bold title='หัวข้อรายละเอียด'>
    <P>content</P>
  </Collapse>`}>
    <Collapse title='หัวข้อรายละเอียด' bold>
      <P>โนติสเบนโลอัลบัมรามเทพ ศิรินทร์สตรอเบอรีโพลารอยด์ คัตเอาต์ดีกรีติ่มซำ แพตเทิร์นอัลบัม เบนโตะลอร์ดไทม์กระดี๊กระด๊ามาราธอน หลวงปู่เซี้ยวตื้บ โหงว คัตเอาต์ยะเยือกโปลิศสามแยก</P>
    </Collapse>
  </DisplayCode>)

/* ======================== Loading ======================== */
storiesOf('Loading', module)
  .add('with data, name, and id', () => <DisplayCode title='with title data' code={`<Loading />`}>
    <Loading />
  </DisplayCode>)
  .add('with text', () => <DisplayCode title='with text' code={`<Loading text='Loading your profile ...' />`}>
    <Loading text='กำลังเข้าสู่ระบบ' />
  </DisplayCode>)
  .add('with color', () => <DisplayCode title='with title data' code={`<Loading color={coralColor} />`}>
    <Loading color={coralColor} />
  </DisplayCode>)
  .add('with size', () => <DisplayCode title='with size' code={`<Loading large text='Loading your profile ...' />

  <Loading small text='Loading your profile ...' />`}>
    <Loading large text='Loading your profile ...' /><br/><br/>
    <Loading small text='Loading your profile ...' />
  </DisplayCode>)
  .add('with vertical position', () => <DisplayCode title='with vertical position' code={`<Loading large vertical text='กำลังเข้าสู่ระบบ' />`}>
    <Loading large vertical text='กำลังเข้าสู่ระบบ' />
  </DisplayCode>)
  .add('only load icon with color', () => <DisplayCode title='only load icon' code={`<LoadingIcon color={coralColor} />`}>
    <LoadingIcon color={coralColor} />
  </DisplayCode>)

