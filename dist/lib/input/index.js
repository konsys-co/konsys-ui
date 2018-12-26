'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.InputWithLabel = exports.Input = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _text = require('../text');

var _styled = require('./styled');

var _variables = require('../../styles/_variables');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
==== PROPS ====

large/small:         		size
margin:									margin of input
padding:								padding of input
rectangle:							set input border radius to 0
color:									set color of input
prefix/suffix:					send prefix/suffix set in input (only Icon)
width:									set width of input
state:									set state of input ( error / success / warning )
ghost:									set background of input to transparent
disabled:								set input to disabled

================
*/

var Input = exports.Input = function Input(props) {
	return _react2.default.createElement(
		_styled.InputWrapper,
		{ width: props.width, large: props.large, small: props.small, margin: props.margin, padding: props.padding },
		_react2.default.createElement(
			_styled.InputWrapperElement,
			null,
			_react2.default.createElement(_styled.InputElement, props),
			props.prefix,
			props.suffix
		),
		props.message && _react2.default.createElement(
			_text.Label,
			{ color: props.error ? _variables.color.error : props.success ? _variables.color.success : props.warning ? _variables.color.warning : _variables.color.lightGray },
			props.message
		)
	);
};

Input.propTypes = {
	color: _propTypes.string,
	width: _propTypes.string,
	padding: _propTypes.string,
	margin: _propTypes.string,
	prefix: _propTypes.element,
	suffix: _propTypes.element,
	rectangle: _propTypes.bool,
	state: (0, _propTypes.oneOf)(['error', 'success', 'warning']),
	ghost: _propTypes.bool,
	disabled: _propTypes.bool,
	large: _propTypes.bool,
	small: _propTypes.bool

	/*
 ==== PROPS ====
 
 position:         			set position of text ( top / left / right )
 width:									set width of input
 margin:									set margin of wrapper
 padding:								set padding of wrapper
 title:									object with color / icon / text to set title props
 input:									object with props of input
 
 ================
 */

};var InputWithLabel = exports.InputWithLabel = function InputWithLabel(props) {
	return _react2.default.createElement(
		_styled.InputWithLabelWrapper,
		{ margin: props.margin, padding: props.padding, position: props.position },
		_react2.default.createElement(
			_styled.LabelWrapper,
			{ color: props.title.color },
			props.title.icon && _react2.default.createElement(_icon2.default, { margin: '0 8px 0 0', icon: props.title.icon }),
			_react2.default.createElement(
				_text.P,
				null,
				props.title.text
			)
		),
		_react2.default.createElement(Input, _extends({ width: props.width && props.width }, props.input))
	);
};
InputWithLabel.propTypes = {
	position: (0, _propTypes.oneOf)(['left', 'right']),
	width: _propTypes.string,
	margin: _propTypes.string,
	padding: _propTypes.string,
	title: (0, _propTypes.shape)({
		text: _propTypes.string.isRequired,
		icon: _propTypes.string,
		color: _propTypes.string
	}).isRequired,
	input: _propTypes.object
};

exports.default = Input;