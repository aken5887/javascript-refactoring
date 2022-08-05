/**
 * 12-1. 메서드 올리기
 */
// 예시 1
// 공통된 메소드는 부모 객체로 올리기
// 중복을 피하고, 코드 재사용성을 높임, 공통적인 규격을 약속 할 수있음
class Employee {
  get name() {}
}

class Salesperson extends Employee {}

class Engineer extends Employee {}

// 예시 2
class Party {
  get annualCost(){ return this.monthlyCost * 12;}
}

class Department extends Party {}
class Employee extends Party {}
