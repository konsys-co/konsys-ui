'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _styled = require('./styled');

var _text = require('../text');

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _variables = require('../../styles/_variables');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// size
// style

var Collapse = function (_PureComponent) {
  _inherits(Collapse, _PureComponent);

  function Collapse() {
    _classCallCheck(this, Collapse);

    var _this = _possibleConstructorReturn(this, (Collapse.__proto__ || Object.getPrototypeOf(Collapse)).call(this));

    _this.state = {
      show: false
    };
    return _this;
  }

  _createClass(Collapse, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var show = this.state.show;
      var _props = this.props,
          children = _props.children,
          title = _props.title,
          color = _props.color,
          bold = _props.bold,
          maxHeight = _props.maxHeight;

      return _react2.default.createElement(
        _styled.CollapseWrapper,
        null,
        _react2.default.createElement(
          _styled.TitleWrapper,
          { rotateIcon: show, onClick: function onClick() {
              return _this2.setState({ show: !show });
            } },
          _react2.default.createElement(_icon2.default, { color: color ? color : _variables.theme.color.primaryColor, margin: '0 16px 0 0', icon: 'fas fa-caret-right' }),
          _react2.default.createElement(
            _text.P,
            { color: color ? color : _variables.theme.color.primaryColor, bold: bold },
            title
          )
        ),
        _react2.default.createElement(
          _styled.ContentWrapper,
          { maxHeight: maxHeight, className: show ? 'show' : 'hide' },
          children
        )
      );
    }
  }]);

  return Collapse;
}(_react.PureComponent);

Collapse.propTypes = {
  title: _propTypes.string.isRequired,
  color: _propTypes.string,
  maxHeight: _propTypes.string,
  bold: _propTypes.boolean
};

exports.default = Collapse;