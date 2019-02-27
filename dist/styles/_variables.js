'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.theme = exports.animate = exports.fonts = exports.color = exports.maxContainer = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    from {\n      transform: rotate(0deg);\n    }\n\n    to {\n      transform: rotate(360deg);\n    }\n  '], ['\n    from {\n      transform: rotate(0deg);\n    }\n\n    to {\n      transform: rotate(360deg);\n    }\n  ']);

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
    extraLight: '200',
    light: '300',
    regular: '400',
    medium: '500',
    semiBold: '600'
  },
  size: {
    heading: '56px',
    subHeading: '40px',
    title: '30px',
    subTitle: '22px',
    normal: '16px',
    small: '14px',
    label: '12px'
  }
};

var animate = exports.animate = {
  spin: (0, _styledComponents.keyframes)(_templateObject),
  time: {
    loading: '1s',
    maxHeight: '0.5s',
    opacity: '0.2s'
  },
  transition: 'all 0.5s ease'

  /* ------------- COLOR ------------- */

};var textColor = function textColor(props) {
  return props.color ? props.color : props.theme.color ? props.theme.color.dark : color.dark;
};

var primaryColor = function primaryColor(props) {
  return props.theme.color ? props.theme.color.primaryColor : color.primaryColor;
};
var primaryColorRGB = function primaryColorRGB(props) {
  return props.theme.color ? props.theme.color.primaryColorRGB : color.primaryColorRGB;
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

var animateTheme = function animateTheme(props) {
  return props.theme ? props.theme.animate : animate;
};

/* ------------- FONT ------------- */

var fontExtraLight = function fontExtraLight(props) {
  return props.theme.fonts ? props.theme.fonts.style.extraLight : fonts.style.extraLight;
};
var fontLight = function fontLight(props) {
  return props.theme.fonts ? props.theme.fonts.style.light : fonts.size.light;
};
var fontRegular = function fontRegular(props) {
  return props.theme.fonts ? props.theme.fonts.style.regular : fonts.size.regular;
};
var fontMedium = function fontMedium(props) {
  return props.theme.fonts ? props.theme.fonts.style.medium : fonts.size.medium;
};
var fontSemiBold = function fontSemiBold(props) {
  return props.theme.fonts ? props.theme.fonts.style.semiBold : fonts.size.semiBold;
};

var fontLabel = function fontLabel(props) {
  return props.theme.fonts ? props.theme.fonts.size.label : fonts.size.label;
};
var fontSmall = function fontSmall(props) {
  return props.theme.fonts ? props.theme.fonts.size.small : fonts.size.small;
};
var fontNormal = function fontNormal(props) {
  return props.theme.fonts ? props.theme.fonts.size.normal : fonts.size.normal;
};
var fontSubTitle = function fontSubTitle(props) {
  return props.theme.fonts ? props.theme.fonts.size.subTitle : fonts.size.subTitle;
};
var fonttitle = function fonttitle(props) {
  return props.theme.fonts ? props.theme.fonts.size.title : fonts.size.title;
};
var fontSubHeading = function fontSubHeading(props) {
  return props.theme.fonts ? props.theme.fonts.size.subHeading : fonts.size.subHeading;
};
var fontHeading = function fontHeading(props) {
  return props.theme.fonts ? props.theme.fonts.size.heading : fonts.size.heading;
};

var fontFamilyNormal = function fontFamilyNormal(props) {
  return props.theme.fonts ? props.theme.fonts.family.normal : 'kanit';
};

/* ------------- ANIMATE ------------- */

var animateSpin = function animateSpin(props) {
  return props.theme.animate ? props.theme.animate.spin : animate.spin;
};
var animateTimeLoading = function animateTimeLoading(props) {
  return props.theme.animate.time ? props.theme.animate.time.loading : animate.time.loading;
};
var animateTimeMaxHeight = function animateTimeMaxHeight(props) {
  return props.theme.animate.time ? props.theme.animate.time.maxHeight : animate.time.maxHeight;
};
var animateTimeOpacity = function animateTimeOpacity(props) {
  return props.theme.animate ? props.theme.animate.time.opacity : animate.time.opacity;
};
var animateTransition = function animateTransition(props) {
  return props.theme.animate ? props.theme.animate.transition : animate.time.transition;
};

var theme = exports.theme = {
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
    light: light,
    lightGray: lightGray
  },
  shadow: {
    selectShadow: '0 0 20px'
  },
  fonts: {
    family: {
      normal: fontFamilyNormal
    },
    style: {
      extraLight: fontExtraLight,
      light: fontLight,
      regular: fontRegular,
      medium: fontMedium,
      semiBold: fontSemiBold
    },
    size: {
      heading: fontHeading,
      subHeading: fontSubHeading,
      title: fonttitle,
      subTitle: fontSubTitle,
      normal: fontNormal,
      small: fontSmall,
      label: fontLabel
    }
  },
  animate: {
    spin: animateSpin,
    time: {
      loading: animateTimeLoading,
      maxHeight: animateTimeMaxHeight,
      opacity: animateTimeOpacity
    },
    transition: animateTransition
  }

  // export const theme = {
  //   color: {
  //     primaryColor: '#0932CF',
  //     primaryColorRGB: '17, 58, 203',
  //     secondaryColor: '#30458F',
  //     tertiaryColor: '#76B0CE',

  //     /* --- Gray Scale --- */
  //     offWhite: '#FFFFFF',
  //     light: '#F2F2F2',
  //     paleGray: '#C0BFC1',
  //     lightGray: '#929497',
  //     gray: '#5A595B',
  //     darkGray: '#49484A',
  //     dark: '#14131B',

  //     /* --- Info Color --- */
  //     info: '#25B7C9',
  //     success: '#53A857',
  //     error: '#E54343',
  //     warning: '#F99028',
  //   },
  //   fonts: {
  //     style: {
  //       extraLight: 'kanit-extraLight',
  //       light: 'kanit-light',
  //       regular: 'kanit-regular',
  //       medium: 'kanit-medium',
  //       semiBold: 'kanit-semiBold',
  //     },
  //     size: {
  //       heading: '3.5em',
  //       subHeading: '2.5em',
  //       title: '1.875em',
  //       subTitle: '1.375em',
  //       normal: '1em',
  //       small: '0.875em',
  //       label: '0.75em',
  //     },
  //   },
  //   animate: {
  //     spin: keyframes`
  //       from {
  //         transform: rotate(0deg);
  //       }

  //       to {
  //         transform: rotate(360deg);
  //       }
  //     `,
  //     time: {
  //       loading: '1s',
  //       maxHeight: '0.5s',
  //     },
  //     transition: 'all 0.5s ease',
  //   },
  //   shadow: {
  //     selectShadow: '0 0 20px',
  //   },
  // }

};