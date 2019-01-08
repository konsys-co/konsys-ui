import React from 'react';

import '@storybook/addon-notes/register';
import '@storybook/addon-actions/register'
import '@storybook/addon-links/register'

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withNotes } from '@storybook/addon-notes';

import { Welcome } from '@storybook/react/demo';

import {
  Button, Input, InputWithLabel, Icon,
  Radio, RadioGroup, Checkbox, CheckboxGroup,
  H1, H2, H3, H4, P, SmallText, Label,
  Loading,
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
  .add('with custom font', () => <DisplayCode title='with custom font' code={`
  <H2 font='Sarabun-semibold'>H2 - คอนซิส คอมปานี</H2><br/>

  <P font='Sarabun'>P - คอนซิส คอมปานี</P>
  `}>
    <H2 font='Sarabun-semibold'>H2 - คอนซิส คอมปานี</H2><br/>
    <P font='Sarabun'>P - คอนซิส คอมปานี</P>
  </DisplayCode>)


/* ======================== ICON ======================== */
storiesOf('Icon', module)
  .add('with icon class', () => <DisplayCode title='with icon classn' code={`<Icon icon='fal fa-bug' />`}>
    <Icon icon='fal fa-bug' />
  </DisplayCode>)
  .add('with custom color', () => <DisplayCode title='with icon classn' code={`<Icon icon='fal fa-bug' color={coralColor} />`}>
    <Icon icon='fal fa-bug' color={coralColor} />
  </DisplayCode>)
  .add('with spin icon', () => <DisplayCode title='with icon classn' code={`<Icon spin icon='fal fa-bug' color={coralColor} />`}>
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
  .add('button with button size', () => <DisplayCode title='button with button size' code={`<Button large text="Custom text button 😎" />
  
  <Button small text="Custom text button 😎" />`}>
    <Button large text="Custom text button 😎" /><br/><br/>
    <Button small text="Custom text button 😎" />
  </DisplayCode>)


/* ======================== INPUT ======================== */  
storiesOf('Input', module)
  .add('default', () => <DisplayCode title='default' code={`<Input placeholder='กรอกชื่อ - นามสกุล' />`}>
    <Input placeholder='กรอกชื่อ - นามสกุล' />
  </DisplayCode>)
  .add('with custom icon prefix/suffix', () => <DisplayCode title='with custom icon prefix/suffix' code={`<Input prefix={<Icon icon='prefix fas fa-tree-decorated' />} />

  <Input suffix={<Icon icon='suffix fas fa-tree-decorated' />} />`}>
    <Input prefix={<Icon icon='prefix fas fa-tree-decorated' />} /><br/><br/>
    <Input suffix={<Icon icon='suffix fas fa-tree-decorated' />} />
  </DisplayCode>)
  .add('with custom text color', () => <DisplayCode title='with custom text color' code='<Input color={coralColor} />'>
    <Input color={coralColor} />
  </DisplayCode>)
  .add('with custom width', () => <DisplayCode title='with custom width' code='<Input width="80%" />'>
    <Input width='80%' />
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
  
  <InputWithLabel title={{ text: 'บาท' }} input={{ state: 'success', large: true }} />`}>
    <InputWithLabel title={{ text: 'กรุณากรอกชื่อ' }} input={{ color: coralColor }} /><br/><br/>
    <InputWithLabel title={{ text: 'บาท' }} input={{ state: 'success', large: true }} />
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

/* ======================== CHECKBOX GROUP ======================== */
storiesOf('Checkbox Group', module)
  .add('with data, name, and id', () => <DisplayCode title='with title data' code={`<CheckboxGroup list={[
    { value: 'male', text: 'Male', icon: 'icon-user', },
    { value: 'female', text: 'Female', icon: 'icon-user-female', },
  ]} />`}>
    <CheckboxGroup list={[
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


/* ======================== Loading ======================== */
storiesOf('Loading', module)
  .add('with data, name, and id', () => <DisplayCode title='with title data' code={`<Loading />`}>
    <Loading />
  </DisplayCode>)
  .add('with text', () => <DisplayCode title='with text' code={`<Loading text='Loading your profile ...' />`}>
    <Loading text='Loading your profile ...' />
  </DisplayCode>)
  .add('with size', () => <DisplayCode title='with size' code={`<Loading large text='Loading your profile ...' />

  <Loading small text='Loading your profile ...' />`}>
    <Loading large text='Loading your profile ...' /><br/><br/>
    <Loading small text='Loading your profile ...' />
  </DisplayCode>)
  .add('with vertical position', () => <DisplayCode title='with size' code={`<Loading large vertical text='Loading your profile ...' />`}>
    <Loading large vertical text='Loading your profile ...' />
  </DisplayCode>)
