/*
  6.6 변수 캡슐화 하기
    - 객체 자체는 mutable함 (변경가능) -> setter가 없는 class 사용
*/
class Person{
  #firstName;
  #lastName;

  constructor(data){
      this.#firstName = data.firstName;
      this.#lastName = data.lastName;
  }
  
  get firstName(){
    return this.#firstName;
  }

  get lastName(){
    return this.#lastName;
  }
}
// 
let defaultOwner = new Person({ firstName: '마틴', lastName: '파울러' });

// 불변성
export function getDefaultOwner() {
  return defaultOwner;    // referece - 참조값 반환
  // return {...defaultOwner}; // (얕은복사) 기존의 객체를 하나씩 풀어서 새로운 객체로 만듬
}
