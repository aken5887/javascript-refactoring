/**
 * 7.6 캡슐화 - 클래스 인라인하기
 */
export class Shipment {
  #shippingCompany;
  #trackingNumber;

  constructor(trackingNumber, shippingCompany) {
    this.#trackingNumber = trackingNumber;
    this.#shippingCompany = shippingCompany;
  }

  get trackingInfo() {
    return `${this.#shippingCompany}: ${this.#trackingNumber}`;
  }

  get shippingCompany(){
    return this.#shippingCompany;
  }

  set shippingCompany(value){
    this.#shippingCompany = value;
  }
}

const shipment = new Shipment(999, 'Maersk');
console.log(shipment.trackingInfo);

shipment.shippingCompany = 'COSCO';
console.log(shipment.trackingInfo);
