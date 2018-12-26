'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PROP_SELECT_GROUP = exports.PROP_SELECT = undefined;

var _propTypes = require('prop-types');

var selectData = (0, _propTypes.shape)({
  value: (0, _propTypes.oneOfType)([_propTypes.string, _propTypes.number]).isRequired,
  text: _propTypes.string.isRequired,
  icon: _propTypes.string
});

var PROP_SELECT = exports.PROP_SELECT = {
  id: _propTypes.string,
  name: _propTypes.string,
  margin: _propTypes.string,
  disabled: _propTypes.bool,
  data: selectData
};

var PROP_SELECT_GROUP = exports.PROP_SELECT_GROUP = {
  id: _propTypes.string,
  name: _propTypes.string,
  margin: _propTypes.string,
  disabled: _propTypes.bool,
  list: (0, _propTypes.arrayOf)(selectData.isRequired).isRequired,
  vertical: _propTypes.bool
};