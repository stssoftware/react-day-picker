import _isAfter from 'date-fns/isAfter';
import dateToUTCDay from './dateToUTCDay';

/**
 * UTC wrapper for date-fns’s `isAfter`.
 * 
 * @export
 * @param {any} args 
 * @returns 
 */
export default function isDayAfter(date, dateToCompare) {
  return _isAfter(dateToUTCDay(date), dateToUTCDay(dateToCompare));
}
