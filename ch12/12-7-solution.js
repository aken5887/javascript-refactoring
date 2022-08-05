/**
 * 12-7. 서브클래스 제거하기
 */
class Person {
  #name;
  #genderCode;
  constructor(name, genderCode) {
    this.#name = name;
    this.#genderCode = genderCode;
  }

  get name() {
    return this.#name;
  }

  get genderCode() {
    return this.#genderCode;
  }

  static create(record){
    switch(record.gender){
      case 'M':
        return new Person(record.name, 'M');
      case 'F':
        return new Person(record.name, 'F');
      default:
        return new Person(record.name, 'X');
    }
  }

  get isMale() {
    return this.#genderCode === 'M';
  }
}

function loadFromInput(data) {
  const result = [];
  data.forEach((record) => {
    // result.push(new Person(record.name, record.gender));
    result.push(Person.create(record));
  });
  return result;
}

const people = loadFromInput([
  { name: '엘리', gender: 'F' },
  { name: '철수', gender: 'M' },
  { name: '밥', gender: 'N' },
]);
people.forEach(
  (p) => console.log(`name is ${p.name} and genderCode is ${p.genderCode}`)
);
const numberOfMales = people.filter((p) => p.isMale).length;
console.log(numberOfMales);
