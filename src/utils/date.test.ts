import {formatDate} from './date';

describe('Utils Date', () => {
  it('should format a date', () => {
    const formatted = formatDate('1999-12-25');
    expect(formatted).toEqual('12-25-1999');
  });
});
