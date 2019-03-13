'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadingWrapper = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  display: inline-block;\n  font-size: ', ';\n  font-family: ', '\n  color: ', ';\n  > ', ' {\n    margin: 0 0.5em 0 0;\n    font-size: ', ';\n    color: ', ';\n  }\n  ', '\n  ', '\n  ', '\n'], ['\n  display: inline-block;\n  font-size: ', ';\n  font-family: ', '\n  color: ', ';\n  > ', ' {\n    margin: 0 0.5em 0 0;\n    font-size: ', ';\n    color: ', ';\n  }\n  ', '\n  ', '\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    display: inline-flex;\n    flex-direction: column;\n    align-items: center;\n    > ', ' {\n      margin: 0 0 0.5em 0;\n    }\n  '], ['\n    display: inline-flex;\n    flex-direction: column;\n    align-items: center;\n    > ', ' {\n      margin: 0 0 0.5em 0;\n    }\n  ']),
    _templateObject3 = _taggedTemplateLiteral(['\n    font-size: ', ';\n    font-weight: ', ';\n    > ', ' {\n      margin: ', ';\n      font-size: ', ' !important;\n    }\n  '], ['\n    font-size: ', ';\n    font-weight: ', ';\n    > ', ' {\n      margin: ', ';\n      font-size: ', ' !important;\n    }\n  ']),
    _templateObject4 = _taggedTemplateLiteral(['\n    font-size: ', ';\n    > ', ' {\n      margin: ', ';\n      font-size: ', ';\n    }\n  '], ['\n    font-size: ', ';\n    > ', ' {\n      margin: ', ';\n      font-size: ', ';\n    }\n  ']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _variables = require('../../styles/_variables');

var _styled = require('../icon/styled');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var LoadingWrapper = exports.LoadingWrapper = _styledComponents2.default.div(_templateObject, _variables.theme.fonts.size.normal, _variables.theme.fonts.family.normal, function (props) {
  return props.color ? props.color : _variables.theme.color.primaryColor;
}, _styled.IconStyled, _variables.theme.fonts.size.small, function (props) {
  return props.color ? props.color : _variables.theme.color.primaryColor;
}, function (props) {
  return props.vertical && (0, _styledComponents.css)(_templateObject2, _styled.IconStyled);
}, function (props) {
  return props.large && (0, _styledComponents.css)(_templateObject3, _variables.theme.fonts.size.title, _variables.theme.fonts.style.light, _styled.IconStyled, props.vertical ? '0 0 0.5em 0' : '0 0.5em 0 0', _variables.theme.fonts.size.subTitle);
}, function (props) {
  return props.small && (0, _styledComponents.css)(_templateObject4, _variables.theme.fonts.size.small, _styled.IconStyled, props.vertical ? '0 0 0.5em 0' : '0 1em 0 0', _variables.theme.fonts.size.labell);
});

exports.default = LoadingWrapper;