import isDayAfter from './isDayAfter';
import isDayBefore from './isDayBefore';

/**
 * Return `true` if day `d` is between days `d1` and `d2`,
 * without including them.
 *
 * @export
 * @param  {Date}  d
 * @param  {Date}  d1
 * @param  {Date}  d2
 * @return {Boolean}
 */
export default function isDayBetween(d, d1, d2) {
  return (
    (isDayAfter(d, d1) && isDayBefore(d, d2)) ||
    (isDayAfter(d, d2) && isDayBefore(d, d1))
  );
}
