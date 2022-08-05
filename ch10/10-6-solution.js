/**
 * 10-6. 어서션 추가하기
 */
import {strict as assert } from 'node:assert';

class Customer {
  constructor() {
    this.discountRate = 0;
  }
  applyDiscount(number) {
    console.assert(number >= 0);    // 운영에서는 우아한처리가 필요함
    
    return this.discountRate ? number - this.discountRate * number : number;
  }
}

new Customer().applyDiscount(-1);