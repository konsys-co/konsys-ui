'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContentWrapper = exports.TitleWrapper = exports.CollapseWrapper = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  padding: 8px 0;\n'], ['\n  padding: 8px 0;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n  transition: ', ';\n  ', '\n'], ['\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n  transition: ', ';\n  ', '\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    ', '\n  '], ['\n    ', '\n  ']),
    _templateObject4 = _taggedTemplateLiteral(['\n      > ', ' {\n        transform: rotate(90deg);\n      }\n    '], ['\n      > ', ' {\n        transform: rotate(90deg);\n      }\n    ']),
    _templateObject5 = _taggedTemplateLiteral(['\n  margin-left: 22px;\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height ', ' ease;\n  &.show {\n    margin-top: 8px;\n    max-height: ', ';\n    overflow: scroll;\n  }\n'], ['\n  margin-left: 22px;\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height ', ' ease;\n  &.show {\n    margin-top: 8px;\n    max-height: ', ';\n    overflow: scroll;\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _variables = require('./../../styles/_variables');

var _styled = require('./../icon/styled');

var _styled2 = _interopRequireDefault(_styled);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CollapseWrapper = exports.CollapseWrapper = _styledComponents2.default.div(_templateObject);
var TitleWrapper = exports.TitleWrapper = _styledComponents2.default.div(_templateObject2, _variables.animate.transition, function (props) {
  return (0, _styledComponents.css)(_templateObject3, props.rotateIcon && (0, _styledComponents.css)(_templateObject4, _styled2.default));
});
var ContentWrapper = exports.ContentWrapper = _styledComponents2.default.div(_templateObject5, _variables.animate.time.maxHeight, function (props) {
  return props.maxHeight ? props.maxHeight : '1000px';
});

exports.default = CollapseWrapper;