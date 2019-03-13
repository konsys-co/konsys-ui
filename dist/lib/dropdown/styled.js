'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropdownWrapper = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  ', '\n  ', '\n'], ['\n  position: relative;\n  ', '\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    margin: ', ';\n  '], ['\n    margin: ', ';\n  ']),
    _templateObject3 = _taggedTemplateLiteral(['\n    > ', ' {\n      position: relative;\n    }\n  '], ['\n    > ', ' {\n      position: relative;\n    }\n  ']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styled = require('../select/styled');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var DropdownWrapper = exports.DropdownWrapper = _styledComponents2.default.div(_templateObject, function (props) {
  return props.margin && (0, _styledComponents.css)(_templateObject2, props.margin);
}, function (props) {
  return props.collapse && (0, _styledComponents.css)(_templateObject3, _styled.SelectListWrapper);
});

exports.default = DropdownWrapper;