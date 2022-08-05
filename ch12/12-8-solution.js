/**
 * 12-8. 슈퍼클래스 추출하기
 */
class Party {
  constructor(name, annualCost){
    this._name = name;
    this._annualCost = annualCost;
  }
  get name() {
    return this._name;
  }
  get annualCost() {
    return this._annualCost;
  }
}

class Department extends Party{
  get headCount() {}
}

class Employee extends Party{
  get id() {}
}

const b = new Party('yong', 500000);
console.log(b.name);
console.log(b.annualCost);