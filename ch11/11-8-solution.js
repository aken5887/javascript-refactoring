/**
 * 11-8. 생성자를 팩터리 함수로 바꾸기
 */
// 클래스 외부에서 인스턴스를 만들때 
// 복잡한 생성자를 그대로 사용하는 것이 아니라
// 생성자를 private 필드로 선언하여 캡슐화 한다음
// 인스턴스를 만들수 있는 팩토리 함수를 사용
export class Employee {
  constructor(name, typeCode) {
    this._name = name;
    this._typeCode = typeCode;
  }
  get name() {
    return this._name;
  }

  get type() {
    return Employee.legalTypeCodes[this._typeCode];
  }

  static get legalTypeCodes() {
    return { E: 'Engineer', M: 'Manager', S: 'Salesman' };
  }

  static createEngineer(name){
    return new Employee(name, 'E');
  }

  static createSeniorEngineer(name){
    return new Employee(name, 'SE');
  }
}

// const emplyoee = new Employee('ellie', 'E');
const employee = Employee.createEngineer('ellie');
