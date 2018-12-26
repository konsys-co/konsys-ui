'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.theme = exports.animate = exports.fonts = exports.color = exports.maxContainer = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    from {\n      transform: rotate(360deg);\n    }\n\n    to {\n      transform: rotate(0deg);\n    }\n  '], ['\n    from {\n      transform: rotate(360deg);\n    }\n\n    to {\n      transform: rotate(0deg);\n    }\n  ']);

var _styledComponents = require('styled-components');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var maxContainer = exports.maxContainer = '1152px';

var color = exports.color = {
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
  warning: '#F99028'
};

var fonts = exports.fonts = {
  style: {
    extraLight: 'kanit-extraLight',
    light: 'kanit-light',
    regular: 'kanit-regular',
    medium: 'kanit-medium',
    semiBold: 'kanit-semiBold'
  },
  size: {
    heading: '3.5em',
    subHeading: '2.5em',
    title: '1.875em',
    subTitle: '1.375em',
    normal: '1em',
    small: '0.875em',
    label: '0.75em'
  }
  // h1: '56px',
  // h2: '40px',
  // h3: '30px',
  // h4: '22px',
  // p: '16px',
  // small: '14px',
  // label: '12px',

};var animate = exports.animate = {
  spin: (0, _styledComponents.keyframes)(_templateObject),
  time: {
    loading: '1s'
  },
  transition: 'all 0.5s ease'

  // export const defaultTheme = {
  //   color: {
  //     primaryColor: 'red',
  //   },
  //   fonts,
  //   animate,
  // }

};var textColor = function textColor(props) {
  return props.color ? props.color : props.theme.color ? props.theme.color.dark : color.dark;
};

var primaryColor = function primaryColor(props) {
  return props.theme.color ? props.theme.color.primaryColor : color.primaryColor;
};
var secondaryColor = function secondaryColor(props) {
  return props.theme.color ? props.theme.color.secondaryColor : color.secondaryColor;
};
var tertiaryColor = function tertiaryColor(props) {
  return props.theme.color ? props.theme.color.tertiaryColor : color.tertiaryColor;
};

var offWhite = function offWhite(props) {
  return props.theme.color ? props.theme.color.offWhite : color.offWhite;
};
var light = function light(props) {
  return props.theme.color ? props.theme.color.light : color.light;
};
var paleGray = function paleGray(props) {
  return props.theme.color ? props.theme.color.paleGray : color.paleGray;
};
var lightGray = function lightGray(props) {
  return props.theme.color ? props.theme.color.lightGray : color.lightGray;
};
var gray = function gray(props) {
  return props.theme.color ? props.theme.color.gray : color.gray;
};
var darkGray = function darkGray(props) {
  return props.theme.color ? props.theme.color.darkGray : color.darkGray;
};
var dark = function dark(props) {
  return props.theme.color ? props.theme.color.dark : color.dark;
};

var infoColor = function infoColor(props) {
  return props.theme.color ? props.theme.color.info : color.info;
};
var errorColor = function errorColor(props) {
  return props.theme.color ? props.theme.color.error : color.error;
};
var successColor = function successColor(props) {
  return props.theme.color ? props.theme.color.success : color.success;
};
var warningColor = function warningColor(props) {
  return props.theme.color ? props.theme.color.warning : color.warning;
};

var theme = exports.theme = {
  color: {
    primaryColor: primaryColor,
    textColor: textColor,
    success: successColor,
    error: errorColor,
    warning: warningColor
  }
};