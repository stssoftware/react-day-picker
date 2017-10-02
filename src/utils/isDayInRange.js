import isSameDay from './isSameDay';
import isDayBetween from './isDayBetween';

/**
 * Return `true` if a day is included in a range of days.
 *
 * @export
 * @param  {Date}  day
 * @param  {Object}  range
 * @return {Boolean}
 */
export default function isDayInRange(day, range) {
  const { from, to } = range;
  return (
    (from && isSameDay(day, from)) ||
    (to && isSameDay(day, to)) ||
    (from && to && isDayBetween(day, from, to))
  );
}
