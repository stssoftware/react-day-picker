/**
 * Convert a date to a UTC day.
 * 
 * @export
 * @param {date} date 
 * @returns 
 */
export default function dateToUTCDay(date) {
  return new Date(
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0)
  );
}
