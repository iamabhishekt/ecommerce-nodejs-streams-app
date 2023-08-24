export default class Payment {
  constructor(subject) {
    this.paymentSubject = this.paymentSubject;
  }

  creditCard(paymentData) {
    console.log(`\na payment occurred from ${paymentData.description}`);
    this.paymentSubject.notify(paymentData);
  }
}
