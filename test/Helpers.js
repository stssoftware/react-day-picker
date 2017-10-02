import * as Helpers from '../src/Helpers';

describe('Helpers', () => {
  describe('cancelEvent', () => {
    it('should prevent default and stop propagation', () => {
      const e = { preventDefault: () => {}, stopPropagation: () => {} };
      const preventDefault = jest.spyOn(e, 'preventDefault');
      const stopPropagation = jest.spyOn(e, 'stopPropagation');
      Helpers.cancelEvent(e);
      expect(preventDefault).toHaveBeenCalledTimes(1);
      expect(stopPropagation).toHaveBeenCalledTimes(1);
    });
  });

  describe('getFirstDayOfWeekFromProps', () => {
    it('should return Sunday as default', () => {
      expect(Helpers.getFirstDayOfWeekFromProps({})).toBe(0);
    });

    it('should return the day from localeUtils first', () => {
      const localeUtils = { getFirstDayOfWeek: () => 3 };
      expect(Helpers.getFirstDayOfWeekFromProps({ localeUtils })).toBe(3);
    });
    it('should return the day from a number', () => {
      expect(Helpers.getFirstDayOfWeekFromProps({ firstDayOfWeek: 5 })).toBe(5);
    });
  });

  describe('getWeekArray', () => {
    it('works with a month starting on sunday (en)', () => {
      const weeks = Helpers.getWeekArray(new Date(2015, 10, 1));
      expect(weeks).toHaveLength(5);
      expect(weeks[0][0].getDay()).toBe(0);
      expect(weeks[0][0].getDate()).toBe(1);
      expect(weeks[0][0].getMonth()).toBe(10);
      expect(weeks[0][0].getFullYear()).toBe(2015);
    });

    it('adds days from the previous month to the first week (en)', () => {
      const weeks = Helpers.getWeekArray(new Date(2015, 4, 10));

      expect(weeks).toHaveLength(6);

      // should go back to april
      const firstDay = weeks[0][0];
      expect(firstDay.getDay()).toBe(0);
      expect(firstDay.getDate()).toBe(26);
      expect(firstDay.getMonth()).toBe(3);
      expect(firstDay.getFullYear()).toBe(2015);
    });

    it('adds days from the next month to the last week (en)', () => {
      const weeks = Helpers.getWeekArray(new Date(2015, 8, 19));

      expect(weeks).toHaveLength(5);
      // go to october
      const lastDay = weeks[4][6];
      expect(lastDay.getDate()).toBe(3);
      expect(lastDay.getMonth()).toBe(9);
      expect(lastDay.getFullYear()).toBe(2015);
    });

    it('adds days from the next month to the last week (it)', () => {
      const weeks = Helpers.getWeekArray(new Date(2015, 8, 19), 1);

      expect(weeks).toHaveLength(5);

      const lastDay = weeks[4][6];
      expect(lastDay.getDate()).toBe(4);
      expect(lastDay.getMonth()).toBe(9);
      expect(lastDay.getFullYear()).toBe(2015);
    });

    it('returns 7 days per week when starting day is sunday', () => {
      const weeks = Helpers.getWeekArray(new Date(2015, 6, 1));
      expect(weeks).toHaveLength(5);
      weeks.forEach(week => {
        expect(week).toHaveLength(7);
      });
    });

    it('returns 7 days per week when starting day is monday', () => {
      const weeks = Helpers.getWeekArray(new Date(2015, 6, 1), 1);
      expect(weeks).toHaveLength(5);
      weeks.forEach(week => {
        expect(week).toHaveLength(7);
      });
    });

    it('returns 7 days per week when starting day is saturday', () => {
      const weeks = Helpers.getWeekArray(new Date(2015, 6, 1), 6);
      weeks.forEach(week => {
        expect(week).toHaveLength(7);
      });
    });
  });
});
