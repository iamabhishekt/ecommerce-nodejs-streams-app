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
