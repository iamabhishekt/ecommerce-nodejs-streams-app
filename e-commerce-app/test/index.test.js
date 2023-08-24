import {expect, describe, test} from '@jest/globals'
import Payment from '../src/events/payments.js';
import Marketing from '../src/observers/marketing.js';
import Shipment from '../src/observers/shipment.js';
import PaymentSubject from '../src/subjects/paymentSubject.js';

describe('Test Suite for Observer Pattern', () => {
  test.todo('#PaymentSubject notify observers');
  test.todo('#PaymentSubject should not notify unsubscribed observers');
  test.todo('#Payment should  notify subject after a credit card transaction');
  test.todo('#All should notify subscribers after a credit card payment');
});