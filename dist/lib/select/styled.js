'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.CenterText = exports.SelectChoiceWrapper = exports.SelectWrapper = exports.SelectListWrapper = undefined;

var _templateObject = _taggedTemplateLiteral(['\n\tmargin: 8px 0 0;\n\tborder-radius: 4px;\n\tbackground-color: ', ';\n\ttransition: max-height ', ' ease;\n  position: absolute;\n  left: 0;\n  right: 0;\n  padding: ', ';\n\t&.hide {\n\t\tmax-height: 0;\n\t}\n\t&.show {\n\t\theight: auto;\n\t\tpadding: ', ';\n\t\tbox-shadow: ', ' rgba(', ', 0.15)};\n\t\tmax-height: ', ';\n\t\toverflow: scroll;\n  }\n'], ['\n\tmargin: 8px 0 0;\n\tborder-radius: 4px;\n\tbackground-color: ', ';\n\ttransition: max-height ', ' ease;\n  position: absolute;\n  left: 0;\n  right: 0;\n  padding: ', ';\n\t&.hide {\n\t\tmax-height: 0;\n\t}\n\t&.show {\n\t\theight: auto;\n\t\tpadding: ', ';\n\t\tbox-shadow: ', ' rgba(', ', 0.15)};\n\t\tmax-height: ', ';\n\t\toverflow: scroll;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  position: relative;\n  width: ', ';\n  ', '\n'], ['\n  position: relative;\n  width: ', ';\n  ', '\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    > ', ' {\n      position: relative;\n    }\n  '], ['\n    > ', ' {\n      position: relative;\n    }\n  ']),
    _templateObject4 = _taggedTemplateLiteral(['\n\tmargin: 0;\n\tpadding: 8px 16px;\n\tborder-radius: 4px;\n\tlist-style-type: none;\n\tcursor: pointer;\n\tdisplay: flex;\n  align-items: center;\n  ', '\n  ', '\n\t&:hover {\n    color: ', ';\n\t\tbackground-color: ', ';\n\t\t> ', ' {\n\t\t\tcolor: ', ';\n\t\t}\n\t}\n'], ['\n\tmargin: 0;\n\tpadding: 8px 16px;\n\tborder-radius: 4px;\n\tlist-style-type: none;\n\tcursor: pointer;\n\tdisplay: flex;\n  align-items: center;\n  ', '\n  ', '\n\t&:hover {\n    color: ', ';\n\t\tbackground-color: ', ';\n\t\t> ', ' {\n\t\t\tcolor: ', ';\n\t\t}\n\t}\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n    color: ', ';\n    > ', ' {\n      color: ', ';\n    }\n  '], ['\n    color: ', ';\n    > ', ' {\n      color: ', ';\n    }\n  ']),
    _templateObject6 = _taggedTemplateLiteral(['\n    background-color: ', '0D;\n  '], ['\n    background-color: ', '0D;\n  ']),
    _templateObject7 = _taggedTemplateLiteral(['\n\tpadding: 16px;\n\ttext-align: center;\n'], ['\n\tpadding: 16px;\n\ttext-align: center;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styled = require('./../icon/styled');

var _variables = require('./../../styles/_variables');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SelectListWrapper = exports.SelectListWrapper = _styledComponents2.default.ul(_templateObject, _variables.color.offWhite, _variables.animate.time.maxHeight, function (props) {
	return props.padding ? props.padding : '0 8px';
}, function (props) {
	return props.padding ? props.padding : '8px';
}, _variables.theme.shadow.selectShadow, _variables.theme.color.primaryColorRGB, function (props) {
	return props.maxHeight ? props.maxHeight : '190px';
});

var SelectWrapper = exports.SelectWrapper = _styledComponents2.default.div(_templateObject2, function (props) {
	return props.width && props.width;
}, function (props) {
	return props.collapse && (0, _styledComponents.css)(_templateObject3, SelectListWrapper);
});

var SelectChoiceWrapper = exports.SelectChoiceWrapper = _styledComponents2.default.li(_templateObject4, function (props) {
	return props.color && (0, _styledComponents.css)(_templateObject5, props.color, _styled.IconStyled, props.color);
}, function (props) {
	return props.active && (0, _styledComponents.css)(_templateObject6, _variables.theme.color.primaryColor);
}, _variables.color.offWhite, _variables.theme.color.primaryColor, _styled.IconStyled, _variables.color.offWhite);

var CenterText = exports.CenterText = _styledComponents2.default.div(_templateObject7);