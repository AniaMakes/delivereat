const menu = require('../lib/menu')()();
const tallyUpSingleOrder = require('../lib/tally');


describe('tally', function() {
  test.only('tally tallies', () => {

    let order = ['ST01-1', 'ST02-1'];
    let out = tallyUpSingleOrder(order, menu);

    expect(out).toEqual({
      orderContent: [['Satay chicken', '1'], ['Spring rolls', '1']],
      total: 7.5
    });
  });

  test('tally 3', () => {
    let order = ['ST01-1', 'ST03-200', 'ST05-2'];
    let out = tallyUpSingleOrder(order, menu);

    expect(out).toEqual({
      orderContent: [['Satay chicken', '1'], ['Garlic bread', '200'], ['Poppadum', '2']],
      total: 509.5
    });
  });

});
