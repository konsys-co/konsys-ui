'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Btn = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  padding: 8px 24px;\n  border-radius: 4px;\n  border: 1px solid ', ';\n  color: ', ';\n  background-color: ', ';\n  cursor: pointer;\n  font-size: ', ';\n  transition: ', ';\n  font-family: ', ';\n  ', '\n  outline: 0 !important;\n  > ', ' {\n    font-size: ', ';\n    margin: ', ';\n    color: ', ';\n  }\n  &:hover {\n    border: 1px solid ', ';\n    color: ', ';\n  }\n  &:disabled {\n    cursor: not-allowed;\n    background-color: ', ' !important;\n    border: 1px solid ', ' !important;\n    color: ', ' !important;\n  }\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'], ['\n  padding: 8px 24px;\n  border-radius: 4px;\n  border: 1px solid ', ';\n  color: ', ';\n  background-color: ', ';\n  cursor: pointer;\n  font-size: ', ';\n  transition: ', ';\n  font-family: ', ';\n  ', '\n  outline: 0 !important;\n  > ', ' {\n    font-size: ', ';\n    margin: ', ';\n    color: ', ';\n  }\n  &:hover {\n    border: 1px solid ', ';\n    color: ', ';\n  }\n  &:disabled {\n    cursor: not-allowed;\n    background-color: ', ' !important;\n    border: 1px solid ', ' !important;\n    color: ', ' !important;\n  }\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    margin: ', ';\n  '], ['\n    margin: ', ';\n  ']),
    _templateObject3 = _taggedTemplateLiteral(['\n    padding: 0;\n    width: 40px;\n    height: 40px;\n    border-radius: 100%;\n    > ', ' {\n      margin: 0;\n    }\n  '], ['\n    padding: 0;\n    width: 40px;\n    height: 40px;\n    border-radius: 100%;\n    > ', ' {\n      margin: 0;\n    }\n  ']),
    _templateObject4 = _taggedTemplateLiteral(['\n    border: 1px solid ', ';\n    background-color: ', ';\n    color: ', ';\n    > ', ' {\n      color: ', ';\n    }\n    &:hover {\n      background-color: ', ';\n      color: ', ';\n    }\n  '], ['\n    border: 1px solid ', ';\n    background-color: ', ';\n    color: ', ';\n    > ', ' {\n      color: ', ';\n    }\n    &:hover {\n      background-color: ', ';\n      color: ', ';\n    }\n  ']),
    _templateObject5 = _taggedTemplateLiteral(['\n    width: 100%;\n  '], ['\n    width: 100%;\n  ']),
    _templateObject6 = _taggedTemplateLiteral(['\n    font-size: ', ';\n    padding: 16px 48px;\n    > ', ' {\n      font-size: ', ';\n      margin: ', ';\n    }\n  '], ['\n    font-size: ', ';\n    padding: 16px 48px;\n    > ', ' {\n      font-size: ', ';\n      margin: ', ';\n    }\n  ']),
    _templateObject7 = _taggedTemplateLiteral(['\n    font-size: ', ';\n    padding: 4px 16px;\n    border-radius: 2px;\n    > ', ' {\n      font-size: 0.5em;\n      margin: ', ';\n    }\n  '], ['\n    font-size: ', ';\n    padding: 4px 16px;\n    border-radius: 2px;\n    > ', ' {\n      font-size: 0.5em;\n      margin: ', ';\n    }\n  ']),
    _templateObject8 = _taggedTemplateLiteral(['\n    ', '\n    ', '\n  '], ['\n    ', '\n    ', '\n  ']),
    _templateObject9 = _taggedTemplateLiteral(['\n      border-radius: 40px;\n    '], ['\n      border-radius: 40px;\n    ']),
    _templateObject10 = _taggedTemplateLiteral(['\n      border-radius: 0px;\n    '], ['\n      border-radius: 0px;\n    ']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styled = require('../icon/styled');

var _variables = require('../../styles/_variables');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var buttonMainColor = function buttonMainColor(props) {
  return props.color ? props.color : props.theme.color ? props.theme.color.primaryColor : _variables.color.primaryColor;
};
var buttonHoverColor = function buttonHoverColor(props) {
  return props.color ? props.color + 'CC' : props.theme.color ? props.theme.color.primaryColor + 'CC' : _variables.color.primaryColor + 'CC';
};
var buttonDisabledColor = function buttonDisabledColor(props) {
  return props.color ? props.color + '1A' : props.theme.color ? props.theme.color.primaryColor + '1A' : _variables.color.primaryColor + '1A';
};
var buttonDisabledTextColor = function buttonDisabledTextColor(props) {
  return props.color ? props.color + '33' : props.theme.color ? props.theme.color.primaryColor + '33' : _variables.color.primaryColor + '33';
};

var Btn = exports.Btn = _styledComponents2.default.button(_templateObject, buttonMainColor, buttonMainColor, function (props) {
  return props.ghost ? 'transparent' : _variables.color.offWhite;
}, function (props) {
  return props.theme.fonts ? props.theme.fonts.size.normal : _variables.fonts.size.normal;
}, function (props) {
  return props.theme.animate ? props.theme.animate.transition : _variables.animate.transition;
}, _variables.fonts.style.extraLight, function (props) {
  return props.margin && (0, _styledComponents.css)(_templateObject2, props.margin);
}, _styled.IconStyled, _variables.fonts.size.label, function (props) {
  return props.rightIcon ? '0 0 0 8px' : '0 8px 0 0';
}, buttonMainColor, buttonHoverColor, buttonHoverColor, buttonDisabledColor, buttonDisabledColor, buttonDisabledTextColor, function (props) {
  return props.onlyIcon && (0, _styledComponents.css)(_templateObject3, _styled.IconStyled);
}, function (props) {
  return props.inverse && (0, _styledComponents.css)(_templateObject4, buttonMainColor, buttonMainColor, _variables.color.offWhite, _styled.IconStyled, _variables.color.offWhite, buttonHoverColor, _variables.color.offWhite);
}, function (props) {
  return props.fullWidth && (0, _styledComponents.css)(_templateObject5);
}, function (props) {
  return props.large && (0, _styledComponents.css)(_templateObject6, props.theme.fonts ? props.theme.fonts.size.subTitle : _variables.fonts.size.subTitle, _styled.IconStyled, _variables.fonts.size.label, props.rightIcon ? '0 0 0 16px' : '0 16px 0 0');
}, function (props) {
  return props.small && (0, _styledComponents.css)(_templateObject7, props.theme.fonts ? props.theme.fonts.size.label : _variables.fonts.size.label, _styled.IconStyled, props.rightIcon ? '0 0 0 6px' : '0 6px 0 0');
}, function (props) {
  return (0, _styledComponents.css)(_templateObject8, props.buttonStyle === 'round' && (0, _styledComponents.css)(_templateObject9), props.buttonStyle === 'rectangle' && (0, _styledComponents.css)(_templateObject10));
});

exports.default = Btn;