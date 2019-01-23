'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextLink = exports.Label = exports.SmallText = exports.P = exports.H4 = exports.H3 = exports.H2 = exports.H1 = exports.textStyle = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  font-weight: normal;\n  color: ', ';\n  margin: ', ';\n  padding: ', ';\n  display: ', ';\n  font-family: \'kanit\';\n  ', '\n'], ['\n  font-weight: normal;\n  color: ', ';\n  margin: ', ';\n  padding: ', ';\n  display: ', ';\n  font-family: \'kanit\';\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    font-family: ', ';\n  '], ['\n    font-family: ', ';\n  ']),
    _templateObject3 = _taggedTemplateLiteral(['\n  font-size: ', ';\n  font-weight: ', ';\n  ', ';\n'], ['\n  font-size: ', ';\n  font-weight: ', ';\n  ', ';\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  font-size: ', ';\n  font-weight: ', ';\n  ', '\n  ', ';\n'], ['\n  font-size: ', ';\n  font-weight: ', ';\n  ', '\n  ', ';\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n    font-weight: ', ';\n  '], ['\n    font-weight: ', ';\n  ']),
    _templateObject6 = _taggedTemplateLiteral(['\n  font-size: ', ';\n  font-weight: ', ';\n  ', '\n  line-height: 20px;\n  ', ';\n'], ['\n  font-size: ', ';\n  font-weight: ', ';\n  ', '\n  line-height: 20px;\n  ', ';\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  font-size: ', ';\n  font-weight: ', ';\n  ', ';\n  ', '\n'], ['\n  font-size: ', ';\n  font-weight: ', ';\n  ', ';\n  ', '\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n  color: ', ';\n  transition: ', ';\n  &:hover {\n    color: ', ';\n  }\n  &:visited {\n    color: ', ';\n  }\n'], ['\n  color: ', ';\n  transition: ', ';\n  &:hover {\n    color: ', ';\n  }\n  &:visited {\n    color: ', ';\n  }\n']);

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
  return props.display ? props.display : 'inline-block';
}, function (props) {
  return props.font && (0, _styledComponents.css)(_templateObject2, props.font);
});

var H1 = exports.H1 = _styledComponents2.default.h1(_templateObject3, function (props) {
  return props.theme.fonts ? props.theme.fonts.size.heading : _variables.fonts.size.heading;
}, _variables.fonts.style.semiBold, textStyle);

var H2 = exports.H2 = _styledComponents2.default.h2(_templateObject3, function (props) {
  return props.theme.fonts ? props.theme.fonts.size.subHeading : _variables.fonts.size.subHeading;
}, _variables.fonts.style.semiBold, textStyle);

var H3 = exports.H3 = _styledComponents2.default.h3(_templateObject4, function (props) {
  return props.theme.fonts ? props.theme.fonts.size.title : _variables.fonts.size.title;
}, _variables.fonts.style.extraLight, function (props) {
  return props.bold && (0, _styledComponents.css)(_templateObject5, _variables.fonts.style.medium);
}, textStyle);

var H4 = exports.H4 = _styledComponents2.default.h4(_templateObject4, function (props) {
  return props.theme.fonts ? props.theme.fonts.size.subTitle : _variables.fonts.size.subTitle;
}, _variables.fonts.style.extraLight, function (props) {
  return props.bold && (0, _styledComponents.css)(_templateObject5, _variables.fonts.style.medium);
}, textStyle);

var P = exports.P = _styledComponents2.default.p(_templateObject6, function (props) {
  return props.theme.fonts ? props.theme.fonts.size.normal : _variables.fonts.size.normal;
}, _variables.fonts.style.extraLight, function (props) {
  return props.bold && (0, _styledComponents.css)(_templateObject5, _variables.fonts.style.medium);
}, textStyle);

var SmallText = exports.SmallText = _styledComponents2.default.span(_templateObject4, function (props) {
  return props.theme.fonts ? props.theme.fonts.size.small : _variables.fonts.size.small;
}, _variables.fonts.style.extraLight, function (props) {
  return props.bold && (0, _styledComponents.css)(_templateObject5, _variables.fonts.style.medium);
}, textStyle);

var Label = exports.Label = _styledComponents2.default.span(_templateObject7, function (props) {
  return props.theme.fonts ? props.theme.fonts.size.label : _variables.fonts.size.label;
}, _variables.fonts.style.extraLight, textStyle, function (props) {
  return props.bold && (0, _styledComponents.css)(_templateObject5, _variables.fonts.style.medium);
});

var TextLink = exports.TextLink = _styledComponents2.default.a(_templateObject8, function (props) {
  return props.theme.color ? props.theme.color.secondaryColor : _variables.color.secondaryColor;
}, _variables.animate.transition, function (props) {
  return props.theme.color ? props.theme.color.secondaryColor + 'CC' : _variables.color.secondaryColor + 'CC';
}, function (props) {
  return props.theme.color ? props.theme.color.secondaryColor + '88' : _variables.color.secondaryColor + '88';
});