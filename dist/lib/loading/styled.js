'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadingWrapper = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  display: inline-block;\n  font-size: ', ';\n  color: ', ';\n  > ', ' {\n    margin: 0 0.5em 0 0;\n    font-size: ', ';\n    color: ', ';\n  }\n  ', '\n  ', '\n  ', '\n'], ['\n  display: inline-block;\n  font-size: ', ';\n  color: ', ';\n  > ', ' {\n    margin: 0 0.5em 0 0;\n    font-size: ', ';\n    color: ', ';\n  }\n  ', '\n  ', '\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    display: inline-flex;\n    flex-direction: column;\n    align-items: center;\n    > ', ' {\n      margin: 0 0 0.5em 0;\n    }\n  '], ['\n    display: inline-flex;\n    flex-direction: column;\n    align-items: center;\n    > ', ' {\n      margin: 0 0 0.5em 0;\n    }\n  ']),
    _templateObject3 = _taggedTemplateLiteral(['\n    font-size: ', ';\n    font-family: ', ';\n    > ', ' {\n      margin: ', ';\n      font-size: ', ' !important;\n    }\n  '], ['\n    font-size: ', ';\n    font-family: ', ';\n    > ', ' {\n      margin: ', ';\n      font-size: ', ' !important;\n    }\n  ']),
    _templateObject4 = _taggedTemplateLiteral(['\n    font-size: ', ';\n    > ', ' {\n      margin: ', ';\n      font-size: ', ';\n    }\n  '], ['\n    font-size: ', ';\n    > ', ' {\n      margin: ', ';\n      font-size: ', ';\n    }\n  ']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _variables = require('../../styles/_variables');

var _styled = require('../icon/styled');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var mainColor = function mainColor(props) {
  return props.color ? props.color : props.theme.color ? props.theme.color.primaryColor : _variables.color.primaryColor;
};

var LoadingWrapper = exports.LoadingWrapper = _styledComponents2.default.div(_templateObject, function (props) {
  return props.theme.fonts ? props.theme.fonts.size.normal : _variables.fonts.size.normal;
}, mainColor, _styled.IconStyled, function (props) {
  return props.theme.fonts ? props.theme.fonts.size.small : _variables.fonts.size.small;
}, mainColor, function (props) {
  return props.vertical && (0, _styledComponents.css)(_templateObject2, _styled.IconStyled);
}, function (props) {
  return props.large && (0, _styledComponents.css)(_templateObject3, props.theme.fonts ? props.theme.fonts.size.title : _variables.fonts.size.title, _variables.fonts.style.light, _styled.IconStyled, props.vertical ? '0 0 0.5em 0' : '0 0.5em 0 0', props.theme.fonts ? props.theme.fonts.size.normal : _variables.fonts.size.normal);
}, function (props) {
  return props.small && (0, _styledComponents.css)(_templateObject4, props.theme.fonts ? props.theme.fonts.size.small : _variables.fonts.size.small, _styled.IconStyled, props.vertical ? '0 0 0.5em 0' : '0 1em 0 0', props.theme.fonts ? props.theme.fonts.size.label : _variables.fonts.size.label);
});

exports.default = LoadingWrapper;