/**
 * 12-4. 메서드 내리기
 * 특정한 서브클래스에서만 사용한다면 그 서브클래스의 특징으로
 * 사용하는게 낫다.
 */
class Employee {}

class Engineer extends Employee {}
class Salesperson extends Employee {
  get quota() {}
}
