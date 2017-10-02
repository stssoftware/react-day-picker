import _isBefore from 'date-fns/isBefore';
import dateToUTCDay from './dateToUTCDay';

/**
 * UTC wrapper for date-fns’s `isBefore`.
 * 
 * @export
 * @param {any} args 
 * @returns 
 */
export default function isDayBefore(date, dateToCompare) {
  return _isBefore(dateToUTCDay(date), dateToUTCDay(dateToCompare));
}
