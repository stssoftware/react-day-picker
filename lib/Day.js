'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Day;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable jsx-a11y/no-static-element-interactions, react/forbid-prop-types */

function handleEvent(handler, day, modifiers) {
  if (!handler) {
    return undefined;
  }
  var dayState = {};
  modifiers.forEach(function (modifier) {
    dayState[modifier] = true;
  });
  return function (e) {
    e.persist();
    handler(e, day, dayState);
  };
}
function Day(_ref) {
  var day = _ref.day,
      tabIndex = _ref.tabIndex,
      empty = _ref.empty,
      modifiers = _ref.modifiers,
      onMouseEnter = _ref.onMouseEnter,
      onMouseLeave = _ref.onMouseLeave,
      onClick = _ref.onClick,
      onKeyDown = _ref.onKeyDown,
      onTouchStart = _ref.onTouchStart,
      onTouchEnd = _ref.onTouchEnd,
      onFocus = _ref.onFocus,
      ariaLabel = _ref.ariaLabel,
      ariaDisabled = _ref.ariaDisabled,
      ariaSelected = _ref.ariaSelected,
      children = _ref.children;

  var className = 'DayPicker-Day';
  className += modifiers.map(function (modifier) {
    return ' ' + className + '--' + modifier;
  }).join('');
  if (empty) {
    return _react2.default.createElement('div', { role: 'gridcell', 'aria-disabled': true, className: className });
  }
  return _react2.default.createElement(
    'div',
    {
      className: className,
      tabIndex: tabIndex,
      role: 'gridcell',
      'aria-label': ariaLabel,
      'aria-disabled': ariaDisabled.toString(),
      'aria-selected': ariaSelected.toString(),
      onClick: handleEvent(onClick, day, modifiers),
      onKeyDown: handleEvent(onKeyDown, day, modifiers),
      onMouseEnter: handleEvent(onMouseEnter, day, modifiers),
      onMouseLeave: handleEvent(onMouseLeave, day, modifiers),
      onTouchEnd: handleEvent(onTouchEnd, day, modifiers),
      onTouchStart: handleEvent(onTouchStart, day, modifiers),
      onFocus: handleEvent(onFocus, day, modifiers)
    },
    children
  );
}

Day.propTypes = {
  day: _propTypes2.default.instanceOf(Date).isRequired,
  children: _propTypes2.default.node.isRequired,

  ariaDisabled: _propTypes2.default.bool,
  ariaLabel: _propTypes2.default.string,
  ariaSelected: _propTypes2.default.bool,
  empty: _propTypes2.default.bool,
  modifiers: _propTypes2.default.array,
  onClick: _propTypes2.default.func,
  onKeyDown: _propTypes2.default.func,
  onMouseEnter: _propTypes2.default.func,
  onMouseLeave: _propTypes2.default.func,
  onTouchEnd: _propTypes2.default.func,
  onTouchStart: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  tabIndex: _propTypes2.default.number
};

Day.defaultProps = {
  modifiers: [],
  empty: false
};
//# sourceMappingURL=Day.js.map