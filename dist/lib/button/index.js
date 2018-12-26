'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonTest = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _styledComponents = require('styled-components');

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _styled = require('./styled');

var _variables = require('./../../styles/_variables');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
==== PROPS ====

---- about button ----
inverse:      inverse to background color and set font color to white
fullWidth:    expand button width to 100%
large/small:  size
buttonStyle:  set style of button ( round / rectangle )
  round:      border full round button
  rectangle:  no border radius
ghost:        in normal mode ghost props will set background to trasparent
color:        color to use as a text and border in normal mode and as a background and border in inverse mode
--------------------

---- about icon ----
icon:         icon to place in button
rightIcon:    place icon right to text
onlyIcon:     show only icon in button
spinIcon:     set icon to spin
--------------------

text:         text in button

================
*/

var Button = function Button(props) {
  return _react2.default.createElement(
    _styled.Btn,
    props,
    console.log(props),
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

var ButtonTest = exports.ButtonTest = (0, _styledComponents.withTheme)(Button);
// ButtonTest.defaultProps = {
//   theme: theme
// }

exports.default = Button;