/**
 * 10-4. 조건부 로직을 다형성으로 바꾸기
 * [high level] 어떻게 모듈화 할 것 인지? 어떻게 상호작용 할 것인지?
 */
/**
 * 문제점 1: 새의 유형이 추가 될 때 switch문을 쓰는 모든 곳을 찾아서 
 * 조건을 추가해야 함 -> 부담스러운 유지보수
 * -> 객체의 속성에 따라 변수가 결정된다면 클래스 화 하여 다형성을 활용
 */
export function plumages(birds) {
  let map = birds.map((b) => [b.name, b.plumage]);
  let map1 = new Map(map);
  birds.map((b) => {
      console.log(b.name +"/"+b.voltage);
  });
  return map1;
}
export function speeds(birds) {
  return new Map(birds.map((b) => [b.name, b.airSpeedVelocity]));
}


class Bird {
  #name;
  constructor(name, numberOfCoconuts, voltage, isNailed){
    this.#name = name;
    this.numberOfCoconuts = numberOfCoconuts;
    this.voltage = voltage;
    this.isNailed = isNailed;
  }
  get name() {
    return this.#name;
  }
  get plumage() {
    return 'unknown';
  }
  get airSpeedVelocity() {
    return null;
  }
}

class EuropeanSwallow extends Bird {
  constructor(){
    super('EuropeanSwallow');
  }
  get plumage() {
    return 'average';
  }
  get airSpeedVelocity(){
    return 35;
  }
}

class AfricanSwallow extends Bird {
  constructor(numberOfCoconuts){
    super('AfricanSwallow', numberOfCoconuts);
  }
  get plumage() {
    console.log(this.numberOfCoconuts);
    return this.numberOfCoconuts > 2 ? 'tired' : 'average';
  }
  get airSpeedVelocity(){
    return 35;
  }
}

class NorwegianBlueParrot extends Bird {
  constructor(voltage, isNailed) {
    super('NorwegianBlueParrot',0, voltage, isNailed);
  }
  get plumage() {
    console.log(this.voltage);
    return this.voltage > 100 ? 'scorched' : 'beautiful';
  }
  get airSpeedVelocity(){
    return this.isNailed ? 0 : 10 + this.voltage / 10;
  }
}

const result = plumages([new NorwegianBlueParrot(200, false), 
                        new AfricanSwallow(5)]);

console.log(result);