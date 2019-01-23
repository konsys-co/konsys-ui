'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckboxGroup = exports.RadioGroup = exports.Checkbox = exports.Radio = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('../../contants/propTypes');

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _styled = require('./styled');

var _variables = require('./../../styles/_variables');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Radio = exports.Radio = function Radio(props) {
  return _react2.default.createElement(
    _styled.Wrapper,
    props,
    _react2.default.createElement(_styled.SelectInput, { disabled: props.disabled, value: props.data.value, type: 'radio', id: props.id ? props.id : props.data.value ? props.data.value : 'radio', name: props.name ? props.name : 'radio' }),
    _react2.default.createElement(
      _styled.Label,
      { htmlFor: props.id ? props.id : props.data.value ? props.data.value : 'radio' },
      _react2.default.createElement(_styled.RadioInputLabel, null),
      _react2.default.createElement(
        _styled.Text,
        null,
        props.data.icon && _react2.default.createElement(_icon2.default, { icon: props.data.icon }),
        props.data.text
      )
    )
  );
};
Radio.propTypes = _propTypes.PROP_CHOICE;
Radio.defaultProps = {
  theme: _variables.theme
};

var Checkbox = exports.Checkbox = function Checkbox(props) {
  return _react2.default.createElement(
    _styled.Wrapper,
    props,
    _react2.default.createElement(_styled.SelectInput, { disabled: props.disabled, value: props.data.value, type: 'checkbox', id: props.id ? props.id : props.data.value ? props.data.value : 'checkbox', name: props.name ? props.name : 'checkbox' }),
    _react2.default.createElement(
      _styled.Label,
      { htmlFor: props.id ? props.id : props.data.value ? props.data.value : 'checkbox' },
      _react2.default.createElement(_styled.CheckboxLabel, null),
      _react2.default.createElement(
        _styled.Text,
        null,
        props.data.icon && _react2.default.createElement(_icon2.default, { icon: props.data.icon }),
        props.data.text
      )
    )
  );
};
Checkbox.propTypes = _propTypes.PROP_CHOICE;
Checkbox.defaultProps = {
  theme: _variables.theme
};

var RadioGroup = exports.RadioGroup = function RadioGroup(props) {
  return _react2.default.createElement(
    _styled.WrapperGroup,
    props,
    props.list.map(function (v, i) {
      return _react2.default.createElement(Radio, { margin: i === props.list.length - 1 ? '0' : props.vertical ? '0 0 8px 0' : '0 16px 0 0', key: v.value, data: v, id: props.id, name: props.name, disabled: props.disabled });
    })
  );
};
RadioGroup.propTypes = _propTypes.PROP_CHOICE_GROUP;
RadioGroup.defaultProps = {
  theme: _variables.theme
};

var CheckboxGroup = exports.CheckboxGroup = function CheckboxGroup(props) {
  return _react2.default.createElement(
    _styled.WrapperGroup,
    props,
    props.list.map(function (v, i) {
      return _react2.default.createElement(Checkbox, { margin: i === props.list.length - 1 ? '0' : props.vertical ? '0 0 8px 0' : '0 16px 0 0', key: v.value, data: v, id: props.id, name: props.name, disabled: props.disabled });
    })
  );
};
CheckboxGroup.propTypes = _propTypes.PROP_CHOICE_GROUP;
CheckboxGroup.defaultProps = {
  theme: _variables.theme
};

exports.default = Radio;