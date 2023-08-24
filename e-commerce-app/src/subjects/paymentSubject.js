export default class PaymentSubject {
  #observers = new Set()

  //notify all the observers
  notify(data) {
    this.#obserers.forEach(observer => observer.update(data))
  }

  // delete observable data 
  unsubscribe(observable) {
    this.#observers.delete(observable)
  }

  subscribe(observable) {
    this.#observers.add(observable)
  }
}