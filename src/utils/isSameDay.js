import _isSameDay from 'date-fns/isSameDay';
import dateToUTCDay from './dateToUTCDay';

/**
 * UTC wrapper for date-fns’s `isSameDay`.
 * 
 * @export
 * @param {any} args 
 * @returns 
 */
export default function isSameDay(dateLeft, dateRight) {
  return _isSameDay(dateToUTCDay(dateLeft), dateToUTCDay(dateRight));
}
