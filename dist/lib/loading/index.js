'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadingIcon = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _styled = require('./styled');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Loading = function Loading(props) {
  return _react2.default.createElement(
    _styled.LoadingWrapper,
    props,
    _react2.default.createElement(_icon2.default, { spin: true, icon: 'fal fa-spinner-third' }),
    props.text ? props.text : 'loading'
  );
};

var LoadingIcon = exports.LoadingIcon = function LoadingIcon(props) {
  return _react2.default.createElement(_icon2.default, _extends({}, props, { spin: true, icon: 'fal fa-spinner-third' }));
};

Loading.propTypes = {
  text: _propTypes2.default.string,
  vertical: _propTypes2.default.bool,
  large: _propTypes2.default.bool,
  small: _propTypes2.default.bool
};

exports.default = Loading;