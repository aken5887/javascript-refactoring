/*
  6.8 매개변수 객체 만들기
*/
export function readingsOutsideRange(station, rage) {
  // return station.readings
  //               .filter((r) => r.temp < rage.min || r.temp > rage.max);
  // 1. 매개변수를 하나의 객체로 묶기
  // 2. 객체 안에 유용한 함수를 만들수 있는지 여부 고민
  return station.readings.filter((r) => !rage.contains(r.temp));
}


export class NumberRange{
  #min;
  #max;

  constructor(min, max){
    this.#max = max;
    this.#min = min;
  }

  get min(){
    return this.#min;
  }

  get max(){
    return this.#max;
  }

  contains(number){
    return number >= this.#min && number <= this.#max;
  }

}

const station = {
  name: 'ZB1',
  readings: [
    { temp: 47, time: '2016-11-10 09:10' },
    { temp: 53, time: '2016-11-10 09:20' },
    { temp: 58, time: '2016-11-10 09:30' },
    { temp: 53, time: '2016-11-10 09:40' },
    { temp: 51, time: '2016-11-10 09:50' },
  ],
};

const operationPlan = new NumberRange(51, 53);

const result = readingsOutsideRange(station, operationPlan);

console.log(result);