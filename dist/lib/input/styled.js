'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.InputWithLabelWrapper = exports.LabelWrapper = exports.InputWrapper = exports.InputElement = exports.InputWrapperElement = undefined;

var _templateObject = _taggedTemplateLiteral(['\n\tdisplay: inline-block;\n\tposition: relative;\n\twidth: 100%;\n'], ['\n\tdisplay: inline-block;\n\tposition: relative;\n\twidth: 100%;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n\toutline: 0 !important;\n\tfont-family: ', ';\n\tfont-weight: normal;\n\tfont-size: ', ';\n\tline-height: 20px;\n\tcolor: ', ';\n\tborder: 1px solid ', ';\n\tborder-radius: ', ';\n\ttransition: ', ';\n\tpadding: 6px 8px;\n\tbox-sizing: border-box;\n\twidth: 100%;\n\t&::placeholder {\n\t\tcolor: ', ';\n\t}\n\t&:focus,\n\t&:hover {\n\t\tborder: 1px solid ', ';\n\t\t~ ', ' {\n\t\t\tcolor: ', ';\n\t\t}\n\t}\n\t~ ', ' {\n\t\tcolor: ', ';\n\t\tfont-size: ', ';\n\t\ttransition: ', ';\n\t\tposition: absolute;\n\t\ttop: 30%;\n\t\t&.prefix {\n\t\t\tleft: 8px;\n\t\t}\n\t\t&.suffix {\n\t\t\tright: 8px;\n\t\t}\n\t}\n\t', '\n'], ['\n\toutline: 0 !important;\n\tfont-family: ', ';\n\tfont-weight: normal;\n\tfont-size: ', ';\n\tline-height: 20px;\n\tcolor: ', ';\n\tborder: 1px solid ', ';\n\tborder-radius: ', ';\n\ttransition: ', ';\n\tpadding: 6px 8px;\n\tbox-sizing: border-box;\n\twidth: 100%;\n\t&::placeholder {\n\t\tcolor: ', ';\n\t}\n\t&:focus,\n\t&:hover {\n\t\tborder: 1px solid ', ';\n\t\t~ ', ' {\n\t\t\tcolor: ', ';\n\t\t}\n\t}\n\t~ ', ' {\n\t\tcolor: ', ';\n\t\tfont-size: ', ';\n\t\ttransition: ', ';\n\t\tposition: absolute;\n\t\ttop: 30%;\n\t\t&.prefix {\n\t\t\tleft: 8px;\n\t\t}\n\t\t&.suffix {\n\t\t\tright: 8px;\n\t\t}\n\t}\n\t', '\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n\t\t', '\n\t\t', '\n\t\t', '\n\t\t', '\n\t\t', '\n\t\t', '\n\t\t', '\n\t\t&:disabled {\n\t\t\tcursor: not-allowed;\n\t\t\tbackground-color: ', ';\n\t\t\tborder: 1px solid ', ';\n\t\t\tcolor: ', ';\n\t\t\t~ ', ' {\n\t\t\t\tcolor: ', ';\n\t\t\t}\n\t\t}\n\t'], ['\n\t\t', '\n\t\t', '\n\t\t', '\n\t\t', '\n\t\t', '\n\t\t', '\n\t\t', '\n\t\t&:disabled {\n\t\t\tcursor: not-allowed;\n\t\t\tbackground-color: ', ';\n\t\t\tborder: 1px solid ', ';\n\t\t\tcolor: ', ';\n\t\t\t~ ', ' {\n\t\t\t\tcolor: ', ';\n\t\t\t}\n\t\t}\n\t']),
    _templateObject4 = _taggedTemplateLiteral(['\n\t\t\tpadding-left: 28px;\n\t\t'], ['\n\t\t\tpadding-left: 28px;\n\t\t']),
    _templateObject5 = _taggedTemplateLiteral(['\n\t\t\tpadding-right: 28px;\n\t\t'], ['\n\t\t\tpadding-right: 28px;\n\t\t']),
    _templateObject6 = _taggedTemplateLiteral(['\n\t\t\tbackground-color: transparent;\n\t\t'], ['\n\t\t\tbackground-color: transparent;\n\t\t']),
    _templateObject7 = _taggedTemplateLiteral(['\n\t\t\tfont-size: ', ';\n\t\t\tpadding: 8px 16px;\n\t\t\t', '\n\t\t\t', '\n\t\t\t~ ', ' {\n\t\t\t\tfont-size: ', ';\n\t\t\t\t', '\n\t\t\t\ttop: 35%;\n\t\t\t}\n\t\t'], ['\n\t\t\tfont-size: ', ';\n\t\t\tpadding: 8px 16px;\n\t\t\t', '\n\t\t\t', '\n\t\t\t~ ', ' {\n\t\t\t\tfont-size: ', ';\n\t\t\t\t', '\n\t\t\t\ttop: 35%;\n\t\t\t}\n\t\t']),
    _templateObject8 = _taggedTemplateLiteral(['\n\t\t\t\tpadding-left: 48px;\n\t\t\t'], ['\n\t\t\t\tpadding-left: 48px;\n\t\t\t']),
    _templateObject9 = _taggedTemplateLiteral(['\n\t\t\t\tpadding-right: 48px;\n\t\t\t'], ['\n\t\t\t\tpadding-right: 48px;\n\t\t\t']),
    _templateObject10 = _taggedTemplateLiteral(['right: 16px'], ['right: 16px']),
    _templateObject11 = _taggedTemplateLiteral(['left: 16px'], ['left: 16px']),
    _templateObject12 = _taggedTemplateLiteral(['\n\t\t\tfont-size: ', ';\n\t\t\tpadding: 4px 6px;\n\t\t\t', '\n\t\t\t', '\n\t\t\t~ ', ' {\n\t\t\t\tfont-size: ', ';\n\t\t\t\t', '\n\t\t\t}\n\t\t'], ['\n\t\t\tfont-size: ', ';\n\t\t\tpadding: 4px 6px;\n\t\t\t', '\n\t\t\t', '\n\t\t\t~ ', ' {\n\t\t\t\tfont-size: ', ';\n\t\t\t\t', '\n\t\t\t}\n\t\t']),
    _templateObject13 = _taggedTemplateLiteral(['\n\t\t\t\tpadding-left: 24px;\n\t\t\t'], ['\n\t\t\t\tpadding-left: 24px;\n\t\t\t']),
    _templateObject14 = _taggedTemplateLiteral(['\n\t\t\t\tpadding-right: 24px;\n\t\t\t'], ['\n\t\t\t\tpadding-right: 24px;\n\t\t\t']),
    _templateObject15 = _taggedTemplateLiteral(['right: 6px'], ['right: 6px']),
    _templateObject16 = _taggedTemplateLiteral(['left: 6px'], ['left: 6px']),
    _templateObject17 = _taggedTemplateLiteral(['\n\t\t\tborder: 1px solid ', ' !important;\n\t\t\t~ ', ' {\n\t\t\t\tcolor: ', ' !important;\n\t\t\t}\n\t\t'], ['\n\t\t\tborder: 1px solid ', ' !important;\n\t\t\t~ ', ' {\n\t\t\t\tcolor: ', ' !important;\n\t\t\t}\n\t\t']),
    _templateObject18 = _taggedTemplateLiteral(['\n\t\t\tpadding: ', ';\n\t\t'], ['\n\t\t\tpadding: ', ';\n\t\t']),
    _templateObject19 = _taggedTemplateLiteral(['\n\tdisplay: inline-block;\n\t', '\n\t> ', ' {\n\t\tdisplay: block;\n\t\tword-break: break-all;\n\t\twidth: 100%;\n\t\tmargin: 8px 0 0;\n\t\ttext-align: right;\n\t}\n'], ['\n\tdisplay: inline-block;\n\t', '\n\t> ', ' {\n\t\tdisplay: block;\n\t\tword-break: break-all;\n\t\twidth: 100%;\n\t\tmargin: 8px 0 0;\n\t\ttext-align: right;\n\t}\n']),
    _templateObject20 = _taggedTemplateLiteral(['\n\t\t', '\n\t\t', '\n\t'], ['\n\t\t', '\n\t\t', '\n\t']),
    _templateObject21 = _taggedTemplateLiteral(['margin: ', ';'], ['margin: ', ';']),
    _templateObject22 = _taggedTemplateLiteral(['width: ', ';'], ['width: ', ';']),
    _templateObject23 = _taggedTemplateLiteral(['\n\t> * {\n\t\tcolor: ', ';\n\t}\n'], ['\n\t> * {\n\t\tcolor: ', ';\n\t}\n']),
    _templateObject24 = _taggedTemplateLiteral(['\n\tdisplay: flex;\n\tflex-direction: ', ';\n\talign-items: ', ';\n\t> ', ' {\n\t\tdisplay: inline-flex;\n\t\talign-items: baseline;\n\t\tmargin: ', ';\n\t\twhite-space: nowrap;\n\t\torder: ', ';\n\t\tfont-family: ', ';\n\t\t> ', ' {\n\t\t\tfont-size: ', ';\n\t\t}\n\t}\n\t', '\n'], ['\n\tdisplay: flex;\n\tflex-direction: ', ';\n\talign-items: ', ';\n\t> ', ' {\n\t\tdisplay: inline-flex;\n\t\talign-items: baseline;\n\t\tmargin: ', ';\n\t\twhite-space: nowrap;\n\t\torder: ', ';\n\t\tfont-family: ', ';\n\t\t> ', ' {\n\t\t\tfont-size: ', ';\n\t\t}\n\t}\n\t', '\n']),
    _templateObject25 = _taggedTemplateLiteral(['\n\t\t\tmargin: ', ';\n\t\t'], ['\n\t\t\tmargin: ', ';\n\t\t']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _variables = require('../../styles/_variables');

var _styled = require('../icon/styled');

var _styled2 = _interopRequireDefault(_styled);

var _text = require('../text');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var defaultMinWidth = '210px';
var defaultLargeMinWidth = '300px';
var defaultSmallMinWidth = '210px';

var InputWrapperElement = exports.InputWrapperElement = _styledComponents2.default.div(_templateObject);

var InputElement = exports.InputElement = _styledComponents2.default.input(_templateObject2, _variables.fonts.style.extraLight, function (props) {
	return props.theme.fonts ? props.theme.fonts.size.normal : _variables.fonts.size.normal;
}, _variables.theme.color.textColor, _variables.color.paleGray, function (props) {
	return props.rectangle ? 0 : '4px';
}, function (props) {
	return props.theme.animate ? props.theme.animate.transition : _variables.animate.transition;
}, _variables.color.paleGray, _variables.theme.color.primaryColor, _styled2.default, _variables.theme.color.primaryColor, _styled2.default, _variables.color.paleGray, function (props) {
	return props.theme.fonts ? props.theme.fonts.size.small : _variables.fonts.size.small;
}, function (props) {
	return props.theme.animate ? props.theme.animate.transition : _variables.animate.transition;
}, function (props) {
	return (0, _styledComponents.css)(_templateObject3, props.prefix && (0, _styledComponents.css)(_templateObject4), props.suffix && (0, _styledComponents.css)(_templateObject5), props.ghost && (0, _styledComponents.css)(_templateObject6), props.large && (0, _styledComponents.css)(_templateObject7, props.theme.fonts ? props.theme.fonts.size.subTitle : _variables.fonts.size.subTitle, props.prefix && (0, _styledComponents.css)(_templateObject8), props.suffix && (0, _styledComponents.css)(_templateObject9), _styled2.default, function (props) {
		return props.theme.fonts ? props.theme.fonts.size.normal : _variables.fonts.size.normal;
	}, function (props) {
		return props.suffix ? (0, _styledComponents.css)(_templateObject10) : (0, _styledComponents.css)(_templateObject11);
	}), props.small && (0, _styledComponents.css)(_templateObject12, props.theme.fonts ? props.theme.fonts.size.label : _variables.fonts.size.label, props.prefix && (0, _styledComponents.css)(_templateObject13), props.suffix && (0, _styledComponents.css)(_templateObject14), _styled2.default, function (props) {
		return props.theme.fonts ? props.theme.fonts.size.label : _variables.fonts.size.label;
	}, function (props) {
		return props.suffix ? (0, _styledComponents.css)(_templateObject15) : (0, _styledComponents.css)(_templateObject16);
	}), props.state && (0, _styledComponents.css)(_templateObject17, props.state === 'error' ? _variables.theme.color.error : props.state === 'success' ? _variables.theme.color.success : props.state === 'warning' && _variables.theme.color.warning, _styled2.default, props.state === 'error' ? _variables.theme.color.error : props.state === 'success' ? _variables.theme.color.success : props.state === 'warning' && _variables.theme.color.warning), props.padding && (0, _styledComponents.css)(_templateObject18, props.padding), _variables.color.light, _variables.color.paleGray, _variables.color.lightGray, _styled2.default, _variables.color.paleGray);
});

var InputWrapper = exports.InputWrapper = _styledComponents2.default.div(_templateObject19, function (props) {
	return (0, _styledComponents.css)(_templateObject20, props.margin && (0, _styledComponents.css)(_templateObject21, props.margin), props.width && (0, _styledComponents.css)(_templateObject22, props.width));
}, _text.Label);

var LabelWrapper = exports.LabelWrapper = _styledComponents2.default.span(_templateObject23, _variables.theme.color.textColor);

var InputWithLabelWrapper = exports.InputWithLabelWrapper = _styledComponents2.default.div(_templateObject24, function (props) {
	return props.position === 'left' || props.position === 'right' ? 'row' : 'column';
}, function (props) {
	return props.position === 'left' || props.position === 'right' ? 'center' : 'left';
}, LabelWrapper, function (props) {
	return props.position === 'left' ? '0 24px 0 0' : props.position === 'right' ? '0 0 0 24px' : '0 0 16px';
}, function (props) {
	return props.position === 'right' ? 1 : 0;
}, function (props) {
	return props.theme.fonts ? props.theme.fonts.style.extraLight : _variables.fonts.style.extraLight;
}, _styled2.default, function (props) {
	return props.theme.fonts ? props.theme.fonts.size.small : _variables.fonts.size.small;
}, function (props) {
	return (0, _styledComponents.css)(_templateObject20, props.margin && (0, _styledComponents.css)(_templateObject25, props.margin), props.padding && (0, _styledComponents.css)(_templateObject25, props.padding));
});