'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Month;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PropTypes = require('./PropTypes');

var _PropTypes2 = _interopRequireDefault(_PropTypes);

var _Weekdays = require('./Weekdays');

var _Weekdays2 = _interopRequireDefault(_Weekdays);

var _Helpers = require('./Helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Month(_ref) {
  var month = _ref.month,
      locale = _ref.locale,
      localeUtils = _ref.localeUtils,
      captionElement = _ref.captionElement,
      onCaptionClick = _ref.onCaptionClick,
      children = _ref.children,
      firstDayOfWeek = _ref.firstDayOfWeek,
      className = _ref.className,
      wrapperClassName = _ref.wrapperClassName,
      weekClassName = _ref.weekClassName,
      weekdayComponent = _ref.weekdayComponent,
      weekdayElement = _ref.weekdayElement,
      fixedWeeks = _ref.fixedWeeks;

  var captionProps = {
    date: month,
    localeUtils: localeUtils,
    locale: locale,
    onClick: onCaptionClick ? function (e) {
      return onCaptionClick(e, month);
    } : undefined
  };
  var weeks = (0, _Helpers.getWeekArray)(month, firstDayOfWeek, fixedWeeks);
  return _react2.default.createElement(
    'div',
    { className: className },
    _react2.default.cloneElement(captionElement, captionProps),
    _react2.default.createElement(_Weekdays2.default, {
      locale: locale,
      localeUtils: localeUtils,
      weekdayComponent: weekdayComponent,
      weekdayElement: weekdayElement
    }),
    _react2.default.createElement(
      'div',
      { className: wrapperClassName, role: 'grid' },
      weeks.map(function (week, j) {
        return _react2.default.createElement(
          'div',
          { key: j, className: weekClassName, role: 'gridcell' },
          week.map(function (day) {
            return children(day, month);
          })
        );
      })
    )
  );
}

Month.propTypes = {
  month: _propTypes2.default.instanceOf(Date).isRequired,
  captionElement: _propTypes2.default.node.isRequired,
  firstDayOfWeek: _propTypes2.default.number.isRequired,
  locale: _propTypes2.default.string.isRequired,
  localeUtils: _PropTypes2.default.localeUtils.isRequired,
  onCaptionClick: _propTypes2.default.func,
  children: _propTypes2.default.func.isRequired,
  className: _propTypes2.default.string,
  wrapperClassName: _propTypes2.default.string,
  weekClassName: _propTypes2.default.string,
  weekdayComponent: _propTypes2.default.func,
  weekdayElement: _propTypes2.default.element,
  fixedWeeks: _propTypes2.default.bool
};
//# sourceMappingURL=Month.js.map