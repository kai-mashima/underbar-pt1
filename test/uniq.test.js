const _ = require('../underbar');

describe('uniq()', () => {
  it('de-dups a list of numbers', () => {
    const nums = [2, 4, 5, 5, 7, 4, 10, 2];
    expect(_.uniq(nums)).toEqual([2, 4, 5, 7, 10]);
  });

  it('de-dups a string', () => {
    const str = 'bbabcbobnb';
    expect(_.uniq(str)).toEqual(['b','a','c','o','n']);
  });
});