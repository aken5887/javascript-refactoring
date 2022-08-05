/**
 * 9-3. 파생 변수를 질의 함수로 바꾸기
 * 불변셩이 아닌경우 -> 모듈 내 가변데이터가 있는 경우
 * 해당 변수를 호출하는 순간 계산하도록 변경하기 (질의함수) 
 * 질의 함수 : 연산을 통해 값을 계산하여 반환하는 함수
 */
// 예제 1
class Order {
  // 다른 코드 있다고 가정
  get discountedTotal() {
    // return this._discountedTotal;
    return this._basePrice - this._discount;
  }
  // discount를 set하면서 다른 변수도 update 하고 있음 -> bad smell
  set discount(value) {
    // const old = this._discount;
    this._discount = value;
    // this._discountedTotal += old - value;
  }
}

// 예제 2
class ProductionPlan {
  // 다른 코드 있다고 가정
  get production() {
    // return this._production;
    return this_adjustments.reduce((sum, a) => sum.a.amount,0)
  }
  applyAdjustment(adjustment) {
    this._adjustments.push(adjustment);
    // this._production += adjustment.amount;
  }
}
