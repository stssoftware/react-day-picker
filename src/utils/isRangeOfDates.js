/**
 * Return `true` if a day is included in a range of days.
 *
 * @export
 * @param  {Date}  day
 * @param  {Object}  range
 * @return {Boolean}
 */
export default function isRangeOfDates(value) {
  return !!(value && value.from && value.to);
}
