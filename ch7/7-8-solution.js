/**
 * 7-8 캡슐화 - 중계자 제거하기
 * 위임, 중계자 = 컴포지션
 */
class Person {
  #name;
  #manager;
  #chargeCode;

  constructor(name, manager, chargeCode) {
    this.#name = name;
    this.#manager = manager;
    this.#chargeCode = chargeCode;
  }

  get name() {
    return this.#name;
  }

  get chargeCode() {
    return this.#chargeCode;
  }

  set chargeCode(arg) {
    this.#chargeCode = arg;
  }

  get manager() {
    return this.#manager;
  }

  set manager(arg) {
    this.#manager = arg;
  }
}

const person = new Person('Tom', 'aManager', '999');
console.log(person.name);
console.log(person.manager);
console.log(person.chargeCode);
