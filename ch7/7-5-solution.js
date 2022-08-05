const { times } = import("lodash");
/**
 * 7.5 캡슐화 - 클래스 추출하기
 * 클래스 하나당 하나의 도메인, 하나의 책임, 하나의 역할
 */
class Person {
  #name;
  #telephoneNumber;

  constructor(name, areaCode, number) {
    this.#name = name;
    this.#telephoneNumber = new TelePhoneNumber(areaCode, number);
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

  get areaCode() {
    return this.#telephoneNumber.areaCode;
  }

  get number() {
    return this.#telephoneNumber.number;
  }

  set areaCode(arg) {
    this.#telephoneNumber.areaCode = arg;
  }

  set number(arg) {
    this.#telephoneNumber.number = arg;
  }
 
}

class TelePhoneNumber{
  #areaCode;
  #number;

  constructor(areaCode, number){
    this.#areaCode = areaCode;
    this.#number = number;
  }

  get areaCode(){
    return this.#areaCode;
  }

  get number(){
    return this.#number;
  }

  set areaCode(value){
    this.#areaCode = value;
  }

  set number(value){
    this.#number = value;
  }

  get toString(){
    return `(${this.#areaCode}) ${this.#number}`;
  }

}

const person = new Person('엘리', '010', '12345678');
console.log(person.name);
console.log(person.areaCode);
console.log(person.number);
console.log(person.telephoneNumber);
