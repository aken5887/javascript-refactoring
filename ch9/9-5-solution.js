/**
 * 9-5 값을 참조로 바꾸기
 * 값이 변경되는 것이 다른 객체에 영향을 줄 때 -> 값을 참조로 사용하는 것이 더 유용
 */

class Order {
  constructor(number, customer) {
    this._number = number;
    // this._customers = new Customers(data.customersId);
    this._customers = customer;
  }

  get customers() {
    return this._customers;
  }
}

class Customers {
  constructor(id) {
    this._id = id;
  }

  get id() {
    return this._id;
  }
}

/**
 * unique 함을 보장하는 repository 패턴 
 */
class CustomerRepository {
  #customers;

  constructor() {
    this.#customers = new Map();
  }

  findCustomer(id){
    return this.#customers.get(id);
  }

  registerCustomers(id) {
    if(!this.#customers.has(id)){
      this.#customers.set(id, new Customers(id));
    }
    return this.findCustomer(id);
  }
}

const customerRepository = new CustomerRepository();
const data = {number : '010-0000-000', customerId : '0000'};
const order = new Order(data.number, 
              customerRepository.registerCustomers(data.customerId));

console.log(order);