import { keyframes } from 'styled-components'

export const maxContainer = '1152px'

export const color = {
  /* --- Main Color--- */

  primaryColor: '#0932CF',
  primaryColorRGB: '17, 58, 203',
  secondaryColor: '#30458F',
  tertiaryColor: '#76B0CE',

  /* --- Gray Scale --- */
  offWhite: '#FFFFFF',
  light: '#F2F2F2',
  paleGray: '#C0BFC1',
  lightGray: '#929497',
  gray: '#5A595B',
  darkGray: '#49484A',
  dark: '#14131B',

  /* --- Info Color --- */
  info: '#25B7C9',
  success: '#53A857',
  error: '#E54343',
  warning: '#F99028',
}

export const fonts = {
  style: {
    extraLight: 'kanit-extraLight',
    light: 'kanit-light',
    regular: 'kanit-regular',
    medium: 'kanit-medium',
    semiBold: 'kanit-semiBold',
  },
  size: {
    heading: '3.5em',
    subHeading: '2.5em',
    title: '1.875em',
    subTitle: '1.375em',
    normal: '1em',
    small: '0.875em',
    label: '0.75em',
  },
}

export const animate = {
  spin: keyframes`
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  `,
  time: {
    loading: '1s',
    maxHeight: '0.5s',
  },
  transition: 'all 0.5s ease',
}

const textColor = props => (props.color ? props.color : props.theme.color ? props.theme.color.dark : color.dark)

const primaryColor = props => (props.theme.color ? props.theme.color.primaryColor : color.primaryColor)
const primaryColorRGB = props => (props.theme.color ? props.theme.color.primaryColorRGB : color.primaryColorRGB)
const secondaryColor = props => (props.theme.color ? props.theme.color.secondaryColor : color.secondaryColor)
const tertiaryColor = props => (props.theme.color ? props.theme.color.tertiaryColor : color.tertiaryColor)

const offWhite = props => (props.theme.color ? props.theme.color.offWhite : color.offWhite)
const light = props => (props.theme.color ? props.theme.color.light : color.light)
const paleGray = props => (props.theme.color ? props.theme.color.paleGray : color.paleGray)
const lightGray = props => (props.theme.color ? props.theme.color.lightGray : color.lightGray)
const gray = props => (props.theme.color ? props.theme.color.gray : color.gray)
const darkGray = props => (props.theme.color ? props.theme.color.darkGray : color.darkGray)
const dark = props => (props.theme.color ? props.theme.color.dark : color.dark)

const infoColor = props => (props.theme.color ? props.theme.color.info : color.info);
const errorColor = props => (props.theme.color ? props.theme.color.error : color.error);
const successColor = props => (props.theme.color ? props.theme.color.success : color.success);
const warningColor = props => (props.theme.color ? props.theme.color.warning : color.warning);

const animateTheme = props => (props.theme ? props.theme.animate : animate);

export const theme = {
  color: {
    primaryColor: primaryColor,
    primaryColorRGB: primaryColorRGB,
    secondaryColor: secondaryColor,
    tertiaryColor: tertiaryColor,
    textColor: textColor,
    success: successColor,
    error: errorColor,
    warning: warningColor,
    paleGray: paleGray,
  },
  shadow: {
    selectShadow: '0 0 20px',
  },
}
