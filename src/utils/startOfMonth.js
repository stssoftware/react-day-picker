import _startOfMonth from 'date-fns/startOfMonth';
import dateToUTCDay from './dateToUTCDay';

/**
 * UTC wrapper for date-fns’s `startOfMonth`.
 * 
 * @export
 * @param {any} args 
 * @returns 
 */
export default function startOfMonth(date) {
  return dateToUTCDay(_startOfMonth(dateToUTCDay(date)));
}
