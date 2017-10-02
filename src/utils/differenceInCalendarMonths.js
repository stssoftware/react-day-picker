import _differenceInCalendarMonths from 'date-fns/differenceInCalendarMonths';
import dateToUTCDay from './dateToUTCDay';

/**
 * UTC wrapper for date-fns’s `differenceInCalendarMonths`.
 * 
 * @export
 * @param {any} args 
 * @returns 
 */
export default function differenceInCalendarMonths(d1, d2) {
  return _differenceInCalendarMonths(dateToUTCDay(d1), dateToUTCDay(d2));
}
