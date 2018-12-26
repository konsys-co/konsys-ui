'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconStyled = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  display: inline-block;\n  color: ', ';\n  ', '\n'], ['\n  display: inline-block;\n  color: ', ';\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    ', '\n    ', '\n  '], ['\n    ', '\n    ', '\n  ']),
    _templateObject3 = _taggedTemplateLiteral(['\n      margin: ', ';\n    '], ['\n      margin: ', ';\n    ']),
    _templateObject4 = _taggedTemplateLiteral(['\n      animation: ', ';\n    '], ['\n      animation: ', ';\n    ']),
    _templateObject5 = _taggedTemplateLiteral(['', ' ', ' linear infinite !important'], ['', ' ', ' linear infinite !important']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _variables = require('../../styles/_variables');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var IconStyled = exports.IconStyled = _styledComponents2.default.i(_templateObject, function (props) {
  return props.color ? props.color : props.theme.color ? props.theme.color.primaryColor : _variables.color.dark;
}, function (props) {
  return (0, _styledComponents.css)(_templateObject2, props.margin && (0, _styledComponents.css)(_templateObject3, props.margin), props.spin && (0, _styledComponents.css)(_templateObject4, props.theme.animate ? (0, _styledComponents.css)(_templateObject5, props.theme.animate.spin, props.theme.animate.time.loading) : (0, _styledComponents.css)(_templateObject5, _variables.animate.spin, _variables.animate.time.loading)));
});

exports.default = IconStyled;