'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _styledComponents = require('styled-components');

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _styled = require('./styled');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(props) {
  return _react2.default.createElement(
    _styled.Btn,
    props,
    console.log('theme: ', props),
    props.onlyIcon ? _react2.default.createElement(_icon2.default, { key: 'button-icon', spin: props.spinIcon, icon: props.icon }) : props.icon ? props.rightIcon ? [_react2.default.createElement(
      'span',
      { key: 'button-text' },
      props.text ? props.text : 'Button text here'
    ), _react2.default.createElement(_icon2.default, { key: 'button-icon', spin: props.spinIcon, icon: props.icon })] : [_react2.default.createElement(_icon2.default, { key: 'button-icon', spin: props.spinIcon, icon: props.icon }), _react2.default.createElement(
      'span',
      { key: 'button-text' },
      props.text ? props.text : 'Button text here'
    )] : _react2.default.createElement(
      'span',
      { key: 'button-text' },
      props.text ? props.text : 'Button text here'
    )
  );
};

Button.propTypes = {
  color: _propTypes.string,
  icon: _propTypes.string,
  text: _propTypes.string,
  inverse: _propTypes.bool,
  fullWidth: _propTypes.bool,
  large: _propTypes.bool,
  small: _propTypes.bool,
  buttonStyle: (0, _propTypes.oneOf)(['round', 'rectangle']),
  ghost: _propTypes.bool,
  rightIcon: _propTypes.bool,
  onlyIcon: _propTypes.bool,
  spinIcon: _propTypes.bool
};

exports.default = (0, _styledComponents.withTheme)(Button);