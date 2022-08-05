/**
 * 11-13. 예외를 사전확인으로 바꾸기
 * ** 예외를 남발하지 않도록 주위 (예상되는 예외 인경우)
 */
const values = [];
function getValueForPeriod(periodNumber) {
  // if(periodNumber < 0 || periodNumber >= values.length){
  //   return 0;
  // }
  // return values[periodNumber];
  return values[periodNumber] ?? 0;
}

values.push(1);
values.push(2);

console.log(getValueForPeriod(1));
console.log(getValueForPeriod(4));