/**
 * 9-4. 참조를 값으로 바꾸기
 * 값 (value) - 불변성, (재할당은 가능)
 * 참조 (reference) - 가변성 
 */
class Person {
  #name;  // 값
  #telephoneNumber;   // 참조

  constructor(name, areaCode, number) {
    this.#name = name;
    this.#telephoneNumber = new TelephoneNumber(areaCode, number);
  }

  get name() {
    return this.#name;
  }

  set name(arg) {
    this.#name = arg;
  }

  get telephoneNumber() {
    return this.#telephoneNumber.toString;
  }

  get officeAreaCode() {
    return this.#telephoneNumber.areaCode;
  }
  // telephoneNumber의 불변성을 지키고, 값이 변경되면 새로운 객체를 만듦
  // telephoneNumber 객체 밖에서 값 변경이 불가능하도록 만듦
  // 재할당만 가능
  set officeAreaCode(value) {
    // this.#telephoneNumber.areaCode = value;
    this.#telephoneNumber = new TelephoneNumber(value, this.officeNumber);
  }

  get officeNumber() {
    return this.#telephoneNumber.number;
  }

  set officeNumber(value) {
    // this.#telephoneNumber.number = value;
    this.#telephoneNumber = new TelephoneNumber(this.officeAreaCode, value);
  }
}

class TelephoneNumber {
  #areaCode;
  #number;
  constructor(area, number) {
    this.#areaCode = area;
    this.#number = number;
  }

  get areaCode() {
    return this.#areaCode;
  }
  // set areaCode(arg) {
  //   this.#areaCode = arg;
  // }

  get number() {
    return this.#number;
  }
  // set number(arg) {
  //   this.#number = arg;
  // }

  get toString() {
    return `(${this.#areaCode}) ${this.#number}`;
  }
}

const person = new Person('엘리', '010', '12345678');
console.log(person.name);
console.log(person.officeAreaCode);
console.log(person.officeNumber);
console.log(person.telephoneNumber);
