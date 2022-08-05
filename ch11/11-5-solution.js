/**
 * 11-5. 매개변수를 질의 함수로 바꾸기
 * 재사용성, 가독성, 유지보수성 
 */
export class Order {

  constructor(quantity, itemPrice) {
    this.quantity = quantity;
    this.itemPrice = itemPrice;
  }

  get basePrice(){
    return this.quantity * this.itemPrice;
  }

  get finalPrice() {
    return this.#discountedPrice;
  }

  get discountlevel() {
    return this.quantity > 100 ? 2:1;
  }

  get #discountedPrice() {
    switch(this.discountlevel){
      case 1:
        return this.basePrice * 0.95;
      case 2:
        return this.basePrice * 0.9;
    }
  }
}

const orders = new Order(100, 50000);
console.log(orders.basePrice);
console.log(orders.discountlevel);
console.log(orders.finalPrice);
