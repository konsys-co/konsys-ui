'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _downshift = require('downshift');

var _downshift2 = _interopRequireDefault(_downshift);

var _propTypes = require('prop-types');

var _icon = require('./../icon');

var _icon2 = _interopRequireDefault(_icon);

var _input = require('./../input/');

var _text = require('./../text/');

var _variables = require('./../../styles/_variables');

var _styled = require('./styled');

var _collapse = require('./../collapse');

var _collapse2 = _interopRequireDefault(_collapse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Select = function (_PureComponent) {
  _inherits(Select, _PureComponent);

  function Select() {
    _classCallCheck(this, Select);

    var _this = _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this));

    _this.state = {
      isOpen: false
    };
    return _this;
  }

  _createClass(Select, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          maxHeight = _props.maxHeight,
          inputProps = _props.inputProps,
          color = _props.color,
          tree = _props.tree,
          data = _props.data;
      var isOpen = this.state.isOpen;

      return _react2.default.createElement(
        _downshift2.default,
        _extends({
          itemToString: function itemToString(item) {
            return item ? item.text : '';
          },
          isOpen: isOpen,
          onSelect: function onSelect() {
            return _this2.setState({ isOpen: false });
          },
          onOuterClick: function onOuterClick() {
            return _this2.setState({ isOpen: false });
          }
        }, this.props),
        function (_ref) {
          var getInputProps = _ref.getInputProps,
              getItemProps = _ref.getItemProps,
              getMenuProps = _ref.getMenuProps,
              isOpen = _ref.isOpen,
              inputValue = _ref.inputValue,
              getToggleButtonProps = _ref.getToggleButtonProps,
              getLabelProps = _ref.getLabelProps;
          return _react2.default.createElement(
            'span',
            null,
            _react2.default.createElement(
              _styled.SelectWrapper,
              { collapse: _this2.props.collapse, width: _this2.props.width },
              _react2.default.createElement(_input.Input, _extends({
                width: '100%',
                suffix: _react2.default.createElement(_icon2.default, { icon: 'suffix fas ' + (isOpen ? 'fa-caret-up' : 'fa-caret-down') }),
                onClick: function onClick() {
                  return _this2.setState({ isOpen: true });
                }
              }, getInputProps(), inputProps)),
              _react2.default.createElement(
                _styled.SelectListWrapper,
                _extends({
                  maxHeight: maxHeight,
                  className: isOpen ? 'show' : 'hide',
                  padding: tree && '8px 8px 8px 16px'
                }, getMenuProps()),
                isOpen ? data && tree ? data.map(function (collapseData) {
                  return _react2.default.createElement(
                    _collapse2.default,
                    { title: collapseData.parentTitle, color: collapseData.parentColor },
                    collapseData.items.map(function (d) {
                      return _react2.default.createElement(
                        _styled.SelectChoiceWrapper,
                        _extends({}, getItemProps({
                          key: d.text,
                          item: d
                        }), {
                          color: color
                        }),
                        d.icon && _react2.default.createElement(_icon2.default, { fontSize: '12px', icon: d.icon, margin: '0 8px 0 0' }),
                        d.text
                      );
                    })
                  );
                }) : data.filter(function (item) {
                  return !inputValue || item.text.includes(inputValue);
                }).length > 0 ? data.filter(function (item) {
                  return !inputValue || item.text.includes(inputValue);
                }).map(function (item, index) {
                  return _react2.default.createElement(
                    _styled.SelectChoiceWrapper,
                    _extends({}, getItemProps({
                      key: item.text,
                      index: index,
                      item: item
                    }), {
                      color: color
                    }),
                    item.icon && _react2.default.createElement(_icon2.default, { fontSize: '12px', icon: item.icon, margin: '0 8px 0 0' }),
                    item.text
                  );
                }) : _react2.default.createElement(
                  _styled.CenterText,
                  null,
                  _react2.default.createElement(
                    _text.H4,
                    { color: _variables.theme.color.paleGray },
                    '\u0E44\u0E21\u0E48\u0E21\u0E35\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25'
                  )
                ) : null
              )
            )
          );
        }
      );
    }
  }]);

  return Select;
}(_react.PureComponent);

Select.propTypes = {
  maxHeight: _propTypes.string,
  color: _propTypes.string,
  tree: _propTypes.boolean,
  collapse: _propTypes.boolean,
  width: _propTypes.string,
  data: (0, _propTypes.arrayOf)((0, _propTypes.shape)({
    text: _propTypes.string.isRequired,
    value: _propTypes.string.isRequired,
    icon: _propTypes.string
  })).isRequired,
  inputProps: _propTypes.object
};

exports.default = Select;