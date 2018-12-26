'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperGroup = exports.Wrapper = exports.Text = exports.CheckboxLabel = exports.RadioInputLabel = exports.Label = exports.SelectInput = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  display: none;\n'], ['\n  display: none;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: flex;\n  align-items: center;\n'], ['\n  display: flex;\n  align-items: center;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  width: 16px;\n  height: 16px;\n  display: inline-block;\n  position: relative;\n  border: 1px solid ', ';\n  border-radius: 50%;\n  cursor: pointer;\n  &::before {\n    content: \'\';\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    background-color: ', ';\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    opacity: 0;\n  }\n'], ['\n  width: 16px;\n  height: 16px;\n  display: inline-block;\n  position: relative;\n  border: 1px solid ', ';\n  border-radius: 50%;\n  cursor: pointer;\n  &::before {\n    content: \'\';\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    background-color: ', ';\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    opacity: 0;\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  border-radius: 2px;\n  &::before {\n    content: "\f00c";\n    font-family: \'fontAwesome\';\n    width: auto;\n    height: auto;\n    background: none;\n    font-size: ', ';\n    color: ', ';\n  }\n'], ['\n  border-radius: 2px;\n  &::before {\n    content: "\\f00c";\n    font-family: \'fontAwesome\';\n    width: auto;\n    height: auto;\n    background: none;\n    font-size: ', ';\n    color: ', ';\n  }\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  padding: 0 0 0 8px;\n  > ', ' {\n    font-size: ', ' !important;\n    margin-right: 8px;\n  }\n'], ['\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  padding: 0 0 0 8px;\n  > ', ' {\n    font-size: ', ' !important;\n    margin-right: 8px;\n  }\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  display: inline-block;\n  ', '\n  > ', ' {\n    &:checked + ', ' > ', '::before,\n    &:checked + ', ' > ', '::before {\n      opacity: 1;\n    }\n    &:disabled + ', ',\n    &:disabled + ', ' {\n      ', ' {\n        cursor: not-allowed;\n        color: ', ';\n        > ', ' {\n          color: ', ';\n        }\n      }\n      > ', ',\n      > ', ' {\n        cursor: not-allowed;\n        background-color: ', ';\n      }\n    }\n  }\n'], ['\n  display: inline-block;\n  ', '\n  > ', ' {\n    &:checked + ', ' > ', '::before,\n    &:checked + ', ' > ', '::before {\n      opacity: 1;\n    }\n    &:disabled + ', ',\n    &:disabled + ', ' {\n      ', ' {\n        cursor: not-allowed;\n        color: ', ';\n        > ', ' {\n          color: ', ';\n        }\n      }\n      > ', ',\n      > ', ' {\n        cursor: not-allowed;\n        background-color: ', ';\n      }\n    }\n  }\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n    margin: ', ';\n  '], ['\n    margin: ', ';\n  ']),
    _templateObject8 = _taggedTemplateLiteral(['\n  display: inline-flex;\n  ', '\n  ', '\n'], ['\n  display: inline-flex;\n  ', '\n  ', '\n']),
    _templateObject9 = _taggedTemplateLiteral(['\n    flex-direction: column;\n  '], ['\n    flex-direction: column;\n  ']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _text = require('../text');

var _variables = require('../../styles/_variables');

var _styled = require('../icon/styled');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SelectInput = exports.SelectInput = _styledComponents2.default.input(_templateObject);

var Label = exports.Label = _styledComponents2.default.label(_templateObject2);

var RadioInputLabel = exports.RadioInputLabel = _styledComponents2.default.span(_templateObject3, _variables.color.paleGray, function (props) {
  return props.color ? props.color : props.theme.color ? props.theme.color.secondaryColor : _variables.color.secondaryColor;
});

var CheckboxLabel = exports.CheckboxLabel = (0, _styledComponents2.default)(RadioInputLabel)(_templateObject4, function (props) {
  return props.theme.fonts ? props.theme.fonts.size.small : _variables.fonts.size.small;
}, function (props) {
  return props.color ? props.color : props.theme.color ? props.theme.color.secondaryColor : _variables.color.secondaryColor;
});

var Text = exports.Text = (0, _styledComponents2.default)(_text.P)(_templateObject5, _styled.IconStyled, function (props) {
  return props.theme.fonts ? props.theme.fonts.size.label : _variables.fonts.size.label;
});

var Wrapper = exports.Wrapper = _styledComponents2.default.div(_templateObject6, function (props) {
  return props.margin && (0, _styledComponents.css)(_templateObject7, props.margin);
}, SelectInput, Label, CheckboxLabel, Label, RadioInputLabel, Label, Label, Text, _variables.color.lightGray, _styled.IconStyled, _variables.color.lightGray, CheckboxLabel, RadioInputLabel, _variables.color.light);

var WrapperGroup = exports.WrapperGroup = _styledComponents2.default.div(_templateObject8, function (props) {
  return props.margin && (0, _styledComponents.css)(_templateObject7, props.margin);
}, function (props) {
  return props.vertical && (0, _styledComponents.css)(_templateObject9);
});

exports.default = SelectInput;