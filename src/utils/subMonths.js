import _subMonths from 'date-fns/subMonths';
import dateToUTCDay from './dateToUTCDay';

/**
 * UTC wrapper for date-fns’s `subMonths`.
 * 
 * @export
 * @param {any} args 
 * @returns 
 */
export default function subMonths(...args) {
  return dateToUTCDay(_subMonths(...args));
}
