/**
 * 12-6. 타입 코드를 서브클래스로 바꾸기
 * ** type : 어떤 타입이 인자로 전달 되어야 하는지 알기 어려움
 * ** 생성자에서 error를 던지는 것은 좋지 않은 코드이다.
 */
class Employee {
  #name;
  constructor(name) {
    this.#name = name;
  }

  get type(){
    return 'employee';
  }

  toString() {
    return `${this.#name} (${this.type})`;
  }

  /** 가변적으로 type을 받아야 하는경우 팩토리 메서드로 제공 */
  static createEmployee(name, type){
    switch(type){
      case 'engineer':
        return new Engineer(name);
      case 'manager':
        return new Manager(name);
      default:
        throw new Error(`${type}라는 직원 유형은 없습니다.`);
    }
  }
}
// 서브 클래스1
class Engineer extends Employee {
  get type(){
    return 'engineer';
  }
}
// 서브 클래스2
class SalesPerson extends Employee {
  get type(){
    return 'salesperson';
  }
}
// 서브 클래스3
class Manager extends Employee {
  get type(){
    return 'manager';
  }
}

const ellie = new Engineer('엘리');
const bob = new Manager('밥');

console.log(ellie.toString());
console.log(bob.toString());

const err = Employee.createEmployee('용', 'managers');
console.log(err.toString());