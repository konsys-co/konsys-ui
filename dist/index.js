'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputWithLabel = exports.Input = exports.Label = exports.SmallText = exports.P = exports.H4 = exports.H3 = exports.H2 = exports.H1 = exports.CheckboxGroup = exports.RadioGroup = exports.Checkbox = exports.Radio = exports.Loading = exports.Icon = exports.Button = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _button = require('./lib/button');

var _button2 = _interopRequireDefault(_button);

var _icon = require('./lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _loading = require('./lib/loading');

var _loading2 = _interopRequireDefault(_loading);

var _select = require('./lib/select');

var _text = require('./lib/text');

var _input = require('./lib/input');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Document = function (_React$Component) {
  _inherits(Document, _React$Component);

  function Document() {
    _classCallCheck(this, Document);

    return _possibleConstructorReturn(this, (Document.__proto__ || Object.getPrototypeOf(Document)).apply(this, arguments));
  }

  _createClass(Document, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h3',
          null,
          'ks-common-component document page'
        ),
        _react2.default.createElement(_button.ButtonTest, { icon: 'icon-arrow-right', rightIcon: true, margin: '24px', text: 'test' }),
        _react2.default.createElement(_button2.default, { icon: 'icon-refresh', onlyIcon: true, spinIcon: true })
      );
    }
  }]);

  return Document;
}(_react2.default.Component);

exports.Button = _button2.default;
exports.Icon = _icon2.default;
exports.Loading = _loading2.default;
exports.Radio = _select.Radio;
exports.Checkbox = _select.Checkbox;
exports.RadioGroup = _select.RadioGroup;
exports.CheckboxGroup = _select.CheckboxGroup;
exports.H1 = _text.H1;
exports.H2 = _text.H2;
exports.H3 = _text.H3;
exports.H4 = _text.H4;
exports.P = _text.P;
exports.SmallText = _text.SmallText;
exports.Label = _text.Label;
exports.Input = _input.Input;
exports.InputWithLabel = _input.InputWithLabel;
exports.default = Document;