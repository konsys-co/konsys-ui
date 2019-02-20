'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  html {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n    font-family: \'kanit\', \'helvetica\';\n  }\n  body {\n    margin: 0;\n    padding: 0;\n  }\n  * {\n    outline: 0;\n    box-sizing: border-box;\n  }\n  ', '\n'], ['\n  html {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n    font-family: \'kanit\', \'helvetica\';\n  }\n  body {\n    margin: 0;\n    padding: 0;\n  }\n  * {\n    outline: 0;\n    box-sizing: border-box;\n  }\n  ', '\n']);

var _styledComponents = require('styled-components');

var _all = require('fonts/fontAwesome/js/all.js');

var _all2 = _interopRequireDefault(_all);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var GlobalStyle = (0, _styledComponents.createGlobalStyle)(_templateObject, _all2.default);

exports.default = GlobalStyle;