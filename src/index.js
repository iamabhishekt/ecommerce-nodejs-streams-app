import Payment from "./events/payments.js";
import Marketing from "./observers/marketing.js";
import Shipment from "./observers/shipment.js";
import PaymentSubject from "./subjects/paymentSubject.js";

//subject engine
const subject = new PaymentSubject()

const marketing = new Marketing()
subject.subscribe(marketing);

const shipment = new Shipment()
subject.subscribe(shipment);

//instantiate payment
const payment = new Payment(subject) 
payment.creditCard({id: 1, userName: 'Abhishek', age: 25 });

subject.unsubscribe(marketing);

//this will only trigger the shipment area
payment.creditCard({id: 2, userName: 'Thakur', age: 27 });