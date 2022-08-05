/**
 * 10-5 특이 케이스 추가하기
 */
export class Site {
  constructor(customer) {
    this._customer = customer;
  }

  get customer() {
    return this._customer === 'unknown' 
                          ? new UnknwonCustomer()
                          : new Customer(this._customer.name);
  }
}

class UnknwonCustomer extends Customer{
  get name(){
    return 'occupant';
  }
}

export class Customer {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  get billingPlan() {
    //
  }

  set billingPlan(arg) {
    //
  }

  get paymentHistory() {
    //
  }
}

// 사용하는 부분
export function customerName(site) {
  const aCustomer = site.customer;
  // 더 많은 코드가 여기에 있음
  let customerName = aCustomer.name;
  return customerName;
}
