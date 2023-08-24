import {expect, describe, test, jest} from '@jest/globals'
import Payment from '../src/events/payments.js';
import Marketing from '../src/observers/marketing.js';
import Shipment from '../src/observers/shipment.js';
import PaymentSubject from '../src/subjects/paymentSubject.js';

describe('Test Suite for Observer Pattern', () => {
  test('#PaymentSubject notify observers', () => {
    const subject = new PaymentSubject()
    const observer = {
      update: jest.fn()
    }
    const data = 'hello world';
    const expected = data;

    subject.subscribe(observer)
    subject.notify(data)

    expect(observer.update).toBeCalledWith(expected)
  });

  test.todo('#PaymentSubject should not notify unsubscribed observers');
  test.todo('#Payment should  notify subject after a credit card transaction');
  test.todo('#All should notify subscribers after a credit card payment');
});