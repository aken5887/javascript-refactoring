/*
  6.10 여러함수를 변환함수(enrichReading)로 묶기 
*/
import _ from 'lodash';

const reading = { customer: 'ivan', quantity: 10, month: 5, year: 2017 };

export function acquireReading() {
  return reading;
}

export function enrichReading(original){
  // const result = {...original};   // spread operator, Object.assign : 얕은 복사
  const result = _.cloneDeep(original);
  result.baseCharge = caculateBaseCharge(result);
  result.taxableCharge = Math.max(
    0,
    result.baseCharge - taxThreshold(result.year));
  
  return result;
}

function caculateBaseCharge(reading){
  return baseRate(reading.month, reading.year) * reading.quantity;
}

function taxThreshold(year) {
  return 0.1;
}

export function baseRate(month, year) {
  if (year === 2017 && month === 5) return 0.1;
  return 0.2;
}
