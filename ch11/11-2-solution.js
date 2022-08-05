/**
 * 11-2. 함수 매개변수화 하기
 * 공통되는 부분은 함수로 변경하고, 다른 부분은 매개변수화 하기
 * 중복성을 줄이고 유지보수성을 높이기
 */
// 예제 1
// function tenPercentRaise(person) {
//   person.salary = person.salary.multiply(1.1);
// }

import { isMatchWith } from "lodash";

// function fivePercentRaise(person) {
//   person.salary = person.salary.multiply(1.05);
// }

function raise(person, factor){
  person.salary = person.salary.multiply(1 + factor);
}

// 예제 2
// 기존로직에 대한 이해도가 있어야함
// 반드시 유닛 테스트 코드가 있어야 함
export function baseCharge(usage) {
  if (usage < 0) return usd(0);
  const amount =
    withinBand(usage, 0, 100) * 0.03 
    + withinBand(usage, 100, 200) * 0.05 
    + withinBand(usage, 200, Infinity) * 0.07;
  return usd(amount);
}

function withinBand(usage, bottom, top){
  return usage > bottom ? Math.min(usage, top) - bottom : 0;
}

function usd(value) {
  return {
    currency: '$',
    currencyName: 'USD',
    value: value,
  };
}
