/**
 * 7-4 캡슐화 - 임시 변수를 질의 함수(get함수)로 바꾸기
 */
class Order {
  #quantity;
  #item;
  constructor(quantity, item) {
    this.#quantity = quantity;
    this.#item = item;
  }

  get basePrice(){
    return this.#quantity * this.#item.price;
  }

  get discountFactor(){
    // let discountFactor = 0.98;
    // if (this.basePrice > 1000) discountFactor -= 0.03;
    // return discountFactor;
    return this.basePrice > 1000 ? 0.95 : 0.98;
  }

  get price() {
    // const basePrice = this.#quantity * this.#item.price;
    // const discountFactor = 0.98;
    // if (basePrice > 1000) discountFactor -= 0.03;
    return this.basePrice * this.discountFactor;
  }
}

const order = new Order(100, {price : '5000'});
console.log(order.basePrice);
console.log(order.discountFactor);
console.log(order.price);