import * as DateUtils from '../src/DateUtils';

describe('DateUtils', () => {
  describe('clone', () => {
    it('should clone a date', () => {
      const date = new Date();
      const newDate = DateUtils.clone(date);
      expect(newDate).not.toBe(date);
    });
  });
});
