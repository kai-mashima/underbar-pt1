const _ = require('../underbar');

describe('pluck()', () => {
  it('returns an array of just ages, given an array of people objects', () => {
    const people = [
      { name: 'Harriet', age: 12},
      { name: 'Lazarus', age: 999},
      { name: 'Bethany', age: 14}
    ];
    const result = _.pluck(people, 'age');
    expect(result).toEqual([12, 999, 14]);
  });

  it('returns an array of just city names, given an array of places objects', () => {
    const places = [
      { name: 'SF'},
      { name: 'LA'},
      { name: 'NY'}
    ];
    const result = _.pluck(places, 'name');
    expect(result).toEqual(['SF', 'LA', 'NY']);
  });

});