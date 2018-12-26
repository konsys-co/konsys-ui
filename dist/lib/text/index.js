'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Label = exports.SmallText = exports.P = exports.H4 = exports.H3 = exports.H2 = exports.H1 = exports.textStyle = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  font-weight: normal;\n  color: ', ';\n  margin: ', ';\n  padding: ', ';\n  ', '\n'], ['\n  font-weight: normal;\n  color: ', ';\n  margin: ', ';\n  padding: ', ';\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    font-family: ', ';\n  '], ['\n    font-family: ', ';\n  ']),
    _templateObject3 = _taggedTemplateLiteral(['\n  font-size: ', ';\n  ', ';\n  font-family: ', ';\n'], ['\n  font-size: ', ';\n  ', ';\n  font-family: ', ';\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  font-size: ', ';\n  ', ';\n  ', '\n'], ['\n  font-size: ', ';\n  ', ';\n  ', '\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  font-size: ', ';\n  ', ';\n  ', '\n  line-height: 20px;\n'], ['\n  font-size: ', ';\n  ', ';\n  ', '\n  line-height: 20px;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _variables = require('../../styles/_variables');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var textStyle = exports.textStyle = (0, _styledComponents.css)(_templateObject, function (props) {
  return props.color ? props.color : _variables.color.dark;
}, function (props) {
  return props.margin ? props.margin : 0;
}, function (props) {
  return props.padding ? props.padding : 0;
}, function (props) {
  return props.font && (0, _styledComponents.css)(_templateObject2, props.font);
});

var H1 = exports.H1 = _styledComponents2.default.h1(_templateObject3, function (props) {
  return props.theme.fonts ? props.theme.fonts.size.heading : _variables.fonts.size.heading;
}, textStyle, _variables.fonts.style.semiBold);

var H2 = exports.H2 = _styledComponents2.default.h2(_templateObject3, function (props) {
  return props.theme.fonts ? props.theme.fonts.size.subHeading : _variables.fonts.size.subHeading;
}, textStyle, _variables.fonts.style.semiBold);

var H3 = exports.H3 = _styledComponents2.default.h3(_templateObject4, function (props) {
  return props.theme.fonts ? props.theme.fonts.size.title : _variables.fonts.size.title;
}, textStyle, function (props) {
  return props.bold && (0, _styledComponents.css)(_templateObject2, _variables.fonts.style.medium);
});

var H4 = exports.H4 = _styledComponents2.default.h4(_templateObject4, function (props) {
  return props.theme.fonts ? props.theme.fonts.size.subTitle : _variables.fonts.size.subTitle;
}, textStyle, function (props) {
  return props.bold && (0, _styledComponents.css)(_templateObject2, _variables.fonts.style.medium);
});

var P = exports.P = _styledComponents2.default.p(_templateObject5, function (props) {
  return props.theme.fonts ? props.theme.fonts.size.normal : _variables.fonts.size.normal;
}, textStyle, function (props) {
  return props.bold && (0, _styledComponents.css)(_templateObject2, _variables.fonts.style.medium);
});

var SmallText = exports.SmallText = _styledComponents2.default.span(_templateObject4, function (props) {
  return props.theme.fonts ? props.theme.fonts.size.small : _variables.fonts.size.small;
}, textStyle, function (props) {
  return props.bold && (0, _styledComponents.css)(_templateObject2, _variables.fonts.style.medium);
});

var Label = exports.Label = _styledComponents2.default.span(_templateObject4, function (props) {
  return props.theme.fonts ? props.theme.fonts.size.label : _variables.fonts.size.label;
}, textStyle, function (props) {
  return props.bold && (0, _styledComponents.css)(_templateObject2, _variables.fonts.style.medium);
});