import _addMonths from 'date-fns/addMonths';
import dateToUTCDay from './dateToUTCDay';

/**
 * UTC wrapper for date-fns’s `addMonths`.
 * 
 * @export
 * @param {any} args 
 * @returns 
 */
export default function addMonths(...args) {
  return dateToUTCDay(_addMonths(...args));
}
