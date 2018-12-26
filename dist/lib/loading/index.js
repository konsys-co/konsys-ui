'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _styled = require('./styled');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
==== PROPS ====

text:         loading text
large/small:  size
vertical:

================
*/

var Loading = function Loading(props) {
  return _react2.default.createElement(
    _styled.LoadingWrapper,
    props,
    _react2.default.createElement(_icon2.default, { spin: true, icon: 'icon-reload' }),
    props.text ? props.text : 'loading'
  );
};

Loading.propTypes = {
  test: _propTypes2.default.string,
  vertical: _propTypes2.default.bool,
  large: _propTypes2.default.bool,
  small: _propTypes2.default.bool
};

exports.default = Loading;