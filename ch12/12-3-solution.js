/**
 * 12-3. 생성자 본문 올리기
 */
class Party {
  #name;
  constructor(name){
    this.#name = name;
  }
  get toString(){
    console.log('Party toString method has called');
  }
}

class Employee extends Party {
  #id;
  #monthlyCost;
  constructor(name, id, monthlyCost) {
    super(name);
    this.#id = id;
    this.#monthlyCost = monthlyCost;
  }
  get toString(){
    console.log(`${this.#id} and ${this.#monthlyCost} !`);
  }
}

class Department extends Party {
  #staff;
  constructor(name, staff) {
    super(name);
    this.#staff = staff;
  }
  
  get toString() {
    console.log(`${this.#staff} !`);
  }
}

const ellie = new Employee('엘리', 123, 13);
const department = new Department('개발부서', 'ellie');
ellie.toString;
department.toString;