/*
  변수 추출하기
*/
export class Order {
  #data;  // private field
  
  constructor(aRecord) {
    this.#data = aRecord;
  }

  get quantity() {
    return this.#data.quantity;
  }
  get itemPrice() {
    return this.#data.itemPrice;
  }

  get price() {
    return this.basePrice-this.discount+this.shipping;
  }

  get basePrice() {
    return this.quantity * this.itemPrice;
  }

  get discount(){
    return Math.max(0, this.quantity - 500) * this.itemPrice * 0.05;
  }

  get shipping(){
    return Math.min(this.quantity * this.itemPrice * 0.1, 100);
  }
}

const input = {
  itemPrice : '10000',
  quantity : '10'
};

const customOrder = new Order(input);
console.log(customOrder.price);