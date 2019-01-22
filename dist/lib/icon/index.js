'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styled = require('./styled');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Icon = function Icon(props) {
  return _react2.default.createElement(_styled.IconStyled, _extends({}, props, {
    className: props.icon
  }));
};

Icon.propTypes = {
  color: _propTypes2.default.string,
  icon: _propTypes2.default.string.isRequired,
  spin: _propTypes2.default.bool,
  fontSize: _propTypes2.default.string
};

exports.default = Icon;