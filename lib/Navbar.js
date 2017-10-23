'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavbarPropTypes = undefined;
exports.default = Navbar;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var buttonBaseClass = 'DayPicker-NavButton DayPicker-NavButton';

function Navbar(_ref) {
  var className = _ref.className,
      showPreviousButton = _ref.showPreviousButton,
      showNextButton = _ref.showNextButton,
      onPreviousClick = _ref.onPreviousClick,
      onNextClick = _ref.onNextClick,
      dir = _ref.dir;

  var previousClickHandler = dir === 'rtl' ? onNextClick : onPreviousClick;
  var nextClickHandler = dir === 'rtl' ? onPreviousClick : onNextClick;

  var previousButton = showPreviousButton && _react2.default.createElement('span', {
    role: 'button',
    key: 'previous',
    className: buttonBaseClass + '--prev',
    onClick: function onClick() {
      return previousClickHandler();
    }
  });

  var nextButton = showNextButton && _react2.default.createElement('span', {
    role: 'button',
    key: 'right',
    className: buttonBaseClass + '--next',
    onClick: function onClick() {
      return nextClickHandler();
    }
  });

  return _react2.default.createElement(
    'div',
    { className: className },
    dir === 'rtl' ? [nextButton, previousButton] : [previousButton, nextButton]
  );
}

var NavbarPropTypes = exports.NavbarPropTypes = {
  className: _propTypes2.default.string,
  showPreviousButton: _propTypes2.default.bool,
  showNextButton: _propTypes2.default.bool,
  onPreviousClick: _propTypes2.default.func,
  onNextClick: _propTypes2.default.func,
  dir: _propTypes2.default.string
};

Navbar.propTypes = NavbarPropTypes;

Navbar.defaultProps = {
  className: 'DayPicker-NavBar',
  dir: 'ltr',
  showPreviousButton: true,
  showNextButton: true
};
//# sourceMappingURL=Navbar.js.map