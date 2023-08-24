export default class Payment {
  constructor(paymentSubject) {
    this.paymentSubject = paymentSubject;
  }

  creditCard({id, userName, age}) {
    console.log(`\nA payment occurred from ${userName}`);
    this.paymentSubject.notify({id, userName});
  }
}
