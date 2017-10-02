/**
 * Clone a date object.
 *
 * @export
 * @param  {Date} d The date to clone
 * @return {Date} The cloned date
 */
export function clone(d) {
  return new Date(d.getTime());
}

export default {
  clone,
};
