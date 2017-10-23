'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Weekdays;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PropTypes = require('./PropTypes');

var _PropTypes2 = _interopRequireDefault(_PropTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Weekdays(_ref) {
  var locale = _ref.locale,
      localeUtils = _ref.localeUtils,
      weekdayComponent = _ref.weekdayComponent,
      weekdayElement = _ref.weekdayElement;

  var days = [];
  for (var i = 0; i < 7; i += 1) {
    var elementProps = {
      key: i,
      className: 'DayPicker-Weekday',
      weekday: i,
      localeUtils: localeUtils,
      locale: locale
    };
    var element = weekdayElement ? _react2.default.cloneElement(weekdayElement, elementProps) : _react2.default.createElement(weekdayComponent, elementProps);
    days.push(element);
  }

  return _react2.default.createElement(
    'div',
    { className: 'DayPicker-Weekdays', role: 'rowgroup' },
    _react2.default.createElement(
      'div',
      { className: 'DayPicker-WeekdaysRow', role: 'columnheader' },
      days
    )
  );
}

Weekdays.propTypes = {
  locale: _propTypes2.default.string.isRequired,
  localeUtils: _PropTypes2.default.localeUtils.isRequired,
  weekdayComponent: _propTypes2.default.func,
  weekdayElement: _propTypes2.default.element
};
//# sourceMappingURL=Weekdays.js.map