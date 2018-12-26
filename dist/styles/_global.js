'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  html {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n    font-family: \'kanit-extraLight\', \'helvetica\';\n  }\n  body {\n    margin: 0;\n    padding: 0;\n  }\n  * {\n    outline: 0;\n    box-sizing: border-box;\n  }\n'], ['\n  html {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n    font-family: \'kanit-extraLight\', \'helvetica\';\n  }\n  body {\n    margin: 0;\n    padding: 0;\n  }\n  * {\n    outline: 0;\n    box-sizing: border-box;\n  }\n']);

var _styledComponents = require('styled-components');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var GlobalStyle = (0, _styledComponents.createGlobalStyle)(_templateObject);

exports.default = GlobalStyle;