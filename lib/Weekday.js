'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WeekdayPropTypes = undefined;
exports.default = Weekday;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PropTypes = require('./PropTypes');

var _PropTypes2 = _interopRequireDefault(_PropTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Weekday(_ref) {
  var weekday = _ref.weekday,
      className = _ref.className,
      localeUtils = _ref.localeUtils,
      locale = _ref.locale;

  return _react2.default.createElement(
    'div',
    { className: className },
    _react2.default.createElement(
      'abbr',
      { title: localeUtils.formatWeekdayLong(weekday, locale) },
      localeUtils.formatWeekdayShort(weekday, locale)
    )
  );
}

var WeekdayPropTypes = exports.WeekdayPropTypes = {
  weekday: _propTypes2.default.number,
  className: _propTypes2.default.string,
  locale: _propTypes2.default.string,
  localeUtils: _PropTypes2.default.localeUtils
};

Weekday.propTypes = WeekdayPropTypes;
//# sourceMappingURL=Weekday.js.map